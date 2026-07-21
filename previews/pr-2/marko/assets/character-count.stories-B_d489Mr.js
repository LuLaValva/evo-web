import{b as v}from"./utils-DyU2_5R1.js";import{a as c,_ as N,o as i,v as e,C as Q,b as a,t as U,d as W,h as J,s as u,e as s,T as K,m as g,q as h,g as D,u as I,f as X}from"./dom-C0MY0u5h.js";import{$ as k,a as w,b as L,c as F}from"./index-CdZURMSz.js";import"./iframe-BkqRzvDk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C8mnNeEU.js";/* empty css             *//* empty css                *//* empty css                    */const Y=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,_="",m="",T="Segmenter"in Intl?new Intl.Segmenter(void 0,{granularity:"grapheme"}):null;function tt(t){return T?[...T.segment(t)].length:[...t].length}const S=i(4,t=>e(t.a,t._._.e),t=>t._._),nt=S,R=i(3,t=>e(t.c,t._.d)),at=t=>{R(t),E(t),O(t),j(t)},et=U(3," <span class=clipped> </span>","bD l",nt),E=i(4,t=>et(t,t._.e?0:1)),it=W("Lj6Q5HT",t=>J(t,"a")),O=i(7,t=>{Q(t,"a",t._.h),it(t)}),j=i(8,t=>e(t.b,t._.i)),st=N("WtN5Vi4","<span><!>/<!><!></span>"," D%c%b%l",at),$=s(10,t=>K(t,{count:t.i,ariaLive:t.i>t.d?"polite":"off",Display:t.j}),2),ot=u(j),rt=a(8,t=>{$(t),ot(t)}),q=s(6,t=>rt(t,t.f!==void 0?t.f:tt(t.c))),d=a(2,q),p=a(5,q),lt=a(9,$);function y(t){lt(t,{content:st(t)})}const ct=u(R),b=a(3,t=>{$(t),ct(t)}),ut=(t,n)=>{(({a11yText:V,count:Z,max:A,string:C,...G})=>x(t,G))(n),d(t,n.string),b(t,n.max),f(t,n.a11yText),p(t,n.count)},_t=u(O),x=a(7,_t),mt=u(E,S),f=a(4,mt),dt=c("dPA7aen",_,m,y,ut),pt=(t=>`<!>${t}<!><!>`)(_),yt=(t=>`b0${t}&%c`)(m),bt=h("F_ksPwL",(t,n)=>ft(t,n.Display)),xt=D(2),ft=(t,n)=>xt(t,n);function vt(t){g(t,0,bt),y(t.a)}const gt=a(4,t=>{f(t.a,t.e.a11yText),p(t.a,t.e.count),b(t.a,t.e.max),d(t.a,t.e.string),x(t.a,(({a11yText:n,count:V,max:Z,string:A,...C})=>C)(t.e))}),ht=c("k3g_VZ3",pt,yt,vt,gt),$t=`import type { Input as CharCountInput } from "<evo-character-count>";
export interface Input extends CharCountInput {}

<evo-character-count/{ Display } ...input/>
<Display/>`,Ct=((t,n)=>`${t}<span class=field><label class="field__label field__label--stacked" for=my-input>Field Label</label><span class=field__control>${n}</span><div class="field__description field__description--group"><span id=my-input-description>Brief description</span><!></div></span>`)(_,L),Tt=((t,n)=>`0${t}&DbD/${n}&lDb%m`)(m,w),Dt=(t,n)=>b(t.a,n),It=(t,n)=>Dt(t,n!==void 0?n:120),B=s(12,t=>F(t.c,{value:t.j,valueChange:Ot(t),type:"text","aria-describedby":"my-input-description my-input-charcount",class:"textbox__control",id:"my-input","aria-live":t.l})),M=I(9,t=>{d(t.a,t.j),B(t)}),kt=(t,n)=>M(t,n||""),wt=h("Rql8ump",(t,n)=>{Lt(t,n.ariaLive),St(t,n.Display)}),Lt=a(11,B),Ft=D(3),St=(t,n)=>Ft(t,n);function Rt(t){g(t,0,wt),y(t.a),f(t.a),p(t.a),x(t.a,{}),k(t.c)}const Et=(t,n)=>{kt(t,n.value),It(t,n.max)};function Ot(t){return n=>{M(t,n)}}const jt=c("R0S0d0C",Ct,Tt,Rt,Et),qt=`export interface Input {
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
`,Bt=((t,n)=>`${t}<span class=field><label class="field__label field__label--stacked" for=my-input>Field Label</label><span class=field__control>${n}</span><div><span><!> of <!> (<!> remaining)</span></div></span>`)(_,L),Mt=((t,n)=>`0${t}&DbD/${n}&l E%c%c%n`)(m,w),P=s(15,t=>{X(t.d,["field__description","field__description--group",t.o>t.l&&"field__description--attention"]),e(t.g,t.l-t.o)}),Pt=a(11,t=>{b(t.a,t.l),e(t.f,t.l),P(t)}),Ht=(t,n)=>Pt(t,n!==void 0?n:120),H=s(17,t=>F(t.c,{value:t.m,valueChange:Qt(t),type:"text","aria-describedby":"my-input-charcount",class:"textbox__control",id:"my-input","aria-live":t.q})),z=I(12,t=>{d(t.a,t.m),H(t)}),zt=(t,n)=>z(t,n||""),Vt=h("ojtUeZd",(t,n)=>{Zt(t,n.count),At(t,n.ariaLive)}),Zt=a(14,t=>{e(t.e,t.o),P(t)}),At=a(16,H);function Gt(t){g(t,0,Vt),y(t.a),f(t.a),p(t.a),x(t.a,{}),k(t.c)}const Nt=(t,n)=>{zt(t,n.value),Ht(t,n.max)};function Qt(t){return n=>{z(t,n)}}const Ut=c("PgPjzMp",Bt,Mt,Gt,Nt),Wt=`export interface Input {
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
`,on={title:"building blocks/evo-character-count",component:dt,parameters:{docs:{description:{component:Y}}},argTypes:{string:{type:{name:"string",required:!0},control:"text",description:"String to count characters from, or a number representing the current character count"},count:{type:"number",control:"number",description:"Manual count value, used to override string grapheme count"},max:{type:{name:"number",required:!0},control:"number",description:"Maximum number of characters allowed in the input, we allow users to go over this limit but `aria-live` should be set to `polite`."},a11yText:{type:"string",control:"text",description:'Clipped text for screen readers, announced after the character count. Often something like "characters remaining". May be set to `null` only if accessibility is provided through other means.'}}},o=v(ht,$t,{string:"Hello world",a11yText:"characters remaining",max:120}),r=v(jt,qt),l=v(Ut,Wt,{max:120});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`buildExtensionTemplate(IsolatedTemplate, IsolatedCode, {
  string: "Hello world",
  a11yText: "characters remaining",
  max: 120
})`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"buildExtensionTemplate(InFieldTemplate, InFieldCode)",...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`buildExtensionTemplate(CustomTextTemplate, CustomTextCode, {
  max: 120
})`,...l.parameters?.docs?.source}}};const rn=["Default","InField","CustomText"];export{l as CustomText,o as Default,r as InField,rn as __namedExportsOrder,on as default};
