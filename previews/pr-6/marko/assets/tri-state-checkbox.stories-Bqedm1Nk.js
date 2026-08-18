import{b as z}from"./utils-DyU2_5R1.js";import{a as c,b as t,c as ce,f as ie,K as de,u as R,d as H,M as oe,h as _e,w as F,e as l,N as he,t as A,p as B,n as G,v as Y,y as re,z as Z}from"./dom-ByZf3MQk.js";import{$ as ue,a as ke,b as be,c as fe,d as me,e as Ce,f as ge,g as xe}from"./evo-icon-checkbox-mixed-18-C6vjJ0z1.js";import{$ as ve,a as pe,b as Ve,c as $e,d as ye,e as Oe,f as De,g as we}from"./evo-icon-checkbox-checked-24-BpbrIxwY.js";import{$ as ze,a as Re,b as Te,c as Se,d as Me,e as Ee,f as Ie,g as Le}from"./evo-icon-checkbox-checked-18-CvHukOZl.js";import{b as We,c as Ae,d as Be,e as je,$ as qe,a as He}from"./index-CDYNcigu.js";/* empty css              */import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SLqM2JFj.js";/* empty css             */const Fe=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-tri-state-checkbox
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

A checkbox that toggles from unchecked, to partially checked, to fully checked states. Uses \`<input/>\` under the hood with custom icons.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/evo-marko/?path=/story/form-input-evo-tri-state-checkbox)
- [Storybook Docs](https://ebay.github.io/evo-web/evo-marko/?path=/docs/form-input-evo-tri-state-checkbox)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-tri-state-checkbox/examples)
`,i="<span><input class=checkbox__control type=checkbox><span class=checkbox__icon hidden></span></span>",d=" D b l",Ge=e=>{Ie(e.a),Le(e.a,{class:"checkbox__unchecked"})},Je=e=>{De(e.a),we(e.a,{class:"checkbox__unchecked"})},Ue=e=>{Me(e.a),Ee(e.a,{class:"checkbox__checked"})},Ye=e=>{ye(e.a),Oe(e.a,{class:"checkbox__checked"})},Ze=e=>{me(e.a),Ce(e.a,{class:"checkbox__checked"})},Ke=e=>{ge(e.a),xe(e.a,{class:"checkbox__checked"})},Ne=A(0,$e,(e=>`/${e}&`)(Ve),Je,Se,(e=>`/${e}&`)(Te),Ge),K=F(2,2,e=>Ne(e,e._.h==="large"?0:1)),Qe=K,Xe=A(0,pe,(e=>`/${e}&`)(ve),Ye,Re,(e=>`/${e}&`)(ze),Ue),N=F(2,1,e=>Xe(e,e._.h==="large"?0:1)),Pe=N,ea=A(0,fe,(e=>`/${e}&`)(be),Ke,ke,(e=>`/${e}&`)(ue),Ze),Q=F(2,0,e=>ea(e,e._.h==="large"?0:1)),aa=Q,ta=A(2,"<!><!><!>","b%c",aa,"<!><!><!>","b%c",Pe,"<!><!><!>","b%c",Qe),o=l(25,e=>he(e,"b",e.y!=="false",ha(e)),5),na=H("VuuBSCx",e=>e.b.indeterminate=e.y==="mixed"),la=t(24,e=>{B(e.b,"aria-checked",e.y),ta(e,e.y==="mixed"?0:e.y==="true"?1:2),o(e),na(e)}),j=l(22,e=>la(e,e.v?e.u>=e.m?"true":e.u===0?"false":"mixed":e.r||"false"),3),L=R(17,e=>{j(e),o(e)}),X=l(10,e=>L(e,e.i||"false",e.j)),_=t(8,X),h=t(9,X),sa=t(21,e=>{j(e),o(e)}),J=l(19,e=>sa(e,!!(e.s&&e.o&&e.l)),2),W=R(18,e=>{ca(e,e.s?.length),J(e),o(e)}),ca=t(20,j),P=l(15,e=>W(e,e.n,e.o)),r=t(13,P),u=t(14,e=>{P(e),J(e)}),k=t(11,e=>{da(e,e.l?.length),J(e),o(e)}),ee=R(23,o),ia=H("omJqJd9",e=>oe(e,"b"));function b(e){ee(e,null),ia(e)}const da=t(12,j),f=(e,a)=>de(e.a,a),m=(e,a)=>ie(e.a,["checkbox",a]),oa=H("dw7Sph3",e=>_e(e,"b")),C=t(16,e=>{ce(e,"b",e.q,{checked:1,checkedChange:1,class:1,"aria-checked":1,type:1}),oa(e)}),_a=(e,a)=>{(({checked:x,checkedChange:v,checkedValues:p,checkedValuesChange:V,class:$,onChange:y,size:O,skipMixed:D,style:w,values:s,...n})=>C(e,n))(a),m(e,a.class),f(e,a.style),g(e,a.size),_(e,a.checked),h(e,a.checkedChange),k(e,a.values),r(e,a.checkedValues),u(e,a.checkedValuesChange)},g=t(7,e=>{Q(e),N(e),K(e)});function ha(e){return function(a){e.v?e.y==="true"?W(e,[]):e.y==="mixed"?(ee(e,e.s),W(e,e.l)):W(e,e.x||e.l):e.r==="true"?L(e,"false"):e.r==="false"?L(e,"mixed"):L(e,"true")}}const ra=c("FVDL7AZ",i,d,b,_a),ua=i,ka=(e=>`/${e}&`)(d);function ba(e){b(e.a)}const fa=t(2,e=>{_(e.a,e.c.checked),h(e.a,e.c.checkedChange),r(e.a,e.c.checkedValues),u(e.a,e.c.checkedValuesChange),m(e.a,e.c.class),g(e.a,e.c.size),f(e.a,e.c.style),k(e.a,e.c.values),C(e.a,(({checked:a,checkedChange:x,checkedValues:v,checkedValuesChange:p,class:V,onChange:$,size:y,skipMixed:O,style:D,values:w,...s})=>s)(e.c))}),ma=c("Y$45QSH",ua,ka,ba,fa),Ca=`<evo-tri-state-checkbox ...input/>
`,ga=(e=>`${e}<label> "<!>"</label>`)(i),xa=(e=>`/${e}& Db%l`)(d),ae=R(6,e=>{_(e.a,e.g),Y(e.c,e.g)}),va=(e,a)=>ae(e,a||"false"),te=l(8,e=>{const a={...e.e,id:e.h};r(e.a,a.checkedValues),u(e.a,a.checkedValuesChange),m(e.a,a.class),g(e.a,a.size),f(e.a,a.style),k(e.a,a.values),C(e.a,(({checked:x,checkedChange:v,checkedValues:p,checkedValuesChange:V,class:$,onChange:y,size:O,skipMixed:D,style:w,values:s,...n})=>n)(a))}),pa=t(7,e=>{B(e.b,"for",e.h),te(e)});function Va(e){b(e.a),h(e.a,ya(e)),pa(e,G(e))}const $a=t(4,e=>{va(e,e.e.checked),te(e)});function ya(e){return a=>{ae(e,a)}}const Oa=c("aRlvI8G",ga,xa,Va,$a),Da=`import { type Input as TriStateCheckboxInput } from "<evo-tri-state-checkbox>";

export interface Input extends TriStateCheckboxInput {}

<let/checked=input.checked || "false" as const>

<id/id>
<evo-tri-state-checkbox ...input id=id checked:=checked/>
<label for=id> "\${checked}"</label>`,wa=(e=>`<div class=field>${e}<label class="field__label field__label--end">Select all</label></div><div class=container style="margin-left: 10px;"></div>`)(i),za=(e=>`D/${e}& l b`)(d),U=["A","B","C","D"],q=l(6,e=>He(e.a,{checkedValueChange:e._.g,checkedValue:e._.f,value:e.e,id:e.f}),3),ne=Z(2,q),Ra=t(5,e=>{B(e.b,"for",e.f),q(e)}),Ta=e=>{ne._(e),Sa._(e),Be(e.a),je(e.a),qe(e.a),Ra(e,G(e))},Sa=Z(2,q),Ma=t(4,e=>{Y(e.c,e.e),q(e)}),Ea=(e,a)=>Ma(e,a[0]),le=R(5,e=>{r(e.a,e.f),ne(e)}),Ia=t(6,e=>u(e.a,e.g)),se=l(8,e=>{const a={...e.e,id:e.h};_(e.a,a.checked),h(e.a,a.checkedChange),m(e.a,a.class),g(e.a,a.size),f(e.a,a.style),C(e.a,(({checked:x,checkedChange:v,checkedValues:p,checkedValuesChange:V,class:$,onChange:y,size:O,skipMixed:D,style:w,values:s,...n})=>n)(a))}),La=t(7,e=>{B(e.b,"for",e.h),se(e)}),Wa=re(2,(e=>`<div class=field>${e}<label class="field__label field__label--end">Option <!></label></div>`)(We),(e=>`D/${e}& Db%m`)(Ae),Ta,Ea);function Aa(e){b(e.a),k(e.a,U),le(e,[]),Ia(e,ja(e)),La(e,G(e)),Wa(e,[U])}const Ba=t(4,se);function ja(e){return a=>{le(e,a)}}const qa=c("i4qL3_R",wa,za,Aa,Ba),Ha=`static const boxes = ["A", "B", "C", "D"];

<let/checkedValue=[] as string[]>

<div class="field">
    <id/id>
    <evo-tri-state-checkbox ...input id=id checkedValues:=checkedValue values=boxes/>
    <label class="field__label field__label--end" for=id>
        Select all
    </label>
</div>
<div class="container" style="margin-left: 10px;">
    <for|value| of=boxes>
        <id/id>
        <div class="field">
            <evo-checkbox
                id=id
                value=value
                checkedValue:=checkedValue/>
            <label class="field__label field__label--end" for=id>
                Option \${value}
            </label>
        </div>
    </for>
</div>
`,Fa=(e=>`<span class=field>${e}<label class="field__label field__label--end" for=checkbox>Option</label></span>`)(i),Ga=(e=>`D/${e}&l`)(d);function Ja(e){b(e.a),m(e.a,"field__control")}const Ua=t(2,e=>{const a={...e.c,id:"checkbox"};_(e.a,a.checked),h(e.a,a.checkedChange),r(e.a,a.checkedValues),u(e.a,a.checkedValuesChange),g(e.a,a.size),f(e.a,a.style),k(e.a,a.values),C(e.a,(({checked:x,checkedChange:v,checkedValues:p,checkedValuesChange:V,class:$,onChange:y,size:O,skipMixed:D,style:w,values:s,...n})=>n)(a))}),Ya=c("cG5YVe$",Fa,Ga,Ja,Ua),Za=(e=>`<span class=field>${e}<label class="field__label field__label--end field__label--disabled" for=checkbox>Option</label></span>`)(i),Ka=(e=>`D/${e}&l`)(d);function Na(e){b(e.a),m(e.a,"field__control")}const Qa=t(2,e=>{const a={...e.c,disabled:!0,id:"checkbox"};_(e.a,a.checked),h(e.a,a.checkedChange),r(e.a,a.checkedValues),u(e.a,a.checkedValuesChange),g(e.a,a.size),f(e.a,a.style),k(e.a,a.values),C(e.a,(({checked:x,checkedChange:v,checkedValues:p,checkedValuesChange:V,class:$,onChange:y,size:O,skipMixed:D,style:w,values:s,...n})=>n)(a))}),Xa=c("WXsuZbF",Za,Ka,Na,Qa),Pa=`<span class="field">
    <evo-tri-state-checkbox
        ...input
        class="field__control"
        id="checkbox"
    />
    <label class="field__label field__label--end" for="checkbox">
        Option
    </label>
</span>
`,et=`<span class="field">
    <evo-tri-state-checkbox
        ...input
        disabled
        class="field__control"
        id="checkbox"
    />
    <label
        class="field__label field__label--end field__label--disabled"
        for="checkbox"
    >
        Option
    </label>
</span>
`,rt={title:"form input/evo-tri-state-checkbox",component:ra,parameters:{docs:{description:{component:Fe}}},argTypes:{checked:{controllable:!0,options:["false","mixed","true"],control:"inline-radio"},size:{options:["regular (default)","large"],control:"inline-radio"},checkedValues:{controllable:!0},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},T=z(Ya,Pa),S=z(Xa,et),M=z(qa,Ha),E=z(Oa,Da),I=z(ma,Ca);T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLabelTemplate, WithLabelCode)",...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledCode)",...S.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledCheckedValuesTemplate, ControlledCheckedValuesCode)",...M.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledCode)",...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...I.parameters?.docs?.source}}};const ut=["WithLabel","Disabled","ControlledCheckedValues","Controlled","Isolated"];export{E as Controlled,M as ControlledCheckedValues,S as Disabled,I as Isolated,T as WithLabel,ut as __namedExportsOrder,rt as default};
