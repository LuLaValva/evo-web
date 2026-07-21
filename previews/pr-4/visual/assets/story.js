/* Enhancer for statically rendered story pages. The build bakes the
   frames (static srcdoc), inspector, and text diff into the page; this
   script only wires interactivity: compare modes (class/style changes on
   .duo containers — iframes are never rebuilt, so switching modes never
   reloads them), theme + highlight toggles applied inside the live frame
   documents, frame measuring/scaling, viewed/flag stores, the sidebar,
   and keyboard shortcuts. PAGE (inline) carries slug/hash/nav plus each
   dim's change paths for mapping highlights onto real story frames. */
"use strict";

// ---------- viewed / flagged stores ----------
// Opening the page IS the review action: browsers style the index links
// via :visited, and this localStorage mirror powers the index's progress
// counter. Flags mark diffs that need follow-up; both are keyed by the
// story slug and stamped with a content hash so a story whose diff
// changes on a later push reverts to unviewed/unflagged.
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
{
    const viewed = readStore("vp:viewed");
    viewed[PAGE.slug] = PAGE.hash;
    writeStore("vp:viewed", viewed);
}
const isFlagged = () => readStore("vp:flags")[PAGE.slug] === PAGE.hash;
function setFlagged(v) {
    const flags = readStore("vp:flags");
    if (v) flags[PAGE.slug] = PAGE.hash;
    else delete flags[PAGE.slug];
    writeStore("vp:flags", flags);
}

// ---------- cross-page view preferences ----------
const PREF_KEY = "vp:prefs";
const prefs = readStore(PREF_KEY);
const state = {
    mode: ["side", "swipe", "onion", "flip"].includes(prefs.mode) ? prefs.mode : "side",
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

const mainEl = document.getElementById("main");
const duos = [...document.querySelectorAll(".duo")];
let flipToggles = [];

// ---------- frame plumbing ----------
// Walk the story DOM by visible-children indices (skipping display:none
// subtrees, mirroring visual-html's pruning).
function walkVisible(root, idxPath, win) {
    let el = root;
    for (const i of idxPath) {
        const kids = [...el.children].filter(
            (k) => win.getComputedStyle(k).display !== "none",
        );
        el = kids[i];
        if (!el) return null;
    }
    return el;
}
function applyRealHighlights(iframe, changes, side) {
    const doc = iframe.contentDocument;
    const win = iframe.contentWindow;
    if (!doc || !win) return;
    // Snapshot paths are rooted at the harness capture container <div>,
    // which has no counterpart in the real frame (story HTML sits
    // directly in <body>, after the hidden sprite div — display:none,
    // so walkVisible skips it). Drop the leading container index and
    // walk the rest from <body>.
    for (const c of changes) {
        const p = side === "before" ? c.pathB : c.pathA;
        if (!p || p.length < 2 || p[0] !== 0) continue;
        const el = walkVisible(doc.body, p.slice(1), win);
        if (!el) continue;
        const expected = c.path[c.path.length - 1];
        if (expected && el.tagName.toLowerCase() !== expected) continue;
        el.setAttribute("data-vhd", c.kind);
        el.setAttribute("data-vhd-id", c.id);
    }
}

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

// Stacked frames must scroll together: pointer events reach whichever
// layer is on top (or through clip-path holes in swipe mode), so wide or
// tall stories would otherwise drift out of alignment the moment either
// layer scrolls.
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
    try {
        a.contentWindow.addEventListener("scroll", mirror(a, b));
        b.contentWindow.addEventListener("scroll", mirror(b, a));
    } catch {
        /* frames are same-origin srcdoc; belt and braces */
    }
}

// ---------- measuring / scaling ----------
function frames(duo) {
    return [...duo.querySelectorAll("iframe")];
}
function measureDuo(duo) {
    if (!duo.isConnected) return;
    let h = 120;
    for (const f of frames(duo)) {
        const d = f.contentDocument;
        if (d) h = Math.max(h, Math.min(d.documentElement.scrollHeight, 900));
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
        // Fluid: width tracks the container; stacked head wraps overlay
        // and need explicit height (frames keep flowing naturally).
        for (const wrap of wraps) {
            wrap.style.width = "";
            wrap.style.height = stacked ? (duo._natH || 160) + "px" : "";
        }
        for (const note of duo.querySelectorAll(".zoom-note")) note.textContent = "";
        if (duo._onScale) duo._onScale();
        if (stacked) duo.style.minHeight = "";
        return;
    }
    const availEl = stacked ? duo.parentElement : duo.querySelector(".duo-side");
    const avail = Math.max(120, availEl.clientWidth);
    const s = Math.min(1, avail / natW);
    for (const f of frames(duo)) {
        f.style.transform = s === 1 ? "" : "scale(" + s + ")";
    }
    for (const wrap of wraps) {
        wrap.style.width = Math.round(natW * s) + "px";
        wrap.style.height = Math.round((duo._natH || 160) * s) + "px";
    }
    for (const note of duo.querySelectorAll(".zoom-note")) {
        note.textContent =
            natW + "px viewport" + (s < 1 ? " · shown at " + Math.round(s * 100) + "%" : "");
    }
    if (duo._onScale) duo._onScale();
}
let resizeTimer = null;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => duos.forEach(measureDuo), 100);
});

