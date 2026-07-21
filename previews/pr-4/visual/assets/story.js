/* Per-story review page. Expects a `PAGE` global injected by build.mjs:
   { entry, baseRefShort, prevHref, nextHref, pos, total, slug, hash }.
   Shared per-ref assets (compiled CSS bundles, tokens, sprites) live in
   ../assets/ and are referenced from frame documents via a <base> tag. */
"use strict";

const ASSETS = new URL("../assets/", location.href).href;
const entry = PAGE.entry;

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
    dimIdx: (() => {
        const m = location.hash.match(/^#dim-(\d+)$/);
        return m ? Math.min(Number(m[1]), entry.dims.length - 1) : 0;
    })(),
    mode: ["side", "swipe", "onion", "flip"].includes(prefs.mode) ? prefs.mode : "side",
    view: "rendered", // rendered | diff
    theme: prefs.theme === "dark" ? "dark" : "light",
    highlights: prefs.highlights !== false,
    swipe: 50,
    onion: 50,
};
function savePrefs() {
    writeStore(PREF_KEY, {
        mode: state.mode,
        theme: state.theme,
        highlights: state.highlights,
    });
}
function syncDimHash() {
    // replaceState keeps dim selection shareable without polluting history
    history.replaceState(null, "", state.dimIdx ? "#dim-" + state.dimIdx : location.pathname);
}

let flipToggle = null; // set by renderStack in flip mode
let highlightsCheckbox = null;
let flagButton = null;

function applyHighlights(v) {
    state.highlights = v;
    savePrefs();
    for (const f of liveFrames) {
        f.contentDocument?.body?.classList.toggle("vhd-on", v);
    }
    if (highlightsCheckbox) highlightsCheckbox.checked = v;
}

