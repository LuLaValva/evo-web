/* Element-level snapshot diff, run at build time under jsdom.

   Diffs the two snapshot trees and mutates them in place, tagging changed
   elements with data-vhd / data-vhd-id so the rendered frames carry their own
   highlight anchors. The returned change list drives the inspector panel. */

function styleMap(el) {
  const map = {};
  for (const decl of (el.getAttribute("style") || "").split(/;\s*/)) {
    const i = decl.indexOf(":");
    if (i > 0) {
      map[decl.slice(0, i).trim()] = decl
        .slice(i + 1)
        .trim()
        .replace(/\s+/g, " ");
    }
  }
  return map;
}

/** Indices of the longest common subsequence of two child lists. */
function lcsPairs(a, b, eq) {
  const n = a.length;
  const m = b.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = eq(a[i], b[j])
        ? dp[i + 1][j + 1] + 1
        : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const pairs = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (eq(a[i], b[j])) {
      pairs.push([i, j]);
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      i++;
    } else {
      j++;
    }
  }
  return pairs;
}

export function createAnnotator(parseFragment) {
  // Change ids must stay unique across every dim rendered on one page, so
  // the counter is annotator-scoped rather than per-annotate call.
  let nextId = 0;

  function mark(el, kind) {
    const id = "vhd" + nextId++;
    el.setAttribute("data-vhd", el.getAttribute("data-vhd") || kind);
    el.setAttribute("data-vhd-id", id);
    return id;
  }

  function diffChildren(bParent, aParent, path, changes) {
    const bKids = [...bParent.children];
    const aKids = [...aParent.children];
    const pairs = lcsPairs(bKids, aKids, (x, y) => x.tagName === y.tagName);
    const matched = [new Set(), new Set()];
    for (const [bi, ai] of pairs) {
      matched[0].add(bi);
      matched[1].add(ai);
    }
    const record = (el, kind, before, after) =>
      changes.push({
        id: mark(el, kind),
        kind,
        path: path.concat(el.tagName.toLowerCase()),
        props: [{ name: "(element)", before, after }],
      });
    bKids.forEach((el, i) => {
      if (!matched[0].has(i)) record(el, "removed", "present", "removed");
    });
    aKids.forEach((el, i) => {
      if (!matched[1].has(i)) record(el, "added", "absent", "added");
    });
    for (const [bi, ai] of pairs) {
      compareElement(
        bKids[bi],
        aKids[ai],
        path.concat(aKids[ai].tagName.toLowerCase()),
        changes,
      );
    }
  }

  /** Property-level differences between two matched elements. */
  function elementProps(b, a) {
    const props = [];
    // <style> children in snapshots are synthetic carriers for
    // pseudo-element styles, compared as raw text.
    if (b.tagName === "STYLE") {
      if (b.textContent !== a.textContent) {
        props.push({
          name: "(pseudo-element styles)",
          before: b.textContent.trim(),
          after: a.textContent.trim(),
        });
      }
      return props;
    }
    const bs = styleMap(b);
    const as = styleMap(a);
    for (const name of new Set([...Object.keys(bs), ...Object.keys(as)])) {
      if (bs[name] !== as[name]) {
        props.push({
          name,
          before: bs[name] ?? "(unset)",
          after: as[name] ?? "(unset)",
        });
      }
    }
    const attrNames = new Set(
      [...b.attributes, ...a.attributes].map((x) => x.name),
    );
    for (const attr of attrNames) {
      if (attr === "style" || attr.startsWith("data-vhd")) continue;
      const bv = b.getAttribute(attr);
      const av = a.getAttribute(attr);
      if (bv !== av) {
        props.push({
          name: "[" + attr + "]",
          before: bv ?? "(unset)",
          after: av ?? "(unset)",
        });
      }
    }
    const leaf = !b.children.length && !a.children.length;
    if (leaf && b.textContent.trim() !== a.textContent.trim()) {
      props.push({
        name: "(text)",
        before: b.textContent.trim(),
        after: a.textContent.trim(),
      });
    }
    return props;
  }

  function compareElement(b, a, path, changes) {
    const props = elementProps(b, a);
    if (props.length) {
      const id = mark(b, "changed");
      a.setAttribute("data-vhd", a.getAttribute("data-vhd") || "changed");
      a.setAttribute("data-vhd-id", id);
      changes.push({ id, kind: "changed", path, props });
    }
    if (b.tagName !== "STYLE") diffChildren(b, a, path, changes);
  }

  return function annotate(dim) {
    const bRoot = parseFragment(dim.before);
    const aRoot = parseFragment(dim.after);
    const changes = [];
    if (dim.before && dim.after) diffChildren(bRoot, aRoot, [], changes);
    return {
      beforeHtml: bRoot.innerHTML,
      afterHtml: aRoot.innerHTML,
      changes,
    };
  };
}
