import{b as d}from"./utils-DyU2_5R1.js";import{_ as n,a as y,b as a,k as i,e as H}from"./dom-CIHBwv1V.js";import{e as h,g as T,h as f,i as _,j as v,d as S,b as C,k,l as $,m as w,c as x,f as W,a as I,$ as P,T as z}from"./index-C5KeQsg9.js";import{$ as j,a as N,b as O,c as U}from"./evo-icon-archive-24-6hu1DMTj.js";import"./iframe-CfBr7C7U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DUawFjLf.js";/* empty css             */const B=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,q=P,V=(t=>`/${t}&`)(I),G=n("mg996UY","Title","b");function Y(t){x(t.a),W(t.a,G(t))}const J=a(2,t=>{h(t.a,t.c.class),T(t.a,t.c.icon),f(t.a,t.c.image),_(t.a,t.c.layoutType),v(t.a,t.c.onClick),S(t.a,t.c.pressed),C(t.a,t.c.pressedChange),k(t.a,t.c.subtitle),$(t.a,t.c.title),w(t.a,(({class:e,content:s,icon:r,image:u,layoutType:o,onClick:M,pressed:E,pressedChange:L,subtitle:R,title:A,...c})=>c)(t.c))}),Z=y("O7Ncomx",q,V,Y,J),F="<evo-toggle-button ...input>Title</evo-toggle-button>",K=P,Q=(t=>`/${t}&`)(I),X=t=>{O(t.a),U(t.a,{})},tt=n("Pyvl2Aa",N,(t=>`/${t}&`)(j),X),et=n("ejaMW5i","Subtitle","b"),nt=n("$N8T32r","Title","b");function at(t){x(t.a),k(t.a,i({content:et(t)})),T(t.a,i({content:tt(t)})),W(t.a,nt(t))}const ot=a(2,t=>{const e={layoutType:"list",...t.c};h(t.a,e.class),f(t.a,e.image),_(t.a,e.layoutType),v(t.a,e.onClick),S(t.a,e.pressed),C(t.a,e.pressedChange),$(t.a,e.title),w(t.a,(({class:s,content:r,icon:u,image:o,layoutType:M,onClick:E,pressed:L,pressedChange:R,subtitle:A,title:c,...l})=>l)(e))}),lt=y("mluBzYA",K,Q,at,ot),it=`<evo-toggle-button layoutType="list" ...input>
    <@subtitle>Subtitle</@subtitle>
    <@icon>
        <evo-icon-archive-24/>
    </@icon>
    Title
</evo-toggle-button>
`,st=P,rt=(t=>`/${t}&`)(I),ut=n("j0g81ql","Subtitle","b"),ct=n("Zcnd0gN","Title","b");function gt(t){x(t.a),k(t.a,i({content:ut(t)})),W(t.a,ct(t))}const D=H(6,t=>f(t.a,i({src:t.d,alt:t.e,fillPlacement:t.f})),2),pt=a(3,D),mt=a(4,D),bt=a(5,D),dt=a(7,t=>{const e={layoutType:"list",...t.h};h(t.a,e.class),T(t.a,e.icon),_(t.a,e.layoutType),v(t.a,e.onClick),S(t.a,e.pressed),C(t.a,e.pressedChange),$(t.a,e.title),w(t.a,(({class:s,content:r,icon:u,image:o,layoutType:M,onClick:E,pressed:L,pressedChange:R,subtitle:A,title:c,...l})=>l)(e))}),yt=(t,e)=>{(({alt:s,fillPlacement:r,src:u,...o})=>dt(t,o))(e),pt(t,e.src),mt(t,e.alt),bt(t,e.fillPlacement)},ht=y("NiVIxON",st,rt,gt,yt),Tt=`export interface Input {
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
`,ft=P,_t=(t=>`/${t}&`)(I),vt=n("gbvkHtp","<p>Subtitle 1</p><p>Subtitle 2</p>","c"),St=n("rz6lOgg","Title","b");function Ct(t){x(t.a),k(t.a,i({content:vt(t)})),W(t.a,St(t))}const kt=a(2,t=>{const e={layoutType:"list",...t.c};h(t.a,e.class),T(t.a,e.icon),f(t.a,e.image),_(t.a,e.layoutType),v(t.a,e.onClick),S(t.a,e.pressed),C(t.a,e.pressedChange),$(t.a,e.title),w(t.a,(({class:s,content:r,icon:u,image:o,layoutType:M,onClick:E,pressed:L,pressedChange:R,subtitle:A,title:c,...l})=>l)(e))}),$t=y("T2VNJ5_",ft,_t,Ct,kt),wt=`<evo-toggle-button layoutType="list" ...input>
    <@subtitle>
        <p>Subtitle 1</p>
        <p>Subtitle 2</p>
    </@subtitle>
    Title
</evo-toggle-button>
`,At={title:"buttons/evo-toggle-button",component:z,parameters:{docs:{description:{component:B}}},argTypes:{pressed:{controllable:!0,type:"boolean",control:"boolean",description:"Pressed state of the button"},layoutType:{type:"string",options:["minimal","list","gallery"],control:"inline-radio",description:"Enforced layout type of the button. Gallery layout may only be used when there is also an icon or an image.",table:{defaultValue:{summary:"minimal"}}},icon:{description:"An `<evo-icon-*>` to show as the button's icon","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},image:{description:"An optional image. May be used when `<@icon>` is _not_ present","@":{src:{type:{name:"string",required:!0},control:"text",description:"The image source URL"},alt:{type:{name:"string",required:!0},control:"text",description:"Alt text for the image"},fillPlacement:{type:"string",control:"text",description:"Position of the image. May be any valid value for [the CSS `background-position` attribute](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position)."}}},subtitle:{description:"An optional subtitle.","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},g=d(Z,F),p=d(lt,it),m=d(ht,Tt,{layoutType:"gallery",src:"https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",fillPlacement:"top"}),b=d($t,wt);g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithIconTemplate, WithIconCode)",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithImageTemplate, WithImageCode, {
  layoutType: "gallery",
  src: "https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",
  fillPlacement: "top"
})`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"buildExtensionTemplate(MultilineSubtitleTemplate, MultilineSubtitleCode)",...b.parameters?.docs?.source}}};const Dt=["Default","WithIcon","WithImage","MultilineSubtitle"];export{g as Default,b as MultilineSubtitle,p as WithIcon,m as WithImage,Dt as __namedExportsOrder,At as default};
