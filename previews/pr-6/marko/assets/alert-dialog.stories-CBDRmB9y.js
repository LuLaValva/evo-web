import{b as Y}from"./utils-DyU2_5R1.js";import{a as u,n as g,b as a,c as Z,p,d as r,h as j,e as o,f as Q,g as b,r as h,u as f,_ as d,k as V,i as P}from"./dom-ByZf3MQk.js";import{a as v,b as k,c as C,$ as y}from"./index-Bz-e3gKr.js";import"./index-fuwatFOt.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-VCYgT6qA.js";import"./evo-icon-spinner-24-fKp9ZYWc.js";import"./index-SLqM2JFj.js";/* empty css             */import"./evo-icon-chevron-down-16-B7IB9ME0.js";import"./index-DO3pdl0Q.js";import"./index-_ZERrm0Z.js";/* empty css                    */import"./evo-icon-chevron-left-16-D-WocNj6.js";import"./evo-icon-close-16-T-sOsZXf.js";const X=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-alert-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS vBETA
    </span>
</h1>

An alert dialog that forces the user to acknowledge a message before continuing. The dialog can only be dismissed by clicking the confirm button -- Escape and backdrop clicks are blocked.

Uses a native \`<dialog>\` element with \`role="alertdialog"\` and \`closedby="none"\`.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/evo-marko/?path=/story/navigation-disclosure-evo-alert-dialog)
- [Storybook Docs](https://ebay.github.io/evo-web/evo-marko/?path=/docs/navigation-disclosure-evo-alert-dialog)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-alert-dialog/examples)
`,A=(n=>`<dialog role=alertdialog aria-modal=true closedby=none><div class=dialog__header><!></div><div class=dialog__main><!></div><div class=dialog__footer>${n}</div></dialog>`)(C),D=(n=>` E%l D%lD/${n}&m`)(k),E=o(19,n=>Q(n.a,["dialog","dialog--narrow",!n.s&&"dialog--close",n.k])),nn=r("FNn2Qa5",n=>h(n.a,"animationend",function(t,e){t.target===e&&!n.s&&e.close(),n.p&&n.p(t,e)})),w=o(20,nn),tn=r("k_mnln1",n=>{n.s&&!n.a.open&&n.a.showModal()}),O=f(18,n=>{E(n),w(n),tn(n)}),I=o(9,n=>O(n,n.h,n.i)),T=a(7,I),x=a(8,I),an=b(1),s=o(30,n=>an(n,n.z,()=>({...n.x,id:n.v,class:["dialog__title",n.y]})),3),en=a(21,n=>{p(n.a,"aria-labelledby",n.v),s(n)}),on=(n,t)=>en(n,t||g(n)),R=a(10,E),ln=r("$8MgWS9",n=>h(n.a,"cancel",function(t,e){t.preventDefault(),n.q&&n.q(t,e)})),S=a(16,ln),M=a(15,w),rn=r("kcnAdL_",n=>j(n,"a")),$=a(17,n=>{Z(n,"a",{...n.r,open:null},{role:1,"aria-modal":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1}),rn(n)}),sn=a(25,s),dn=(n,t)=>sn(n,t!==void 0?t:"h2"),cn=a(23,s),_n=a(24,s),c=o(29,n=>y(n.e,{...n.a2,priority:"primary",autofocus:!0,"aria-describedby":n.a0,onClick:bn(n)}),2),mn=a(26,n=>{p(n.c,"id",n.a0),c(n)});function H(n){v(n.e),mn(n,g(n))}const un=b(3),L=(n,t)=>un(n,t),q=a(27,c),z=a(28,c),gn=(n,t)=>{(({class:e,confirm:i,content:N,header:U,onAnimationEnd:W,onCancel:F,open:G,openChange:m,...K})=>$(n,K))(t),T(n,t.open),x(n,t.openChange),R(n,t.class),B(n,t.header),pn(n,t.confirm),L(n,t.content),M(n,t.onAnimationEnd),S(n,t.onCancel)},B=(n,t)=>{(({as:e,...i})=>cn(n,i))(t),on(n,t.id),dn(n,t.as),_n(n,t.class)},pn=(n,t)=>{(({onClick:e,...i})=>z(n,i))(t),q(n,t.onClick)};function bn(n){return function(t,e){O(n,!1),n.a1&&n.a1(t,e)}}const hn=u("$xH4nEu",A,D,H,gn),fn=((n,t)=>`<!>${n}${t}`)(C,A),vn=((n,t)=>`b/${n}&/${t}&`)(k,D),kn=d("h95V2ZF","OK","b"),Cn=d("uv48Jtk","Alert!","b"),yn=P("G6BZqie","<p>You must acknowledge this alert to continue.</p>","b"),An=d("NGNaJs2","Open Alert Dialog","b"),_=f(7,n=>T(n.b,n.h)),J=o(6,n=>_(n,n.e,n.f)),Dn=a(4,J),En=a(5,J);function wn(n){v(n.a),y(n.a,{onClick:Tn(n),content:An(n)}),H(n.b),B(n.b,V({content:Cn(n)})),q(n.b),z(n.b,{content:kn(n)}),L(n.b,yn(n)),x(n.b,In(n))}const On=a(3,n=>{R(n.b,n.d.class),M(n.b,n.d.onAnimationEnd),S(n.b,n.d.onCancel),$(n.b,(({class:t,confirm:e,content:i,header:N,onAnimationEnd:U,onCancel:W,open:F,openChange:G,...m})=>m)(n.d)),Dn(n,n.d.open),En(n,n.d.openChange)});function In(n){return t=>{_(n,t)}}function Tn(n){return function(){_(n,!0)}}const xn=u("qDy_JOo",fn,vn,wn,On),Rn=`import { type Input as AlertDialogInput } from "<evo-alert-dialog>";
export interface Input extends AlertDialogInput {}

<let/open:=input.open>

<evo-button onClick() { open = true; }>
    Open Alert Dialog
</evo-button>

<evo-alert-dialog ...input open:=open>
    <@header>Alert!</@header>
    <@confirm>OK</@confirm>
    <p>You must acknowledge this alert to continue.</p>
</evo-alert-dialog>
`,Zn={title:"navigation & disclosure/evo-alert-dialog",component:hn,parameters:{docs:{description:{component:X}}},argTypes:{open:{controllable:!0},header:{"@":{"<h2> attributes":{description:"All attributes and event handlers from the heading element will be passed through"}}},confirm:{"@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},l=Y(xn,Rn);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...l.parameters?.docs?.source}}};const jn=["Default"];export{l as Default,jn as __namedExportsOrder,Zn as default};
