import{b as i}from"./utils-DyU2_5R1.js";import{_ as t,a as s,b as m,j as n,k as l}from"./dom-x1z4vtvC.js";import{b as c,a as p,g as d,f as u,e as h,i as b,$ as f,h as v,c as x,d as g,C as W}from"./index-D0rgbL5X.js";import"./iframe-cyLTEVRG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BpjoVTYo.js";import"./evo-icon-tick-16-CVnWLuvy.js";import"./index-BoCxi-ng.js";/* empty css             *//* empty css             */const C=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-fake-menu
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

The dropdown portion of the menu-button. Used to build a list of links which link out to other pages. This can be used to create custom dropdowns.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-evo-fake-menu)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-evo-fake-menu)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-fake-menu/examples)
`,D=g,E=(e=>`/${e}&`)(x),$=t("I_NDLix","item 3","b"),U=t("chY1Qpj","item 2","b"),L=t("UYB0vER","item 1 that has very long text","b");function M(e){f(e.a),v(e.a,n(n(l({href:"#",content:L(e)}),{href:"#",content:U(e)}),{href:"#",content:$(e)}))}const P=m(2,e=>{c(e.a,e.c.class),p(e.a,e.c.classPrefix),d(e.a,e.c.fixWidth),u(e.a,e.c.fixed),h(e.a,e.c.reverse),b(e.a,(({class:y,classPrefix:k,fixWidth:_,fixed:T,item:w,reverse:S,...r})=>r)(e.c))}),R=s("rivr96v",D,E,M,P),j=`<evo-fake-menu ...input>
    <@item href="#">
        item 1 that has very long text
    </@item>
    <@item href="#">
        item 2
    </@item>
    <@item href="#">
        item 3
    </@item>
</evo-fake-menu>
`,z=g,A=(e=>`/${e}&`)(x),H=t("zqdiuZY","item 4","b"),Y=t("v1yrvUt","item 3","b"),B=t("Dp_jLBY","item 2","b"),N=t("CmSRQDk","item 1 that has very long text","b");function q(e){f(e.a),v(e.a,n(n(n(n(l({href:"#",content:N(e)}),{href:"#",content:B(e)}),{separator:!0}),{href:"#",content:Y(e)}),{href:"#",content:H(e)}))}const I=m(2,e=>{c(e.a,e.c.class),p(e.a,e.c.classPrefix),d(e.a,e.c.fixWidth),u(e.a,e.c.fixed),h(e.a,e.c.reverse),b(e.a,(({class:y,classPrefix:k,fixWidth:_,fixed:T,item:w,reverse:S,...r})=>r)(e.c))}),O=s("hcbmGqC",z,A,q,I),Q=`<evo-fake-menu ...input>
    <@item href="#">
        item 1 that has very long text
    </@item>
    <@item href="#">
        item 2
    </@item>
    <@item separator/>
    <@item href="#">
        item 3
    </@item>
    <@item href="#">
        item 4
    </@item>
</evo-fake-menu>
`,ae={title:"building blocks/evo-fake-menu",component:W,parameters:{docs:{description:{component:C}}},argTypes:{classPrefix:{type:"string",control:"text",description:"A prefix to be added to all classes (used by parent components like menu-button)"},reverse:{type:"boolean",control:"boolean",description:"Whether menu displays in reverse order"},fixed:{type:"boolean",control:"boolean",description:"Whether the menu uses fixed positioning"},fixWidth:{type:"boolean",control:"boolean",description:"Constrain items to the width of the button"},item:{description:'A menu item. Can be a link (`href`) or a button (`type="button"`).',"@":{href:{type:"string",control:"text",description:"URL for the link item. Omit for button items."},type:{type:"string",control:{type:"select"},options:["button","submit"],description:'Set to `"button"` or `"submit"` to render a `<button>` instead of an `<a>`'},current:{type:"boolean",control:"boolean",description:"Whether the item represents the current page (sets `aria-current`)"},itemMatchesUrl:{type:"boolean",control:"boolean",description:'Used with `current`. When `false`, `aria-current` is set to `"true"` instead of `"page"`.'},badgeNumber:{type:"number",control:"number",description:"Number to display in a badge"},disabled:{type:"boolean",control:"boolean",description:"Whether the item is disabled"},separator:{type:"boolean",control:"boolean",description:"When `true`, renders a visual separator instead of a menu item"},"<a> attributes":{description:"All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through to `<@item>`"}}},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},a=i(R,j),o=i(O,Q);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorCode)",...o.parameters?.docs?.source}}};const oe=["Default","Separator"];export{a as Default,o as Separator,oe as __namedExportsOrder,ae as default};
