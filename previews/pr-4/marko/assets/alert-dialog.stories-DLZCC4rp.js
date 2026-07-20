import{b as V}from"./utils-DyU2_5R1.js";import{a as m,n as g,b as e,c as Y,p as h,d as r,h as Z,e as o,f as j,g as p,r as b,u as f,_ as d,k as Q,i as P}from"./dom-ClTA52-z.js";import{a as v,b as k,c as y,$ as C}from"./index-D1yL0Ivy.js";/* empty css               */import"./iframe-BsUSqis5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyNGgPTt.js";import"./evo-icon-spinner-24-gtDKfJwY.js";import"./index-DbAUUAX9.js";/* empty css             */import"./evo-icon-chevron-down-16-J9yTWGVq.js";const X=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,A=(n=>`<dialog role=alertdialog aria-modal=true closedby=none><div class=dialog__header><!></div><div class=dialog__main><!></div><div class=dialog__footer>${n}</div></dialog>`)(y),D=(n=>` E%l D%lD/${n}&m`)(k),w=o(19,n=>j(n.a,["dialog","dialog--narrow",!n.s&&"dialog--close",n.k])),nn=r("FNn2Qa5",n=>b(n.a,"animationend",function(t,a){t.target===a&&!n.s&&a.close(),n.p&&n.p(t,a)})),E=o(20,nn),tn=r("k_mnln1",n=>{n.s&&!n.a.open&&n.a.showModal()}),O=f(18,n=>{w(n),E(n),tn(n)}),T=o(9,n=>O(n,n.h,n.i)),x=e(7,T),I=e(8,T),en=p(1),s=o(30,n=>en(n,n.z,()=>({...n.x,id:n.v,class:["dialog__title",n.y]})),3),an=e(21,n=>{h(n.a,"aria-labelledby",n.v),s(n)}),on=(n,t)=>an(n,t||g(n)),R=e(10,w),ln=r("$8MgWS9",n=>b(n.a,"cancel",function(t,a){t.preventDefault(),n.q&&n.q(t,a)})),S=e(16,ln),q=e(15,E),rn=r("kcnAdL_",n=>Z(n,"a")),M=e(17,n=>{Y(n,"a",{...n.r,open:null},{role:1,"aria-modal":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1}),rn(n)}),sn=e(25,s),dn=(n,t)=>sn(n,t!==void 0?t:"h2"),cn=e(23,s),_n=e(24,s),c=o(29,n=>C(n.e,{...n.a2,priority:"primary",autofocus:!0,"aria-describedby":n.a0,onClick:pn(n)}),2),un=e(26,n=>{h(n.c,"id",n.a0),c(n)});function $(n){v(n.e),un(n,g(n))}const mn=p(3),H=(n,t)=>mn(n,t),L=e(27,c),z=e(28,c),gn=(n,t)=>{(({class:a,confirm:i,content:J,header:N,onAnimationEnd:U,onCancel:F,open:G,openChange:u,...K})=>M(n,K))(t),x(n,t.open),I(n,t.openChange),R(n,t.class),W(n,t.header),hn(n,t.confirm),H(n,t.content),q(n,t.onAnimationEnd),S(n,t.onCancel)},W=(n,t)=>{(({as:a,...i})=>cn(n,i))(t),on(n,t.id),dn(n,t.as),_n(n,t.class)},hn=(n,t)=>{(({onClick:a,...i})=>z(n,i))(t),L(n,t.onClick)};function pn(n){return function(t,a){O(n,!1),n.a1&&n.a1(t,a)}}const bn=m("$xH4nEu",A,D,$,gn),fn=((n,t)=>`<!>${n}${t}`)(y,A),vn=((n,t)=>`b/${n}&/${t}&`)(k,D),kn=d("h95V2ZF","OK","b"),yn=d("uv48Jtk","Alert!","b"),Cn=P("G6BZqie","<p>You must acknowledge this alert to continue.</p>","b"),An=d("NGNaJs2","Open Alert Dialog","b"),_=f(7,n=>x(n.b,n.h)),B=o(6,n=>_(n,n.e,n.f)),Dn=e(4,B),wn=e(5,B);function En(n){v(n.a),C(n.a,{onClick:xn(n),content:An(n)}),$(n.b),W(n.b,Q({content:yn(n)})),L(n.b),z(n.b,{content:kn(n)}),H(n.b,Cn(n)),I(n.b,Tn(n))}const On=e(3,n=>{R(n.b,n.d.class),q(n.b,n.d.onAnimationEnd),S(n.b,n.d.onCancel),M(n.b,(({class:t,confirm:a,content:i,header:J,onAnimationEnd:N,onCancel:U,open:F,openChange:G,...u})=>u)(n.d)),Dn(n,n.d.open),wn(n,n.d.openChange)});function Tn(n){return t=>{_(n,t)}}function xn(n){return function(){_(n,!0)}}const In=m("qDy_JOo",fn,vn,En,On),Rn=`import { type Input as AlertDialogInput } from "<evo-alert-dialog>";
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
`,Un={title:"navigation & disclosure/evo-alert-dialog",component:bn,parameters:{docs:{description:{component:X}}},argTypes:{open:{type:"boolean",controllable:!0,description:"Whether the alert dialog is open",table:{defaultValue:{summary:"false"}}},header:{description:"The header content rendered inside the dialog title (required)","@":{as:{type:"string",description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:"All attributes and event handlers from the heading element will be passed through"}}},confirm:{description:"The confirm/acknowledge button (required). Render body is the button label text","@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},l=V(In,Rn);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...l.parameters?.docs?.source}}};const Fn=["Default"];export{l as Default,Fn as __namedExportsOrder,Un as default};
