/* Reads the committed visual-html snapshots at two refs and pairs them into
   the per-story change manifest the viewer renders. */

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { createPatch } from "diff";

const SNAP_GLOB = "packages/skin/src/sass/**/__snapshots__/*.snap";

export const repoRoot = execFileSync("git", ["rev-parse", "--show-toplevel"], {
  encoding: "utf8",
}).trim();

function git(args, opts = {}) {
  return execFileSync("git", args, {
    encoding: "utf8",
    cwd: repoRoot,
    maxBuffer: 64 * 1024 * 1024,
    ...opts,
  });
}

/** File contents at a ref, or "" when the file does not exist there. */
export function readAtRef(ref, file) {
  try {
    return git(["show", `${ref}:${file}`], {
      stdio: ["pipe", "pipe", "ignore"],
    });
  } catch {
    return "";
  }
}

/** File contents in the working tree, or "" when it has been deleted. */
export function readWorkingTree(file) {
  try {
    return fs.readFileSync(path.join(repoRoot, file), "utf8");
  } catch {
    return "";
  }
}

export function resolveBaseRef(explicit) {
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

/** Only truncate hex SHAs; ref names like origin/main stay readable. */
export function shortenRef(ref) {
  return /^[0-9a-f]{20,}$/.test(ref) ? ref.slice(0, 12) : ref;
}

function changedSnapFiles(baseRef) {
  const tracked = git(["diff", "--name-only", baseRef, "--", SNAP_GLOB]);
  const untracked = git([
    "ls-files",
    "--others",
    "--exclude-standard",
    "--",
    SNAP_GLOB,
  ]);
  const files = (tracked + "\n" + untracked).split("\n").filter(Boolean);
  return [...new Set(files)].sort();
}

/**
 * Splits a .snap file into its per-story sections.
 * Section header format (see packages/skin/test/visual/visual.spec.js):
 *   ┌─ <storyName>[ @ <width>px[ rtl]]
 * @returns Map<label, body>
 */
export function parseSections(content) {
  const sections = new Map();
  if (!content) return sections;
  for (const part of content.split(/^┌─ /m).slice(1)) {
    const newline = part.indexOf("\n");
    const label = part.slice(0, newline).trim();
    sections.set(label, part.slice(newline + 1).replace(/\n+$/, ""));
  }
  // Secondary dimensions identical to the default capture are stored as
  // "(same as <width>px)" references — resolve them so the viewer can
  // render and diff every section standalone.
  for (const [label, body] of sections) {
    const ref = body.match(/^\(same as (\d+px(?: rtl)?)\)$/);
    if (!ref) continue;
    const story = label.replace(/ @ [^@]*$/, "");
    const target = sections.get(`${story} @ ${ref[1]}`);
    if (target !== undefined) sections.set(label, target);
  }
  return sections;
}

function parseLabel(label) {
  const m = label.match(/^(.*) @ (\d+)px( rtl)?$/);
  if (!m) return { story: label, suffix: "", width: null, rtl: false };
  return {
    story: m[1],
    suffix: label.slice(m[1].length + 3),
    width: Number(m[2]),
    rtl: Boolean(m[3]),
  };
}

function componentFromPath(file) {
  const m = file.match(/packages\/skin\/src\/sass\/([^/]+)\//);
  return m ? m[1] : file;
}

function textDiff(label, before, after) {
  return createPatch(label, before, after, "", "", { context: 3 })
    .split("\n")
    .slice(4) // drop the patch header; the viewer supplies its own
    .join("\n");
}

// djb2 — matches nothing external; just a stable, cheap content stamp so a
// story whose diff changes on a later push reverts to unviewed.
function contentHash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h + str.charCodeAt(i)) | 0;
  }
  return (h >>> 0).toString(36);
}

// Slug from the snapshot path + story name: stable across builds so :visited
// state and shared links survive new pushes of the same PR.
function slugFor(file, story) {
  const rel = file
    .replace(/^packages\/skin\/src\/sass\//, "")
    .replace("/__snapshots__/", "/")
    .replace(/\.snap$/, "");
  return (rel + "--" + story).replace(/[^A-Za-z0-9._-]+/g, "-");
}

/**
 * One entry per changed story, each carrying the dimensions that changed, so
 * the viewer shows one navigation row per story with a section per dimension.
 */
export function buildManifest(baseRef) {
  const byStory = new Map();
  let sectionCount = 0;
  let unchangedSections = 0;

  for (const file of changedSnapFiles(baseRef)) {
    const before = parseSections(readAtRef(baseRef, file));
    const after = parseSections(readWorkingTree(file));
    for (const label of new Set([...before.keys(), ...after.keys()])) {
      const a = before.get(label);
      const b = after.get(label);
      if (a === b) {
        unchangedSections++;
        continue;
      }
      sectionCount++;
      const { story, suffix, width, rtl } = parseLabel(label);
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
        suffix,
        width,
        rtl,
        status:
          a === undefined ? "added" : b === undefined ? "removed" : "changed",
        before: a ?? "",
        after: b ?? "",
        diff: textDiff(label, a ?? "", b ?? ""),
      });
    }
  }

  const entries = [...byStory.values()];
  // Duplicate story names within a component are disambiguated by the
  // snapshot file's basename.
  const nameCounts = new Map();
  for (const e of entries) {
    const k = e.component + "/" + e.story;
    nameCounts.set(k, (nameCounts.get(k) || 0) + 1);
  }
  for (const e of entries) {
    e.dims.sort(
      (a, b) =>
        Number(a.rtl) - Number(b.rtl) || (a.width ?? 0) - (b.width ?? 0),
    );
    e.qualifier =
      nameCounts.get(e.component + "/" + e.story) > 1
        ? e.file.replace(/^.*__snapshots__\//, "").replace(/\.snap$/, "")
        : null;
    e.slug = slugFor(e.file, e.story);
    e.hash = contentHash(
      e.file + "|" + e.story + "|" + e.dims.map((d) => d.diff).join(" "),
    );
    // "changed" is the overwhelmingly common case; only the unusual
    // statuses are worth a marker in the story lists.
    const statuses = new Set(e.dims.map((d) => d.status));
    e.status = statuses.has("removed")
      ? "removed"
      : statuses.has("added")
        ? "added"
        : "changed";
  }
  return { entries, sectionCount, unchangedSections };
}

/**
 * visual-html self-closes childless non-void elements, which HTML parsers do
 * not accept: they read `<span …/>` as an opening tag and nest everything that
 * follows inside it. Snapshot markup has to be expanded before it is parsed or
 * rendered, or a story ends up wearing its pointer's rotation.
 */
const VOID_TAGS =
  /^(?:area|base|br|col|embed|hr|img|input|link|meta|source|track|wbr|use|path|circle|rect|line|polyline|polygon|ellipse|stop)$/;
export function expandSelfClosed(markup) {
  return markup.replace(
    /<([a-z][a-z0-9-]*)((?:[^<>"]|"[^"]*")*)\/>/gi,
    (m, tag, attrs) =>
      VOID_TAGS.test(tag.toLowerCase()) ? m : `<${tag}${attrs}></${tag}>`,
  );
}
