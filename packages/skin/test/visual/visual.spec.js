import { page } from "vitest/browser";
import { describe, it, expect } from "vitest";
import visualHTML from "./visual-html-cached";
import "../../src/sass/bundles/skin-full.scss";
// Demo-only styles stories rely on (carousel demo cards, a11y
// text-spacing, …) — the same file Storybook loads via preview.js.
import "../../.storybook/custom-styles.css";

const storyModules = import.meta.glob("../../src/sass/**/*.stories.js", {
    eager: true,
});

const DEFAULT_WIDTH = 1280;
const VIEWPORT_HEIGHT = 800;

// src/sass/button/stories/button/primary.stories.js
//   -> src/sass/button/stories/button/__snapshots__/primary.snap
function snapshotPathFor(storyPath) {
    const dir = storyPath.slice(0, storyPath.lastIndexOf("/"));
    const base = storyPath
        .slice(storyPath.lastIndexOf("/") + 1)
        .replace(/\.stories\.js$/, ".snap");
    return `${dir}/__snapshots__/${base}`;
}

// Captures every story of a module at one width/direction.
// Returns Map<storyName, serializedVisualHTML>.
async function captureStories(mod, width, dir) {
    await page.viewport(width, VIEWPORT_HEIGHT);
    document.documentElement.dir = dir;
    const bodies = new Map();
    for (const [name, story] of Object.entries(mod)) {
        if (name === "default" || typeof story !== "function") continue;
        const container = document.createElement("div");
        document.body.appendChild(container);
        try {
            container.innerHTML = story();
            // innerHTML does not execute embedded <script> tags, but
            // Storybook's HTML renderer does (e.g. dialog stories call
            // showModal() to open themselves). Re-create them so they run.
            for (const script of container.querySelectorAll("script")) {
                const clone = document.createElement("script");
                clone.textContent = script.textContent;
                script.replaceWith(clone);
            }
            bodies.set(name, visualHTML(container, width));
        } finally {
            container.remove();
            document.documentElement.dir = "";
        }
    }
    return bodies;
}

for (const [storyPath, mod] of Object.entries(storyModules)) {
    const title = mod.default?.title ?? storyPath;
    const visual = mod.default?.parameters?.visual ?? {};
    // Most components have no width-dependent rules, so their snapshots
    // are viewport-independent: one capture, labeled by story name alone.
    // Components that opt in via parameters.visual get width/RTL-suffixed
    // sections; the default width is always captured alongside.
    const hasDimensions = (visual.widths?.length ?? 0) > 0 || visual.rtl;
    const widths = [...new Set([...(visual.widths ?? []), DEFAULT_WIDTH])].sort(
        (a, b) => a - b,
    );

    describe(title, () => {
        it("matches visual snapshot", async () => {
            // dimension label suffix -> Map<storyName, body>.
            // Widths are captured in a width-outer order so the cached
            // rule parse in visual-html-cached is reused across stories.
            const dimensions = new Map();
            for (const width of widths) {
                dimensions.set(
                    `${width}px`,
                    await captureStories(mod, width, "ltr"),
                );
            }
            if (visual.rtl) {
                dimensions.set(
                    `${DEFAULT_WIDTH}px rtl`,
                    await captureStories(mod, DEFAULT_WIDTH, "rtl"),
                );
            }

            // Emit grouped by story. Dimensions whose output matches the
            // default-width LTR capture collapse to a reference marker —
            // this halves baseline weight and keeps review noise down.
            const defaultBodies = dimensions.get(`${DEFAULT_WIDTH}px`);
            let out = "";
            for (const name of defaultBodies.keys()) {
                if (!hasDimensions) {
                    out += `┌─ ${name}\n${defaultBodies.get(name)}\n\n`;
                    continue;
                }
                for (const [suffix, bodies] of dimensions) {
                    const body = bodies.get(name);
                    const isDefault = suffix === `${DEFAULT_WIDTH}px`;
                    const emitted =
                        !isDefault && body === defaultBodies.get(name)
                            ? `(same as ${DEFAULT_WIDTH}px)`
                            : body;
                    out += `┌─ ${name} @ ${suffix}\n${emitted}\n\n`;
                }
            }
            await expect(out).toMatchFileSnapshot(snapshotPathFor(storyPath));
        });
    });
}
