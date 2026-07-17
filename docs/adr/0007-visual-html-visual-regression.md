# 7. Visual Regression via visual-html Snapshots

Date: 2026-07-17

## Status

Accepted

Supersedes [3. Visual Regression Testing Tool](./0003-visual-regression-testing-tool.md)

## Context

ADR 0003 selected Percy (cloud, screenshot-based) for visual regression on
the Skin package. In practice this carried ongoing per-snapshot costs
(~990 snapshots per full run), required a `PERCY_TOKEN` secret (excluding
fork PRs from local runs), a separate maintainer-approval dashboard, a
two-workflow artifact hand-off for partial builds, and a hand-maintained
component dependency map in `component-metadata.json` whose staleness was a
documented risk.

[visual-html](https://github.com/eBay/visual-html) — eBay's own OSS tool,
already used by ebayui-core and evo-marko browser tests — serializes a
rendered element tree to deterministic text containing only visually
significant information: element structure plus the author CSS rules that
match each element. Because it reads _specified_ values from the CSSOM,
CSS-only changes alter the output while `var(--token)` references stay
unresolved.

A Phase 0 spike validated the premises empirically (see
`docs/plans/percy-to-visual-html-migration.md`): CSS mutations are
detected (including cross-component, via stories that embed other
components' markup), inert refactors are invisible, token-value changes
cause zero consumer churn, media queries drive width-dependent output via
`matchMedia`, and repeated runs are byte-identical.

## Decision

Replace Percy with visual-html text snapshots committed to git, plus an
in-house preview viewer for human visual review.

1. **Snapshot harness** (`packages/skin/test/visual/`): a Vitest
   browser-mode suite auto-discovers every `*.stories.js`, renders each
   story with the skin bundle in headless Chromium, and writes one snapshot
   file per story file into colocated `__snapshots__/` directories. A
   cached wrapper around visual-html's internals parses CSSOM rules once
   per viewport width instead of per capture.
2. **Dimensions are opt-in per component** via CSF
   `parameters.visual = { widths, rtl }`; the default capture is LTR at
   1280px. Dark mode needs no dimension — snapshots are theme-agnostic by
   construction. Secondary dimensions identical to the default are stored
   as `(same as 1280px)` references.
3. **CI model: regenerate, then diff** (`visual-regression.yml`): the suite
   regenerates snapshots and the check fails if `git diff` is non-empty on
   `__snapshots__/`. Merging a PR _is_ updating the baseline; there is no
   baseline job and no approval dashboard.
4. **Preview viewer** (`tools/visual-preview/`): a self-contained HTML
   report rendering before/after of every changed story directly from
   snapshot text with token CSS (light/dark toggle, RTL), highlighting the
   exact changed elements with per-property before/after values, and
   offering side-by-side/swipe/onion/flip comparison modes. Served locally
   (`npm run visual:preview`), as a CI artifact, and deployed per-PR to the
   existing gh-pages preview site.

## Consequences

**Positive:**

- No cloud service, token, or per-snapshot cost; fork PRs fully supported
- Visual diffs reviewed in the PR itself; approval is normal code review
- Deterministic text output — the screenshot flake class (fonts,
  anti-aliasing, animation timing) is structurally impossible
- Theme-agnostic snapshots: token value changes are reviewed at the token
  definition, not as churn across consumers
- Cross-component dependency coverage falls out of stories embedding real
  markup — the `component-metadata.json` dependency map is no longer needed
  for visual testing, deleting an ADR 0003 risk
- Full runs are fast (~8 min) so partial-build machinery is deleted
- Element-level diff inspection in the viewer (which property on which
  element changed) — impossible with screenshots
- One snapshot technology across the monorepo

**Negative:**

- Pixel-level rendering issues (font rasterization, image content,
  paint-order or browser-specific bugs) are not detected; mitigation is
  human review of rendered output in the preview viewer
- Single-engine capture (headless Chromium) — accepted; Percy's default
  rendering was Chromium-based as well
- ~12 MB of snapshot text in the repository (bounded by dedupe references;
  gzip-friendly, marked `linguist-generated`)
- Components must keep `parameters.visual` accurate as media queries or
  direction-sensitive styles are added — documented in CONTRIBUTING.md