// ---------- element-level diff engine ----------
// Diffs the two snapshot trees; records for each change an index path
// into the *visible story DOM* (indices count element children that are
// not the synthetic <style> pseudo-style carriers; the story DOM walk
// later skips display:none elements to mirror visual-html's pruning).
function parseFragment(html) {
    return new DOMParser().parseFromString("<body>" + html, "text/html").body;
}
function styleMap(el) {
    const map = {};
    for (const decl of (el.getAttribute("style") || "").split(/;\s*/)) {
        const i = decl.indexOf(":");
        if (i > 0) map[decl.slice(0, i).trim()] = decl.slice(i + 1).trim().replace(/\s+/g, " ");
    }
    return map;
}
function lcsPairs(a, b, eq) {
    const n = a.length, m = b.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = n - 1; i >= 0; i--)
        for (let j = m - 1; j >= 0; j--)
            dp[i][j] = eq(a[i], b[j])
                ? dp[i + 1][j + 1] + 1
                : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const pairs = [];
    let i = 0, j = 0;
    while (i < n && j < m) {
        if (eq(a[i], b[j])) { pairs.push([i, j]); i++; j++; }
        else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
        else j++;
    }
    return pairs;
}
function nodeLabel(el) {
    return el.tagName.toLowerCase();
}
// Index of each child among the non-STYLE element children (STYLE nodes
// in snapshots are synthetic and don't exist in the story DOM).
function storyIndices(parent) {
    const out = [];
    let i = 0;
    for (const el of parent.children) {
        out.push(el.tagName === "STYLE" ? null : i++);
    }
    return out;
}
let nextId = 0;
function diffTrees(bParent, aParent, path, changes, bPath, aPath) {
    const bKids = [...bParent.children];
    const aKids = [...aParent.children];
    const bIdx = storyIndices(bParent);
    const aIdx = storyIndices(aParent);
    const pairs = lcsPairs(bKids, aKids, (x, y) => x.tagName === y.tagName);
    const bMatched = new Set(pairs.map((p) => p[0]));
    const aMatched = new Set(pairs.map((p) => p[1]));
    bKids.forEach((el, i) => {
        if (!bMatched.has(i)) {
            el.setAttribute("data-vhd", "removed");
            const id = "vhd" + nextId++;
            el.setAttribute("data-vhd-id", id);
            changes.push({
                id,
                kind: "removed",
                path: path.concat(nodeLabel(el)),
                pathB: bIdx[i] === null ? null : bPath.concat(bIdx[i]),
                pathA: null,
                props: [{ name: "(element)", before: "present", after: "removed" }],
            });
        }
    });
    aKids.forEach((el, i) => {
        if (!aMatched.has(i)) {
            el.setAttribute("data-vhd", "added");
            const id = "vhd" + nextId++;
            el.setAttribute("data-vhd-id", id);
            changes.push({
                id,
                kind: "added",
                path: path.concat(nodeLabel(el)),
                pathB: null,
                pathA: aIdx[i] === null ? null : aPath.concat(aIdx[i]),
                props: [{ name: "(element)", before: "absent", after: "added" }],
            });
        }
    });
    for (const [bi, ai] of pairs) {
        compareElement(
            bKids[bi],
            aKids[ai],
            path.concat(nodeLabel(aKids[ai])),
            changes,
            bIdx[bi] === null ? bPath : bPath.concat(bIdx[bi]),
            aIdx[ai] === null ? aPath : aPath.concat(aIdx[ai]),
        );
    }
}
function compareElement(b, a, path, changes, bPath, aPath) {
    const props = [];
    if (b.tagName === "STYLE") {
        if (b.textContent !== a.textContent) {
            props.push({ name: "(pseudo-element styles)", before: b.textContent.trim(), after: a.textContent.trim() });
        }
    } else {
        const bs = styleMap(b), as = styleMap(a);
        for (const name of new Set([...Object.keys(bs), ...Object.keys(as)])) {
            if (bs[name] !== as[name]) {
                props.push({ name, before: bs[name] ?? "(unset)", after: as[name] ?? "(unset)" });
            }
        }
        for (const attr of new Set([
            ...[...b.attributes].map((x) => x.name),
            ...[...a.attributes].map((x) => x.name),
        ])) {
            if (attr === "style" || attr.startsWith("data-vhd")) continue;
            const bv = b.getAttribute(attr), av = a.getAttribute(attr);
            if (bv !== av) props.push({ name: "[" + attr + "]", before: bv ?? "(unset)", after: av ?? "(unset)" });
        }
        if (!b.children.length && !a.children.length && b.textContent.trim() !== a.textContent.trim()) {
            props.push({ name: "(text)", before: b.textContent.trim(), after: a.textContent.trim() });
        }
    }
    if (props.length) {
        const id = "vhd" + nextId++;
        b.setAttribute("data-vhd", b.getAttribute("data-vhd") || "changed");
        a.setAttribute("data-vhd", a.getAttribute("data-vhd") || "changed");
        b.setAttribute("data-vhd-id", id);
        a.setAttribute("data-vhd-id", id);
        changes.push({ id, kind: "changed", path, pathB: bPath, pathA: aPath, props });
    }
    if (b.tagName !== "STYLE") diffTrees(b, a, path, changes, bPath, aPath);
}
function annotate(dim) {
    const bRoot = parseFragment(dim.before);
    const aRoot = parseFragment(dim.after);
    const changes = [];
    nextId = 0;
    if (dim.before && dim.after) diffTrees(bRoot, aRoot, [], changes, [], []);
    return { beforeHtml: bRoot.innerHTML, afterHtml: aRoot.innerHTML, changes };
}

// ---------- frames ----------
const HIGHLIGHT_CSS =
    "body.vhd-on [data-vhd=changed]{outline:2px dashed #c026d3;outline-offset:2px}" +
    "body.vhd-on [data-vhd=added]{outline:2px dashed #16a34a;outline-offset:2px}" +
    "body.vhd-on [data-vhd=removed]{outline:2px dashed #dc2626;outline-offset:2px}" +
    ".vhd-flash{outline:3px solid #f59e0b !important;outline-offset:2px}";
