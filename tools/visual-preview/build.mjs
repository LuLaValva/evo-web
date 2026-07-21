#!/usr/bin/env node
/**
 * Builds the visual-regression preview viewer: a single self-contained HTML
 * file showing rendered before/after for every changed visual-html snapshot
 * section, plus the raw text diff.
 *
 * The same artifact serves local review and CI (workflow artifact or per-PR
 * deploy) — visual-html snapshots are renderable HTML with unresolved
 * var() token references, so the viewer only needs token CSS to render
 * them, not the component CSS of either ref.
 *
 * Usage:
 *   node tools/visual-preview/build.mjs [--base <git-ref>] [--out <file>]
 *
 * --base defaults to the merge base with origin/main (falling back to
 * main), so the diff matches what a PR against main would show.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createPatch } from "diff";
import { createAnnotator } from "./lib/diff.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function git(args, opts = {}) {
    return execFileSync("git", args, {
        encoding: "utf8",
        cwd: repoRoot,
        maxBuffer: 64 * 1024 * 1024,
        ...opts,
    });
}

const argv = process.argv.slice(2);
function arg(name) {
    const i = argv.indexOf(name);
    return i === -1 ? undefined : argv[i + 1];
}

const repoRoot = execFileSync("git", ["rev-parse", "--show-toplevel"], {
    encoding: "utf8",
}).trim();

const SNAP_GLOB = "packages/skin/src/sass/**/__snapshots__/*.snap";
const TOKENS_DIR = "packages/skin/dist/tokens";

function resolveBaseRef() {
    const explicit = arg("--base");
    if (explicit) return explicit;
    for (const ref of ["origin/main", "main"]) {
        try {
            return git(["merge-base", "HEAD", ref]).trim();
        } catch {
            // ref doesn't exist locally; try the next candidate
        }
    }
    throw new Error(
        "Could not resolve a base ref (no origin/main or main); pass --base <ref>",
    );
}

function changedSnapFiles(baseRef) {
    const tracked = git(["diff", "--name-only", baseRef, "--", SNAP_GLOB])
        .split("\n")
        .filter(Boolean);
    const untracked = git([
        "ls-files",
        "--others",
        "--exclude-standard",
        "--",
        SNAP_GLOB,
    ])
        .split("\n")
        .filter(Boolean);
    return [...new Set([...tracked, ...untracked])].sort();
}

function readAtRef(baseRef, file) {
    try {
        return git(["show", `${baseRef}:${file}`], {
            stdio: ["pipe", "pipe", "ignore"],
        });
    } catch {
        return ""; // file does not exist at the base ref
    }
}

function readWorkingTree(file) {
    try {
        return fs.readFileSync(path.join(repoRoot, file), "utf8");
    } catch {
        return ""; // deleted in the working tree
    }
}

/**
 * Splits a .snap file into its per-story sections.
 * Section header format (see packages/skin/test/visual/visual.spec.js):
 *   ┌─ <storyName> @ <width>px[ rtl]
 * @returns Map<label, body>
 */
function parseSections(content) {
    const sections = new Map();
    if (!content) return sections;
    const parts = content.split(/^┌─ /m).slice(1);
    for (const part of parts) {
        const newline = part.indexOf("\n");
        const label = part.slice(0, newline).trim();
        sections.set(label, part.slice(newline + 1).replace(/\n+$/, ""));
    }
    // Secondary dimensions identical to the default capture are stored as
    // "(same as <width>px)" references — resolve them so the viewer can
    // render and diff every section standalone.
    for (const [label, body] of sections) {
        const ref = body.match(/^\(same as (\d+px(?: rtl)?)\)$/);
        if (ref) {
            const story = label.replace(/ @ [^@]*$/, "");
            const target = sections.get(`${story} @ ${ref[1]}`);
            if (target !== undefined) sections.set(label, target);
        }
    }
    return sections;
}

function parseLabel(label) {
    const m = label.match(/^(.*) @ (\d+)px( rtl)?$/);
    if (!m) return { story: label, width: null, rtl: false };
    return { story: m[1], width: Number(m[2]), rtl: Boolean(m[3]) };
}

