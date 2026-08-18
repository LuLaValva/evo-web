import{b as $}from"./utils-DyU2_5R1.js";import{a as r,n as C,b as a,c as y,f as x,p,d as g,h as D,g as E,t as S,w as i,i as v,k as z}from"./dom-ByZf3MQk.js";import{$ as I,a as M,b as R,c as U}from"./evo-icon-close-12-IM84nNCM.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SLqM2JFj.js";/* empty css             */const j=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-chip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

A discrete highlighted value.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-evo-chip)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-evo-chip)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-chip/examples)
`,_="<span><span class=chip__text><!></span><!></span>",d=" D D%l%l",A=i(3,0,t=>p(t.a,"aria-describedby",t._.k)),F=t=>{A._(t),T._(t),k._(t),w._(t),R(t.b),U(t.b,{})},T=i(3,0,t=>x(t.a,["chip__button",t._.l])),H=(t,e)=>p(t.a,"aria-label",e),k=i(3,0,t=>H(t,t._.m!==void 0?t._.m:"delete")),K=g("QQ9UhKJ",t=>D(t,"a")),w=i(3,0,t=>{y(t,"a",t._.n,{type:1,class:1,"aria-label":1,"aria-describedby":1}),K(t)}),L=a(10,t=>p(t.b,"id",t.k));function m(t){L(t,C(t))}const u=(t,e)=>x(t.a,["chip",e]),O=g("FqN9nG$",t=>D(t,"a")),h=a(9,t=>{y(t,"a",t.j,{class:1}),O(t)}),Q=E(2),b=(t,e)=>Q(t,e),V=S(3,(t=>`<button type=button>${t}</button>`)(M),(t=>` D/${t}&l`)(I),F),f=(t,e)=>{(({a11yText:l,class:c,...n})=>G(t,n))(e||{}),J(t,e?.class),N(t,e?.a11yText),V(t,e?0:1)},q=(t,e)=>{(({class:l,content:c,delete:n,...W})=>h(t,W))(e),u(t,e.class),b(t,e.content),f(t,e.delete)},G=a(13,w),J=a(11,T),N=a(12,k),P=r("y$sV6b4",_,d,m,q),X=_,B=(t=>`/${t}&`)(d),Y=v("RgfxBa2","chip text","b");function Z(t){m(t.a),b(t.a,Y(t))}const tt=a(2,t=>{u(t.a,t.c.class),f(t.a,t.c.delete),h(t.a,(({class:e,content:l,delete:c,...n})=>n)(t.c))}),et=r("PkoKn$z",X,B,Z,tt),at=`<evo-chip ...input>chip text</evo-chip>
`,nt=_,st=(t=>`/${t}&`)(d),ot=v("tVMoiFl","chip text","b");function it(t){m(t.a),f(t.a,z({a11yText:"Delete"})),b(t.a,ot(t))}const lt=a(2,t=>{u(t.a,t.c.class),h(t.a,(({class:e,content:l,delete:c,...n})=>n)(t.c))}),ct=r("yOSXwUz",nt,st,it,lt),rt=`<evo-chip ...input>
    chip text
    <@delete a11yText="Delete"/>
</evo-chip>
`,ft={title:"building blocks/evo-chip",component:P,parameters:{docs:{description:{component:j}}},argTypes:{delete:{"@":{disabled:{type:"boolean",description:"Whether the delete button is disabled"}}},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},s=$(et,at),o=$(ct,rt);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithDeleteTemplate, WithDeleteCode)",...o.parameters?.docs?.source}}};const $t=["Default","WithDelete"];export{s as Default,o as WithDelete,$t as __namedExportsOrder,ft as default};
