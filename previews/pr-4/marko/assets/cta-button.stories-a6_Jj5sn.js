import{b as _}from"./utils-DyU2_5R1.js";import{a as o,b as n,c as y,d as g,e as $,f as v,g as w,h as T,i as z}from"./dom-ClTA52-z.js";import{$ as x,a as D,b as C,c as E}from"./evo-icon-arrow-right-24-DUYWT5mM.js";import"./iframe-BsUSqis5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DbAUUAX9.js";/* empty css             */const c=(t=>`<a><span class=cta-btn__cell><span><!></span>${t}</span></a>`)(E),i=(t=>` F%l/${t}&m`)(C),r=$(7,t=>v(t.a,["cta-btn",t.f&&`cta-btn--${t.f}`,t.g])),l=n(5,r),p=n(6,r),k=g("tuYhNbX",t=>T(t,"a")),u=n(9,t=>{y(t,"a",t.j,{class:1}),k(t)}),S=w(1),m=(t,e)=>S(t,e);function b(t){x(t.c),D(t.c,{})}const B=(t,e)=>{(({class:d,content:h,size:s,...f})=>u(t,f))(e),l(t,e.size),p(t,e.class),m(t,e.content)},R=o("sXG7G49",c,i,b,B),j=c,A=(t=>`/${t}&`)(i),U=z("KKUVc3y","CTA Button","b");function I(t){b(t.a),m(t.a,U(t))}const L=n(2,t=>{p(t.a,t.c.class),l(t.a,t.c.size),u(t.a,(({class:e,content:d,size:h,...s})=>s)(t.c))}),G=o("UjEj7Rd",j,A,I,L),H=`<evo-cta-button ...input>
    CTA Button
</evo-cta-button>`,K=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-cta-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-evo-cta-button)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-evo-cta-button)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-cta-button/examples)
`,Y={title:"buttons/evo-cta-button",component:R,parameters:{docs:{description:{component:K}}},argTypes:{size:{type:"string",options:["normal (default)","large"],control:"inline-radio",description:"Size of the CTA button"},href:{type:"string",control:"text",description:"The URL. If not present, the button inherits disabled styles"},"<a> attributes":{description:"All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through"}}},a=_(G,H,{href:"https://www.ebay.com",size:"regular"});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  href: "https://www.ebay.com",
  size: "regular"
})`,...a.parameters?.docs?.source}}};const q=["Default"];export{a as Default,q as __namedExportsOrder,Y as default};
