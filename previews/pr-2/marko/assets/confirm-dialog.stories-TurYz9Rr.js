import{b as N}from"./utils-DyU2_5R1.js";import{a as p,n as C,b as e,c as Q,p as v,d as l,h as X,e as i,f as nn,g as y,r as k,u as T,_ as s,k as tn,i as en}from"./dom-C0MY0u5h.js";import{a as c,b as u,c as m,$ as _}from"./index-Cjr8hqDj.js";/* empty css               */import"./iframe-BkqRzvDk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5wm6czj.js";import"./evo-icon-spinner-24-ChmSQMgq.js";import"./index-D4aRlw-G.js";/* empty css             */import"./evo-icon-chevron-down-16-DG4w4cE-.js";const on=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-confirm-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS vBETA
    </span>
</h1>

A confirm dialog that forces the user to make a choice to either confirm or reject. The dialog can be dismissed by clicking one of the two buttons, and pressing Escape triggers the reject action.

Uses a native \`<dialog>\` element with \`role="alertdialog"\` and \`closedby="closerequest"\`.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/evo-marko/?path=/story/navigation-disclosure-evo-confirm-dialog)
- [Storybook Docs](https://ebay.github.io/evo-web/evo-marko/?path=/docs/navigation-disclosure-evo-confirm-dialog)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-confirm-dialog/examples)
`,D=((n,t)=>`<dialog role=alertdialog aria-modal=true closedby=closerequest><div class=dialog__header><!></div><div class=dialog__main><!></div><div class=dialog__footer>${n}${t}</div></dialog>`)(m,m),w=((n,t)=>` E%l D%lD/${n}&/${t}&m`)(u,u),E=i(21,n=>nn(n.a,["dialog","dialog--narrow",!n.u&&"dialog--close",n.l])),an=l("kqkW0uG",n=>k(n.a,"animationend",function(t,o){t.target===o&&!n.u&&o.close(),n.s&&n.s(t,o)})),A=i(22,an),rn=l("jPV9Biw",n=>{n.u&&!n.a.open&&n.a.showModal()}),h=T(20,n=>{E(n),A(n),rn(n)}),I=i(10,n=>h(n,n.i,n.j)),j=e(8,I),O=e(9,I),ln=y(1),d=i(35,n=>ln(n,n.a1,()=>({...n.z,id:n.x,class:["dialog__title",n.a0]})),3),sn=e(23,n=>{v(n.a,"aria-labelledby",n.x),d(n)}),dn=(n,t)=>sn(n,t||C(n)),R=e(11,E),cn=l("lstH6CI",n=>k(n.a,"cancel",function(t,o){t.preventDefault(),h(n,!1),n.r&&n.r(t,o)})),x=e(17,cn),M=e(18,A),un=l("HZmdgZn",n=>X(n,"a")),H=e(19,n=>{Q(n,"a",{...n.t,open:null},{role:1,"aria-modal":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1}),un(n)}),mn=e(27,d),_n=(n,t)=>mn(n,t!==void 0?t:"h2"),hn=e(25,d),bn=e(26,d),b=i(34,n=>_(n.f,{...n.a7,priority:"primary",autofocus:!0,"aria-describedby":n.a2,onClick:yn(n)}),2),gn=e(28,n=>{v(n.c,"id",n.a2),b(n)});function L(n){c(n.e),c(n.f),gn(n,C(n))}const fn=y(3),q=(n,t)=>fn(n,t),S=i(31,n=>_(n.e,{...n.a4,onClick:kn(n)})),z=e(29,S),U=e(30,S),W=e(32,b),B=e(33,b),pn=(n,t)=>{(({class:o,confirm:a,content:P,header:V,onAnimationEnd:Z,onCancel:$,open:G,openChange:J,reject:f,...F})=>H(n,F))(t),j(n,t.open),O(n,t.openChange),R(n,t.class),K(n,t.header),Cn(n,t.confirm),vn(n,t.reject),q(n,t.content),x(n,t.onCancel),M(n,t.onAnimationEnd)},K=(n,t)=>{(({as:o,...a})=>hn(n,a))(t),dn(n,t.id),_n(n,t.as),bn(n,t.class)},Cn=(n,t)=>{(({onClick:o,...a})=>B(n,a))(t),W(n,t.onClick)},vn=(n,t)=>{(({onClick:o,...a})=>U(n,a))(t),z(n,t.onClick)};function yn(n){return function(t,o){h(n,!1),n.a6&&n.a6(t,o)}}function kn(n){return function(t,o){n.a.requestClose(),n.a3&&n.a3(t,o)}}const Tn=p("THr5ILM",D,w,L,pn),Dn=((n,t)=>`<!>${n}${t}`)(m,D),wn=((n,t)=>`b/${n}&/${t}&`)(u,w),En=s("AuKD7Jr","Delete","b"),An=s("MTKk4Oy","Cancel","b"),In=s("Y5M3Cz3","Delete Address?","b"),jn=en("Avny9c$","<p>You will permanently lose this address.</p>","b"),On=s("KePofIT","Open Confirm Dialog","b"),g=T(7,n=>j(n.b,n.h)),Y=i(6,n=>g(n,n.e,n.f)),Rn=e(4,Y),xn=e(5,Y);function Mn(n){c(n.a),_(n.a,{onClick:qn(n),content:On(n)}),L(n.b),K(n.b,tn({content:In(n)})),z(n.b),U(n.b,{content:An(n)}),W(n.b),B(n.b,{content:En(n)}),q(n.b,jn(n)),O(n.b,Ln(n))}const Hn=e(3,n=>{R(n.b,n.d.class),M(n.b,n.d.onAnimationEnd),x(n.b,n.d.onCancel),H(n.b,(({class:t,confirm:o,content:a,header:P,onAnimationEnd:V,onCancel:Z,open:$,openChange:G,reject:J,...f})=>f)(n.d)),Rn(n,n.d.open),xn(n,n.d.openChange)});function Ln(n){return t=>{g(n,t)}}function qn(n){return function(){g(n,!0)}}const Sn=p("gTsmaUL",Dn,wn,Mn,Hn),zn=`import { type Input as ConfirmDialogInput } from "<evo-confirm-dialog>";
export interface Input extends ConfirmDialogInput {}

<let/open:=input.open>

<evo-button onClick() { open = true; }>
    Open Confirm Dialog
</evo-button>

<evo-confirm-dialog ...input open:=open>
    <@header>Delete Address?</@header>
    <@reject>Cancel</@reject>
    <@confirm>Delete</@confirm>
    <p>You will permanently lose this address.</p>
</evo-confirm-dialog>
`,Fn={title:"navigation & disclosure/evo-confirm-dialog",component:Tn,parameters:{docs:{description:{component:on}}},argTypes:{open:{type:"boolean",controllable:!0,description:"Whether the confirm dialog is open",table:{defaultValue:{summary:"false"}}},header:{description:"The header content rendered inside the dialog title (required)","@":{as:{type:"string",description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:"All attributes and event handlers from the heading element will be passed through"}}},confirm:{description:"The confirm button (required). Render body is the button label text","@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},reject:{description:"The reject/cancel button (required). Render body is the button label text. Also triggered by Escape key","@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"},onCancel:{action:"onCancel",description:"Triggered when the dialog's cancel event fires, via `esc` or the cancel button",table:{category:"Events"}}}},r=N(Sn,zn);r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...r.parameters?.docs?.source}}};const Nn=["Default"];export{r as Default,Nn as __namedExportsOrder,Fn as default};
