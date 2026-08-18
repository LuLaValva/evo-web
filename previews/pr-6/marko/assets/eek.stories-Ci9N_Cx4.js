import{a as O,b as B,c as $,p,v as V,d as nn,h as an,e as X,f as tn}from"./dom-ByZf3MQk.js";import{$ as Y,b as o,c as s,a as c}from"./index-SLqM2JFj.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";/* empty css             */function P(n,E,G={},l="",x=!1){const d=l+"	",{body:v,attrs:u}=gn(E,G,d);let k=n;return x&&(k=`@${G[k]||k}`),`<${k+u+(v?`>
${v.replace(/^|\n/gm,`$&${d}`)}
</${k}>`:"/>")}`}function gn(n,E,G){let l="",x="";for(const d in n)if(Object.prototype.hasOwnProperty.call(n,d)&&d!=="renderBody"){const v=n[d],u=d.replace(/([a-z])([A-Z])/g,(k,b,T)=>`${b}-${T.toLowerCase()}`);if(Array.isArray(v))for(const k of v)x+=P(u,k,E,G,!0);else v&&typeof v=="object"?d==="spread"?Object.keys(v).forEach(k=>{l+=` ${k}=${JSON.stringify(v[k])}`}):x+=P(u,v,E,G,!0):l+=` ${u}=${JSON.stringify(v)}`}return n.renderBody&&(x+=n.renderBody),{attrs:l,body:x}}const rn=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-eek
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

