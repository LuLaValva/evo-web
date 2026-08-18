/* Behavior for both viewer pages. The build ships finished HTML — frames
   (static srcdoc), inspector and text diff are already rendered — so this
   file only enhances: the shared story list, review state, keyboard
   shortcuts, and (on story pages) compare mode, theme and highlight toggles
   and frame measuring.

   PAGE is null on the index and carries slug/hash/position on story pages.
   NAV (../assets/nav.js) holds the story list both pages render. */
"use strict";

const onStoryPage = PAGE !== null;
const hrefPrefix = onStoryPage ? "" : "s/";

// ---------- review state ----------
// Opening a story page IS the review action: browsers style visited links,
// and this localStorage mirror powers the index progress counter. Flags mark
// diffs needing follow-up. Both are keyed by slug and stamped with the diff's
// content hash, so a story that changes on a later push reverts to unviewed.
function readStore(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch {
    return {};
  }
}
function writeStore(key, obj) {
  try {
    localStorage.setItem(key, JSON.stringify(obj));
  } catch {
    /* storage may be unavailable (private mode); reviewing still works */
  }
}

if (onStoryPage) {
  const viewed = readStore("vp:viewed");
  viewed[PAGE.slug] = PAGE.hash;
  writeStore("vp:viewed", viewed);
}
const isFlagged = () => readStore("vp:flags")[PAGE.slug] === PAGE.hash;
function setFlagged(on) {
  const flags = readStore("vp:flags");
  if (on) flags[PAGE.slug] = PAGE.hash;
  else delete flags[PAGE.slug];
  writeStore("vp:flags", flags);
}

// ---------- cross-page view preferences ----------
const PREF_KEY = "vp:prefs";
const prefs = readStore(PREF_KEY);
const state = {
  mode: prefs.mode === "flip" ? "flip" : "side",
  view: "rendered", // rendered | diff
  theme: prefs.theme === "dark" ? "dark" : "light",
  highlights: prefs.highlights === true,
  filter: "",
};
function savePrefs() {
  writeStore(PREF_KEY, {
    mode: state.mode,
    theme: state.theme,
    highlights: state.highlights,
  });
}

// ---------- story list (identical on every page) ----------
const listEl = document.getElementById("storylist");
const searchEl = document.getElementById("search");

function chipFor(item) {
  return item.dims > 1 ? item.dims + " dims" : item.suffix || null;
}
function addChip(a, text, className) {
  const chip = document.createElement("span");
  chip.className = className;
  chip.textContent = text;
  a.appendChild(chip);
}
function buildList() {
  const viewed = readStore("vp:viewed");
  const flags = readStore("vp:flags");
  const filter = state.filter.trim().toLowerCase();
  listEl.textContent = "";
  let lastComponent = null;
  let activeLink = null;
  for (const item of NAV.entries) {
    const text = `${item.component} ${item.story} ${item.qualifier || ""}`;
    if (filter && !text.toLowerCase().includes(filter)) continue;
    if (item.component !== lastComponent) {
      lastComponent = item.component;
      const h = document.createElement("h2");
      h.textContent = item.component;
      listEl.appendChild(h);
    }
    const a = document.createElement("a");
    a.className = "story";
    a.href = hrefPrefix + item.slug + ".html";
    a.title = item.file;
    if (onStoryPage && item.slug === PAGE.slug) {
      a.classList.add("active");
      activeLink = a;
    }
    if (viewed[item.slug] === item.hash) a.classList.add("viewed");
    if (flags[item.slug] === item.hash) a.classList.add("flagged");
    const name = document.createElement("span");
    name.className = "name";
    name.textContent = item.story;
    if (item.qualifier) {
      const small = document.createElement("small");
      small.textContent = " · " + item.qualifier;
      name.appendChild(small);
    }
    a.appendChild(name);
    // "changed" is the common case — only unusual statuses get a chip.
    if (item.status !== "changed")
      addChip(a, item.status, "chip " + item.status);
    const chip = chipFor(item);
    if (chip) addChip(a, chip, "chip");
    addChip(a, "⚑", "flagmark");
    const todo = document.createElement("span");
    todo.className = "todo";
    todo.title = "not viewed yet";
    a.appendChild(todo);
    listEl.appendChild(a);
  }
  return activeLink;
}

