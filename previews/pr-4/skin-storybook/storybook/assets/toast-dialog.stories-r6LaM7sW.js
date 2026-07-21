const s={title:"Skin/Toast Dialog",parameters:{visual:{widths:[320,512]}}},a=()=>`
<aside class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences</h2>
            <button class="icon-btn icon-btn--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
                <svg class="icon icon--16">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="toast-dialog__main">
            <p>We detected something unusual about a recent sign-in to your eBay account.
            To help keep you safe, we recommend you change the password.</p>
        </div>
        <div class="toast-dialog__footer">
            <button accesskey="a" class="btn btn--primary">Accept</button>
        </div>
    </div>
</aside>
`,o=()=>`
<aside class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences</h2>
            <button class="icon-btn icon-btn--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
                <svg class="icon icon--16">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="toast-dialog__main">
            <p>We detected something unusual about a recent sign-in to your eBay account.
            To help keep you safe, we recommend you change the password.</p>
        </div>
        <div class="toast-dialog__footer">
            <button accesskey="d" class="btn btn--secondary">Dismiss</button>
            <button accesskey="a" class="btn btn--primary">Accept</button>
        </div>
    </div>
</aside>
`,e=()=>`
<aside class="toast-dialog demo-a11y-text-spacing" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences</h2>
            <button class="icon-btn icon-btn--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
                <svg class="icon icon--16">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="toast-dialog__main">
            <p>We detected something unusual about a recent sign-in to your eBay account.
            To help keep you safe, we recommend you change the password.</p>
        </div>
        <div class="toast-dialog__footer">
            <button accesskey="d" class="btn btn--secondary">Dismiss</button>
            <button accesskey="a" class="btn btn--primary">Accept</button>
        </div>
    </div>
</aside>
`,t=()=>`
<aside class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences but with a title that's super long so it wraps to the next line. No dialog header should ever be this long.</h2>
            <button class="icon-btn icon-btn--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
                <svg class="icon icon--16">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="toast-dialog__main">
            <p>We detected something unusual about a recent sign-in to your eBay account.
            To help keep you safe, we recommend you change the password.</p>
        </div>
        <div class="toast-dialog__footer">
            <button accesskey="a" class="btn btn--primary">Accept</button>
        </div>
    </div>
</aside>
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<aside class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences</h2>
            <button class="icon-btn icon-btn--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
                <svg class="icon icon--16">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="toast-dialog__main">
            <p>We detected something unusual about a recent sign-in to your eBay account.
            To help keep you safe, we recommend you change the password.</p>
        </div>
        <div class="toast-dialog__footer">
            <button accesskey="a" class="btn btn--primary">Accept</button>
        </div>
    </div>
</aside>
\``,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
<aside class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences</h2>
            <button class="icon-btn icon-btn--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
                <svg class="icon icon--16">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="toast-dialog__main">
            <p>We detected something unusual about a recent sign-in to your eBay account.
            To help keep you safe, we recommend you change the password.</p>
        </div>
        <div class="toast-dialog__footer">
            <button accesskey="d" class="btn btn--secondary">Dismiss</button>
            <button accesskey="a" class="btn btn--primary">Accept</button>
        </div>
    </div>
</aside>
\``,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<aside class="toast-dialog demo-a11y-text-spacing" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences</h2>
            <button class="icon-btn icon-btn--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
                <svg class="icon icon--16">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="toast-dialog__main">
            <p>We detected something unusual about a recent sign-in to your eBay account.
            To help keep you safe, we recommend you change the password.</p>
        </div>
        <div class="toast-dialog__footer">
            <button accesskey="d" class="btn btn--secondary">Dismiss</button>
            <button accesskey="a" class="btn btn--primary">Accept</button>
        </div>
    </div>
</aside>
\``,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<aside class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences but with a title that's super long so it wraps to the next line. No dialog header should ever be this long.</h2>
            <button class="icon-btn icon-btn--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
                <svg class="icon icon--16">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="toast-dialog__main">
            <p>We detected something unusual about a recent sign-in to your eBay account.
            To help keep you safe, we recommend you change the password.</p>
        </div>
        <div class="toast-dialog__footer">
            <button accesskey="a" class="btn btn--primary">Accept</button>
        </div>
    </div>
</aside>
\``,...t.parameters?.docs?.source}}};const i=["primaryAction","secondaryAction","textSpacing","primaryActionWithHeaderOverflow"];export{i as __namedExportsOrder,s as default,a as primaryAction,t as primaryActionWithHeaderOverflow,o as secondaryAction,e as textSpacing};
