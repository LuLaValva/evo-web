import{b as d}from"./utils-DyU2_5R1.js";import{a as i,_ as r,o as s,t as I,b as e,e as l,k as m,s as $,f as B,u as w,v as F}from"./dom-ByZf3MQk.js";import{$ as k,a as D,b as O,c as z,d as E,e as S,f as R,g as j}from"./evo-icon-clear-16-4J8dQTSr.js";import{b as A,c as H,a as K,$ as q}from"./index-DO3pdl0Q.js";import{$ as G,a as L,b as Q,c as Y}from"./index-Bbu-WMi0.js";/* empty css             *//* empty css                */import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SLqM2JFj.js";import"./index-Bz-e3gKr.js";import"./index-VCYgT6qA.js";import"./evo-icon-spinner-24-fKp9ZYWc.js";import"./evo-icon-chevron-down-16-B7IB9ME0.js";import"./index-_ZERrm0Z.js";/* empty css                    */import"./index-Bbe4S3aW.js";const Z=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,u=(t=>`<span>${t}</span>`)(Q),p=(t=>` D/${t}&l`)(L),J=t=>{E(t.a),S(t.a,{})},M=r("LQo9aS3",D,(t=>`/${t}&`)(k),J),N=t=>{R(t.a),j(t.a,{})},P=r("jzGbHSc",z,(t=>`/${t}&`)(O),N),C=l(1,t=>q(t.a,{a11yText:t._._.h,class:"filter-input__clear-btn",size:"small",transparent:!0,onClick:pt(t),content:M(t)})),v=s(4,C,t=>t._._),U=t=>{v(t),b(t),K(t.a)},b=s(7,C,t=>t._._),V=I(0,(t=>`<!>${t}<!>`)(H),(t=>`b/${t}&b`)(A),U),h=s(7,t=>V(t,t._.h?0:1)),W=h,X=r("gOwTqTf","<!><!><!>","b%c",W),c=l(13,t=>Y(t.b,{...t.l,fluid:!0,type:"search","aria-controls":t.i,placeholder:t.m,postfixIcon:m({content:X(t)}),prefixIcon:m({content:P(t)})}),2),tt=e(12,c),nt=(t,n)=>tt(t,n!==void 0?n:"Filter"),y=l(10,t=>B(t.a,["filter-input",t.j&&`filter-input--${t.j}`,t.f])),et=e(5,y),at=e(9,y);function _(t){G(t.b)}const ot=e(8,c),lt=e(11,c),f=(t,n)=>{(({a11yClearButtonText:Bt,a11yControlsId:wt,class:Ft,placeholder:kt,size:Dt,...g})=>lt(t,g))(n),rt(t,n.valueChange),et(t,n.class),nt(t,n.placeholder),ut(t,n.a11yClearButtonText),ot(t,n.a11yControlsId),at(t,n.size)},it=$(v),rt=e(4,it),st=$(h,b),ut=e(7,st);function pt(t){return function(){(t._._.e||null)?.("")}}const ct=i("KTOKiHF",u,p,_,f),_t=u,ft=(t=>`/${t}&`)(p);function mt(t){_(t.a)}const dt=(t,n)=>f(t.a,{...n,"aria-label":"Filter input",placeholder:"Filter",a11yControlsId:"filter-input-default",a11yClearButtonText:"Clear filter input"}),$t=i("rtEOYbl",_t,ft,mt,dt),Ct=`<evo-filter-input
    ...input
    aria-label="Filter input"
    placeholder="Filter"
    a11yControlsId="filter-input-default"
    a11yClearButtonText="Clear filter input"
/>
`,vt=(t=>`<div>${t}<div id=filter-input-controls>Current value: "<!>"</div></div>`)(u),bt=(t=>`D/${t}&Db%m`)(p),x=l(6,t=>f(t.a,{...t.d,value:t.f,valueChange:Tt(t),placeholder:"Filter",a11yControlsId:"filter-input-controls","aria-label":"Filter input",a11yClearButtonText:"Clear filter input"})),T=w(5,t=>{F(t.b,t.f),x(t)}),ht=(t,n)=>T(t,n);function yt(t){_(t.a)}const xt=e(3,t=>{ht(t,t.d.value),x(t)});function Tt(t){return n=>{T(t,n)}}const gt=i("ZOzx3D4",vt,bt,yt,xt),It=`export interface Input {
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
`,Nt={title:"form input/evo-filter-input",component:ct,parameters:{docs:{description:{component:Z}}},argTypes:{size:{options:["regular (default)","small","large"],control:"inline-radio"},placeholder:{control:"text"},"<evo-input> attributes":{description:"All attributes and event handlers from [the `<evo-input>` tag](?path=/docs/form-input-evo-input--docs) will be passed through"}}},a=d($t,Ct,{a11yClearButton:"Clear filter input","aria-label":"Filter input"}),o=d(gt,It,{a11yClearButton:"Clear filter input","aria-label":"Filter input",a11yControlsId:"filter-input-controls"});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yClearButton: "Clear filter input",
  "aria-label": "Filter input"
})`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlsTemplate, ControlsTemplateCode, {
  a11yClearButton: "Clear filter input",
  "aria-label": "Filter input",
  a11yControlsId: "filter-input-controls"
})`,...o.parameters?.docs?.source}}};const Pt=["Default","Controls"];export{o as Controls,a as Default,Pt as __namedExportsOrder,Nt as default};
