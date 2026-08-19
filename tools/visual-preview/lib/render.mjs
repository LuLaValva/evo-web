/* Page rendering. Every page ships as finished HTML: the element diff runs
   at build time, frame documents are baked into static srcdoc attributes, and
   the inspector and text diff are pre-rendered. viewer.js only enhances —
   compare mode, theme and highlight toggles, measuring, review state. */

import { html, json, raw, toString } from "./html.mjs";

// Highlight outlines live inside the frames, keyed off the data-vhd anchors
// the build baked into the snapshot HTML.
const HIGHLIGHT_CSS = `
body.vhd-on [data-vhd=changed]{outline:2px dashed #c026d3;outline-offset:2px}
body.vhd-on [data-vhd=added]{outline:2px dashed #16a34a;outline-offset:2px}
body.vhd-on [data-vhd=removed]{outline:2px dashed #dc2626;outline-offset:2px}
.vhd-flash{outline:3px solid #f59e0b !important;outline-offset:2px}`;

// visual-html self-closes childless non-void elements, which HTML parsers
// reject — expand them so the frame markup nests the way the snapshot means.
const VOID_TAGS =
  /^(?:area|base|br|col|embed|hr|img|input|link|meta|source|track|wbr|use|path|circle|rect|line|polyline|polygon|ellipse|stop)$/;