EU energy label

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-eek)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-eek)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-eek/examples)
`,en=Y,An=(n=>`/${n}&`)(c);function mn(n){o(n.a)}const Rn=(n,E)=>s(n.a,{...E,_name:"eek-range-arrow",_type:"icon",_symbol:'<symbol viewbox="0 0 5 6" id=icon-eek-range-arrow><path fill-rule=evenodd clip-rule=evenodd d="M2.32203 0.108736L1.0202 2.6473C0.951945 2.78038 1.04859 2.93856 1.19816 2.93856H1.95692V5.99786H3.04303V2.93856H3.80182C3.95139 2.93856 4.04804 2.78038 3.97979 2.6473L2.67796 0.108736C2.60361 -0.0362453 2.39638 -0.0362455 2.32203 0.108736Z" fill=black></path></symbol>'}),yn=Y,En=(n=>`/${n}&`)(c);function xn(n){o(n.a)}const ln=(n,E)=>s(n.a,{...E,_name:"eek-arrow",_type:"icon",_symbol:'<symbol viewbox="0 0 11 28" id=icon-eek-arrow><path d="M0 27.75H1.13239C1.76009 27.75 2.35161 27.4145 2.73099 26.8434L10.342 15.3851C10.886 14.5662 10.886 13.4338 10.342 12.6149L2.73099 1.15661C2.35161 0.585476 1.76009 0.25 1.13239 0.25H3.09944e-06" stroke=black stroke-width=1></path></symbol>'}),a=((n,E)=>`<div role=img><div class=eek__container aria-hidden=true><span class=eek__rating-range><span> </span>${n}<span> </span></span><span class=eek__rating> </span></div>${E}</div>`)(en,yn),t=((n,E)=>` G l/${n}&D mD m/${E}&l`)(An,En),dn={"A+++":["D","E","G"],"A++":["E","G"],"A+":["F","G"],A:["G"]};function Gn(n,E,G){const l=dn[n];if(!(l&&l.indexOf(E)>-1))return null;let x=n,d=1;for(;x!==G;){if(d++,E===x)return null;x.length>1?x=x.slice(0,x.length-1):x=String.fromCharCode(x.charCodeAt(0)+1)}return d>7?7:d}const K=X(16,n=>tn(n.a,["eek",n.p?`eek--rating-${n.p}`:null,n.k==="large"&&"eek--large",n.i]),2),vn=B(15,K),Q=X(17,n=>vn(n,Gn(n.l,n.m,n.n)),2),g=B(11,n=>{V(n.b,n.l),Q(n)}),i=B(12,n=>{V(n.d,n.m),Q(n)}),r=B(13,n=>{V(n.e,n.n),Q(n)}),e=(n,E)=>p(n.a,"aria-label",E),A=B(8,K),m=B(10,K),kn=nn("x$z5h4U",n=>an(n,"a")),R=B(14,n=>{$(n,"a",n.o,{"aria-label":1,role:1,class:1}),kn(n)});function y(n){mn(n.c),Rn(n.c,{}),xn(n.f),ln(n.f,{})}const un=(n,E)=>{(({a11yText:G,class:l,max:x,min:d,rating:v,size:u,...k})=>R(n,k))(E),A(n,E.class),e(n,E.a11yText),m(n,E.size),g(n,E.max),i(n,E.min),r(n,E.rating)},bn=O("ZMyn0uA",a,t,y,un),Tn=((n,E,G,l,x,d,v,u,k,b,T,f,D,h,C,F,q,H,L,M,W,U,I,J,Z)=>`<div>${n}${E}${G}${l}${x}${d}${v}</div><div>${u}${k}${b}${T}${f}${D}${h}${C}</div><div>${F}${q}${H}${L}${M}${W}${U}${I}${J}${Z}</div>`)(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),fn=((n,E,G,l,x,d,v,u,k,b,T,f,D,h,C,F,q,H,L,M,W,U,I,J,Z)=>`D/${n}&/${E}&/${G}&/${l}&/${x}&/${d}&/${v}&lD/${u}&/${k}&/${b}&/${T}&/${f}&/${D}&/${h}&/${C}&lD/${F}&/${q}&/${H}&/${L}&/${M}&/${W}&/${U}&/${I}&/${J}&/${Z}&l`)(t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t);function Dn(n){y(n.a),g(n.a,"A+++"),i(n.a,"D"),r(n.a,"A+++"),e(n.a,"Energy Rating: A+++. Range A+++ - D"),A(n.a),m(n.a),R(n.a,{}),y(n.b),g(n.b,"A+++"),i(n.b,"D"),r(n.b,"A++"),e(n.b,"Energy Rating: A++. Range A+++ - D"),A(n.b),m(n.b),R(n.b,{}),y(n.c),g(n.c,"A+++"),i(n.c,"D"),r(n.c,"A+"),e(n.c,"Energy Rating: A+. Range A+++ - D"),A(n.c),m(n.c),R(n.c,{}),y(n.d),g(n.d,"A+++"),i(n.d,"D"),r(n.d,"A"),e(n.d,"Energy Rating: A. Range A+++ - D"),A(n.d),m(n.d),R(n.d,{}),y(n.e),g(n.e,"A+++"),i(n.e,"D"),r(n.e,"B"),e(n.e,"Energy Rating: B. Range A+++ - D"),A(n.e),m(n.e),R(n.e,{}),y(n.f),g(n.f,"A+++"),i(n.f,"D"),r(n.f,"C"),e(n.f,"Energy Rating: C. Range A+++ - D"),A(n.f),m(n.f),R(n.f,{}),y(n.g),g(n.g,"A+++"),i(n.g,"D"),r(n.g,"D"),e(n.g,"Energy Rating: D. Range A+++ - D"),A(n.g),m(n.g),R(n.g,{}),y(n.h),g(n.h,"A+++"),i(n.h,"E"),r(n.h,"A+++"),e(n.h,"Energy Rating: A+++. Range A+++ - E"),A(n.h),m(n.h),R(n.h,{}),y(n.i),g(n.i,"A+++"),i(n.i,"E"),r(n.i,"A++"),e(n.i,"Energy Rating: A++. Range A+++ - E"),A(n.i),m(n.i),R(n.i,{}),y(n.j),g(n.j,"A+++"),i(n.j,"E"),r(n.j,"A+"),e(n.j,"Energy Rating: A+. Range A+++ - E"),A(n.j),m(n.j),R(n.j,{}),y(n.k),g(n.k,"A+++"),i(n.k,"E"),r(n.k,"A"),e(n.k,"Energy Rating: A. Range A+++ - E"),A(n.k),m(n.k),R(n.k,{}),y(n.l),g(n.l,"A+++"),i(n.l,"E"),r(n.l,"B"),e(n.l,"Energy Rating: B. Range A+++ - E"),A(n.l),m(n.l),R(n.l,{}),y(n.m),g(n.m,"A+++"),i(n.m,"E"),r(n.m,"C"),e(n.m,"Energy Rating: C. Range A+++ - E"),A(n.m),m(n.m),R(n.m,{}),y(n.n),g(n.n,"A+++"),i(n.n,"E"),r(n.n,"D"),e(n.n,"Energy Rating: D. Range A+++ - E"),A(n.n),m(n.n),R(n.n,{}),y(n.o),g(n.o,"A+++"),i(n.o,"E"),r(n.o,"E"),e(n.o,"Energy Rating: E. Range A+++ - E"),A(n.o),m(n.o),R(n.o,{}),y(n.p),g(n.p,"A+++"),i(n.p,"G"),r(n.p,"A+++"),e(n.p,"Energy Rating: A+++. Range A+++ - G"),A(n.p),m(n.p),R(n.p,{}),y(n.q),g(n.q,"A+++"),i(n.q,"G"),r(n.q,"A++"),e(n.q,"Energy Rating: A++. Range A+++ - G"),A(n.q),m(n.q),R(n.q,{}),y(n.r),g(n.r,"A+++"),i(n.r,"G"),r(n.r,"A+"),e(n.r,"Energy Rating: A+. Range A+++ - G"),A(n.r),m(n.r),R(n.r,{}),y(n.s),g(n.s,"A+++"),i(n.s,"G"),r(n.s,"A"),e(n.s,"Energy Rating: A. Range A+++ - G"),A(n.s),m(n.s),R(n.s,{}),y(n.t),g(n.t,"A+++"),i(n.t,"G"),r(n.t,"B"),e(n.t,"Energy Rating: B. Range A+++ - G"),A(n.t),m(n.t),R(n.t,{}),y(n.u),g(n.u,"A+++"),i(n.u,"G"),r(n.u,"C"),e(n.u,"Energy Rating: C. Range A+++ - G"),A(n.u),m(n.u),R(n.u,{}),y(n.v),g(n.v,"A+++"),i(n.v,"G"),r(n.v,"D"),e(n.v,"Energy Rating: D. Range A+++ - G"),A(n.v),m(n.v),R(n.v,{}),y(n.w),g(n.w,"A+++"),i(n.w,"G"),r(n.w,"E"),e(n.w,"Energy Rating: E. Range A+++ - G"),A(n.w),m(n.w),R(n.w,{}),y(n.x),g(n.x,"A+++"),i(n.x,"G"),r(n.x,"F"),e(n.x,"Energy Rating: F. Range A+++ - G"),A(n.x),m(n.x),R(n.x,{}),y(n.y),g(n.y,"A+++"),i(n.y,"G"),r(n.y,"G"),e(n.y,"Energy Rating: G. Range A+++ - G"),A(n.y),m(n.y),R(n.y,{})}const hn=O("Jaa0oIa",Tn,fn,Dn),Cn=((n,E,G,l,x,d,v,u,k,b,T,f,D,h,C,F)=>`<div>${n}${E}${G}${l}${x}${d}${v}</div><div>${u}${k}${b}${T}${f}${D}${h}${C}${F}</div>`)(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),Fn=((n,E,G,l,x,d,v,u,k,b,T,f,D,h,C,F)=>`D/${n}&/${E}&/${G}&/${l}&/${x}&/${d}&/${v}&lD/${u}&/${k}&/${b}&/${T}&/${f}&/${D}&/${h}&/${C}&/${F}&l`)(t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t);function _n(n){y(n.a),g(n.a,"A++"),i(n.a,"E"),r(n.a,"A++"),e(n.a,"Energy Rating: A++. Range A++ - E"),A(n.a),m(n.a),R(n.a,{}),y(n.b),g(n.b,"A++"),i(n.b,"E"),r(n.b,"A+"),e(n.b,"Energy Rating: A+. Range A++ - E"),A(n.b),m(n.b),R(n.b,{}),y(n.c),g(n.c,"A++"),i(n.c,"E"),r(n.c,"A"),e(n.c,"Energy Rating: A. Range A++ - E"),A(n.c),m(n.c),R(n.c,{}),y(n.d),g(n.d,"A++"),i(n.d,"E"),r(n.d,"B"),e(n.d,"Energy Rating: B. Range A++ - E"),A(n.d),m(n.d),R(n.d,{}),y(n.e),g(n.e,"A++"),i(n.e,"E"),r(n.e,"C"),e(n.e,"Energy Rating: C. Range A++ - E"),A(n.e),m(n.e),R(n.e,{}),y(n.f),g(n.f,"A++"),i(n.f,"E"),r(n.f,"D"),e(n.f,"Energy Rating: D. Range A++ - E"),A(n.f),m(n.f),R(n.f,{}),y(n.g),g(n.g,"A++"),i(n.g,"E"),r(n.g,"E"),e(n.g,"Energy Rating: E. Range A++ - E"),A(n.g),m(n.g),R(n.g,{}),y(n.h),g(n.h,"A++"),i(n.h,"G"),r(n.h,"A++"),e(n.h,"Energy Rating: A++. Range A++ - G"),A(n.h),m(n.h),R(n.h,{}),y(n.i),g(n.i,"A++"),i(n.i,"G"),r(n.i,"A+"),e(n.i,"Energy Rating: A+. Range A++ - G"),A(n.i),m(n.i),R(n.i,{}),y(n.j),g(n.j,"A++"),i(n.j,"G"),r(n.j,"A"),e(n.j,"Energy Rating: A. Range A++ - G"),A(n.j),m(n.j),R(n.j,{}),y(n.k),g(n.k,"A++"),i(n.k,"G"),r(n.k,"B"),e(n.k,"Energy Rating: B. Range A++ - G"),A(n.k),m(n.k),R(n.k,{}),y(n.l),g(n.l,"A++"),i(n.l,"G"),r(n.l,"C"),e(n.l,"Energy Rating: C. Range A++ - G"),A(n.l),m(n.l),R(n.l,{}),y(n.m),g(n.m,"A++"),i(n.m,"G"),r(n.m,"D"),e(n.m,"Energy Rating: D. Range A++ - G"),A(n.m),m(n.m),R(n.m,{}),y(n.n),g(n.n,"A++"),i(n.n,"G"),r(n.n,"E"),e(n.n,"Energy Rating: E. Range A++ - G"),A(n.n),m(n.n),R(n.n,{}),y(n.o),g(n.o,"A++"),i(n.o,"G"),r(n.o,"F"),e(n.o,"Energy Rating: F. Range A++ - G"),A(n.o),m(n.o),R(n.o,{}),y(n.p),g(n.p,"A++"),i(n.p,"G"),r(n.p,"G"),e(n.p,"Energy Rating: G. Range A++ - G"),A(n.p),m(n.p),R(n.p,{})}const Bn=O("CTf6SyC",Cn,Fn,_n),wn=((n,E,G,l,x,d,v,u,k,b,T,f,D,h,C)=>`<div>${n}${E}${G}${l}${x}${d}${v}</div><div>${u}${k}${b}${T}${f}${D}${h}${C}</div>`)(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),jn=((n,E,G,l,x,d,v,u,k,b,T,f,D,h,C)=>`D/${n}&/${E}&/${G}&/${l}&/${x}&/${d}&/${v}&lD/${u}&/${k}&/${b}&/${T}&/${f}&/${D}&/${h}&/${C}&l`)(t,t,t,t,t,t,t,t,t,t,t,t,t,t,t);function Sn(n){y(n.a),g(n.a,"A+"),i(n.a,"F"),r(n.a,"A+"),e(n.a,"Energy Rating: A+. Range A+ - F"),A(n.a),m(n.a),R(n.a,{}),y(n.b),g(n.b,"A+"),i(n.b,"F"),r(n.b,"A"),e(n.b,"Energy Rating: A. Range A+ - F"),A(n.b),m(n.b),R(n.b,{}),y(n.c),g(n.c,"A+"),i(n.c,"F"),r(n.c,"B"),e(n.c,"Energy Rating: B. Range A+ - F"),A(n.c),m(n.c),R(n.c,{}),y(n.d),g(n.d,"A+"),i(n.d,"F"),r(n.d,"C"),e(n.d,"Energy Rating: C. Range A+ - F"),A(n.d),m(n.d),R(n.d,{}),y(n.e),g(n.e,"A+"),i(n.e,"F"),r(n.e,"D"),e(n.e,"Energy Rating: D. Range A+ - F"),A(n.e),m(n.e),R(n.e,{}),y(n.f),g(n.f,"A+"),i(n.f,"F"),r(n.f,"E"),e(n.f,"Energy Rating: E. Range A+ - F"),A(n.f),m(n.f),R(n.f,{}),y(n.g),g(n.g,"A+"),i(n.g,"F"),r(n.g,"F"),e(n.g,"Energy Rating: F. Range A+ - F"),A(n.g),m(n.g),R(n.g,{}),y(n.h),g(n.h,"A+"),i(n.h,"G"),r(n.h,"A+"),e(n.h,"Energy Rating: A+. Range A+ - G"),A(n.h),m(n.h),R(n.h,{}),y(n.i),g(n.i,"A+"),i(n.i,"G"),r(n.i,"A"),e(n.i,"Energy Rating: A. Range A+ - G"),A(n.i),m(n.i),R(n.i,{}),y(n.j),g(n.j,"A+"),i(n.j,"G"),r(n.j,"B"),e(n.j,"Energy Rating: B. Range A+ - G"),A(n.j),m(n.j),R(n.j,{}),y(n.k),g(n.k,"A+"),i(n.k,"G"),r(n.k,"C"),e(n.k,"Energy Rating: C. Range A+ - G"),A(n.k),m(n.k),R(n.k,{}),y(n.l),g(n.l,"A+"),i(n.l,"G"),r(n.l,"D"),e(n.l,"Energy Rating: D. Range A+ - G"),A(n.l),m(n.l),R(n.l,{}),y(n.m),g(n.m,"A+"),i(n.m,"G"),r(n.m,"E"),e(n.m,"Energy Rating: E. Range A+ - G"),A(n.m),m(n.m),R(n.m,{}),y(n.n),g(n.n,"A+"),i(n.n,"G"),r(n.n,"F"),e(n.n,"Energy Rating: F. Range A+ - G"),A(n.n),m(n.n),R(n.n,{}),y(n.o),g(n.o,"A+"),i(n.o,"G"),r(n.o,"G"),e(n.o,"Energy Rating: G. Range A+ - G"),A(n.o),m(n.o),R(n.o,{})}const Nn=O("G$R4G9u",wn,jn,Sn),On=((n,E,G,l,x,d,v)=>`<div>${n}${E}${G}${l}${x}${d}${v}</div>`)(a,a,a,a,a,a,a),zn=((n,E,G,l,x,d,v)=>`D/${n}&/${E}&/${G}&/${l}&/${x}&/${d}&/${v}&l`)(t,t,t,t,t,t,t);function qn(n){y(n.a),g(n.a,"A"),i(n.a,"G"),r(n.a,"A"),e(n.a,"Energy Rating: A. Range A - G"),A(n.a),m(n.a),R(n.a,{}),y(n.b),g(n.b,"A"),i(n.b,"G"),r(n.b,"B"),e(n.b,"Energy Rating: B. Range A - G"),A(n.b),m(n.b),R(n.b,{}),y(n.c),g(n.c,"A"),i(n.c,"G"),r(n.c,"C"),e(n.c,"Energy Rating: C. Range A - G"),A(n.c),m(n.c),R(n.c,{}),y(n.d),g(n.d,"A"),i(n.d,"G"),r(n.d,"D"),e(n.d,"Energy Rating: D. Range A - G"),A(n.d),m(n.d),R(n.d,{}),y(n.e),g(n.e,"A"),i(n.e,"G"),r(n.e,"E"),e(n.e,"Energy Rating: E. Range A - G"),A(n.e),m(n.e),R(n.e,{}),y(n.f),g(n.f,"A"),i(n.f,"G"),r(n.f,"F"),e(n.f,"Energy Rating: F. Range A - G"),A(n.f),m(n.f),R(n.f,{}),y(n.g),g(n.g,"A"),i(n.g,"G"),r(n.g,"G"),e(n.g,"Energy Rating: G. Range A - G"),A(n.g),m(n.g),R(n.g,{})}const Hn=O("a2yCjv9",On,zn,qn),Ln=((n,E,G,l)=>`<div>${n}${E}${G}${l}</div>`)(a,a,a,a),Mn=((n,E,G,l)=>`D/${n}&/${E}&/${G}&/${l}&l`)(t,t,t,t);function Wn(n){y(n.a),g(n.a,"B"),i(n.a,"G"),r(n.a,"D"),e(n.a,"Energy Rating: D. Range B - G"),A(n.a),m(n.a),R(n.a,{}),y(n.b),g(n.b,"A"),i(n.b,"G"),r(n.b,"A+++"),e(n.b,"Energy Rating: A+++. Range A - G"),A(n.b),m(n.b),R(n.b,{}),y(n.c),g(n.c,"A++"),i(n.c,"B"),r(n.c,"A++"),e(n.c,"Energy Rating: A++. Range A++ - B"),A(n.c),m(n.c),R(n.c,{}),y(n.d),g(n.d,"A+"),i(n.d,"B"),r(n.d,"A++"),e(n.d,"Energy Rating: A++. Range A+ - B"),A(n.d),m(n.d),R(n.d,{})}const Un=O("PFAU8N5",Ln,Mn,Wn),In=`<div>
    <evo-eek max="A+++" min="D" rating="A+++" a11yText="Energy Rating: A+++. Range A+++ - D"/>
    <evo-eek max="A+++" min="D" rating="A++" a11yText="Energy Rating: A++. Range A+++ - D"/>
    <evo-eek max="A+++" min="D" rating="A+" a11yText="Energy Rating: A+. Range A+++ - D"/>
    <evo-eek max="A+++" min="D" rating="A" a11yText="Energy Rating: A. Range A+++ - D"/>
    <evo-eek max="A+++" min="D" rating="B" a11yText="Energy Rating: B. Range A+++ - D"/>
    <evo-eek max="A+++" min="D" rating="C" a11yText="Energy Rating: C. Range A+++ - D"/>
    <evo-eek max="A+++" min="D" rating="D" a11yText="Energy Rating: D. Range A+++ - D"/>
