import{b as N}from"./utils-DyU2_5R1.js";import{a as p,n as C,b as e,c as Q,p as v,d as l,h as X,e as i,f as nn,g as k,r as y,u as D,_ as s,k as tn,i as en}from"./dom-ByZf3MQk.js";import{a as d,b as m,c as _,$ as u}from"./index-Bz-e3gKr.js";import"./index-fuwatFOt.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-VCYgT6qA.js";import"./evo-icon-spinner-24-fKp9ZYWc.js";import"./index-SLqM2JFj.js";/* empty css             */import"./evo-icon-chevron-down-16-B7IB9ME0.js";import"./index-DO3pdl0Q.js";import"./index-_ZERrm0Z.js";/* empty css                    */import"./evo-icon-chevron-left-16-D-WocNj6.js";import"./evo-icon-close-16-T-sOsZXf.js";const an=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,T=((n,t)=>`<dialog role=alertdialog aria-modal=true closedby=closerequest><div class=dialog__header><!></div><div class=dialog__main><!></div><div class=dialog__footer>${n}${t}</div></dialog>`)(_,_),w=((n,t)=>` E%l D%lD/${n}&/${t}&m`)(m,m),E=i(21,n=>nn(n.a,["dialog","dialog--narrow",!n.u&&"dialog--close",n.l])),on=l("kqkW0uG",n=>y(n.a,"animationend",function(t,a){t.target===a&&!n.u&&a.close(),n.s&&n.s(t,a)})),I=i(22,on),rn=l("jPV9Biw",n=>{n.u&&!n.a.open&&n.a.showModal()}),g=D(20,n=>{E(n),I(n),rn(n)}),A=i(10,n=>g(n,n.i,n.j)),O=e(8,A),j=e(9,A),ln=k(1),c=i(35,n=>ln(n,n.a1,()=>({...n.z,id:n.x,class:["dialog__title",n.a0]})),3),sn=e(23,n=>{v(n.a,"aria-labelledby",n.x),c(n)}),cn=(n,t)=>sn(n,t||C(n)),R=e(11,E),dn=l("lstH6CI",n=>y(n.a,"cancel",function(t,a){t.preventDefault(),g(n,!1),n.r&&n.r(t,a)})),x=e(17,dn),M=e(18,I),mn=l("HZmdgZn",n=>X(n,"a")),H=e(19,n=>{Q(n,"a",{...n.t,open:null},{role:1,"aria-modal":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1}),mn(n)}),_n=e(27,c),un=(n,t)=>_n(n,t!==void 0?t:"h2"),gn=e(25,c),fn=e(26,c),f=i(34,n=>u(n.f,{...n.a7,priority:"primary",autofocus:!0,"aria-describedby":n.a2,onClick:kn(n)}),2),bn=e(28,n=>{v(n.c,"id",n.a2),f(n)});function L(n){d(n.e),d(n.f),bn(n,C(n))}const hn=k(3),S=(n,t)=>hn(n,t),z=i(31,n=>u(n.e,{...n.a4,onClick:yn(n)})),U=e(29,z),q=e(30,z),W=e(32,f),B=e(33,f),pn=(n,t)=>{(({class:a,confirm:o,content:P,header:Z,onAnimationEnd:$,onCancel:G,open:J,openChange:V,reject:h,...F})=>H(n,F))(t),O(n,t.open),j(n,t.openChange),R(n,t.class),K(n,t.header),Cn(n,t.confirm),vn(n,t.reject),S(n,t.content),x(n,t.onCancel),M(n,t.onAnimationEnd)},K=(n,t)=>{(({as:a,...o})=>gn(n,o))(t),cn(n,t.id),un(n,t.as),fn(n,t.class)},Cn=(n,t)=>{(({onClick:a,...o})=>B(n,o))(t),W(n,t.onClick)},vn=(n,t)=>{(({onClick:a,...o})=>q(n,o))(t),U(n,t.onClick)};function kn(n){return function(t,a){g(n,!1),n.a6&&n.a6(t,a)}}function yn(n){return function(t,a){n.a.requestClose(),n.a3&&n.a3(t,a)}}const Dn=p("THr5ILM",T,w,L,pn),Tn=((n,t)=>`<!>${n}${t}`)(_,T),wn=((n,t)=>`b/${n}&/${t}&`)(m,w),En=s("AuKD7Jr","Delete","b"),In=s("MTKk4Oy","Cancel","b"),An=s("Y5M3Cz3","Delete Address?","b"),On=en("Avny9c$","<p>You will permanently lose this address.</p>","b"),jn=s("KePofIT","Open Confirm Dialog","b"),b=D(7,n=>O(n.b,n.h)),Y=i(6,n=>b(n,n.e,n.f)),Rn=e(4,Y),xn=e(5,Y);function Mn(n){d(n.a),u(n.a,{onClick:Sn(n),content:jn(n)}),L(n.b),K(n.b,tn({content:An(n)})),U(n.b),q(n.b,{content:In(n)}),W(n.b),B(n.b,{content:En(n)}),S(n.b,On(n)),j(n.b,Ln(n))}const Hn=e(3,n=>{R(n.b,n.d.class),M(n.b,n.d.onAnimationEnd),x(n.b,n.d.onCancel),H(n.b,(({class:t,confirm:a,content:o,header:P,onAnimationEnd:Z,onCancel:$,open:G,openChange:J,reject:V,...h})=>h)(n.d)),Rn(n,n.d.open),xn(n,n.d.openChange)});function Ln(n){return t=>{b(n,t)}}function Sn(n){return function(){b(n,!0)}}const zn=p("gTsmaUL",Tn,wn,Mn,Hn),Un=`import { type Input as ConfirmDialogInput } from "<evo-confirm-dialog>";
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
`,tt={title:"navigation & disclosure/evo-confirm-dialog",component:Dn,parameters:{docs:{description:{component:an}}},argTypes:{open:{controllable:!0},header:{"@":{"<h2> attributes":{description:"All attributes and event handlers from the heading element will be passed through"}}},confirm:{"@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},reject:{"@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"},onCancel:{action:"onCancel",description:"Triggered when the dialog's cancel event fires, via `esc` or the cancel button",table:{category:"Events"}}}},r=N(zn,Un);r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...r.parameters?.docs?.source}}};const et=["Default"];export{r as Default,et as __namedExportsOrder,tt as default};
