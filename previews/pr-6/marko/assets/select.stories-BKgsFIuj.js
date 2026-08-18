import{b as B}from"./utils-DyU2_5R1.js";import{a as b,_ as a,o as l,K as Ft,b as e,n as xt,u as K,e as A,f as Ct,C as Lt,y as ot,s,d as Q,h as Y,t as It,w as Z,L as at,p as Rt,j as c,k as P,D as wt,v as Dt,E as Tt}from"./dom-ByZf3MQk.js";import{$ as St,a as kt,b as zt,c as Bt}from"./evo-icon-chevron-down-12-Bix86w80.js";import{$ as Nt,a as Et,b as Gt,d as jt,e as Ht,j as Mt,f as Wt,g as qt,h as Ut,i as Jt,c as Kt,l as At,k as Qt,m as Yt}from"./index-Bbe4S3aW.js";/* empty css             */import{a as V,$ as tt,b as nt,c as et}from"./index-Bz-e3gKr.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SLqM2JFj.js";import"./index-VCYgT6qA.js";import"./evo-icon-spinner-24-fKp9ZYWc.js";import"./evo-icon-chevron-down-16-B7IB9ME0.js";const Zt=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-select
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

The \`<evo-select>\` is used to create a native \`<select>\` form element with default browser styling.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-evo-select)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-evo-select)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-select/examples)
`,f=(t=>`<!>${t}<!>`)(qt),p=(t=>`b/${t}&b`)(Wt);function Pt(t){return!!t.optgroup}const Xt=Q("JCgjxch",t=>Y(t,"a")),Vt=e(3,t=>{at(t,"a",t.d),Xt(t)}),tn=(t,n)=>nn(t,n[0]),nn=(t,n)=>(({optgroup:o,...i})=>Vt(t,i))(n),en=Q("ZGqjFoc",t=>Y(t,"a")),lt=Z(0,1,t=>{at(t,"a",t._.c),en(t)}),on=lt,st=Z(0,0,t=>Rt(t.a,"label",t._.d)),an=t=>{st._(t),it._(t)},ln=ot(0,"<option></option>"," b",0,tn),it=Z(0,0,t=>ln(t,[t._.e])),sn=It(0,"<optgroup></optgroup>"," b",an,"<option></option>"," b",on),_n=e(2,t=>{un(t,t.c?.optgroup),cn(t,t.c?.options),sn(t,Pt(t.c)?0:1),lt(t)}),rn=(t,n)=>_n(t,n[0]),un=e(3,st),cn=e(4,it),N=A(3,t=>Ct(t.a,["select",t._.n==="large"&&"select--large",t._.j&&"select--fluid",t._.k&&"select--borderless",t._.g]),3),_t=l(6,N),dn=t=>{_t(t),rt(t),ut(t),ct(t),dt(t),bt(t),ft(t),pt(t),mt(t),vt(t),gt(t),ht(t),zt(t.c),Bt(t.c,{})},rt=l(7,t=>Ft(t.a,t._.h)),bn=Q("Xo7JM7Y",t=>Y(t,"b")),d=A(4,t=>{Lt(t,"b",{onBlur:zn(t),onFocus:kn(t),disabled:t._.i,id:t._.u,value:t._.t,valueChange:Sn(t),...t._.r}),bn(t)},5),ut=l(8,d),ct=l(9,N),dt=l(10,N),bt=l(13,N),ft=l(15,d),pt=l(16,d),mt=l(17,d),vt=l(19,d),gt=l(20,d),fn=ot(1,"<!><!><!>","b%c",0,rn),ht=l(21,t=>fn(t,[t._.v])),pn=a("U_iY1JP",(t=>`<span><select></select>${t}</span>`)(kt),(t=>` D b/${t}&l`)(St),dn),mn=s(ht),vn=e(21,mn),gn=(t,n)=>vn(t,(()=>{const o=[],i={};for(const r of n){const _=r.optgroup;_?i[_]?i[_].options.push(r):o.push(i[_]={optgroup:_,options:[r]}):o.push(r)}return o})()),m=(t,n)=>gn(t,[...n||[]]),hn=s(vt),Ot=K(19,t=>{Yt(t.a,t.t),hn(t)}),yt=A(5,t=>Ot(t,t.d,t.e)),v=e(3,yt),g=e(4,yt),On=s(gt),yn=e(20,t=>{Qt(t.a,t.u),On(t)}),h=(t,n)=>yn(t,n||xt(t)),X=K(22,t=>At(t.a,t.w));function O(t){Nt(t.a),Et(t.a,pn(t)),Gt(t.a),jt(t.a),Ht(t.a),Mt(t.a),X(t,!1)}const y=(t,n)=>Jt(t.a,n),$n=s(bt),$=e(13,t=>{Kt(t.a,t.n),$n(t)}),Fn=s(ut),F=e(8,t=>{Ut(t.a,t.i),Fn(t)}),xn=(t,n)=>{(({borderless:o,class:i,disabled:r,floatingLabel:_,fluid:E,id:G,onBlur:j,onFocus:H,option:M,size:W,style:q,value:U,valueChange:J,...u})=>x(t,u))(n),v(t,n.value),g(t,n.valueChange),C(t,n.class),L(t,n.style),F(t,n.disabled),I(t,n.fluid),R(t,n.borderless),m(t,n.option),y(t,n.floatingLabel),$(t,n.size),h(t,n.id),w(t,n.onBlur),D(t,n.onFocus)},Cn=s(mt),x=e(17,Cn),Ln=s(_t),C=e(6,Ln),In=s(rt),L=e(7,In),Rn=s(ct),I=e(9,Rn),wn=s(dt),R=e(10,wn),Dn=s(ft),w=e(15,Dn),Tn=s(pt),D=e(16,Tn);function Sn(t){return n=>{Ot(t._,n)}}function kn(t){return function(n,o){X(t._,!0),t._.q&&t._.q(n,o)}}function zn(t){return function(n,o){X(t._,!1),t._.p&&t._.p(n,o)}}const Bn=b("nJvmKyh",f,p,O,xn),Nn=(t=>`<!>${t}<!>`)(f),En=(t=>`b/${t}&b`)(p),Gn=a("HQzhm7j","Option 3","b"),jn=a("sqcpQp8","Option 2","b"),Hn=a("a32Zy8R","Option 1","b");function Mn(t){O(t.a),m(t.a,c(c(P({value:"1",content:Hn(t)}),{value:"2",content:jn(t)}),{value:"3",content:Gn(t)})),R(t.a),C(t.a),F(t.a),y(t.a),I(t.a),h(t.a),w(t.a),D(t.a),$(t.a),L(t.a),v(t.a),g(t.a),x(t.a,{name:"formFieldName"})}const Wn=b("MvlsofB",Nn,En,Mn),qn=`<evo-select name="formFieldName">
    <@option value="1">Option 1</>
    <@option value="2">Option 2</>
    <@option value="3">Option 3</>
</evo-select>
`,Un=(t=>`<span class=field><label class="field__label field__label--start" for=select>Option</label>${t}</span>`)(f),Jn=(t=>`Db/${t}&l`)(p),Kn=[{text:"Select an option",value:""},{text:"option 1",value:"1"},{text:"option 2",value:"2"},{text:"option 3",value:"3"}],An=wt(a("yD3RhqH"," "," b"),{6(t){Dt(t.a,t.g)}}),$t=K(3,t=>v(t.a,t.d));function Qn(t){O(t.a);let n;Tt(Kn,o=>{n=c(n,{value:o.value,content:An(t,{6:option_text})})}),m(t.a,n),g(t.a,Zn(t)),h(t.a,"select"),$t(t,"")}const Yn=e(2,t=>{const n={...t.c,name:"formFieldName"};R(t.a,n.borderless),C(t.a,n.class),F(t.a,n.disabled),y(t.a,n.floatingLabel),I(t.a,n.fluid),w(t.a,n.onBlur),D(t.a,n.onFocus),$(t.a,n.size),L(t.a,n.style),x(t.a,(({borderless:o,class:i,disabled:r,floatingLabel:_,fluid:E,id:G,onBlur:j,onFocus:H,option:M,size:W,style:q,value:U,valueChange:J,...u})=>u)(n))});function Zn(t){return n=>{$t(t,n)}}const Pn=b("NwZhNBX",Un,Jn,Qn,Yn),Xn=`<let/selected = "">
static const options = [
        {
            text: "Select an option",
            value: "",
        },
        {
            text: "option 1",
            value: "1",
        },
        {
            text: "option 2",
            value: "2",
        },
        {
            text: "option 3",
            value: "3",
        },
];

<span class="field">
    <label class="field__label field__label--start" for="select">
        Option
    </label>
    <evo-select
        ...input
        value:=selected
        name="formFieldName"
        id="select"
    >
        <for|option| of=options>
            <@option value=option.value>\${option.text}</>
        </for>
    </evo-select>
</span>
`,Vn=((t,n,o)=>`<form><div>${t}</div><div style="padding: 1em;">${n}${o}</div></form>`)(f,et,et),te=((t,n,o)=>`E/${t}&lD/${n}&/${o}&m`)(p,nt,nt),ne=a("G1vfO3N","Submit","b"),ee=a("G20LC4x","Reset","b"),oe=a("Dkf0rKs","Option 3","b"),ae=a("AqYkgNP","Option 2","b"),le=a("mLe2VI0","Option 1","b");function se(t){O(t.a),m(t.a,c(c(P({value:"1",content:le(t)}),{value:"2",content:ae(t)}),{value:"3",content:oe(t)})),V(t.b),tt(t.b,{type:"reset",content:ee(t)}),V(t.c),tt(t.c,{type:"submit",content:ne(t)})}const ie=e(4,t=>{const n={...t.e,name:"formFieldName"};R(t.a,n.borderless),C(t.a,n.class),F(t.a,n.disabled),y(t.a,n.floatingLabel),I(t.a,n.fluid),h(t.a,n.id),w(t.a,n.onBlur),D(t.a,n.onFocus),$(t.a,n.size),L(t.a,n.style),v(t.a,n.value),g(t.a,n.valueChange),x(t.a,(({borderless:o,class:i,disabled:r,floatingLabel:_,fluid:E,id:G,onBlur:j,onFocus:H,option:M,size:W,style:q,value:U,valueChange:J,...u})=>u)(n))}),_e=b("QocjGM1",Vn,te,se,ie),re=`import type { Input as SelectInput } from "<evo-select>";
export type Input = SelectInput;

<form>
    <div>
        <evo-select ...input name="formFieldName">
            <@option value="1">Option 1</>
            <@option value="2">Option 2</>
            <@option value="3">Option 3</>
        </evo-select>
    </div>
    <div style="padding: 1em;">
        <evo-button type="reset">
            Reset
        </evo-button>
        <evo-button type="submit">
            Submit
        </evo-button>
    </div>
</form>
`,ue=(t=>`<span class=field><label class="field__label field__label--start field__label--disabled" for=select>Option</label>${t}</span>`)(f),ce=(t=>`Db/${t}&l`)(p),de=a("FRiwjvy","Option 3","b"),be=a("dgNll9S","Option 2","b"),fe=a("KoRyGU5","Option 1","b");function pe(t){O(t.a),m(t.a,c(c(P({value:"1",content:fe(t)}),{value:"2",content:be(t)}),{value:"3",content:de(t)})),h(t.a,"select"),F(t.a,!0)}const me=e(2,t=>{const n={...t.c,name:"formFieldName"};R(t.a,n.borderless),C(t.a,n.class),y(t.a,n.floatingLabel),I(t.a,n.fluid),w(t.a,n.onBlur),D(t.a,n.onFocus),$(t.a,n.size),L(t.a,n.style),v(t.a,n.value),g(t.a,n.valueChange),x(t.a,(({borderless:o,class:i,disabled:r,floatingLabel:_,fluid:E,id:G,onBlur:j,onFocus:H,option:M,size:W,style:q,value:U,valueChange:J,...u})=>u)(n))}),ve=b("u_hrpNE",ue,ce,pe,me),ge=`import type { Input as SelectInput } from "<evo-select>";
export type Input = SelectInput;

<span class="field">
    <label
        class="field__label field__label--start field__label--disabled"
        for="select"
    >
        Option
    </label>
    <evo-select ...input name="formFieldName" id="select" disabled>
        <@option value="1">Option 1</>
        <@option value="2">Option 2</>
        <@option value="3">Option 3</>
    </evo-select>
</span>
`,Te={title:"form input/evo-select",component:Bn,parameters:{docs:{description:{component:Zt}}},argTypes:{option:{"@":{"<option> attributes":{description:"All attributes and event handlers from [the native HTML `<option>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option) will be passed through"}}},size:{options:["regular (default)","large"],control:"inline-radio"},value:{controllable:!0,type:"string",control:"text",description:"Marko [adds `value` to the native `<select>` tag](https://markojs.com/docs/reference/native-tag#select)."},"<select> attributes":{description:"All attributes and event handlers from [the native HTML `<select>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select) will be passed through"}}},T=B(Wn,qn),S=B(Pn,Xn),k=B(_e,re),z=B(ve,ge);T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLabelTemplate, WithLabelCode)",...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"buildExtensionTemplate(InFormTemplate, InFormCode)",...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledCode)",...z.parameters?.docs?.source}}};const Se=["Default","WithLabel","InForm","Disabled"];export{T as Default,z as Disabled,k as InForm,S as WithLabel,Se as __namedExportsOrder,Te as default};