</div>
<div>
    <evo-eek max="A+++" min="E" rating="A+++" a11yText="Energy Rating: A+++. Range A+++ - E"/>
    <evo-eek max="A+++" min="E" rating="A++" a11yText="Energy Rating: A++. Range A+++ - E"/>
    <evo-eek max="A+++" min="E" rating="A+" a11yText="Energy Rating: A+. Range A+++ - E"/>
    <evo-eek max="A+++" min="E" rating="A" a11yText="Energy Rating: A. Range A+++ - E"/>
    <evo-eek max="A+++" min="E" rating="B" a11yText="Energy Rating: B. Range A+++ - E"/>
    <evo-eek max="A+++" min="E" rating="C" a11yText="Energy Rating: C. Range A+++ - E"/>
    <evo-eek max="A+++" min="E" rating="D" a11yText="Energy Rating: D. Range A+++ - E"/>
    <evo-eek max="A+++" min="E" rating="E" a11yText="Energy Rating: E. Range A+++ - E"/>
</div>
<div>
    <evo-eek max="A+++" min="G" rating="A+++" a11yText="Energy Rating: A+++. Range A+++ - G"/>
    <evo-eek max="A+++" min="G" rating="A++" a11yText="Energy Rating: A++. Range A+++ - G"/>
    <evo-eek max="A+++" min="G" rating="A+" a11yText="Energy Rating: A+. Range A+++ - G"/>
    <evo-eek max="A+++" min="G" rating="A" a11yText="Energy Rating: A. Range A+++ - G"/>
    <evo-eek max="A+++" min="G" rating="B" a11yText="Energy Rating: B. Range A+++ - G"/>
    <evo-eek max="A+++" min="G" rating="C" a11yText="Energy Rating: C. Range A+++ - G"/>
    <evo-eek max="A+++" min="G" rating="D" a11yText="Energy Rating: D. Range A+++ - G"/>
    <evo-eek max="A+++" min="G" rating="E" a11yText="Energy Rating: E. Range A+++ - G"/>
    <evo-eek max="A+++" min="G" rating="F" a11yText="Energy Rating: F. Range A+++ - G"/>
    <evo-eek max="A+++" min="G" rating="G" a11yText="Energy Rating: G. Range A+++ - G"/>