function updateProgress() {
  const progressEl = document.getElementById("progress");
  if (!progressEl) return;
  const viewed = readStore("vp:viewed");
  const flags = readStore("vp:flags");
  const total = NAV.entries.length;
  const left = NAV.entries.filter((e) => viewed[e.slug] !== e.hash).length;
  const flagged = NAV.entries.filter((e) => flags[e.slug] === e.hash).length;
  progressEl.textContent = "";
  if (total) {
    progressEl.append(
      left ? `${left} of ${total} left to view` : `all ${total} viewed`,
    );
  }
  if (flagged) progressEl.append(` · ${flagged} ⚑ flagged`);
}

// Preserve the sidebar scroll position across navigations (the list is
// identical on every page — jumping to the active row on each load is
// disorienting). Falls back to centering the active row the first time.
const SCROLL_KEY = "vp:sidebar-scroll";
function restoreListScroll(activeLink) {
  const saved = sessionStorage.getItem(SCROLL_KEY);
  if (saved !== null) listEl.scrollTop = Number(saved);
  else activeLink?.scrollIntoView({ block: "center" });
}
listEl.addEventListener(
  "scroll",
  () => {
    try {
      sessionStorage.setItem(SCROLL_KEY, listEl.scrollTop);
    } catch {
      /* session storage unavailable */
    }
  },
  { passive: true },
);

searchEl.oninput = () => {
  state.filter = searchEl.value;
  buildList();
};

// ---------- link prefetching ----------
// The moment a same-origin navigation looks likely, drop a <link rel=prefetch>
// so the story page is warm by click time. List rows wrap spans, so the link
// is resolved with closest() rather than off the event target.
{
  const prefetched = new Set();
  const prefetch = (e) => {
    const a = e.target?.closest?.("a");
    if (
      !(a instanceof HTMLAnchorElement) ||
      prefetched.has(a.href) ||
      a.origin !== location.origin ||
      a.pathname === location.pathname
    ) {
      return;
    }
    prefetched.add(a.href);
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = a.href;
    link.onload = link.onerror = () => link.remove();
    document.head.appendChild(link);
  };
  const opts = { capture: true, passive: true };
  document.addEventListener("mouseover", prefetch, opts);
  document.addEventListener("touchstart", prefetch, opts);
  document.addEventListener("focus", prefetch, opts);
}

// ---------- keyboard ----------
function onKeydown(e) {
  // Never intercept browser/system chords (Ctrl+R must reload).
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.target === searchEl) {
    if (e.key === "Escape") {
      // The browser clears type=search on Escape without firing input;
      // keep the filter in sync explicitly.
      searchEl.value = "";
      state.filter = "";
      buildList();
      searchEl.blur();
    }
    return;
  }
  // Don't steal keys from form controls (story content may contain inputs).
  if (e.target?.closest?.("input, textarea, select, [contenteditable]")) return;

  if (e.key === "/") {
    e.preventDefault();
    searchEl.focus();
    return;
  }
  if (!onStoryPage) {
    // On the index, j/k move focus through the visible rows.
    const rows = [...listEl.querySelectorAll("a.story")];
    const i = rows.indexOf(document.activeElement);
    if (e.key === "k" || e.key === "ArrowDown") {
      e.preventDefault();
      (rows[Math.min(i + 1, rows.length - 1)] ?? rows[0])?.focus();
    } else if (e.key === "j" || e.key === "ArrowUp") {
      e.preventDefault();
      rows[i === -1 ? 0 : Math.max(i - 1, 0)]?.focus();
    }
    return;
  }
  if (e.key === "j" || e.key === "ArrowUp") {
    if (PAGE.prevHref) location.href = PAGE.prevHref;
  } else if (e.key === "k" || e.key === "ArrowDown") {
    if (PAGE.nextHref) location.href = PAGE.nextHref;
  } else if (e.key === "m") {
    setMode(state.mode === "side" ? "flip" : "side");
  } else if (e.key === "f") {
    flipAll();
  } else if (e.key === "t") {
    setTheme(state.theme === "light" ? "dark" : "light");
  } else if (e.key === "h") {
    setHighlights(!state.highlights);
  } else if (e.key === "d") {
    setView(state.view === "diff" ? "rendered" : "diff");
  } else if (e.key === "x") {
    toggleFlag();
  } else if (e.key === "Escape") {
    location.href = PAGE.indexHref;
  }
}
document.addEventListener("keydown", onKeydown);

