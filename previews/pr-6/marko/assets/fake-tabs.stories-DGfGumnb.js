import{a as m,b as e,c as P,d as $,h as M,e as x,f as D,y as S,g as O,z,p as R,x as j,_ as n,j as c,k as N,i as F}from"./dom-ByZf3MQk.js";/* empty css             */import{b as E}from"./utils-DyU2_5R1.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";const H=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-fake-tabs
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

Tabs which link to other pages. This can be used to deep link to other pages which switch the current tab.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-evo-fake-tabs)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-evo-fake-tabs)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-fake-tabs/examples)
`,_="<div><ul class=fake-tabs__items></ul><div class=fake-tabs__content><div class=fake-tabs__panel><div class=fake-tabs__cell><div><!></div></div></div></div></div>",d=" D bG%p",f=()=>{},L=x(7,t=>R(t.b,"aria-current",t._.m===t.M&&t._.p)),U=z(1,L),V=t=>{U._(t),A._(t)},A=z(1,L),Z=(t,a)=>D(t.a,[a,"fake-tabs__item"]),I=$("X2$X7VA",t=>M(t,"b")),B=e(6,t=>{j(t,"b",t.g,{"aria-current":1}),I(t)}),J=(t,a)=>K(t,a[0]),K=(t,a)=>{(({class:l,href:i,...s})=>B(t,s))(a),Z(t,a.class)},W=e(12,U),p=(t,a)=>W(t,a!==void 0?a:0),q=x(14,t=>D(t.a,["fake-tabs",t.n==="large"&&"fake-tabs--large",t.g])),X=e(13,q),h=(t,a)=>X(t,a!==void 0?a:"regular"),G=e(15,A),v=(t,a)=>G(t,a===!1?"true":"page"),w=e(6,q),Y=$("w0LJvvL",t=>M(t,"a")),g=e(11,t=>{P(t,"a",t.l,{class:1}),Y(t)}),Q=S(1,"<li><a></a></li>"," D l",V,J),T=(t,a)=>Q(t,[a||[]]),tt=O(2),k=(t,a)=>tt(t,a),at=(t,a)=>{(({class:l,content:i,selected:s,size:y,tab:C,tabMatchesCurrentUrl:b,...u})=>g(t,u))(a),p(t,a.selected),w(t,a.class),h(t,a.size),T(t,a.tab),v(t,a.tabMatchesCurrentUrl),k(t,a.content)},et=m("Tg3NfKL",_,d,f,at),nt=_,st=(t=>`/${t}&`)(d),ot=n("EBuMcOR","Tab 3","b"),rt=n("UxYHrLb","Tab 2","b"),ct=n("Ed3N9jO","Tab 1","b"),lt=F("kmv5ySr","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare, quam at lacinia pretium, lacus urna luctus nisi, eget molestie massa tortor id lacus. Aenean ac fringilla lacus. Fusce vel dui ex. Vivamus luctus egestas nulla, non hendrerit purus luctus at. Maecenas vel diam enim. Pellentesque quam neque, porttitor tincidunt vestibulum at, dapibus sit amet tortor.</p>","b");function it(t){f(t.a),T(t.a,c(c(N({href:"https://www.ebay.com/",content:ct(t)}),{href:"https://www.ebay.com/",content:rt(t)}),{href:"https://www.ebay.com/",content:ot(t)})),k(t.a,lt(t))}const bt=e(2,t=>{const a={selected:1,...t.c};w(t.a,a.class),p(t.a,a.selected),h(t.a,a.size),v(t.a,a.tabMatchesCurrentUrl),g(t.a,(({class:l,content:i,selected:s,size:y,tab:C,tabMatchesCurrentUrl:b,...u})=>u)(a))}),ut=m("fANoZVM",nt,st,it,bt),mt=`<evo-fake-tabs selected=1 ...input>
    <@tab href="https://www.ebay.com/">
        Tab 1
    </@tab>
    <@tab href="https://www.ebay.com/">
        Tab 2
    </@tab>
    <@tab href="https://www.ebay.com/">
        Tab 3
    </@tab>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare, quam at lacinia pretium, lacus urna luctus nisi, eget molestie massa tortor id lacus. Aenean ac fringilla lacus. Fusce vel dui ex. Vivamus luctus egestas nulla, non hendrerit purus luctus at. Maecenas vel diam enim. Pellentesque quam neque, porttitor tincidunt vestibulum at, dapibus sit amet tortor.
    </p>
</evo-fake-tabs>
`,_t=_,dt=(t=>`/${t}&`)(d),ft=n("xijjKZ5","Tab 3","b"),pt=n("ywmJFkI","Tab 2","b"),ht=n("DDvOC5p","Tab 1","b");function vt(t){f(t.a),T(t.a,c(c(N({href:"https://www.ebay.com/",content:ht(t)}),{href:"https://www.ebay.com/",content:pt(t)}),{href:"https://www.ebay.com/",content:ft(t)}))}const wt=e(2,t=>{w(t.a,t.c.class),k(t.a,t.c.content),p(t.a,t.c.selected),h(t.a,t.c.size),v(t.a,t.c.tabMatchesCurrentUrl),g(t.a,(({class:a,content:l,selected:i,size:s,tab:y,tabMatchesCurrentUrl:C,...b})=>b)(t.c))}),gt=m("FZ8tf_Z",_t,dt,vt,wt),Tt=`<evo-fake-tabs ...input>
    <@tab href="https://www.ebay.com/">
        Tab 1
    </@tab>
    <@tab href="https://www.ebay.com/">
        Tab 2
    </@tab>
    <@tab href="https://www.ebay.com/">
        Tab 3
    </@tab>
</evo-fake-tabs>
`,xt={title:"navigation & disclosure/evo-fake-tabs",component:et,parameters:{docs:{description:{component:H}}},argTypes:{tab:{"@":{"<a> attributes":{description:"All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},o=E(ut,mt),r=E(gt,Tt);o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"buildExtensionTemplate(NoPanelTemplate, NoPanelTemplateCode)",...r.parameters?.docs?.source}}};const Dt=["Default","NoPanel"];export{o as Default,r as NoPanel,Dt as __namedExportsOrder,xt as default};