const FRAME_BODY_CSS =
    "body{margin:16px;background:var(--color-background-primary,#fff);" +
    "color:var(--color-foreground-primary,#111)}" +
    // Storybook helper class (.storybook/custom-styles.css) some
    // font-size stories rely on.
    ".font-large{font-size:200%}";

// Real rendering: the story's own HTML against a ref's compiled CSS
// bundle. Frame documents resolve shared assets through a <base> tag
// (srcdoc has no URL of its own), so the heavy per-ref CSS and sprites
// are fetched once and cached across every story page. Embedded story
// <script>s execute natively (dialogs open themselves).
function frameHead(dim, cssLinks) {
    // The bundle embeds dark tokens in a prefers-color-scheme media
    // block, which would follow the reviewer's OS theme; the light
    // tokens are linked AFTER the bundle so the viewer's Light/Dark
    // toggle is the only thing that switches themes. color-scheme keeps
    // UA form controls matching the forced theme either way.
    const scheme = state.theme === "dark" ? "dark" : "light";
    return (
        '<base href="' + ASSETS + '">' +
        cssLinks.map((f) => '<link rel="stylesheet" href="' + f + '">').join("") +
        "<style>:root{color-scheme:" + scheme + "}" + FRAME_BODY_CSS + HIGHLIGHT_CSS + "</style>"
    );
}
function realFrameDoc(storyHtml, dim, ref) {
    const links = [ref === "base" ? "base.css" : "head.css", "tokens-light.css"];
    if (state.theme === "dark") links.push("tokens-dark.css");
    return (
        '<!doctype html><html dir="' + (dim.rtl ? "rtl" : "ltr") + '">' +
        "<head>" + frameHead(dim, links) + "</head>" +
        '<body class="' + (state.highlights ? "vhd-on" : "") + '">' +
        '<script src="sprite-' + ref + '.js"><\/script>' +
        storyHtml +
        "</body></html>"
    );
}
// Fallback when the story source is unavailable at a ref: render the
// snapshot's inlined-styles HTML. visual-html self-closes childless
// non-void elements, which HTML parsers reject — expand them first.
const VOID_TAGS = /^(?:area|base|br|col|embed|hr|img|input|link|meta|source|track|wbr|use|path|circle|rect|line|polyline|polygon|ellipse|stop)$/;
function expandSelfClosed(html) {
    return html.replace(
        /<([a-z][a-z0-9-]*)((?:[^<>"]|"[^"]*")*)\/>/gi,
        (m, tag, attrs) =>
            VOID_TAGS.test(tag.toLowerCase()) ? m : "<" + tag + attrs + "></" + tag + ">",
    );
}
function snapshotFrameDoc(snapshotHtml, dim) {
    const links = ["tokens-light.css"];
    if (state.theme === "dark") links.push("tokens-dark.css");
    return (
        '<!doctype html><html dir="' + (dim.rtl ? "rtl" : "ltr") + '">' +
        "<head>" + frameHead(dim, links) +
        '<style>body{font-family:"Market Sans",Arial,sans-serif}</style></head>' +
        '<body class="' + (state.highlights ? "vhd-on" : "") + '">' +
        expandSelfClosed(snapshotHtml) +
        "</body></html>"
    );
}

let liveFrames = [];
let scaledWraps = [];

// Walk the story DOM by visible-children indices (skipping
// display:none subtrees, mirroring visual-html's pruning).
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

// A wrapper holding one or more stacked iframes. Fluid wraps track the
// pane width; fixed wraps render at dim.width and scale to fit.
function makeWrap(dim, availWidth) {
    const wrap = document.createElement("div");
    wrap.className = "frame-wrap " + (dim.width === null ? "fluid" : "fixed");
    wrap._fluid = dim.width === null;
    wrap._natW = dim.width;
    wrap._natH = 160;
    wrap._availWidth = availWidth;
    wrap._frames = [];
    scaledWraps.push(wrap);
    return wrap;
}
function addFrame(wrap, doc, { onload, annotate: annotateFn } = {}) {
    const iframe = document.createElement("iframe");
    if (!wrap._fluid) iframe.style.width = wrap._natW + "px";
    iframe.style.height = "160px";
    iframe.onload = () => {
        if (annotateFn) annotateFn(iframe);
        // Keyboard shortcuts must keep working after a click focuses
        // the frame; forward keydown from the frame document.
        try {
            iframe.contentWindow.addEventListener("keydown", onKeydown);
        } catch {
            /* cross-origin never happens for srcdoc; belt and braces */
        }
        measureWrap(wrap);
        if (onload) onload(iframe);
    };
    iframe.srcdoc = doc;
    wrap._frames.push(iframe);
    wrap.appendChild(iframe);
    liveFrames.push(iframe);
    return iframe;
}
function measureWrap(wrap) {
    if (!wrap.isConnected) return;
    let h = 120;
    for (const f of wrap._frames) {
        const d = f.contentDocument;
        if (d) h = Math.max(h, Math.min(d.documentElement.scrollHeight, 900));
    }
    wrap._natH = h;
    for (const f of wrap._frames) f.style.height = h + "px";
    applyScale(wrap);
}
function applyScale(wrap) {
    if (!wrap.isConnected) return;
    if (wrap._fluid) {
        // width tracks the container; only stacked fluid wraps need an
        // explicit height (their iframes are absolutely positioned)
        wrap.style.height = wrap.classList.contains("stacked")
            ? wrap._natH + "px"
            : "";
        if (wrap._zoomNote) wrap._zoomNote.textContent = "";
        if (wrap._onScale) wrap._onScale();
        return;
    }
    const avail = Math.max(120, wrap._availWidth());
    const s = Math.min(1, avail / wrap._natW);
    wrap._scale = s;
    for (const f of wrap._frames) {
        f.style.transform = s === 1 ? "" : "scale(" + s + ")";
    }
    wrap.style.width = Math.round(wrap._natW * s) + "px";
    wrap.style.height = Math.round(wrap._natH * s) + "px";
    if (wrap._zoomNote) {
        wrap._zoomNote.textContent =
            wrap._natW + "px viewport" +
            (s < 1 ? " · shown at " + Math.round(s * 100) + "%" : "");
    }
    if (wrap._onScale) wrap._onScale();
}
let resizeTimer = null;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => scaledWraps.forEach(measureWrap), 100);
});

