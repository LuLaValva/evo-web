import{b as I}from"./utils-DyU2_5R1.js";import{a as y,b as n,x as b,f as g,d,h as c,p as O,e as $,L as x,_ as u,o as h,s as T}from"./dom-ClTA52-z.js";import"./iframe-BsUSqis5.js";import"./preload-helper-PPVm8Dsz.js";const o="<div role=img></div>",s=" b",l=()=>{},A=(t,e)=>O(t.a,"aria-label",e),a=(t,e)=>A(t,e!==void 0?e:"Loading..."),i=(t,e)=>g(t.a,["skeleton",e]),D=d("STdZxFV",t=>c(t,"a")),_=n(5,t=>{b(t,"a",t.f,{role:1,"aria-label":1,class:1}),D(t)}),E=(t,e)=>{(({a11yText:v,class:m,...r})=>_(t,r))(e),i(t,e.class),a(t,e.a11yText)},S=y("Fyt6AHW",o,s,l,E),C=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-skeleton
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0 [BETA]
    </span>
</h1>

The Skeletons are simplified versions of layouts to indicate that information has not been fully loaded to improve the perceived performance.

## Examples and Documentation

- [Storybook](https://ebay.github.io/?path=/story/building-blocks-evo-skeleton--default)
- [Storybook Docs](https://ebay.github.io/?path=/story/building-blocks-evo-skeleton--default)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-skeleton/examples)
`,H="<div></div>",B=" b",G=()=>{},V=d("KOTqGiY",t=>c(t,"a")),z=$(5,t=>{x(t,"a",{class:["skeleton__avatar",t.d],...t.e}),V(t)}),j=n(3,z),F=n(4,z),K="<div></div>",M=" b",P=()=>{},U=d("Ggvbelz",t=>c(t,"a")),f=$(6,t=>{x(t,"a",{class:["skeleton__button",t.e&&`skeleton__button--${t.e}`,t.d],...t.f}),U(t)},2),Y=n(3,f),q=n(4,f),W=n(5,f),X="<div></div>",Z=" b",J=()=>{},N=(t,e)=>g(t.a,["skeleton__image",e]),Q=d("GeJsrCx",t=>c(t,"a")),tt=n(2,t=>{b(t,"a",t.c,{class:1}),N(t,t.c.class),Q(t)}),et="<div></div>",nt=" b",ot=()=>{},st=d("KKXbNr_",t=>c(t,"a")),p=$(7,t=>{x(t,"a",{class:["skeleton__text",t.e&&"skeleton__text--multiline",t.d==="large"&&"skeleton__text--large",t.f],...t.g}),st(t)},3),lt=n(3,p),at=n(4,p),it=n(5,p),_t=n(6,p),dt="<div></div>",ct=" b",rt=()=>{},ut=(t,e)=>g(t.a,["skeleton__textbox",e]),vt=d("A2PL7wY",t=>c(t,"a")),mt=n(2,t=>{b(t,"a",t.c,{class:1}),ut(t,t.c.class),vt(t)}),kt="_grid_ttzhg_2";const gt=((t,e,v,m,r)=>`<div><div>${t}<code>&lt;evo-skeleton-avatar&gt;</code></div><div>${e}<code>&lt;evo-skeleton-button&gt;</code></div><div>${v}<code>&lt;evo-skeleton-image&gt;</code></div><div>${m}<code>&lt;evo-skeleton-text&gt;</code></div><div>${r}<code>&lt;evo-skeleton-textbox&gt;</code></div></div>`)(o,o,o,o,o),pt=((t,e,v,m,r)=>` E/${t}&lD/${e}&lD/${v}&lD/${m}&lD/${r}&m`)(s,s,s,s,s),bt=t=>{rt(t.a),mt(t.a,{})},$t=u("PbaTVmX",dt,(t=>`/${t}&`)(ct),bt),xt=t=>{J(t.a),tt(t.a,{})},ht=u("TBxlI1l",X,(t=>`/${t}&`)(Z),xt),ft=t=>{G(t.a),j(t.a),F(t.a,{})},yt=u("zo14tUI",H,(t=>`/${t}&`)(B),ft),L=h(8,t=>lt(t.a,t._.i)),Tt=t=>{L(t),w(t),ot(t.a),it(t.a),_t(t.a,{})},w=h(9,t=>at(t.a,t._.j)),zt=u("YFagPGU",et,(t=>`/${t}&`)(nt),Tt),R=h(8,t=>q(t.a,t._.i)),Lt=t=>{R(t),P(t.a),Y(t.a),W(t.a,{})},wt=u("kncH0dH",K,(t=>`/${t}&`)(M),Lt);function Rt(t){g(t.a,kt),l(t.b),a(t.b,"Loading..."),i(t.b),_(t.b,{content:yt(t)}),l(t.c),a(t.c,"Loading..."),i(t.c),_(t.c,{content:wt(t)}),l(t.d),a(t.d,"Loading..."),i(t.d),_(t.d,{content:ht(t)}),l(t.e),a(t.e,"Loading..."),i(t.e),_(t.e,{content:zt(t)}),l(t.f),a(t.f,"Loading..."),i(t.f),_(t.f,{content:$t(t)})}const It=(t,e)=>{At(t,e.size),Et(t,e.multiline)},Ot=T(R,L),At=n(8,Ot),Dt=T(w),Et=n(9,Dt),St=y("TZmAR$8",gt,pt,Rt,It),Ct=`export interface Input {
  a11yText: string;
  size?: "small" | "large";
  multiline: boolean;
}

<const/{ a11yText, size, multiline }=input>

<div class=(styles as any).grid>
  <div>
    <evo-skeleton a11yText="Loading...">
      <evo-skeleton-avatar/>
    </evo-skeleton>
    <code>&lt;evo-skeleton-avatar&gt;</code>
  </div>
  <div>
    <evo-skeleton a11yText="Loading...">
      <evo-skeleton-button size=size/>
    </evo-skeleton>
    <code>&lt;evo-skeleton-button&gt;</code>
  </div>
  <div>
    <evo-skeleton a11yText="Loading...">
      <evo-skeleton-image/>
    </evo-skeleton>
    <code>&lt;evo-skeleton-image&gt;</code>
  </div>
  <div>
    <evo-skeleton a11yText="Loading...">
      <evo-skeleton-text size=size multiline=multiline/>
    </evo-skeleton>
    <code>&lt;evo-skeleton-text&gt;</code>
  </div>
  <div>
    <evo-skeleton a11yText="Loading...">
      <evo-skeleton-textbox/>
    </evo-skeleton>
    <code>&lt;evo-skeleton-textbox&gt;</code>
  </div>
</div>

<style/styles>
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;

    & > div {
      width: 15rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border: 1px solid var(--color-border-strong);
      padding: 1rem;


      & > :first-child {
        height: 10rem;
      }
      & > code {
        text-align: center;
      }
    }
  }
</style>`,jt={title:"building blocks/evo-skeleton",component:S,parameters:{docs:{description:{component:C}}},argTypes:{a11yText:{type:{name:"string",required:!0},control:"text",description:'Localized accessibility text for the component. English default to be overridden is "Loading...". May be set to `null` only if accessibility is provided through other means.'},size:{type:"string",options:["default","small","large"],control:"inline-radio",table:{defaultValue:{summary:"default"}},description:"The Size of the component to render. Applicable for `evo-skeleton-button` and `evo-skeleton-text` only"},multiline:{type:"boolean",control:"boolean",description:"Boolean flag to make `evo-skeleton-text` render more than one line"},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},k=I(St,Ct);k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"buildExtensionTemplate(AllTemplate, AllCode)",...k.parameters?.docs?.source}}};const Ft=["Default"];export{k as Default,Ft as __namedExportsOrder,jt as default};
