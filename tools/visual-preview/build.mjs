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
import path from "node:path";
import { fileURLToPath } from "node:url";
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
    const entries = [];
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
            const status =
                a === undefined
                    ? "added"
                    : b === undefined
                      ? "removed"
                      : "changed";
            entries.push({
                component: componentFromPath(file),
                file,
                label,
                ...parseLabel(label),
                status,
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
    return { entries, unchangedSections };
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
const { entries, unchangedSections } = buildManifest(baseRef);
const tokens = readTokensCss();

const data = {
    baseRef,
    baseRefShort: baseRef.slice(0, 12),
    entries,
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

const out =
    arg("--out") ?? path.join(__dirname, "dist", "visual-preview.html");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html);

// Machine-readable summary for CI (sticky PR comment content).
const byComponent = {};
for (const e of entries) {
    byComponent[e.component] ??= { changed: 0, added: 0, removed: 0 };
    byComponent[e.component][e.status]++;
}
fs.writeFileSync(
    path.join(path.dirname(out), "summary.json"),
    JSON.stringify(
        {
            baseRef: data.baseRefShort,
            totalSections: entries.length,
            unchangedSections,
            components: byComponent,
        },
        null,
        2,
    ),
);

const components = new Set(entries.map((e) => e.component));
console.log(
    `visual-preview: ${entries.length} changed section(s) across ${components.size} component(s) ` +
        `(${unchangedSections} unchanged) vs ${data.baseRefShort}`,
);
console.log(`→ ${path.relative(process.cwd(), out)}`);
