# Migration Plan: Percy → visual-html + In-House Preview Viewer

Status: Executed (Phases 0–3 complete 2026-07-17; branch-protection swap and Percy subscription cancellation remain)
Date: 2026-07-17
Related: [ADR 0007 – Visual Regression via visual-html Snapshots](../adr/0007-visual-html-visual-regression.md) (supersedes [ADR 0003](../adr/0003-visual-regression-testing-tool.md))

---

## 1. Summary

Replace Percy (paid, cloud, screenshot-based visual regression) with
[visual-html](https://github.com/eBay/visual-html) (eBay open-source,
DOM + matched-CSS based, deterministic text snapshots committed to git),
plus an in-house **preview viewer** that renders before/after story output so
reviewers can still approve changes _visually_, not just by reading text diffs.

**What we gain**

- No per-snapshot cloud cost (~990 snapshots today) and no `PERCY_TOKEN` secret
  — the check works for fork PRs too.
- Snapshots live in git: the visual diff is part of the PR diff, reviewed and
  approved through normal code review instead of a separate Percy dashboard
  with a separate maintainer-approval step.
- Deterministic output (no screenshot anti-aliasing/font-rendering flake).
- Theme-agnostic snapshots: visual-html serializes matched author CSS, so
  `var(--token)` references are preserved unresolved — one snapshot covers
  light and dark mode by construction (a token's _value_ changing doesn't
  churn component snapshots; the token change is reviewed where the token is
  defined).
- One snapshot technology across the monorepo — ebayui-core and evo-marko
  browser tests already use `visual-html` (`packages/ebayui-core/src/common/test-utils/snapshots.js`).
- Full runs are cheap (minutes, headless Chromium), so the partial-build
  machinery (`percy-build.yml` → artifact hand-off → `percy.yml`, the
  `.percy-components` metadata files, cross-workflow commit statuses) can be
  deleted rather than ported.

**What we consciously give up** (see §7 Risks)

- True pixel rendering: paint bugs, font rasterization, and image-content
  changes are invisible to CSS/DOM snapshots. Mitigation is the preview
  viewer putting human eyes on real rendered output for every changed story
  — snapshots stay as code (the whole point of visual-html) and are _viewed_
  in a browser. There is no screenshot suite anywhere in the target state.

---

## 2. Current state (what has to be replaced or removed)

