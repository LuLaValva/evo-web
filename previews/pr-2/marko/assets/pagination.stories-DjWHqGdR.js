import{b as S}from"./utils-DyU2_5R1.js";import{a as h,_ as e,o as g,v as Z,b as a,c as Tt,f as j,n as Ct,u as q,d as Q,h as kt,p as U,y as wt,t as z,w as X,$ as It,e as m,s as b,I as $t,g as V,z as G,k as _,j as o,D as K,V as F}from"./dom-x1z4vtvC.js";import{b as Y,c as J,$ as tt,a as nt}from"./index-C-FiRbVN.js";import{g as pt,j as Mt,h as Rt,k as Dt,b as Pt,c as Et,$ as Ht,a as Lt,f as St,i as zt,d as Ot,e as Bt}from"./evo-icon-overflow-horizontal-24-BY8vIwf9.js";import"./iframe-cyLTEVRG.js";/* empty css             *//* empty css                    */import"./index-D_aI6N9n.js";import"./index-CxqitZvT.js";import"./evo-icon-spinner-24-BoeIciOn.js";import"./index-BoCxi-ng.js";import"./evo-icon-chevron-down-16-C8FdJKZA.js";import"./index-BpjoVTYo.js";import"./preload-helper-PPVm8Dsz.js";const At=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-pagination
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

