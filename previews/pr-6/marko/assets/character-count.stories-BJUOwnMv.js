import{b as v}from"./utils-DyU2_5R1.js";import{a as c,_ as N,o as i,v as e,C as Q,b as a,t as U,d as W,h as J,s as u,e as s,T as K,m as g,q as h,g as D,u as I,f as X}from"./dom-ByZf3MQk.js";import{$ as k,a as L,b as w,c as F}from"./index-Bbu-WMi0.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bbe4S3aW.js";/* empty css             *//* empty css                *//* empty css                    */const Y=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-character-count
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

Button styled with core classes.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-evo-character-count)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-evo-character-count)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-character-count/examples)
`,_="",d="",T="Segmenter"in Intl?new Intl.Segmenter(void 0,{granularity:"grapheme"}):null;function tt(t){return T?[...T.segment(t)].length:[...t].length}const R=i(4,t=>e(t.a,t._._.e),t=>t._._),nt=R,S=i(3,t=>e(t.c,t._.d)),at=t=>{S(t),E(t),j(t),O(t)},et=U(3," <span class=clipped> </span>","bD l",nt),E=i(4,t=>et(t,t._.e?0:1)),it=W("Lj6Q5HT",t=>J(t,"a")),j=i(7,t=>{Q(t,"a",t._.h),it(t)}),O=i(8,t=>e(t.b,t._.i)),st=N("WtN5Vi4","<span><!>/<!><!></span>"," D%c%b%l",at),$=s(10,t=>K(t,{count:t.i,ariaLive:t.i>t.d?"polite":"off",Display:t.j}),2),ot=u(O),lt=a(8,t=>{$(t),ot(t)}),B=s(6,t=>lt(t,t.f!==void 0?t.f:tt(t.c))),m=a(2,B),p=a(5,B),rt=a(9,$);function x(t){rt(t,{content:st(t)})}const ct=u(S),y=a(3,t=>{$(t),ct(t)}),ut=(t,n)=>{(({a11yText:Z,count:A,max:G,string:C,...M})=>b(t,M))(n),m(t,n.string),y(t,n.max),f(t,n.a11yText),p(t,n.count)},_t=u(j),b=a(7,_t),dt=u(E,R),f=a(4,dt),mt=c("dPA7aen",_,d,x,ut),pt=(t=>`<!>${t}<!><!>`)(_),xt=(t=>`b0${t}&%c`)(d),yt=h("F_ksPwL",(t,n)=>ft(t,n.Display)),bt=D(2),ft=(t,n)=>bt(t,n);function vt(t){g(t,0,yt),x(t.a)}const gt=a(4,t=>{f(t.a,t.e.a11yText),p(t.a,t.e.count),y(t.a,t.e.max),m(t.a,t.e.string),b(t.a,(({a11yText:n,count:Z,max:A,string:G,...C})=>C)(t.e))}),ht=c("k3g_VZ3",pt,xt,vt,gt),$t=`import type { Input as CharCountInput } from "<evo-character-count>";
export interface Input extends CharCountInput {}

<evo-character-count/{ Display } ...input/>
<Display/>`,Ct=((t,n)=>`${t}<span class=field><label class="field__label field__label--stacked" for=my-input>Field Label</label><span class=field__control>${n}</span><div class="field__description field__description--group"><span id=my-input-description>Brief description</span><!></div></span>`)(_,w),Tt=((t,n)=>`0${t}&DbD/${n}&lDb%m`)(d,L),Dt=(t,n)=>y(t.a,n),It=(t,n)=>Dt(t,n!==void 0?n:120),P=s(12,t=>F(t.c,{value:t.j,valueChange:jt(t),type:"text","aria-describedby":"my-input-description my-input-charcount",class:"textbox__control",id:"my-input","aria-live":t.l})),q=I(9,t=>{m(t.a,t.j),P(t)}),kt=(t,n)=>q(t,n||""),Lt=h("Rql8ump",(t,n)=>{wt(t,n.ariaLive),Rt(t,n.Display)}),wt=a(11,P),Ft=D(3),Rt=(t,n)=>Ft(t,n);function St(t){g(t,0,Lt),x(t.a),f(t.a),p(t.a),b(t.a,{}),k(t.c)}const Et=(t,n)=>{kt(t,n.value),It(t,n.max)};function jt(t){return n=>{q(t,n)}}const Ot=c("R0S0d0C",Ct,Tt,St,Et),Bt=`export interface Input {
    value?: string;
    max?: number;
    a11yText?: string | null;
}
<const/{ max = 120 }=input>
<let/value=input.value || "">

