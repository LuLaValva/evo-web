import{b as m}from"./utils-DyU2_5R1.js";import{a as l,_ as r,o as s,t as I,b as n,e as i,k as d,s as $,f as w,u as B,v as F}from"./dom-CIHBwv1V.js";import{$ as k,a as D,b as z,c as O,d as R,e as S,f as E,g as q}from"./evo-icon-clear-16-DCQOcGrB.js";import{b as j,c as A,a as H,$ as K}from"./index-NTZEOFt6.js";import{$ as L,a as G,b as Q,c as V}from"./index-CmhdmxP-.js";/* empty css             *//* empty css                */import"./iframe-CfBr7C7U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DUawFjLf.js";import"./index-eHCi5y9L.js";import"./index-CqXhae1j.js";import"./evo-icon-spinner-24-WpMhnVfz.js";import"./evo-icon-chevron-down-16-C0ookNav.js";import"./index-Bhwikpw5.js";/* empty css                    */import"./index-B3T-w_nD.js";const Y=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-filter-input
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A filter-input is a textbox which is used specifically to filter out content.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/?path=/story/form-input-evo-filter-input)
- [Storybook Docs](https://ebay.github.io/evo-web/?path=/docs/form-input-evo-filter-input)
- [Code Examples](https://github.com/eBay/evo-web/tree/master/packages/ebayui-core/src/components/evo-filter-input/examples)
`,u=(t=>`<span>${t}</span>`)(Q),p=(t=>` D/${t}&l`)(G),Z=t=>{R(t.a),S(t.a,{})},J=r("LQo9aS3",D,(t=>`/${t}&`)(k),Z),M=t=>{E(t.a),q(t.a,{})},N=r("jzGbHSc",O,(t=>`/${t}&`)(z),M),C=i(1,t=>K(t.a,{a11yText:t._._.h,class:"filter-input__clear-btn",size:"small",transparent:!0,onClick:pt(t),content:J(t)})),h=s(4,C,t=>t._._),P=t=>{h(t),b(t),H(t.a)},b=s(7,C,t=>t._._),U=I(0,(t=>`<!>${t}<!>`)(A),(t=>`b/${t}&b`)(j),P),v=s(7,t=>U(t,t._.h?0:1)),W=v,X=r("gOwTqTf","<!><!><!>","b%c",W),c=i(13,t=>V(t.b,{...t.l,fluid:!0,type:"search","aria-controls":t.i,placeholder:t.m,postfixIcon:d({content:X(t)}),prefixIcon:d({content:N(t)})}),2),tt=n(12,c),et=(t,e)=>tt(t,e!==void 0?e:"Filter"),y=i(10,t=>w(t.a,["filter-input",t.j&&`filter-input--${t.j}`,t.f])),nt=n(5,y),at=n(9,y);function _(t){L(t.b)}const ot=n(8,c),it=n(11,c),f=(t,e)=>{(({a11yClearButtonText:wt,a11yControlsId:Bt,class:Ft,placeholder:kt,size:Dt,...g})=>it(t,g))(e),rt(t,e.valueChange),nt(t,e.class),et(t,e.placeholder),ut(t,e.a11yClearButtonText),ot(t,e.a11yControlsId),at(t,e.size)},lt=$(h),rt=n(4,lt),st=$(v,b),ut=n(7,st);function pt(t){return function(){(t._._.e||null)?.("")}}const ct=l("KTOKiHF",u,p,_,f),_t=u,ft=(t=>`/${t}&`)(p);function dt(t){_(t.a)}const mt=(t,e)=>f(t.a,{...e,"aria-label":"Filter input",placeholder:"Filter",a11yControlsId:"filter-input-default",a11yClearButtonText:"Clear filter input"}),$t=l("rtEOYbl",_t,ft,dt,mt),Ct=`<evo-filter-input
    ...input
    aria-label="Filter input"
    placeholder="Filter"
    a11yControlsId="filter-input-default"
    a11yClearButtonText="Clear filter input"
/>
`,ht=(t=>`<div>${t}<div id=filter-input-controls>Current value: "<!>"</div></div>`)(u),bt=(t=>`D/${t}&Db%m`)(p),x=i(6,t=>f(t.a,{...t.d,value:t.f,valueChange:Tt(t),placeholder:"Filter",a11yControlsId:"filter-input-controls","aria-label":"Filter input",a11yClearButtonText:"Clear filter input"})),T=B(5,t=>{F(t.b,t.f),x(t)}),vt=(t,e)=>T(t,e);function yt(t){_(t.a)}const xt=n(3,t=>{vt(t,t.d.value),x(t)});function Tt(t){return e=>{T(t,e)}}const gt=l("ZOzx3D4",ht,bt,yt,xt),It=`export interface Input {
    value: string;
}

<let/value=input.value>
<div>
    <evo-filter-input
        ...input
        value:=value
        placeholder="Filter"
        a11yControlsId="filter-input-controls"
        aria-label="Filter input"
        a11yClearButtonText="Clear filter input"
    />
    <div id="filter-input-controls">
        Current value: "\${value}"
    </div>
</div>
`,Mt={title:"form input/evo-filter-input",component:ct,parameters:{docs:{description:{component:Y}}},argTypes:{size:{type:"string",options:["regular (default)","small","large"],control:"inline-radio",description:"Size variants. Controls the height of the component."},a11yClearButtonText:{type:"string",control:"text",description:"Localized, text for the clear button. If not provided, then no clear button is rendered"},a11yControlsId:{type:{name:"string",required:!0},control:"text",description:"Required. This is the id of the element that this input controls, such as the list of filtered items."},placeholder:{type:{name:"string",required:!0},control:"text",table:{defaultValue:{summary:"Filter"}},description:"Required. Text to show when input is empty. This is not a label"},"<evo-input> attributes":{description:"All attributes and event handlers from [the `<evo-input>` tag](?path=/docs/form-input-evo-input--docs) will be passed through"}}},a=m($t,Ct,{a11yClearButton:"Clear filter input","aria-label":"Filter input"}),o=m(gt,It,{a11yClearButton:"Clear filter input","aria-label":"Filter input",a11yControlsId:"filter-input-controls"});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yClearButton: "Clear filter input",
  "aria-label": "Filter input"
})`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlsTemplate, ControlsTemplateCode, {
  a11yClearButton: "Clear filter input",
  "aria-label": "Filter input",
  a11yControlsId: "filter-input-controls"
})`,...o.parameters?.docs?.source}}};const Nt=["Default","Controls"];export{o as Controls,a as Default,Nt as __namedExportsOrder,Mt as default};
