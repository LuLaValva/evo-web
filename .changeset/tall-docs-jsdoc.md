---
"@evo-web/marko": patch
---

Storybook documentation now lives as JSDoc on each component's `Input` type and is extracted automatically by `@storybook/marko` docgen; story `argTypes` keep only non-inferable controls, controllable flags and passthrough attribute notes. No runtime behavior changes.
