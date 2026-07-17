import { stringifyVisualData } from "visual-html/dist/stringify";
import { getVisualAttributes } from "visual-html/dist/attributes";
import {
    getDocumentStyleRules,
    getElementStyles,
    getPseudoElementStyles,
} from "visual-html/dist/stylesheets";

const ELEMENT_TYPE = 1;
const TEXT_TYPE = 3;

let cachedKey;
let cachedRules;

/**
 * Drop-in replacement for visual-html's default export that caches the
 * parsed document style rules between captures. Upstream visual-html
 * re-reads and specificity-sorts every CSSOM rule on each call, which
 * dominates runtime on large story suites. Media-query rules are filtered
 * against the current viewport at parse time, so the cache key must change
 * whenever rule applicability changes — for this harness, the viewport
 * width. Direction (ltr/rtl) does not affect the rule list because
 * selectors are matched per element at capture time.
 */
export default function visualHTML(el, cacheKey) {
    if (cachedRules === undefined || cachedKey !== cacheKey) {
        cachedKey = cacheKey;
        cachedRules = getDocumentStyleRules(el.ownerDocument);
    }
    return stringifyVisualData(getVisualData(el, cachedRules));
}

// Mirrors visual-html's internal getVisualData (dist/index.js), minus the
// unused `shallow` option, with the style rules passed in instead of
// re-parsed per call.
function getVisualData(el, styleRules) {
    const window = el.ownerDocument.defaultView;
    let childrenVisualData = null;

    if (window.getComputedStyle(el).display === "none") {
        return null;
    }

    if (el.firstChild) {
        let curNode = el.firstChild;
        childrenVisualData = [];
        do {
            switch (curNode.nodeType) {
                case ELEMENT_TYPE: {
                    const childDisplayData = getVisualData(
                        curNode,
                        styleRules,
                    );
                    if (childDisplayData) {
                        childrenVisualData.push(childDisplayData);
                    }
                    break;
                }
                case TEXT_TYPE:
                    childrenVisualData.push(curNode.nodeValue);
                    break;
            }
            curNode = curNode.nextSibling;
        } while (curNode);
    }

    return {
        tagName: el.tagName,
        styles: getElementStyles(el, styleRules),
        pseudoStyles: getPseudoElementStyles(el, styleRules),
        attributes: getVisualAttributes(el),
        children: childrenVisualData,
    };
}
