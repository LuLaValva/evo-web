import{b as i}from"./utils-DyU2_5R1.js";import{_ as s,a as r,k as u}from"./dom-ByZf3MQk.js";import{$ as c,a as p,b as l,c as m,F as d}from"./index-CQbpvKXf.js";import{$ as b,a as $,b as v,c as f}from"./evo-icon-sneaker-16-DkgOqk10.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./evo-icon-chevron-down-12-Bix86w80.js";import"./index-SLqM2JFj.js";/* empty css             */const h=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,g=(e=>`<!>${e}<!>`)(m),T=(e=>`b/${e}&b`)(l),x=e=>{v(e.a),f(e.a,{})},E=s("EZK1UsQ",$,(e=>`/${e}&`)(b),x),y=s("v1iBDb9","Filter","b");function _(e){p(e.a)}const k=(e,t)=>c(e.a,{...t,content:y(e),icon:u({content:E(e)})}),w=r("uLbFHQj",g,T,_,k),M=`<evo-filter-chip ...input>
    <@icon>
        <evo-icon-sneaker-16/>
    </@icon>
    Filter
</evo-filter-chip>
`,B=(e=>`<!>${e}<!>`)(m),C=(e=>`b/${e}&b`)(l),D=s("jl$BBu6","Filter","b");function F(e){p(e.a)}const S=(e,t)=>c(e.a,{variant:"expressive",...t,content:D(e),image:u({alt:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"})}),H=r("XACfFsp",B,C,F,S),L=`<evo-filter-chip variant="expressive" ...input>
    <@image alt="image" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"/>
    Filter
</evo-filter-chip>
`,R=(e=>`<!>${e}<!>`)(m),z=(e=>`b/${e}&b`)(l),A=s("x43cnR8","Filter","b");function U(e){p(e.a)}const j=(e,t)=>c(e.a,{variant:"menu",...t,content:A(e)}),Q=r("vVh42kQ",R,z,U,j),W=`<evo-filter-chip variant="menu" ...input>
    Filter
</evo-filter-chip>
`,N={title:"form input/evo-filter-chip",component:d,parameters:{docs:{description:{component:h}}},argTypes:{selected:{controllable:!0},variant:{options:["default","expressive","menu"],control:"inline-radio"},image:{"@":{"<img> attributes":{description:"All attributes and event handlers from [the native HTML `<img>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) will be passed through to `<@image>`"}}},open:{controllable:!0},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) for anchor variants)"}}},n=i(w,M),o=i(Q,W),a=i(H,L);n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(MenuButtonTemplate, MenuButtonTemplateCode)",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ExpressiveTemplate, ExpressiveTemplateCode)",...a.parameters?.docs?.source}}};const P=["Default","MenuButton","Expressive"];export{n as Default,a as Expressive,o as MenuButton,P as __namedExportsOrder,N as default};
