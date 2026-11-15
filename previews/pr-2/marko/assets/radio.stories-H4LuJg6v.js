import{b as $}from"./utils-DyU2_5R1.js";import{a as d,b as n,c as S,f as L,d as E,h as R,t as G,z as _,y as v,e as C,p as W,v as h,u as I}from"./dom-C0MY0u5h.js";import{$ as A,a as M,b as j,c as B,d as Y,e as H,f as J,g as K}from"./evo-icon-radio-checked-24-BKBvY1_Y.js";import{$ as N,a as U,b as F,c as P,d as X,e as Z,f as q,g as Q}from"./evo-icon-radio-checked-18-BWch6ctZ.js";/* empty css              */import"./iframe-BkqRzvDk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4aRlw-G.js";/* empty css             */const ee=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-radio
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-evo-radio)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-evo-radio)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-radio/examples)
`,o="<span><input type=radio class=radio__control><span class=radio__icon hidden></span></span>",s=" D b l",l=()=>{},ae=e=>{X(e.a),Z(e.a,{class:"radio__unchecked"}),q(e.b),Q(e.b,{class:"radio__checked"})},ne=e=>{Y(e.a),H(e.a,{class:"radio__unchecked"}),J(e.b),K(e.b,{class:"radio__checked"})},r=(e,a)=>L(e.a,["radio",a]),te=E("jTmTYIZ",e=>R(e,"b")),i=n(7,e=>{S(e,"b",e.h,{type:1,class:1}),te(e)}),oe=G(2,((e,a)=>`${e}${a}`)(B,j),((e,a)=>`/${e}&/${a}&`)(M,A),ne,((e,a)=>`${e}${a}`)(P,F),((e,a)=>`/${e}&/${a}&`)(U,N),ae),c=(e,a)=>oe(e,a==="large"?0:1),se=(e,a)=>{(({class:g,size:k,...t})=>i(e,t))(a),r(e,a.class),c(e,a.size)},le=d("zJLKPrY",o,s,l,se),re="<fieldset><legend>Choose an Option</legend><!></fieldset>",ie="Db%l",w=C(5,e=>{const a={...e._.c,id:`group-radio-${e.e}`,value:e.e,name:"radio-group"};c(e.a,a.size),i(e.a,(({class:g,size:k,...t})=>t)(a))}),z=_(0,w),ce=e=>{z._(e),l(e.a),r(e.a,"field__control")},de=n(4,e=>{W(e.b,"for",`group-radio-${e.e}`),h(e.c,e.e),w(e)}),_e=(e,a)=>de(e,a[0]),ue=v(0,(e=>`<span class=field>${e}<label class="field__label field__label--end">Option <!></label></span>`)(o),(e=>`D/${e}& Db%m`)(s),ce,_e);function pe(e){ue(e,[[1,2,3]])}const me=n(2,z),be=d("a08wJzK",re,ie,pe,me),fe=`<fieldset>
    <legend>Choose an Option</legend>
    <for|label_num| of=[1, 2, 3]>
        <span class="field">
            <evo-radio
                ...input
                class="field__control"
                id=\`group-radio-\${label_num}\`
                value=label_num
                name="radio-group"
            />
            <label
                class="field__label field__label--end"
                for=\`group-radio-\${label_num}\`
            >
                Option \${label_num}
            </label>
        </span>
    </for>
</fieldset>
`,$e=(e=>`<span class=field>${e}<label for=radio class="field__label field__label--end">Option</label></span>`)(o),he=(e=>`D/${e}&l`)(s);function ge(e){l(e.a),r(e.a,"field__control")}const ke=n(2,e=>{const a={...e.c,value:"1",id:"radio"};c(e.a,a.size),i(e.a,(({class:g,size:k,...t})=>t)(a))}),ve=d("mFuylNU",$e,he,ge,ke),Ce=`<span class="field">
    <evo-radio
        ...input
        value="1"
        class="field__control"
        id="radio"
    />
    <label for="radio" class="field__label field__label--end">
        Option
    </label>
</span>
`,De=(e=>`<span class=field>${e}<label for=radio class="field__label field__label--end field__label--disabled">Option</label></span>`)(o),ye=(e=>`D/${e}&l`)(s);function Te(e){l(e.a),r(e.a,"field__control")}const we=n(2,e=>{const a={...e.c,disabled:!0,value:"1",id:"radio"};c(e.a,a.size),i(e.a,(({class:g,size:k,...t})=>t)(a))}),ze=d("YmVsMxX",De,ye,Te,we),xe=`<span class="field">
    <evo-radio
        ...input
        disabled
        value="1"
        class="field__control"
        id="radio"
    />
    <label
        for="radio"
        class="field__label field__label--end field__label--disabled"
    >
        Option
    </label>
</span>
`,Oe="<!><!><p>Selected item is <!></p><!><!>",Ve="b%bDb%l%c",T=["A","B","C","D"],D=C(4,e=>i(e.a,{checkedValueChange:e._.e,checkedValue:e._.d,value:e.d,name:"radio-group-2"}),2),x=_(2,D),Se=e=>{x._(e),Le._(e),l(e.a),r(e.a),c(e.a)},Le=_(2,D),Ee=n(3,e=>{h(e.b,e.d),D(e)}),Re=(e,a)=>Ee(e,a[0]),y=C(4,e=>i(e.a,{checkedValueChange:e._.e,checkedValue:e._.d,value:e.d,name:"radio-group-1"}),2),O=_(0,y),Ge=e=>{O._(e),We._(e),l(e.a),r(e.a),c(e.a)},We=_(0,y),Ie=n(3,e=>{h(e.b,e.d),y(e)}),Ae=(e,a)=>Ie(e,a[0]),V=I(3,e=>{h(e.b,e.d),O(e),x(e)}),Me=n(4),je=v(0,(e=>`<label>${e}<!> </label>`)(o),(e=>`D/${e}&%l`)(s),Ge,Ae),Be=v(2,(e=>`<label>${e}<!> </label>`)(o),(e=>`D/${e}&%l`)(s),Se,Re);function Ye(e){V(e,"A"),Me(e,He(e)),je(e,[T]),Be(e,[T])}function He(e){return a=>{V(e,a)}}const Je=d("geVG7xL",Oe,Ve,Ye),Ke=`static const items = ["A", "B", "C", "D"];

<let/checked="A">

<for|item| of=items>
    <label>
        <evo-radio name="radio-group-1" value=item checkedValue:=checked/>
        \${item} 
    </label>
</for>


<p>
    Selected item is \${checked}
</p>

<for|item| of=items>
    <label>
        <evo-radio name="radio-group-2" value=item checkedValue:=checked/>
        \${item} 
    </label>
</for>
`,aa={title:"form input/evo-radio",component:le,parameters:{docs:{description:{component:ee}}},argTypes:{size:{options:["regular (default)","large"],description:"Icon size. (Note: The dimensions of the radio will not change, but only the icon)"},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},u=$(ve,Ce),p=$(ze,xe),m=$(be,fe),b=$(Je,Ke),f={};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLabelTemplate, WithLabelCode)",...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledCode)",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"buildExtensionTemplate(GroupTemplate, GroupCode)",...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledCode)",...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source}}};const na=["WithLabel","Disabled","Group","Controlled","Isolated"];export{b as Controlled,p as Disabled,m as Group,f as Isolated,u as WithLabel,na as __namedExportsOrder,aa as default};
