import{b as l}from"./utils-DyU2_5R1.js";import{a as i,_ as r,k as c}from"./dom-ByZf3MQk.js";import{c as n,$ as a,a as o,b as s,I as y}from"./index-Bbu-WMi0.js";import{$ as v,a as I,b as T,c as _,d as L,e as W,f as F,g as E,h as k,i as C,j as D,k as w}from"./evo-icon-mail-24-CTCHS-RT.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bbe4S3aW.js";/* empty css             *//* empty css                *//* empty css                    */import"./index-SLqM2JFj.js";const S=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-input
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

A single-line text input field. For multiline text input, use \`evo-textarea\`.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/?path=/story/form-input-evo-input)
- [Storybook Docs](https://ebay.github.io/evo-web/?path=/docs/form-input-evo-input)
- [Code Examples](https://github.com/eBay/evo-web/tree/master/packages/evo-marko/src/tags/evo-input/examples)
`,A=(e=>`<!>${e}<!>`)(s),M=(e=>`b/${e}&b`)(o);function P(e){a(e.a)}const H=(e,t)=>n(e.a,t),B=i("eFVK$Lk",A,M,P,H),z=`<evo-input ...input/>
`,R=(e=>`<span class=field><label class="field__label field__label--start" for=textbox>Email address</label>${e}</span>`)(s),U=(e=>`Db/${e}&l`)(o);function j(e){a(e.a)}const N=(e,t)=>n(e.a,{...t,id:"textbox",value:"test"}),O=i("cd5vAMj",R,U,j,N),J=`<span class="field">
    <label class="field__label field__label--start" for="textbox">
        Email address
    </label>
    <evo-input
        ...input
        id="textbox"
        value="test"
    />
</span>
`,Q=(e=>`<span class=field><label class="field__label field__label--start field__label--disabled" for=textbox>Email address</label>${e}</span>`)(s),q=(e=>`Db/${e}&l`)(o);function V(e){a(e.a)}const K=(e,t)=>n(e.a,{...t,disabled:!0,id:"textbox",value:"test"}),X=i("VfHH5y3",Q,q,V,K),Z=`<span class="field">
    <label
        class="field__label field__label--start field__label--disabled"
        for="textbox"
    >
        Email address
    </label>
    <evo-input ...input disabled id="textbox" value="test"/>
</span>
`,G=(e=>`<!>${e}<!>`)(s),Y=(e=>`b/${e}&b`)(o);function ee(e){a(e.a)}const te=(e,t)=>n(e.a,{floatingLabel:"Email address",...t}),ne=i("rTQz2lI",G,Y,ee,te),ae=`<evo-input
    floatingLabel="Email address"
    ...input
/>
`,oe=((e,t,g)=>`<!>${e}${t}${g}<!>`)(s,s,s),se=((e,t,g)=>`b/${e}&/${t}&/${g}&b`)(o,o,o);function le(e){a(e.a),a(e.b),a(e.c)}const ie=(e,t)=>{n(e.a,{...t,floatingLabel:"First Name",autocomplete:"given-name"}),n(e.b,{...t,floatingLabel:"Last Name",autocomplete:"family-name"}),n(e.c,{...t,floatingLabel:"Email address",autocomplete:"email",placeholder:"valid email address"})},ce=i("Xqb5RId",oe,se,le,ie),re=`<evo-input
    ...input
    floatingLabel="First Name"
    autocomplete="given-name"
/>

<evo-input
    ...input
    floatingLabel="Last Name"
    autocomplete="family-name"
/>

<evo-input
    ...input
    floatingLabel="Email address"
    autocomplete="email"
    placeholder="valid email address"
/>
`,pe=(e=>`<!>${e}<!>`)(s),ue=(e=>`b/${e}&b`)(o),me=e=>{L(e.a),W(e.a,{})},de=r("h3mCe6A",I,(e=>`/${e}&`)(v),me),$e=e=>{F(e.a),E(e.a,{})},be=r("QTFM0i2",_,(e=>`/${e}&`)(T),$e);function fe(e){a(e.a)}const xe=(e,t)=>n(e.a,{placeholder:"name",...t,prefixIcon:c({content:de(e)}),postfixIcon:c({"aria-label":"Clear",content:be(e)})}),he=i("Ohq019T",pe,ue,fe,xe),ge=`<evo-input placeholder="name" ...input>
    <@postfixIcon aria-label="Clear">
        <evo-icon-clear-24/>
    </@postfixIcon>
    <@prefixIcon>
        <evo-icon-profile-24/>
    </@prefixIcon>
</evo-input>
`,ve=(e=>`<!>${e}<!>`)(s),Ie=(e=>`b/${e}&b`)(o),Te=e=>{L(e.a),W(e.a,{})},_e=r("JcB8OFO",I,(e=>`/${e}&`)(v),Te);function Le(e){a(e.a)}const We=(e,t)=>n(e.a,{placeholder:"name",...t,postfixIcon:c({content:_e(e)})}),Fe=i("FBaIAuy",ve,Ie,Le,We),Ee=`<evo-input
    placeholder="name"
    ...input
>
    <@postfixIcon>
        <evo-icon-profile-24/>
    </@postfixIcon>
</evo-input>
`,ke=(e=>`<!>${e}<!>`)(s),Ce=(e=>`b/${e}&b`)(o),De=e=>{D(e.a),w(e.a,{})},we=r("mUDJas6",C,(e=>`/${e}&`)(k),De);function ye(e){a(e.a)}const Se=(e,t)=>n(e.a,{placeholder:"email",...t,prefixIcon:c({content:we(e)})}),Ae=i("pMj4WtB",ke,Ce,ye,Se),Me=`<evo-input
    placeholder="email"
    ...input
>
    <@prefixIcon>
        <evo-icon-mail-24/>
    </@prefixIcon>
</evo-input>
`,Pe=(e=>`<!>${e}<!>`)(s),He=(e=>`b/${e}&b`)(o),Be=e=>{F(e.a),E(e.a,{})},ze=r("sC0aSuF",_,(e=>`/${e}&`)(T),Be),Re=r("s4oCFQL","/mo","b"),Ue=r("UNdZ6S2","$","b"),je=e=>{D(e.a),w(e.a,{})},Ne=r("uxO9n0w",C,(e=>`/${e}&`)(k),je);function Oe(e){a(e.a)}const Je=(e,t)=>n(e.a,{placeholder:"0.00",...t,postfixIcon:c({content:ze(e)}),postfixText:c({content:Re(e)}),prefixText:c({content:Ue(e)}),prefixIcon:c({content:Ne(e)})}),Qe=i("JRPHMmn",Pe,He,Oe,Je),qe=`<evo-input
    placeholder="0.00"
    ...input
>
    <@prefixIcon>
        <evo-icon-mail-24/>
    </@prefixIcon>
    <@prefixText>$</@prefixText>
    <@postfixText>/mo</@postfixText>
    <@postfixIcon>
        <evo-icon-clear-24/>
    </@postfixIcon>
</evo-input>
`,st={title:"form input/evo-input",component:y,parameters:{docs:{description:{component:S}}},argTypes:{value:{controllable:!0,type:"string",control:"text",description:"The value of the input"},inputSize:{options:["regular (default)","large"],control:"inline-radio"},prefixText:{"@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},postfixText:{"@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},postfixIcon:{"@":{"<button> attributes":{description:"If `a11yText` is present, all attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},p=l(B,z),u=l(O,J),m=l(X,Z),d=l(ne,ae),$=l(ce,re),b=l(Ae,Me),f=l(Fe,Ee),x=l(he,ge),h=l(Qe,qe);p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLabelTemplate, WithLabelCode)",...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledCode)",...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(FloatingLabelTemplate, FloatingLabelCode)",...d.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"buildExtensionTemplate(FloatingLabelAutocompleteTemplate, FloatingLabelAutocompleteCode)",...$.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithPrefixIconTemplate, WithPrefixIconCode)",...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithPostfixIconTemplate, WithPostfixIconCode)",...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithBothIconsTemplate, WithBothIconsCode)",...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"buildExtensionTemplate(FullyDecoratedTemplate, FullyDecoratedCode)",...h.parameters?.docs?.source}}};const lt=["Default","WithLabel","Disabled","FloatingLabel","FloatingLabelAutocomplete","WithPrefixIcon","WithPostfixIcon","WithBothIcons","FullyDecorated"];export{p as Default,m as Disabled,d as FloatingLabel,$ as FloatingLabelAutocomplete,h as FullyDecorated,x as WithBothIcons,u as WithLabel,f as WithPostfixIcon,b as WithPrefixIcon,lt as __namedExportsOrder,st as default};
