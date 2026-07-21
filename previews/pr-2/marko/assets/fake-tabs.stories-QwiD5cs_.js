import{a as m,b as a,c as q,d as M,h as $,e as x,f as D,y as P,g as O,z,p as R,x as j,_ as n,j as c,k as N,i as F}from"./dom-C0MY0u5h.js";/* empty css             */import{b as U}from"./utils-DyU2_5R1.js";import"./iframe-BkqRzvDk.js";import"./preload-helper-PPVm8Dsz.js";const H=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,d="<div><ul class=fake-tabs__items></ul><div class=fake-tabs__content><div class=fake-tabs__panel><div class=fake-tabs__cell><div><!></div></div></div></div></div>",_=" D bG%p",h=()=>{},E=x(7,t=>R(t.b,"aria-current",t._.m===t.M&&t._.p)),L=z(1,E),Z=t=>{L._(t),A._(t)},A=z(1,E),V=(t,e)=>D(t.a,[e,"fake-tabs__item"]),I=M("X2$X7VA",t=>$(t,"b")),B=a(6,t=>{j(t,"b",t.g,{"aria-current":1}),I(t)}),J=(t,e)=>K(t,e[0]),K=(t,e)=>{(({class:i,href:l,...s})=>B(t,s))(e),V(t,e.class)},W=a(12,L),p=(t,e)=>W(t,e!==void 0?e:0),S=x(14,t=>D(t.a,["fake-tabs",t.n==="large"&&"fake-tabs--large",t.g])),X=a(13,S),f=(t,e)=>X(t,e!==void 0?e:"regular"),G=a(15,A),w=(t,e)=>G(t,e===!1?"true":"page"),v=a(6,S),Y=M("w0LJvvL",t=>$(t,"a")),g=a(11,t=>{q(t,"a",t.l,{class:1}),Y(t)}),Q=P(1,"<li><a></a></li>"," D l",Z,J),T=(t,e)=>Q(t,[e||[]]),tt=O(2),y=(t,e)=>tt(t,e),et=(t,e)=>{(({class:i,content:l,selected:s,size:k,tab:C,tabMatchesCurrentUrl:b,...u})=>g(t,u))(e),p(t,e.selected),v(t,e.class),f(t,e.size),T(t,e.tab),w(t,e.tabMatchesCurrentUrl),y(t,e.content)},at=m("Tg3NfKL",d,_,h,et),nt=d,st=(t=>`/${t}&`)(_),ot=n("EBuMcOR","Tab 3","b"),rt=n("UxYHrLb","Tab 2","b"),ct=n("Ed3N9jO","Tab 1","b"),it=F("kmv5ySr","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare, quam at lacinia pretium, lacus urna luctus nisi, eget molestie massa tortor id lacus. Aenean ac fringilla lacus. Fusce vel dui ex. Vivamus luctus egestas nulla, non hendrerit purus luctus at. Maecenas vel diam enim. Pellentesque quam neque, porttitor tincidunt vestibulum at, dapibus sit amet tortor.</p>","b");function lt(t){h(t.a),T(t.a,c(c(N({href:"https://www.ebay.com/",content:ct(t)}),{href:"https://www.ebay.com/",content:rt(t)}),{href:"https://www.ebay.com/",content:ot(t)})),y(t.a,it(t))}const bt=a(2,t=>{const e={selected:1,...t.c};v(t.a,e.class),p(t.a,e.selected),f(t.a,e.size),w(t.a,e.tabMatchesCurrentUrl),g(t.a,(({class:i,content:l,selected:s,size:k,tab:C,tabMatchesCurrentUrl:b,...u})=>u)(e))}),ut=m("fANoZVM",nt,st,lt,bt),mt=`<evo-fake-tabs selected=1 ...input>
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
`,dt=d,_t=(t=>`/${t}&`)(_),ht=n("xijjKZ5","Tab 3","b"),pt=n("ywmJFkI","Tab 2","b"),ft=n("DDvOC5p","Tab 1","b");function wt(t){h(t.a),T(t.a,c(c(N({href:"https://www.ebay.com/",content:ft(t)}),{href:"https://www.ebay.com/",content:pt(t)}),{href:"https://www.ebay.com/",content:ht(t)}))}const vt=a(2,t=>{v(t.a,t.c.class),y(t.a,t.c.content),p(t.a,t.c.selected),f(t.a,t.c.size),w(t.a,t.c.tabMatchesCurrentUrl),g(t.a,(({class:e,content:i,selected:l,size:s,tab:k,tabMatchesCurrentUrl:C,...b})=>b)(t.c))}),gt=m("FZ8tf_Z",dt,_t,wt,vt),Tt=`<evo-fake-tabs ...input>
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
`,xt={title:"navigation & disclosure/evo-fake-tabs",component:at,parameters:{docs:{description:{component:H}}},argTypes:{selected:{type:"number",control:"number",description:"Zero-based index of selected tab tab and panel"},tabMatchesCurrentUrl:{type:"boolean",control:"boolean",description:'Specify whether the href of the currently active fake tab matches the current window url. Default is true. This property is used to configure the underlying aria-current attribute (i.e. a value of "page" (default) or "true").'},tab:{description:"The tab element. This takes the same attributes as an anchor tag which navigates the user to a new page. ","@":{"<a> attributes":{description:"All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},o=U(ut,mt),r=U(gt,Tt);o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"buildExtensionTemplate(NoPanelTemplate, NoPanelTemplateCode)",...r.parameters?.docs?.source}}};const Dt=["Default","NoPanel"];export{o as Default,r as NoPanel,Dt as __namedExportsOrder,xt as default};
