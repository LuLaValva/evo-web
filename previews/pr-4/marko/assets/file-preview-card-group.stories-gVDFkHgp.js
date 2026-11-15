import{a as i,b as a,e as l,j as r,k as o,E as b}from"./dom-CIHBwv1V.js";import{$ as s,a as p,b as d,c as u,F as y}from"./index-BtL6U7ck.js";import{b as m}from"./utils-DyU2_5R1.js";import"./iframe-CfBr7C7U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fIyrwBt6.js";import"./index-NTZEOFt6.js";import"./index-eHCi5y9L.js";import"./index-CqXhae1j.js";import"./evo-icon-spinner-24-WpMhnVfz.js";import"./index-DUawFjLf.js";/* empty css             */import"./evo-icon-chevron-down-16-C0ookNav.js";import"./index-Bhwikpw5.js";/* empty css                    */import"./evo-icon-play-16-DOcMJ8XN.js";import"./evo-icon-close-16-CgFHDV5Q.js";const k=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-file-preview-card-group
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

Group of file preview cards, primarily used alongside \`evo-file-input\`.

## Compatibility

This component only works on Marko 5 and later.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/media-evo-file-preview-card-group)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/media-evo-file-preview-card-group)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-file-preview-card-group/examples)
`,v=d,C=(e=>`/${e}&`)(p),f=l(4,e=>u(e.a,{...e.c,card:r(o({file:e.d,cancelAction:o({a11yText:"Cancel upload",onClick:D}),deleteAction:o({a11yText:"Delete",onClick:A})}),{file:e.d,cancelAction:o({a11yText:"Cancel upload",onClick:x}),deleteAction:o({a11yText:"Delete",onClick:T})})})),$=a(3,f);function h(e){s(e.a),$(e,{name:"frog.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"})}const w=a(2,f);function T(){console.log("delete clicked")}function x(){console.log("cancel upload clicked")}function A(){console.log("delete clicked")}function D(){console.log("cancel upload clicked")}const M=i("yCGZMRW",v,C,h,w),j=`<const/file={
  name: "frog.jpg",
  type: "image/jpeg",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
}>

<evo-file-preview-card-group ...input>
        <@card file=file>
            <@deleteAction a11yText="Delete" onClick() {  console.log("delete clicked"); }/>
            <@cancelAction a11yText="Cancel upload" onClick() {  console.log("cancel upload clicked"); }/>
        </@card>
        <@card file=file>
            <@deleteAction a11yText="Delete" onClick() {  console.log("delete clicked"); }/>
            <@cancelAction a11yText="Cancel upload" onClick() {  console.log("cancel upload clicked"); }/>
        </@card>
</evo-file-preview-card-group>
`,_=d,S=(e=>`/${e}&`)(p),g=l(4,e=>{let c;b([...Array(35)],V=>{c=r(c,{file:e.d,cancelAction:o({a11yText:"Cancel upload",onClick:z}),deleteAction:o({a11yText:"Delete",onClick:R})})}),u(e.a,{...e.c,seeMoreAction:o({a11yText:"See More",onClick:O}),card:c})}),E=a(3,g);function q(e){s(e.a),E(e,{name:"frog.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"})}const G=a(2,g);function O(){console.log("see more clicked")}function R(){console.log("delete clicked",index)}function z(){console.log("cancel upload clicked",index)}const F=i("V$3rKzd",_,S,q,G),P=`<const/file={
  name: "frog.jpg",
  type: "image/jpeg",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
}>


<evo-file-preview-card-group ...input>
   <for|index| of=[...Array(35)]>
        <@card file=file>
            <@deleteAction a11yText="Delete" onClick() { console.log("delete clicked", index); }/>
            <@cancelAction a11yText="Cancel upload" onClick() { console.log("cancel upload clicked", index); }/>
        </@card>
    </for>
    <@seeMoreAction a11yText="See More" onClick() { console.log("see more clicked") }/>
</evo-file-preview-card-group>
`,ae={title:"media/evo-file-preview-card-group",component:y,parameters:{docs:{description:{component:k}}},argTypes:{card:{description:"A repeatable attribute tag for each file preview card. Takes the same attributes as file-preview-card","@":{"<evo-file-preview-card> attributes":{description:"All attributes and event handlers from [the `<evo-file-preview-card>` tag](?path=/docs/media-evo-file-preview-card--docs) will be passed through to `<@card>`"}}},seeMoreAction:{description:'An additional "See More" tag will be rendered if there are too many cards shown at once',"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@seeMoreAction>`"}}},visibleCardCount:{controllable:!0,type:"number",control:"number",description:'The number of cards visible before a "see more" card is shown as the last one',table:{defaultValue:{summary:"15"}}}}},t=m(M,j),n=m(F,P);t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ManyCardsTemplate, ManyCardsTemplateCode)",...n.parameters?.docs?.source}}};const ce=["Default","ManyCards"];export{t as Default,n as ManyCards,ce as __namedExportsOrder,ae as default};
