import{b as T}from"./utils-DyU2_5R1.js";import{a as c,b as t,c as ce,f as ie,K as de,u as z,d as q,M as oe,h as he,w as H,e as l,N as re,t as j,p as A,n as F,v as N,y as _e,z as Y}from"./dom-C0MY0u5h.js";import{$ as ue,a as ke,b as be,c as fe,d as me,e as ge,f as pe,g as xe}from"./evo-icon-checkbox-mixed-18-D3O-D8IV.js";import{$ as Ce,a as ve,b as Ve,c as ye,d as $e,e as we,f as De,g as Oe}from"./evo-icon-checkbox-checked-24-CY2lhc7n.js";import{$ as Te,a as ze,b as Re,c as Se,d as Me,e as Le,f as Ie,g as Ee}from"./evo-icon-checkbox-checked-18-BMJ0LIw3.js";import{b as We,c as je,d as Ae,e as Be,$ as Ue,a as qe}from"./index-CGw6kP4a.js";/* empty css              */import"./iframe-BkqRzvDk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4aRlw-G.js";/* empty css             */const He=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,i="<span><input class=checkbox__control type=checkbox><span class=checkbox__icon hidden></span></span>",d=" D b l",Fe=e=>{Ie(e.a),Ee(e.a,{class:"checkbox__unchecked"})},Ge=e=>{De(e.a),Oe(e.a,{class:"checkbox__unchecked"})},Je=e=>{Me(e.a),Le(e.a,{class:"checkbox__checked"})},Ne=e=>{$e(e.a),we(e.a,{class:"checkbox__checked"})},Ye=e=>{me(e.a),ge(e.a,{class:"checkbox__checked"})},Ze=e=>{pe(e.a),xe(e.a,{class:"checkbox__checked"})},Ke=j(0,ye,(e=>`/${e}&`)(Ve),Ge,Se,(e=>`/${e}&`)(Re),Fe),Z=H(2,2,e=>Ke(e,e._.h==="large"?0:1)),Qe=Z,Xe=j(0,ve,(e=>`/${e}&`)(Ce),Ne,ze,(e=>`/${e}&`)(Te),Je),K=H(2,1,e=>Xe(e,e._.h==="large"?0:1)),Pe=K,ea=j(0,fe,(e=>`/${e}&`)(be),Ze,ke,(e=>`/${e}&`)(ue),Ye),Q=H(2,0,e=>ea(e,e._.h==="large"?0:1)),aa=Q,ta=j(2,"<!><!><!>","b%c",aa,"<!><!><!>","b%c",Pe,"<!><!><!>","b%c",Qe),o=l(25,e=>re(e,"b",e.y!=="false",ra(e)),5),na=q("VuuBSCx",e=>e.b.indeterminate=e.y==="mixed"),la=t(24,e=>{A(e.b,"aria-checked",e.y),ta(e,e.y==="mixed"?0:e.y==="true"?1:2),o(e),na(e)}),B=l(22,e=>la(e,e.v?e.u>=e.m?"true":e.u===0?"false":"mixed":e.r||"false"),3),E=z(17,e=>{B(e),o(e)}),X=l(10,e=>E(e,e.i||"false",e.j)),h=t(8,X),r=t(9,X),sa=t(21,e=>{B(e),o(e)}),G=l(19,e=>sa(e,!!(e.s&&e.o&&e.l)),2),W=z(18,e=>{ca(e,e.s?.length),G(e),o(e)}),ca=t(20,B),P=l(15,e=>W(e,e.n,e.o)),_=t(13,P),u=t(14,e=>{P(e),G(e)}),k=t(11,e=>{da(e,e.l?.length),G(e),o(e)}),ee=z(23,o),ia=q("omJqJd9",e=>oe(e,"b"));function b(e){ee(e,null),ia(e)}const da=t(12,B),f=(e,a)=>de(e.a,a),m=(e,a)=>ie(e.a,["checkbox",a]),oa=q("dw7Sph3",e=>he(e,"b")),g=t(16,e=>{ce(e,"b",e.q,{checked:1,checkedChange:1,class:1,"aria-checked":1,type:1}),oa(e)}),ha=(e,a)=>{(({checked:x,checkedChange:C,checkedValues:v,checkedValuesChange:V,class:y,onChange:$,size:w,skipMixed:D,style:O,values:s,...n})=>g(e,n))(a),m(e,a.class),f(e,a.style),p(e,a.size),h(e,a.checked),r(e,a.checkedChange),k(e,a.values),_(e,a.checkedValues),u(e,a.checkedValuesChange)},p=t(7,e=>{Q(e),K(e),Z(e)});function ra(e){return function(a){e.v?e.y==="true"?W(e,[]):e.y==="mixed"?(ee(e,e.s),W(e,e.l)):W(e,e.x||e.l):e.r==="true"?E(e,"false"):e.r==="false"?E(e,"mixed"):E(e,"true")}}const _a=c("FVDL7AZ",i,d,b,ha),ua=i,ka=(e=>`/${e}&`)(d);function ba(e){b(e.a)}const fa=t(2,e=>{h(e.a,e.c.checked),r(e.a,e.c.checkedChange),_(e.a,e.c.checkedValues),u(e.a,e.c.checkedValuesChange),m(e.a,e.c.class),p(e.a,e.c.size),f(e.a,e.c.style),k(e.a,e.c.values),g(e.a,(({checked:a,checkedChange:x,checkedValues:C,checkedValuesChange:v,class:V,onChange:y,size:$,skipMixed:w,style:D,values:O,...s})=>s)(e.c))}),ma=c("Y$45QSH",ua,ka,ba,fa),ga=`<evo-tri-state-checkbox ...input/>
`,pa=(e=>`${e}<label> "<!>"</label>`)(i),xa=(e=>`/${e}& Db%l`)(d),ae=z(6,e=>{h(e.a,e.g),N(e.c,e.g)}),Ca=(e,a)=>ae(e,a||"false"),te=l(8,e=>{const a={...e.e,id:e.h};_(e.a,a.checkedValues),u(e.a,a.checkedValuesChange),m(e.a,a.class),p(e.a,a.size),f(e.a,a.style),k(e.a,a.values),g(e.a,(({checked:x,checkedChange:C,checkedValues:v,checkedValuesChange:V,class:y,onChange:$,size:w,skipMixed:D,style:O,values:s,...n})=>n)(a))}),va=t(7,e=>{A(e.b,"for",e.h),te(e)});function Va(e){b(e.a),r(e.a,$a(e)),va(e,F(e))}const ya=t(4,e=>{Ca(e,e.e.checked),te(e)});function $a(e){return a=>{ae(e,a)}}const wa=c("aRlvI8G",pa,xa,Va,ya),Da=`import { type Input as TriStateCheckboxInput } from "<evo-tri-state-checkbox>";

export interface Input extends TriStateCheckboxInput {}

<let/checked=input.checked || "false" as const>

<id/id>
<evo-tri-state-checkbox ...input id=id checked:=checked/>
<label for=id> "\${checked}"</label>`,Oa=(e=>`<div class=field>${e}<label class="field__label field__label--end">Select all</label></div><div class=container style="margin-left: 10px;"></div>`)(i),Ta=(e=>`D/${e}& l b`)(d),J=["A","B","C","D"],U=l(6,e=>qe(e.a,{checkedValueChange:e._.g,checkedValue:e._.f,value:e.e,id:e.f}),3),ne=Y(2,U),za=t(5,e=>{A(e.b,"for",e.f),U(e)}),Ra=e=>{ne._(e),Sa._(e),Ae(e.a),Be(e.a),Ue(e.a),za(e,F(e))},Sa=Y(2,U),Ma=t(4,e=>{N(e.c,e.e),U(e)}),La=(e,a)=>Ma(e,a[0]),le=z(5,e=>{_(e.a,e.f),ne(e)}),Ia=t(6,e=>u(e.a,e.g)),se=l(8,e=>{const a={...e.e,id:e.h};h(e.a,a.checked),r(e.a,a.checkedChange),m(e.a,a.class),p(e.a,a.size),f(e.a,a.style),g(e.a,(({checked:x,checkedChange:C,checkedValues:v,checkedValuesChange:V,class:y,onChange:$,size:w,skipMixed:D,style:O,values:s,...n})=>n)(a))}),Ea=t(7,e=>{A(e.b,"for",e.h),se(e)}),Wa=_e(2,(e=>`<div class=field>${e}<label class="field__label field__label--end">Option <!></label></div>`)(We),(e=>`D/${e}& Db%m`)(je),Ra,La);function ja(e){b(e.a),k(e.a,J),le(e,[]),Ia(e,Ba(e)),Ea(e,F(e)),Wa(e,[J])}const Aa=t(4,se);function Ba(e){return a=>{le(e,a)}}const Ua=c("i4qL3_R",Oa,Ta,ja,Aa),qa=`static const boxes = ["A", "B", "C", "D"];

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
`,Ha=(e=>`<span class=field>${e}<label class="field__label field__label--end" for=checkbox>Option</label></span>`)(i),Fa=(e=>`D/${e}&l`)(d);function Ga(e){b(e.a),m(e.a,"field__control")}const Ja=t(2,e=>{const a={...e.c,id:"checkbox"};h(e.a,a.checked),r(e.a,a.checkedChange),_(e.a,a.checkedValues),u(e.a,a.checkedValuesChange),p(e.a,a.size),f(e.a,a.style),k(e.a,a.values),g(e.a,(({checked:x,checkedChange:C,checkedValues:v,checkedValuesChange:V,class:y,onChange:$,size:w,skipMixed:D,style:O,values:s,...n})=>n)(a))}),Na=c("cG5YVe$",Ha,Fa,Ga,Ja),Ya=(e=>`<span class=field>${e}<label class="field__label field__label--end field__label--disabled" for=checkbox>Option</label></span>`)(i),Za=(e=>`D/${e}&l`)(d);function Ka(e){b(e.a),m(e.a,"field__control")}const Qa=t(2,e=>{const a={...e.c,disabled:!0,id:"checkbox"};h(e.a,a.checked),r(e.a,a.checkedChange),_(e.a,a.checkedValues),u(e.a,a.checkedValuesChange),p(e.a,a.size),f(e.a,a.style),k(e.a,a.values),g(e.a,(({checked:x,checkedChange:C,checkedValues:v,checkedValuesChange:V,class:y,onChange:$,size:w,skipMixed:D,style:O,values:s,...n})=>n)(a))}),Xa=c("WXsuZbF",Ya,Za,Ka,Qa),Pa=`<span class="field">
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
`,_t={title:"form input/evo-tri-state-checkbox",component:_a,parameters:{docs:{description:{component:He}}},argTypes:{checked:{controllable:!0,type:"string",options:["false","mixed","true"],control:"inline-radio",description:"String enumeration of checkbox state.",table:{defaultValue:{summary:"false"}}},skipMixed:{type:"boolean",control:"boolean",description:"If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none."},size:{type:"string",options:["regular (default)","large"],control:"inline-radio",description:"Sets the checkbox icon. Default is regular. (Note: The dimensions of the checkbox will not change, but only the icon)"},values:{description:'Used alongside `checkedValues` for a [controllable](https://markojs.com/docs/explanation/controllable-components) pattern that aligns with [Marko\'s `checkedValue` checkbox pattern](https://markojs.com/docs/reference/native-tag#input-typeradio-and-input-typecheckbox). List of _all_ "child" checkbox values',table:{type:{summary:"string[]"}}},checkedValues:{controllable:!0,description:'**Must** be accompanied by `values` and `checkedValuesChange` (usually via [the `:=` bind syntax](https://markojs.com/docs/reference/language#shorthand-change-handlers-two-way-binding)). Leverages [Marko\'s `checkedValue` checkbox pattern](https://markojs.com/docs/reference/native-tag#input-typeradio-and-input-typecheckbox) for "select/deselect all" behavior',table:{type:{summary:"string[]"}}},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},R=T(Na,Pa),S=T(Xa,et),M=T(Ua,qa),L=T(wa,Da),I=T(ma,ga);R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLabelTemplate, WithLabelCode)",...R.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledCode)",...S.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledCheckedValuesTemplate, ControlledCheckedValuesCode)",...M.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledCode)",...L.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...I.parameters?.docs?.source}}};const ut=["WithLabel","Disabled","ControlledCheckedValues","Controlled","Isolated"];export{L as Controlled,M as ControlledCheckedValues,S as Disabled,I as Isolated,R as WithLabel,ut as __namedExportsOrder,_t as default};