<evo-character-count/{ ariaLive, Display: CharCount } string=value max=max/>

<span class="field">
    <label class="field__label field__label--stacked" for="my-input">
        Field Label
    </label>
    <span class="field__control">
        <evo-input
            value:=value
            type="text"
            aria-describedby="my-input-description my-input-charcount"
            class="textbox__control"
            id="my-input"
            aria-live=ariaLive/>
    </span>
    <div class="field__description field__description--group">
        <span id="my-input-description">
            Brief description
        </span>
        <CharCount/>
    </div>
</span>
`,Pt=((t,n)=>`${t}<span class=field><label class="field__label field__label--stacked" for=my-input>Field Label</label><span class=field__control>${n}</span><div><span><!> of <!> (<!> remaining)</span></div></span>`)(_,w),qt=((t,n)=>`0${t}&DbD/${n}&l E%c%c%n`)(d,L),H=s(15,t=>{X(t.d,["field__description","field__description--group",t.o>t.l&&"field__description--attention"]),e(t.g,t.l-t.o)}),Ht=a(11,t=>{y(t.a,t.l),e(t.f,t.l),H(t)}),zt=(t,n)=>Ht(t,n!==void 0?n:120),z=s(17,t=>F(t.c,{value:t.m,valueChange:Qt(t),type:"text","aria-describedby":"my-input-charcount",class:"textbox__control",id:"my-input","aria-live":t.q})),V=I(12,t=>{m(t.a,t.m),z(t)}),Vt=(t,n)=>V(t,n||""),Zt=h("ojtUeZd",(t,n)=>{At(t,n.count),Gt(t,n.ariaLive)}),At=a(14,t=>{e(t.e,t.o),H(t)}),Gt=a(16,z);function Mt(t){g(t,0,Zt),x(t.a),f(t.a),p(t.a),b(t.a,{}),k(t.c)}const Nt=(t,n)=>{Vt(t,n.value),zt(t,n.max)};function Qt(t){return n=>{V(t,n)}}const Ut=c("PgPjzMp",Pt,qt,Mt,Nt),Wt=`export interface Input {
    value?: string;
    max?: number;
}
<const/{ max = 120 }=input>
<let/value=input.value || "">

<evo-character-count/{ count, ariaLive } string=value max=max/>

<span class="field">
    <label class="field__label field__label--stacked" for="my-input">
        Field Label
    </label>
    <span class="field__control">
        <evo-input
            value:=value
            type="text"
            aria-describedby="my-input-charcount"
            class="textbox__control"
            id="my-input"
            aria-live=ariaLive
        />
    </span>
    <div class=[
        "field__description",
        "field__description--group",
        count > max && "field__description--attention",
    ]>
        <span>\${count} of \${max} (\${max - count} remaining)</span>
    </div>
</span>
`,on={title:"building blocks/evo-character-count",component:mt,parameters:{docs:{description:{component:Y}}},argTypes:{a11yText:{control:"text"}}},o=v(ht,$t,{string:"Hello world",a11yText:"characters remaining",max:120}),l=v(Ot,Bt),r=v(Ut,Wt,{max:120});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`buildExtensionTemplate(IsolatedTemplate, IsolatedCode, {
  string: "Hello world",
  a11yText: "characters remaining",
  max: 120
})`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(InFieldTemplate, InFieldCode)",...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`buildExtensionTemplate(CustomTextTemplate, CustomTextCode, {
  max: 120
})`,...r.parameters?.docs?.source}}};const ln=["Default","InField","CustomText"];export{r as CustomText,o as Default,l as InField,ln as __namedExportsOrder,on as default};