</div>
`,Jn=`<div>
    <evo-eek max="A++" min="E" rating="A++" a11yText="Energy Rating: A++. Range A++ - E"/>
    <evo-eek max="A++" min="E" rating="A+" a11yText="Energy Rating: A+. Range A++ - E"/>
    <evo-eek max="A++" min="E" rating="A" a11yText="Energy Rating: A. Range A++ - E"/>
    <evo-eek max="A++" min="E" rating="B" a11yText="Energy Rating: B. Range A++ - E"/>
    <evo-eek max="A++" min="E" rating="C" a11yText="Energy Rating: C. Range A++ - E"/>
    <evo-eek max="A++" min="E" rating="D" a11yText="Energy Rating: D. Range A++ - E"/>
    <evo-eek max="A++" min="E" rating="E" a11yText="Energy Rating: E. Range A++ - E"/>
</div>
<div>
    <evo-eek max="A++" min="G" rating="A++" a11yText="Energy Rating: A++. Range A++ - G"/>
    <evo-eek max="A++" min="G" rating="A+" a11yText="Energy Rating: A+. Range A++ - G"/>
    <evo-eek max="A++" min="G" rating="A" a11yText="Energy Rating: A. Range A++ - G"/>
    <evo-eek max="A++" min="G" rating="B" a11yText="Energy Rating: B. Range A++ - G"/>
    <evo-eek max="A++" min="G" rating="C" a11yText="Energy Rating: C. Range A++ - G"/>
    <evo-eek max="A++" min="G" rating="D" a11yText="Energy Rating: D. Range A++ - G"/>
    <evo-eek max="A++" min="G" rating="E" a11yText="Energy Rating: E. Range A++ - G"/>
    <evo-eek max="A++" min="G" rating="F" a11yText="Energy Rating: F. Range A++ - G"/>
    <evo-eek max="A++" min="G" rating="G" a11yText="Energy Rating: G. Range A++ - G"/>
