import{b as o}from"./utils-DyU2_5R1.js";import{a as n,b as r}from"./dom-C0MY0u5h.js";import{c as i,d as p,e as l,f as m,b as c,$ as u,a as d,P as b}from"./index-C5wm6czj.js";import"./iframe-BkqRzvDk.js";import"./preload-helper-PPVm8Dsz.js";import"./evo-icon-spinner-24-ChmSQMgq.js";import"./index-D4aRlw-G.js";/* empty css             */const g=d,y=(e=>`/${e}&`)(u);function h(e){c(e.a)}const f=r(2,e=>{const s={a11yText:"Busy",...e.c};i(e.a,s.a11yText),p(e.a,s.class),l(e.a,s.size),m(e.a,(({a11yText:$,class:z,size:D,...a})=>a)(s))}),v=n("jVeJV5z",g,y,h,f),x=`<evo-progress-spinner a11yText="Busy" ...input/>
`,T=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-progress-spinner
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

\`\`\`marko
<evo-progress-spinner size="large" aria-label="busy"/>
\`\`\`

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/progress-evo-progress-spinner)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/progress-evo-progress-spinner)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-progress-spinner/examples)
`,M={title:"progress/evo-progress-spinner",component:b,parameters:{docs:{description:{component:T}}},argTypes:{size:{options:["normal (default)","small","large"],control:"inline-radio",description:'size of spinner. Default is `24`, can be "small" (`20`) or "large" (`30`).'},a11yText:{type:{name:"string",required:!0},control:"text",description:'Localized, the accessibility label for the progress spinner. This is for internationalization. It should describe the purpose of the spinner, such as "Loading". May be set to `null` only if accessibility is provided through other means.'},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},t=o(v,x);t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...t.parameters?.docs?.source}}};const j=["Default"];export{t as Default,j as __namedExportsOrder,M as default};
