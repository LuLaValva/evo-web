import{b as D}from"./utils-DyU2_5R1.js";import{a as i,b as e,e as l,C as L,y as U,d as r,h as x,u,z as X,p as q,c as F,f as G,w as m,t as N,g as d,r as V,D as J,_ as s,E as P,v as K,j as O,k as _}from"./dom-ByZf3MQk.js";import{$ as Y,a as Z,b as tt,c as nt,d as et,e as ot,f as st,g as at}from"./evo-icon-mobile-24-vpqiU5R4.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SLqM2JFj.js";/* empty css             */const b="<div><ul></ul></div>",f=" D l",g=()=>{},ct=["large"],lt=d(0),Q=m(0,1,t=>lt(t,t._.c)),_t=Q,it=d(1),R=m(0,0,t=>it(t,t._.c)),rt=t=>{R._(t),z._(t)},ut=d(0),z=m(0,0,t=>ut(t,t._.g)),mt=(t,n)=>q(t.a,"aria-current",n&&"true"),W=l(10,t=>mt(t,t._.n===t.j)),E=X(1,W),dt=E,bt=r("ldzF_yN",t=>V(t.a,"click",function(n,o){S(t._,t.j),(t.h||null)?.(n,o)})),I=l(13,bt),ft=e(9,t=>{W(t),I(t)}),gt=(t,n)=>ft(t,n!==void 0?n:t.M),ht=(t,n)=>G(t.a,["segmented-buttons__button",n]),pt=e(7,I),vt=r("XLtPWHj",t=>x(t,"a")),$t=e(8,t=>{F(t,"a",t.i,{class:1,"on-click":1,"aria-current":1}),vt(t)}),kt=N(0,"<span class=segmented-buttons__button-cell><!><span><!></span></span>","D%bD%m",rt,"<!><!><!>","b%c",_t),Ct=e(6,t=>{kt(t,t.g?0:1),z(t)}),yt=(t,n)=>Tt(t,n[0]),Tt=e(2,t=>{(({class:n,icon:o,name:T,onClick:B,...w})=>$t(t,w))(t.c),ht(t,t.c.class),gt(t,t.c.name),Ct(t,t.c.icon),pt(t,t.c.onClick),R(t),Q(t)}),wt=r("UpyJsGQ",t=>x(t,"a")),h=l(12,t=>{L(t,"a",{class:["segmented-buttons",t.l&&`segmented-buttons--${t.l}`,t.i],...t.k}),wt(t)},2),Dt=e(11,h),p=(t,n)=>Dt(t,n&&ct.includes(n)?n:null),S=u(13,E),j=l(6,t=>S(t,t.e,t.f)),v=e(4,j),$=e(5,j),k=e(8,h),C=e(10,h),xt=U(1,"<li><button></button></li>","D l",dt,yt),y=(t,n)=>xt(t,[n]),Ot=(t,n)=>{(({button:o,class:T,selected:B,selectedChange:w,size:Zt,...A})=>C(t,A))(n),v(t,n.selected),$(t,n.selectedChange),p(t,n.size),k(t,n.class),y(t,n.button)},Qt=i("iAWqAHV",b,f,g,Ot),Rt=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-segmented-buttons
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-evo-segmented-buttons)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-evo-segmented-buttons)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-segmented-buttons/examples)
`,zt=b,Wt=(t=>`/${t}&`)(f),Et=J(s("XkGb4pw"," "," b"),{4(t){K(t.a,t.e)}}),It=e(1,t=>{let n;P(t.b,(o,T)=>{n=O(n,{name:o,content:Et(t,{4:o})})}),y(t.a,n)}),H=u(2,t=>v(t.a,t.c));function St(t){g(t.a),$(t.a,jt(t)),k(t.a),p(t.a),C(t.a,{}),It(t,["Q1","Q2","Q3","Q4"]),H(t,"Q1")}function jt(t){return n=>{H(t,n)}}const Ht=i("xxkdBn1",zt,Wt,St),Mt=`<const/items = ["Q1", "Q2", "Q3", "Q4"]>
<let/selected="Q1">

<evo-segmented-buttons selected:=selected>
    <for|item, i| of=items>
        <@button name=item>
            \${item}
        </@button>
    </for>
</evo-segmented-buttons>
`,Bt=b,At=(t=>`/${t}&`)(f),Lt=t=>{et(t.a),ot(t.a,{})},Ut=s("Om0rUFC",Z,(t=>`/${t}&`)(Y),Lt),Xt=s("tHcjqOh","Mobile","b"),qt=t=>{st(t.a),at(t.a,{})},Ft=s("T3O7Xv5",nt,(t=>`/${t}&`)(tt),qt),Gt=s("snbNvVh","Desktop","b"),M=u(1,t=>v(t.a,t.b));function Nt(t){g(t.a),y(t.a,O(_({onClick:Pt,content:Gt(t),icon:_({content:Ft(t)})}),{onClick:Jt,content:Xt(t),icon:_({content:Ut(t)})})),$(t.a,Vt(t)),k(t.a),p(t.a),C(t.a,{}),M(t,0)}function Vt(t){return n=>{M(t,n)}}function Jt(){console.log("Clicked mobile")}function Pt(){console.log("Clicked full view")}const Kt=i("v2Aj0T6",Bt,At,Nt),Yt=`<let/selected=0>
<evo-segmented-buttons selected:=selected>
    <@button onClick() {
        console.log("Clicked full view");
    }>
        <@icon>
            <evo-icon-full-view-24/>
        </@icon>
        Desktop
    </@button>
    <@button onClick() {
        console.log("Clicked mobile");
    }>
        <@icon>
            <evo-icon-mobile-24/>
        </@icon>
        Mobile
    </@button>
</evo-segmented-buttons>
`,ln={title:"buttons/evo-segmented-buttons",component:Qt,parameters:{docs:{description:{component:Rt}}},argTypes:{selected:{controllable:!0,control:"text",table:{type:{summary:"string | number"}}},button:{"@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},a=D(Ht,Mt),c=D(Kt,Yt);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithIconsTemplate, WithIconsTemplateCode)",...c.parameters?.docs?.source}}};const _n=["Default","WithIcons"];export{a as Default,c as WithIcons,_n as __namedExportsOrder,ln as default};
