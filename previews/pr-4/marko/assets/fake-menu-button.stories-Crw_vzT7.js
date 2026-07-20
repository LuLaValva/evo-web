import{b as i}from"./utils-DyU2_5R1.js";import{_ as e,a as r,j as n,k as a}from"./dom-x1z4vtvC.js";import{$ as s,a as l,b as m,c,C as h}from"./index-Cv6V8aRP.js";import{$,a as y,b as g,c as v}from"./evo-icon-settings-24-BkJmmMcF.js";import{$ as k,a as w,b as T,c as x}from"./evo-icon-overflow-vertical-16-DxSUfwPM.js";import"./iframe-cyLTEVRG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-FiRbVN.js";import"./index-D_aI6N9n.js";import"./index-CxqitZvT.js";import"./evo-icon-spinner-24-BoeIciOn.js";import"./index-BoCxi-ng.js";/* empty css             */import"./evo-icon-chevron-down-16-C8FdJKZA.js";import"./index-BpjoVTYo.js";/* empty css                    */import"./index-D0rgbL5X.js";import"./evo-icon-tick-16-CVnWLuvy.js";/* empty css             */import"./index-Di3V0m88.js";import"./evo-icon-chevron-down-12-U9dqAOq4.js";/* empty css                    */const _=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-fake-menu-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A button which shows a menu of links when clicked.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-evo-fake-menu-button)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-evo-fake-menu-button)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-fake-menu-button/examples)
`,S=c,C=(t=>`/${t}&`)(m),L=e("wMp9mOy","item 3","b"),E=e("k8lLdiJ","item 2","b"),W=e("ryTaSQa","item 1","b"),M=e("eXeuNGb","eBay Menu","b");function A(t){l(t.a)}const O=(t,o)=>s(t.a,{...o,content:M(t),item:n(n(a({href:"#",content:W(t)}),{type:"button",content:E(t)}),{href:"#",content:L(t)})}),B=r("iSSiHAa",S,C,A,O),R=`<evo-fake-menu-button ...input>
    <@item href="#">
        item 1
    </@item>
    <@item type="button">
        item 2
    </@item>
    <@item href="#">
        item 3
    </@item>
    eBay Menu
</evo-fake-menu-button>
`,D=c,z=(t=>`/${t}&`)(m),H=e("Evtn53O","item 3","b"),I=e("XMw1qrB","item 2","b"),U=e("W$eOvX3","item 1","b"),q=t=>{g(t.a),v(t.a,{})},j=e("kzQjjI8",(t=>`Settings ${t}`)(y),(t=>`b/${t}&`)($),q);function N(t){l(t.a)}const Q=(t,o)=>s(t.a,{...o,content:j(t),item:n(n(a({type:"button",content:U(t)}),{type:"button",content:I(t)}),{type:"button",content:H(t)})}),V=r("cQN$2DW",D,z,N,Q),X=`<evo-fake-menu-button ...input>
    Settings <evo-icon-settings-24/>
    <@item type="button">item 1</@item>
    <@item type="button">item 2</@item>
    <@item type="button">item 3</@item>
</evo-fake-menu-button>
`,Z=c,F=(t=>`/${t}&`)(m),K=e("eYLR5R$","item 3","b"),G=e("AKceFCB","item 2","b"),J=e("oXNk8ZE","item 1 that has very long text","b"),Y=e("GiQKo$q","<span class=custom-label-flag></span>","b"),P=e("giVXeWJ","This is the label you first see","b");function tt(t){l(t.a)}const et=(t,o)=>s(t.a,{...o,content:P(t),item:n(n(a({href:"#",content:J(t)}),{href:"#",content:G(t)}),{href:"#",content:K(t)}),label:a({content:Y(t)})}),nt=r("E6nvalR",Z,F,tt,et),ot=`<style>
    span.custom-label-flag {
        background-image: url("https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png");
        background-position: 0 -25px;
        background-repeat: none;
        display: inline-block;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        width: 26px;
    }
</style>

<evo-fake-menu-button ...input>
    <@label>
        <span class="custom-label-flag"/>
    </@label>
    This is the label you first see
    <@item href="#">item 1 that has very long text</@item>
    <@item href="#">item 2</@item>
    <@item href="#">item 3</@item>
</evo-fake-menu-button>
`,at=c,it=(t=>`/${t}&`)(m),rt=e("j2WitqR","item 4","b"),st=e("qa4Wcau","item 3","b"),lt=e("F_ZeZnB","item 2","b"),mt=e("zShfdOy","item 1","b"),ct=e("AneStKG","eBay Menu separator","b");function pt(t){l(t.a)}const ut=(t,o)=>s(t.a,{...o,content:ct(t),item:n(n(n(n(a({href:"#",content:mt(t)}),{href:"#",content:lt(t)}),{separator:!0}),{href:"#",content:st(t)}),{href:"#",content:rt(t)})}),bt=r("Vq698wL",at,it,pt,ut),dt=`<evo-fake-menu-button ...input>
    <@item href="#">item 1</@item>
    <@item href="#">item 2</@item>
    <@item separator/>
    <@item href="#">item 3</@item>
    <@item href="#">item 4</@item>
    eBay Menu separator