// ---------- compare modes (no iframe rebuilds) ----------
function clearModeArtifacts(duo) {
    duo.classList.remove("stacked", "mode-side", "mode-swipe", "mode-onion", "mode-flip");
    duo.querySelectorAll(".divider, .layer-badge").forEach((el) => el.remove());
    duo.parentElement
        .querySelectorAll(".stack-controls, .mode-legend")
        .forEach((el) => el.remove());
    const head = duo.querySelector(".duo-side.head");
    if (head) {
        head.style.clipPath = "";
        head.style.opacity = "";
        head.style.visibility = "";
    }
    duo.onclick = null;
}
function applyMode(duo) {
    clearModeArtifacts(duo);
    // A dim missing one side can only render side-by-side.
    const mode = duo.classList.contains("solo") ? "side" : state.mode;
    duo.classList.add("mode-" + mode);
    if (mode === "side") {
        applyScale(duo);
        return;
    }
    duo.classList.add("stacked");
    const head = duo.querySelector(".duo-side.head");
    const legend = document.createElement("h3");
    legend.className = "mode-legend";
    duo.before(legend);

    if (mode === "swipe") {
        legend.textContent = "Swipe — left: this PR, right: base";
        const divider = document.createElement("div");
        divider.className = "divider";
        duo.appendChild(divider);
        const controls = document.createElement("div");
        controls.className = "stack-controls swipe-controls";
        const slider = document.createElement("input");
        slider.type = "range";
        slider.min = "0";
        slider.max = "100";
        slider.step = "any";
        slider.value = "50";
        const apply = () => {
            const p = Number(slider.value);
            head.style.clipPath = "inset(0 " + (100 - p) + "% 0 0)";
            divider.style.left = "calc(" + p + "% - 1px)";
        };
        slider.oninput = apply;
        duo._onScale = () => {
            const wrap = duo.querySelector(".frame-wrap");
            controls.style.width = wrap?.style.width || "100%";
            apply();
        };
        apply();
        controls.appendChild(slider);
        duo.after(controls);
    } else if (mode === "onion") {
        legend.textContent = "Onion skin — this PR over base";
        const controls = document.createElement("div");
        controls.className = "stack-controls";
        const left = document.createElement("span");
        left.textContent = "Base";
        const right = document.createElement("span");
        right.textContent = "This PR";
        const slider = document.createElement("input");
        slider.type = "range";
        slider.min = "0";
        slider.max = "100";
        slider.step = "any";
        slider.value = "50";
        const apply = () => {
            head.style.opacity = Number(slider.value) / 100;
        };
        slider.oninput = apply;
        apply();
        controls.append(left, slider, right);
        duo.after(controls);
        duo._onScale = null;
    } else {
        // flip: toggle in place. Frames don't receive pointer events in
        // this mode (CSS), so the container click always lands here.
        const badge = document.createElement("div");
        badge.className = "layer-badge";
        duo.appendChild(badge);
        let showing = "after";
        const apply = () => {
            head.style.visibility = showing === "after" ? "visible" : "hidden";
            badge.textContent = showing === "after" ? "THIS PR" : "BASE";
            legend.textContent =
                "Flip — showing " + (showing === "after" ? "this PR" : "base") +
                " (click or press f)";
        };
        const flip = () => {
            showing = showing === "after" ? "before" : "after";
            apply();
        };
        flipToggles.push(flip);
        apply();
        duo.onclick = flip;
        duo._onScale = null;
    }
    applyScale(duo);
}
function applyModeAll() {
    flipToggles = [];
    duos.forEach(applyMode);
}

