# Contributing

This page contains instructions and guidelines for anybody contributing code to the eBay Skin project.

## Table of Contents

- [Contributing](#contributing)
    - [Table of Contents](#table-of-contents)
    - [System Requirements](#system-requirements)
    - [Contribution Steps](#contribution-steps)
    - [Development Modes](#development-modes)
        - [New Module Creation](#new-module-creation)
    - [Versioning](#versioning)
        - [API Change](#api-change)
        - [New Functionality](#new-functionality)
        - [Bug Fix](#bug-fix)
    - [Branching](#branching)
    - [Package Dependencies](#package-dependencies)
    - [Commit Message Format](#commit-message-format)
    - [Pull Requests](#pull-requests)
    - [Naming Scheme](#naming-scheme)
    - [Style Guide](#style-guide)
    - [LESS API (deprecated)](#less-api-deprecated)
    - [Custom Property API](#custom-property-api)
        - [Core Tokens](#core-tokens)
        - [Semantic Tokens](#semantic-tokens)
        - [Component Tokens](#component-tokens)
    - [Dark Mode](#dark-mode)
    - [Storybook](#storybook)
    - [Visual Regression Testing](#visual-regression-testing)
        - [External Contributors](#external-contributors)
        - [Internal Contributors](#internal-contributors)
            - [Build Modes](#build-modes)
            - [Run All Snapshots](#run-all-snapshots)
            - [Run Specific Snapshot(s)](#run-specific-snapshots)
            - [Technical Notes](#technical-notes)
    - [Website](#website)
    - [Scripts](#scripts)
    - [Icon Creation](#icon-creation)
    - [Releases](#releases)
        - [Pre-Release](#pre-release)
        - [Final Release](#final-release)
        - [GitHub Release](#github-release)
        - [Hotfix Release](#hotfix-release)
        - [Website Archive](#website-archive)

## System Requirements

- [Node.js](https://nodejs.org/en/)

## Contribution Steps

Before writing any code, please submit a new issue to [GitHub](https://github.com/eBay/evo-web/issues). Or, if you want to work on an _existing_ issue, please request to do so on the relevant ticket.

We **strongly** advise you to only begin working on issues that are assigned specifically to you and that are part of the upcoming milestone, otherwise your work may end up being in vain.

Here is a rough overview of steps required when contributing code to skin:

- GitHub team members must create a new branch in the Skin repo. Non-team members should create their own fork.
- Please ensure you branch off from the correct milestone branch! See branching strategy section below.
- Skin adopts the [BEM](https://css-tricks.com/bem-101/) methodology (a popular naming convention for classes in HTML and CSS). Please familiarize yourself with our [style guide](https://github.com/eBay/evo-web/blob/main/packages/skin/STYLEGUIDE.md).
- After making changes to `.less` files, ensure that no new CSS lint warnings or errors are introduced
- Add or update the corresponding website documentation. More information in the [documentation](#documentation) section below.
- Push commit(s) to the upstream branch. Ensure new dist files (i.e. the compiled CSS files) are included!
- Send pull request. See Pull Requests section below.

## Development Modes

Skin can usually be considered to be in one of two modes of development:

1. Feature development mode (default)
1. Refactoring/cleanup/breaking-changes mode

The vast majority of this guide is relevant to both modes.

### New Module Creation

Executing the following script will generate all files and references for a new module:

```
./scripts/develop-module -m "Your Module Name"
```

_Example_

```
./scripts/develop-module -m toast-dialog
```

Add applicable metadata about the component to the `module_metadata` map in each of the components `+page.marko` files. This should be `export const metadata {}`.

```js
export const metadata = {
    component: "The skin module name",
    ds-component: "module's relationship with the eBay Design System" {
        name: "eBay Design System component name",
        version: "version of the eBay Design System component implemented in Skin"
    },
    status: "status, e.g. 'beta', 'deprecated', 'in-progress'",
    submodules: "array of Skin modules used in this module"
}
```

If the Skin component is used for multiple Design System components, include those as an array in the `ds-component` field. For example:

```js
export const metadata = {
    component: "lightbox-dialog",
    "ds-component": [
        {
            name: "dialog",
            version: 4.1,
        },
        {
            name: "bottom-sheet",
            version: 3.0,
        },
    ],
    submodules: ["button", "icon-button"],
};
```

When updating a Skin module to match an updated Design System design, make sure to update its version in its `ds-component` field.

## Versioning

Skin follows [Semantic Versioning](http://semver.org):

1. MAJOR version when we make incompatible API changes,
1. MINOR version when we add functionality in a backwards-compatible manner
1. PATCH version when we make backwards-compatible bug fixes.

To help guide your contribution into the right bucket, we provide more detailed insight into each type of change in the sections below.

### API Change

Here are some types of change that we consider as an incompatible API change:

- Removal of a CSS class
- Removal of a public variable or mixin
- Removal of a `browser.json` file
- Removal of a folder from `dist`
- Removal of an SVG icon
- Change to CDN path structure
- Change to HTML structure or attributes of module
- Change to CSS property that radically alters appearance and/or layout

Typically, we will try and add a deprecation note for a period of time before introducing any breaking API change. The creation of aliases can often help ease the transition from one API to another.

### New Functionality

Here are some of the changes we consider as new functionality:

- Addition of a new module
- Addition of a module subtype or variant
- Addition of a new variable or mixin
- Addition of an alias for a class or icon
- Update of a module to its latest playbook version
- Update of a colour value that remains within the same hue
- Update of a CSS property that does not affect the modules layout in page

Minor version updates are a signal that there is something new (no matter how small) that an app might be interested in using!

### Bug Fix

Bug fixes can perhaps best be summed up as: "fixing something that does not work as expected or documented".

**NOTE:** Updating a module to its latest visual specification is NOT a candidate for a bug fix. No matter how small or trivial the visual update may be, we always consider it as new functionality.

## Branching

Do not attempt to commit feature work directly to the `master` branch. Pushes to the `master` branch are restricted to admins and should only be used for important corrections to the documentation or website.

All other branches are "milestone" branches or "issue" branches.

Work for every "issue" must go in its own branch. The branch name will reflect the issue number and issue type. For example, for an issue number 202, related to the pagination module, a branch named `202-pagination` would be created.

Issue branches must be created from the relevant milestone branch. For example, if issue 202 will go out in the v2.6.7 milestone, then the 202 issue branch must be created from the 2.6.7 milestone branch.

Every milestone branch must be created from the `master` branch. For example, when beginning work on the 2.9.0 release, the `2.9.0` branch would be created from the `master` branch.

When all milestone issues are complete, and merged into the milestone branch, a Skin admin will merge the milestone branch into the `master` branch in preparation for the release.

A milestone branch will be deleted after it has been merged into `master`. There is no need to keep these milestone branches lying around, as we can go back to any point in time using tags. See the hotfix section below for more details.

## Package Dependencies

Every time we cut a new milestone branch, the package dependencies require updating.

1. Ensure you are on the milestone branch and that the branch is up-to-date with latest from `master`
1. Run `npm install` to ensure your local node_modules are in sync with your `package-lock.json`
1. Run `npm outdated`
1. Go into `package.json` and update version numbers to the latest based on outdated. Pay attention to any major version updates as they may contain breaking changes!
1. Run `npm install` again. This will update `package-lock.json`.
1. Run `npm run build`, `npm start` and `npm run storybook` and make sure those commands execute correctly
1. Check in `package.json` and `package-lock.json` as `chore: updated dev deps`.

## Commit Message Format

We use [commitlint conventional configuration](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) to lint all commit messages.

When determining the commitlint type, use the following guidance:

build
: package scripts or build scripts

ci
: GitHub Actions

chore
: project file/folder structure

docs
: website docs/examples

feat
: new Skin module

fix
: bug fix on a Skin module

refactor
: refactor of a Skin module

revert
: revert previous commit

style
: website or storybook styles

test
: storybook stories

## Pull Requests

Guidance for pull requests:

- Always double-check which branch you are attempting to merge into. The target branch should always be a milestone branch!
- Only Skin admins are permitted to merge into `master`
- Non-atomic commits should be squashed (i.e. "work in progress" type commits).
- Do not add any commit that leaves the code in a broken state.
- Pull request for a _feature_ must only contain changes related to the issue (NOTE: refactoring/cleanup type PRs are often exempt from this rule)
- **Do not** be tempted to go fixing or refactoring unrelated issues. Doing so can make the code reviewer's job more difficult and/or time-consuming, as well as increasing risk of regression
- If you spot some other unrelated bug or code smell, please create a GitHub issue for it.
- After the pull request has been merged, your issue branch should be immediately deleted (by yourself or admin)

## Naming Scheme

eBay Skin is an implementation of the [eBay MIND Patterns](https://ebay.gitbook.io/mindpatterns). The MIND patterns [naming scheme](https://ebay.gitbook.io/mindpatterns/appendix/pattern-naming-scheme) follows an accessibility-first mindset; thus aligning our developer speak as closely as possible with existing W3C web standards & conventions.

## Style Guide

When contributing to Skin, please ensure you follow our [style guide](https://github.com/eBay/evo-web/blob/main/packages/skin/STYLEGUIDE.md).

## LESS API (deprecated)

In comparison to past versions, Skin now offers a very minimal public LESS API (i.e. variables and mixins). Over time this may be reduced to zero. This is mainly due to the introduction of CSS Custom Properties (see next section below).

## Custom Property API

Skin has a token based system that leverages CSS Custom Properties. The tokens are categorized into three levels:

- core
- semantic
- component

Skin provides a set of core and semantic defaults but, in order for modules to render correctly, they **must be explicitly included** by the end user.

### Core Tokens

Core tokens are our primitives. They currently represent colour and border radius, but in time will go on to include spacing, type ramp, breakpoints and more. For example:

- color-neutral-1
- color-blue-4
- border-radius-100
- spacing-100 (not yet available)

### Semantic Tokens

Semantic tokens are aliases of core tokens. They represent an aspect of the interface that is common across the site. For example:

- color-background-primary
- color-background-confirmation
- color-foreground-on-confirmation

**NOTE**: semantic token values may change dynamically at runtime depending on the "prefers-color-scheme" media query (i.e. [Dark Mode](#dark-mode)).

### Component Tokens

Component tokens are not used by Skin itself, but we expose them as a "brute-force" means for a page to override the system described above for one specific aspect of a component. For example:

- badge-background-color
- switch-checked-background-color
- textbox-placeholder-color

Obviously with great power, comes great responsibility.

## Dark Mode

Every Skin module has full support for [dark mode](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

Dark mode is powered by the [Custom Property API](#custom-property-api). When the "prefers-color-scheme" media query is satisfied, all semantic token values will be replaced, dynamically at runtime, with the values from the relevant tokens module (e.g.,`evo-semantic-dark` or `evo-semantic-light`).

**NOTE:** the semantic dark mode tokens are **not** included by default. They must be explicitly bundled by the end user. This allows end users to opt in to dark mode only when their base page is ready for it.

## Storybook

Every module requires a page in storybook. In addition to the main use cases, try and cover as many variants, scenarios and edge cases as possible. The following tests are required for every module:

- RTL (right to left languages)
- Font-Size increase (up to 200%)
- Color inheritance (to a certain degree)

Each story must be isolated to a single test. This allows us to easily run visual regression testing.

## Visual Regression Testing

We use [visual-html](https://github.com/eBay/visual-html) snapshots committed
to git for visual regression testing. Every Storybook story is rendered in
headless Chromium and serialized to a text snapshot containing only visually
significant information — element structure plus the author CSS rules that
match each element, with `var(--token)` references preserved unresolved (so
snapshots are theme-agnostic). Snapshots live next to their stories in
`src/sass/<component>/stories/__snapshots__/`.

See [VISUAL-TESTING.md](./VISUAL-TESTING.md) for the full FAQ.

### How It Works

1. Change a component's SCSS, HTML stories, or tokens
2. Run the visual suite — snapshots regenerate in place:

    ```bash
    npm run update-snapshots
    ```

3. Review the change visually with the preview viewer:

    ```bash
    npm run visual:preview   # from the repo root
    ```

4. Commit the snapshot changes together with your code change
5. CI (`Visual Regression` check) regenerates snapshots and fails if the
   committed ones are stale; reviewers approve the snapshot diff in normal
   PR review, aided by the deployed preview viewer linked from the PR
   comment

There is no separate approval dashboard and no baseline job — merging a PR
_is_ updating the baseline.

### Snapshot Dimensions

By default each story is captured once (LTR at 1280px). Components with
responsive or direction-sensitive styles opt into extra dimensions in their
story file's default export:

```js
export default {
    title: "Skin/Dialog",
    parameters: {
        visual: { widths: [320, 512, 768, 1024], rtl: true },
    },
};
```

- `widths`: additional viewport widths (the 1280px default is always
  captured). List the breakpoints your `@media` rules actually cross.
- `rtl: true`: adds one RTL capture at the default width.

If you add media queries or direction-sensitive styles to a component,
update its `parameters.visual` accordingly. Secondary dimensions whose
output matches the default capture are stored as `(same as 1280px)`
references to keep diffs quiet.

### External Contributors

No tokens or accounts are required — the whole pipeline runs locally and in
CI for fork PRs. If you cannot run headless Chromium locally, the CI check
uploads the regenerated snapshots as a `visual-preview` artifact you can
download and commit.

## Website

First, be sure to Run `npm install` to install all dependencies from NPM.

We use [Marko Run](https://github.com/marko-js/run) to generate HTML from templates, [SASS](https://sass-lang.com/) to preprocess and compile CSS. The website can be run and hosted locally (see next section) during development.

In order to run a dev server of the site, you can run `npm run dev`. This launches the server which should allow you to see updates as you change your CSS or HTML. This will launch the site at http://localhost:3000

Our site source is located in `src/routes`. These provide the basic site routing. Inside `src/components` are our common components which we use to show repeated parts of the site (such as syntax highlighting our code). Finally, all top level modules are located in `src/modules`. All these files will be used as the component name as well as in the nav. These are auto discoverable.

To build the site, run `npm run deploy`. This will create all the site assets in `_site`.

All CSS files are read directly from the source from `src/bundles/skin-full.scss`

## Scripts

The following scripts are available via npm:

- `npm start` - Builds the server and launches it at post 3000 (This does not have live reloading)
- `npm run dev` - Starts local BrowserSync server on port 3000 (This has live reloading)
- `npm test` - Runs a build and lints CSS and LESS files
- `npm run build` - Runs a build only (no server)

## Icon Creation

To add new SVG icons, please follow the [icon creation guide](ICON-CREATION.md).

## Releases

Release process for this package follows the monorepo Changesets workflow.
See the [root CONTRIBUTING.md](../../CONTRIBUTING.md#releases) for full release instructions, including how to create changesets and how to merge the automated `ci: release` PR.

### Website Archive

The website archive under `/docs/archive` should be updated each time a minor or major release is published.

1. In a local branch, checkout the tag of the previous version, e.g. `git checkout v10.7.5`
2. Run `npm i`
3. Run `npx marko-run build -o /docs/archive/v0.7.5`
4. Create a pull request
