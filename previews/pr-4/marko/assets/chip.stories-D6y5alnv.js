import{b as y}from"./utils-DyU2_5R1.js";import{a as r,n as C,b as a,c as $,f as x,p,d as g,h as D,g as E,t as S,w as i,i as v,k as z}from"./dom-CIHBwv1V.js";import{$ as A,a as I,b as M,c as R}from"./evo-icon-close-12-BXGpiG6b.js";import"./iframe-CfBr7C7U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DUawFjLf.js";/* empty css             */const U=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,d="<span><span class=chip__text><!></span><!></span>",_=" D D%l%l",j=i(3,0,t=>p(t.a,"aria-describedby",t._.k)),q=t=>{j._(t),T._(t),k._(t),w._(t),M(t.b),R(t.b,{})},T=i(3,0,t=>x(t.a,["chip__button",t._.l])),F=(t,e)=>p(t.a,"aria-label",e),k=i(3,0,t=>F(t,t._.m!==void 0?t._.m:"delete")),H=g("QQ9UhKJ",t=>D(t,"a")),w=i(3,0,t=>{$(t,"a",t._.n,{type:1,class:1,"aria-label":1,"aria-describedby":1}),H(t)}),K=a(10,t=>p(t.b,"id",t.k));function m(t){K(t,C(t))}const u=(t,e)=>x(t.a,["chip",e]),L=g("FqN9nG$",t=>D(t,"a")),h=a(9,t=>{$(t,"a",t.j,{class:1}),L(t)}),O=E(2),b=(t,e)=>O(t,e),Q=S(3,(t=>`<button type=button>${t}</button>`)(I),(t=>` D/${t}&l`)(A),q),f=(t,e)=>{(({a11yText:l,class:c,...n})=>G(t,n))(e||{}),J(t,e?.class),N(t,e?.a11yText),Q(t,e?0:1)},V=(t,e)=>{(({class:l,content:c,delete:n,...W})=>h(t,W))(e),u(t,e.class),b(t,e.content),f(t,e.delete)},G=a(13,w),J=a(11,T),N=a(12,k),P=r("y$sV6b4",d,_,m,V),X=d,B=(t=>`/${t}&`)(_),Y=v("RgfxBa2","chip text","b");function Z(t){m(t.a),b(t.a,Y(t))}const tt=a(2,t=>{u(t.a,t.c.class),f(t.a,t.c.delete),h(t.a,(({class:e,content:l,delete:c,...n})=>n)(t.c))}),et=r("PkoKn$z",X,B,Z,tt),at=`<evo-chip ...input>chip text</evo-chip>
`,nt=d,st=(t=>`/${t}&`)(_),ot=v("tVMoiFl","chip text","b");function it(t){m(t.a),f(t.a,z({a11yText:"Delete"})),b(t.a,ot(t))}const lt=a(2,t=>{u(t.a,t.c.class),h(t.a,(({class:e,content:l,delete:c,...n})=>n)(t.c))}),ct=r("yOSXwUz",nt,st,it,lt),rt=`<evo-chip ...input>
    chip text
    <@delete a11yText="Delete"/>
</evo-chip>
`,ft={title:"building blocks/evo-chip",component:P,parameters:{docs:{description:{component:U}}},argTypes:{delete:{description:"Attribute tag for the delete button. When present, a delete button with a close icon is rendered.","@":{a11yText:{type:{name:"string",required:!0},control:"text",description:"A descriptive label for the delete button"},disabled:{type:"boolean",description:"Whether the delete button is disabled"}}},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},s=y(et,at),o=y(ct,rt);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithDeleteTemplate, WithDeleteCode)",...o.parameters?.docs?.source}}};const yt=["Default","WithDelete"];export{s as Default,o as WithDelete,yt as __namedExportsOrder,ft as default};
