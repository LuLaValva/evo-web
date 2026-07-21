const r={title:"Skin/Image Placeholder"},e=()=>`
<h2>
    <svg class="image-placeholder">
        <use href="#image-placeholder"></use>
    </svg>
</h2>
`,s=()=>`
<p>
    <svg class="image-placeholder" style="border: 1px solid black; width: 50px; height: 50px">
        <use href="#image-placeholder"></use>
    </svg>
</p>
`,a=()=>`
<div style="border: 1px dotted black; width: 150px; height: 150px">
    <svg class="image-placeholder" >
        <use href="#image-placeholder"></use>
    </svg>
</div>
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<h2>
    <svg class="image-placeholder">
        <use href="#image-placeholder"></use>
    </svg>
</h2>
\``,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<p>
    <svg class="image-placeholder" style="border: 1px solid black; width: 50px; height: 50px">
        <use href="#image-placeholder"></use>
    </svg>
</p>
\``,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<div style="border: 1px dotted black; width: 150px; height: 150px">
    <svg class="image-placeholder" >
        <use href="#image-placeholder"></use>
    </svg>
</div>
\``,...a.parameters?.docs?.source}}};const d=["insideHeading","differentWidths","inContainerVariableWidth"];export{d as __namedExportsOrder,r as default,s as differentWidths,a as inContainerVariableWidth,e as insideHeading};
