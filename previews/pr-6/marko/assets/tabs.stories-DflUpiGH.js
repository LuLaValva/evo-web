import{b as R}from"./utils-DyU2_5R1.js";import{a as u,l as Z,m as G,n as L,b as a,q as X,e as m,C as B,y as M,z as o,p as r,u as E,d as l,h as p,c as P,f as S,r as z,g as K,_ as e,j as b,k as i}from"./dom-ByZf3MQk.js";import{$ as Q,a as V,b as tt,c as nt,d as at,e as et,f as ot}from"./index-CFcR-vvC.js";/* empty css             */import{a as it,b as rt,c as _t,$ as lt}from"./index-Bz-e3gKr.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-VCYgT6qA.js";import"./evo-icon-spinner-24-fKp9ZYWc.js";import"./index-SLqM2JFj.js";/* empty css             */import"./evo-icon-chevron-down-16-B7IB9ME0.js";const st=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-tabs
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-evo-tabs)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-evo-tabs)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-tabs/examples)
`,v=(t=>`${t}<div><div role=tablist class=tabs__items></div><div class=tabs__content></div></div>`)(at),f=(t=>`0${t}& D b l`)(nt),ct=(t,n)=>r(t.a,"hidden",!n),O=o(4,t=>ct(t,t._.p===t.M)),dt=t=>{O._(t),bt._(t),mt._(t)},bt=o(4,t=>r(t.a,"aria-labelledby",`${t._.q}-${t.M}`)),mt=o(4,t=>r(t.a,"id",`${t._.r}-${t.M}`)),ut=l("N6X6jxW",t=>p(t,"a")),pt=a(10,t=>{P(t,"a",t.k,{id:1,"aria-labelledby":1,role:1,class:1,hidden:1}),vt(t,t.k?.class),ht(t,t.k?.content),ut(t)}),vt=(t,n)=>S(t.a,[n,"tabs__panel"]),ft=K(1),ht=(t,n)=>ft(t,n),gt=(t,n)=>pt(t,n),Tt=(t,n)=>xt(t,n[0]),xt=(t,n)=>gt(t,n?.panel),yt=Z("ZQypzHi",0,"Ad"),Ct=(t,n)=>r(t.a,"aria-selected",n&&"true"),H=o(3,t=>Ct(t,t._.p===t.M)),kt=t=>{H._(t),$t._(t),wt._(t),W._(t),A._(t),N._(t)},$t=o(3,t=>r(t.a,"id",`${t._.q}-${t.M}`)),wt=o(3,t=>r(t.a,"aria-controls",`${t._.r}-${t.M}`)),W=o(3,t=>r(t.a,"tabindex",t._.s.isFocused(t.M)?0:-1)),Dt=l("ITI9E8C",t=>z(t.a,"click",function(n,_){(t._.t||null)?.(t.M),(t.e||null)?.(n,_)})),q=m(14,Dt),A=o(3,q),It=l("wt5ZTrb",t=>z(t.a,"keydown",function(n,_){(t._.u||null)?.(n),(t.f||null)?.(n,_)})),F=m(15,It),N=o(3,F),Lt=a(4,q),Rt=a(5,F),Mt=(t,n)=>S(t.a,[n,"tabs__item"]),Et=l("WqYuFaE",t=>p(t,"a")),Pt=a(3,t=>{P(t,"a",t.d,{"on-click":1,"on-keydown":1,tabindex:1,id:1,"aria-controls":1,role:1,"aria-selected":1,class:1}),Lt(t,t.d?.onClick),Rt(t,t.d?.onKeyDown),Mt(t,t.d?.class),zt(t,t.d?.content),Et(t)}),St=K(1),zt=(t,n)=>St(t,n),Kt=(t,n)=>Pt(t,n[0]),U=E(15,t=>{ot(t.a,t.p),H(t),O(t)}),Y=m(9,t=>U(t,t.h,t.i)),h=a(7,Y),g=a(8,Y),Ot=a(16),Ht=a(17);function T(t){G(t,0,At),Q(t.a),V(t.a,yt(t)),tt(t.a,jt(t)),Ot(t,L(t)),Ht(t,L(t))}const Wt=M(3,"<div role=tab><span><!></span></div>"," E%m",kt,Kt),qt=M(4,"<div role=tabpanel><div class=tabs__cell><div><!></div></div></div>"," F%n",dt,Tt),x=(t,n)=>{[...n||[]].length,Wt(t,[n]),qt(t,[n])},At=X("zr5O8Ev",a(18,t=>{Ft(t,t.s?.onClick),Nt(t,t.s?.onKeyDown),W(t)})),Ft=a(19,A),Nt=a(20,N),y=(t,n)=>et(t.a,n==="auto"),Ut=l("MlgLWoY",t=>p(t,"c")),j=m(14,t=>{B(t,"c",{class:["tabs",t.k],...t.n}),Ut(t)}),C=a(10,j),k=a(13,j),Yt=(t,n)=>{(({activation:_,class:w,index:D,indexChange:I,tab:s,...J})=>k(t,J))(n),h(t,n.index),g(t,n.indexChange),C(t,n.class),y(t,n.activation),x(t,n.tab)};function jt(t){return n=>{U(t,n)}}const Jt=u("JFRYPNJ",v,f,T,Yt),Zt=v,Gt=(t=>`/${t}&`)(f),Xt=e("SQr4Waw","<h3>Panel 3</h3><p>3. Lorem ipsum dolor sit amet</p>","c"),Bt=e("PqNdTit","Tab 3","b"),Qt=e("amer1Yl","<h3>Panel 2</h3><p>2. Lorem ipsum dolor sit amet</p>","c"),Vt=e("ARw6lwH","Tab 2","b"),tn=e("RJGXxDz","<h3>Panel 1</h3><p>1. Lorem ipsum dolor sit amet</p>","c"),nn=e("tDD_UzL","Tab 1","b");function an(t){T(t.a),x(t.a,b(b(i({content:nn(t),panel:i({content:tn(t)})}),{content:Vt(t),panel:i({content:Qt(t)})}),{content:Bt(t),panel:i({content:Xt(t)})}))}const en=a(2,t=>{y(t.a,t.c.activation),C(t.a,t.c.class),h(t.a,t.c.index),g(t.a,t.c.indexChange),k(t.a,(({activation:n,class:_,index:w,indexChange:D,tab:I,...s})=>s)(t.c))}),on=u("z$1hLJk",Zt,Gt,an,en),rn=`<evo-tabs ...input>
    <@tab>
        <@panel>
            <h3>Panel 1</h3>
            <p>1. Lorem ipsum dolor sit amet</p>
        </@panel>
        Tab 1
    </@tab>
    <@tab>
        <@panel>
            <h3>Panel 2</h3>
            <p>2. Lorem ipsum dolor sit amet</p>
        </@panel>
        Tab 2
    </@tab>
    <@tab>
        <@panel>
            <h3>Panel 3</h3>
            <p>3. Lorem ipsum dolor sit amet</p>
        </@panel>
        Tab 3
    </@tab>
