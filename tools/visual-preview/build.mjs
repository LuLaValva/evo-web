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
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createPatch } from "diff";

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
    const { createRequire } = await import("node:module");
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

const baseRef = resolveBaseRef();
const { entries, sectionCount, unchangedSections } = buildManifest(baseRef);
await attachStoryHtml(entries, baseRef);
const tokens = readTokensCss();
const assets = await readRefAssets(baseRef);

const data = {
    baseRef,
    // Only truncate hex SHAs; ref names like origin/main stay readable.
    baseRefShort: /^[0-9a-f]{20,}$/.test(baseRef)
        ? baseRef.slice(0, 12)
        : baseRef,
    entries,
    sectionCount,
    unchangedSections,
};

const template = fs.readFileSync(path.join(__dirname, "template.html"), "utf8");
const inject = (src, marker, value) => {
    if (!src.includes(marker)) {
        throw new Error(`template.html is missing the ${marker} marker`);
    }
    return src.replace(marker, () => value);
};
let html = template;
html = inject(
    html,
    "/*__DATA__*/",
    JSON.stringify(data).replace(/<\//g, "<\\/"),
);
html = inject(html, "/*__TOKENS_LIGHT__*/", JSON.stringify(tokens.light));
html = inject(html, "/*__TOKENS_DARK__*/", JSON.stringify(tokens.dark));
const injectAsset = (marker, value) =>
    inject(html, marker, JSON.stringify(value).replace(/<\//g, "<\\/"));
html = injectAsset("/*__CSS_BASE__*/", assets.base.css);
html = injectAsset("/*__CSS_HEAD__*/", assets.head.css);
html = injectAsset("/*__SPRITE_BASE__*/", assets.base.sprite);
html = injectAsset("/*__SPRITE_HEAD__*/", assets.head.sprite);

const out =
    arg("--out") ?? path.join(__dirname, "dist", "visual-preview.html");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html);

// Machine-readable summary for CI (sticky PR comment content).
const byComponent = {};
for (const e of entries) {
    byComponent[e.component] ??= { changed: 0, added: 0, removed: 0 };
    for (const d of e.dims) byComponent[e.component][d.status]++;
}
fs.writeFileSync(
    path.join(path.dirname(out), "summary.json"),
    JSON.stringify(
        {
            baseRef: data.baseRefShort,
            totalStories: entries.length,
            totalSections: sectionCount,
            unchangedSections,
            components: byComponent,
        },
        null,
        2,
    ),
);

const components = new Set(entries.map((e) => e.component));
console.log(
    `visual-preview: ${entries.length} changed story(ies) / ${sectionCount} section(s) ` +
        `across ${components.size} component(s) (${unchangedSections} unchanged) vs ${data.baseRefShort}`,
);
console.log(`→ ${path.relative(process.cwd(), out)}`);