function expandSelfClosed(markup) {
  return markup.replace(
    /<([a-z][a-z0-9-]*)((?:[^<>"]|"[^"]*")*)\/>/gi,
    (m, tag, attrs) =>
      VOID_TAGS.test(tag.toLowerCase()) ? m : `<${tag}${attrs}></${tag}>`,
  );
}

/**
 * A frame document for one side of one dimension. Snapshots carry every
 * visual declaration inline, so the only stylesheets a frame needs are the
 * design tokens the inline values reference through var().
 *
 * Asset URLs carry an explicit ../assets/ prefix (relative to the parent /s/
 * page — srcdoc documents resolve against the parent's base URL).
 * Deliberately NOT a <base> element: Chrome's speculative preload scanner
 * fetches link and script URLs before <base> applies, producing a wave of
 * aborted /s/* 404s per frame. Both token themes are linked with dark
 * disabled; the theme toggle flips that flag rather than rebuilding frames.
 */
export function frameDoc(annotatedHtml, { rtl, side }) {
  return toString(
    html`<!doctype html>
      <html dir="${rtl ? "rtl" : "ltr"}">
        <head>
          <link rel="stylesheet" href="../assets/vars-${side}.css" />
          <link
            rel="stylesheet"
            href="../assets/vars-${side}-dark.css"
            disabled
            data-vp-dark
          />
          <link rel="stylesheet" href="../assets/tokens-light.css" />
          <link
            rel="stylesheet"
            href="../assets/tokens-dark.css"
            disabled
            data-vp-dark
          />
          <style data-vp-scheme>
            :root {
              color-scheme: light;
            }
          </style>
          <style>
            body{margin:16px;font-family:"Market Sans",Arial,sans-serif;background:var(--color-background-primary,#fff);color:var(--color-foreground-primary,#111)}${raw(
              HIGHLIGHT_CSS,
            )}
          </style>
        </head>
        <body>
          <script src="../assets/sprite-${side}.js"></script>
          ${raw(expandSelfClosed(annotatedHtml))}
        </body>
      </html>`,
  );
}

function diffPre(diff) {
  const lines = diff.split("\n").map((line) => {
    const cls = line.startsWith("+")
      ? "add"
      : line.startsWith("-")
        ? "del"
        : line.startsWith("@@")
          ? "hunk"
          : "";
    return cls ? html`<span class="${cls}">${line}</span>` : html`${line}`;
  });
  return html`<pre class="diff" hidden>
${raw(lines.map(toString).join("\n"))}</pre
  >`;
}

function inspector(changes) {
  if (!changes.length) return "";
  return html`<aside class="inspector">
    <h3>${changes.length} changed element${changes.length === 1 ? "" : "s"}</h3>
    ${changes.map(
      (c) =>
        html`<div class="change-row" data-change-id="${c.id}">
          <button type="button">
            <span class="where">${c.path.join(" › ") || "(root)"}</span>
            <span class="count">— ${c.props.length}</span>
          </button>
          <table>
            ${c.props.map(
              (p) =>
                html`<tr>
                  <td class="prop">${p.name}</td>
                  <td>
                    <span class="b">${p.before}</span>
                    <span class="a">${p.after}</span>
                  </td>
                </tr>`,
            )}
          </table>
        </div>`,
    )}
  </aside>`;
}

function pane(side, { present, doc, label, dim }) {
  if (!present) {
    return html`<div class="duo-side ${side}">
      <h3 class="pane-label">${label}</h3>
      <div class="not-present">
        not present in ${side === "head" ? "this PR" : "base"}
      </div>
    </div>`;
  }
  const fluid = dim.width === null;
  return html`<div class="duo-side ${side}">
    <h3 class="pane-label">${label}</h3>
    <div class="frame-wrap ${fluid ? "fluid" : "fixed"}">
      <iframe
        loading="lazy"
        data-side="${side}"
        ${raw(fluid ? "" : `style="width:${dim.width}px"`)}
        srcdoc="${doc}"
      ></iframe>
    </div>
    <div class="zoom-note"></div>
  </div>`;
}

function dimSection(dim, { index, showLabel, baseRefShort, annotate }) {
  const annotated = annotate(dim);
  const fluid = dim.width === null;
  const solo = !dim.before || !dim.after;
  return html`<section
    class="dim-section"
    id="dim-${index}"
    data-dim="${index}"
  >
    ${showLabel &&
    html`<h3 class="dim-label">${dim.suffix || "fluid width"}</h3>`}
    <div class="stage">
      <div class="render-area">
        <div
          class="duo mode-side ${fluid ? "fluid" : "fixed"}${solo
            ? " solo"
            : ""}"
          ${raw(fluid ? "" : `data-width="${dim.width}"`)}
        >
          ${pane("base", {
            present: !!dim.before,
            doc: frameDoc(annotated.beforeHtml, {
              rtl: dim.rtl,
              side: "base",
            }),
            label: `Base (${baseRefShort})`,
            dim,
          })}
          ${pane("head", {
            present: !!dim.after,
            doc: frameDoc(annotated.afterHtml, {
              rtl: dim.rtl,
              side: "head",
            }),
            label: "This PR",
            dim,
          })}
        </div>
        ${diffPre(dim.diff)}
      </div>
      ${inspector(annotated.changes)}
    </div>
  </section>`;
}

/** Shared page chrome: header, sidebar shell, main, footer, scripts. */
function layout({ title, header, main, page, bodyClass = "story-page" }) {
  return toString(
    html`<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>${title}</title>
          <link
            rel="stylesheet"
            href="${page ? "../assets" : "assets"}/viewer.css"
          />
        </head>
        <body class="${bodyClass}">
          ${header}
          <nav id="sidebar">
            <input
              id="search"
              type="search"
              placeholder="Filter stories… ( / )"
            />
            <div id="storylist"></div>
          </nav>
          <main id="main">${main}</main>
          <footer class="note">
            ${(page
              ? [
                  ["j/k", "prev/next story"],
                  ["m", "compare mode"],
                  ["f", "flip"],
                  ["t", "theme"],
                  ["h", "highlights"],
                  ["d", "text diff"],
                  ["x", "flag"],
                  ["/", "filter"],
                ]
              : [
                  ["j/k", "move"],
                  ["Enter", "open"],
                  ["/", "filter"],
                ]
            ).map(
              ([key, what]) =>
                html`<span class="kbd-hint"><kbd>${key}</kbd> ${what}</span>`,
            )}
            <span class="grow"></span>
            <span
              >Frames render the captured snapshot markup with the design
              tokens.</span
            >
          </footer>
          <script>
            const PAGE = ${page ? json(page) : raw("null")};
          </script>
          <script src="${page ? "../assets" : "assets"}/nav.js" defer></script>
          <script
            src="${page ? "../assets" : "assets"}/viewer.js"
            defer
          ></script>
        </body>
      </html>`,
  );
}

export function storyPage(entry, { index, entries, baseRefShort, annotate }) {
  const heading = `${entry.component} / ${entry.story}`;
  const dims = entry.dims.map((dim, i) =>
    dimSection(dim, {
      index: i,
      showLabel: entry.dims.length > 1,
      baseRefShort,
      annotate,
    }),
  );
  return layout({
    title: `${heading} — visual review`,
    header: html`<header>
      <a class="back" href="../index.html">← All changes</a>
      <h1 id="title">${heading}</h1>
      <span class="meta">${entry.file}</span>
      <span class="pagenav">
        <a id="prev" href="#">‹ prev</a>
        <span class="pos" id="pos"></span>
        <a id="next" href="#">next ›</a>
      </span>
    </header>`,
    main: html`<div class="toolbar">
        <div class="seg" data-seg="mode">
          <button type="button" data-v="side" class="active">
            Side by side
          </button>
          <button type="button" data-v="flip">Flip</button>
        </div>
        <div class="seg" data-seg="view">
          <button type="button" data-v="rendered" class="active">
            Rendered
          </button>
          <button type="button" data-v="diff">Text diff</button>
        </div>
        <div class="seg" data-seg="theme">
          <button type="button" data-v="light" class="active">Light</button>
          <button type="button" data-v="dark">Dark</button>
        </div>
        <label class="toggle">
          <input type="checkbox" id="hl-toggle" />Highlights
        </label>
        <span class="grow"></span>
        <button class="flag" id="flag-btn" type="button">⚑ Flag</button>
      </div>
      ${dims}`,
    page: {
      slug: entry.slug,
      hash: entry.hash,
      pos: index + 1,
      total: entries.length,
      prevHref: index > 0 ? entries[index - 1].slug + ".html" : null,
      nextHref:
        index < entries.length - 1 ? entries[index + 1].slug + ".html" : null,
      indexHref: "../index.html",
    },
  });
}

export function indexPage({ entries, sectionCount, baseRefShort, pr }) {
  const components = new Set(entries.map((e) => e.component)).size;
  const summary = entries.length
    ? `${entries.length} changed stor${entries.length === 1 ? "y" : "ies"}` +
      ` (${sectionCount} sections) across ${components} components` +
      ` — vs ${baseRefShort}`
    : `No visual snapshot changes vs ${baseRefShort}`;
  // Heading + subtitle use the HTML-spec pattern for subheadings: an
  // <hgroup> wrapping the heading and a <p> (h1-h6 must not be used for
  // subtitles; hgroup is exposed to AT as a group with the h1 as its
  // sole heading).
  const hgroup = pr.number
    ? html`<hgroup>
        <h1>
          Visual Differences from
          <a href="${pr.url || "#"}">PR #${pr.number}</a>
        </h1>
        ${pr.title && html`<p class="subheading">${pr.title}</p>`}
      </hgroup>`
    : html`<hgroup>
        <h1>Visual Differences</h1>
        <p class="subheading">working tree vs ${baseRefShort}</p>
      </hgroup>`;
  return layout({
    title: "Skin visual regression review",
    header: html`<header>
      <h1>Visual regression review</h1>
      <span class="meta">${summary}</span>
      <span class="progress" id="progress"></span>
    </header>`,
    main: entries.length
      ? html`<div class="intro">
          ${hgroup}
          <p>
            Review is local to your browser and won’t be shared, please leave
            comments in GitHub!
          </p>
        </div>`
      : html`<div class="empty-state">
          No visual snapshot changes vs ${baseRefShort}
        </div>`,
    page: null,
  });
}