// ---------- index page ends here ----------
if (!onStoryPage) {
  buildList();
  updateProgress();
  restoreListScroll(null);
}

// ---------- story page ----------
const duos = onStoryPage ? [...document.querySelectorAll(".duo")] : [];
const frames = (duo) => [...duo.querySelectorAll("iframe")];

function applyThemeToFrame(iframe) {
  const doc = iframe.contentDocument;
  if (!doc) return;
  const dark = doc.querySelector("link[data-vp-dark]");
  if (dark) dark.disabled = state.theme !== "dark";
  const scheme = doc.querySelector("style[data-vp-scheme]");
  if (scheme) scheme.textContent = ":root{color-scheme:" + state.theme + "}";
}
function applyHighlightsToFrame(iframe) {
  iframe.contentDocument?.body?.classList.toggle("vhd-on", state.highlights);
}
function forEachFrame(fn) {
  for (const f of document.querySelectorAll("iframe")) fn(f);
}

// Stacked frames must scroll together: pointer events reach whichever layer
// is on top, so a tall story would otherwise drift out of alignment the
// moment either layer scrolls.
function syncFrameScroll(a, b) {
  let lock = false;
  const mirror = (src, dst) => () => {
    if (lock) return;
    lock = true;
    try {
      dst.contentWindow?.scrollTo(
        src.contentWindow.scrollX,
        src.contentWindow.scrollY,
      );
    } finally {
      lock = false;
    }
  };
  a.contentWindow.addEventListener("scroll", mirror(a, b));
  b.contentWindow.addEventListener("scroll", mirror(b, a));
}

// ---------- measuring / scaling ----------
function measureDuo(duo) {
  if (!duo.isConnected) return;
  let h = 120;
  for (const f of frames(duo)) {
    const d = f.contentDocument;
    if (!d) continue;
    let fh = d.documentElement.scrollHeight;
    // Top-layer content (open dialogs and their backdrops) doesn't
    // contribute to scrollHeight; the frame must still be tall enough to
    // contain a centered dialog with breathing room.
    for (const dlg of d.querySelectorAll("dialog[open]")) {
      fh = Math.max(fh, Math.min(dlg.scrollHeight, 760) + 96);
    }
    h = Math.max(h, Math.min(fh, 900));
  }
  duo._natH = h;
  for (const f of frames(duo)) f.style.height = h + "px";
  applyScale(duo);
}
function applyScale(duo) {
  const natW = Number(duo.dataset.width) || null;
  const stacked = duo.classList.contains("stacked");
  const wraps = [...duo.querySelectorAll(".frame-wrap")];
  if (!natW) {
    // Fluid: width tracks the container; stacked head wraps overlay and
    // need an explicit height (frames keep flowing naturally).
    for (const wrap of wraps) {
      wrap.style.width = "";
      wrap.style.height = stacked ? (duo._natH || 160) + "px" : "";
    }
    for (const note of duo.querySelectorAll(".zoom-note"))
      note.textContent = "";
    return;
  }
  const availEl = stacked ? duo.parentElement : duo.querySelector(".duo-side");
  const scale = Math.min(1, Math.max(120, availEl.clientWidth) / natW);
  for (const f of frames(duo)) {
    f.style.width = natW + "px";
    f.style.transform = scale === 1 ? "" : "scale(" + scale + ")";
  }
  for (const wrap of wraps) {
    wrap.style.width = Math.round(natW * scale) + "px";
    wrap.style.height = Math.round((duo._natH || 160) * scale) + "px";
  }
  for (const note of duo.querySelectorAll(".zoom-note")) {
    note.textContent =
      natW +
      "px viewport" +
      (scale < 1 ? " · shown at " + Math.round(scale * 100) + "%" : "");
  }
}
let resizeTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => duos.forEach(measureDuo), 100);
});

