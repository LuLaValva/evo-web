import{b as O}from"./utils-DyU2_5R1.js";import{a as z,b as i,c as U,d as L,h as H,e as P,f as Z,w as I,v as $,u as N,p as Q,t as J,g as K,r as V,k as C}from"./dom-ByZf3MQk.js";import{$ as Y,a as tt,b as at,c as et}from"./index-SLqM2JFj.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";/* empty css             */const F=["teal","light-teal","green","lime","yellow","orange","magenta","pink"];function nt(t,a){if(a)return a;let e=0,n,o;if(t&&t.length>0)for(o=0;o<t.length;o++)n=t.charCodeAt(o),e=(e<<5)-e+n,e|=0;const s=F.length,r=Math.abs(e)%s;return F[r]}const it=Y,ot=(t=>`/${t}&`)(tt);function st(t){at(t.a)}const rt=(t,a)=>et(t.a,{...a,_name:"avatar-signed-out",_type:"icon",_symbol:'<symbol viewbox="0 0 40 40" id=icon-avatar-signed-out><circle cx=20 cy=20 r=20 fill="var(--color-background-secondary, #F7F7F7)"></circle><circle cx=20 cy=17.5 r=8.333 fill="var(--color-foreground-secondary, #707070)"></circle><path d="M7.67 35.748c2-4.84 6.767-8.248 12.33-8.248s10.33 3.407 12.33 8.249A19.914 19.914 0 0 1 20 40a19.914 19.914 0 0 1-12.33-4.252Z" fill="var(--color-foreground-secondary, #707070)"></path></symbol>'}),g="<div role=img></div>",m=" b",d=()=>{},ct=t=>{st(t.a),rt(t.a,{})},lt=K(0),j=I(0,1,t=>lt(t,t._.j)),gt=j,q=I(0,2,t=>$(t.a,t._.i.charAt(0).toUpperCase())),mt=q,dt=L("epMxUla",t=>H(t,"a")),B=I(0,0,t=>{U(t,"a",t._.g,{alt:1,"on-load":1}),dt(t)}),ut=t=>{B._(t),G._(t)},_t=L("R1UbqDB",t=>V(t.a,"load",function(a,e){X(t._,e.naturalWidth/e.naturalHeight),t._.h&&t._.h(a,e)})),G=I(0,0,_t),vt=(t,a)=>Q(t.a,"aria-label",a),u=(t,a)=>vt(t,a!==void 0?a:"avatar"),w=P(17,t=>Z(t.a,["avatar",t.q==="fit"&&"avatar--fit",t.d,t.e&&`avatar--${t.e}`,t.i&&!t.g&&`avatar--${nt(t.i,t.f)}`]),5),pt=i(16,w),X=N(15,t=>pt(t,t.p&&(t.p<3/4||t.p>4/3)?"fit":"cover")),_=(t,a)=>X(t,a),v=i(3,w),p=i(4,w),y=i(5,w),yt=J(0,"<img alt>"," b",ut,"<!><!><!>","b%c",gt," "," b",mt,it,(t=>`/${t}&`)(ot),ct),W=P(10,t=>yt(t,t.g?0:t.j?1:t.i?2:3),2),b=i(6,t=>{Tt(t,t.g?.onLoad),w(t),W(t),B(t)}),h=i(8,t=>{w(t),W(t),q(t)}),bt=L("T6hefez",t=>H(t,"a")),T=i(13,t=>{U(t,"a",t.n,{"aria-label":1,role:1,class:1}),bt(t)}),f=i(9,t=>{W(t),j(t)}),ht=(t,a)=>{(({a11yText:e,class:n,color:o,content:s,image:r,knownAspectRatio:x,size:k,username:l,...c})=>T(t,c))(a),v(t,a.class),p(t,a.size),y(t,a.color),b(t,a.image),h(t,a.username),f(t,a.content),_(t,a.knownAspectRatio),u(t,a.a11yText)},Tt=i(7,G),ft=z("iX0aQoX",g,m,d,ht),xt=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-avatar
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

Avatar is a users badge which shows their current state, either signed out or signed in. It can take different colors or a profile pic.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-avatar)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-avatar)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-avatar/examples)
`,kt=g,wt=(t=>`/${t}&`)(m);function St(t){d(t.a),u(t.a,"Signed in as Elizabeth"),y(t.a,"teal"),h(t.a,"Elizabeth")}const zt=i(2,t=>{v(t.a,t.c.class),f(t.a,t.c.content),b(t.a,t.c.image),_(t.a,t.c.knownAspectRatio),p(t.a,t.c.size),T(t.a,(({a11yText:a,class:e,color:n,content:o,image:s,knownAspectRatio:r,size:x,username:k,...l})=>l)(t.c))}),Dt=z("GNkF45z",kt,wt,St,zt),Rt=`<evo-avatar
    ...input
    a11yText="Signed in as Elizabeth"
    color="teal"
    username="Elizabeth"
