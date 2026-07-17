# Migration Plan: Percy → visual-html + In-House Preview Viewer

Status: Proposed
Date: 2026-07-17
Related: [ADR 0003 – Visual Regression Testing Tool](../adr/0003-visual-regression-testing-tool.md) (will be superseded by a new ADR when this plan is accepted)

---

## 1. Summary

Replace Percy (paid, cloud, screenshot-based visual regression) with
[visual-html](https://github.com/eBay/visual-html) (eBay open-source,
DOM + computed-style based, deterministic text snapshots committed to git),
plus an in-house **preview viewer** that renders before/after story output so
reviewers can still approve changes *visually*, not just by reading text diffs.

**What we gain**

- No per-snapshot cloud cost (~990 snapshots today) and no `PERCY_TOKEN` secret
  — the check works for fork PRs too.
- Snapshots live in git: the visual diff is part of the PR diff, reviewed and
  approved through normal code review instead of a separate Percy dashboard
  with a separate maintainer-approval step.
- Deterministic output (no screenshot anti-aliasing/font-rendering flake).
- One snapshot technology across the monorepo — ebayui-core and evo-marko
  browser tests already use `visual-html` (`packages/ebayui-core/src/common/test-utils/snapshots.js`).
- Full runs are cheap (minutes, headless Chromium), so the partial-build
  machinery (`percy-build.yml` → artifact hand-off → `percy.yml`, the
  `.percy-components` metadata files, cross-workflow commit statuses) can be
  deleted rather than ported.

**What we consciously give up** (see §7 Risks)

- True pixel rendering: cross-browser paint bugs, font rasterization, and
  image-content changes are invisible to computed-style snapshots. The preview
  viewer + human review is the mitigation; a small optional Playwright
  screenshot suite is the escape hatch if we later find gaps.

---

## 2. Current state (what has to be replaced or removed)

| Piece | Location | Role today |
| --- | --- | --- |
| `Percy Build` workflow | `.github/workflows/percy-build.yml` | On PR touching skin: detects changed components, builds Storybook, uploads artifact + `.percy-*` metadata files |
| `Percy Visual Regression` workflow | `.github/workflows/percy.yml` | Consumes the artifact via `workflow_run`, posts pending/success commit statuses, runs `percy storybook` (partial or full); separate `percy-main` job runs full auto-approved baseline on `main` |
| Changed-component detection | `.github/actions/detect-changed-components/index.mts` | Maps changed `packages/skin/dist/**` CSS + story files to Storybook titles via `component-metadata.json` submodule reverse-lookup |
| Percy config | `packages/skin/.percy.yml` | Widths 320/512/768/1280, DPR 2, JS enabled |
| npm scripts | `packages/skin/package.json` → `snapshots`, `snapshots:all`, `snapshots:dry`, `snapshots:all:dry` | Local/CI Percy runs |
| Dependencies | root `package.json` → `@percy/cli`, `@percy/storybook` | Percy tooling |
| Docs | `packages/skin/PERCY-FAQ.md`, `packages/skin/CONTRIBUTING.md` (§Visual Regression), `packages/skin/README.md` (badge), `CLAUDE.md`, `.github/copilot-instructions.md`, `docs/ai/*` | Contributor guidance |
| Branch protection | GitHub settings | `Percy Visual Regression` commit status is a required check |
| Misc | `packages/skin/.gitignore` (`.storybook-percy`), `docs/adr/0003-*` | Cleanup targets |

Scale: ~181 `*.stories.js` files under `packages/skin/src/sass/**`, each story
captured at 4 widths ≈ 990 Percy snapshots per full run (~25 min in Percy).

Stories are CSF2 modules whose exports return **plain HTML strings** (e.g.
`packages/skin/src/sass/button/stories/button/primary.stories.js`), rendered
against `src/sass/bundles/skin-full.scss` (see `.storybook/preview.js`). This
is what makes the whole migration tractable: rendering a story is "set
`innerHTML`, with skin CSS loaded".

