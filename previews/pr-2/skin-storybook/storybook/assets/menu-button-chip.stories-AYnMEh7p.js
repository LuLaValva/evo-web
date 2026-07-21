const r={title:"Skin/Filter Chip/Menu"},e=()=>`
<button class="filter-chip" type="button" aria-expanded="false">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
`,t=()=>`
<button class="filter-chip" type="button" aria-expanded="true">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
`,i=()=>`
<button class="filter-chip filter-chip--selected" type="button" aria-expanded="false">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
    <span class="clipped">Filter Applied</span>
</button>
`,s=()=>`
<button class="filter-chip filter-chip--selected" type="button" aria-expanded="true">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
    <span class="clipped">Filter Applied</span>
</button>
`,a=()=>`
<button class="filter-chip filter-chip--expressive" type="button" aria-expanded="false">
    <span class="filter-chip__media">
        <img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
            alt=""
        >
    </span>
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
`,n=()=>`
<button class="filter-chip filter-chip--expressive filter-chip--selected" type="button" aria-expanded="false">
    <span class="filter-chip__media">
        <img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
            alt=""
        >
    </span>
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
    <span class="clipped">Filter Applied</span>
</button>
`,c=()=>`
<button class="filter-chip demo-a11y-text-spacing" type="button" aria-expanded="false">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<button class="filter-chip" type="button" aria-expanded="false">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
\``,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<button class="filter-chip" type="button" aria-expanded="true">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
\``,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
<button class="filter-chip filter-chip--selected" type="button" aria-expanded="false">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
    <span class="clipped">Filter Applied</span>
</button>
\``,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<button class="filter-chip filter-chip--selected" type="button" aria-expanded="true">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
    <span class="clipped">Filter Applied</span>
</button>
\``,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<button class="filter-chip filter-chip--expressive" type="button" aria-expanded="false">
    <span class="filter-chip__media">
        <img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
            alt=""
        >
    </span>
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
\``,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<button class="filter-chip filter-chip--expressive filter-chip--selected" type="button" aria-expanded="false">
    <span class="filter-chip__media">
        <img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
            alt=""
        >
    </span>
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
    <span class="clipped">Filter Applied</span>
</button>
\``,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<button class="filter-chip demo-a11y-text-spacing" type="button" aria-expanded="false">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
\``,...c.parameters?.docs?.source}}};const o=["collapsed","expanded","collapsedSelected","expandedSelected","expressiveCollapsed","expressiveCollapsedSelected","textSpacing"];export{o as __namedExportsOrder,e as collapsed,i as collapsedSelected,r as default,t as expanded,s as expandedSelected,a as expressiveCollapsed,n as expressiveCollapsedSelected,c as textSpacing};