The \`<evo-pagination>\` is a tag used to create a pagination navigation. It will display up to 9 page links.

**Note:** If you want to have client side or ajax based navigation then you should omit the \`href\` attribute on each item. This will cause each item to be \`<button>\` instead of an \`<a>\`.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-evo-pagination)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-evo-pagination)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-pagination/examples)
`;function Nt(t){const n=t.style.width;t.style.width="100vw";const s=t.offsetWidth;return t.style.width=n,s}typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;const v="<nav role=navigation><span aria-live=polite role=status><!></span><!><ol class=pagination__items></ol><!></nav>",x=" E%l%b b%l",Wt=9,et=5,Zt=t=>{Pt(t.a),Et(t.a,{})},jt=e("QiCMrci",Mt,(t=>`/${t}&`)(pt),Zt),at=g(5,t=>j(t.a,["pagination__item",t._._.f]),t=>t._._),qt=t=>{at(t),Ot(t.b),Bt(t.b,{})},it=g(5,t=>j(t.a,["pagination__item",t._._.f]),t=>t._._),Ut=it,Gt=t=>{Ht(t.a),Lt(t.a,{})},Qt=e("HfLD5uL",Dt,(t=>`/${t}&`)(Rt),Gt),Xt=z(0,"<span role=separator></span>"," b",Ut,(t=>`<span role=separator>${t}</span>`)(zt),(t=>` D/${t}&l`)(St),qt),ot=g(24,t=>Xt(t,t._._.y?0:1),t=>t._._),Vt=t=>{ot(t),rt(t),lt(t)},st=m(1,t=>U(t.a,"hidden",t._._.a5||t._._.a1===t._.M)),rt=g(27,t=>{t._._.a1,t._.M,st(t)},t=>t._._),lt=g(31,st,t=>t._._),Kt=z(0,"<li></li>"," b",Vt),ct=m(7,t=>Kt(t,t._.a0===t.M||t._.a1===t.M?0:1)),_t=G(3,ct),Ft=t=>{_t._(t),ut._(t),dt._(t)},ut=G(3,ct),dt=G(3,t=>U(t.b,"hidden",t._.a6(t.M))),Yt=V(2),Jt=(t,n)=>{en(t,n?.class),Yt(t,n?.href?"a":"button",()=>({...n,class:["pagination__item",n?.class],"aria-current":n?.current&&"page"}))},tn=(t,n)=>Jt(t,n[0]),nn=b(it,at),en=a(5,nn),mt=g(17,t=>Z(t.a,t._.r)),an=mt,on=e("fSTk3DE"," "," b",an),gt=X(4,0,t=>tt(t.a,{...t._.n,class:["pagination__next",t._.n?.href?"icon-link":"icon-btn",t._.n?.class],a11yText:t._.n?.a11yText||"Next Page",style:[t._.n?.style,{"min-width":"40"}],content:jt(t)})),sn=t=>{gt._(t),nt(t.a)},ft=X(2,0,t=>tt(t.a,{...t._.m,class:["pagination__previous",t._.m?.href?"icon-link":"icon-btn",t._.m?.class],a11yText:t._.m?.a11yText||"Previous Page",style:[t._.m?.style,{"min-width":"40"}],content:Qt(t)})),rn=t=>{ft._(t),nt(t.a)},ln=V(1,on),ht=m(34,t=>ln(t,t.q,()=>({id:t.a7,class:"clipped"}))),cn=a(16,ht),y=(t,n)=>cn(t,n!==void 0?n:"h2"),_n=b(mt),un=a(17,_n),T=(t,n)=>un(t,n!==void 0?n:"Results Pagination - Page 1"),dn=Q("RkSqX6k",t=>{t.w(),window.addEventListener("resize",t.w,{signal:$t(t,0)})}),mn=a(22,t=>{It(t,0),dn(t)}),bt=q(18,t=>mn(t,Sn(t))),gn=(t,n)=>{$n(t,n.start),pn(t,n.end),Rn(t,n.hideDots)},C=m(37,t=>gn(t,(()=>{let n=!1,s=!1;const r=t.u.findIndex(f=>f.current),u=Math.floor(t.t/2);let l=r-u,c=r+u;return l<=0?(c=t.t-1,l=0):c>=t.z?(c=t.z,l=t.z-(t.t-1)):t.t%2===0&&l++,t.x&&(r+u>=t.z||c>=t.z?n=!0:r<=c-2?c-=2:(l+=1,c-=1)),t.y&&(r-u<=0?s=!0:r>=l-1?l+=2:(c-=1,l-=1)),{start:l,end:c,hideDots:n,hideLeadingDots:s}})()),4),vt=q(19,C);function k(t){bt(t,0),vt(t,et)}const fn=a(20,t=>{xn(t,t.u.length),C(t)}),hn=a(32,dt),O=m(36,t=>hn(t,zn(t)),3),bn=a(26,t=>{O(t),_t(t)}),xt=m(35,t=>bn(t,t.x?t.z:-1)),vn=a(25,t=>{xt(t),C(t)}),xn=(t,n)=>vn(t,n-1),yn=wt(3,"<!><!><li><!></li>","b%b D%l",Ft,tn),w=(t,n)=>{fn(t,[...n||[]]),yn(t,[n])},Tn=a(23,t=>{xt(t),C(t)}),Cn=b(rt),kn=a(27,t=>{O(t),ut(t),Cn(t)}),wn=b(ot),In=a(24,t=>{kn(t,t.y?1:-1),C(t),wn(t)}),I=(t,n)=>{Tn(t,n==="show-last"||n==="overflow"),In(t,n==="overflow")},$n=a(29,O),pn=a(30,O),Mn=b(lt),Rn=a(31,Mn),Dn=a(33,t=>{U(t.a,"aria-labelledby",t.a7),ht(t)}),$=(t,n)=>Dn(t,n||Ct(t)),p=(t,n)=>j(t.a,["pagination",n]),Pn=Q("g10$TAR",t=>kt(t,"a")),M=a(15,t=>{Tt(t,"a",t.p,{role:1,class:1,"aria-labelledby":1}),Pn(t)}),En=z(2,(t=>`<!>${t}<!>`)(J),(t=>`b/${t}&b`)(Y),rn),R=a(12,t=>{En(t,t.m?0:1),ft(t)}),Hn=z(4,(t=>`<!>${t}<!>`)(J),(t=>`b/${t}&b`)(Y),sn),D=a(13,t=>{Hn(t,t.n?0:1),gt(t)}),Ln=(t,n)=>{(({a11yCurrentText:s,a11yHeadingTag:r,class:u,id:l,item:c,next:f,prev:A,variant:N,...d})=>M(t,d))(n),p(t,n.class),$(t,n.id),y(t,n.a11yHeadingTag),I(t,n.variant),w(t,n.item),R(t,n.prev),D(t,n.next),T(t,n.a11yCurrentText)};function Sn(t){return function(){if(!t.s){const n=t.d.querySelectorAll("li");for(let s=0;s<n.length;s++){const r=n[s];if(r.offsetWidth){bt(t,r.offsetWidth);break}}}vt(t,Math.max(et,Math.min(Wt,Math.floor(Nt(t.a)/t.s)-2)))}}function zn(t){return function(n){return(n<t.a3||n>t.a4)&&t.a0!==n&&t.a1-1!==n}}const On=h("Whgt0yh",v,x,k,Ln),Bn=v,An=(t=>`/${t}&`)(x),Nn=e("X91qwaF","9","b"),Wn=e("bLdtqju","8","b"),Zn=e("mBs7mXz","7","b"),jn=e("sl$ljEZ","6","b"),qn=e("vmTCzc8","5","b"),Un=e("lfGr1h4","4","b"),Gn=e("xPIb_95","3","b"),Qn=e("TNUvDhb","2","b"),Xn=e("w1hwQRn","1","b");function Vn(t){k(t.a),R(t.a,_({a11yText:"Previous",href:"#",disabled:!0})),w(t.a,o(o(o(o(o(o(o(o(_({href:"#",current:!0,content:Xn(t)}),{href:"#",content:Qn(t)}),{href:"#",content:Gn(t)}),{href:"#",content:Un(t)}),{href:"#",content:qn(t)}),{href:"#",content:jn(t)}),{href:"#",content:Zn(t)}),{href:"#",content:Wn(t)}),{href:"#",content:Nn(t)})),D(t.a,_({a11yText:"Next",href:"#"})),T(t.a,"Results — Page 1"),y(t.a),p(t.a),$(t.a),I(t.a),M(t.a,{})}const Kn=h("bLUGQRp",Bn,An,Vn),Fn=`<evo-pagination a11yCurrentText="Results — Page 1">
    <@prev a11yText="Previous" href="#" disabled/>
    <@item href="#" current>
        1
    </@item>
    <@item href="#">
        2
    </@item>
    <@item href="#">
        3
    </@item>
    <@item href="#">
        4
    </@item>
    <@item href="#">
        5
    </@item>
    <@item href="#">
        6
    </@item>
    <@item href="#">
        7
    </@item>
    <@item href="#">
        8
    </@item>
    <@item href="#">
        9
    </@item>
    <@next a11yText="Next" href="#"/>
</evo-pagination>
`,Yn=v,Jn=(t=>`/${t}&`)(x),te=e("E8ukzj7","9","b"),ne=e("WKeh8IQ","8","b"),ee=e("U75fUxV","7","b"),ae=e("O9L_Kwg","6","b"),ie=e("Fs0o$ME","5","b"),oe=e("qlN$GP8","4","b"),se=e("TH91IT7","3","b"),re=e("lmZ1TmY","2","b"),le=e("NuQWmXv","1","b");function ce(t){k(t.a),R(t.a,_({a11yText:"Previous",disabled:!0})),w(t.a,o(o(o(o(o(o(o(o(_({current:!0,onClick:ye,content:le(t)}),{onClick:xe,content:re(t)}),{onClick:ve,content:se(t)}),{onClick:be,content:oe(t)}),{onClick:he,content:ie(t)}),{onClick:fe,content:ae(t)}),{onClick:ge,content:ee(t)}),{onClick:me,content:ne(t)}),{onClick:de,content:te(t)})),D(t.a,_({a11yText:"Next",onClick:ue})),p(t.a,"example-05")}const _e=a(2,t=>{const n={a11yCurrentText:"Results — Page 1",...t.c};T(t.a,n.a11yCurrentText),y(t.a,n.a11yHeadingTag),$(t.a,n.id),I(t.a,n.variant),M(t.a,(({a11yCurrentText:s,a11yHeadingTag:r,class:u,id:l,item:c,next:f,prev:A,variant:N,...d})=>d)(n))});function ue(){console.log("next")}function de(){console.log(9)}function me(){console.log(8)}function ge(){console.log(7)}function fe(){console.log(6)}function he(){console.log(5)}function be(){console.log(4)}function ve(){console.log(3)}function xe(){console.log(2)}function ye(){console.log(1)}const Te=h("KpXQncR",Yn,Jn,ce,_e),Ce=`<evo-pagination a11yCurrentText="Results — Page 1"
    ...input
    class="example-05">
    <@prev a11yText="Previous" disabled/>
    <@item current onClick() { console.log(1); }>
        1
    </@item>
    <@item onClick() { console.log(2); }>2</@item>
    <@item onClick() { console.log(3); }>3</@item>
    <@item onClick() { console.log(4); }>4</@item>
    <@item onClick() { console.log(5); }>5</@item>
    <@item onClick() { console.log(6); }>6</@item>
    <@item onClick() { console.log(7); }>7</@item>
    <@item onClick() { console.log(8); }>8</@item>
    <@item onClick() { console.log(9); }>9</@item>
    <@next a11yText="Next" onClick() { console.log("next"); }/>
</evo-pagination>
`,ke=v,we=(t=>`/${t}&`)(x),W=15,Ie=K(e("n$vm0ZD"," "," b"),{6(t){Z(t.a,t.g)}}),yt=m(4,t=>{const n={a11yCurrentText:`Results Pagination - Page ${t.d}`,...t.c};T(t.a,n.a11yCurrentText),y(t.a,n.a11yHeadingTag),p(t.a,n.class),$(t.a,n.id),I(t.a,n.variant),M(t.a,(({a11yCurrentText:s,a11yHeadingTag:r,class:u,id:l,item:c,next:f,prev:A,variant:N,...d})=>d)(n))}),B=q(3,t=>{R(t.a,_({a11yText:"previous",disabled:t.d===0,onClick:De(t)})),D(t.a,_({a11yText:"next",disabled:t.d===W,onClick:Re(t)}));let n;F(W,1,1,s=>{n=o(n,{current:s===t.d,onClick:Me(t),content:Ie(t,{6:s})})}),w(t.a,n),yt(t)});function $e(t){k(t.a),B(t,0)}const pe=a(2,yt);function Me(t){return function(){B(t,i)}}function Re(t){return function(){B(t,Math.min(t.d+1,W))}}function De(t){return function(){B(t,Math.max(t.d-1,0))}}const Pe=h("I3LKEnr",ke,we,$e,pe),Ee=`static const SIZE = 15;

<let/current=0>

<evo-pagination
    a11yCurrentText=\`Results Pagination - Page \${current}\`
    ...input
>
    <@prev a11yText="previous" disabled=(current === 0) onClick() {
        current = Math.max(current - 1, 0);
    }/>
    <for|i| from=1 to=SIZE>
        <@item current=(i === current) onClick() {
            current = i;
        }>
            \${i}
        </@item>
    </for>
    <@next a11yText="next" disabled=(current === SIZE) onClick() {
        current = Math.min(current + 1, SIZE);
    }/>
</evo-pagination>
`,He=v,Le=(t=>`/${t}&`)(x),Se=K(e("GF9rBVz"," "," b"),{4(t){Z(t.a,t.e)}}),ze=e("Y8YiB_x","1","b");function Oe(t){k(t.a),R(t.a,_({a11yText:"Previous",disabled:!0})),D(t.a,_({a11yText:"Next"}));let n;n=o(n,{current:!0,content:ze(t)}),F(50,2,1,s=>{n=o(n,{content:Se(t,{4:s})})}),w(t.a,n)}const Be=a(2,t=>{const n={a11yCurrentText:"Results — Page 1",...t.c};T(t.a,n.a11yCurrentText),y(t.a,n.a11yHeadingTag),p(t.a,n.class),$(t.a,n.id),I(t.a,n.variant),M(t.a,(({a11yCurrentText:s,a11yHeadingTag:r,class:u,id:l,item:c,next:f,prev:A,variant:N,...d})=>d)(n))}),Ae=h("vzlDAxw",He,Le,Oe,Be),Ne=`<evo-pagination a11yCurrentText="Results — Page 1" ...input>
    <@prev a11yText="Previous" disabled/>
    <@item current>1</@item>
    <for|i| from=2 to=50>
      <@item>\${i}</@item>
    </for>
    <@next a11yText="Next"/>
</evo-pagination>
`,na={title:"navigation & disclosure/evo-pagination",component:On,parameters:{docs:{description:{component:At}}},argTypes:{a11yCurrentText:{type:{name:"string",required:!0},control:"text",description:"Localized description for the current page (e.g. Results of Page 1)"},a11yHeadingTag:{type:"string",control:"text",description:"HTML tag to use for the a11y heading",table:{defaultValue:{summary:"h2"}}},item:{description:"Attribute tag representing a pagination item","@":{current:{type:"boolean",control:"boolean",description:"Indicates that this item is the current page"},href:{type:"string",control:"string",description:"When present, switch to `<a>` instead of `<button>`"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) when `href` is present)"}}},prev:{description:"Attribute tag for the previous button","@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@prev>`"}}},next:{description:"Attribute tag for the next button","@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@next>`"}}},variant:{type:"string",options:["show-last","show-range","overflow"],control:"inline-radio",description:"If `show-last` then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible.",table:{defaultValue:{summary:"show-range"}}},"<nav> attributes":{description:"All attributes and event handlers from [the native HTML `<nav>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav) will be passed through"}}},P=S(Kn,Fn),E=S(Te,Ce),H=S(Pe,Ee),L=S(Ae,Ne);P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:"buildExtensionTemplate(BasicLinksTemplate, BasicLinksCode)",...P.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ButtonsTemplate, ButtonsCode)",...E.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:"buildExtensionTemplate(InteractiveTemplate, InteractiveCode)",...H.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ManyItemsTemplate, ManyItemsCode)",...L.parameters?.docs?.source}}};const ea=["Links","Buttons","Interactive","ManyItems"];export{E as Buttons,H as Interactive,P as Links,L as ManyItems,ea as __namedExportsOrder,na as default};