/>
`,At=g,Et=(t=>`/${t}&`)(m);function Ct(t){d(t.a),b(t.a,C({src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"}))}const Ot=i(2,t=>{const a={a11yText:"Signed in as Doggy",...t.c};u(t.a,a.a11yText),v(t.a,a.class),y(t.a,a.color),f(t.a,a.content),_(t.a,a.knownAspectRatio),p(t.a,a.size),h(t.a,a.username),T(t.a,(({a11yText:e,class:n,color:o,content:s,image:r,knownAspectRatio:x,size:k,username:l,...c})=>c)(a))}),It=z("gnuZvT6",At,Et,Ct,Ot),Lt=`<evo-avatar a11yText="Signed in as Doggy" ...input>
    <@image
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
    />
</evo-avatar>
`,Wt=((t,a,e)=>`<div>${t}</div><div>${a}</div><div>${e}</div>`)(g,g,g),Mt=((t,a,e)=>`D/${t}&lD/${a}&lD/${e}&l`)(m,m,m);function Ft(t){d(t.a),b(t.a,C({src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"})),d(t.b),b(t.b,C({src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile3.png"})),d(t.c),b(t.c,C({src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile4.png"}))}const Ut=i(4,t=>{const a={a11yText:"Signed in as Doggy",...t.e};u(t.a,a.a11yText),v(t.a,a.class),y(t.a,a.color),f(t.a,a.content),_(t.a,a.knownAspectRatio),p(t.a,a.size),h(t.a,a.username),T(t.a,(({a11yText:o,class:s,color:r,content:x,image:k,knownAspectRatio:l,size:c,username:M,...S})=>S)(a));const e={a11yText:"Signed in as Doggy",...t.e};u(t.b,e.a11yText),v(t.b,e.class),y(t.b,e.color),f(t.b,e.content),_(t.b,e.knownAspectRatio),p(t.b,e.size),h(t.b,e.username),T(t.b,(({a11yText:o,class:s,color:r,content:x,image:k,knownAspectRatio:l,size:c,username:M,...S})=>S)(e));const n={a11yText:"Signed in as Doggy",...t.e};u(t.c,n.a11yText),v(t.c,n.class),y(t.c,n.color),f(t.c,n.content),_(t.c,n.knownAspectRatio),p(t.c,n.size),h(t.c,n.username),T(t.c,(({a11yText:o,class:s,color:r,content:x,image:k,knownAspectRatio:l,size:c,username:M,...S})=>S)(n))}),Ht=z("Aqu94TA",Wt,Mt,Ft,Ut),Pt=`<div>
    <evo-avatar a11yText="Signed in as Doggy" ...input>
        <@image
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"
        />
    </evo-avatar>
</div>
<div>
    <evo-avatar a11yText="Signed in as Doggy" ...input>
        <@image
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile3.png"
        />
    </evo-avatar>
</div>
<div>
    <evo-avatar a11yText="Signed in as Doggy" ...input>
        <@image
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile4.png"
        />
    </evo-avatar>
</div>
`,jt=g,qt=(t=>`/${t}&`)(m);function Bt(t){d(t.a)}const Gt=i(2,t=>{const a={a11yText:"Signed out",...t.c};u(t.a,a.a11yText),v(t.a,a.class),y(t.a,a.color),f(t.a,a.content),b(t.a,a.image),_(t.a,a.knownAspectRatio),p(t.a,a.size),h(t.a,a.username),T(t.a,(({a11yText:e,class:n,color:o,content:s,image:r,knownAspectRatio:x,size:k,username:l,...c})=>c)(a))}),Xt=z("GdmTmI_",jt,qt,Bt,Gt),Zt=`<evo-avatar a11yText="Signed out" ...input/>
`,Yt={title:"graphics & icons/evo-avatar",component:ft,parameters:{docs:{description:{component:xt}}},argTypes:{content:{},color:{options:["teal","light-teal","green","lime","yellow","orange","magenta","pink"],control:"select"},size:{options:["32","40","48","56","64","96","128"],control:"select"},a11yText:{control:"text"},image:{"@":{"<img> attributes":{description:"All attributes and event handlers from [the native `<img>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) will be passed through to `<@image>`, except `alt`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through, except `role`"}}},D=O(Dt,Rt,{a11yText:"Signed in - as Elizabeth",username:"Elizabeth",color:"teal"}),R=O(It,Lt,{a11yText:"Signed in - as Doggy",username:"Doggy"}),A=O(Ht,Pt,{a11yText:"Signed in - as Doggy",username:"Doggy"}),E=O(Xt,Zt,{a11yText:"Signed out"});D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yText: "Signed in - as Elizabeth",
  username: "Elizabeth",
  color: "teal"
})`,...D.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`buildExtensionTemplate(imageTemplate, imageTemplateCode, {
  a11yText: "Signed in - as Doggy",
  username: "Doggy"
})`,...R.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`buildExtensionTemplate(autoImageTemplate, autoImageTemplateCode, {
  a11yText: "Signed in - as Doggy",
  username: "Doggy"
})`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`buildExtensionTemplate(signedOutTemplate, signedOutTemplateCode, {
  a11yText: "Signed out"
})`,...E.parameters?.docs?.source}}};const ta=["Default","WithImage","WithAutoPlacement","SignedOut"];export{D as Default,E as SignedOut,A as WithAutoPlacement,R as WithImage,ta as __namedExportsOrder,Yt as default};
