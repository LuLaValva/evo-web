import{b as i}from"./utils-DyU2_5R1.js";import{_ as e,a as s,j as n,k as a}from"./dom-ByZf3MQk.js";import{$ as r,a as m,b as c,c as u,C as d}from"./index-BkY14Huy.js";import{$ as h,a as v,b as y,c as g}from"./evo-icon-settings-24-Bzkqurq_.js";import{$ as k,a as T,b as _,c as w}from"./evo-icon-overflow-vertical-16-BlV72aJj.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DO3pdl0Q.js";import"./index-Bz-e3gKr.js";import"./index-VCYgT6qA.js";import"./evo-icon-spinner-24-fKp9ZYWc.js";import"./index-SLqM2JFj.js";/* empty css             */import"./evo-icon-chevron-down-16-B7IB9ME0.js";import"./index-_ZERrm0Z.js";/* empty css                    */import"./index-D_G-Cdgu.js";import"./evo-icon-tick-16-D69BQoRY.js";/* empty css             */import"./index-CuybHUEt.js";import"./evo-icon-chevron-down-12-Bix86w80.js";/* empty css                    */const x=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,S=u,C=(t=>`/${t}&`)(c),L=e("wMp9mOy","item 3","b"),E=e("k8lLdiJ","item 2","b"),M=e("ryTaSQa","item 1","b"),O=e("eXeuNGb","eBay Menu","b");function B(t){m(t.a)}const D=(t,o)=>r(t.a,{...o,content:O(t),item:n(n(a({href:"#",content:M(t)}),{type:"button",content:E(t)}),{href:"#",content:L(t)})}),R=s("iSSiHAa",S,C,B,D),A=`<evo-fake-menu-button ...input>
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
`,W=u,z=(t=>`/${t}&`)(c),H=e("Evtn53O","item 3","b"),I=e("XMw1qrB","item 2","b"),U=e("W$eOvX3","item 1","b"),q=t=>{y(t.a),g(t.a,{})},j=e("kzQjjI8",(t=>`Settings ${t}`)(v),(t=>`b/${t}&`)(h),q);function Q(t){m(t.a)}const X=(t,o)=>r(t.a,{...o,content:j(t),item:n(n(a({type:"button",content:U(t)}),{type:"button",content:I(t)}),{type:"button",content:H(t)})}),Z=s("cQN$2DW",W,z,Q,X),K=`<evo-fake-menu-button ...input>
    Settings <evo-icon-settings-24/>
    <@item type="button">item 1</@item>
    <@item type="button">item 2</@item>
    <@item type="button">item 3</@item>
</evo-fake-menu-button>
`,F=u,G=(t=>`/${t}&`)(c),N=e("eYLR5R$","item 3","b"),J=e("AKceFCB","item 2","b"),V=e("oXNk8ZE","item 1 that has very long text","b"),Y=e("GiQKo$q","<span class=custom-label-flag></span>","b"),P=e("giVXeWJ","This is the label you first see","b");function tt(t){m(t.a)}const et=(t,o)=>r(t.a,{...o,content:P(t),item:n(n(a({href:"#",content:V(t)}),{href:"#",content:J(t)}),{href:"#",content:N(t)}),label:a({content:Y(t)})}),nt=s("E6nvalR",F,G,tt,et),ot=`<style>
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
`,at=u,it=(t=>`/${t}&`)(c),st=e("j2WitqR","item 4","b"),rt=e("qa4Wcau","item 3","b"),mt=e("F_ZeZnB","item 2","b"),ct=e("zShfdOy","item 1","b"),ut=e("AneStKG","eBay Menu separator","b");function lt(t){m(t.a)}const pt=(t,o)=>r(t.a,{...o,content:ut(t),item:n(n(n(n(a({href:"#",content:ct(t)}),{href:"#",content:mt(t)}),{separator:!0}),{href:"#",content:rt(t)}),{href:"#",content:st(t)})}),bt=s("Vq698wL",at,it,lt,pt),ft=`<evo-fake-menu-button ...input>
    <@item href="#">item 1</@item>
    <@item href="#">item 2</@item>
    <@item separator/>
    <@item href="#">item 3</@item>
    <@item href="#">item 4</@item>
    eBay Menu separator
</evo-fake-menu-button>
`,$t=u,dt=(t=>`/${t}&`)(c),ht=e("aFZIQLl","item 3","b"),vt=e("mqo7xUa","item 2","b"),yt=e("hRvLm2Z","item 1","b"),gt=t=>{_(t.a),w(t.a,{})},kt=e("AWHYUxh",T,(t=>`/${t}&`)(k),gt);function Tt(t){m(t.a)}const _t=(t,o)=>r(t.a,{variant:"icon",a11yText:"eBay Menu",...o,content:kt(t),item:n(n(a({href:"#",content:yt(t)}),{href:"#",content:vt(t)}),{href:"#",content:ht(t)})}),wt=s("zpTLKUA",$t,dt,Tt,_t),xt=`<evo-fake-menu-button variant="icon" a11yText="eBay Menu" ...input>
    <evo-icon-overflow-vertical-16/>
    <@item href="#">item 1</@item>
    <@item href="#">item 2</@item>
    <@item href="#">item 3</@item>
</evo-fake-menu-button>
`,Gt={title:"buttons/evo-fake-menu-button",component:d,parameters:{docs:{description:{component:x}}},argTypes:{open:{controllable:!0},variant:{options:["button (default)","form","icon"],control:"select"},priority:{options:["none (default)","primary","secondary","delete","tertiary"],control:"select"},size:{options:["regular (default)","large","small"],control:"inline-radio"},label:{"@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},strategy:{options:["absolute","fixed"],control:"inline-radio"},item:{"@":{href:{type:"string",control:"text",description:"URL for the link item. Omit for button items."},type:{options:["button","submit"],control:{type:"select"}},"<a> attributes":{description:"All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through to `<@item>`"}}},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},l=i(R,A),p=i(Z,K),b=i(nt,ot),f=i(bt,ft),$=i(wt,xt);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"buildExtensionTemplate(IconTextTemplate, IconTextCode)",...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"buildExtensionTemplate(CustomLabelTemplate, CustomLabelCode)",...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorCode)",...f.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"buildExtensionTemplate(OverflowTemplate, OverflowCode)",...$.parameters?.docs?.source}}};const Nt=["Default","IconText","CustomLabel","Separator","Overflow"];export{b as CustomLabel,l as Default,p as IconText,$ as Overflow,f as Separator,Nt as __namedExportsOrder,Gt as default};