</evo-fake-menu-button>
`,ft=c,ht=(t=>`/${t}&`)(m),$t=e("aFZIQLl","item 3","b"),yt=e("mqo7xUa","item 2","b"),gt=e("hRvLm2Z","item 1","b"),vt=t=>{T(t.a),x(t.a,{})},kt=e("AWHYUxh",w,(t=>`/${t}&`)(k),vt);function wt(t){l(t.a)}const Tt=(t,o)=>s(t.a,{variant:"icon",a11yText:"eBay Menu",...o,content:kt(t),item:n(n(a({href:"#",content:gt(t)}),{href:"#",content:yt(t)}),{href:"#",content:$t(t)})}),xt=r("zpTLKUA",ft,ht,wt,Tt),_t=`<evo-fake-menu-button variant="icon" a11yText="eBay Menu" ...input>
    <evo-icon-overflow-vertical-16/>
    <@item href="#">item 1</@item>
    <@item href="#">item 2</@item>
    <@item href="#">item 3</@item>
</evo-fake-menu-button>
`,Ft={title:"buttons/evo-fake-menu-button",component:h,parameters:{docs:{description:{component:_}}},argTypes:{open:{controllable:!0,type:"boolean",control:"boolean",description:"Allows control over the open state of the menu"},collapseOnSelect:{type:"boolean",control:"boolean",description:"When an option is selected, `open` is toggled to `false`."},variant:{type:"string",options:["button (default)","form","icon"],control:"select",table:{defaultValue:{summary:"button"}},description:"Controls the button style"},borderless:{type:"boolean",control:"boolean",description:'Whether button has borders. Forces `variant="button"`'},priority:{type:"string",options:["none (default)","primary","secondary","delete","tertiary"],control:"select",description:'Button priority, only used when `variant="button"`'},size:{type:"string",options:["regular (default)","large","small"],control:"inline-radio",description:"The size of the button"},transparent:{type:"boolean",control:"boolean",description:"Removes the background color of the button"},disabled:{type:"boolean",control:"boolean",description:"Will disable the entire dropdown (also disables the button trigger) if set to true"},noToggleIcon:{type:"boolean",control:"boolean",description:"Hides the chevron toggle icon."},a11yText:{type:"string",control:"text",description:"Accessible label for the button, especially for cases without visible text"},label:{description:"The prefix label. Rendered before the main content.","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},reverse:{type:"boolean",control:"boolean",description:"Expand the menu flyout to the left"},strategy:{type:"string",options:["absolute","fixed"],control:"inline-radio",table:{defaultValue:{summary:"absolute"}},description:"Positioning strategy for the dropdown. Use fixed when dropdown is contained in an overflow and needs to be visible as you scroll the screen."},flip:{type:"boolean",control:"boolean",table:{defaultValue:{summary:"false"}},description:"Adds flip to dropdown middleware. This allows the dropdown to flip automatically if it overflows"},fixWidth:{type:"boolean",control:"boolean",description:"Constrain items container width to button width"},item:{description:'A menu item. Can be a link (`href`) or a button (`type="button"`).',"@":{href:{type:"string",control:"text",description:"URL for the link item. Omit for button items."},type:{type:"string",control:{type:"select"},options:["button","submit"],description:'Set to `"button"` or `"submit"` to render a `<button>` instead of an `<a>`'},current:{type:"boolean",control:"boolean",description:"Whether the item represents the current page (sets `aria-current`)"},badgeNumber:{type:"number",control:"number",description:"Number to display in a badge"},disabled:{type:"boolean",control:"boolean",description:"Whether the item is disabled"},separator:{type:"boolean",control:"boolean",description:"When `true`, renders a visual separator instead of a menu item"},"<a> attributes":{description:"All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through to `<@item>`"}}},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},p=i(B,R),u=i(V,X),b=i(nt,ot),d=i(bt,dt),f=i(xt,_t);p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"buildExtensionTemplate(IconTextTemplate, IconTextCode)",...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"buildExtensionTemplate(CustomLabelTemplate, CustomLabelCode)",...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorCode)",...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"buildExtensionTemplate(OverflowTemplate, OverflowCode)",...f.parameters?.docs?.source}}};const Kt=["Default","IconText","CustomLabel","Separator","Overflow"];export{b as CustomLabel,p as Default,u as IconText,f as Overflow,d as Separator,Kt as __namedExportsOrder,Ft as default};