</div>
`,Zn=`<div>
    <evo-eek max="A+" min="F" rating="A+" a11yText="Energy Rating: A+. Range A+ - F"/>
    <evo-eek max="A+" min="F" rating="A" a11yText="Energy Rating: A. Range A+ - F"/>
    <evo-eek max="A+" min="F" rating="B" a11yText="Energy Rating: B. Range A+ - F"/>
    <evo-eek max="A+" min="F" rating="C" a11yText="Energy Rating: C. Range A+ - F"/>
    <evo-eek max="A+" min="F" rating="D" a11yText="Energy Rating: D. Range A+ - F"/>
    <evo-eek max="A+" min="F" rating="E" a11yText="Energy Rating: E. Range A+ - F"/>
    <evo-eek max="A+" min="F" rating="F" a11yText="Energy Rating: F. Range A+ - F"/>
</div>
<div>
    <evo-eek max="A+" min="G" rating="A+" a11yText="Energy Rating: A+. Range A+ - G"/>
    <evo-eek max="A+" min="G" rating="A" a11yText="Energy Rating: A. Range A+ - G"/>
    <evo-eek max="A+" min="G" rating="B" a11yText="Energy Rating: B. Range A+ - G"/>
    <evo-eek max="A+" min="G" rating="C" a11yText="Energy Rating: C. Range A+ - G"/>
    <evo-eek max="A+" min="G" rating="D" a11yText="Energy Rating: D. Range A+ - G"/>
    <evo-eek max="A+" min="G" rating="E" a11yText="Energy Rating: E. Range A+ - G"/>
    <evo-eek max="A+" min="G" rating="F" a11yText="Energy Rating: F. Range A+ - G"/>
    <evo-eek max="A+" min="G" rating="G" a11yText="Energy Rating: G. Range A+ - G"/>
