const a={title:"Skin/Fake Button/Cascade",parameters:{visual:{rtl:!0}}},s=()=>`
<div style="color: red;">
    <a class="fake-btn" href="http://www.ebay.com">
        <span class="fake-btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Fake Button</span>
        </span>
    </a>
</div>
`,e=()=>`
<div style="font-size: 200%">
    <a class="fake-btn" href="http://www.ebay.com">
        <span class="fake-btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Fake Button</span>
        </span>
    </a>
</div>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<div style="color: red;">
    <a class="fake-btn" href="http://www.ebay.com">
        <span class="fake-btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Fake Button</span>
        </span>
    </a>
</div>
\``,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<div style="font-size: 200%">
    <a class="fake-btn" href="http://www.ebay.com">
        <span class="fake-btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Fake Button</span>
        </span>
    </a>
</div>
\``,...e.parameters?.docs?.source}}};const n=["color","fontSize"];export{n as __namedExportsOrder,s as color,a as default,e as fontSize};
