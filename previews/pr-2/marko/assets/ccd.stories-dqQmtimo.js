import{a as l,b as e,c as O,f as W,p as j,d as L,h as P,t as o,e as r,w as i,v as c}from"./dom-C0MY0u5h.js";import{b as q}from"./utils-DyU2_5R1.js";import{$ as M,a as N,b as V,c as A,d as H,e as J,f as Q,g as F,h as G,i as K,j as X,k as Y}from"./evo-icon-ccd-top-7bZgbScn.js";/* empty css             */import"./iframe-BkqRzvDk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4aRlw-G.js";const Z=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,m="<div role=img><!><!></div>",u=" D%b%l",_=()=>{},tt=t=>{H(t.a),J(t.a,{class:"ccd__charger-icon"})},nt=t=>{Q(t.a),F(t.a,{class:"ccd__charger-icon"})},p=i(2,0,t=>c(t.c,t._.i)),et=t=>{p._(t),h._(t),y._(t),g._(t),X(t.a),Y(t.a,{class:"ccd__top-icon"})},h=i(2,0,t=>c(t.b,t._.j)),at=o(4,"<div>USB PD</div>","b"),y=i(2,0,t=>at(t,t._.l==="usbpd"?0:1)),g=i(2,0,t=>c(t.d,t._.o)),it=e(14,g),b=(t,n)=>it(t,n!==void 0?n:"W"),x=(t,n)=>j(t.a,"aria-label",n),f=(t,n)=>W(t.a,["ccd",n]),st=L("RsN5vLV",t=>P(t,"a")),$=e(13,t=>{O(t,"a",t.n,{"aria-label":1,role:1,class:1}),st(t)}),ot=o(1,A,(t=>`/${t}&`)(V),nt,N,(t=>`/${t}&`)(M),tt),v=(t,n)=>ot(t,n==="included"?0:n==="not-included"?1:2),rt=o(2,(t=>`<div class=ccd__description-figure>${t}<div class=ccd__body><div><!> - <!></div><div> </div><!></div></div>`)(K),(t=>`D/${t}&E%c%lD l%m`)(G),et),T=r(10,t=>rt(t,t.j||t.i?0:1)),C=e(8,t=>{T(t),p(t)}),D=e(9,t=>{T(t),h(t)}),ct=(t,n)=>{(({a11yText:R,chargerIcon:k,class:E,max:S,min:U,secondaryType:z,units:B,...s})=>$(t,s))(n),f(t,n.class),x(t,n.a11yText),v(t,n.chargerIcon),C(t,n.max),D(t,n.min),w(t,n.secondaryType),b(t,n.units)},w=e(11,y),dt=l("RrL3tzQ",m,u,_,ct),lt=m,mt=(t=>`/${t}&`)(u),ut=(t,n)=>x(t.a,n),I=r(9,t=>ut(t,`${t.h} ${t.i}`.trim())),_t=e(7,I),pt=(t,n)=>_t(t,`${n?`Charger ${n==="included"?"":"not "}included.`:""} `.trim()),ht=e(8,I),d=r(11,t=>ht(t,t.e||t.f?`${t.e} - ${t.f} Watts. ${t.g==="usbpd"?"USB PD":""}`:"".trim()),2),yt=e(4,d),gt=e(5,d),bt=e(6,d);function xt(t){_(t.a)}const ft=e(2,t=>{const n={min:"1000",max:"2000",...t.c};v(t.a,n.chargerIcon),f(t.a,n.class),C(t.a,n.max),D(t.a,n.min),w(t.a,n.secondaryType),b(t.a,n.units),$(t.a,(({a11yText:R,chargerIcon:k,class:E,max:S,min:U,secondaryType:z,units:B,...s})=>s)(n)),pt(t,t.c.chargerIcon),yt(t,t.c.min),gt(t,t.c.max),bt(t,t.c.secondaryType)}),$t=l("VE0NJqp",lt,mt,xt,ft),vt=`import type { Input as CCDInput } from "../index.marko";
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
`,Et={title:"graphics & icons/evo-ccd",component:dt,parameters:{docs:{description:{component:Z}}},argTypes:{max:{type:"string",control:"text",description:"The maximum range. If min and max are both not set, then will not show the charger label."},min:{type:"string",control:"text",description:"The minimum range. If min and max are both not set, then will not show the charger label."},chargerIcon:{type:"string",options:["none (default)","included","not-included"],control:"inline-radio",description:"Toggles the charger icon visible or if its included or not"},a11yText:{type:{name:"string",required:!0},control:"text",description:"Localized, the accessibility label for the ccd component. This is for internationalization. It should use min, max, and charger included or not included, and secondaryText in the label in order to demonstrate to screen readers the content on the component. Expected value `Charger included. ${min} - ${max} Watts. USB PD`. May be set to `null` only if accessibility is provided through other means."},units:{type:"string",control:"text",description:"The unit label displayed beneath the power range."},secondaryType:{type:"string",options:["none (default)","usbpd"],control:"select",description:"Toggles the usbpd secondary text"},"<div> attributes":{description:"All attributes and event handlers from [the native `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@action>`."}}},a=q($t,vt,{max:"2000",min:"1000"});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  max: "2000",
  min: "1000"
})`,...a.parameters?.docs?.source}}};const St=["Default"];export{a as Default,St as __namedExportsOrder,Et as default};
