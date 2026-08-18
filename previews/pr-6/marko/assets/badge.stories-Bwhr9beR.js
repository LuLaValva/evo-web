import{b as o}from"./utils-DyU2_5R1.js";import{a as s,b as g}from"./dom-ByZf3MQk.js";import{$ as r,a as m,b as p,c as i,d as l,e as c,f as u,g as b,B as y}from"./index-_ZERrm0Z.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";const f=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-badge
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

## evo-badge Usage

\`\`\`marko
<evo-badge number=5 aria-label="5 unread items"/>
\`\`\`

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-badge)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-badge)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-badge/examples)
`,h=(e=>`<!>${e}<!>`)(c),x=(e=>`b/${e}&b`)(l),T=(e,t)=>b(e.a,t),$=(e,t)=>{u(e.a,t),T(e,`${t} unread items`)};function v(e){i(e.a)}const E=g(2,e=>{r(e.a,e.c.class),m(e.a,e.c.type),p(e.a,(({a11yText:t,class:_,number:q,type:z,...d})=>d)(e.c)),$(e,e.c.number)}),w=s("DT3qf32",h,x,v,E),D=`import type { Input as BadgeInput} from '../index.marko';

export interface Input extends BadgeInput {
}

<const/label=\`\${input.number} unread items\`/>
<evo-badge ...input number=input.number a11yText=label/>
`,k=(e=>`<!>${e}<!>`)(c),C=(e=>`b/${e}&b`)(l);function S(e){i(e.a),b(e.a,"new"),r(e.a),u(e.a),m(e.a),p(e.a,{})}const B=s("qWKZ9v2",k,C,S),I=`<evo-badge a11yText="new"/>
`,W={title:"graphics & icons/evo-badge",component:y,parameters:{docs:{description:{component:f}}},argTypes:{number:{control:"number"},type:{options:["menu","icon"],control:"inline-radio"},a11yText:{control:"text"},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through, except `role`."}}},a=o(w,D,{number:5}),n=o(B,I,{});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  number: 5
})`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"buildExtensionTemplate(EmptyTemplate, EmptyTemplateCode, {})",...n.parameters?.docs?.source}}};const j=["Default","Empty"];export{a as Default,n as Empty,j as __namedExportsOrder,W as default};