| Piece                              | Location                                                                                                                                                                           | Role today                                                                                                                                                                                      |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Percy Build` workflow             | `.github/workflows/percy-build.yml`                                                                                                                                                | On PR touching skin: detects changed components, builds Storybook, uploads artifact + `.percy-*` metadata files                                                                                 |
| `Percy Visual Regression` workflow | `.github/workflows/percy.yml`                                                                                                                                                      | Consumes the artifact via `workflow_run`, posts pending/success commit statuses, runs `percy storybook` (partial or full); separate `percy-main` job runs full auto-approved baseline on `main` |
| Changed-component detection        | `.github/actions/detect-changed-components/index.mts`                                                                                                                              | Maps changed `packages/skin/dist/**` CSS + story files to Storybook titles via `component-metadata.json` submodule reverse-lookup                                                               |
| Percy config                       | `packages/skin/.percy.yml`                                                                                                                                                         | Widths 320/512/768/1280, DPR 2, JS enabled                                                                                                                                                      |
| npm scripts                        | `packages/skin/package.json` → `snapshots`, `snapshots:all`, `snapshots:dry`, `snapshots:all:dry`                                                                                  | Local/CI Percy runs                                                                                                                                                                             |
| Dependencies                       | root `package.json` → `@percy/cli`, `@percy/storybook`                                                                                                                             | Percy tooling                                                                                                                                                                                   |
| Docs                               | `packages/skin/PERCY-FAQ.md`, `packages/skin/CONTRIBUTING.md` (§Visual Regression), `packages/skin/README.md` (badge), `CLAUDE.md`, `.github/copilot-instructions.md`, `docs/ai/*` | Contributor guidance                                                                                                                                                                            |
| Branch protection                  | GitHub settings                                                                                                                                                                    | `Percy Visual Regression` commit status is a required check                                                                                                                                     |
| Misc                               | `packages/skin/.gitignore` (`.storybook-percy`), `docs/adr/0003-*`                                                                                                                 | Cleanup targets                                                                                                                                                                                 |

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
only the visually significant information — the element structure plus the
**author CSS rules that match each element** — into a stable, diffable text
format. Two consequences drive this design:

1. A CSS-only change (component SCSS, mixin, media query) changes the
   snapshot text even though the HTML is untouched — which is what lets it
   stand in for Percy on a pure-CSS package.
2. `var(--token)` references are serialized **unresolved**. Snapshots are
   therefore theme-agnostic: light/dark need no separate dimension, and
   token-value changes surface as a diff in the token definition, not as
   churn across every consuming component's snapshots. (Phase 0 verifies
   this property holds across our whole rule surface, since it is a premise
   of the coverage model.)

The check then becomes: **"are the committed snapshots up to date with the
code?"** The test suite _regenerates_ snapshots as part of running (§4.4);
locally you run the tests and commit what changed, and CI fails when the
regenerated output differs from what's committed. Reviewers approve the diff
like any other code change. There is no "approve in an external dashboard"
step and no baseline sync job on `main` — merging the PR _is_ updating the
baseline.

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
3. Captures `visualHTML(container)` for each configured dimension (§4.2) by
   resizing the browser viewport (media queries change which rules match,
   which changes the serialized output) and toggling `dir="rtl"` where
   opted in.
4. Writes **one snapshot file per story file** via `toMatchFileSnapshot`,
   with sections per export and per dimension, under
   `packages/skin/src/sass/<component>/stories/__snapshots__/`.
   Colocation keeps `git diff` review natural and keeps the changed-component
   → changed-snapshot mapping self-evident.

Determinism rules (enforced in a shared serializer wrapper, extending the
pattern in `packages/ebayui-core/src/common/test-utils/snapshots.js`):

- Fixed viewport sizes, `prefers-reduced-motion: reduce`, animations/
  transitions globally disabled, spinners paused.
- Market Sans loaded from the repo (`staticDirs` already serves it) with
  `document.fonts.ready` awaited.
- Normalize or strip nondeterministic values (generated ids, sub-pixel
  floats rounded to a fixed precision) — exact list comes out of the
  Phase 0 spike.

### 4.2 Snapshot dimensions: minimal by default, opt-in per component

**Default: LTR at 1280px only.** Percy's blanket 4-widths-per-story goes
away; most components have no responsive rule changes and one desktop
snapshot carries all their signal. Components where extra dimensions carry
real information opt in via **CSF story parameters**, colocated in the
stories file's default export:

```js
export default {
  title: "Skin/Button/Primary",
  parameters: {
    visual: {
      widths: [320, 768, 1280], // opt-in extra breakpoints
      rtl: true, // opt-in RTL capture (at default width)
    },
  },
};
```

- `widths`: components with media-query behavior list the breakpoints that
  matter to them (drawn from the supported set 320/512/768/1024/1280/…).
- `rtl: true`: components with direction-sensitive layout capture one
  additional RTL snapshot. Dark mode has **no dimension** — it is absorbed
  by unresolved `var()` references (§3).

Part of Phase 1 is a one-time triage pass over the ~90 components tagging
which need extra widths and/or RTL. This shrinks total snapshot volume well
below Percy's ~990 while _adding_ RTL coverage where it matters.

### 4.3 In-house preview viewer

A small static app, proposed home `tools/visual-preview/` (outside
`packages/` so it is never published). One codebase, consumed locally and
from CI:

**Input**: a diff manifest — list of `{ storyId, dimension, before, after }`
entries produced by comparing snapshot files between two git refs
(`git diff --name-only <base>...HEAD -- '**/__snapshots__/**'` plus file
contents from `git show`).

**Rendering**: for each changed story it shows, side by side (or overlaid
with a toggle):

1. **Rendered before/after** — the story's HTML string rendered in two
   iframes: one loading base-ref CSS, one loading head-ref CSS. Because
   `packages/skin/dist/**` is committed to git, base CSS is always available
   from the merge-base commit (`git show <merge-base>:packages/skin/dist/...`)
   — no artifact storage or external service needed. A light/dark toggle in
   the viewer covers theme review (the snapshots themselves are
   theme-agnostic).
2. **The visual-html text diff** (reusing `snapshotDiff` from the existing
   test-utils) for the precise "what rule changed" answer.
3. A summary sidebar: changed stories grouped by component, counts per
   dimension, unchanged stories collapsed.

**Local mode**: `npm run visual:preview` — builds the manifest from the
working tree vs `main` and serves the viewer on localhost. This is the
day-to-day tool for component authors before they push.

**CI mode — both delivery paths from day one**:

- Self-contained static bundle (manifest + both CSS versions inlined)
  uploaded as a **workflow artifact**, and
- **deployed to a per-PR URL** on the existing site infrastructure
  (`_site/` deploy) for one-click review, torn down when the PR closes.

A sticky PR comment lists changed stories per dimension and links to both.

### 4.4 CI workflow

One new workflow, `visual-regression.yml`, replacing both Percy workflows.
The model is **regenerate, then diff** — the suite always writes fresh
snapshots; being up to date is what's enforced:

```
on: pull_request  (paths: skin dist/src/sass/stories + workflow itself)
jobs:
  visual:
    - checkout (fetch-depth: 0), setup node, npm ci
    - npx playwright install chromium (or cached)
    - npm run test:visual -w packages/skin      # regenerates snapshots
    - git diff --exit-code -- '**/__snapshots__/**'
      # clean  → check passes
      # dirty  → check fails; the regenerated snapshot files are uploaded in
      #          the artifact so a contributor without a local browser can
      #          download and apply them; build preview-viewer bundle,
      #          deploy per-PR preview, post/refresh sticky PR comment
```

Properties vs today: single workflow (no `workflow_run` artifact hand-off, no
manual commit-status API calls — a plain required job), no secrets, fork-PR
safe, and no changed-component detection needed because a full run is fast.
`.github/actions/detect-changed-components` is deleted with the Percy
workflows (Vitest sharding is the fallback if Phase 0 timing surprises us).
No separate regen job or trigger is needed — regeneration _is_ the test run,
in CI and locally alike.

There is deliberately **no `main` baseline job**: merged snapshots _are_ the
baseline.

### 4.5 Review & approval model

- Old: maintainer approves in Percy dashboard; check flips green.
- New: snapshot diffs are in the PR; reviewer opens the preview viewer
  (per-PR URL, artifact, or locally) to eyeball rendered before/after, then
  approves the PR. Branch protection swaps the required
  `Percy Visual Regression` status for the `visual-regression` job.

---

## 5. Phased execution plan

### Phase 0 — Spike & determinism validation — ✅ DONE 2026-07-17, verdict: GO

Spike lives in `packages/skin/test/visual/visual.spec.js` +
`packages/skin/vitest.config.js`, scoped to button, dialog, and
progress-spinner (20 story files, 20 snapshot files). Findings:

- [x] **Harness works** — Vitest browser mode (headless Chromium via
      `@vitest/browser-playwright`), stories auto-discovered with
      `import.meta.glob`, `skin-full.scss` imported directly (Vite compiles
      it, same as Storybook), snapshots written per story-file via
      `toMatchFileSnapshot` into colocated `__snapshots__/`.
- [x] **`var()` premise confirmed at source and empirically** — visual-html
      reads _specified_ values from CSSOM rules (`getPropertyValue`), never
      resolved computed styles. Snapshots show
      `background-color: var(--color-background-accent)` verbatim. Changing
      the token's definition to `hotpink` in `@ebay/design-tokens` produced
      **zero** snapshot churn. Corollary: token-value regressions are
      reviewed at the token definition diff + preview viewer, never via
      component snapshots — by design.
- [x] **Change detection verified** — a button `padding` mutation changed
      all button-family snapshots _and_ dialog's (dialog footer stories
      embed real `.btn` markup): cross-component dependency coverage falls
      out naturally, no metadata mapping needed. An inert refactor
      (comment/whitespace) produced zero diff.
- [x] **Width dimension verified** — visual-html filters `@media` rules via
      `matchMedia` at parse time; dialog at 320px snapshots
      `max-width: 88%`, at 1280px `max-width: var(--dialog-max-width)`.
      Dialog is the first real `parameters.visual` opt-in
      (`widths: [320, 768, 1280]`).
- [x] **Deterministic** — repeated full regenerate runs produce
      byte-identical output. Fonts _cannot_ affect output (visual-html only
      consults layout for `display:none` pruning and `matchMedia`), so the
      font/anti-aliasing flake class is structurally gone. No normalization
      rules needed so far; sub-pixel values never appear because specified
      values are serialized.
- [x] **Stories with embedded `<script>` need execution** — Storybook's HTML
      renderer runs story scripts (dialog stories call `showModal()`);
      `innerHTML` doesn't. The harness re-creates script nodes after
      injection. Without this, closed dialogs serialize as empty `<div/>`
      (visual-html prunes `display:none` subtrees).
- [x] **Timing** — typical story file 0.3–3s; dialog 25s (17 stories ×
      3 widths). Naive extrapolation to 181 files: ~8–15 min, borderline vs
      the <10 min target. Root cause: visual-html re-parses + specificity-
      sorts the full CSSOM on **every** capture. Its dist modules export the
      internals, so Phase 1 **must** add a thin wrapper that caches parsed
      rules per (document, width) — expected ~5–10× on heavy files; Vitest
      sharding stays as backup.
- [x] **Size** — 432 KB for the 3 spike components (dialog alone 309 KB at
      3 widths). Full-suite estimate ~2–4 MB of text at default dimensions.
      Fine without LFS.
- Environment note: sandbox/CI can point the harness at a pre-installed
  Chromium via `CHROMIUM_EXECUTABLE_PATH` (wired through Playwright
  `launchOptions.executablePath`).

### Phase 1 — Snapshot harness + baseline — ✅ DONE 2026-07-17

Results: 181 story files / 2,219 captured sections across 80 components,
full run 7.7 min single-threaded in this environment (within the <10 min
target; sharding remains available). Baseline weighs 12 MB of text —
cross-dimension dedupe (identical secondary dimensions stored as
`(same as 1280px)` references) cut it from 23 MB and removes review noise;
99 of 181 files contain at least one reference. Two consecutive full runs
produced byte-identical output pre-dedupe; a post-dedupe verification run
is part of the baseline PR. One quirk: all suites live in one spec file,
so `toMatchFileSnapshot` flushes only when the whole file finishes —
snapshots appearing "late" during a run is normal.

- [ ] Promote the Phase 0 spike harness to production quality: widen the
      glob to all of `src/sass`, split into shardable units, keep
      `parameters.visual` support (§4.2).
- [ ] **Rule-cache wrapper (required, per Phase 0 timing)**: rebuild
      visual-html's ~40-line tree walker on top of its exported internals
      (`getDocumentStyleRules` / `getElementStyles` / `getPseudoElementStyles`
      / `stringifyVisualData`) with parsed rules cached per (document,
      width) instead of re-parsed per capture; upstream to eBay/visual-html
      if accepted.
- [ ] Extract the shared serializer/normalizer into a common test-util so
      skin, ebayui-core, and evo-marko converge on identical settings.
- [ ] Dimension triage pass: tag components needing extra `widths` / `rtl`
      in their story parameters (~90 components, checklist-driven).
- [ ] Add `test:visual` script (regenerate-mode, per §4.4); wire into root
      scripts (`update-snapshots --ws --if-present` picks it up).
- [ ] Generate and land the full baseline snapshot set in one PR (snapshots
      only, no behavior change — reviewable by spot-check + count).
- [ ] Mark `__snapshots__` as `linguist-generated` in `.gitattributes` so
      GitHub collapses them by default in PR diffs.
- **Exit criteria**: running `test:visual` on clean `main` produces zero
  git diff.

### Phase 2 — Preview viewer — ✅ built 2026-07-17 (`tools/visual-preview/`)

Design simplification discovered in Phase 0: visual-html snapshots are
themselves renderable HTML (inline styles with unresolved `var()` refs), so
the viewer renders snapshot text directly with token CSS — **no base/head
component-CSS bundles needed at all**, and the light/dark toggle falls out
of swapping token stylesheets.

- [x] Diff-manifest builder (`build.mjs`): git-based (merge-base with
      origin/main by default, `--base <ref>` override), parses `.snap`
      sections, resolves `(same as 1280px)` dedupe references, unified
      diffs via the `diff` package, emits a machine-readable
      `summary.json` for CI comments.
- [x] Viewer UI (`template.html`, dependency-free single file), v2
      "reviewer-grade" feature set for engineers and designers: - Story-level navigation (search/filter, per-component groups,
      status dots) with dimension tabs (widths / RTL) per story. - **Element-level change highlighting**: the viewer diffs the two
      snapshot trees (LCS-aligned per level) and outlines exactly the
      changed/added/removed elements in the rendered output — with an
      inspector panel listing each changed element's before/after
      property values; clicking a row flashes and scrolls to the
      element in both frames. Screenshot tools cannot do this. - Comparison modes: side-by-side, swipe (clip slider), onion skin
      (opacity), and flip. - Review workflow: per-story "reviewed" checkbox with progress
      counter (content-addressed in localStorage, so re-pushed changes
      reset), full keyboard navigation (j/k, dimension hotkeys, mode/
      theme/highlight/diff toggles). - Light/dark token toggle, RTL `dir` frames, colored text-diff
      pane. Smoke-tested headless end-to-end with zero console errors,
      exercised against a real cascading change (one-line button
      padding edit → 211 stories across 18 components, 295 unchanged
      sections filtered out).
- [x] `npm run visual:preview` (root) — builds the self-contained
      `tools/visual-preview/dist/visual-preview.html` (~1 MB); the same
      artifact serves local review, the CI artifact, and the per-PR
      deploy.
- [x] Per-PR deploy piggybacks the existing gh-pages
      `previews/pr-N/` convention (`preview.yml`); `preview-cleanup.yml`
      already removes the whole directory on close, covering the viewer.
- Known limitation (matches Storybook status quo): icon sprites are not
  embedded, so `<use href="#icon-…">` glyphs render empty; animations are
  static.
- Scaling note: bundle size is proportional to changed sections (~1 MB
  base + content). The degenerate all-2,219-sections case (the baseline
  PR itself) produces ~49 MB; typical PRs touching a component or two
  stay in the low MB. If ever needed, pagination or per-component bundles
  are straightforward follow-ups.

### Phase 3 — Immediate cutover + Percy removal (~2–3 days)

No parallel soak — the new check replaces Percy in one cutover:

- [x] Add `visual-regression.yml` (regenerate → diff → artifact + per-PR
      deploy + sticky comment). Same-repo PRs get the deployed viewer link
      and comment; fork PRs still get the check + artifact (their tokens
      cannot push/comment). The failure path uploads the regenerated
      snapshots so contributors without a local browser can adopt them.
- [ ] Flip branch protection: require the `visual-html snapshots` job of
      `Visual Regression`, remove `Percy Visual Regression`. **(Requires
      repo admin — the only remaining manual step.)**
- [x] Delete `.github/workflows/percy-build.yml`, `.github/workflows/percy.yml`,
      `.github/actions/detect-changed-components/`, `packages/skin/.percy.yml`,
      the four `snapshots*` scripts, `@percy/cli` + `@percy/storybook` deps
      (and the now-orphaned `@actions/core`), `.storybook-percy` gitignore
      entry, README badge.
- [x] Replace `PERCY-FAQ.md` with `VISUAL-TESTING.md` (same FAQ shape:
      what runs, how snapshots regenerate, how to use the viewer, how review
      works, fork-PR story).
- [x] Update `CONTRIBUTING.md` §Visual Regression, `CLAUDE.md` (2 refs),
      `.github/copilot-instructions.md`, `docs/ai/*` pipeline docs,
      `component-metadata.d.ts` comment.
- [x] ADR 0007 supersedes 0003; 0003 marked superseded.
- [ ] Cancel the Percy subscription (after merge).
- **Exit criteria**: `grep -ri percy` returns only historical
  CHANGELOG/ADR/plan mentions ✓; first real skin PR goes through the new
  flow.

---

## 6. Contributor workflow after migration

```bash
# after changing SCSS
npm run build                      # rebuild dist CSS (unchanged requirement)
npm run test:visual -w packages/skin   # runs suite; snapshots regenerate in place
npm run visual:preview             # eyeball rendered before/after locally
git add -A && git commit           # snapshots travel with the change
```

CI fails only when committed snapshots don't match the code; the failure
comment links the regenerated snapshots (downloadable artifact) and the
rendered preview. Intentional changes need no maintainer dashboard approval —
just PR review.

---

## 7. Risks & mitigations

| Risk                                                                                                                 | Impact                                                            | Mitigation                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CSS/DOM snapshots miss pixel-level bugs (paint order, font rasterization, image content, browser-specific rendering) | Regression ships undetected                                       | Accepted trade-off — snapshots-as-code is the point. Preview viewer puts human eyes on real rendered output for every changed story; no screenshot tooling will be maintained |
| Immediate cutover means no measured overlap with Percy                                                               | A class of regression Percy would have caught slips through early | Accepted for cost/speed; Phase 0 spike validates the detection model on deliberate regressions before cutover                                                                 |
| The `var()` premise fails for some rule patterns (variables resolved or absent in output)                            | Theme-agnostic model breaks; dark-mode coverage gap               | Phase 0 exit criterion; if a pattern resolves vars, extend the serializer or normalize before baseline lands                                                                  |
| Under-opted dimensions: a component with responsive/RTL behavior never tagged                                        | Width/RTL regressions invisible for that component                | Phase 1 triage checklist; PR template + `VISUAL-TESTING.md` instruct authors adding media queries / logical properties to update `parameters.visual`                          |
| Nondeterminism (fonts, animation timing, sub-pixel values)                                                           | Flaky check                                                       | Phase 0 exit criteria gate; normalization centralized in one serializer                                                                                                       |
| Contributors without local browsers (fork PRs) can't regenerate                                                      | Friction                                                          | CI already regenerates on every run — failed check uploads the fresh snapshot files as an artifact to download and commit                                                     |
| Repo growth from committed snapshots                                                                                 | Clone size                                                        | Text-only, fewer snapshots than Percy's 990 (single default dimension); Phase 0 verifies; `linguist-generated` keeps PR diffs readable                                        |
| Dependency-map staleness (`component-metadata.json` submodules)                                                      | —                                                                 | Ceases to matter: full runs remove the partial-build dependency entirely (deletes an ADR-0003 documented risk)                                                                |

## 8. End-to-end CI validation (PR #3, 2026-07-17/18) — ✅ both paths green

A throwaway PR (#3, targeting the migration branch) bumped
`$button-height-regular` 40px → 44px to exercise the workflow end to end.
Final results:

- **Stale path**: committing CSS without snapshots → `visual-html
snapshots` check fails, sticky "Visual Regression Report" comment posts
  with the per-component change table + ⚠️ regeneration instructions,
  regenerated snapshots + viewer upload as the `visual-preview` artifact,
  and the viewer deploys to the PR preview site.
- **Green path**: with regenerated snapshots committed → check passes and
  the comment shows the clean change table (447 sections across 22
  components — the true blast radius of the 4px change) with the viewer
  link.
- **CI determinism**: CI-regenerated baselines verify green on
  independent reruns, on both the migration PR and the test PR.

Defects the validation caught (all fixed on the migration branch):

1. `lint:sass` linted `.snap` files as CSS (181 errors) → stylelint
   `ignoreFiles`.
2. Baseline was coupled to the generating Chromium version → baseline
   regenerated by CI with the lockfile-pinned browser; constraint
   documented in VISUAL-TESTING.md and ADR 0007.
3. Image-load races made img serialization nondeterministic (3 skin story
   files; same mechanism as ebayui-core's pre-existing flaky ebay-card
   test) → the cached wrapper now serializes only author-specified
   `width`/`height`/`src` attributes, which also makes `src` changes
   always visible in snapshots.
4. Docs pointed at skin-only `update-snapshots`, but skin CSS changes
   also invalidate ebayui-core's committed snapshots → guidance now uses
   the root script.

Known follow-ups (out of scope for this PR): ebayui-core's ebay-card
browser test is flaky on image load (upstream the stable-img serialization
into their shared test util); the visual viewer's gh-pages deploy can race
the site preview's Pages build (cosmetic — consider a shared concurrency
group).

## 9. Decision record (resolved 2026-07-17)

| Question                          | Decision                                                                                                                                                                |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dark mode as a snapshot dimension | **No** — visual-html preserves `var()` references, so snapshots are theme-agnostic by construction; the viewer gets a light/dark toggle for human review                |
| RTL / responsive widths           | **Per-component opt-in** via CSF `parameters.visual = { widths, rtl }`; default is a single viewport-independent capture (see §10)                                      |
| Snapshot file granularity         | **Per story-file**, colocated `__snapshots__/`                                                                                                                          |
| Default breakpoint                | **1280px**                                                                                                                                                              |
| CI ↔ snapshot relationship        | **Regenerate as part of the test suite**, enforce via `git diff --exit-code`; regenerated files ship in the CI artifact — no separate label/comment-triggered regen job |
| Cutover strategy                  | **Immediate** — no Percy parallel soak; removal in the same phase as enabling the new check                                                                             |
| Viewer delivery in CI             | **Both** workflow artifact and per-PR deploy on existing site infra, from day one                                                                                       |
| Pixel-screenshot backstop         | **None** — snapshots stay as code and are viewed in a browser                                                                                                           |

## 10. Pivot: viewport-independent snapshots + real-CSS viewer (2026-07-20)

Design-review feedback on the demo PR surfaced a fundamental issue: most
components have no width-dependent CSS, so labeling every snapshot with a
viewport width (`@ 1280px`) implied a coupling that doesn't exist, and the
viewer's scale-to-fit fixed-width frames wasted space and reviewability.

**Snapshot format.** Stories without `parameters.visual` opt-ins now emit a
single section labeled by story name alone (`┌─ storyName`) — the capture
still happens in a 1280px viewport (visual-html's `matchMedia` filtering
needs *some* width), but the label no longer claims one. Opted-in
components keep `@ <width>px[ rtl]` suffixes and `(same as 1280px)`
dedupe references. This relabels the entire baseline once (CI-regenerated,
same adoption dance as the initial baseline).

**Viewer rendering.** Instead of reconstructing stories from snapshot HTML
(inlined specified values), the viewer now renders each changed story's
*real HTML* — the story module is imported at each ref and executed —
against the skin bundle sass-compiled from that ref's SCSS sources at
viewer-build time (base sources come via `git archive`), with the ref's
`dist/svg/icons.svg` sprite inlined. The committed dist bundle is only a
fallback — it is refreshed only by full builds, so it can be stale
relative to the SCSS a PR changes.
Frames are fluid-width by default (dimension opt-ins still render fixed at
their declared width); embedded story `<script>`s execute natively in the
`srcdoc` document, so self-opening dialogs work. The snapshot-HTML path
remains as a fallback when a story source doesn't exist at a ref.

Element highlights are mapped from the snapshot diff onto the real DOM by
visible-child index paths (skipping synthetic `<style>` carriers and
`display:none` subtrees, and dropping the harness capture-container level).
The same design pass fixed viewer usability issues from QA: keyboard
shortcuts forward from focused frames, flip-on-click, Escape clearing
search, checkbox/state sync, responsive layout, and scroll preservation.

## 11. Review-flow revision: per-story pages, viewed-on-open, flags (2026-07-21)

User feedback on the single-page viewer's "Reviewed" checkbox: reviewing
should not be a separate manual action, and diffs should be linkable.
The viewer now builds an **index page plus one HTML page per changed
story** (`dist/s/<slug>.html`, slugs stable across builds):

- **Viewed = opened.** Opening a story page is the review action. The
  index styles links with the browser's native `:visited`, and a
  localStorage mirror (content-hashed per diff) powers the viewed counter
  — a diff that changes on a later push reverts to unviewed.
- **⚑ Flag replaces the checkbox.** The only manual action left is
  flagging a diff for follow-up (button or `x`); flags roll up on the
  index and are also content-hashed.
- **Persistent URLs.** Story pages (and `#dim-N` fragments) can be shared
  to point a teammate at one specific diff. The old
  `visual-preview.html` URL redirects to the index.
- Heavy per-ref assets (compiled CSS bundles, tokens, icon sprites) are
  emitted once into `dist/assets/` and shared by all pages via `<base>`
  links inside the srcdoc frames, so pages stay small and assets cache.
  View preferences (mode/theme/highlights) persist across pages.
- **Pages are rendered at compile time.** The element diff runs under
  jsdom in `build.mjs`, frame documents are baked into static `srcdoc`
  attributes (with both token themes linked, dark disabled), and the
  inspector and text diff are pre-rendered markup. Client JS is a thin
  enhancer: compare modes are class/style changes on a unified `.duo`
  container (iframes are never rebuilt or reparented, so switching modes
  or themes never reloads them), plus measuring, stores, and keyboard.
  Combined with hover/focus prefetching, a prefetched page is a finished
  page.
