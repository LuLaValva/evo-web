/* Element-level snapshot diff, run at BUILD time (under jsdom).
   Diffs the two snapshot trees; records for each change an index path
   into the *visible story DOM* (indices count element children that are
   not the synthetic <style> pseudo-style carriers; the story DOM walk in
   the browser skips display:none elements to mirror visual-html's
   pruning). Mutates the parsed trees in place, tagging changed elements
   with data-vhd / data-vhd-id so the serialized fallback HTML carries
   its own highlight anchors. */

function styleMap(el) {
    const map = {};
    for (const decl of (el.getAttribute("style") || "").split(/;\s*/)) {
        const i = decl.indexOf(":");
        if (i > 0) map[decl.slice(0, i).trim()] = decl.slice(i + 1).trim().replace(/\s+/g, " ");
    }
    return map;
}

function lcsPairs(a, b, eq) {
    const n = a.length, m = b.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = n - 1; i >= 0; i--)
        for (let j = m - 1; j >= 0; j--)
            dp[i][j] = eq(a[i], b[j])
                ? dp[i + 1][j + 1] + 1
                : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const pairs = [];
    let i = 0, j = 0;
    while (i < n && j < m) {
        if (eq(a[i], b[j])) { pairs.push([i, j]); i++; j++; }
        else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
        else j++;
    }
    return pairs;
}

const nodeLabel = (el) => el.tagName.toLowerCase();

// Index of each child among the non-STYLE element children (STYLE nodes
// in snapshots are synthetic and don't exist in the story DOM).
function storyIndices(parent) {
    const out = [];
    let i = 0;
    for (const el of parent.children) {
        out.push(el.tagName === "STYLE" ? null : i++);
    }
    return out;
}

export function createAnnotator(parseFragment) {
    // Change ids must stay unique across every dim rendered on one page,
    // so the counter is annotator-scoped, not per-annotate call.
    let nextId = 0;

    function diffTrees(bParent, aParent, path, changes, bPath, aPath) {
        const bKids = [...bParent.children];
        const aKids = [...aParent.children];
        const bIdx = storyIndices(bParent);
        const aIdx = storyIndices(aParent);
        const pairs = lcsPairs(bKids, aKids, (x, y) => x.tagName === y.tagName);
        const bMatched = new Set(pairs.map((p) => p[0]));
        const aMatched = new Set(pairs.map((p) => p[1]));
        bKids.forEach((el, i) => {
            if (!bMatched.has(i)) {
                el.setAttribute("data-vhd", "removed");
                const id = "vhd" + nextId++;
                el.setAttribute("data-vhd-id", id);
                changes.push({
                    id,
                    kind: "removed",
                    path: path.concat(nodeLabel(el)),
                    pathB: bIdx[i] === null ? null : bPath.concat(bIdx[i]),
                    pathA: null,
                    props: [{ name: "(element)", before: "present", after: "removed" }],
                });
            }
        });
        aKids.forEach((el, i) => {
            if (!aMatched.has(i)) {
                el.setAttribute("data-vhd", "added");
                const id = "vhd" + nextId++;
                el.setAttribute("data-vhd-id", id);
                changes.push({
                    id,
                    kind: "added",
                    path: path.concat(nodeLabel(el)),
                    pathB: null,
                    pathA: aIdx[i] === null ? null : aPath.concat(aIdx[i]),
                    props: [{ name: "(element)", before: "absent", after: "added" }],
                });
            }
        });
        for (const [bi, ai] of pairs) {
            compareElement(
                bKids[bi],
                aKids[ai],
                path.concat(nodeLabel(aKids[ai])),
                changes,
                bIdx[bi] === null ? bPath : bPath.concat(bIdx[bi]),
                aIdx[ai] === null ? aPath : aPath.concat(aIdx[ai]),
            );
        }
    }

    function compareElement(b, a, path, changes, bPath, aPath) {
        const props = [];
        if (b.tagName === "STYLE") {
            if (b.textContent !== a.textContent) {
                props.push({ name: "(pseudo-element styles)", before: b.textContent.trim(), after: a.textContent.trim() });
            }
        } else {
            const bs = styleMap(b), as = styleMap(a);
            for (const name of new Set([...Object.keys(bs), ...Object.keys(as)])) {
                if (bs[name] !== as[name]) {
                    props.push({ name, before: bs[name] ?? "(unset)", after: as[name] ?? "(unset)" });
                }
            }
            for (const attr of new Set([
                ...[...b.attributes].map((x) => x.name),
                ...[...a.attributes].map((x) => x.name),
            ])) {
                if (attr === "style" || attr.startsWith("data-vhd")) continue;
                const bv = b.getAttribute(attr), av = a.getAttribute(attr);
                if (bv !== av) props.push({ name: "[" + attr + "]", before: bv ?? "(unset)", after: av ?? "(unset)" });
            }
            if (!b.children.length && !a.children.length && b.textContent.trim() !== a.textContent.trim()) {
                props.push({ name: "(text)", before: b.textContent.trim(), after: a.textContent.trim() });
            }
        }
        if (props.length) {
            const id = "vhd" + nextId++;
            b.setAttribute("data-vhd", b.getAttribute("data-vhd") || "changed");
            a.setAttribute("data-vhd", a.getAttribute("data-vhd") || "changed");
            b.setAttribute("data-vhd-id", id);
            a.setAttribute("data-vhd-id", id);
            changes.push({ id, kind: "changed", path, pathB: bPath, pathA: aPath, props });
        }
        if (b.tagName !== "STYLE") diffTrees(b, a, path, changes, bPath, aPath);
    }

    return function annotate(dim) {
        const bRoot = parseFragment(dim.before);
        const aRoot = parseFragment(dim.after);
        const changes = [];
        if (dim.before && dim.after) diffTrees(bRoot, aRoot, [], changes, [], []);
        return { beforeHtml: bRoot.innerHTML, afterHtml: aRoot.innerHTML, changes };
    };
}