</evo-tabs>
`,_n=((t,n)=>`<!>${t}${n}`)(_t,v),ln=((t,n)=>`b/${t}&/${n}&`)(rt,f),sn=e("bVFn_5e","<h3>Panel 3</h3><p>3. Lorem ipsum dolor sit amet</p>","c"),cn=e("ziR2oNN","Tab 3","b"),dn=e("sx3W1iY","<h3>Panel 2</h3><p>2. Lorem ipsum dolor sit amet</p>","c"),bn=e("Iq6iXBZ","Tab 2","b"),mn=e("yz0lv47","<h3>Panel 1</h3><p>1. Lorem ipsum dolor sit amet</p>","c"),un=e("cj2ZvH1","Tab 1","b"),pn=e("K0ERGyz","Select the first tab","b"),$=E(4,t=>{lt(t.a,{onClick:hn(t),priority:t.e===0?"tertiary":"secondary",content:pn(t)}),h(t.b,t.e)});function vn(t){it(t.a),T(t.b),x(t.b,b(b(i({content:un(t),panel:i({content:mn(t)})}),{content:bn(t),panel:i({content:dn(t)})}),{content:cn(t),panel:i({content:sn(t)})})),g(t.b,gn(t)),$(t,0)}const fn=a(3,t=>{y(t.b,t.d.activation),C(t.b,t.d.class),k(t.b,(({activation:n,class:_,index:w,indexChange:D,tab:I,...s})=>s)(t.d))});function hn(t){return function(){$(t,0)}}function gn(t){return n=>{$(t,n)}}const Tn=u("UGaOqbp",_n,ln,vn,fn),xn=`<let/curr=0>

<evo-button onClick() { curr = 0 } priority=curr === 0 ? "tertiary" : "secondary">
    Select the first tab
</evo-button>

<evo-tabs ...input index:=curr>
    <@tab>
        <@panel>
            <h3>Panel 1</h3>
            <p>1. Lorem ipsum dolor sit amet</p>
        </@panel>
        Tab 1
    </@tab>
    <@tab>
        <@panel>
            <h3>Panel 2</h3>
            <p>2. Lorem ipsum dolor sit amet</p>
        </@panel>
        Tab 2
    </@tab>
    <@tab>
        <@panel>
            <h3>Panel 3</h3>
            <p>3. Lorem ipsum dolor sit amet</p>
        </@panel>
        Tab 3
    </@tab>
</evo-tabs>
`,Sn={title:"navigation & disclosure/evo-tabs",component:Jt,parameters:{docs:{description:{component:st}}},argTypes:{index:{controllable:!0},activation:{options:["manual","auto"],control:"inline-radio"},tab:{"@":{panel:{"@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@panel>`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@tab>`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},c=R(on,rn),d=R(Tn,xn);c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)",...d.parameters?.docs?.source}}};const zn=["Default","Controlled"];export{d as Controlled,c as Default,zn as __namedExportsOrder,Sn as default};
