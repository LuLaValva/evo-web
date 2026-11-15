import{b as J}from"./utils-DyU2_5R1.js";import{a as p,_ as l,b as e,c as Ln,d as s,h as Q,e as o,f as X,t as Z,n as Sn,w as r,x as _n,g as bn,p as un,r as cn,u as h,$ as sn,K as Hn,I as dn,k as i,i as F}from"./dom-C0MY0u5h.js";import{a as gn,b as mn,c as pn,$ as hn}from"./index-Cyj-PVBR.js";import{b as Mn,c as Wn,$ as Un,a as qn}from"./evo-icon-chevron-left-16-B3exi7wR.js";import{b as jn,c as Pn,$ as Kn,a as Nn}from"./evo-icon-close-16-D9U7-U6d.js";/* empty css               */import{a as Y,$,b as nn,c as tn}from"./index-Cjr8hqDj.js";import"./iframe-BkqRzvDk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BCpdu4S5.js";/* empty css                    */import"./index-D4aRlw-G.js";/* empty css             */import"./index-C5wm6czj.js";import"./evo-icon-spinner-24-ChmSQMgq.js";import"./evo-icon-chevron-down-16-DG4w4cE-.js";const Vn=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,f=(n=>`<dialog><!><div class=dialog__header><!><!>${n}</div><div class=dialog__main><!></div><!></dialog>`)(pn),y=(n=>` D%bD%b%b/${n}&lD%l%l`)(mn),Gn=["wide","narrow","large"],Jn=n=>{Kn(n.a),Nn(n.a,{})},Qn=l("acXLePA",Pn,(n=>`/${n}&`)(jn),Jn),Xn=n=>{Un(n.a),qn(n.a,{})},Zn=l("qFGrHC8",Wn,(n=>`/${n}&`)(Mn),Xn),fn=r(2,0,n=>hn(n.a,{...n._.u,class:["dialog__prev",n._.u?.class],content:Zn(n)})),Fn=n=>{fn._(n),gn(n.a)},Yn=s("oXRtvnn",n=>Q(n,"a")),yn=r(6,0,n=>{_n(n,"a",n._.r,{class:1}),Yn(n)}),$n=n=>{yn._(n),vn._(n)},vn=r(6,0,n=>X(n.a,["dialog__footer",n._.s])),en=o(1,n=>Hn(n.a,{...n._.a8,"background-image":n._.a5&&`url(${n._.a5})`,"background-position":n._.a6}),2),Cn=r(1,0,en),nt=n=>{Cn._(n),Tn._(n),kn._(n),Dn._(n),wn._(n)},Tn=r(1,0,en),kn=r(1,0,n=>X(n.a,["dialog__image",n._.a7])),Dn=r(1,0,en),tt=s("WNDCoQT",n=>Q(n,"a")),wn=r(1,0,n=>{_n(n,"a",n._.a9,{class:1,style:1}),tt(n)}),et=s("iSM0e13",n=>{n.a2&&!("closedBy"in HTMLDialogElement.prototype)&&(n.a1==="any"?n.a.addEventListener("click",t=>{t.target===n.a&&an(n,!1)},{signal:dn(n,0)}):n.a1==="none"&&n.a.addEventListener("keydown",t=>{t.key==="Escape"&&t.preventDefault()},{signal:dn(n,1)}))}),xn=o(40,n=>{sn(n,0),sn(n,1),et(n)}),at=e(27,n=>{un(n.a,"closedby",n.a1),xn(n)}),v=(n,t)=>at(n,t!==void 0?t:"any"),C=o(41,n=>X(n.a,["dialog",!n.a2&&"dialog--close",n.n&&Gn.includes(n.n)&&`dialog--${n.n}`,n.o&&"dialog--expressive",n.m]),3),ot=s("LSQ8Z8l",n=>cn(n.a,"animationend",function(t,a){t.target===a&&!n.a2&&a.close(),n.z&&n.z(t,a)})),On=o(39,ot),it=s("oR5R$4n",n=>{n.a2&&!n.a.open&&n.a.showModal()}),an=h(28,n=>{xn(n),C(n),On(n),it(n)}),Rn=o(11,n=>an(n,n.j,n.k)),T=e(9,Rn),k=e(10,Rn),En=o(30,n=>un(n.a,"aria-labelledby",n.w?`${n.w} ${n.a3}`:n.a3)),lt=bn(3),D=o(42,n=>lt(n,n.aa||"h2",()=>({...n.ab,id:n.a3,class:["dialog__title",n.ac]})),3),rt=e(29,n=>{En(n),D(n)}),st=(n,t)=>rt(n,t||Sn(n)),w=e(22,En),x=e(12,C),O=e(13,C),dt=Z(1,"<div></div>"," b",nt),R=e(14,n=>{(({class:t,position:a,src:d,style:u,...b})=>yt(n,b))(n.o||{}),vt(n,n.o?.src),Ct(n,n.o?.position),Tt(n,n.o?.class),kt(n,n.o?.style),dt(n,n.o?0:1),C(n)}),_t=s("ewJI1mh",n=>cn(n.a,"cancel",function(t,a){t.preventDefault(),an(n,!1),n.y&&n.y(t,a)})),E=e(24,_t),z=e(25,On),bt=s("wXk_jf9",n=>Q(n,"a")),B=e(26,n=>{Ln(n,"a",{...n.a0,open:null},{closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1}),bt(n)}),ut=Z(2,(n=>`<!>${n}<!>`)(pn),(n=>`b/${n}&b`)(mn),Fn),I=e(20,n=>{ut(n,n.u?0:1),fn(n)}),ct=e(36,D),gt=e(37,D),mt=e(38,D);function A(n){gn(n.e)}const L=e(19,n=>hn(n.e,{...n.t,class:["dialog__close",n.t?.class],onClick:wt(n),content:Qn(n)})),pt=bn(5),S=(n,t)=>pt(n,t),ht=Z(6,"<div></div>"," b",$n),H=e(17,n=>{Dt(n,n.r?.class),ht(n,n.r?0:1),yn(n)}),ft=(n,t)=>{(({"aria-labelledby":a,banner:d,class:u,close:b,closedby:W,content:U,footer:q,header:j,onAnimationEnd:P,onCancel:K,open:N,openChange:V,previous:G,size:_,...An})=>B(n,An))(t),T(n,t.open),k(n,t.openChange),x(n,t.class),O(n,t.size),R(n,t.banner),M(n,t.header),H(n,t.footer),L(n,t.close),I(n,t.previous),S(n,t.content),w(n,t["aria-labelledby"]),v(n,t.closedby),E(n,t.onCancel),z(n,t.onAnimationEnd)},yt=e(35,wn),vt=e(31,Cn),Ct=e(32,Tn),Tt=e(33,kn),kt=e(34,Dn),M=(n,t)=>{(({as:a,...d})=>gt(n,d))(t),st(n,t.id),ct(n,t.as),mt(n,t.class)},Dt=e(18,vn);function wt(n){return function(t,a){n.a.requestClose(),n.t?.onClick&&(n.t?.onClick)(t,a)}}const xt=p("ULl9UTJ",f,y,A,ft),Ot=((n,t)=>`<!>${n}${t}`)(tn,f),Rt=((n,t)=>`b/${n}&/${t}&`)(nn,y),Et=l("$qmj1AP","Dialog Title","b"),zt=F("Tgy3Y8L","<p>This is the default dialog content.</p>","b"),Bt=l("nfKHvIM","Open Dialog","b"),on=h(7,n=>T(n.b,n.h)),zn=o(6,n=>on(n,n.e,n.f)),It=e(4,zn),At=e(5,zn);function Lt(n){Y(n.a),$(n.a,{onClick:Mt(n),content:Bt(n)}),A(n.b),M(n.b,i({content:Et(n)})),L(n.b,i({a11yText:"Close Dialog"})),S(n.b,zt(n)),k(n.b,Ht(n))}const St=e(3,n=>{w(n.b,n.d["aria-labelledby"]),R(n.b,n.d.banner),x(n.b,n.d.class),v(n.b,n.d.closedby),H(n.b,n.d.footer),z(n.b,n.d.onAnimationEnd),E(n.b,n.d.onCancel),I(n.b,n.d.previous),O(n.b,n.d.size),B(n.b,(({"aria-labelledby":t,banner:a,class:d,close:u,closedby:b,content:W,footer:U,header:q,onAnimationEnd:j,onCancel:P,open:K,openChange:N,previous:V,size:G,..._})=>_)(n.d)),It(n,n.d.open),At(n,n.d.openChange)});function Ht(n){return t=>{on(n,t)}}function Mt(n){return function(){on(n,!0)}}const Wt=p("l2PEQiU",Ot,Rt,Lt,St),Ut=`import { type Input as DialogInput } from "<evo-dialog>";
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
`,qt=((n,t)=>`<!>${n}${t}`)(tn,f),jt=((n,t)=>`b/${n}&/${t}&`)(nn,y),Pt=l("BOg14$w","Dialog Title","b"),Kt=F("WVd$xG7","<p>This dialog uses a banner image via the src attribute.</p>","b"),Nt=l("Ot7UKwl","Open Dialog With Banner","b"),ln=h(7,n=>T(n.b,n.h)),Bn=o(6,n=>ln(n,n.e,n.f)),Vt=e(4,Bn),Gt=e(5,Bn);function Jt(n){Y(n.a),$(n.a,{onClick:Zt(n),content:Nt(n)}),A(n.b),R(n.b,i({src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg",position:"top"})),M(n.b,i({content:Pt(n)})),L(n.b,i({a11yText:"Close Dialog"})),S(n.b,Kt(n)),k(n.b,Xt(n))}const Qt=e(3,n=>{w(n.b,n.d["aria-labelledby"]),x(n.b,n.d.class),v(n.b,n.d.closedby),H(n.b,n.d.footer),z(n.b,n.d.onAnimationEnd),E(n.b,n.d.onCancel),I(n.b,n.d.previous),O(n.b,n.d.size),B(n.b,(({"aria-labelledby":t,banner:a,class:d,close:u,closedby:b,content:W,footer:U,header:q,onAnimationEnd:j,onCancel:P,open:K,openChange:N,previous:V,size:G,..._})=>_)(n.d)),Vt(n,n.d.open),Gt(n,n.d.openChange)});function Xt(n){return t=>{ln(n,t)}}function Zt(n){return function(){ln(n,!0)}}const Ft=p("rsNNHsJ",qt,jt,Jt,Qt),Yt=`import { type Input as DialogInput } from "<evo-dialog>";
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
`,$t=((n,t)=>`<!>${n}${t}`)(tn,f),ne=((n,t)=>`b/${n}&/${t}&`)(nn,y),te=l("brTPAnq","Dialog Title","b"),ee=l("vzUpa9z","Custom Banner","b"),ae=F("eRcONc9","<p>This dialog uses a custom body inside the banner slot instead of a background image.</p>","b"),oe=l("kswWKRB","Open Dialog With Custom Banner","b"),rn=h(7,n=>T(n.b,n.h)),In=o(6,n=>rn(n,n.e,n.f)),ie=e(4,In),le=e(5,In);function re(n){Y(n.a),$(n.a,{onClick:_e(n),content:oe(n)}),A(n.b),R(n.b,i({class:"banner-demo",content:ee(n)})),M(n.b,i({content:te(n)})),L(n.b,i({a11yText:"Close Dialog"})),I(n.b,i({a11yText:"Back"})),S(n.b,ae(n)),k(n.b,de(n))}const se=e(3,n=>{w(n.b,n.d["aria-labelledby"]),x(n.b,n.d.class),v(n.b,n.d.closedby),H(n.b,n.d.footer),z(n.b,n.d.onAnimationEnd),E(n.b,n.d.onCancel),O(n.b,n.d.size),B(n.b,(({"aria-labelledby":t,banner:a,class:d,close:u,closedby:b,content:W,footer:U,header:q,onAnimationEnd:j,onCancel:P,open:K,openChange:N,previous:V,size:G,..._})=>_)(n.d)),ie(n,n.d.open),le(n,n.d.openChange)});function de(n){return t=>{rn(n,t)}}function _e(n){return function(){rn(n,!0)}}const be=p("iPGVKvZ",$t,ne,re,se),ue=`import { type Input as DialogInput } from "<evo-dialog>";
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
`,Ee={title:"navigation & disclosure/evo-dialog",component:xt,parameters:{docs:{description:{component:Vn}}},argTypes:{open:{type:"boolean",controllable:!0,description:"Whether the dialog is open",table:{defaultValue:{summary:"false"}}},size:{type:"string",options:["regular (default)","wide","narrow","large"],control:"inline-radio",description:"Size variant of the dialog"},closedby:{type:"string",options:["any","closerequest","none"],control:"inline-radio",description:'The [`closedby=` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#closedby) from the native `<dialog>` component. Defaults to `"any"` if not specified',table:{defaultValue:{summary:"any"}}},header:{description:"The header content rendered inside the dialog title (required)","@":{as:{type:"string",description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:"All attributes and event handlers from the heading element will be passed through"}}},footer:{description:"The footer content rendered below the dialog main content area","@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},close:{description:"Close button rendered in the dialog header (required). Pass `a11yText` for the accessible label","@":{a11yText:{type:{name:"string",required:!0},description:"Accessible label for the close button"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},previous:{description:"Optional previous/back button rendered in the header","@":{a11yText:{type:{name:"string",required:!0},description:"Accessible label for the previous button"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},banner:{description:"Optional banner image displayed at the top of the dialog","@":{src:{type:"string",description:"URL of the banner image"},position:{type:"string",description:"Position of the image within the banner area using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)"},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},c=J(Wt,Ut),g=J(Ft,Yt),m=J(be,ue);c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"buildExtensionTemplate(BannerTemplate, BannerTemplateCode)",...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"buildExtensionTemplate(CustomBannerTemplate, CustomBannerTemplateCode)",...m.parameters?.docs?.source}}};const ze=["Default","Banner","CustomBanner"];export{g as Banner,m as CustomBanner,c as Default,ze as __namedExportsOrder,Ee as default};
