import{b as m}from"./utils-DyU2_5R1.js";import{a,b as n,c as v,f as k,d as u,h as T,e as c,g as S,u as _,p as w,r as x,i as h,v as D}from"./dom-CIHBwv1V.js";import{b as E,c as R,$ as O,a as A}from"./evo-icon-close-12-BXGpiG6b.js";import"./iframe-CfBr7C7U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DUawFjLf.js";/* empty css             */const l=(e=>`<button type=button><span class=selection-chip__text><!></span>${e}</button>`)(A),i=(e=>` E%l/${e}&l`)(O),L=u("TVS2yQy",e=>x(e.a,"click",function(t,d){$(e,!e.m),e.i&&e.i(t,d)})),b=c(13,L),$=_(12,e=>{w(e.a,"aria-pressed",e.m?"true":"false"),b(e)}),f=c(7,e=>$(e,e.f,e.g)),M=n(5,f),X=n(6,f),z=(e,t)=>k(e.a,["selection-chip","selection-chip--animated",t]),H=n(8,b),I=u("C9yJi9E",e=>T(e,"a")),J=n(11,e=>{v(e,"a",e.l,{class:1,"aria-pressed":1,type:1,"on-click":1}),I(e)}),j=S(1),B=(e,t)=>j(e,t);function r(e){E(e.c),R(e.c,{class:"selection-chip__trailing"})}const p=(e,t)=>{(({class:d,content:ae,onClick:ce,selected:le,...y})=>J(e,y))(t),M(e,t.selected),X(e,t.selectedChange),H(e,t.onClick),B(e,t.content),z(e,t.class)},K=a("M5PKZXh",l,i,r,p),N=l,P=(e=>`/${e}&`)(i),Q=h("Awot6N4","Select","b");function U(e){r(e.a)}const V=(e,t)=>p(e.a,{...t,content:Q(e)}),W=a("XJmeOnf",N,P,U,V),Z="<evo-selection-chip ...input>Select</evo-selection-chip>",q=(e=>`${e}<p>Chip is <!></p>`)(l),F=(e=>`/${e}&Db%l`)(i),G=h("yS$gS0X","Select","b"),g=c(5,e=>p(e.a,{...e.d,selected:e.e,selectedChange:te(e),content:G(e)})),C=_(4,e=>{D(e.b,e.e?"selected":"deselected"),g(e)});function Y(e){r(e.a),C(e,!1)}const ee=n(3,g);function te(e){return t=>{C(e,t)}}const ne=a("n9RehLo",q,F,Y,ee),se=`<let/selected=false>
<evo-selection-chip ...input selected:=selected>Select</evo-selection-chip>

<p>
  Chip is \${selected ? "selected" : "deselected"}
</p>`,oe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-selection-chip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

A chip used to toggle between active and inactive states.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-evo-selection-chip)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-evo-selection-chip)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-selection-chip/examples)
`,he={title:"form input/evo-selection-chip",component:K,parameters:{docs:{description:{component:oe}}},argTypes:{selected:{controllable:!0,type:"boolean",control:"boolean",description:"Selected state of the chip"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},s=m(W,Z),o=m(ne,se);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)",...o.parameters?.docs?.source}}};const be=["Default","Controlled"];export{o as Controlled,s as Default,be as __namedExportsOrder,he as default};
