import{b as s}from"./utils-DyU2_5R1.js";import{_ as a,a as r,k as u}from"./dom-C0MY0u5h.js";import{$ as c,a as p,b as l,c as m,F as d}from"./index-D2dX_-jV.js";import{$ as h,a as b,b as f,c as v}from"./evo-icon-sneaker-16-CW08O1Jb.js";import"./iframe-BkqRzvDk.js";import"./preload-helper-PPVm8Dsz.js";import"./evo-icon-chevron-down-12-0T_v4n9k.js";import"./index-D4aRlw-G.js";/* empty css             */const $=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-filter-chip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

A chip used to toggle between active and inactive states.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-evo-filter-chip)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-evo-filter-chip)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-filter-chip/examples)
`,g=(e=>`<!>${e}<!>`)(m),T=(e=>`b/${e}&b`)(l),x=e=>{f(e.a),v(e.a,{})},y=a("EZK1UsQ",b,(e=>`/${e}&`)(h),x),w=a("v1iBDb9","Filter","b");function E(e){p(e.a)}const _=(e,t)=>c(e.a,{...t,content:w(e),icon:u({content:y(e)})}),k=r("uLbFHQj",g,T,E,_),D=`<evo-filter-chip ...input>
    <@icon>
        <evo-icon-sneaker-16/>
    </@icon>
    Filter
</evo-filter-chip>
`,M=(e=>`<!>${e}<!>`)(m),S=(e=>`b/${e}&b`)(l),B=a("jl$BBu6","Filter","b");function C(e){p(e.a)}const F=(e,t)=>c(e.a,{variant:"expressive",...t,content:B(e),image:u({alt:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"})}),L=r("XACfFsp",M,S,C,F),H=`<evo-filter-chip variant="expressive" ...input>
    <@image alt="image" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"/>
    Filter
</evo-filter-chip>
`,z=(e=>`<!>${e}<!>`)(m),R=(e=>`b/${e}&b`)(l),A=a("x43cnR8","Filter","b");function O(e){p(e.a)}const U=(e,t)=>c(e.a,{variant:"menu",...t,content:A(e)}),j=r("vVh42kQ",z,R,O,U),Q=`<evo-filter-chip variant="menu" ...input>
    Filter
</evo-filter-chip>
`,N={title:"form input/evo-filter-chip",component:d,parameters:{docs:{description:{component:$}}},argTypes:{selected:{controllable:!0,type:"boolean",control:"boolean",description:"Selected state of the chip"},variant:{type:"string",options:["default","expressive","menu"],control:"inline-radio",description:"The variant of the filter. Default and expressive are toggle buttons, while menu turns it into a dropdown."},icon:{description:"The leading icon. Only used for default variant","@":{}},image:{description:"The leading image. Only used for expressive variant","@":{"<img> attributes":{description:"All attributes and event handlers from [the native HTML `<img>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) will be passed through to `<@image>`"}}},open:{controllable:!0,type:"boolean",control:"boolean",description:"Only used for menu variant. True/false if the menu is open or not"},a11ySelectedText:{type:"string",control:"text",description:"Localized, for anchor variant: the clipped text to show when the filter is set. This is required to switch to anchor type along with href"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) for anchor variants)"}}},o=s(k,D),n=s(j,Q),i=s(L,H);o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"buildExtensionTemplate(MenuButtonTemplate, MenuButtonTemplateCode)",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ExpressiveTemplate, ExpressiveTemplateCode)",...i.parameters?.docs?.source}}};const P=["Default","MenuButton","Expressive"];export{o as Default,i as Expressive,n as MenuButton,P as __namedExportsOrder,N as default};
