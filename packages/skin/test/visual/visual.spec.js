import { page } from "vitest/browser";
import { describe, it, expect } from "vitest";
import visualHTML from "visual-html";
import "../../src/sass/bundles/skin-full.scss";

// Phase 0 spike scope: three representative components
// (simple / overlay / animated). Widen the glob to all of src/sass in Phase 1.
const storyModules = import.meta.glob(
    "../../src/sass/{button,dialog,progress-spinner}/stories/**/*.stories.js",
    { eager: true },
);

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

async function captureStories(mod, width, dir) {
    await page.viewport(width, VIEWPORT_HEIGHT);
    document.documentElement.dir = dir;
    let out = "";
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
            const label = dir === "rtl" ? `${name} @ ${width}px rtl` : `${name} @ ${width}px`;
            out += `┌─ ${label}\n${visualHTML(container)}\n\n`;
        } finally {
            container.remove();
            document.documentElement.dir = "";
        }
    }
    return out;
}

for (const [storyPath, mod] of Object.entries(storyModules)) {
    const title = mod.default?.title ?? storyPath;
    const visual = mod.default?.parameters?.visual ?? {};
    const widths = visual.widths ?? [DEFAULT_WIDTH];

    describe(title, () => {
        it("matches visual snapshot", async () => {
            let out = "";
            for (const width of widths) {
                out += await captureStories(mod, width, "ltr");
            }
            if (visual.rtl) {
                out += await captureStories(mod, DEFAULT_WIDTH, "rtl");
            }
            await expect(out).toMatchFileSnapshot(snapshotPathFor(storyPath));
        });
    });
}