---

## 3. How visual-html replaces screenshot testing

`visual-html` walks a rendered element in a **real browser** and serializes
only the visually significant information — including relevant **computed
styles** — into a stable, diffable text format. Because computed styles are
included, a CSS-only change (token, mixin, component SCSS) changes the
snapshot text even though the HTML is untouched. That is the property that
lets it stand in for Percy on a pure-CSS package.

The check then becomes: **"are the committed snapshots up to date with the
code?"** Contributors regenerate snapshots locally (or via a one-click CI
job), commit them, and reviewers approve the diff like any other code change.
There is no "approve in an external dashboard" step and no baseline sync job
on `main` — merging the PR *is* updating the baseline.

---

## 4. Target architecture

### 4.1 Snapshot harness (`packages/skin`)

A Vitest **browser mode** suite (headless Chromium via Playwright, same stack
as ebayui-core browser tests) that:

1. Auto-discovers every `src/sass/**/*.stories.{js,ts}` via `import.meta.glob`
   — no per-component test files to maintain, new stories are covered
   automatically (this preserves Percy's "storybook = coverage" property).
2. For each story export: injects the returned HTML into a fixture container
   with `skin-full` CSS + the icon sprite loaded (mirroring
   `.storybook/preview.js` and `staticDirs`).
3. Captures `visualHTML(container)` at the same 4 viewport widths as
   `.percy.yml` (320 / 512 / 768 / 1280) by resizing the browser viewport.
4. Writes one snapshot file per story file via `toMatchFileSnapshot`, with
   per-width sections, under
   `packages/skin/src/sass/<component>/stories/__snapshots__/`.
   Colocation keeps `git diff` review natural and keeps the changed-component
   → changed-snapshot mapping self-evident.

Extra dimensions that are nearly free as text (decide in Phase 0, each
multiplies snapshot volume): **dark mode** and **RTL**. Percy never covered
these; the PR checklist asks for them manually. Recommendation: add both for
one representative width only.

Determinism rules (enforced in a shared serializer wrapper, extending the
pattern in `packages/ebayui-core/src/common/test-utils/snapshots.js`):

- Fixed viewport sizes, `prefers-reduced-motion: reduce`, animations/
  transitions globally disabled, spinners paused.
- Market Sans loaded from the repo (`staticDirs` already serves it) with
  `document.fonts.ready` awaited, so font-dependent computed values are stable.
- Normalize or strip nondeterministic values (generated ids, sub-pixel
  floats rounded to a fixed precision) — exact list comes out of the
  Phase 0 spike.

### 4.2 npm scripts

- `packages/skin`: `test:visual` (assert mode, used by CI) and
  `update-snapshots` (regenerate). The root `update-snapshots --ws
  --if-present` script picks the latter up automatically.
- Root convenience: `npm run visual:preview` (see §4.3).

### 4.3 In-house preview viewer

A small static app, proposed home `tools/visual-preview/` (outside
`packages/` so it is never published). Two consumption modes, one codebase:

**Input**: a diff manifest — list of `{ storyId, width, before, after }`
entries produced by comparing snapshot files between two git refs
(`git diff --name-only <base>...HEAD -- '**/__snapshots__/**'` plus file
contents from `git show`).

**Rendering**: for each changed story it shows, side by side (or overlaid
with a toggle):

1. **Rendered before/after** — the story's HTML string rendered in two
   iframes: one loading base-ref CSS, one loading head-ref CSS. Because
   `packages/skin/dist/**` is committed to git, base CSS is always available
   from the merge-base commit (`git show <merge-base>:packages/skin/dist/...`)
   — no artifact storage or external service needed.
2. **The visual-html text diff** (reusing `snapshotDiff` from the existing
   test-utils) for the precise "what computed style changed" answer.
3. A summary sidebar: changed stories grouped by component, counts per width,
   unchanged stories collapsed.

**Local mode**: `npm run visual:preview` — builds the manifest from the
working tree vs `main` and serves the viewer on localhost. This is the
day-to-day tool for component authors before they push.

**CI mode**: a workflow job builds the viewer as a self-contained static
bundle (manifest + both CSS versions inlined) and uploads it as a workflow
artifact; a sticky PR comment lists changed stories and links to the
artifact. If we later want zero-download review, the same bundle can deploy
to the existing site infrastructure (`_site/` deploy) under a per-PR path —
kept out of scope for the initial cut.

### 4.4 CI workflow

One new workflow, `visual-regression.yml`, replacing both Percy workflows:

```
on: pull_request  (paths: skin dist/src/sass/stories + workflow itself)
jobs:
  visual:
    - checkout (fetch-depth: 0), setup node, npm ci
    - npx playwright install chromium (or cached)
    - npm run test:visual -w packages/skin      # fails if snapshots are stale
    - if failed: run update-snapshots, build preview-viewer bundle,
      upload artifact, post/refresh sticky PR comment listing changed
      stories + regeneration instructions
```

Properties vs today: single workflow (no `workflow_run` artifact hand-off, no
manual commit-status API calls — a plain required job), no secrets, fork-PR
safe, and no changed-component detection needed because a full run is fast.
`.github/actions/detect-changed-components` is deleted with the Percy
workflows unless Phase 0 timing says we need it for sharding (unlikely; keep
Vitest's built-in sharding as the fallback).

There is deliberately **no `main` baseline job**: merged snapshots *are* the
baseline.

### 4.5 Review & approval model

- Old: maintainer approves in Percy dashboard; check flips green.
- New: snapshot diffs are in the PR; reviewer opens the preview viewer
  (locally or from the CI artifact) to eyeball rendered before/after, then
  approves the PR. Branch protection swaps the required
  `Percy Visual Regression` status for the `visual-regression` job.

---

## 5. Phased execution plan

### Phase 0 — Spike & determinism validation (~2–3 days)

Goal: prove the approach before building anything permanent.

- [ ] Prototype the harness against 3 representative components (button,
      dialog, progress-spinner — simple / overlay / animated).
- [ ] Verify a CSS-only change (e.g. tweak a button token) changes the
      snapshot, and an inert refactor does not.
- [ ] Run 20× on two machines/CI to flush out nondeterminism; write the
      normalization list (§4.1).
- [ ] Time a full 181-story × 4-width run; decide if sharding is needed.
- [ ] Measure snapshot repo weight for the full suite (expect single-digit
      MB of text; confirm).
- [ ] Decide: dark-mode/RTL dimensions in or out for v1.
- **Exit criteria**: deterministic snapshots, full run < ~10 min in CI,
  go/no-go decision recorded.

### Phase 1 — Snapshot harness + baseline (~3–5 days)

- [ ] Build the discovery/render/capture harness in `packages/skin`
      (vitest browser-mode config alongside the existing `vite.config.js`).
- [ ] Extract the shared serializer/normalizer into a common test-util so
      skin, ebayui-core, and evo-marko converge on identical settings.
- [ ] Add `test:visual` / `update-snapshots` scripts; wire into root scripts.
- [ ] Generate and land the full baseline snapshot set in one PR (snapshots
      only, no behavior change — reviewable by spot-check + count).
- **Exit criteria**: `npm run test:visual -w packages/skin` green on `main`.

### Phase 2 — Preview viewer (~1 week)

- [ ] Diff-manifest builder (git-based, per §4.3).
- [ ] Viewer UI: rendered before/after iframes with base/head CSS, text diff
      pane, component/story navigation, width switcher.
- [ ] `npm run visual:preview` local mode.
- [ ] Static-bundle build for CI mode.
- **Exit criteria**: for a deliberately broken token change, a reviewer can
  see the regression rendered, without Percy.

### Phase 3 — CI cutover with soak (~2–4 weeks elapsed, low effort)

- [ ] Add `visual-regression.yml` (check + artifact + sticky comment).
- [ ] Run it **in parallel with Percy** (Percy still required) for 2–4 weeks;
      compare catches on real PRs. Any regression Percy catches that
      visual-html misses gets triaged into the normalization rules or the
      §7 screenshot escape hatch.
- [ ] Flip branch protection: require `visual-regression`, un-require
      `Percy Visual Regression`.
- **Exit criteria**: one full soak period with no Percy-only catches (or all
  such catches dispositioned), branch protection flipped.

### Phase 4 — Percy removal & docs (~1–2 days)

- [ ] Delete `.github/workflows/percy-build.yml`, `.github/workflows/percy.yml`,
      `.github/actions/detect-changed-components/`, `packages/skin/.percy.yml`,
      the four `snapshots*` scripts, `@percy/cli` + `@percy/storybook` deps,
      `.storybook-percy` gitignore entry, README badge.
- [ ] Replace `PERCY-FAQ.md` with `VISUAL-TESTING.md` (same FAQ shape:
      what runs, how to update snapshots, how to use the viewer, how review
      works, fork-PR story).
- [ ] Update `CONTRIBUTING.md` §Visual Regression, `CLAUDE.md` (2 refs),
      `.github/copilot-instructions.md`, `docs/ai/*` pipeline docs.
- [ ] Write ADR (next number in `docs/adr/`) superseding 0003; mark 0003
      superseded.
- [ ] Cancel the Percy subscription after one more release cycle of buffer.
- **Exit criteria**: `grep -ri percy` returns only historical
  CHANGELOG/ADR mentions.

---

## 6. Contributor workflow after migration

```bash
# after changing SCSS
npm run build                      # rebuild dist CSS (unchanged requirement)
npm run update-snapshots           # regenerate visual-html snapshots
npm run visual:preview             # eyeball rendered before/after locally
git add -A && git commit           # snapshots travel with the change
```

CI fails only when committed snapshots don't match the code, and the failure
comment tells the contributor exactly what to run. Intentional changes need no
maintainer dashboard approval — just PR review.

---

## 7. Risks & mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Computed styles miss real rendering bugs (paint order, font rasterization, image content, browser-specific bugs) | Regression ships undetected | Preview viewer puts human eyes on real rendering per PR; soak period (Phase 3) measures the real-world gap; optional curated Playwright screenshot suite (~10–20 critical stories, run nightly, artifact-only) if the soak finds gaps |
| Single-engine coverage (Chromium only) vs Percy's cross-browser claim | Browser-specific CSS bugs missed | Percy runs were Chromium-rendered by default too; skin's browserslist has no exotic targets. Revisit only if soak shows misses |
| Snapshot noise: a token change touches hundreds of snapshot files | Review fatigue, noisy PRs | Viewer's grouped summary is the review surface, not the raw diff; GitHub marks `__snapshots__` as collapsed via `.gitattributes` `linguist-generated` |
| Nondeterminism (fonts, animation timing, sub-pixel values) | Flaky check | Phase 0 exit criteria gate; normalization centralized in one serializer |
| Contributors forget to update snapshots | Red CI, friction | CI comment with exact command; snapshots regenerable in one command; optionally a CI job that pushes regenerated snapshots to the PR branch on request (label-triggered) |
| Repo growth from committed snapshots | Clone size | Text-only, single-digit MB expected (Phase 0 verifies); no LFS needed |
| Dependency-map staleness (`component-metadata.json` submodules) | — | Ceases to matter: full runs remove the partial-build dependency entirely (deletes an ADR-0003 documented risk) |

## 8. Open questions (to resolve in Phase 0/1)

1. Dark mode + RTL as first-class snapshot dimensions in v1, or fast-follow?
2. Snapshot file granularity: per story-file (fewer files, bigger diffs) vs
   per story-export (many files, surgical diffs). Proposal: per story-file.
3. CI viewer delivery: artifact download only (v1) vs per-PR static deploy.
4. Keep a label-triggered "regenerate snapshots for me" CI job? (Nice for
   external contributors who can't run browsers locally.)