function componentFromPath(file) {
    const m = file.match(/packages\/skin\/src\/sass\/([^/]+)\//);
    return m ? m[1] : file;
}

function buildManifest(baseRef) {
    // Story-level entries, each carrying its changed dimensions, so the
    // viewer shows one navigation row per story with dimension tabs.
    const byStory = new Map();
    let sectionCount = 0;
    let unchangedSections = 0;
    for (const file of changedSnapFiles(baseRef)) {
        const before = parseSections(readAtRef(baseRef, file));
        const after = parseSections(readWorkingTree(file));
        const labels = [...new Set([...before.keys(), ...after.keys()])];
        for (const label of labels) {
            const a = before.get(label);
            const b = after.get(label);
            if (a === b) {
                unchangedSections++;
                continue;
            }
            sectionCount++;
            const { story, width, rtl } = parseLabel(label);
            const key = `${file} ${story}`;
            if (!byStory.has(key)) {
                byStory.set(key, {
                    component: componentFromPath(file),
                    file,
                    story,
                    dims: [],
                });
            }
            byStory.get(key).dims.push({
                suffix: width === null ? "" : label.replace(/^.* @ /, ""),
                width,
                rtl,
                status:
                    a === undefined
                        ? "added"
                        : b === undefined
                          ? "removed"
                          : "changed",
                before: a ?? "",
                after: b ?? "",
                diff: createPatch(label, a ?? "", b ?? "", "", "", {
                    context: 3,
                })
                    .split("\n")
                    .slice(4)
                    .join("\n"),
            });
        }
    }
    const entries = [...byStory.values()];
    for (const entry of entries) {
        entry.dims.sort(
            (a, b) =>
                Number(a.rtl) - Number(b.rtl) ||
                (a.width ?? 0) - (b.width ?? 0),
        );
    }
    return { entries, sectionCount, unchangedSections };
}

// ---------------------------------------------------------------------------
// Real story rendering inputs: the viewer renders each changed story's HTML
// against the skin bundle compiled from that ref's SCSS sources (see
// bundleCssAtRef below). Story files are self-contained
// ESM modules whose exports return HTML strings; import them via a temp .mjs
// copy (the skin package is CJS, so .js can't be imported as ESM directly).
// ---------------------------------------------------------------------------
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "visual-preview-"));
process.on("exit", () => fs.rmSync(tmpDir, { recursive: true, force: true }));
let tmpSeq = 0;
const storyModuleCache = new Map();

function storySourceFor(snapFile) {
    return snapFile
        .replace("/__snapshots__/", "/")
        .replace(/\.snap$/, ".stories.js");
}

async function loadStoryModule(ref, storyFile) {
    const key = `${ref}:${storyFile}`;
    if (storyModuleCache.has(key)) return storyModuleCache.get(key);
    let mod = null;
    try {
        const source =
            ref === null ? readWorkingTree(storyFile) : readAtRef(ref, storyFile);
        if (source) {
            const tmp = path.join(tmpDir, `story-${tmpSeq++}.mjs`);
            fs.writeFileSync(tmp, source);
            mod = await import(pathToFileURL(tmp).href);
        }
    } catch (err) {
        console.warn(`visual-preview: could not load ${key}: ${err.message}`);
    }
    storyModuleCache.set(key, mod);
    return mod;
}

async function attachStoryHtml(entries, baseRef) {
    for (const entry of entries) {
        const storyFile = storySourceFor(entry.file);
        const renderFrom = async (mod) => {
            const fn = mod?.[entry.story];
            if (typeof fn !== "function") return null;
            try {
                return String(fn());
            } catch (err) {
                console.warn(
                    `visual-preview: ${entry.story} in ${storyFile} threw: ${err.message}`,
                );
                return null;
            }
        };
        entry.storyBefore = await renderFrom(
            await loadStoryModule(baseRef, storyFile),
        );
        entry.storyAfter = await renderFrom(
            await loadStoryModule(null, storyFile),
        );
    }
}

// The committed dist bundle is only refreshed by full builds, so it can be
// stale relative to the SCSS a PR actually changes (per-component dist CSS
// is often rebuilt without the bundle). Compile the bundle from each ref's
// sources instead so the frames always render the CSS under review; fall
// back to the committed dist bundle only if a ref's sources don't compile.
const BUNDLE_SCSS = "packages/skin/src/sass/bundles/skin-full.scss";
const BUNDLE_DIST = "packages/skin/dist/bundles/skin-full.css";
const SPRITE_DIST = "packages/skin/dist/svg/icons.svg";

async function compileBundle(rootDir) {
    const sass = createRequire(path.join(repoRoot, "package.json"))("sass");
    return sass.compile(path.join(rootDir, BUNDLE_SCSS), {
        loadPaths: [path.join(repoRoot, "node_modules")],
        style: "expanded",
        quietDeps: true,
        logger: { warn() {}, debug() {} },
    }).css;
}

