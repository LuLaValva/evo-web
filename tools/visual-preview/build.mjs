#!/usr/bin/env node
/**
 * Builds the visual-regression preview viewer: an index page plus one fully
 * rendered page per changed story (s/<slug>.html), with the shared assets
 * (design tokens, icon sprites, viewer chrome) emitted once into assets/.
 * The same output serves local review and CI (workflow artifact or per-PR
 * deploy).
 *
 * Frames render the captured snapshot markup itself — visual-html inlines
 * every visual declaration, so a snapshot needs only the design tokens its
 * var() references resolve against. That keeps the viewer showing exactly
 * what the check compares, with no second rendering path to drift from it.
 *
 * Usage:
 *   node tools/visual-preview/build.mjs [--base <git-ref>] [--out <dir>]
 *     [--pr-number N --pr-url URL --pr-title TITLE]
 *
 * --base defaults to the merge base with origin/main (falling back to main),
 * so the diff matches what a PR against main would show.
 */
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createAnnotator } from "./lib/diff.mjs";
import { json, toString } from "./lib/html.mjs";
import { indexPage, storyPage } from "./lib/render.mjs";
import {
  buildManifest,
  readAtRef,
  readWorkingTree,
  repoRoot,
  resolveBaseRef,
  shortenRef,
} from "./lib/snapshots.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const argv = process.argv.slice(2);
function arg(name) {
  const i = argv.indexOf(name);
  return i === -1 ? undefined : argv[i + 1];
}

const TOKENS_DIR = "packages/skin/dist/tokens";
const SPRITE_DIST = "packages/skin/dist/svg/icons.svg";
const STORYBOOK_STATIC = "packages/skin/.storybook/static";
const BUNDLE_DIST = "packages/skin/dist/bundles/skin-full.css";

const ROOT_SELECTOR = /(^|,)\s*(html|body|:root)\s*(,|$)/;

/**
 * What the bundle declares on the document itself: the custom properties every
 * captured var() resolves against, and the typography and colors captured
 * elements inherit rather than declare. A snapshot records neither — it starts
 * at the story's own container — so frames have to supply them to lay out the
 * way the captured page did.
 *
 * Only top level rules are the light defaults; the bundle's
 * prefers-color-scheme block is kept apart for the viewer's dark toggle rather
 * than hoisted out of its media query and applied unconditionally.
 */
function baseStyles(css) {
  const light = [];
  const dark = [];
  for (const rule of topLevelRules(css)) {
    const prelude = rule.slice(0, rule.indexOf("{"));
    if (ROOT_SELECTOR.test(prelude)) {
      light.push(rule);
    } else if (/prefers-color-scheme:\s*dark/.test(prelude)) {
      for (const nested of topLevelRules(rule.slice(rule.indexOf("{") + 1))) {
        if (ROOT_SELECTOR.test(nested.slice(0, nested.indexOf("{")))) {
          dark.push(nested);
        }
      }
    }
  }
  return { light: light.join("\n"), dark: dark.join("\n") };
}

function* topLevelRules(css) {
  let depth = 0;
  let start = 0;
  for (let i = 0; i < css.length; i++) {
    if (css[i] === "{") depth++;
    else if (css[i] === "}" && --depth === 0) {
      yield css.slice(start, i + 1);
      start = i + 1;
    }
  }
}

function readTokensCss() {
  const read = (f) => readWorkingTree(path.join(TOKENS_DIR, f));
  const light = read("evo-core.css") + "\n" + read("evo-light.css");
  // evo-dark.css wraps everything in @media (prefers-color-scheme: dark);
  // strip the wrapper so the viewer can force dark mode via a toggle.
  const dark = read("evo-dark.css");
  const unwrapped = dark.match(
    /@media \(prefers-color-scheme: dark\) \{([\s\S]*)\}\s*$/,
  );
  return { light, dark: unwrapped ? unwrapped[1] : dark };
}

const baseRef = resolveBaseRef(arg("--base"));
const baseRefShort = shortenRef(baseRef);
const { entries, sectionCount, unchangedSections } = buildManifest(baseRef);

