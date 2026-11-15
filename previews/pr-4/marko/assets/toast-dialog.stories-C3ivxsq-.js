import{b as tt}from"./utils-DyU2_5R1.js";import{a as b,_ as i,b as e,c as nt,d as s,h as p,e as o,f as h,n as et,t as at,w as f,x as ot,g,p as it,r as v,u as y,$ as st,I as lt,k as _,i as rt}from"./dom-ClTA52-z.js";import{a as dt,b as ct,c as _t,$ as ut}from"./index-DCb37sqY.js";import{b as mt,c as bt,$ as pt,a as ht}from"./evo-icon-close-16-x0Nm_jZH.js";import{b as C,c as w,a as T,$ as k}from"./index-D1yL0Ivy.js";import"./iframe-BsUSqis5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BLNr7PHD.js";/* empty css                    */import"./index-DbAUUAX9.js";/* empty css             */import"./index-DyNGgPTt.js";import"./evo-icon-spinner-24-gtDKfJwY.js";import"./evo-icon-chevron-down-16-J9yTWGVq.js";const ft=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,E=(t=>`<dialog role=dialog aria-modal=false aria-live=polite closedby=closerequest><div class=toast-dialog__window><div class=toast-dialog__header><!>${t}</div><div class=toast-dialog__main><!></div><!></div></dialog>`)(_t),$=(t=>` F%b/${t}&lD%l%m`)(ct),gt=t=>{pt(t.a),ht(t.a,{})},vt=i("NH5vyti",bt,(t=>`/${t}&`)(mt),gt),yt=s("hiLc9Zc",t=>p(t,"a")),x=f(4,0,t=>{ot(t,"a",t._.n,{class:1}),yt(t)}),Ct=t=>{x._(t),D._(t)},D=f(4,0,t=>h(t.a,["toast-dialog__footer",t._.o])),A=o(22,t=>h(t.a,["toast-dialog",!t.v&&"toast-dialog--close",t.k])),wt=s("D85mWEK",t=>v(t.a,"animationend",function(n,a){n.target===a&&!t.v&&a.close(),t.t&&t.t(n,a)})),O=o(29,wt),Tt=s("UVmVybv",t=>{if(t.v&&!t.a.open){const n=document.activeElement;t.a.show(),n?.focus()}t.v&&!("closedBy"in HTMLDialogElement.prototype)&&document.addEventListener("keydown",({key:n,defaultPrevented:a})=>{n==="Escape"&&!a&&u(t,!1)},{signal:lt(t,0)})}),u=y(21,t=>{st(t,0),A(t),O(t),Tt(t)}),R=o(9,t=>u(t,t.h,t.i)),L=e(7,R),I=e(8,R),S=o(24,t=>it(t.a,"aria-labelledby",t.r?`${t.r} ${t.x}`:t.x)),kt=g(1),r=o(30,t=>kt(t,t.a2,()=>({...t.a0,id:t.x,class:["toast-dialog__title",t.a1]})),3),Et=e(23,t=>{S(t),r(t)}),$t=(t,n)=>Et(t,n||et(t)),H=e(17,S),M=e(10,A),xt=s("xGwT00N",t=>v(t.a,"cancel",function(n,a){n.preventDefault(),u(t,!1),t.s&&t.s(n,a)})),q=e(18,xt),U=e(19,O),Dt=s("zQZSNiL",t=>p(t,"a")),z=e(20,t=>{nt(t,"a",{...t.u,open:null},{role:1,"aria-modal":1,"aria-live":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1}),Dt(t)}),At=e(28,r),Ot=(t,n)=>At(t,n!==void 0?n:"h2"),Rt=e(26,r),Lt=e(27,r);function N(t){dt(t.c)}const W=e(15,t=>ut(t.c,{...t.p,transparent:!0,class:["toast-dialog__close",t.p?.class],onClick:qt(t),content:vt(t)})),It=g(3),Z=(t,n)=>It(t,n),St=at(4,"<div></div>"," b",Ct),V=e(13,t=>{Mt(t,t.n?.class),St(t,t.n?0:1),x(t)}),Ht=(t,n)=>{(({"aria-labelledby":a,class:c,close:G,content:Q,footer:j,header:F,onAnimationEnd:J,onCancel:P,open:Y,openChange:m,...X})=>z(t,X))(n),L(t,n.open),I(t,n.openChange),M(t,n.class),B(t,n.header),V(t,n.footer),W(t,n.close),Z(t,n.content),H(t,n["aria-labelledby"]),q(t,n.onCancel),U(t,n.onAnimationEnd)},B=(t,n)=>{(({as:a,...c})=>Rt(t,c))(n),$t(t,n.id),Ot(t,n.as),Lt(t,n.class)},Mt=e(14,D);function qt(t){return function(n,a){t.a.requestClose(),t.p?.onClick&&(t.p?.onClick)(n,a)}}const Ut=b("J9vqGwV",E,$,N,Ht),zt=((t,n)=>`<!>${t}${n}`)(w,E),Nt=((t,n)=>`b/${t}&/${n}&`)(C,$),Wt=i("TsZfsTs","Close","b"),Zt=i("YeEykTM","Heading","b"),Vt=rt("qEnObDN","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p><p><a href=http://www.ebay.com>www.ebay.com</a></p>","c"),Bt=i("CSSZDSN","Open Toast","b"),Kt=t=>{T(t.a),k(t.a,{onClick:Pt(t),content:Wt(t)})},Gt=i("KdycroQ",(t=>`<!>${t}<!>`)(w),(t=>`b/${t}&b`)(C),Kt),d=y(7,t=>L(t.b,t.h)),K=o(6,t=>d(t,t.e,t.f)),Qt=e(4,K),jt=e(5,K);function Ft(t){T(t.a),k(t.a,{onClick:Xt(t),content:Bt(t)}),N(t.b),B(t.b,_({content:Zt(t)})),W(t.b,_({a11yText:"Close Toast"})),V(t.b,_({content:Gt(t)})),Z(t.b,Vt(t)),I(t.b,Yt(t))}const Jt=e(3,t=>{H(t.b,t.d["aria-labelledby"]),M(t.b,t.d.class),U(t.b,t.d.onAnimationEnd),q(t.b,t.d.onCancel),z(t.b,(({"aria-labelledby":n,class:a,close:c,content:G,footer:Q,header:j,onAnimationEnd:F,onCancel:J,open:P,openChange:Y,...m})=>m)(t.d)),Qt(t,t.d.open),jt(t,t.d.openChange)});function Pt(t){return function(){d(t._,!1)}}function Yt(t){return n=>{d(t,n)}}function Xt(t){return function(){d(t,!0)}}const tn=b("KZof7nu",zt,Nt,Ft,Jt),nn=`import { type Input as ToastDialogInput } from "<evo-toast-dialog>";
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
`,fn={title:"navigation & disclosure/evo-toast-dialog",component:Ut,parameters:{docs:{description:{component:ft}}},argTypes:{open:{type:"boolean",controllable:!0,description:"Whether the toast dialog is open",table:{defaultValue:{summary:"false"}}},header:{description:"The header content rendered inside the toast dialog title (required)","@":{as:{type:"string",description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:"All attributes and event handlers from the heading element will be passed through"}}},footer:{description:"Optional footer content rendered below the toast dialog main content area","@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},close:{description:"Close button rendered in the toast dialog header (required). Pass `a11yText` for the accessible label","@":{a11yText:{type:{name:"string",required:!0},description:"Accessible label for the close button"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},l=tt(tn,nn);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...l.parameters?.docs?.source}}};const gn=["Default"];export{l as Default,gn as __namedExportsOrder,fn as default};