// ---------- toolbar ----------
function wireSeg(name, onPick) {
    const seg = document.querySelector('.seg[data-seg="' + name + '"]');
    if (!seg) return;
    seg._set = (v) => {
        for (const b of seg.querySelectorAll("button")) {
            b.classList.toggle("active", b.dataset.v === v);
        }
    };
    seg.addEventListener("click", (e) => {
        const v = e.target.closest("button")?.dataset.v;
        if (v) onPick(v);
    });
}
const segs = {};
for (const name of ["mode", "view", "theme"]) {
    segs[name] = document.querySelector('.seg[data-seg="' + name + '"]');
}
function setMode(v) {
    state.mode = v;
    if (state.view === "diff") setView("rendered");
    savePrefs();
    segs.mode._set(v);
    applyModeAll();
}
function setView(v) {
    state.view = v;
    segs.view._set(v);
    const diff = v === "diff";
    for (const section of document.querySelectorAll(".dim-section")) {
        section.querySelector("pre.diff").hidden = !diff;
        const stageParts = section.querySelectorAll(
            ".duo, .stack-controls, .mode-legend, .inspector",
        );
        for (const el of stageParts) el.style.display = diff ? "none" : "";
    }
    if (!diff) duos.forEach(measureDuo);
}
function setTheme(v) {
    state.theme = v;
    savePrefs();
    segs.theme._set(v);
    for (const f of document.querySelectorAll("iframe")) applyThemeToFrame(f);
}
const hlToggle = document.getElementById("hl-toggle");
function setHighlights(v) {
    state.highlights = v;
    savePrefs();
    hlToggle.checked = v;
    for (const f of document.querySelectorAll("iframe")) applyHighlightsToFrame(f);
}
wireSeg("mode", setMode);
wireSeg("view", setView);
wireSeg("theme", setTheme);
hlToggle.onchange = () => setHighlights(hlToggle.checked);

const flagBtn = document.getElementById("flag-btn");
function syncFlag() {
    const on = isFlagged();
    flagBtn.classList.toggle("on", on);
    flagBtn.textContent = on ? "⚑ Flagged" : "⚑ Flag";
    flagBtn.title = on
        ? "Flagged for follow-up — click to unflag"
        : "Flag this diff for follow-up (x)";
    buildSidebar();
}
flagBtn.onclick = () => {
    setFlagged(!isFlagged());
    syncFlag();
};

// ---------- inspector ----------
function flashChange(id, section) {
    let firstWrap = null;
    for (const iframe of section.querySelectorAll("iframe")) {
        const doc = iframe.contentDocument;
        if (!doc) continue;
        doc.querySelectorAll(".vhd-flash").forEach((el) => el.classList.remove("vhd-flash"));
        const el = doc.querySelector('[data-vhd-id="' + id + '"]');
        if (el) {
            el.classList.add("vhd-flash");
            const win = iframe.contentWindow;
            const r = el.getBoundingClientRect();
            win.scrollBy({ top: r.top - win.innerHeight / 2, left: 0, behavior: "smooth" });
            setTimeout(() => el.classList.remove("vhd-flash"), 1600);
            firstWrap ??= iframe.closest(".frame-wrap");
        }
    }
    firstWrap?.scrollIntoView({ block: "nearest", behavior: "smooth" });
}
for (const row of document.querySelectorAll(".change-row")) {
    row.querySelector("button").onclick = () => {
        const opening = !row.classList.contains("open");
        row.classList.toggle("open");
        if (opening) {
            flashChange(row.dataset.changeId, row.closest(".dim-section"));
        }
    };
}

// ---------- keyboard ----------
const MODES = ["side", "swipe", "onion", "flip"];
function onKeydown(e) {
    // Never intercept browser/system chords (Ctrl+R must reload, not
    // toggle state).
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const searchEl = document.getElementById("search");
    if (e.target === searchEl) {
        if (e.key === "Escape") {
            // The browser clears type=search on Escape without firing
            // input; keep the filter in sync explicitly.
            searchEl.value = "";
            state.filter = "";
            buildSidebar();
            searchEl.blur();
        }
        return;
    }
    // Don't steal keys from form controls (sliders use arrows, story
    // content may contain inputs/textareas).
    if (e.target?.closest?.("input, textarea, select, [contenteditable]")) {
        return;
    }
    if (e.key === "j" || e.key === "ArrowUp") {
        if (PAGE.prevHref) location.href = PAGE.prevHref;
    } else if (e.key === "k" || e.key === "ArrowDown") {
        if (PAGE.nextHref) location.href = PAGE.nextHref;
    } else if (e.key === "m") {
        setMode(MODES[(MODES.indexOf(state.mode) + 1) % MODES.length]);
    } else if (e.key === "f" && flipToggles.length) {
        flipToggles.forEach((flip) => flip());
    } else if (e.key === "t") {
        setTheme(state.theme === "light" ? "dark" : "light");
    } else if (e.key === "h") {
        setHighlights(!state.highlights);
    } else if (e.key === "d") {
        setView(state.view === "diff" ? "rendered" : "diff");
    } else if (e.key === "x") {
        setFlagged(!isFlagged());
        syncFlag();
    } else if (e.key === "/") {
        e.preventDefault();
        document.getElementById("search")?.focus();
    } else if (e.key === "Escape") {
        location.href = PAGE.indexHref;
    }
}
document.addEventListener("keydown", onKeydown);