</div>
`,Pn=`<div>
    <evo-eek max="A" min="G" rating="A" a11yText="Energy Rating: A. Range A - G"/>
    <evo-eek max="A" min="G" rating="B" a11yText="Energy Rating: B. Range A - G"/>
    <evo-eek max="A" min="G" rating="C" a11yText="Energy Rating: C. Range A - G"/>
    <evo-eek max="A" min="G" rating="D" a11yText="Energy Rating: D. Range A - G"/>
    <evo-eek max="A" min="G" rating="E" a11yText="Energy Rating: E. Range A - G"/>
    <evo-eek max="A" min="G" rating="F" a11yText="Energy Rating: F. Range A - G"/>
    <evo-eek max="A" min="G" rating="G" a11yText="Energy Rating: G. Range A - G"/>
</div>
`,Vn=`<div>
    <evo-eek max="B" min="G" rating="D" a11yText="Energy Rating: D. Range B - G"/>
    <evo-eek max="A" min="G" rating="A+++" a11yText="Energy Rating: A+++. Range A - G"/>
    <evo-eek max="A++" min="B" rating="A++" a11yText="Energy Rating: A++. Range A++ - B"/>
    <evo-eek max="A+" min="B" rating="A++" a11yText="Energy Rating: A++. Range A+ - B"/>
