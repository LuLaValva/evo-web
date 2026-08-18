import{b as a}from"./utils-DyU2_5R1.js";import{_ as s,a as r}from"./dom-ByZf3MQk.js";import{$ as i,a as p,b as u,c as l,B as c}from"./index-Bz-e3gKr.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-VCYgT6qA.js";import"./evo-icon-spinner-24-fKp9ZYWc.js";import"./index-SLqM2JFj.js";/* empty css             */import"./evo-icon-chevron-down-16-B7IB9ME0.js";const m=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-button
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

Button styled with core classes.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-evo-button)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-evo-button)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-button/examples)
`,d=(t=>`<!>${t}<!>`)(l),b=(t=>`b/${t}&b`)(u),$=s("xOFA_x_","Button","b");function y(t){p(t.a)}const f=(t,n)=>i(t.a,{...n,content:$(t)}),v=r("ayoFQBk",d,b,y,f),x=`<evo-button ...input>Button</evo-button>
`,B=(t=>`<!>${t}<!>`)(l),g=(t=>`b/${t}&b`)(u),h=s("$_fp5rW","Button","b");function T(t){p(t.a)}const E=(t,n)=>i(t.a,{bodyState:"expand",variant:"form",...n,content:h(t)}),_=r("n3tUgdf",B,g,T,E),w=`<evo-button bodyState="expand" variant="form" ...input>
    Button
</evo-button>
`,O={title:"buttons/evo-button",component:c,parameters:{docs:{description:{component:m}}},argTypes:{size:{options:["regular (default)","large","small"],control:"inline-radio"},priority:{options:["primary","secondary","tertiary","none"],control:"inline-radio"},bodyState:{options:["none","loading","reset","expand"],control:"inline-radio"},variant:{options:["standard (default)","destructive","form"],control:"inline-radio"},split:{options:["none (default)","start","end"],control:"inline-radio"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},o=a(v,x),e=a(_,w);o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ButtonTemplate, ButtonTemplateCode)",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ExpandButtonTemplate, ExpandButtonTemplateCode)",...e.parameters?.docs?.source}}};const R=["Default","ExpandButton"];export{o as Default,e as ExpandButton,R as __namedExportsOrder,O as default};
