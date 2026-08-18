import{b as tt}from"./utils-DyU2_5R1.js";import{a as b,_ as i,b as a,c as nt,d as s,h as p,e as o,f,n as at,t as et,w as g,x as ot,g as h,p as it,r as v,u as y,$ as st,I as lt,k as c,i as rt}from"./dom-ByZf3MQk.js";import{a as dt,b as _t,c as ct,$ as ut}from"./index-DO3pdl0Q.js";import"./index-fuwatFOt.js";import{b as mt,c as bt,$ as pt,a as ft}from"./evo-icon-close-16-T-sOsZXf.js";import{b as C,c as w,a as T,$ as k}from"./index-Bz-e3gKr.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_ZERrm0Z.js";/* empty css                    */import"./evo-icon-chevron-left-16-D-WocNj6.js";import"./index-SLqM2JFj.js";/* empty css             */import"./index-VCYgT6qA.js";import"./evo-icon-spinner-24-fKp9ZYWc.js";import"./evo-icon-chevron-down-16-B7IB9ME0.js";const gt=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-toast-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

A non-modal toast dialog that slides up from the bottom of the page. Used for non-blocking notifications that the user needs to see.

Uses a native \`<dialog>\` element opened non-modally via \`.show()\`, with \`aria-live="polite"\` for screen reader announcements.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/evo-marko/?path=/story/navigation-disclosure-evo-toast-dialog)
- [Storybook Docs](https://ebay.github.io/evo-web/evo-marko/?path=/docs/navigation-disclosure-evo-toast-dialog)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-toast-dialog/examples)
`,E=(t=>`<dialog role=dialog aria-modal=false aria-live=polite closedby=closerequest><div class=toast-dialog__window><div class=toast-dialog__header><!>${t}</div><div class=toast-dialog__main><!></div><!></div></dialog>`)(ct),$=(t=>` F%b/${t}&lD%l%m`)(_t),ht=t=>{pt(t.a),ft(t.a,{})},vt=i("NH5vyti",bt,(t=>`/${t}&`)(mt),ht),yt=s("hiLc9Zc",t=>p(t,"a")),x=g(4,0,t=>{ot(t,"a",t._.n,{class:1}),yt(t)}),Ct=t=>{x._(t),D._(t)},D=g(4,0,t=>f(t.a,["toast-dialog__footer",t._.o])),R=o(22,t=>f(t.a,["toast-dialog",!t.v&&"toast-dialog--close",t.k])),wt=s("D85mWEK",t=>v(t.a,"animationend",function(n,e){n.target===e&&!t.v&&e.close(),t.t&&t.t(n,e)})),A=o(29,wt),Tt=s("UVmVybv",t=>{if(t.v&&!t.a.open){const n=document.activeElement;t.a.show(),n?.focus()}t.v&&!("closedBy"in HTMLDialogElement.prototype)&&document.addEventListener("keydown",({key:n,defaultPrevented:e})=>{n==="Escape"&&!e&&u(t,!1)},{signal:lt(t,0)})}),u=y(21,t=>{st(t,0),R(t),A(t),Tt(t)}),L=o(9,t=>u(t,t.h,t.i)),O=a(7,L),I=a(8,L),S=o(24,t=>it(t.a,"aria-labelledby",t.r?`${t.r} ${t.x}`:t.x)),kt=h(1),r=o(30,t=>kt(t,t.a2,()=>({...t.a0,id:t.x,class:["toast-dialog__title",t.a1]})),3),Et=a(23,t=>{S(t),r(t)}),$t=(t,n)=>Et(t,n||at(t)),H=a(17,S),M=a(10,R),xt=s("xGwT00N",t=>v(t.a,"cancel",function(n,e){n.preventDefault(),u(t,!1),t.s&&t.s(n,e)})),U=a(18,xt),z=a(19,A),Dt=s("zQZSNiL",t=>p(t,"a")),N=a(20,t=>{nt(t,"a",{...t.u,open:null},{role:1,"aria-modal":1,"aria-live":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1}),Dt(t)}),Rt=a(28,r),At=(t,n)=>Rt(t,n!==void 0?n:"h2"),Lt=a(26,r),Ot=a(27,r);function Z(t){dt(t.c)}const q=a(15,t=>ut(t.c,{...t.p,transparent:!0,class:["toast-dialog__close",t.p?.class],onClick:Ut(t),content:vt(t)})),It=h(3),W=(t,n)=>It(t,n),St=et(4,"<div></div>"," b",Ct),B=a(13,t=>{Mt(t,t.n?.class),St(t,t.n?0:1),x(t)}),Ht=(t,n)=>{(({"aria-labelledby":e,class:_,close:G,content:Q,footer:j,header:F,onAnimationEnd:J,onCancel:Y,open:P,openChange:m,...X})=>N(t,X))(n),O(t,n.open),I(t,n.openChange),M(t,n.class),K(t,n.header),B(t,n.footer),q(t,n.close),W(t,n.content),H(t,n["aria-labelledby"]),U(t,n.onCancel),z(t,n.onAnimationEnd)},K=(t,n)=>{(({as:e,..._})=>Lt(t,_))(n),$t(t,n.id),At(t,n.as),Ot(t,n.class)},Mt=a(14,D);function Ut(t){return function(n,e){t.a.requestClose(),t.p?.onClick&&(t.p?.onClick)(n,e)}}const zt=b("J9vqGwV",E,$,Z,Ht),Nt=((t,n)=>`<!>${t}${n}`)(w,E),Zt=((t,n)=>`b/${t}&/${n}&`)(C,$),qt=i("TsZfsTs","Close","b"),Wt=i("YeEykTM","Heading","b"),Bt=rt("qEnObDN","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p><p><a href=http://www.ebay.com>www.ebay.com</a></p>","c"),Kt=i("CSSZDSN","Open Toast","b"),Vt=t=>{T(t.a),k(t.a,{onClick:Yt(t),content:qt(t)})},Gt=i("KdycroQ",(t=>`<!>${t}<!>`)(w),(t=>`b/${t}&b`)(C),Vt),d=y(7,t=>O(t.b,t.h)),V=o(6,t=>d(t,t.e,t.f)),Qt=a(4,V),jt=a(5,V);function Ft(t){T(t.a),k(t.a,{onClick:Xt(t),content:Kt(t)}),Z(t.b),K(t.b,c({content:Wt(t)})),q(t.b,c({a11yText:"Close Toast"})),B(t.b,c({content:Gt(t)})),W(t.b,Bt(t)),I(t.b,Pt(t))}const Jt=a(3,t=>{H(t.b,t.d["aria-labelledby"]),M(t.b,t.d.class),z(t.b,t.d.onAnimationEnd),U(t.b,t.d.onCancel),N(t.b,(({"aria-labelledby":n,class:e,close:_,content:G,footer:Q,header:j,onAnimationEnd:F,onCancel:J,open:Y,openChange:P,...m})=>m)(t.d)),Qt(t,t.d.open),jt(t,t.d.openChange)});function Yt(t){return function(){d(t._,!1)}}function Pt(t){return n=>{d(t,n)}}function Xt(t){return function(){d(t,!0)}}const tn=b("KZof7nu",Nt,Zt,Ft,Jt),nn=`import { type Input as ToastDialogInput } from "<evo-toast-dialog>";
export interface Input extends ToastDialogInput {}

<let/open:=input.open>

<evo-button onClick() { open = true; }>
    Open Toast
</evo-button>

<evo-toast-dialog ...input open:=open>
    <@header>Heading</@header>
    <@close a11yText="Close Toast"/>
    <@footer>
        <evo-button onClick() { open = false; }>
            Close
        </evo-button>
    </@footer>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    <p>
        <a href="http://www.ebay.com">www.ebay.com</a>
    </p>
</evo-toast-dialog>
`,vn={title:"navigation & disclosure/evo-toast-dialog",component:zt,parameters:{docs:{description:{component:gt}}},argTypes:{open:{controllable:!0},header:{"@":{"<h2> attributes":{description:"All attributes and event handlers from the heading element will be passed through"}}},footer:{"@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},close:{"@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},l=tt(tn,nn);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...l.parameters?.docs?.source}}};const yn=["Default"];export{l as Default,yn as __namedExportsOrder,vn as default};