</div>
`,sn={title:"graphics & icons/evo-eek",component:bn,parameters:{docs:{description:{component:rn}}},argTypes:{a11yText:{control:"text"},size:{options:["regular (default)","large"],control:"inline-radio"},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},_=n=>({input:n});_.args={max:"A+++",min:"E",rating:"C"};_.parameters={docs:{source:{code:P("evo-eek",_.args)}}};const w=()=>({component:hn,name:"A+++"});w.storyName="A+++";w.parameters={controls:{hideNoControlsWarning:!0},docs:{source:{code:In}}};const j=()=>({component:Bn});j.storyName="A++";j.parameters={controls:{hideNoControlsWarning:!0},docs:{source:{code:Jn}}};const S=()=>({component:Nn,name:"A+"});S.storyName="A++";S.parameters={controls:{hideNoControlsWarning:!0},docs:{source:{code:Zn}}};const N=()=>({component:Hn,name:"A"});N.storyName="A";N.parameters={controls:{hideNoControlsWarning:!0},docs:{source:{code:Pn}}};const z=()=>({component:Un});z.parameters={controls:{hideNoControlsWarning:!0},docs:{source:{code:Vn}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => ({
  input: args
})`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => ({
  component: example1,
  name: "A+++"
})`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => ({
  component: example2
})`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => ({
  component: example3,
  name: "A+"
})`,...S.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => ({
  component: example4,
  name: "A"
})`,...N.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => ({
  component: example5
})`,...z.parameters?.docs?.source}}};const cn=["Default","exampleOne","exampleTwo","exampleThree","exampleFour","invalidCombinations"];export{_ as Default,cn as __namedExportsOrder,sn as default,N as exampleFour,w as exampleOne,S as exampleThree,j as exampleTwo,z as invalidCombinations};