// ---------- sidebar (full story list, shared via ../assets/nav.js) ----------
function buildSidebar() {
    const listEl = document.getElementById("storylist");
    if (!listEl || typeof NAV === "undefined") return;
    const viewed = readStore("vp:viewed");
    const flags = readStore("vp:flags");
    const f = state.filter.trim().toLowerCase();
    listEl.textContent = "";
    let lastComponent = null;
    let activeLink = null;
    for (const item of NAV.entries) {
        if (f && !(item.component + " " + item.story + " " + (item.qualifier || "")).toLowerCase().includes(f)) {
            continue;
        }
        if (item.component !== lastComponent) {
            lastComponent = item.component;
            const h = document.createElement("h2");
            h.textContent = item.component;
            listEl.appendChild(h);
        }
        const a = document.createElement("a");
        a.className = "story";
        a.href = item.slug + ".html";
        if (item.slug === PAGE.slug) {
            a.classList.add("active");
            activeLink = a;
        }
        if (viewed[item.slug] === item.hash) a.classList.add("viewed");
        if (flags[item.slug] === item.hash) a.classList.add("flagged");
        const dot = document.createElement("span");
        dot.className = "dot " + item.status;
        const name = document.createElement("span");
        name.className = "name";
        name.textContent = item.story;
        if (item.qualifier) {
            const small = document.createElement("small");
            small.textContent = " · " + item.qualifier;
            name.appendChild(small);
        }
        a.append(dot, name);
        if (item.chip) {
            const chip = document.createElement("span");
            chip.className = "chip";
            chip.textContent = item.chip;
            a.appendChild(chip);
        }
        const flagmark = document.createElement("span");
        flagmark.className = "flagmark";
        flagmark.textContent = "⚑";
        const todo = document.createElement("span");
        todo.className = "todo";
        todo.title = "not viewed yet";
        a.append(flagmark, todo);
        listEl.appendChild(a);
    }
    activeLink?.scrollIntoView({ block: "nearest" });
}
{
    const searchEl = document.getElementById("search");
    if (searchEl) {
        searchEl.oninput = () => {
            state.filter = searchEl.value;
            buildSidebar();
        };
    }
}

// ---------- frame load wiring ----------
function dimChangesFor(iframe) {
    const i = Number(iframe.closest(".dim-section")?.dataset.dim ?? -1);
    return PAGE.dims[i]?.changes ?? [];
}
function onFrameLoad(iframe) {
    // Keyboard shortcuts must keep working after a click focuses the
    // frame; forward keydown from the frame document.
    try {
        iframe.contentWindow.addEventListener("keydown", onKeydown);
    } catch {
        /* cross-origin never happens for srcdoc; belt and braces */
    }
    if (iframe.dataset.real) {
        applyRealHighlights(
            iframe,
            dimChangesFor(iframe),
            iframe.dataset.side === "base" ? "before" : "after",
        );
    }
    applyThemeToFrame(iframe);
    applyHighlightsToFrame(iframe);
    const duo = iframe.closest(".duo");
    measureDuo(duo);
    duo._loaded = (duo._loaded || 0) + 1;
    if (duo._loaded === 2) {
        const [a, b] = frames(duo);
        syncFrameScroll(a, b);
    }
}
for (const iframe of document.querySelectorAll("iframe")) {
    iframe.addEventListener("load", () => onFrameLoad(iframe));
    // Already fully loaded before this script ran? The initial
    // about:blank document also reports readyState "complete", so require
    // our frame-head marker to distinguish the real srcdoc document.
    if (
        iframe.contentDocument?.readyState === "complete" &&
        iframe.contentDocument.querySelector("style[data-vp-scheme]")
    ) {
        onFrameLoad(iframe);
    }
}

// ---------- boot ----------
{
    const pos = document.getElementById("pos");
    if (pos) pos.textContent = PAGE.pos + " / " + PAGE.total;
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    if (PAGE.prevHref) prev.href = PAGE.prevHref;
    else prev.setAttribute("aria-disabled", "true");
    if (PAGE.nextHref) next.href = PAGE.nextHref;
    else next.setAttribute("aria-disabled", "true");
}
segs.theme._set = segs.theme._set || (() => {});
syncFlag();
buildSidebar();
// Apply persisted prefs to the statically rendered defaults.
segs.mode?._set?.(state.mode);
segs.theme?._set?.(state.theme);
hlToggle.checked = state.highlights;
applyModeAll();
if (state.theme === "dark") {
    for (const f of document.querySelectorAll("iframe")) applyThemeToFrame(f);
}
// Deep links to a dimension: #dim-N scrolls to that section.
if (/^#dim-\d+$/.test(location.hash)) {
    document.querySelector(location.hash)?.scrollIntoView();
}
