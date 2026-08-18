import{b as M}from"./utils-DyU2_5R1.js";import{a as f,b as i,c as B,u as g,d as z,h as G,e as s,f as W,y as H,p as J,z as v,_ as n,j as d,k as a,O as N,v as P,A as Z,B as F}from"./dom-ByZf3MQk.js";import{$ as K,a as Q,b as X,c as tt,d as et,e as nt,f as it,g as at,h as ot,i as rt,j as ut}from"./index-DUkFFfP2.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./evo-icon-chevron-down-16-B7IB9ME0.js";import"./index-SLqM2JFj.js";/* empty css             */const h="<ul></ul>",q=" b",L=s(3,t=>{const e={...t.c,open:Array.isArray(t._.m)?t._.m.includes(t.M):t._.m===t.M,openChange:bt(t)};tt(t.a,e.alignment),et(t.a,e.class),nt(t.a,e.content),it(t.a,e.contentAs),at(t.a,e.leading),ot(t.a,e.size),rt(t.a,e.summary),ut(t.a,(({alignment:o,class:r,content:p,contentAs:_,leading:b,size:u,summary:k,...Y})=>Y)(e))}),U=v(0,L),st=t=>{U._(t),X(t.a)},lt=i(2,L),mt=(t,e)=>lt(t,e[0]),ct=(t,e)=>J(t.a,"aria-roledescription",e),x=(t,e)=>ct(t,e!==void 0?e:"accordion"),c=g(12,U),w=s(5,t=>c(t,t.d,t.e)),y=i(3,w),C=i(4,w),$=s(14,t=>W(t.a,["accordion",t.h==="large"&&"accordion--large",t.g,t.n&&"accordion--animated"]),2),O=g(13,$);function D(t){O(t,!1)}const I=i(6,$),E=i(7,$),dt=z("cZsXjKk",t=>G(t,"a")),A=i(10,t=>{B(t,"a",t.k,{"aria-roledescription":1,class:1}),dt(t)}),pt=H(0,(t=>`<li>${t}</li>`)(K),(t=>`D/${t}&l`)(Q),st,mt),T=(t,e)=>pt(t,[e]),_t=(t,e)=>{(({a11yText:o,class:r,item:p,open:_,openChange:b,size:u,...k})=>A(t,k))(e),y(t,e.open),C(t,e.openChange),I(t,e.class),E(t,e.size),T(t,e.item),x(t,e.a11yText)};function bt(t){return function(e){if(O(t._,!0),Array.isArray(t._.m)){const o=t._.m;e?o.includes(t.M)||c(t._,[...o,t.M]):c(t._,o.filter(r=>r!==t.M))}else c(t._,e?t.M:-1)}}const ft=f("h2nN9mM",h,q,D,_t),gt=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-accordion
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/?path=/story/navigation-disclosure-evo-accordion)
- [Storybook Docs](https://ebay.github.io/?path=/docs/navigation-disclosure-evo-accordion)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-accordion/examples)
`,vt=h,ht=(t=>`/${t}&`)(q),qt=n("u4_tWjA","Item 3","b"),xt=n("qOVVhkI","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","b"),yt=n("wYnrMZQ","Item 2","b"),Ct=n("khhbilj","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","b"),$t=n("fja7cd_","Item 1","b"),Dt=n("p_$vFGr","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","b");function It(t){D(t.a),T(t.a,d(d(a({content:Dt(t),summary:a({content:$t(t)})}),{content:Ct(t),summary:a({content:yt(t)})}),{content:xt(t),summary:a({content:qt(t)})})),x(t.a,"Accordion Menu")}const Et=i(2,t=>{I(t.a,t.c.class),y(t.a,t.c.open),C(t.a,t.c.openChange),E(t.a,t.c.size),A(t.a,(({a11yText:e,class:o,item:r,open:p,openChange:_,size:b,...u})=>u)(t.c))}),At=f("NhrB9Di",vt,ht,It,Et),Tt=`<evo-accordion ...input a11yText="Accordion Menu">
    <@item>
        <@summary>Item 1</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@item>
    <@item>
        <@summary>Item 2</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@item>
    <@item>
        <@summary>Item 3</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@item>
</evo-accordion>
`,kt=(t=>`<div></div>${t}`)(h),Mt=(t=>` b/${t}&`)(q),zt=n("f11OaRc","Item 3","b"),Lt=n("ApYd0Vm","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","b"),Ut=n("pjLGqns","Item 2","b"),wt=n("tvYy92h","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","b"),Ot=n("xfVGiU$","Item 1","b"),Rt=n("BYoV6SG","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","b"),R=s(3,t=>F(t,"a",t._.h,t._.i,t.M)),V=v(0,R),Vt=z("U_V3YPW",t=>Z(t,"a")),jt=t=>{V._(t),St._(t),P(t.b,t.M),Vt(t)},St=v(0,R),j=g(7,t=>{y(t.b,t.h),V(t)}),S=s(6,t=>j(t,t.e??0,t.f)),Yt=i(4,S),Bt=i(5,S),Gt=i(8,t=>C(t.b,t.i)),Wt=N(0,"<label><input type=radio name=accordion-control> <!></label>","D c%l",jt);function Ht(t){D(t.b),T(t.b,d(d(a({content:Rt(t),summary:a({content:Ot(t)})}),{content:wt(t),summary:a({content:Ut(t)})}),{content:Lt(t),summary:a({content:zt(t)})})),x(t.b,"Accordion Menu"),Gt(t,Nt(t)),Wt(t,[3,0,1])}const Jt=i(3,t=>{I(t.b,t.d.class),E(t.b,t.d.size),A(t.b,(({a11yText:e,class:o,item:r,open:p,openChange:_,size:b,...u})=>u)(t.d)),Yt(t,t.d.open),Bt(t,t.d.openChange)});function Nt(t){return e=>{j(t,parseInt(e))}}const Pt=f("JJcSEP_",kt,Mt,Ht,Jt),Zt=`import { type Input as AccordionInput } from "<evo-accordion>";
export interface Input extends AccordionInput<number> {}

<let/open=input.open ?? 0 valueChange=input.openChange>

<div>
  <for|i| until=3>
    <label>
      <input
        type="radio"
        name="accordion-control"
        value=i
        checkedValue:parseInt:=open>
      \${" "}\${i}
    </label>
  </for>
</div>

<evo-accordion ...input open:=open a11yText="Accordion Menu">
  <@item>
    <@summary>Item 1</@summary>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </@item>
  <@item>
    <@summary>Item 2</@summary>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </@item>
  <@item>
    <@summary>Item 3</@summary>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </@item>
</evo-accordion>
`,ae={title:"navigation & disclosure/evo-accordion",component:ft,parameters:{docs:{description:{component:gt}}},argTypes:{size:{options:["regular (default)","large"],control:"inline-radio"},item:{"@":{"<evo-details> attributes":{description:"All attributes and event handlers from [the `<evo-details>` tag](?path=/story/navigation-disclosure-evo-details--docs) will be passed through to `<@item>`, except `open`"}}},open:{controllable:!0,control:"number",table:{type:{summary:"number | number[]"}}},"<ul> attributes":{description:"All attributes and event handlers from [the native HTML `<ul>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul) will be passed through"}}},l=M(At,Tt),m=M(Pt,Zt);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledCode)",...m.parameters?.docs?.source}}};const oe=["Default","Controlled"];export{m as Controlled,l as Default,oe as __namedExportsOrder,ae as default};
