import{b as i}from"./utils-DyU2_5R1.js";import{a as l,_ as c,k as r}from"./dom-CIHBwv1V.js";import{c as n,$ as o,a,b as s,I as D}from"./index-CmhdmxP-.js";import{$ as v,a as I,b as T,c as _,d as L,e as w,f as y,g as W,h as F,i as k,j as C,k as E}from"./evo-icon-mail-24-BN9TeKJy.js";import"./iframe-CfBr7C7U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B3T-w_nD.js";/* empty css             *//* empty css                *//* empty css                    */import"./index-DUawFjLf.js";const S=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,A=(e=>`<!>${e}<!>`)(s),M=(e=>`b/${e}&b`)(a);function P(e){o(e.a)}const H=(e,t)=>n(e.a,t),B=l("eFVK$Lk",A,M,P,H),z=`<evo-input ...input/>
`,R=(e=>`<span class=field><label class="field__label field__label--start" for=textbox>Email address</label>${e}</span>`)(s),U=(e=>`Db/${e}&l`)(a);function j(e){o(e.a)}const N=(e,t)=>n(e.a,{...t,id:"textbox",value:"test"}),O=l("cd5vAMj",R,U,j,N),J=`<span class="field">
    <label class="field__label field__label--start" for="textbox">
        Email address
    </label>
    <evo-input
        ...input
        id="textbox"
        value="test"
    />
</span>
`,Q=(e=>`<span class=field><label class="field__label field__label--start field__label--disabled" for=textbox>Email address</label>${e}</span>`)(s),q=(e=>`Db/${e}&l`)(a);function V(e){o(e.a)}const K=(e,t)=>n(e.a,{...t,disabled:!0,id:"textbox",value:"test"}),X=l("VfHH5y3",Q,q,V,K),Z=`<span class="field">
    <label
        class="field__label field__label--start field__label--disabled"
        for="textbox"
    >
        Email address
    </label>
    <evo-input ...input disabled id="textbox" value="test"/>
</span>
`,G=(e=>`<!>${e}<!>`)(s),Y=(e=>`b/${e}&b`)(a);function ee(e){o(e.a)}const te=(e,t)=>n(e.a,{floatingLabel:"Email address",...t}),ne=l("rTQz2lI",G,Y,ee,te),oe=`<evo-input
    floatingLabel="Email address"
    ...input
/>
`,ae=((e,t,g)=>`<!>${e}${t}${g}<!>`)(s,s,s),se=((e,t,g)=>`b/${e}&/${t}&/${g}&b`)(a,a,a);function ie(e){o(e.a),o(e.b),o(e.c)}const le=(e,t)=>{n(e.a,{...t,floatingLabel:"First Name",autocomplete:"given-name"}),n(e.b,{...t,floatingLabel:"Last Name",autocomplete:"family-name"}),n(e.c,{...t,floatingLabel:"Email address",autocomplete:"email",placeholder:"valid email address"})},re=l("Xqb5RId",ae,se,ie,le),ce=`<evo-input
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
`,pe=(e=>`<!>${e}<!>`)(s),de=(e=>`b/${e}&b`)(a),ue=e=>{L(e.a),w(e.a,{})},me=c("h3mCe6A",I,(e=>`/${e}&`)(v),ue),be=e=>{y(e.a),W(e.a,{})},fe=c("QTFM0i2",_,(e=>`/${e}&`)(T),be);function $e(e){o(e.a)}const xe=(e,t)=>n(e.a,{placeholder:"name",...t,prefixIcon:r({content:me(e)}),postfixIcon:r({"aria-label":"Clear",content:fe(e)})}),he=l("Ohq019T",pe,de,$e,xe),ge=`<evo-input placeholder="name" ...input>
    <@postfixIcon aria-label="Clear">
        <evo-icon-clear-24/>
    </@postfixIcon>
    <@prefixIcon>
        <evo-icon-profile-24/>
    </@prefixIcon>
</evo-input>
`,ve=(e=>`<!>${e}<!>`)(s),Ie=(e=>`b/${e}&b`)(a),Te=e=>{L(e.a),w(e.a,{})},_e=c("JcB8OFO",I,(e=>`/${e}&`)(v),Te);function Le(e){o(e.a)}const we=(e,t)=>n(e.a,{placeholder:"name",...t,postfixIcon:r({content:_e(e)})}),ye=l("FBaIAuy",ve,Ie,Le,we),We=`<evo-input
    placeholder="name"
    ...input
>
    <@postfixIcon>
        <evo-icon-profile-24/>
    </@postfixIcon>
</evo-input>
`,Fe=(e=>`<!>${e}<!>`)(s),ke=(e=>`b/${e}&b`)(a),Ce=e=>{C(e.a),E(e.a,{})},Ee=c("mUDJas6",k,(e=>`/${e}&`)(F),Ce);function De(e){o(e.a)}const Se=(e,t)=>n(e.a,{placeholder:"email",...t,prefixIcon:r({content:Ee(e)})}),Ae=l("pMj4WtB",Fe,ke,De,Se),Me=`<evo-input
    placeholder="email"
    ...input
>
    <@prefixIcon>
        <evo-icon-mail-24/>
    </@prefixIcon>
</evo-input>
`,Pe=(e=>`<!>${e}<!>`)(s),He=(e=>`b/${e}&b`)(a),Be=e=>{y(e.a),W(e.a,{})},ze=c("sC0aSuF",_,(e=>`/${e}&`)(T),Be),Re=c("s4oCFQL","/mo","b"),Ue=c("UNdZ6S2","$","b"),je=e=>{C(e.a),E(e.a,{})},Ne=c("uxO9n0w",k,(e=>`/${e}&`)(F),je);function Oe(e){o(e.a)}const Je=(e,t)=>n(e.a,{placeholder:"0.00",...t,postfixIcon:r({content:ze(e)}),postfixText:r({content:Re(e)}),prefixText:r({content:Ue(e)}),prefixIcon:r({content:Ne(e)})}),Qe=l("JRPHMmn",Pe,He,Oe,Je),qe=`<evo-input
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
`,st={title:"form input/evo-input",component:D,parameters:{docs:{description:{component:S}}},argTypes:{value:{controllable:!0,type:"string",control:"text",description:"The value of the input"},inputSize:{type:"string",options:["regular (default)","large"],control:"inline-radio",description:"If large, renders larger sized input."},fluid:{type:"boolean",control:"boolean",description:"Input fills 100% of its container width."},floatingLabel:{type:"string",control:"text",description:"If set then shows this text as the floating label."},floatingLabelStatic:{type:"boolean",control:"boolean",description:'Floating label will _always_ stay in the "up" position'},prefixIcon:{description:"An `<evo-icon-*>` to show before the input. Cannot be used with floatingLabel.","@":{}},prefixText:{description:"Text to show before the input.","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},postfixText:{description:"Text to show after the input.","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},postfixIcon:{description:"An `<evo-icon-*>` to show after the input. Cannot be used with floatingLabel.","@":{a11yText:{type:"string",control:"text",description:"A descriptive label for the postfix icon button. If set, the icon becomes clickable and wrapped with a `<button>` tag."},"aria-label":{type:"string",control:"text",description:"If present, the icon will be clickable and wrapped with a `<button>` tag"},"<button> attributes":{description:"If `aria-label` is present, all attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},invalid:{type:"boolean",control:"boolean",description:"Indicates a field-level error with red border"},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},p=i(B,z),d=i(O,J),u=i(X,Z),m=i(ne,oe),b=i(re,ce),f=i(Ae,Me),$=i(ye,We),x=i(he,ge),h=i(Qe,qe);p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLabelTemplate, WithLabelCode)",...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledCode)",...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"buildExtensionTemplate(FloatingLabelTemplate, FloatingLabelCode)",...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"buildExtensionTemplate(FloatingLabelAutocompleteTemplate, FloatingLabelAutocompleteCode)",...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithPrefixIconTemplate, WithPrefixIconCode)",...f.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithPostfixIconTemplate, WithPostfixIconCode)",...$.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithBothIconsTemplate, WithBothIconsCode)",...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"buildExtensionTemplate(FullyDecoratedTemplate, FullyDecoratedCode)",...h.parameters?.docs?.source}}};const it=["Default","WithLabel","Disabled","FloatingLabel","FloatingLabelAutocomplete","WithPrefixIcon","WithPostfixIcon","WithBothIcons","FullyDecorated"];export{p as Default,u as Disabled,m as FloatingLabel,b as FloatingLabelAutocomplete,h as FullyDecorated,x as WithBothIcons,d as WithLabel,$ as WithPostfixIcon,f as WithPrefixIcon,it as __namedExportsOrder,st as default};
