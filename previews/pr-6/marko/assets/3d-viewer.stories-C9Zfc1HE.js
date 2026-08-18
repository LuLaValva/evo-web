import{b as T}from"./utils-DyU2_5R1.js";import{a as i,b as a,f as s,u as L,w as r,x as D,p as k,v as E,d as c,t as A,h as I}from"./dom-ByZf3MQk.js";import{_ as C}from"./preload-helper-PPVm8Dsz.js";import{b as S,c as P,$ as j,a as V}from"./evo-icon-attention-24-BI87JwF-.js";import{$ as z,a as O,c as R,b as B,d as F,e as G,f as H}from"./index-VCYgT6qA.js";import"./iframe-EsWVLFv_.js";import"./index-SLqM2JFj.js";/* empty css             */import"./evo-icon-spinner-24-fKp9ZYWc.js";const N=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;function U(){return C(()=>import("./model-viewer.min-QrBjV1S2.js"),[],import.meta.url)}const X="_player_1dc5x_2",l="_overlay_1dc5x_6";const d="<div></div>",_=" b",m=r(0,2,t=>R(t.b,t._.j)),q=t=>{m._(t),s(t.a,l),B(t.b),F(t.b),G(t.b),H(t.b,{})},u=r(0,1,t=>E(t.c,t._.f)),J=t=>{u._(t),s(t.a,l),j(t.b),V(t.b,{})},p=r(0,0,t=>k(t.a,"src",t._.e)),K=t=>{p._(t),v._(t)},M=c("DLemytk",t=>I(t,"a")),v=r(0,0,t=>{D(t,"a",t._.i,{"camera-controls":1,"touch-action":1,src:1}),M(t)}),Q=a(9,m),y=(t,e)=>Q(t,e!==void 0?e:"loading"),W=A(0,"<!><model-viewer camera-controls touch-action=pan-y></model-viewer><!>","b c",K,(t=>`<div>${t}<div class=three-d-player__overlay-text> </div></div>`)(P),(t=>` D/${t}&D m`)(S),J,(t=>`<div>${t}</div>`)(O),(t=>` D/${t}&l`)(z),q),n=L(10,t=>W(t,t.k==="ready"?0:t.k==="error"?1:2));function b(t){n(t,"loading")}const Y=c("cFl$jNI",t=>(async()=>{try{await U(),n(t,"ready")}catch(e){t.g?.(e),n(t,"error")}})()),h=a(6,Y),g=(t,e)=>s(t.a,[X,e]),Z=(t,e)=>{(({a11yLoadingText:st,class:it,errorText:ct,onLoadError:lt,src:dt,...$})=>f(t,$))(e),g(t,e.class),x(t,e.src),w(t,e.errorText),h(t,e.onLoadError),y(t,e.a11yLoadingText)},f=a(8,v),x=a(4,p),w=a(5,u),tt=i("LyCaGXr",d,_,b,Z),et=d,at=(t=>`/${t}&`)(_);function ot(t){b(t.a),x(t.a,"https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb"),w(t.a,"An error has occurred"),y(t.a,"Loading..."),g(t.a),h(t.a),f(t.a,{alt:"3d viewer"})}const rt=i("S64VLfI",et,at,ot),nt=`<evo-3d-viewer
    src="https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb"
    alt="3d viewer"
    errorText="An error has occurred"
    a11yLoadingText="Loading..."
/>
`,ft={title:"media/evo-3d-viewer",component:tt,parameters:{docs:{description:{component:N}}},argTypes:{src:{control:"text",description:"The asset to load"},a11yLoadingText:{table:{category:"Accessibility"}},onLoadError:{table:{category:"Events"}}}},o=T(rt,nt);o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...o.parameters?.docs?.source}}};const xt=["Default"];export{o as Default,xt as __namedExportsOrder,ft as default};
