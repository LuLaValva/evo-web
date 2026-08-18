import{b as L}from"./utils-DyU2_5R1.js";import{a as h,_ as e,o as g,v as Z,b as a,c as Tt,f as j,n as Ct,u as U,d as Q,h as kt,p as q,y as It,t as O,w as X,$ as $t,e as d,s as b,I as wt,g as K,z as G,k as _,j as o,D as F,V}from"./dom-ByZf3MQk.js";import{b as Y,c as J,$ as tt,a as nt}from"./index-DO3pdl0Q.js";import{g as Mt,j as Rt,h as pt,k as Dt,b as Pt,c as Et,$ as Ht,a as St,f as Lt,i as Ot,d as zt,e as Bt}from"./evo-icon-overflow-horizontal-24-BgzX3gC-.js";import"./iframe-EsWVLFv_.js";/* empty css             *//* empty css                    */import"./index-Bz-e3gKr.js";import"./index-VCYgT6qA.js";import"./evo-icon-spinner-24-fKp9ZYWc.js";import"./index-SLqM2JFj.js";import"./evo-icon-chevron-down-16-B7IB9ME0.js";import"./index-_ZERrm0Z.js";import"./preload-helper-PPVm8Dsz.js";const Nt=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;function Wt(t){const n=t.style.width;t.style.width="100vw";const s=t.offsetWidth;return t.style.width=n,s}typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;const x="<nav role=navigation><span aria-live=polite role=status><!></span><!><ol class=pagination__items></ol><!></nav>",v=" E%l%b b%l",At=9,et=5,Zt=t=>{Pt(t.a),Et(t.a,{})},jt=e("QiCMrci",Rt,(t=>`/${t}&`)(Mt),Zt),at=g(5,t=>j(t.a,["pagination__item",t._._.f]),t=>t._._),Ut=t=>{at(t),zt(t.b),Bt(t.b,{})},ot=g(5,t=>j(t.a,["pagination__item",t._._.f]),t=>t._._),qt=ot,Gt=t=>{Ht(t.a),St(t.a,{})},Qt=e("HfLD5uL",Dt,(t=>`/${t}&`)(pt),Gt),Xt=O(0,"<span role=separator></span>"," b",qt,(t=>`<span role=separator>${t}</span>`)(Ot),(t=>` D/${t}&l`)(Lt),Ut),it=g(24,t=>Xt(t,t._._.y?0:1),t=>t._._),Kt=t=>{it(t),rt(t),lt(t)},st=d(1,t=>q(t.a,"hidden",t._._.a5||t._._.a1===t._.M)),rt=g(27,t=>{t._._.a1,t._.M,st(t)},t=>t._._),lt=g(31,st,t=>t._._),Ft=O(0,"<li></li>"," b",Kt),ct=d(7,t=>Ft(t,t._.a0===t.M||t._.a1===t.M?0:1)),_t=G(3,ct),Vt=t=>{_t._(t),ut._(t),mt._(t)},ut=G(3,ct),mt=G(3,t=>q(t.b,"hidden",t._.a6(t.M))),Yt=K(2),Jt=(t,n)=>{en(t,n?.class),Yt(t,n?.href?"a":"button",()=>({...n,class:["pagination__item",n?.class],"aria-current":n?.current&&"page"}))},tn=(t,n)=>Jt(t,n[0]),nn=b(ot,at),en=a(5,nn),dt=g(17,t=>Z(t.a,t._.r)),an=dt,on=e("fSTk3DE"," "," b",an),gt=X(4,0,t=>tt(t.a,{...t._.n,class:["pagination__next",t._.n?.href?"icon-link":"icon-btn",t._.n?.class],a11yText:t._.n?.a11yText||"Next Page",style:[t._.n?.style,{"min-width":"40"}],content:jt(t)})),sn=t=>{gt._(t),nt(t.a)},ft=X(2,0,t=>tt(t.a,{...t._.m,class:["pagination__previous",t._.m?.href?"icon-link":"icon-btn",t._.m?.class],a11yText:t._.m?.a11yText||"Previous Page",style:[t._.m?.style,{"min-width":"40"}],content:Qt(t)})),rn=t=>{ft._(t),nt(t.a)},ln=K(1,on),ht=d(34,t=>ln(t,t.q,()=>({id:t.a7,class:"clipped"}))),cn=a(16,ht),y=(t,n)=>cn(t,n!==void 0?n:"h2"),_n=b(dt),un=a(17,_n),T=(t,n)=>un(t,n!==void 0?n:"Results Pagination - Page 1"),mn=Q("RkSqX6k",t=>{t.w(),window.addEventListener("resize",t.w,{signal:wt(t,0)})}),dn=a(22,t=>{$t(t,0),mn(t)}),bt=U(18,t=>dn(t,Ln(t))),gn=(t,n)=>{wn(t,n.start),Mn(t,n.end),pn(t,n.hideDots)},C=d(37,t=>gn(t,(()=>{let n=!1,s=!1;const r=t.u.findIndex(f=>f.current),u=Math.floor(t.t/2);let l=r-u,c=r+u;return l<=0?(c=t.t-1,l=0):c>=t.z?(c=t.z,l=t.z-(t.t-1)):t.t%2===0&&l++,t.x&&(r+u>=t.z||c>=t.z?n=!0:r<=c-2?c-=2:(l+=1,c-=1)),t.y&&(r-u<=0?s=!0:r>=l-1?l+=2:(c-=1,l-=1)),{start:l,end:c,hideDots:n,hideLeadingDots:s}})()),4),xt=U(19,C);function k(t){bt(t,0),xt(t,et)}const fn=a(20,t=>{vn(t,t.u.length),C(t)}),hn=a(32,mt),z=d(36,t=>hn(t,On(t)),3),bn=a(26,t=>{z(t),_t(t)}),vt=d(35,t=>bn(t,t.x?t.z:-1)),xn=a(25,t=>{vt(t),C(t)}),vn=(t,n)=>xn(t,n-1),yn=It(3,"<!><!><li><!></li>","b%b D%l",Vt,tn),I=(t,n)=>{fn(t,[...n||[]]),yn(t,[n])},Tn=a(23,t=>{vt(t),C(t)}),Cn=b(rt),kn=a(27,t=>{z(t),ut(t),Cn(t)}),In=b(it),$n=a(24,t=>{kn(t,t.y?1:-1),C(t),In(t)}),$=(t,n)=>{Tn(t,n==="show-last"||n==="overflow"),$n(t,n==="overflow")},wn=a(29,z),Mn=a(30,z),Rn=b(lt),pn=a(31,Rn),Dn=a(33,t=>{q(t.a,"aria-labelledby",t.a7),ht(t)}),w=(t,n)=>Dn(t,n||Ct(t)),M=(t,n)=>j(t.a,["pagination",n]),Pn=Q("g10$TAR",t=>kt(t,"a")),R=a(15,t=>{Tt(t,"a",t.p,{role:1,class:1,"aria-labelledby":1}),Pn(t)}),En=O(2,(t=>`<!>${t}<!>`)(J),(t=>`b/${t}&b`)(Y),rn),p=a(12,t=>{En(t,t.m?0:1),ft(t)}),Hn=O(4,(t=>`<!>${t}<!>`)(J),(t=>`b/${t}&b`)(Y),sn),D=a(13,t=>{Hn(t,t.n?0:1),gt(t)}),Sn=(t,n)=>{(({a11yCurrentText:s,a11yHeadingTag:r,class:u,id:l,item:c,next:f,prev:N,variant:W,...m})=>R(t,m))(n),M(t,n.class),w(t,n.id),y(t,n.a11yHeadingTag),$(t,n.variant),I(t,n.item),p(t,n.prev),D(t,n.next),T(t,n.a11yCurrentText)};function Ln(t){return function(){if(!t.s){const n=t.d.querySelectorAll("li");for(let s=0;s<n.length;s++){const r=n[s];if(r.offsetWidth){bt(t,r.offsetWidth);break}}}xt(t,Math.max(et,Math.min(At,Math.floor(Wt(t.a)/t.s)-2)))}}function On(t){return function(n){return(n<t.a3||n>t.a4)&&t.a0!==n&&t.a1-1!==n}}const zn=h("Whgt0yh",x,v,k,Sn),Bn=x,Nn=(t=>`/${t}&`)(v),Wn=e("X91qwaF","9","b"),An=e("bLdtqju","8","b"),Zn=e("mBs7mXz","7","b"),jn=e("sl$ljEZ","6","b"),Un=e("vmTCzc8","5","b"),qn=e("lfGr1h4","4","b"),Gn=e("xPIb_95","3","b"),Qn=e("TNUvDhb","2","b"),Xn=e("w1hwQRn","1","b");function Kn(t){k(t.a),p(t.a,_({a11yText:"Previous",href:"#",disabled:!0})),I(t.a,o(o(o(o(o(o(o(o(_({href:"#",current:!0,content:Xn(t)}),{href:"#",content:Qn(t)}),{href:"#",content:Gn(t)}),{href:"#",content:qn(t)}),{href:"#",content:Un(t)}),{href:"#",content:jn(t)}),{href:"#",content:Zn(t)}),{href:"#",content:An(t)}),{href:"#",content:Wn(t)})),D(t.a,_({a11yText:"Next",href:"#"})),T(t.a,"Results — Page 1"),y(t.a),M(t.a),w(t.a),$(t.a),R(t.a,{})}const Fn=h("bLUGQRp",Bn,Nn,Kn),Vn=`<evo-pagination a11yCurrentText="Results — Page 1">
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
`,Yn=x,Jn=(t=>`/${t}&`)(v),te=e("E8ukzj7","9","b"),ne=e("WKeh8IQ","8","b"),ee=e("U75fUxV","7","b"),ae=e("O9L_Kwg","6","b"),oe=e("Fs0o$ME","5","b"),ie=e("qlN$GP8","4","b"),se=e("TH91IT7","3","b"),re=e("lmZ1TmY","2","b"),le=e("NuQWmXv","1","b");function ce(t){k(t.a),p(t.a,_({a11yText:"Previous",disabled:!0})),I(t.a,o(o(o(o(o(o(o(o(_({current:!0,onClick:ye,content:le(t)}),{onClick:ve,content:re(t)}),{onClick:xe,content:se(t)}),{onClick:be,content:ie(t)}),{onClick:he,content:oe(t)}),{onClick:fe,content:ae(t)}),{onClick:ge,content:ee(t)}),{onClick:de,content:ne(t)}),{onClick:me,content:te(t)})),D(t.a,_({a11yText:"Next",onClick:ue})),M(t.a,"example-05")}const _e=a(2,t=>{const n={a11yCurrentText:"Results — Page 1",...t.c};T(t.a,n.a11yCurrentText),y(t.a,n.a11yHeadingTag),w(t.a,n.id),$(t.a,n.variant),R(t.a,(({a11yCurrentText:s,a11yHeadingTag:r,class:u,id:l,item:c,next:f,prev:N,variant:W,...m})=>m)(n))});function ue(){console.log("next")}function me(){console.log(9)}function de(){console.log(8)}function ge(){console.log(7)}function fe(){console.log(6)}function he(){console.log(5)}function be(){console.log(4)}function xe(){console.log(3)}function ve(){console.log(2)}function ye(){console.log(1)}const Te=h("KpXQncR",Yn,Jn,ce,_e),Ce=`<evo-pagination a11yCurrentText="Results — Page 1"
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
`,ke=x,Ie=(t=>`/${t}&`)(v),A=15,$e=F(e("n$vm0ZD"," "," b"),{6(t){Z(t.a,t.g)}}),yt=d(4,t=>{const n={a11yCurrentText:`Results Pagination - Page ${t.d}`,...t.c};T(t.a,n.a11yCurrentText),y(t.a,n.a11yHeadingTag),M(t.a,n.class),w(t.a,n.id),$(t.a,n.variant),R(t.a,(({a11yCurrentText:s,a11yHeadingTag:r,class:u,id:l,item:c,next:f,prev:N,variant:W,...m})=>m)(n))}),B=U(3,t=>{p(t.a,_({a11yText:"previous",disabled:t.d===0,onClick:De(t)})),D(t.a,_({a11yText:"next",disabled:t.d===A,onClick:pe(t)}));let n;V(A,1,1,s=>{n=o(n,{current:s===t.d,onClick:Re(t),content:$e(t,{6:s})})}),I(t.a,n),yt(t)});function we(t){k(t.a),B(t,0)}const Me=a(2,yt);function Re(t){return function(){B(t,i)}}function pe(t){return function(){B(t,Math.min(t.d+1,A))}}function De(t){return function(){B(t,Math.max(t.d-1,0))}}const Pe=h("I3LKEnr",ke,Ie,we,Me),Ee=`static const SIZE = 15;

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
`,He=x,Se=(t=>`/${t}&`)(v),Le=F(e("GF9rBVz"," "," b"),{4(t){Z(t.a,t.e)}}),Oe=e("Y8YiB_x","1","b");function ze(t){k(t.a),p(t.a,_({a11yText:"Previous",disabled:!0})),D(t.a,_({a11yText:"Next"}));let n;n=o(n,{current:!0,content:Oe(t)}),V(50,2,1,s=>{n=o(n,{content:Le(t,{4:s})})}),I(t.a,n)}const Be=a(2,t=>{const n={a11yCurrentText:"Results — Page 1",...t.c};T(t.a,n.a11yCurrentText),y(t.a,n.a11yHeadingTag),M(t.a,n.class),w(t.a,n.id),$(t.a,n.variant),R(t.a,(({a11yCurrentText:s,a11yHeadingTag:r,class:u,id:l,item:c,next:f,prev:N,variant:W,...m})=>m)(n))}),Ne=h("vzlDAxw",He,Se,ze,Be),We=`<evo-pagination a11yCurrentText="Results — Page 1" ...input>
    <@prev a11yText="Previous" disabled/>
    <@item current>1</@item>
    <for|i| from=2 to=50>
      <@item>\${i}</@item>
    </for>
    <@next a11yText="Next"/>
</evo-pagination>
`,na={title:"navigation & disclosure/evo-pagination",component:zn,parameters:{docs:{description:{component:Nt}}},argTypes:{a11yCurrentText:{control:"text"},a11yHeadingTag:{control:"text"},item:{"@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) when `href` is present)"}}},prev:{"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@prev>`"}}},next:{"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@next>`"}}},variant:{options:["show-last","show-range","overflow"],control:"inline-radio"},"<nav> attributes":{description:"All attributes and event handlers from [the native HTML `<nav>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav) will be passed through"}}},P=L(Fn,Vn),E=L(Te,Ce),H=L(Pe,Ee),S=L(Ne,We);P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:"buildExtensionTemplate(BasicLinksTemplate, BasicLinksCode)",...P.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ButtonsTemplate, ButtonsCode)",...E.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:"buildExtensionTemplate(InteractiveTemplate, InteractiveCode)",...H.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ManyItemsTemplate, ManyItemsCode)",...S.parameters?.docs?.source}}};const ea=["Links","Buttons","Interactive","ManyItems"];export{E as Buttons,H as Interactive,P as Links,S as ManyItems,ea as __namedExportsOrder,na as default};
