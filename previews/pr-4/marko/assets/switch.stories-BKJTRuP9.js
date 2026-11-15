import{b as c}from"./utils-DyU2_5R1.js";import{a as r,b as p}from"./dom-x1z4vtvC.js";import{$ as d,a as m,b,c as u,d as h,C as f}from"./index-BzBf2ist.js";import"./iframe-cyLTEVRG.js";import"./preload-helper-PPVm8Dsz.js";const $=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-switch
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-evo-switch)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-evo-switch)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-switch/examples)
`,w=h,_=(e=>`/${e}&`)(u);function g(e){b(e.a)}const v=p(2,e=>{d(e.a,e.c.class),m(e.a,(({class:t,...o})=>o)(e.c))}),D=r("WIj620c",w,_,g,v),y=`<evo-switch ...input/>
`,T=(e=>`<span class=field><label class="field__label field__label--start" for=switch>Option</label>${e}</span>`)(h),k=(e=>`Db/${e}&l`)(u);function x(e){b(e.a)}const C=p(2,e=>{const t={...e.c,id:"switch"};d(e.a,t.class),m(e.a,(({class:o,...i})=>i)(t))}),E=r("HfITpZ1",T,k,x,C),L=`<span class="field">
    <label class="field__label field__label--start" for="switch">
        Option
    </label>
    <evo-switch ...input id="switch"/>
</span>
`,S=(e=>`<span class=field><label class="field__label field__label--start field__label--disabled" for=switch>Option</label>${e}</span>`)(h),W=(e=>`Db/${e}&l`)(u);function I(e){b(e.a)}const O=p(2,e=>{const t={...e.c,disabled:!0,id:"switch"};d(e.a,t.class),m(e.a,(({class:o,...i})=>i)(t))}),j=r("PlsrXPd",S,W,I,O),H=`<span class="field">
    <label
        class="field__label field__label--start field__label--disabled"
        for="switch"
    >
        Option
    </label>
    <evo-switch ...input disabled id="switch" />
</span>
`,B={title:"form input/evo-switch",component:f,parameters:{docs:{description:{component:$}}},argTypes:{checked:{controllable:!0,type:"boolean",control:"boolean",description:"The checked/selected state."},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},a=c(D,y),s=c(E,L),l=c(j,H),n={};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLabelTemplate, WithLabelCode)",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledCode)",...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};const U=["Default","WithLabel","Disabled","Isolated"];export{a as Default,l as Disabled,n as Isolated,s as WithLabel,U as __namedExportsOrder,B as default};