// ---------- compare modes ----------
// Modes are class/style changes on the .duo containers: the iframes are never
// rebuilt or reparented, so switching modes never reloads them.
function applyMode(duo) {
  duo.classList.remove("stacked", "mode-side", "mode-flip");
  duo.querySelectorAll(".layer-badge").forEach((el) => el.remove());
  duo.parentElement
    .querySelectorAll(".mode-legend")
    .forEach((el) => el.remove());
  const head = duo.querySelector(".duo-side.head");
  if (head) head.style.visibility = "";
  duo.onclick = null;
  duo._flip = null;

  // A dim missing one side can only render side by side.
  const mode = duo.classList.contains("solo") ? "side" : state.mode;
  duo.classList.add("mode-" + mode);
  if (mode === "flip") {
    duo.classList.add("stacked");
    const legend = document.createElement("h3");
    legend.className = "mode-legend";
    duo.before(legend);
    const badge = document.createElement("div");
    badge.className = "layer-badge";
    duo.appendChild(badge);
    let showing = "head";
    const render = () => {
      head.style.visibility = showing === "head" ? "visible" : "hidden";
      badge.textContent = showing === "head" ? "THIS PR" : "BASE";
      legend.textContent =
        "Flip — showing " +
        (showing === "head" ? "this PR" : "base") +
        " (click or press f)";
    };
    duo._flip = () => {
      showing = showing === "head" ? "base" : "head";
      render();
    };
    render();
    // Frames don't receive pointer events in this mode (CSS), so the
    // container click always lands here.
    duo.onclick = duo._flip;
  }
  applyScale(duo);
}
const applyModeAll = () => duos.forEach(applyMode);
const flipAll = () => duos.forEach((duo) => duo._flip?.());

// ---------- toolbar ----------
const segs = {};
function wireSeg(name, onPick) {
  const seg = document.querySelector('.seg[data-seg="' + name + '"]');
  segs[name] = seg;
  seg.setActive = (v) => {
    for (const b of seg.querySelectorAll("button")) {
      b.classList.toggle("active", b.dataset.v === v);
    }
  };
  seg.addEventListener("click", (e) => {
    const v = e.target.closest("button")?.dataset.v;
    if (v) onPick(v);
  });
}
function setMode(v) {
  state.mode = v;
  if (state.view === "diff") setView("rendered");
  savePrefs();
  segs.mode.setActive(v);
  applyModeAll();
}
function setView(v) {
  state.view = v;
  segs.view.setActive(v);
  const diff = v === "diff";
  for (const section of document.querySelectorAll(".dim-section")) {
    section.querySelector("pre.diff").hidden = !diff;
    const parts = section.querySelectorAll(".duo, .mode-legend, .inspector");
    for (const el of parts) el.style.display = diff ? "none" : "";
  }
  if (!diff) duos.forEach(measureDuo);
}
function setTheme(v) {
  state.theme = v;
  savePrefs();
  segs.theme.setActive(v);
  forEachFrame(applyThemeToFrame);
}
function setHighlights(v) {
  state.highlights = v;
  savePrefs();
  document.getElementById("hl-toggle").checked = v;
  forEachFrame(applyHighlightsToFrame);
}
function syncFlag() {
  const flagBtn = document.getElementById("flag-btn");
  const on = isFlagged();
  flagBtn.classList.toggle("on", on);
  flagBtn.textContent = on ? "⚑ Flagged" : "⚑ Flag";
  flagBtn.title = on
    ? "Flagged for follow-up — click to unflag"
    : "Flag this diff for follow-up (x)";
}
function toggleFlag() {
  setFlagged(!isFlagged());
  syncFlag();
  buildList();
}

