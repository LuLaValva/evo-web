import{b as M}from"./utils-DyU2_5R1.js";import{a as b,b as i,c as B,u as g,d as k,h as G,e as s,f as P,y as W,p as H,z as h,_ as n,j as d,k as a,O as J,v as N,A as Z,B as F}from"./dom-CIHBwv1V.js";import{$ as K,a as Q,b as X,c as tt,d as et,e as nt,f as it,g as at,h as ot,i as rt,j as ut}from"./index-Bcgg8Slv.js";import"./iframe-CfBr7C7U.js";import"./preload-helper-PPVm8Dsz.js";import"./evo-icon-chevron-down-16-C0ookNav.js";import"./index-DUawFjLf.js";/* empty css             */const v="<ul></ul>",y=" b",L=s(3,t=>{const e={...t.c,open:Array.isArray(t._.m)?t._.m.includes(t.M):t._.m===t.M,openChange:ft(t)};tt(t.a,e.alignment),et(t.a,e.class),nt(t.a,e.content),it(t.a,e.contentAs),at(t.a,e.leading),ot(t.a,e.size),rt(t.a,e.summary),ut(t.a,(({alignment:o,class:r,content:p,contentAs:_,leading:f,size:u,summary:z,...Y})=>Y)(e))}),U=h(0,L),st=t=>{U._(t),X(t.a)},lt=i(2,L),mt=(t,e)=>lt(t,e[0]),ct=(t,e)=>H(t.a,"aria-roledescription",e),q=(t,e)=>ct(t,e!==void 0?e:"accordion"),c=g(12,U),w=s(5,t=>c(t,t.d,t.e)),x=i(3,w),C=i(4,w),$=s(14,t=>P(t.a,["accordion",t.h==="large"&&"accordion--large",t.g,t.n&&"accordion--animated"]),2),O=g(13,$);function D(t){O(t,!1)}const I=i(6,$),T=i(7,$),dt=k("cZsXjKk",t=>G(t,"a")),E=i(10,t=>{B(t,"a",t.k,{"aria-roledescription":1,class:1}),dt(t)}),pt=W(0,(t=>`<li>${t}</li>`)(K),(t=>`D/${t}&l`)(Q),st,mt),A=(t,e)=>pt(t,[e]),_t=(t,e)=>{(({a11yText:o,class:r,item:p,open:_,openChange:f,size:u,...z})=>E(t,z))(e),x(t,e.open),C(t,e.openChange),I(t,e.class),T(t,e.size),A(t,e.item),q(t,e.a11yText)};function ft(t){return function(e){if(O(t._,!0),Array.isArray(t._.m)){const o=t._.m;e?o.includes(t.M)||c(t._,[...o,t.M]):c(t._,o.filter(r=>r!==t.M))}else c(t._,e?t.M:-1)}}const bt=b("h2nN9mM",v,y,D,_t),gt=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,ht=v,vt=(t=>`/${t}&`)(y),yt=n("u4_tWjA","Item 3","b"),qt=n("qOVVhkI","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","b"),xt=n("wYnrMZQ","Item 2","b"),Ct=n("khhbilj","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","b"),$t=n("fja7cd_","Item 1","b"),Dt=n("p_$vFGr","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","b");function It(t){D(t.a),A(t.a,d(d(a({content:Dt(t),summary:a({content:$t(t)})}),{content:Ct(t),summary:a({content:xt(t)})}),{content:qt(t),summary:a({content:yt(t)})})),q(t.a,"Accordion Menu")}const Tt=i(2,t=>{I(t.a,t.c.class),x(t.a,t.c.open),C(t.a,t.c.openChange),T(t.a,t.c.size),E(t.a,(({a11yText:e,class:o,item:r,open:p,openChange:_,size:f,...u})=>u)(t.c))}),Et=b("NhrB9Di",ht,vt,It,Tt),At=`<evo-accordion ...input a11yText="Accordion Menu">
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
`,zt=(t=>`<div></div>${t}`)(v),Mt=(t=>` b/${t}&`)(y),kt=n("f11OaRc","Item 3","b"),Lt=n("ApYd0Vm","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","b"),Ut=n("pjLGqns","Item 2","b"),wt=n("tvYy92h","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","b"),Ot=n("xfVGiU$","Item 1","b"),Rt=n("BYoV6SG","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","b"),R=s(3,t=>F(t,"a",t._.h,t._.i,t.M)),V=h(0,R),Vt=k("U_V3YPW",t=>Z(t,"a")),St=t=>{V._(t),jt._(t),N(t.b,t.M),Vt(t)},jt=h(0,R),S=g(7,t=>{x(t.b,t.h),V(t)}),j=s(6,t=>S(t,t.e??0,t.f)),Yt=i(4,j),Bt=i(5,j),Gt=i(8,t=>C(t.b,t.i)),Pt=J(0,"<label><input type=radio name=accordion-control> <!></label>","D c%l",St);function Wt(t){D(t.b),A(t.b,d(d(a({content:Rt(t),summary:a({content:Ot(t)})}),{content:wt(t),summary:a({content:Ut(t)})}),{content:Lt(t),summary:a({content:kt(t)})})),q(t.b,"Accordion Menu"),Gt(t,Jt(t)),Pt(t,[3,0,1])}const Ht=i(3,t=>{I(t.b,t.d.class),T(t.b,t.d.size),E(t.b,(({a11yText:e,class:o,item:r,open:p,openChange:_,size:f,...u})=>u)(t.d)),Yt(t,t.d.open),Bt(t,t.d.openChange)});function Jt(t){return e=>{S(t,parseInt(e))}}const Nt=b("JJcSEP_",zt,Mt,Wt,Ht),Zt=`import { type Input as AccordionInput } from "<evo-accordion>";
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
`,ae={title:"navigation & disclosure/evo-accordion",component:bt,parameters:{docs:{description:{component:gt}}},argTypes:{size:{type:"string",options:["regular (default)","large"],control:{type:"inline-radio"},description:"Size of the details"},a11yText:{type:{name:"string",required:!0},control:"text",description:"Localized role description to announce the component role for a11y users. May be set to `null` only if accessibility is provided through other means.",table:{defaultValue:{summary:"accordion"}}},item:{description:"Represents an [`<evo-details>` tag](?path=/story/navigation-disclosure-evo-details--default) to be used as part of the group.","@":{"<evo-details> attributes":{description:"All attributes and event handlers from [the `<evo-details>` tag](?path=/story/navigation-disclosure-evo-details--docs) will be passed through to `<@item>`, except `open`"}}},open:{controllable:!0,control:"number",description:"The index or indices of the open items. Pass a number if only one may be open at a time, or an array for multiple",table:{type:{summary:"number | number[]"}}},"<ul> attributes":{description:"All attributes and event handlers from [the native HTML `<ul>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul) will be passed through"}}},l=M(Et,At),m=M(Nt,Zt);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledCode)",...m.parameters?.docs?.source}}};const oe=["Default","Controlled"];export{m as Controlled,l as Default,oe as __namedExportsOrder,ae as default};
