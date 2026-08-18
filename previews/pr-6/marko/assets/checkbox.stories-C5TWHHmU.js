import{b as r}from"./utils-DyU2_5R1.js";import{a as p,b as a,z as x,u as v,v as g,e as $,y as w,n as z,p as O}from"./dom-ByZf3MQk.js";import{$ as b,a as _,b as h,c as m,d as u,e as f,C as S}from"./index-CDYNcigu.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./evo-icon-checkbox-checked-24-BpbrIxwY.js";import"./index-SLqM2JFj.js";/* empty css             */import"./evo-icon-checkbox-checked-18-CvHukOZl.js";/* empty css              */const E=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-checkbox
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

Displays an accessible checkbox component. Uses \`<input/>\` under the hood but displays a custom SVG icon.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-evo-checkbox)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-evo-checkbox)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-checkbox/examples)
`,L="<div> </div><fieldset><legend>Choose an Option</legend><!></fieldset>",W="D lDb%l",k=$(9,e=>{const n={...e._.d,checked:e.h,checkedChange:U(e),id:e.i,value:e.M,name:"checkbox-group"};b(e.a,n.size),_(e.a,(({class:t,size:s,...o})=>o)(n))},2),I=x(1,k),G=a(8,e=>{O(e.b,"for",e.i),k(e)}),M=e=>{I._(e),C._(e),u(e.a),f(e.a,"field__control"),g(e.c,e.M+1),G(e,z(e))},T=v(7,k),y=$(5,e=>T(e,e.e,q(e))),C=x(1,y),R=a(4,y),j=(e,n)=>R(e,n[0]),A=w(1,(e=>`<span class=field>${e}<label class="field__label field__label--end">Option <!></label></span>`)(h),(e=>`D/${e}& Db%m`)(m),M,j),D=v(4,e=>{g(e.a,e.e.toString()),A(e,[e.e]),C(e)});function H(e){D(e,[!1,!1,!1])}const K=a(3,I);function U(e){return n=>{T(e,n)}}function q(e){return function(n){const t=[...e._.e];t[e.M]=n,D(e._,t)}}const B=p("Eb36A1l",L,W,H,K),F=h,J=(e=>`/${e}&`)(m);function P(e){u(e.a)}const V=a(2,e=>{f(e.a,e.c.class),b(e.a,e.c.size),_(e.a,(({class:n,size:t,...s})=>s)(e.c))}),X=p("ZPWzKjx",F,J,P,V),Z=(e=>`<span class=field>${e}<label class="field__label field__label--end" for=checkbox>Option</label></span>`)(h),N=(e=>`D/${e}&l`)(m);function Q(e){u(e.a),f(e.a,"field__control")}const Y=a(2,e=>{const n={...e.c,id:"checkbox"};b(e.a,n.size),_(e.a,(({class:t,size:s,...o})=>o)(n))}),ee=p("cMJsALK",Z,N,Q,Y),ne=(e=>`<span class=field>${e}<label class="field__label field__label--end field__label--disabled" for=checkbox>Option</label></span>`)(h),te=(e=>`D/${e}&l`)(m);function ae(e){u(e.a),f(e.a,"field__control")}const oe=a(2,e=>{const n={...e.c,disabled:!0,id:"checkbox"};b(e.a,n.size),_(e.a,(({class:t,size:s,...o})=>o)(n))}),se=p("Xq1FgSd",ne,te,ae,oe),ce=`<let/checkedItems=[false, false, false]>

<div>\${checkedItems.toString()}</div>
<fieldset>
    <legend>Choose an Option</legend>
    <for|_checked, i| of=checkedItems>
        <let/checked=_checked valueChange(v) {
            const newItems = [...checkedItems];
            newItems[i] = v;
            checkedItems = newItems;
        }>
        <span class="field">
            <id/checkboxId>
            <evo-checkbox
                ...input
                checked:=checked
                class="field__control"
                id=checkboxId
                value=i
                name="checkbox-group"/>
            <label
                class="field__label field__label--end"
                for=checkboxId>
                Option \${i + 1}
            </label>
        </span>
    </for>
</fieldset>
`,le=`<span class="field">
    <evo-checkbox
        ...input
        class="field__control"
        id="checkbox"
    />
    <label class="field__label field__label--end" for="checkbox">
        Option
    </label>
</span>
`,ie=`<span class="field">
    <evo-checkbox
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
`,de="<evo-checkbox ...input/>",ve={title:"form input/evo-checkbox",component:S,parameters:{docs:{description:{component:E}}},argTypes:{size:{options:["small (default)","large"],control:"inline-radio"},checked:{type:"boolean",controllable:!0,control:"boolean",description:"The native `checked=` value of the `<input>`"},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},c=r(ee,le,{checked:!1}),l=r(se,ie,{checked:!1}),i=r(B,ce),d=r(X,de);c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithLabelTemplate, WithLabelCode, {
  checked: false
})`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTemplate, DisabledCode, {
  checked: false
})`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"buildExtensionTemplate(GroupTemplate, GroupCode)",...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(IsolatedTemplate, IsolatedTemplateCode)",...d.parameters?.docs?.source}}};const ge=["WithLabel","Disabled","Group","Isolated"];export{l as Disabled,i as Group,d as Isolated,c as WithLabel,ge as __namedExportsOrder,ve as default};
