import{b as d}from"./utils-DyU2_5R1.js";import{_ as n,a as y,b as a,k as s,e as j}from"./dom-ByZf3MQk.js";import{e as h,g as T,h as f,i as _,j as v,d as C,b as S,k,l as $,m as I,c as W,f as w,a as x,$ as M,T as z}from"./index-BYfYTpr3.js";import{$ as N,a as O,b as A,c as B}from"./evo-icon-archive-24-5St4dM2a.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SLqM2JFj.js";/* empty css             */const U=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-toggle-button
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

Group of toggle buttons.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-evo-toggle-button)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-evo-toggle-button)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-toggle-button/examples)
`,V=M,Y=(t=>`/${t}&`)(x),q=n("mg996UY","Title","b");function G(t){W(t.a),w(t.a,q(t))}const J=a(2,t=>{h(t.a,t.c.class),T(t.a,t.c.icon),f(t.a,t.c.image),_(t.a,t.c.layoutType),v(t.a,t.c.onClick),C(t.a,t.c.pressed),S(t.a,t.c.pressedChange),k(t.a,t.c.subtitle),$(t.a,t.c.title),I(t.a,(({class:e,content:i,icon:u,image:r,layoutType:l,onClick:P,pressed:E,pressedChange:L,subtitle:D,title:H,...c})=>c)(t.c))}),Z=y("O7Ncomx",V,Y,G,J),F="<evo-toggle-button ...input>Title</evo-toggle-button>",K=M,Q=(t=>`/${t}&`)(x),X=t=>{A(t.a),B(t.a,{})},tt=n("Pyvl2Aa",O,(t=>`/${t}&`)(N),X),et=n("ejaMW5i","Subtitle","b"),nt=n("$N8T32r","Title","b");function at(t){W(t.a),k(t.a,s({content:et(t)})),T(t.a,s({content:tt(t)})),w(t.a,nt(t))}const lt=a(2,t=>{const e={layoutType:"list",...t.c};h(t.a,e.class),f(t.a,e.image),_(t.a,e.layoutType),v(t.a,e.onClick),C(t.a,e.pressed),S(t.a,e.pressedChange),$(t.a,e.title),I(t.a,(({class:i,content:u,icon:r,image:l,layoutType:P,onClick:E,pressed:L,pressedChange:D,subtitle:H,title:c,...o})=>o)(e))}),ot=y("mluBzYA",K,Q,at,lt),st=`<evo-toggle-button layoutType="list" ...input>
    <@subtitle>Subtitle</@subtitle>
    <@icon>
        <evo-icon-archive-24/>
    </@icon>
    Title
</evo-toggle-button>
`,it=M,ut=(t=>`/${t}&`)(x),rt=n("j0g81ql","Subtitle","b"),ct=n("Zcnd0gN","Title","b");function gt(t){W(t.a),k(t.a,s({content:rt(t)})),w(t.a,ct(t))}const R=j(6,t=>f(t.a,s({src:t.d,alt:t.e,fillPlacement:t.f})),2),mt=a(3,R),pt=a(4,R),bt=a(5,R),dt=a(7,t=>{const e={layoutType:"list",...t.h};h(t.a,e.class),T(t.a,e.icon),_(t.a,e.layoutType),v(t.a,e.onClick),C(t.a,e.pressed),S(t.a,e.pressedChange),$(t.a,e.title),I(t.a,(({class:i,content:u,icon:r,image:l,layoutType:P,onClick:E,pressed:L,pressedChange:D,subtitle:H,title:c,...o})=>o)(e))}),yt=(t,e)=>{(({alt:i,fillPlacement:u,src:r,...l})=>dt(t,l))(e),mt(t,e.src),pt(t,e.alt),bt(t,e.fillPlacement)},ht=y("NiVIxON",it,ut,gt,yt),Tt=`export interface Input {
    src: string;
    alt: string;
    fillPlacement: string;
}
<const/{ src, alt, fillPlacement, ...buttonInput } = input>
<evo-toggle-button layoutType="list" ...buttonInput>
    <@subtitle>Subtitle</@subtitle>
    <@image src=src alt=alt fillPlacement=fillPlacement/>
    Title
</evo-toggle-button>
`,ft=M,_t=(t=>`/${t}&`)(x),vt=n("gbvkHtp","<p>Subtitle 1</p><p>Subtitle 2</p>","c"),Ct=n("rz6lOgg","Title","b");function St(t){W(t.a),k(t.a,s({content:vt(t)})),w(t.a,Ct(t))}const kt=a(2,t=>{const e={layoutType:"list",...t.c};h(t.a,e.class),T(t.a,e.icon),f(t.a,e.image),_(t.a,e.layoutType),v(t.a,e.onClick),C(t.a,e.pressed),S(t.a,e.pressedChange),$(t.a,e.title),I(t.a,(({class:i,content:u,icon:r,image:l,layoutType:P,onClick:E,pressed:L,pressedChange:D,subtitle:H,title:c,...o})=>o)(e))}),$t=y("T2VNJ5_",ft,_t,St,kt),It=`<evo-toggle-button layoutType="list" ...input>
    <@subtitle>
        <p>Subtitle 1</p>
        <p>Subtitle 2</p>
    </@subtitle>
    Title
</evo-toggle-button>
`,Ht={title:"buttons/evo-toggle-button",component:z,parameters:{docs:{description:{component:U}}},argTypes:{pressed:{controllable:!0},layoutType:{options:["minimal","list","gallery"],control:"inline-radio"},icon:{"@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},subtitle:{"@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},g=d(Z,F),m=d(ot,st),p=d(ht,Tt,{layoutType:"gallery",src:"https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",fillPlacement:"top"}),b=d($t,It);g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithIconTemplate, WithIconCode)",...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithImageTemplate, WithImageCode, {
  layoutType: "gallery",
  src: "https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",
  fillPlacement: "top"
})`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"buildExtensionTemplate(MultilineSubtitleTemplate, MultilineSubtitleCode)",...b.parameters?.docs?.source}}};const Rt=["Default","WithIcon","WithImage","MultilineSubtitle"];export{g as Default,b as MultilineSubtitle,m as WithIcon,p as WithImage,Rt as __namedExportsOrder,Ht as default};