async function bundleCssAtRef(ref) {
    // ref === null means the working tree.
    try {
        if (ref === null) return await compileBundle(repoRoot);
        const dir = path.join(tmpDir, `ref-${tmpSeq++}`);
        fs.mkdirSync(dir, { recursive: true });
        execFileSync(
            "bash",
            ["-c", `git archive '${ref}' packages/skin/src | tar -x -C '${dir}'`],
            { cwd: repoRoot },
        );
        return await compileBundle(dir);
    } catch (err) {
        console.warn(
            `visual-preview: compiling skin bundle at ${ref ?? "worktree"} failed ` +
                `(${err.message.split("\n")[0]}); falling back to committed dist bundle`,
        );
        return ref === null
            ? readWorkingTree(BUNDLE_DIST)
            : readAtRef(ref, BUNDLE_DIST) || readWorkingTree(BUNDLE_DIST);
    }
}

async function readRefAssets(baseRef) {
    const head = {
        css: await bundleCssAtRef(null),
        sprite: readWorkingTree(SPRITE_DIST),
    };
    const base = {
        css: await bundleCssAtRef(baseRef),
        sprite: readAtRef(baseRef, SPRITE_DIST) || head.sprite,
    };
    return { base, head };
}

function readTokensCss() {
    const read = (f) => {
        try {
            return fs.readFileSync(path.join(repoRoot, TOKENS_DIR, f), "utf8");
        } catch {
            return "";
        }
    };
    const light = read("evo-core.css") + "\n" + read("evo-light.css");
    // evo-dark.css wraps everything in @media (prefers-color-scheme: dark);
    // strip the wrapper so the viewer can force dark mode via a toggle.
    let dark = read("evo-dark.css");
    const m = dark.match(
        /@media \(prefers-color-scheme: dark\) \{([\s\S]*)\}\s*$/,
    );
    if (m) dark = m[1];
    return { light, dark };
}

// ---------------------------------------------------------------------------
// Output: a small index page plus ONE PAGE PER STORY (s/<slug>.html), with
// the heavy shared assets (per-ref compiled CSS, tokens, sprites, viewer
// chrome) emitted once into assets/ and referenced by every page.
//
// Per-story pages give every diff a stable, shareable URL, and make
// "reviewed" the browser's own notion of *visited*: opening a page is the
// review action (links dim natively via :visited; a localStorage mirror
// powers the index's progress counter, content-hashed so a diff that
// changes on a later push reverts to unviewed). A flag button marks diffs
// needing follow-up.
// ---------------------------------------------------------------------------

// djb2 — matches nothing external; just a stable cheap content stamp.
function contentHash(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
}

