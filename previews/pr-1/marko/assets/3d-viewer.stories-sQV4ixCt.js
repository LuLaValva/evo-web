import{b as T}from"./utils-DyU2_5R1.js";import{a as i,b as a,f as s,u as L,w as r,x as D,p as k,v as E,d as c,t as A,h as I}from"./dom-x1z4vtvC.js";import{_ as C}from"./preload-helper-PPVm8Dsz.js";import{b as S,c as P,$ as V,a as j}from"./evo-icon-attention-24-DUelUASe.js";import{$ as z,a as q,c as O,b as R,d as B,e as F,f as G}from"./index-CxqitZvT.js";import"./iframe-cyLTEVRG.js";import"./index-BoCxi-ng.js";/* empty css             */import"./evo-icon-spinner-24-BoeIciOn.js";const H=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-3d-viewer
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

## evo-3d-viewer (_ALPHA_, some APIs might change)

Under the hood, this uses google model viewer. All APIs are passthough to the model viewer. To use methods on the model-viewer, you can access \`viewer\` object on the component.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/media-evo-3d-viewer)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/media-evo-3d-viewer)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-3d-viewer/examples)
`;function N(){return C(()=>import("./model-viewer.min-QrBjV1S2.js"),[],import.meta.url)}const U="_player_1dc5x_2",l="_overlay_1dc5x_6";const d="<div></div>",m=" b",_=r(0,2,e=>O(e.b,e._.j)),X=e=>{_._(e),s(e.a,l),R(e.b),B(e.b),F(e.b),G(e.b,{})},u=r(0,1,e=>E(e.c,e._.f)),J=e=>{u._(e),s(e.a,l),V(e.b),j(e.b,{})},p=r(0,0,e=>k(e.a,"src",e._.e)),K=e=>{p._(e),v._(e)},M=c("DLemytk",e=>I(e,"a")),v=r(0,0,e=>{D(e,"a",e._.i,{"camera-controls":1,"touch-action":1,src:1}),M(e)}),Q=a(9,_),y=(e,t)=>Q(e,t!==void 0?t:"loading"),W=A(0,"<!><model-viewer camera-controls touch-action=pan-y></model-viewer><!>","b c",K,(e=>`<div>${e}<div class=three-d-player__overlay-text> </div></div>`)(P),(e=>` D/${e}&D m`)(S),J,(e=>`<div>${e}</div>`)(q),(e=>` D/${e}&l`)(z),X),n=L(10,e=>W(e,e.k==="ready"?0:e.k==="error"?1:2));function g(e){n(e,"loading")}const Y=c("cFl$jNI",e=>(async()=>{try{await N(),n(e,"ready")}catch(t){e.g?.(t),n(e,"error")}})()),b=a(6,Y),h=(e,t)=>s(e.a,[U,t]),Z=(e,t)=>{(({a11yLoadingText:se,class:ie,errorText:ce,onLoadError:le,src:de,...$})=>x(e,$))(t),h(e,t.class),f(e,t.src),w(e,t.errorText),b(e,t.onLoadError),y(e,t.a11yLoadingText)},x=a(8,v),f=a(4,p),w=a(5,u),ee=i("LyCaGXr",d,m,g,Z),te=d,ae=(e=>`/${e}&`)(m);function oe(e){g(e.a),f(e.a,"https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb"),w(e.a,"An error has occurred"),y(e.a,"Loading..."),h(e.a),b(e.a),x(e.a,{alt:"3d viewer"})}const re=i("S64VLfI",te,ae,oe),ne=`<evo-3d-viewer
    src="https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb"
    alt="3d viewer"
    errorText="An error has occurred"
    a11yLoadingText="Loading..."
/>
`,xe={title:"media/evo-3d-viewer",component:ee,parameters:{docs:{description:{component:H}}},argTypes:{src:{control:"text",description:"The asset to load"},a11yLoadingText:{type:{name:"string",required:!0},control:{type:"text"},table:{category:"Accessibility",defaultValue:{summary:"Loading"}},description:"Localized text for loading icon loading viewer"},errorText:{type:{name:"string",required:!0},control:"text",description:"Localized text to show error message"},onLoadError:{description:"Triggered when there is an error during loading",table:{category:"Events"}}}},o=T(re,ne);o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...o.parameters?.docs?.source}}};const fe=["Default"];export{o as Default,fe as __namedExportsOrder,xe as default};
