const t={title:"Skin/Flag"},s=()=>`
<h2>
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span style="vertical-align: middle;">United States of America</span>
</h2>
`,a=()=>`
<p>
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span style="vertical-align: middle;">United States of America</span>
</p>
`,e=()=>`
<a href="http://www.ebay.com">
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span>United States of America</span>
</a>
`,n=()=>`
<svg class="flag flag--us">
    <use href="#flag-us"></use>
</svg>
<a href="http://www.ebay.com">
    <span style="vertical-align: middle;">United States of America</span>
</a>
`,r=()=>`
<p class="demo-a11y-text-spacing">
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span style="vertical-align: middle;">United States of America</span>
</p>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<h2>
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span style="vertical-align: middle;">United States of America</span>
</h2>
\``,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<p>
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span style="vertical-align: middle;">United States of America</span>
</p>
\``,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<a href="http://www.ebay.com">
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span>United States of America</span>
</a>
\``,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<svg class="flag flag--us">
    <use href="#flag-us"></use>
</svg>
<a href="http://www.ebay.com">
    <span style="vertical-align: middle;">United States of America</span>
</a>
\``,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
<p class="demo-a11y-text-spacing">
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span style="vertical-align: middle;">United States of America</span>
</p>
\``,...r.parameters?.docs?.source}}};const l=["insideHeading","insideParagraph","insideLink","beforeLink","textSpacing"];export{l as __namedExportsOrder,n as beforeLink,t as default,s as insideHeading,e as insideLink,a as insideParagraph,r as textSpacing};
