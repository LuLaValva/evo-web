import{b as r}from"./utils-DyU2_5R1.js";import{_ as t,a as s,b as m,j as n,k as l}from"./dom-ByZf3MQk.js";import{b as c,a as u,g as f,f as p,e as h,i as d,$ as b,h as v,c as x,d as g,C as D}from"./index-D_G-Cdgu.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_ZERrm0Z.js";import"./evo-icon-tick-16-D69BQoRY.js";import"./index-SLqM2JFj.js";/* empty css             *//* empty css             */const C=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,E=g,$=(e=>`/${e}&`)(x),L=t("I_NDLix","item 3","b"),W=t("chY1Qpj","item 2","b"),R=t("UYB0vER","item 1 that has very long text","b");function U(e){b(e.a),v(e.a,n(n(l({href:"#",content:R(e)}),{href:"#",content:W(e)}),{href:"#",content:L(e)}))}const M=m(2,e=>{c(e.a,e.c.class),u(e.a,e.c.classPrefix),f(e.a,e.c.fixWidth),p(e.a,e.c.fixed),h(e.a,e.c.reverse),d(e.a,(({class:k,classPrefix:y,fixWidth:_,fixed:T,item:S,reverse:w,...o})=>o)(e.c))}),P=s("rivr96v",E,$,U,M),j=`<evo-fake-menu ...input>
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
`,z=g,H=(e=>`/${e}&`)(x),Y=t("zqdiuZY","item 4","b"),B=t("v1yrvUt","item 3","b"),q=t("Dp_jLBY","item 2","b"),A=t("CmSRQDk","item 1 that has very long text","b");function I(e){b(e.a),v(e.a,n(n(n(n(l({href:"#",content:A(e)}),{href:"#",content:q(e)}),{separator:!0}),{href:"#",content:B(e)}),{href:"#",content:Y(e)}))}const O=m(2,e=>{c(e.a,e.c.class),u(e.a,e.c.classPrefix),f(e.a,e.c.fixWidth),p(e.a,e.c.fixed),h(e.a,e.c.reverse),d(e.a,(({class:k,classPrefix:y,fixWidth:_,fixed:T,item:S,reverse:w,...o})=>o)(e.c))}),Q=s("hcbmGqC",z,H,I,O),G=`<evo-fake-menu ...input>
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
`,ae={title:"building blocks/evo-fake-menu",component:D,parameters:{docs:{description:{component:C}}},argTypes:{item:{"@":{href:{type:"string",control:"text",description:"URL for the link item. Omit for button items."},type:{options:["button","submit"],control:{type:"select"}},"<a> attributes":{description:"All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through to `<@item>`"}}},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},a=r(P,j),i=r(Q,G);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorCode)",...i.parameters?.docs?.source}}};const ie=["Default","Separator"];export{a as Default,i as Separator,ie as __namedExportsOrder,ae as default};
