import{b as d}from"./utils-DyU2_5R1.js";import{_ as o,a as b,b as a,k as t,i as u,e as p,u as m}from"./dom-ByZf3MQk.js";import{$ as g,a as c,b as h,c as v,d as f,e as y,f as C,g as T,h as _,i as D,j as k,k as x,l as w,m as B,n as E,o as z,p as A,q as H,D as en}from"./index-fuwatFOt.js";import{a as I,$ as L,b as M,c as O}from"./index-Bz-e3gKr.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DO3pdl0Q.js";import"./index-_ZERrm0Z.js";/* empty css                    */import"./evo-icon-chevron-left-16-D-WocNj6.js";import"./index-SLqM2JFj.js";/* empty css             */import"./evo-icon-close-16-T-sOsZXf.js";import"./index-VCYgT6qA.js";import"./evo-icon-spinner-24-fKp9ZYWc.js";import"./evo-icon-chevron-down-16-B7IB9ME0.js";const tn=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

A native HTML \`<dialog>\` component that opens as a modal with backdrop scrim, close animation, and cancel support.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-evo-dialog)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-evo-dialog)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-dialog/examples)
`,an=((n,e)=>`<!>${n}${e}`)(O,A),on=((n,e)=>`b/${n}&/${e}&`)(M,z),ln=o("$qmj1AP","Dialog Title","b"),rn=u("Tgy3Y8L","<p>This is the default dialog content.</p>","b"),sn=o("nfKHvIM","Open Dialog","b"),S=m(7,n=>H(n.b,n.h)),F=p(6,n=>S(n,n.e,n.f)),dn=a(4,F),bn=a(5,F);function un(n){I(n.a),L(n.a,{onClick:gn(n),content:sn(n)}),k(n.b),x(n.b,t({content:ln(n)})),w(n.b,t({a11yText:"Close Dialog"})),B(n.b,rn(n)),E(n.b,mn(n))}const pn=a(3,n=>{g(n.b,n.d["aria-labelledby"]),c(n.b,n.d.banner),h(n.b,n.d.class),v(n.b,n.d.closedby),f(n.b,n.d.footer),y(n.b,n.d.onAnimationEnd),C(n.b,n.d.onCancel),T(n.b,n.d.previous),_(n.b,n.d.size),D(n.b,(({"aria-labelledby":e,banner:$,class:U,close:j,closedby:q,content:K,footer:P,header:N,onAnimationEnd:V,onCancel:G,open:J,openChange:Q,previous:Y,size:Z,...i})=>i)(n.d)),dn(n,n.d.open),bn(n,n.d.openChange)});function mn(n){return e=>{S(n,e)}}function gn(n){return function(){S(n,!0)}}const cn=b("l2PEQiU",an,on,un,pn),hn=`import { type Input as DialogInput } from "<evo-dialog>";
export interface Input extends DialogInput {}

<let/open:=input.open>

<evo-button onClick() { open = true; }>
    Open Dialog
</evo-button>

<evo-dialog ...input open:=open>
    <@header>Dialog Title</@header>
    <@close a11yText="Close Dialog"/>
    <p>This is the default dialog content.</p>
</evo-dialog>
`,vn=((n,e)=>`<!>${n}${e}`)(O,A),fn=((n,e)=>`b/${n}&/${e}&`)(M,z),yn=o("BOg14$w","Dialog Title","b"),Cn=u("WVd$xG7","<p>This dialog uses a banner image via the src attribute.</p>","b"),Tn=o("Ot7UKwl","Open Dialog With Banner","b"),W=m(7,n=>H(n.b,n.h)),X=p(6,n=>W(n,n.e,n.f)),_n=a(4,X),Dn=a(5,X);function kn(n){I(n.a),L(n.a,{onClick:Bn(n),content:Tn(n)}),k(n.b),c(n.b,t({src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg",position:"top"})),x(n.b,t({content:yn(n)})),w(n.b,t({a11yText:"Close Dialog"})),B(n.b,Cn(n)),E(n.b,wn(n))}const xn=a(3,n=>{g(n.b,n.d["aria-labelledby"]),h(n.b,n.d.class),v(n.b,n.d.closedby),f(n.b,n.d.footer),y(n.b,n.d.onAnimationEnd),C(n.b,n.d.onCancel),T(n.b,n.d.previous),_(n.b,n.d.size),D(n.b,(({"aria-labelledby":e,banner:$,class:U,close:j,closedby:q,content:K,footer:P,header:N,onAnimationEnd:V,onCancel:G,open:J,openChange:Q,previous:Y,size:Z,...i})=>i)(n.d)),_n(n,n.d.open),Dn(n,n.d.openChange)});function wn(n){return e=>{W(n,e)}}function Bn(n){return function(){W(n,!0)}}const En=b("rsNNHsJ",vn,fn,kn,xn),zn=`import { type Input as DialogInput } from "<evo-dialog>";
export interface Input extends DialogInput {}

<let/open:=input.open>

<evo-button onClick() { open = true; }>
    Open Dialog With Banner
</evo-button>

<evo-dialog ...input open:=open>
    <@banner
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg"
        position="top"
    />
    <@header>Dialog Title</@header>
    <@close a11yText="Close Dialog"/>
    <p>This dialog uses a banner image via the src attribute.</p>
</evo-dialog>
`,An=((n,e)=>`<!>${n}${e}`)(O,A),Hn=((n,e)=>`b/${n}&/${e}&`)(M,z),In=o("brTPAnq","Dialog Title","b"),Ln=o("vzUpa9z","Custom Banner","b"),Mn=u("eRcONc9","<p>This dialog uses a custom body inside the banner slot instead of a background image.</p>","b"),On=o("kswWKRB","Open Dialog With Custom Banner","b"),R=m(7,n=>H(n.b,n.h)),nn=p(6,n=>R(n,n.e,n.f)),Sn=a(4,nn),Wn=a(5,nn);function Rn(n){I(n.a),L(n.a,{onClick:jn(n),content:On(n)}),k(n.b),c(n.b,t({class:"banner-demo",content:Ln(n)})),x(n.b,t({content:In(n)})),w(n.b,t({a11yText:"Close Dialog"})),T(n.b,t({a11yText:"Back"})),B(n.b,Mn(n)),E(n.b,Un(n))}const $n=a(3,n=>{g(n.b,n.d["aria-labelledby"]),h(n.b,n.d.class),v(n.b,n.d.closedby),f(n.b,n.d.footer),y(n.b,n.d.onAnimationEnd),C(n.b,n.d.onCancel),_(n.b,n.d.size),D(n.b,(({"aria-labelledby":e,banner:$,class:U,close:j,closedby:q,content:K,footer:P,header:N,onAnimationEnd:V,onCancel:G,open:J,openChange:Q,previous:Y,size:Z,...i})=>i)(n.d)),Sn(n,n.d.open),Wn(n,n.d.openChange)});function Un(n){return e=>{R(n,e)}}function jn(n){return function(){R(n,!0)}}const qn=b("iPGVKvZ",An,Hn,Rn,$n),Kn=`import { type Input as DialogInput } from "<evo-dialog>";
export interface Input extends DialogInput {}

<style>
    .banner-demo {
        background: linear-gradient(90deg, #2f7ede, #17a7ce);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 24px;
        font-weight: bold;
    }
</style>

<let/open:=input.open>

<evo-button onClick() { open = true; }>
    Open Dialog With Custom Banner
</evo-button>

<evo-dialog ...input open:=open>
    <@banner class="banner-demo">
        Custom Banner
    </@banner>
    <@header>Dialog Title</@header>
    <@close a11yText="Close Dialog"/>
    <@previous a11yText="Back"/>
    <p>This dialog uses a custom body inside the banner slot instead of a background image.</p>
</evo-dialog>
`,le={title:"navigation & disclosure/evo-dialog",component:en,parameters:{docs:{description:{component:tn}}},argTypes:{open:{controllable:!0},size:{options:["regular (default)","wide","narrow","large"],control:"inline-radio"},closedby:{type:"string",options:["any","closerequest","none"],control:"inline-radio",description:'The [`closedby=` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#closedby) from the native `<dialog>` component. Defaults to `"any"` if not specified',table:{defaultValue:{summary:"any"}}},header:{"@":{"<h2> attributes":{description:"All attributes and event handlers from the heading element will be passed through"}}},footer:{"@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},close:{"@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},previous:{"@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},banner:{"@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},l=d(cn,hn),r=d(En,zn),s=d(qn,Kn);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"buildExtensionTemplate(BannerTemplate, BannerTemplateCode)",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"buildExtensionTemplate(CustomBannerTemplate, CustomBannerTemplateCode)",...s.parameters?.docs?.source}}};const re=["Default","Banner","CustomBanner"];export{r as Banner,s as CustomBanner,l as Default,re as __namedExportsOrder,le as default};