// ---------- inspector ----------
function flashChange(id, section) {
  let firstWrap = null;
  for (const iframe of section.querySelectorAll("iframe")) {
    const doc = iframe.contentDocument;
    if (!doc) continue;
    doc
      .querySelectorAll(".vhd-flash")
      .forEach((el) => el.classList.remove("vhd-flash"));
    const el = doc.querySelector('[data-vhd-id="' + id + '"]');
    if (!el) continue;
    el.classList.add("vhd-flash");
    const win = iframe.contentWindow;
    const rect = el.getBoundingClientRect();
    win.scrollBy({
      top: rect.top - win.innerHeight / 2,
      left: 0,
      behavior: "smooth",
    });
    setTimeout(() => el.classList.remove("vhd-flash"), 1600);
    firstWrap ??= iframe.closest(".frame-wrap");
  }
  firstWrap?.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

// ---------- story page boot ----------
if (onStoryPage) {
  wireSeg("mode", setMode);
  wireSeg("view", setView);
  wireSeg("theme", setTheme);
  const hlToggle = document.getElementById("hl-toggle");
  hlToggle.onchange = () => setHighlights(hlToggle.checked);
  document.getElementById("flag-btn").onclick = toggleFlag;

  for (const row of document.querySelectorAll(".change-row")) {
    row.querySelector("button").onclick = () => {
      const opening = !row.classList.contains("open");
      row.classList.toggle("open");
      if (opening) {
        flashChange(row.dataset.changeId, row.closest(".dim-section"));
      }
    };
  }

  const onFrameLoad = (iframe) => {
    // Keyboard shortcuts must keep working after a click focuses a frame.
    iframe.contentWindow.addEventListener("keydown", onKeydown);
    applyThemeToFrame(iframe);
    applyHighlightsToFrame(iframe);
    const duo = iframe.closest(".duo");
    measureDuo(duo);
    // Fonts and images can change layout after load; settle with a couple
    // of delayed re-measures.
    setTimeout(() => measureDuo(duo), 400);
    setTimeout(() => measureDuo(duo), 1500);
    duo._loaded = (duo._loaded || 0) + 1;
    if (duo._loaded === 2) syncFrameScroll(...frames(duo));
  };
  forEachFrame((iframe) => {
    iframe.addEventListener("load", () => onFrameLoad(iframe));
    // Already loaded before this script ran? The initial about:blank
    // document also reports readyState "complete", so require our
    // frame-head marker to identify the real srcdoc document.
    if (
      iframe.contentDocument?.readyState === "complete" &&
      iframe.contentDocument.querySelector("style[data-vp-scheme]")
    ) {
      onFrameLoad(iframe);
    }
  });

  document.getElementById("pos").textContent = PAGE.pos + " / " + PAGE.total;
  for (const [id, href] of [
    ["prev", PAGE.prevHref],
    ["next", PAGE.nextHref],
  ]) {
    const link = document.getElementById(id);
    if (href) link.href = href;
    else link.setAttribute("aria-disabled", "true");
  }

  // Apply persisted prefs over the statically rendered defaults.
  segs.mode.setActive(state.mode);
  segs.theme.setActive(state.theme);
  hlToggle.checked = state.highlights;
  applyModeAll();
  syncFlag();
  restoreListScroll(buildList());

  // Deep links to a dimension: #dim-N scrolls to that section.
  if (/^#dim-\d+$/.test(location.hash)) {
    document.querySelector(location.hash)?.scrollIntoView();
  }
}
