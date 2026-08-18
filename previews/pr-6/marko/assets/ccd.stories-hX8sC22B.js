import{a as m,b as a,c as B,f as W,p as z,d as L,h as P,t as c,e as o,w as s,v as r}from"./dom-ByZf3MQk.js";import{b as N}from"./utils-DyU2_5R1.js";import{$ as V,a as q,b as A,c as H,d as J,e as M,f as Q,g as F,h as G,i as K,j as X,k as Y}from"./evo-icon-ccd-top-mNINBHLt.js";/* empty css             */import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SLqM2JFj.js";const Z=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebayccd-
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

EU energy label

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-ccd)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-ccd)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-ccd/examples)
`,l="<div role=img><!><!></div>",_=" D%b%l",u=()=>{},tt=t=>{J(t.a),M(t.a,{class:"ccd__charger-icon"})},nt=t=>{Q(t.a),F(t.a,{class:"ccd__charger-icon"})},p=s(2,0,t=>r(t.c,t._.i)),at=t=>{p._(t),y._(t),$._(t),g._(t),X(t.a),Y(t.a,{class:"ccd__top-icon"})},y=s(2,0,t=>r(t.b,t._.j)),et=c(4,"<div>USB PD</div>","b"),$=s(2,0,t=>et(t,t._.l==="usbpd"?0:1)),g=s(2,0,t=>r(t.d,t._.o)),st=a(14,g),h=(t,n)=>st(t,n!==void 0?n:"W"),b=(t,n)=>z(t.a,"aria-label",n),f=(t,n)=>W(t.a,["ccd",n]),it=L("RsN5vLV",t=>P(t,"a")),x=a(13,t=>{B(t,"a",t.n,{"aria-label":1,role:1,class:1}),it(t)}),ct=c(1,H,(t=>`/${t}&`)(A),nt,q,(t=>`/${t}&`)(V),tt),v=(t,n)=>ct(t,n==="included"?0:n==="not-included"?1:2),ot=c(2,(t=>`<div class=ccd__description-figure>${t}<div class=ccd__body><div><!> - <!></div><div> </div><!></div></div>`)(K),(t=>`D/${t}&E%c%lD l%m`)(G),at),T=o(10,t=>ot(t,t.j||t.i?0:1)),C=a(8,t=>{T(t),p(t)}),D=a(9,t=>{T(t),y(t)}),rt=(t,n)=>{(({a11yText:R,chargerIcon:k,class:E,max:S,min:O,secondaryType:U,units:j,...i})=>x(t,i))(n),f(t,n.class),b(t,n.a11yText),v(t,n.chargerIcon),C(t,n.max),D(t,n.min),I(t,n.secondaryType),h(t,n.units)},I=a(11,$),dt=m("RrL3tzQ",l,_,u,rt),mt=l,lt=(t=>`/${t}&`)(_),_t=(t,n)=>b(t.a,n),w=o(9,t=>_t(t,`${t.h} ${t.i}`.trim())),ut=a(7,w),pt=(t,n)=>ut(t,`${n?`Charger ${n==="included"?"":"not "}included.`:""} `.trim()),yt=a(8,w),d=o(11,t=>yt(t,t.e||t.f?`${t.e} - ${t.f} Watts. ${t.g==="usbpd"?"USB PD":""}`:"".trim()),2),$t=a(4,d),gt=a(5,d),ht=a(6,d);function bt(t){u(t.a)}const ft=a(2,t=>{const n={min:"1000",max:"2000",...t.c};v(t.a,n.chargerIcon),f(t.a,n.class),C(t.a,n.max),D(t.a,n.min),I(t.a,n.secondaryType),h(t.a,n.units),x(t.a,(({a11yText:R,chargerIcon:k,class:E,max:S,min:O,secondaryType:U,units:j,...i})=>i)(n)),pt(t,t.c.chargerIcon),$t(t,t.c.min),gt(t,t.c.max),ht(t,t.c.secondaryType)}),xt=m("VE0NJqp",mt,lt,bt,ft),vt=`import type { Input as CCDInput } from "../index.marko";
export interface Input extends CCDInput {}

<const/a11yCharger=\`\${
    input.chargerIcon
        ? \`Charger \${input.chargerIcon === "included" ? "" : "not "}included.\`
        : ""
} \`.trim()/>
<const/a11yRange=(
    input.min || input.max
        ? \`\${input.min} - \${input.max} Watts. \${input.secondaryType === "usbpd" ? "USB PD" : ""}\`
        : "".trim()
)/>
<const/a11yCombined=\`\${a11yCharger} \${a11yRange}\`.trim()/>

<evo-ccd min="1000" max="2000" ...input a11yText=a11yCombined/>
`,Et={title:"graphics & icons/evo-ccd",component:dt,parameters:{docs:{description:{component:Z}}},argTypes:{chargerIcon:{options:["none (default)","included","not-included"],control:"inline-radio"},a11yText:{control:"text"},secondaryType:{options:[void 0,"usbpd"],control:"select"},"<div> attributes":{description:"All attributes and event handlers from [the native `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},e=N(xt,vt,{max:"2000",min:"1000"});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  max: "2000",
  min: "1000"
})`,...e.parameters?.docs?.source}}};const St=["Default"];export{e as Default,St as __namedExportsOrder,Et as default};
