const n={title:"Skin/Button/Cascade",parameters:{visual:{rtl:!0}}},s=()=>`
<button type="button" class="btn" style="color: red;">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,t=()=>`
<div style="font-size: 200%;">
    <button type="button" class="btn">
        <span class="btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Button</span>
        </span>
    </button>
</div>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn" style="color: red;">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
\``,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<div style="font-size: 200%;">
    <button type="button" class="btn">
        <span class="btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Button</span>
        </span>
    </button>
</div>
\``,...t.parameters?.docs?.source}}};const e=["color","fontSize"];export{e as __namedExportsOrder,s as color,n as default,t as fontSize};