// Slug from the snapshot path + story name: stable across builds so
// :visited state and shared links survive new pushes of the same PR.
function slugFor(entry) {
    const rel = entry.file
        .replace(/^packages\/skin\/src\/sass\//, "")
        .replace("/__snapshots__/", "/")
        .replace(/\.snap$/, "");
    return (rel + "--" + entry.story).replace(/[^A-Za-z0-9._-]+/g, "-");
}

function escapeHtml(s) {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/"/g, "&quot;");
}

const jsonInline = (v) => JSON.stringify(v).replace(/<\//g, "<\\/");

function worstStatus(e) {
    const st = new Set(e.dims.map((d) => d.status));
    return st.has("removed") ? "removed" : st.has("added") ? "added" : "changed";
}

const baseRef = resolveBaseRef();
const { entries, sectionCount, unchangedSections } = buildManifest(baseRef);
await attachStoryHtml(entries, baseRef);
const tokens = readTokensCss();
const assets = await readRefAssets(baseRef);

// Only truncate hex SHAs; ref names like origin/main stay readable.
const baseRefShort = /^[0-9a-f]{20,}$/.test(baseRef)
    ? baseRef.slice(0, 12)
    : baseRef;

// Disambiguate duplicate story names within a component with the snapshot
// file's basename, and precompute slugs/hashes.
{
    const seen = new Map();
    for (const e of entries) {
        const k = e.component + "/" + e.story;
        seen.set(k, (seen.get(k) || 0) + 1);
    }
    for (const e of entries) {
        e.qualifier =
            seen.get(e.component + "/" + e.story) > 1
                ? e.file.replace(/^.*__snapshots__\//, "").replace(/\.snap$/, "")
                : null;
        e.slug = slugFor(e);
        e.hash = contentHash(
            e.file + "|" + e.story + "|" + e.dims.map((d) => d.diff).join(" "),
        );
    }
}

const outDir = arg("--out") ?? path.join(__dirname, "dist");
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(path.join(outDir, "assets"), { recursive: true });
fs.mkdirSync(path.join(outDir, "s"), { recursive: true });

// ---- shared assets ----
const writeAsset = (name, content) =>
    fs.writeFileSync(path.join(outDir, "assets", name), content);
writeAsset("viewer.css", fs.readFileSync(path.join(__dirname, "assets", "viewer.css")));
writeAsset("story.js", fs.readFileSync(path.join(__dirname, "assets", "story.js")));
writeAsset("prefetch.js", fs.readFileSync(path.join(__dirname, "assets", "prefetch.js")));
writeAsset("base.css", assets.base.css);
writeAsset("head.css", assets.head.css);
writeAsset("tokens-light.css", tokens.light);
writeAsset("tokens-dark.css", tokens.dark);
// Sprites are injected into srcdoc frames by a script file (frames can't
// fetch() under file://, but <script src> works and is cached).
const spriteJs = (svg) =>
    "document.write(" +
    jsonInline('<div hidden aria-hidden="true">' + svg + "</div>") +
    ");";
writeAsset("sprite-base.js", spriteJs(assets.base.sprite));
writeAsset("sprite-head.js", spriteJs(assets.head.sprite));
// Story-list data for the sidebar every story page renders — shared and
// cached instead of duplicated into each page.
writeAsset(
    "nav.js",
    "window.NAV = " +
        jsonInline({
            entries: entries.map((e) => ({
                slug: e.slug,
                component: e.component,
                story: e.story,
                qualifier: e.qualifier,
                status: worstStatus(e),
                chip:
                    e.dims.length > 1
                        ? e.dims.length + " dims"
                        : e.dims[0]?.suffix || null,
                hash: e.hash,
            })),
        }) +
        ";",
);

// ---- per-story pages (fully rendered at build time) ----
// Pages ship as finished HTML — the element diff runs here under jsdom,
// frame documents are baked into static srcdoc attributes, and the
// inspector/text-diff markup is pre-rendered. Client JS only enhances:
// compare modes, theme/highlight toggles, measuring, review stores.
const { JSDOM } = createRequire(path.join(repoRoot, "package.json"))("jsdom");
const jsdomWindow = new JSDOM("").window;
const annotate = createAnnotator((html) => {
    const body = jsdomWindow.document.createElement("body");
    body.innerHTML = html;
    return body;
});

const escAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

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

// Frame heads resolve shared assets through a relative <base> (srcdoc
// inherits the parent page's base URL). Both token themes are linked with
// dark disabled; the viewer's theme toggle flips the disabled flag at
// runtime instead of rebuilding the frame.
function frameHead(extraCss) {
    return (
        '<base href="../assets/">' +
        extraCss.map((f) => '<link rel="stylesheet" href="' + f + '">').join("") +
        '<link rel="stylesheet" href="tokens-light.css">' +
        '<link rel="stylesheet" href="tokens-dark.css" disabled data-vp-dark>' +
        '<style data-vp-scheme>:root{color-scheme:light}</style>' +
        "<style>" + FRAME_BODY_CSS + HIGHLIGHT_CSS + "</style>"
    );
}
function realFrameDoc(storyHtml, rtl, ref) {
    return (
        '<!doctype html><html dir="' + (rtl ? "rtl" : "ltr") + '">' +
        "<head>" + frameHead([ref === "base" ? "base.css" : "head.css"]) + "</head>" +
        '<body class="vhd-on">' +
        '<script src="sprite-' + ref + '.js"></script>' +
        storyHtml +
        "</body></html>"
    );
}
// Fallback when the story source is unavailable at a ref: render the
// snapshot's inlined-styles HTML (annotated — data-vhd anchors baked in).
// visual-html self-closes childless non-void elements, which HTML parsers
// reject — expand them first.
const VOID_TAGS = /^(?:area|base|br|col|embed|hr|img|input|link|meta|source|track|wbr|use|path|circle|rect|line|polyline|polygon|ellipse|stop)$/;
function expandSelfClosed(html) {
    return html.replace(
        /<([a-z][a-z0-9-]*)((?:[^<>"]|"[^"]*")*)\/>/gi,
        (m, tag, attrs) =>
            VOID_TAGS.test(tag.toLowerCase()) ? m : "<" + tag + attrs + "></" + tag + ">",
    );
}
function snapshotFrameDoc(annotatedHtml, rtl) {
    return (
        '<!doctype html><html dir="' + (rtl ? "rtl" : "ltr") + '">' +
        "<head>" + frameHead([]) +
        '<style>body{font-family:"Market Sans",Arial,sans-serif}</style></head>' +
        '<body class="vhd-on">' +
        expandSelfClosed(annotatedHtml) +
        "</body></html>"
    );
}

function diffPreHtml(diff) {
    return diff
        .split("\n")
        .map((line) => {
            const cls = line.startsWith("+") ? "add" : line.startsWith("-") ? "del" : line.startsWith("@@") ? "hunk" : "";
            const esc = escapeHtml(line);
            return cls ? '<span class="' + cls + '">' + esc + "</span>" : esc;
        })
        .join("\n");
}

function inspectorHtml(changes) {
    let out =
        '<aside class="inspector"><h3>' +
        changes.length + " changed element" + (changes.length === 1 ? "" : "s") +
        "</h3>";
    for (const c of changes) {
        out +=
            '<div class="change-row" data-change-id="' + c.id + '">' +
            '<button type="button"><span class="where">' +
            escapeHtml(c.path.join(" › ") || "(root)") +
            '</span> <span class="count">— ' + c.props.length + "</span></button><table>";
        for (const p of c.props) {
            out +=
                '<tr><td class="prop">' + escapeHtml(p.name) + "</td>" +
                '<td><span class="b">' + escapeHtml(p.before) + '</span><span class="a">' +
                escapeHtml(p.after) + "</span></td></tr>";
        }
        out += "</table></div>";
    }
    return out + "</aside>";
}

function staticMain(entry) {
    let out = "";
    entry.dims.forEach((dim, i) => {
        const annotated = annotate(dim);
        // Runtime only needs the change paths to map highlights onto REAL
        // story frames (fallback frames carry baked data-vhd anchors).
        dim._changes = annotated.changes.map(({ id, kind, path, pathB, pathA }) => ({
            id, kind, path, pathB, pathA,
        }));
        const fluid = dim.width === null;
        const solo = !dim.before || !dim.after;
        out += '<section class="dim-section" id="dim-' + i + '" data-dim="' + i + '">';
        if (entry.dims.length > 1) {
            out += '<h3 class="dim-label">' + escapeHtml(dim.suffix || "fluid width") + "</h3>";
        }
        out += '<div class="stage"><div class="render-area">';
        out +=
            '<div class="duo mode-side ' + (fluid ? "fluid" : "fixed") +
            (solo ? " solo" : "") + '"' + (fluid ? "" : ' data-width="' + dim.width + '"') + ">";
        for (const side of ["base", "head"]) {
            const present = side === "base" ? !!dim.before : !!dim.after;
            out += '<div class="duo-side ' + side + '">';
            out +=
                '<h3 class="pane-label">' +
                escapeHtml(side === "base" ? "Base (" + baseRefShort + ")" : "This PR") +
                "</h3>";
            if (!present) {
                out +=
                    '<div class="not-present">not present in ' +
                    (side === "head" ? "this PR" : "base") +
                    "</div>";
            } else {
                const story = side === "base" ? entry.storyBefore : entry.storyAfter;
                const doc =
                    story != null
                        ? realFrameDoc(story, dim.rtl, side)
                        : snapshotFrameDoc(
                              side === "base" ? annotated.beforeHtml : annotated.afterHtml,
                              dim.rtl,
                          );
                out +=
                    '<div class="frame-wrap ' + (fluid ? "fluid" : "fixed") + '">' +
                    '<iframe loading="lazy" data-side="' + side + '"' +
                    (story != null ? ' data-real="1"' : "") +
                    ' srcdoc="' + escAttr(doc) + '"></iframe></div>';
            }
            out += '<div class="zoom-note"></div></div>';
        }
        out += "</div>"; // .duo
        out += '<pre class="diff" hidden>' + diffPreHtml(dim.diff) + "</pre>";
        out += "</div>"; // .render-area
        if (annotated.changes.length) out += inspectorHtml(annotated.changes);
        out += "</div></section>";
    });
    return out;
}

const storyTemplate = fs.readFileSync(
    path.join(__dirname, "templates", "story.html"),
    "utf8",
);
entries.forEach((entry, i) => {
    const main = staticMain(entry);
    const page = {
        baseRefShort,
        prevHref: i > 0 ? entries[i - 1].slug + ".html" : null,
        nextHref: i < entries.length - 1 ? entries[i + 1].slug + ".html" : null,
        indexHref: "../index.html",
        pos: i + 1,
        total: entries.length,
        slug: entry.slug,
        hash: entry.hash,
        component: entry.component,
        story: entry.story,
        file: entry.file,
        dims: entry.dims.map((d) => ({ changes: d._changes })),
    };
    const html = storyTemplate
        .replace("__TITLE__", escapeHtml(entry.component + " / " + entry.story) + " — visual review")
        .replace("__H1__", escapeHtml(entry.component + " / " + entry.story))
        .replace("__PATH__", escapeHtml(entry.file))
        .replace("__MAIN__", () => main)
        .replace("/*__PAGE__*/", () => jsonInline(page));
    fs.writeFileSync(path.join(outDir, "s", entry.slug + ".html"), html);
});

// ---- index ----
let list = "";
let lastComponent = null;
for (const entry of entries) {
    if (entry.component !== lastComponent) {
        lastComponent = entry.component;
        list += "<h2>" + escapeHtml(entry.component) + "</h2>\n";
    }
    const name =
        escapeHtml(entry.story) +
        (entry.qualifier ? "<small> · " + escapeHtml(entry.qualifier) + "</small>" : "");
    const chip =
        entry.dims.length > 1
            ? '<span class="chip">' + entry.dims.length + " dims</span>"
            : entry.dims[0]?.suffix
              ? '<span class="chip">' + escapeHtml(entry.dims[0].suffix) + "</span>"
              : "";
    const searchText = (entry.component + " " + entry.story + " " + entry.file).toLowerCase();
    list +=
        '<a class="story" href="s/' + entry.slug + '.html"' +
        ' data-slug="' + entry.slug + '" data-hash="' + entry.hash + '"' +
        ' data-text="' + escapeHtml(searchText) + '"' +
        ' title="' + escapeHtml(entry.file) + '">' +
        '<span class="dot ' + worstStatus(entry) + '"></span>' +
        '<span class="name">' + name + "</span>" +
        chip +
        '<span class="flagmark">⚑</span><span class="todo" title="not viewed yet"></span>' +
        "</a>\n";
}
const componentCount = new Set(entries.map((e) => e.component)).size;
const summaryText = entries.length
    ? entries.length + " changed stor" + (entries.length === 1 ? "y" : "ies") +
      " (" + sectionCount + " sections) across " + componentCount +
      " components — vs " + baseRefShort
    : "No visual snapshot changes vs " + baseRefShort;
const indexHtml = fs
    .readFileSync(path.join(__dirname, "templates", "index.html"), "utf8")
    .replace("__SUMMARY__", escapeHtml(summaryText))
    .replace("__LIST__", () =>
        entries.length
            ? list
            : '<div class="empty-state">No visual snapshot changes vs ' +
              escapeHtml(baseRefShort) + "</div>",
    );
fs.writeFileSync(path.join(outDir, "index.html"), indexHtml);

// Legacy single-file URL from earlier deploys/comments → redirect.
fs.writeFileSync(
    path.join(outDir, "visual-preview.html"),
    '<!doctype html><meta charset="utf-8">' +
        '<meta http-equiv="refresh" content="0; url=index.html">' +
        '<a href="index.html">Moved: open index.html</a>',
);

// Machine-readable summary for CI (sticky PR comment content).
const byComponent = {};
for (const e of entries) {
    byComponent[e.component] ??= { changed: 0, added: 0, removed: 0 };
    for (const d of e.dims) byComponent[e.component][d.status]++;
}
fs.writeFileSync(
    path.join(outDir, "summary.json"),
    JSON.stringify(
        {
            baseRef: baseRefShort,
            totalStories: entries.length,
            totalSections: sectionCount,
            unchangedSections,
            components: byComponent,
        },
        null,
        2,
    ),
);

console.log(
    `visual-preview: ${entries.length} changed story(ies) / ${sectionCount} section(s) ` +
        `across ${componentCount} component(s) (${unchangedSections} unchanged) vs ${baseRefShort}`,
);
console.log(`→ ${path.relative(process.cwd(), path.join(outDir, "index.html"))}`);