const outDir = arg("--out") ?? path.join(__dirname, "dist");
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(path.join(outDir, "assets"), { recursive: true });
fs.mkdirSync(path.join(outDir, "s"), { recursive: true });
const writeAsset = (name, content) =>
  fs.writeFileSync(path.join(outDir, "assets", name), content);

// ---- shared assets ----
for (const name of ["viewer.css", "viewer.js"]) {
  writeAsset(name, fs.readFileSync(path.join(__dirname, "assets", name)));
}
const tokens = readTokensCss();
writeAsset("tokens-light.css", tokens.light);
writeAsset("tokens-dark.css", tokens.dark);
// Per ref, so a PR that changes one of these variables shows the difference.
const headBundle = readWorkingTree(BUNDLE_DIST);
for (const [side, bundle] of [
  ["head", headBundle],
  ["base", readAtRef(baseRef, BUNDLE_DIST) || headBundle],
]) {
  const base = baseStyles(bundle);
  writeAsset(`base-${side}.css`, base.light);
  writeAsset(`base-${side}-dark.css`, base.dark);
}
// Story markup references these from the site root; the frames point at this
// copy instead, since the viewer is not served from one.
fs.cpSync(path.join(repoRoot, STORYBOOK_STATIC), path.join(outDir, "static"), {
  recursive: true,
  force: true,
});
// Sprites are injected into srcdoc frames by a script file: frames can't
// fetch() under file://, but <script src> works and is cached.
const spriteJs = (svg) =>
  "document.write(" +
  toString(json('<div hidden aria-hidden="true">' + svg + "</div>")) +
  ");";
const headSprite = readWorkingTree(SPRITE_DIST);
writeAsset("sprite-head.js", spriteJs(headSprite));
writeAsset(
  "sprite-base.js",
  spriteJs(readAtRef(baseRef, SPRITE_DIST) || headSprite),
);
// Story list for the sidebar both pages render — shared and cached instead
// of duplicated into every page.
writeAsset(
  "nav.js",
  "const NAV = " +
    toString(
      json({
        entries: entries.map((e) => ({
          slug: e.slug,
          component: e.component,
          story: e.story,
          qualifier: e.qualifier,
          file: e.file,
          status: e.status,
          dims: e.dims.length,
          suffix: e.dims[0]?.suffix || null,
          hash: e.hash,
        })),
      }),
    ) +
    ";",
);

// ---- pages ----
// The element diff runs here, under jsdom: the frames ship as static srcdoc
// documents whose markup already carries the data-vhd highlight anchors.
const { JSDOM } = createRequire(path.join(repoRoot, "package.json"))("jsdom");
const jsdomWindow = new JSDOM("").window;
const annotate = createAnnotator((markup) => {
  const body = jsdomWindow.document.createElement("body");
  body.innerHTML = markup;
  return body;
});

entries.forEach((entry, index) => {
  fs.writeFileSync(
    path.join(outDir, "s", entry.slug + ".html"),
    storyPage(entry, { index, entries, baseRefShort, annotate }),
  );
});
fs.writeFileSync(
  path.join(outDir, "index.html"),
  indexPage({
    entries,
    sectionCount,
    baseRefShort,
    pr: {
      number: arg("--pr-number"),
      url: arg("--pr-url"),
      title: arg("--pr-title"),
    },
  }),
);

// ---- machine-readable summary for the CI comment ----
const components = {};
for (const e of entries) {
  components[e.component] ??= { changed: 0, added: 0, removed: 0 };
  for (const d of e.dims) components[e.component][d.status]++;
}
fs.writeFileSync(
  path.join(outDir, "summary.json"),
  JSON.stringify(
    {
      baseRef: baseRefShort,
      totalStories: entries.length,
      totalSections: sectionCount,
      unchangedSections,
      components,
    },
    null,
    2,
  ),
);

const componentCount = Object.keys(components).length;
console.log(
  `visual-preview: ${entries.length} changed story(ies) / ${sectionCount} section(s) ` +
    `across ${componentCount} component(s) (${unchangedSections} unchanged) vs ${baseRefShort}`,
);
console.log(
  `→ ${path.relative(process.cwd(), path.join(outDir, "index.html"))}`,
);
