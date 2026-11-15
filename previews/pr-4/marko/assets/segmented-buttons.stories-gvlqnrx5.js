import{b as x}from"./utils-DyU2_5R1.js";import{a as _,b as e,e as i,C as L,y as U,d as r,h as D,u,z as N,p as X,c as q,f as F,w as m,t as G,g as d,r as V,D as J,_ as s,E as P,v as K,j as O,k as l}from"./dom-ClTA52-z.js";import{$ as Y,a as Z,b as tt,c as nt,d as et,e as ot,f as st,g as at}from"./evo-icon-mobile-24-DOuaOdrG.js";import"./iframe-BsUSqis5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DbAUUAX9.js";/* empty css             */const b="<div><ul></ul></div>",f=" D l",g=()=>{},ct=["large"],it=d(0),z=m(0,1,t=>it(t,t._.c)),lt=z,_t=d(1),Q=m(0,0,t=>_t(t,t._.c)),rt=t=>{Q._(t),R._(t)},ut=d(0),R=m(0,0,t=>ut(t,t._.g)),mt=(t,n)=>X(t.a,"aria-current",n&&"true"),I=i(10,t=>mt(t,t._.n===t.j)),S=N(1,I),dt=S,bt=r("ldzF_yN",t=>V(t.a,"click",function(n,o){E(t._,t.j),(t.h||null)?.(n,o)})),W=i(13,bt),ft=e(9,t=>{I(t),W(t)}),gt=(t,n)=>ft(t,n!==void 0?n:t.M),ht=(t,n)=>F(t.a,["segmented-buttons__button",n]),pt=e(7,W),vt=r("XLtPWHj",t=>D(t,"a")),$t=e(8,t=>{q(t,"a",t.i,{class:1,"on-click":1,"aria-current":1}),vt(t)}),kt=G(0,"<span class=segmented-buttons__button-cell><!><span><!></span></span>","D%bD%m",rt,"<!><!><!>","b%c",lt),Ct=e(6,t=>{kt(t,t.g?0:1),R(t)}),yt=(t,n)=>Tt(t,n[0]),Tt=e(2,t=>{(({class:n,icon:o,name:T,onClick:A,...w})=>$t(t,w))(t.c),ht(t,t.c.class),gt(t,t.c.name),Ct(t,t.c.icon),pt(t,t.c.onClick),Q(t),z(t)}),wt=r("UpyJsGQ",t=>D(t,"a")),h=i(12,t=>{L(t,"a",{class:["segmented-buttons",t.l&&`segmented-buttons--${t.l}`,t.i],...t.k}),wt(t)},2),xt=e(11,h),p=(t,n)=>xt(t,n&&ct.includes(n)?n:null),E=u(13,S),j=i(6,t=>E(t,t.e,t.f)),v=e(4,j),$=e(5,j),k=e(8,h),C=e(10,h),Dt=U(1,"<li><button></button></li>","D l",dt,yt),y=(t,n)=>Dt(t,[n]),Ot=(t,n)=>{(({button:o,class:T,selected:A,selectedChange:w,size:Zt,...B})=>C(t,B))(n),v(t,n.selected),$(t,n.selectedChange),p(t,n.size),k(t,n.class),y(t,n.button)},zt=_("iAWqAHV",b,f,g,Ot),Qt=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,Rt=b,It=(t=>`/${t}&`)(f),St=J(s("XkGb4pw"," "," b"),{4(t){K(t.a,t.e)}}),Wt=e(1,t=>{let n;P(t.b,(o,T)=>{n=O(n,{name:o,content:St(t,{4:o})})}),y(t.a,n)}),H=u(2,t=>v(t.a,t.c));function Et(t){g(t.a),$(t.a,jt(t)),k(t.a),p(t.a),C(t.a,{}),Wt(t,["Q1","Q2","Q3","Q4"]),H(t,"Q1")}function jt(t){return n=>{H(t,n)}}const Ht=_("xxkdBn1",Rt,It,Et),Mt=`<const/items = ["Q1", "Q2", "Q3", "Q4"]>
<let/selected="Q1">

<evo-segmented-buttons selected:=selected>
    <for|item, i| of=items>
        <@button name=item>
            \${item}
        </@button>
    </for>
</evo-segmented-buttons>
`,At=b,Bt=(t=>`/${t}&`)(f),Lt=t=>{et(t.a),ot(t.a,{})},Ut=s("Om0rUFC",Z,(t=>`/${t}&`)(Y),Lt),Nt=s("tHcjqOh","Mobile","b"),Xt=t=>{st(t.a),at(t.a,{})},qt=s("T3O7Xv5",nt,(t=>`/${t}&`)(tt),Xt),Ft=s("snbNvVh","Desktop","b"),M=u(1,t=>v(t.a,t.b));function Gt(t){g(t.a),y(t.a,O(l({onClick:Pt,content:Ft(t),icon:l({content:qt(t)})}),{onClick:Jt,content:Nt(t),icon:l({content:Ut(t)})})),$(t.a,Vt(t)),k(t.a),p(t.a),C(t.a,{}),M(t,0)}function Vt(t){return n=>{M(t,n)}}function Jt(){console.log("Clicked mobile")}function Pt(){console.log("Clicked full view")}const Kt=_("v2Aj0T6",At,Bt,Gt),Yt=`<let/selected=0>
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
`,ln={title:"buttons/evo-segmented-buttons",component:zt,parameters:{docs:{description:{component:Qt}}},argTypes:{selected:{controllable:!0,control:"text",description:"Index of the selected button, or name if present",table:{type:{summary:"string | number"}}},button:{description:"A button in the segmented button","@":{name:{type:"string",control:"string",description:"Name used to keep track of the `selected` button, use instead of index for more stability"},icon:{description:"Leading icon for this segment","@":{}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},size:{options:["regular (default)","large"],description:"Size override for the buttons."},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},a=x(Ht,Mt),c=x(Kt,Yt);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithIconsTemplate, WithIconsTemplateCode)",...c.parameters?.docs?.source}}};const _n=["Default","WithIcons"];export{a as Default,c as WithIcons,_n as __namedExportsOrder,ln as default};
