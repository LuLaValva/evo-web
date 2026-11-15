import{b as O}from"./utils-DyU2_5R1.js";import{a as z,b as i,c as F,d as L,h as j,e as q,f as Z,w as I,v as $,u as N,p as Q,t as V,g as J,r as K,k as C}from"./dom-x1z4vtvC.js";import{$ as Y,a as tt,b as at,c as et}from"./index-BoCxi-ng.js";import"./iframe-cyLTEVRG.js";import"./preload-helper-PPVm8Dsz.js";/* empty css             */const U=["teal","light-teal","green","lime","yellow","orange","magenta","pink"];function nt(t,a){if(a)return a;let e=0,n,o;if(t&&t.length>0)for(o=0;o<t.length;o++)n=t.charCodeAt(o),e=(e<<5)-e+n,e|=0;const s=U.length,r=Math.abs(e)%s;return U[r]}const it=Y,ot=(t=>`/${t}&`)(tt);function st(t){at(t.a)}const rt=(t,a)=>et(t.a,{...a,_name:"avatar-signed-out",_type:"icon",_symbol:'<symbol viewbox="0 0 40 40" id=icon-avatar-signed-out><circle cx=20 cy=20 r=20 fill="var(--color-background-secondary, #F7F7F7)"></circle><circle cx=20 cy=17.5 r=8.333 fill="var(--color-foreground-secondary, #707070)"></circle><path d="M7.67 35.748c2-4.84 6.767-8.248 12.33-8.248s10.33 3.407 12.33 8.249A19.914 19.914 0 0 1 20 40a19.914 19.914 0 0 1-12.33-4.252Z" fill="var(--color-foreground-secondary, #707070)"></path></symbol>'}),m="<div role=img></div>",g=" b",d=()=>{},ct=t=>{st(t.a),rt(t.a,{})},lt=J(0),B=I(0,1,t=>lt(t,t._.j)),mt=B,H=I(0,2,t=>$(t.a,t._.i.charAt(0).toUpperCase())),gt=H,dt=L("epMxUla",t=>j(t,"a")),P=I(0,0,t=>{F(t,"a",t._.g,{alt:1,"on-load":1}),dt(t)}),ut=t=>{P._(t),G._(t)},_t=L("R1UbqDB",t=>K(t.a,"load",function(a,e){X(t._,e.naturalWidth/e.naturalHeight),t._.h&&t._.h(a,e)})),G=I(0,0,_t),pt=(t,a)=>Q(t.a,"aria-label",a),u=(t,a)=>pt(t,a!==void 0?a:"avatar"),k=q(17,t=>Z(t.a,["avatar",t.q==="fit"&&"avatar--fit",t.d,t.e&&`avatar--${t.e}`,t.i&&!t.g&&`avatar--${nt(t.i,t.f)}`]),5),ht=i(16,k),X=N(15,t=>ht(t,t.p&&(t.p<3/4||t.p>4/3)?"fit":"cover")),_=(t,a)=>X(t,a),p=i(3,k),h=i(4,k),y=i(5,k),yt=V(0,"<img alt>"," b",ut,"<!><!><!>","b%c",mt," "," b",gt,it,(t=>`/${t}&`)(ot),ct),M=q(10,t=>yt(t,t.g?0:t.j?1:t.i?2:3),2),v=i(6,t=>{ft(t,t.g?.onLoad),k(t),M(t),P(t)}),b=i(8,t=>{k(t),M(t),H(t)}),vt=L("T6hefez",t=>j(t,"a")),f=i(13,t=>{F(t,"a",t.n,{"aria-label":1,role:1,class:1}),vt(t)}),T=i(9,t=>{M(t),B(t)}),bt=(t,a)=>{(({a11yText:e,class:n,color:o,content:s,image:r,knownAspectRatio:x,size:w,username:l,...c})=>f(t,c))(a),p(t,a.class),h(t,a.size),y(t,a.color),v(t,a.image),b(t,a.username),T(t,a.content),_(t,a.knownAspectRatio),u(t,a.a11yText)},ft=i(7,G),Tt=z("iX0aQoX",m,g,d,bt),xt=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,wt=m,kt=(t=>`/${t}&`)(g);function St(t){d(t.a),u(t.a,"Signed in as Elizabeth"),y(t.a,"teal"),b(t.a,"Elizabeth")}const zt=i(2,t=>{p(t.a,t.c.class),T(t.a,t.c.content),v(t.a,t.c.image),_(t.a,t.c.knownAspectRatio),h(t.a,t.c.size),f(t.a,(({a11yText:a,class:e,color:n,content:o,image:s,knownAspectRatio:r,size:x,username:w,...l})=>l)(t.c))}),Dt=z("GNkF45z",wt,kt,St,zt),Rt=`<evo-avatar
    ...input
    a11yText="Signed in as Elizabeth"
    color="teal"
    username="Elizabeth"
/>
`,At=m,Et=(t=>`/${t}&`)(g);function Ct(t){d(t.a),v(t.a,C({src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"}))}const Ot=i(2,t=>{const a={a11yText:"Signed in as Doggy",...t.c};u(t.a,a.a11yText),p(t.a,a.class),y(t.a,a.color),T(t.a,a.content),_(t.a,a.knownAspectRatio),h(t.a,a.size),b(t.a,a.username),f(t.a,(({a11yText:e,class:n,color:o,content:s,image:r,knownAspectRatio:x,size:w,username:l,...c})=>c)(a))}),It=z("gnuZvT6",At,Et,Ct,Ot),Lt=`<evo-avatar a11yText="Signed in as Doggy" ...input>
    <@image
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
    />
</evo-avatar>
`,Mt=((t,a,e)=>`<div>${t}</div><div>${a}</div><div>${e}</div>`)(m,m,m),Wt=((t,a,e)=>`D/${t}&lD/${a}&lD/${e}&l`)(g,g,g);function Ut(t){d(t.a),v(t.a,C({src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"})),d(t.b),v(t.b,C({src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile3.png"})),d(t.c),v(t.c,C({src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile4.png"}))}const Ft=i(4,t=>{const a={a11yText:"Signed in as Doggy",...t.e};u(t.a,a.a11yText),p(t.a,a.class),y(t.a,a.color),T(t.a,a.content),_(t.a,a.knownAspectRatio),h(t.a,a.size),b(t.a,a.username),f(t.a,(({a11yText:o,class:s,color:r,content:x,image:w,knownAspectRatio:l,size:c,username:W,...S})=>S)(a));const e={a11yText:"Signed in as Doggy",...t.e};u(t.b,e.a11yText),p(t.b,e.class),y(t.b,e.color),T(t.b,e.content),_(t.b,e.knownAspectRatio),h(t.b,e.size),b(t.b,e.username),f(t.b,(({a11yText:o,class:s,color:r,content:x,image:w,knownAspectRatio:l,size:c,username:W,...S})=>S)(e));const n={a11yText:"Signed in as Doggy",...t.e};u(t.c,n.a11yText),p(t.c,n.class),y(t.c,n.color),T(t.c,n.content),_(t.c,n.knownAspectRatio),h(t.c,n.size),b(t.c,n.username),f(t.c,(({a11yText:o,class:s,color:r,content:x,image:w,knownAspectRatio:l,size:c,username:W,...S})=>S)(n))}),jt=z("Aqu94TA",Mt,Wt,Ut,Ft),qt=`<div>
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
`,Bt=m,Ht=(t=>`/${t}&`)(g);function Pt(t){d(t.a)}const Gt=i(2,t=>{const a={a11yText:"Signed out",...t.c};u(t.a,a.a11yText),p(t.a,a.class),y(t.a,a.color),T(t.a,a.content),v(t.a,a.image),_(t.a,a.knownAspectRatio),h(t.a,a.size),b(t.a,a.username),f(t.a,(({a11yText:e,class:n,color:o,content:s,image:r,knownAspectRatio:x,size:w,username:l,...c})=>c)(a))}),Xt=z("GdmTmI_",Bt,Ht,Pt,Gt),Zt=`<evo-avatar a11yText="Signed out" ...input/>
`,Yt={title:"graphics & icons/evo-avatar",component:Tt,parameters:{docs:{description:{component:xt}}},argTypes:{content:{},color:{type:"string",options:["teal","light-teal","green","lime","yellow","orange","magenta","pink"],control:"select",description:"The color to color the background. This can be only used in the non icon/image case. This is used simply as an override to the username hash"},size:{type:"string",options:["32","40","48","56","64","96","128"],control:"select",description:"The pixel size of the avatar. Can only be specific sizes",table:{defaultValue:{summary:"48"}}},username:{type:"string",control:"text",description:"The username to display. If there is no body, then this will determine what the content is. If there is no username passed, then user is signed out. Based on the username, the icon will change colors and show the first letter if there is no user profile pic."},a11yText:{type:{name:"string",required:!0},control:"text",description:'The label to describe the users state as well as their user name. Usually in the format of "Signed in as Bob" or "Signed out". May be set to `null` only if accessibility is provided through other means.'},knownAspectRatio:{type:"number",control:"number",description:"Optional, as aspect ratio will be calculated when the image loads on the client. This can be passed to help prevent a flash of incorrectly styled content before the image loads"},image:{description:"An optional image. Should be passed alongside `knownAspectRatio`, but if not aspect ratio will be automatically adjusted after the image loads.","@":{"<img> attributes":{description:"All attributes and event handlers from [the native `<img>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) will be passed through to `<@image>`, except `alt`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through, except `role`"}}},D=O(Dt,Rt,{a11yText:"Signed in - as Elizabeth",username:"Elizabeth",color:"teal"}),R=O(It,Lt,{a11yText:"Signed in - as Doggy",username:"Doggy"}),A=O(jt,qt,{a11yText:"Signed in - as Doggy",username:"Doggy"}),E=O(Xt,Zt,{a11yText:"Signed out"});D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
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
