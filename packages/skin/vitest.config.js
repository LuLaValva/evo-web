import { defineConfig, mergeConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import viteConfig from "./vite.config.js";

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            name: "visual",
            include: ["test/visual/**/*.spec.js"],
            // Heavy story files (many stories × widths) exceed the default
            // 5s; visual-html re-parses the full CSSOM per capture today.
            testTimeout: 120_000,
            browser: {
                enabled: true,
                provider: playwright({
                    // Allows CI/sandbox environments to point at a
                    // pre-installed Chromium instead of downloading one.
                    launchOptions: process.env.CHROMIUM_EXECUTABLE_PATH
                        ? {
                              executablePath:
                                  process.env.CHROMIUM_EXECUTABLE_PATH,
                          }
                        : {},
                }),
                headless: true,
                screenshotFailures: false,
                instances: [{ browser: "chromium" }],
            },
        },
    }),
);
