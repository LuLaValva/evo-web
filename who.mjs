import fs from "node:fs";
import { chromium } from "playwright";
const DIST = "tools/visual-preview/dist";
fs.writeFileSync("/tmp/s.mjs", fs.readFileSync("packages/skin/src/sass/avatar/stories/avatar.stories.js", "utf8"));
const html = (await import("/tmp/s.mjs")).sizes();
fs.writeFileSync(`${DIST}/s/_who.html`, `<!doctype html><html><head>
<link rel="stylesheet" href="../assets/vars-head.css">
<link rel="stylesheet" href="../assets/tokens-light.css">
<link rel="stylesheet" href="../assets/skin-full.css">
<style>body{margin:16px}</style></head><body>${html}</body></html>`);
const b = await chromium.launch(); const p = await b.newPage();
await p.goto("http://127.0.0.1:8791/s/_who.html");
console.log(await p.evaluate(() => {
  const el = document.body.firstElementChild;
  const out = [`<${el.tagName.toLowerCase()} class="${el.className}"> font-size=${getComputedStyle(el).fontSize} line-height=${getComputedStyle(el).lineHeight}`];
  for (const sheet of document.styleSheets) {
    for (const r of sheet.cssRules) {
      if (!r.selectorText) continue;
      let m = false; try { m = el.matches(r.selectorText); } catch {}
      if (m && (r.style.getPropertyValue("font-size") || r.style.getPropertyValue("line-height"))) {
        out.push(`  ${r.selectorText} { font-size: ${r.style.getPropertyValue("font-size")}; line-height: ${r.style.getPropertyValue("line-height")} }`);
      }
    }
  }
  out.push("  body computed: " + getComputedStyle(document.body).fontSize + " / " + getComputedStyle(document.body).lineHeight);
  return out.join("\n");
}));
await b.close();
