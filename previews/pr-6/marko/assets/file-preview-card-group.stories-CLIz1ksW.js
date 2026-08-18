import{a as i,b as a,e as l,j as r,k as o,E as k}from"./dom-ByZf3MQk.js";import{$ as s,a as p,b as d,c as u,F as y}from"./index-D2xLB_7u.js";import{b as m}from"./utils-DyU2_5R1.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DmMESh3v.js";import"./index-DO3pdl0Q.js";import"./index-Bz-e3gKr.js";import"./index-VCYgT6qA.js";import"./evo-icon-spinner-24-fKp9ZYWc.js";import"./index-SLqM2JFj.js";/* empty css             */import"./evo-icon-chevron-down-16-B7IB9ME0.js";import"./index-_ZERrm0Z.js";/* empty css                    */import"./evo-icon-play-16-BMlgBiVl.js";import"./evo-icon-close-16-T-sOsZXf.js";const C=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,b=d,v=(e=>`/${e}&`)(p),f=l(4,e=>u(e.a,{...e.c,card:r(o({file:e.d,cancelAction:o({a11yText:"Cancel upload",onClick:D}),deleteAction:o({a11yText:"Delete",onClick:A})}),{file:e.d,cancelAction:o({a11yText:"Cancel upload",onClick:w}),deleteAction:o({a11yText:"Delete",onClick:h})})})),$=a(3,f);function x(e){s(e.a),$(e,{name:"frog.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"})}const T=a(2,f);function h(){console.log("delete clicked")}function w(){console.log("cancel upload clicked")}function A(){console.log("delete clicked")}function D(){console.log("cancel upload clicked")}const j=i("yCGZMRW",b,v,x,T),M=`<const/file={
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
`,_=d,E=(e=>`/${e}&`)(p),g=l(4,e=>{let c;k([...Array(35)],B=>{c=r(c,{file:e.d,cancelAction:o({a11yText:"Cancel upload",onClick:z}),deleteAction:o({a11yText:"Delete",onClick:R})})}),u(e.a,{...e.c,seeMoreAction:o({a11yText:"See More",onClick:O}),card:c})}),S=a(3,g);function q(e){s(e.a),S(e,{name:"frog.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"})}const G=a(2,g);function O(){console.log("see more clicked")}function R(){console.log("delete clicked",index)}function z(){console.log("cancel upload clicked",index)}const F=i("V$3rKzd",_,E,q,G),P=`<const/file={
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
`,ae={title:"media/evo-file-preview-card-group",component:y,parameters:{docs:{description:{component:C}}},argTypes:{card:{"@":{"<evo-file-preview-card> attributes":{description:"All attributes and event handlers from [the `<evo-file-preview-card>` tag](?path=/docs/media-evo-file-preview-card--docs) will be passed through to `<@card>`"}}},seeMoreAction:{"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@seeMoreAction>`"}}},visibleCardCount:{controllable:!0}}},t=m(j,M),n=m(F,P);t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ManyCardsTemplate, ManyCardsTemplateCode)",...n.parameters?.docs?.source}}};const ce=["Default","ManyCards"];export{t as Default,n as ManyCards,ce as __namedExportsOrder,ae as default};
