import{b as I}from"./utils-DyU2_5R1.js";import{a as y,b as n,x as b,f as g,d,h as c,p as O,e as $,L as x,_ as u,o as f,s as T}from"./dom-ByZf3MQk.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";const o="<div role=img></div>",s=" b",l=()=>{},A=(t,e)=>O(t.a,"aria-label",e),a=(t,e)=>A(t,e!==void 0?e:"Loading..."),i=(t,e)=>g(t.a,["skeleton",e]),D=d("STdZxFV",t=>c(t,"a")),_=n(5,t=>{b(t,"a",t.f,{role:1,"aria-label":1,class:1}),D(t)}),S=(t,e)=>{(({a11yText:v,class:m,...r})=>_(t,r))(e),i(t,e.class),a(t,e.a11yText)},C=y("Fyt6AHW",o,s,l,S),E=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,H="<div></div>",B=" b",G=()=>{},V=d("KOTqGiY",t=>c(t,"a")),z=$(5,t=>{x(t,"a",{class:["skeleton__avatar",t.d],...t.e}),V(t)}),j=n(3,z),F=n(4,z),K="<div></div>",P=" b",U=()=>{},Y=d("Ggvbelz",t=>c(t,"a")),h=$(6,t=>{x(t,"a",{class:["skeleton__button",t.e&&`skeleton__button--${t.e}`,t.d],...t.f}),Y(t)},2),M=n(3,h),W=n(4,h),X=n(5,h),Z="<div></div>",q=" b",J=()=>{},N=(t,e)=>g(t.a,["skeleton__image",e]),Q=d("GeJsrCx",t=>c(t,"a")),tt=n(2,t=>{b(t,"a",t.c,{class:1}),N(t,t.c.class),Q(t)}),et="<div></div>",nt=" b",ot=()=>{},st=d("KKXbNr_",t=>c(t,"a")),p=$(7,t=>{x(t,"a",{class:["skeleton__text",t.e&&"skeleton__text--multiline",t.d==="large"&&"skeleton__text--large",t.f],...t.g}),st(t)},3),lt=n(3,p),at=n(4,p),it=n(5,p),_t=n(6,p),dt="<div></div>",ct=" b",rt=()=>{},ut=(t,e)=>g(t.a,["skeleton__textbox",e]),vt=d("A2PL7wY",t=>c(t,"a")),mt=n(2,t=>{b(t,"a",t.c,{class:1}),ut(t,t.c.class),vt(t)}),kt="_grid_ttzhg_2";const gt=((t,e,v,m,r)=>`<div><div>${t}<code>&lt;evo-skeleton-avatar&gt;</code></div><div>${e}<code>&lt;evo-skeleton-button&gt;</code></div><div>${v}<code>&lt;evo-skeleton-image&gt;</code></div><div>${m}<code>&lt;evo-skeleton-text&gt;</code></div><div>${r}<code>&lt;evo-skeleton-textbox&gt;</code></div></div>`)(o,o,o,o,o),pt=((t,e,v,m,r)=>` E/${t}&lD/${e}&lD/${v}&lD/${m}&lD/${r}&m`)(s,s,s,s,s),bt=t=>{rt(t.a),mt(t.a,{})},$t=u("PbaTVmX",dt,(t=>`/${t}&`)(ct),bt),xt=t=>{J(t.a),tt(t.a,{})},ft=u("TBxlI1l",Z,(t=>`/${t}&`)(q),xt),ht=t=>{G(t.a),j(t.a),F(t.a,{})},yt=u("zo14tUI",H,(t=>`/${t}&`)(B),ht),w=f(8,t=>lt(t.a,t._.i)),Tt=t=>{w(t),L(t),ot(t.a),it(t.a),_t(t.a,{})},L=f(9,t=>at(t.a,t._.j)),zt=u("YFagPGU",et,(t=>`/${t}&`)(nt),Tt),R=f(8,t=>W(t.a,t._.i)),wt=t=>{R(t),U(t.a),M(t.a),X(t.a,{})},Lt=u("kncH0dH",K,(t=>`/${t}&`)(P),wt);function Rt(t){g(t.a,kt),l(t.b),a(t.b,"Loading..."),i(t.b),_(t.b,{content:yt(t)}),l(t.c),a(t.c,"Loading..."),i(t.c),_(t.c,{content:Lt(t)}),l(t.d),a(t.d,"Loading..."),i(t.d),_(t.d,{content:ft(t)}),l(t.e),a(t.e,"Loading..."),i(t.e),_(t.e,{content:zt(t)}),l(t.f),a(t.f,"Loading..."),i(t.f),_(t.f,{content:$t(t)})}const It=(t,e)=>{At(t,e.size),St(t,e.multiline)},Ot=T(R,w),At=n(8,Ot),Dt=T(L),St=n(9,Dt),Ct=y("TZmAR$8",gt,pt,Rt,It),Et=`export interface Input {
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
</style>`,jt={title:"building blocks/evo-skeleton",component:C,parameters:{docs:{description:{component:E}}},argTypes:{a11yText:{control:"text"},size:{type:"string",options:["default","small","large"],control:"inline-radio",table:{defaultValue:{summary:"default"}},description:"The Size of the component to render. Applicable for `evo-skeleton-button` and `evo-skeleton-text` only"},multiline:{type:"boolean",control:"boolean",description:"Boolean flag to make `evo-skeleton-text` render more than one line"},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},k=I(Ct,Et);k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"buildExtensionTemplate(AllTemplate, AllCode)",...k.parameters?.docs?.source}}};const Ft=["Default"];export{k as Default,Ft as __namedExportsOrder,jt as default};
