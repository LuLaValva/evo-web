import{b as s}from"./utils-DyU2_5R1.js";import{a as o,b as g}from"./dom-CIHBwv1V.js";import{$ as r,a as i,b as p,c as m,d as l,e as c,f as u,g as b,B as y}from"./index-Bhwikpw5.js";import"./iframe-CfBr7C7U.js";import"./preload-helper-PPVm8Dsz.js";const h=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,f=(e=>`<!>${e}<!>`)(c),T=(e=>`b/${e}&b`)(l),x=(e,t)=>b(e.a,t),v=(e,t)=>{u(e.a,t),x(e,`${t} unread items`)};function $(e){m(e.a)}const E=g(2,e=>{r(e.a,e.c.class),i(e.a,e.c.type),p(e.a,(({a11yText:t,class:_,number:q,type:M,...d})=>d)(e.c)),v(e,e.c.number)}),w=o("DT3qf32",f,T,$,E),D=`import type { Input as BadgeInput} from '../index.marko';

export interface Input extends BadgeInput {
}

<const/label=\`\${input.number} unread items\`/>
<evo-badge ...input number=input.number a11yText=label/>
`,k=(e=>`<!>${e}<!>`)(c),C=(e=>`b/${e}&b`)(l);function S(e){m(e.a),b(e.a,"new"),r(e.a),u(e.a),i(e.a),p(e.a,{})}const B=o("qWKZ9v2",k,C,S),I=`<evo-badge a11yText="new"/>
`,R={title:"graphics & icons/evo-badge",component:y,parameters:{docs:{description:{component:h}}},argTypes:{number:{type:"number",control:"number",description:"Used as the number to be placed in the badge"},type:{type:"string",options:["menu","icon"],control:"inline-radio",description:"The badge type"},a11yText:{type:{name:"string",required:!0},control:"text",description:'A descriptive label of what the badge represents (e.g. "5 unread items"). May be set to `null` only if accessibility is provided through other means.'},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through, except `role`."}}},a=s(w,D,{number:5}),n=s(B,I,{});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  number: 5
})`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"buildExtensionTemplate(EmptyTemplate, EmptyTemplateCode, {})",...n.parameters?.docs?.source}}};const W=["Default","Empty"];export{a as Default,n as Empty,W as __namedExportsOrder,R as default};
