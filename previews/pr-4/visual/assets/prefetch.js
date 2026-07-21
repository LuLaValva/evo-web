/* Link prefetching on hover/touch/focus, same approach as the Marko
   website: the moment a same-origin navigation looks likely, drop a
   <link rel=prefetch> for it so the story page is warm by click time.
   Anchors here wrap spans (dot/name/chip), so resolve the link with
   closest() rather than requiring the event target to be the <a>. */
"use strict";
(() => {
    const prefetchedUrls = new Set();
    function prefetch(e) {
        const a = e.target?.closest?.("a");
        if (!a || !(a instanceof HTMLAnchorElement)) return;
        if (prefetchedUrls.has(a.href)) {
            // already prefetched, ignore
        } else if (
            !a.download &&
            a.href &&
            !(a.rel && a.rel !== "external") &&
            (!a.target || a.target === "_self") &&
            a.origin === window.location.origin &&
            a.pathname !== window.location.pathname
        ) {
            prefetchedUrls.add(a.href);
            const link = document.createElement("link");
            link.rel = "prefetch";
            link.href = a.href;
            link.onload = link.onerror = () => link.remove();
            document.head.appendChild(link);
        }
    }
    document.addEventListener("mouseover", prefetch, { capture: true });
    document.addEventListener("touchstart", prefetch, { capture: true, passive: true });
    document.addEventListener("focus", prefetch, { capture: true });
})();
