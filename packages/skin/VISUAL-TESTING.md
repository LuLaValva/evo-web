# Visual Regression Testing - FAQ

## What is it?

Skin uses [visual-html](https://github.com/eBay/visual-html) snapshots for
visual regression testing. Every Storybook story is rendered in headless
Chromium and serialized to a deterministic text snapshot containing only
visually significant information: the element structure plus the author CSS
rules that match each element. Snapshots are committed to git next to their
stories (`src/sass/<component>/stories/__snapshots__/`), so the visual diff
is part of the PR diff.

An in-house **preview viewer** renders the before/after of every changed
story so changes can be reviewed visually — side by side, swipe, onion skin,
or flip — with the exact changed elements outlined and their changed
properties listed.

## Why does my PR have a Visual Regression check?

When you modify Skin components (CSS, tokens, stories, or the visual test
harness), CI regenerates all snapshots and fails if the committed ones don't
match. This ensures every visual change is explicit in the PR and reviewed.

## How do I update snapshots?

```bash
npm run update-snapshots -w packages/skin
```

Snapshots regenerate in place; commit the changes with your code. Running
the suite requires headless Chromium (installed automatically by
`npm install` via Playwright).

## How do I review changes visually?

```bash
npm run visual:preview   # from the repo root
```

This builds `tools/visual-preview/dist/visual-preview.html` — a
self-contained page comparing your working tree against `origin/main`. Open
it in any browser. In CI, the same viewer is deployed to the PR preview site
and linked from the "Visual Regression Report" PR comment (and uploaded as a
workflow artifact).

The viewer highlights exactly which elements changed and lists each changed
property (e.g. `padding-left: 20px → 28px`), supports light/dark and RTL,
and tracks which stories you've marked reviewed.

## Which dimensions are captured?

By default, one capture per story: LTR at 1280px. Components with
responsive or direction-sensitive CSS opt into more via story parameters:

```js
export default {
    title: "Skin/Dialog",
    parameters: {
        visual: { widths: [320, 512, 768, 1024], rtl: true },
    },
};
```

Captures for secondary dimensions that are identical to the default are
stored as `(same as 1280px)` references.

## Why don't snapshots change when I change a token value?

By design. visual-html serializes the _specified_ CSS values, so
`var(--color-background-accent)` stays unresolved in snapshots — one
snapshot covers light and dark themes, and a token's value change is
reviewed where the token is defined, not as churn across every consumer.
Use the preview viewer's light/dark toggle to review rendered token
changes.

## What if the check fails?

The check fails only when committed snapshots don't match the code. Run
`npm run update-snapshots -w packages/skin` locally and commit the result.
If you can't run browsers locally, download the `visual-preview` CI
artifact — it contains the regenerated snapshot files.

## How are baselines updated?

Merging your PR _is_ the baseline update — snapshots live in git. There is
no separate approval dashboard, no baseline job, and no token or paid
service involved. Fork PRs work out of the box.

## Why do my local snapshots differ from CI's?

Snapshot output is coupled to the **Chromium version** that renders the
stories — newer Chromium builds can parse and enumerate CSS slightly
differently. The version is pinned through Playwright in the lockfile, and
`npm install` downloads exactly that build, so local and CI agree as long
as you use the Playwright-managed browser (don't point the harness at a
system Chrome).

Corollary: a PR that upgrades Playwright must also regenerate the full
snapshot baseline in the same PR. The diff will be mechanical churn — the
preview viewer's inspector makes it easy to confirm nothing visually
meaningful changed.

## What does this NOT catch?

Text snapshots capture structure and applied CSS, not pixels. Paint-level
issues (font rasterization, image content, browser-specific rendering bugs)
are not detected — that's what human eyes on the preview viewer are for.
Icon sprites are not embedded in the viewer (matching Storybook), and
animations are static.

## History

Skin previously used Percy (screenshot-based, cloud). See
`docs/adr/0007-visual-html-visual-regression.md` for the decision record
and `docs/plans/percy-to-visual-html-migration.md` for the migration
details.