// Builds the frame document for one side of a dim, preferring real
// story rendering and falling back to snapshot HTML.
function frameDocFor(dim, annotated, side) {
    const story = side === "base" ? entry.storyBefore : entry.storyAfter;
    if (story != null) {
        return { doc: realFrameDoc(story, dim, side), real: true };
    }
    const html = side === "base" ? annotated.beforeHtml : annotated.afterHtml;
    return { doc: snapshotFrameDoc(html, dim), real: false };
}

// ---------- rendering ----------
const mainEl = document.getElementById("main");

function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

function flashChange(id) {
    // Scroll each frame internally (el.scrollIntoView would also drag
    // every ancestor scroller, yanking pane labels out of view), then
    // bring the first frame into the page viewport.
    let firstWrap = null;
    for (const iframe of liveFrames) {
        const doc = iframe.contentDocument;
        if (!doc) continue;
        doc.querySelectorAll(".vhd-flash").forEach((el) => el.classList.remove("vhd-flash"));
        const el = doc.querySelector('[data-vhd-id="' + id + '"]');
        if (el) {
            el.classList.add("vhd-flash");
            const win = iframe.contentWindow;
            const r = el.getBoundingClientRect();
            win.scrollBy({
                top: r.top - win.innerHeight / 2,
                left: 0,
                behavior: "smooth",
            });
            setTimeout(() => el.classList.remove("vhd-flash"), 1600);
            firstWrap ??= iframe.closest(".frame-wrap");
        }
    }
    firstWrap?.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function segment(options, current, onPick) {
    const seg = document.createElement("div");
    seg.className = "seg";
    for (const opt of options) {
        const b = document.createElement("button");
        b.textContent = opt.label;
        if (opt.value === current) b.className = "active";
        b.onclick = () => onPick(opt.value);
        seg.appendChild(b);
    }
    return seg;
}
function toggle(label, checked, onChange) {
    const l = document.createElement("label");
    l.className = "toggle";
    const c = document.createElement("input");
    c.type = "checkbox";
    c.checked = checked;
    c.onchange = () => onChange(c.checked);
    l.append(c, document.createTextNode(label));
    l._input = c;
    return l;
}

function renderInspector(changes) {
    const aside = document.createElement("aside");
    aside.className = "inspector";
    const h = document.createElement("h3");
    h.textContent = changes.length + " changed element" + (changes.length === 1 ? "" : "s");
    aside.appendChild(h);
    for (const change of changes) {
        const row = document.createElement("div");
        row.className = "change-row";
        const btn = document.createElement("button");
        btn.innerHTML =
            '<span class="where">' + esc(change.path.join(" › ") || "(root)") + "</span> " +
            '<span class="count">— ' + change.props.length + "</span>";
        btn.onclick = () => {
            const opening = !row.classList.contains("open");
            row.classList.toggle("open");
            if (opening && change.id) flashChange(change.id);
        };
        row.appendChild(btn);
        const table = document.createElement("table");
        for (const p of change.props) {
            const tr = document.createElement("tr");
            tr.innerHTML =
                '<td class="prop">' + esc(p.name) + "</td>" +
                '<td><span class="b">' + esc(p.before) + '</span><span class="a">' + esc(p.after) + "</span></td>";
            table.appendChild(tr);
        }
        row.appendChild(table);
        aside.appendChild(row);
    }
    return aside;
}

function renderDiffPane(dim) {
    const pre = document.createElement("pre");
    pre.className = "diff";
    pre.innerHTML = dim.diff
        .split("\n")
        .map((line) => {
            const cls = line.startsWith("+") ? "add" : line.startsWith("-") ? "del" : line.startsWith("@@") ? "hunk" : "";
            return cls ? '<span class="' + cls + '">' + esc(line) + "</span>" : esc(line);
        })
        .join("\n");
    return pre;
}

function renderSidePanes(dim, annotated) {
    const panes = document.createElement("div");
    panes.className = "panes";
    for (const [title, side, present] of [
        ["Base (" + PAGE.baseRefShort + ")", "base", !!dim.before],
        ["This PR", "head", !!dim.after],
    ]) {
        const pane = document.createElement("div");
        pane.className = "pane";
        const h = document.createElement("h3");
        h.textContent = title;
        pane.appendChild(h);
        if (!present) {
            const np = document.createElement("div");
            np.className = "not-present";
            np.textContent = "not present in " + (side === "head" ? "this PR" : "base");
            pane.appendChild(np);
        } else {
            const { doc, real } = frameDocFor(dim, annotated, side);
            const wrap = makeWrap(dim, () => pane.clientWidth);
            addFrame(wrap, doc, {
                annotate: real
                    ? (f) => applyRealHighlights(f, annotated.changes, side === "base" ? "before" : "after")
                    : null,
            });
            pane.appendChild(wrap);
            const note = document.createElement("div");
            note.className = "zoom-note";
            wrap._zoomNote = note;
            pane.appendChild(note);
        }
        panes.appendChild(pane);
    }
    return panes;
}

function renderStack(dim, annotated, mode) {
    const stack = document.createElement("div");
    stack.className = "stack " + (dim.width === null ? "fluid" : "fixed");
    const h = document.createElement("h3");
    stack.appendChild(h);

    const wrap = makeWrap(dim, () =>
        mainEl.querySelector(".render-area").clientWidth,
    );
    wrap.classList.add("stacked");
    const baseDoc = frameDocFor(dim, annotated, "base");
    const headDoc = frameDocFor(dim, annotated, "head");
    const base = addFrame(wrap, baseDoc.doc, {
        annotate: baseDoc.real
            ? (f) => applyRealHighlights(f, annotated.changes, "before")
            : null,
    });
    const top = addFrame(wrap, headDoc.doc, {
        annotate: headDoc.real
            ? (f) => applyRealHighlights(f, annotated.changes, "after")
            : null,
    });
    stack.appendChild(wrap);
    const note = document.createElement("div");
    note.className = "zoom-note";
    wrap._zoomNote = note;

    if (mode === "swipe") {
        h.textContent = "Swipe — left: this PR, right: base";
        const divider = document.createElement("div");
        divider.className = "divider";
        wrap.appendChild(divider);
        const controls = document.createElement("div");
        controls.className = "stack-controls swipe-controls";
        const slider = document.createElement("input");
        slider.type = "range";
        slider.min = "0";
        slider.max = "100";
        slider.step = "any";
        slider.value = state.swipe;
        const apply = () => {
            const p = Number(slider.value);
            state.swipe = p;
            top.style.clipPath = "inset(0 " + (100 - p) + "% 0 0)";
            divider.style.left = "calc(" + p + "% - 1px)";
        };
        slider.oninput = apply;
        wrap._onScale = () => {
            controls.style.width =
                wrap.style.width && wrap.style.width !== "" ? wrap.style.width : "100%";
            apply();
        };
        apply();
        controls.appendChild(slider);
        stack.appendChild(controls);
    } else if (mode === "onion") {
        h.textContent = "Onion skin — this PR over base";
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
        slider.value = state.onion;
        const apply = () => {
            state.onion = Number(slider.value);
            top.style.opacity = state.onion / 100;
        };
        slider.oninput = apply;
        apply();
        controls.append(left, slider, right);
        stack.appendChild(controls);
    } else {
        // flip: toggle in place — no re-render, no iframe reload.
        // The frames must not intercept the click (or keyboard focus),
        // so disable pointer events on them in this mode.
        wrap.classList.add("flip");
        const badge = document.createElement("div");
        badge.className = "layer-badge";
        wrap.appendChild(badge);
        let showing = "after";
        const apply = () => {
            top.style.visibility = showing === "after" ? "visible" : "hidden";
            badge.textContent = showing === "after" ? "THIS PR" : "BASE";
            h.textContent =
                "Flip — showing " + (showing === "after" ? "this PR" : "base") +
                " (click or press f)";
        };
        flipToggle = () => {
            showing = showing === "after" ? "before" : "after";
            apply();
        };
        apply();
        wrap.style.cursor = "pointer";
        wrap.onclick = flipToggle;
    }
    stack.appendChild(note);
    return stack;
}

function render({ preserveScroll = false } = {}) {
    const keepScroll = preserveScroll ? window.scrollY : 0;
    liveFrames = [];
    scaledWraps = [];
    flipToggle = null;
    highlightsCheckbox = null;
    flagButton = null;
    mainEl.textContent = "";
    if (preserveScroll) requestAnimationFrame(() => window.scrollTo(0, keepScroll));
    const dim = entry.dims[Math.min(state.dimIdx, entry.dims.length - 1)];

    const toolbar = document.createElement("div");
    toolbar.className = "toolbar";
    if (entry.dims.length > 1) {
        toolbar.appendChild(
            segment(
                entry.dims.map((d, i) => ({
                    label: d.suffix || "fluid",
                    value: i,
                })),
                Math.min(state.dimIdx, entry.dims.length - 1),
                (v) => { state.dimIdx = v; syncDimHash(); render({ preserveScroll: true }); },
            ),
        );
    }
    toolbar.appendChild(
        segment(
            [
                { label: "Side by side", value: "side" },
                { label: "Swipe", value: "swipe" },
                { label: "Onion", value: "onion" },
                { label: "Flip", value: "flip" },
            ],
            state.mode,
            (v) => { state.mode = v; state.view = "rendered"; savePrefs(); render({ preserveScroll: true }); },
        ),
    );
    toolbar.appendChild(
        segment(
            [
                { label: "Rendered", value: "rendered" },
                { label: "Text diff", value: "diff" },
            ],
            state.view,
            (v) => { state.view = v; render({ preserveScroll: true }); },
        ),
    );
    toolbar.appendChild(
        segment(
            [
                { label: "Light", value: "light" },
                { label: "Dark", value: "dark" },
            ],
            state.theme,
            (v) => { state.theme = v; savePrefs(); render({ preserveScroll: true }); },
        ),
    );
    const hl = toggle("Highlights", state.highlights, applyHighlights);
    highlightsCheckbox = hl._input;
    toolbar.appendChild(hl);
    const grow = document.createElement("div");
    grow.className = "grow";
    toolbar.appendChild(grow);
    const flag = document.createElement("button");
    flag.className = "flag";
    flag.type = "button";
    const syncFlag = () => {
        const on = isFlagged();
        flag.classList.toggle("on", on);
        flag.textContent = on ? "⚑ Flagged" : "⚑ Flag";
        flag.title = on
            ? "Flagged for follow-up — click to unflag"
            : "Flag this diff for follow-up (x)";
    };
    flag.onclick = () => {
        setFlagged(!isFlagged());
        syncFlag();
    };
    syncFlag();
    flagButton = { sync: syncFlag };
    toolbar.appendChild(flag);
    mainEl.appendChild(toolbar);

    if (state.view === "diff") {
        mainEl.appendChild(renderDiffPane(dim));
        return;
    }

    const annotated = annotate(dim);
    const stage = document.createElement("div");
    stage.className = "stage";
    const renderArea = document.createElement("div");
    renderArea.className = "render-area";
    stage.appendChild(renderArea);
    if (annotated.changes.length) {
        stage.appendChild(renderInspector(annotated.changes));
    }
    mainEl.appendChild(stage);
    if (state.mode === "side" || !dim.before || !dim.after) {
        renderArea.appendChild(renderSidePanes(dim, annotated));
    } else {
        renderArea.appendChild(renderStack(dim, annotated, state.mode));
    }
    scaledWraps.forEach(applyScale);
}

// ---------- keyboard ----------
// Named so frame documents can forward their keydown events here.
const MODES = ["side", "swipe", "onion", "flip"];
function onKeydown(e) {
    // Never intercept browser/system chords (Ctrl+R must reload, not
    // toggle state).
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    // Don't steal keys from form controls (sliders use arrows, story
    // content may contain inputs/textareas).
    if (e.target?.closest?.("input, textarea, select, [contenteditable]")) {
        return;
    }
    if (e.key === "j" || e.key === "ArrowDown") {
        if (PAGE.nextHref) location.href = PAGE.nextHref;
    } else if (e.key === "k" || e.key === "ArrowUp") {
        if (PAGE.prevHref) location.href = PAGE.prevHref;
    } else if (e.key >= "1" && e.key <= "9") {
        const i = Number(e.key) - 1;
        if (i < entry.dims.length) {
            state.dimIdx = i;
            syncDimHash();
            render({ preserveScroll: true });
        }
    } else if (e.key === "m") {
        state.mode = MODES[(MODES.indexOf(state.mode) + 1) % MODES.length];
        state.view = "rendered";
        savePrefs();
        render({ preserveScroll: true });
    } else if (e.key === "f" && flipToggle) {
        flipToggle();
    } else if (e.key === "t") {
        state.theme = state.theme === "light" ? "dark" : "light";
        savePrefs();
        render({ preserveScroll: true });
    } else if (e.key === "h") {
        applyHighlights(!state.highlights);
    } else if (e.key === "d") {
        state.view = state.view === "diff" ? "rendered" : "diff";
        render({ preserveScroll: true });
    } else if (e.key === "x") {
        setFlagged(!isFlagged());
        if (flagButton) flagButton.sync();
    } else if (e.key === "Escape") {
        location.href = PAGE.indexHref;
    }
}
document.addEventListener("keydown", onKeydown);

// ---------- boot ----------
document.getElementById("title").textContent = entry.component + " / " + entry.story;
document.getElementById("path").textContent = entry.file;
document.title = entry.component + " / " + entry.story + " — visual review";
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
render();
