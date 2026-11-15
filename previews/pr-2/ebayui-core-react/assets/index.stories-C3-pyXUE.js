import{R as e}from"./iframe-Diyud0qJ.js";import{E as a,a as l,b as c,c as m,d as p,e as t}from"./item-tile-CPxtD924.js";import{E as b}from"./signal-BLJaUpK_.js";import{E as y}from"./ebay-icon-heart-16-DASMpFXU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CmG1AlvP.js";import"./file-preview-card-C4IC4fLU.js";import"./icon-button-D7DGv8on.js";import"./badge-BRaaBvQZ.js";import"./menu-button-DkSHg-Ns.js";import"./menu-item-separator-DYzT0LfV.js";import"./index-BkO6S4Io.js";import"./ebay-icon-tick-16-muVaVXrv.js";import"./button-Bto57m1D.js";import"./progress-spinner-PnnFIR0M.js";import"./ebay-icon-spinner-30-a6KsJbOM.js";import"./ebay-icon-chevron-down-12-B1oDoixc.js";import"./index-B8Qar043.js";import"./floating-ui-DNuLB7HF.js";import"./jsx-runtime-u17CrQMm.js";import"./index-B0rmkM6f.js";import"./index-B61vV2Op.js";import"./ebay-icon-overflow-vertical-16-Dw5oxeq1.js";import"./ebay-icon-close-16-B4Be4hSn.js";import"./ebay-icon-delete-16-REfUIHNi.js";import"./ebay-icon-play-16-CaYsl9MJ.js";const R={title:"layout/ebay-item-tile",component:a,argTypes:{file:{description:"File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview",table:{category:"File"}},layout:{control:{type:"select"},options:["gallery","list"],defaultValue:{summary:"gallery"},description:"The layout of the item-tile. The default is gallery. The list layout takes more horizontal space and is better for displaying more information."},href:{control:{type:"text"},description:"The URL to navigate to when the item-tile is clicked. If not provided, the item will not be clickable."},a11yExternalLinkText:{type:"string",control:{type:"text"},description:'When provided, the preview link opens in a new tab (`target="_blank"`) and this text is rendered in a visually-hidden `<span class="clipped">` inside the anchor for screen readers with a ` - ` prefix automatically added (e.g. `"opens in new window or tab"`).'},onAction:{action:"onAction",description:"Triggered when the action button is clicked",table:{category:"Events",defaultValue:{summary:""}}},EbayItemTileAction:{description:"Action component that will be used to render EbayIconButton and needs to have an `icon` and `aria-label` to be render.",options:["icon","aria-label"],control:{type:"select"}}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayItemTile } from "@ebay/ui-core-react/ebay-item-tile";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/badge";
import "@ebay/skin/button";
import "@ebay/skin/file-preview-card";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/item-tile";
import "@ebay/skin/menu";
import "@ebay/skin/menu-button";
import "@ebay/skin/progress-spinner";
import "@ebay/skin/signal";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/badge.css";
@import "@ebay/skin/button.css";
@import "@ebay/skin/file-preview-card.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/item-tile.css";
@import "@ebay/skin/menu.css";
@import "@ebay/skin/menu-button.css";
@import "@ebay/skin/progress-spinner.css";
@import "@ebay/skin/signal.css";
\`\`\``}}}},n=i=>e.createElement(a,{file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...i},e.createElement(l,{"aria-label":"action label",icon:e.createElement(y,null)}),e.createElement(c,null,e.createElement(b,{status:"time-sensitive"},"Time Sensitive")),e.createElement(m,{href:"/collection"},"Apple iPhone 11 Pro Max "),e.createElement(p,null,"256GB Space Gray"),e.createElement(t,{className:"price"},"$29.99"),e.createElement(t,{as:"div"},e.createElement("a",{href:"https://ebay.com"},"Buy it now")),e.createElement(t,null,"Free shipping")),r=i=>e.createElement(a,{file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...i},e.createElement(c,null,e.createElement(b,{status:"time-sensitive"},"Time Sensitive")),e.createElement(m,{href:"/collection"},"Apple iPhone 11 Pro Max "),e.createElement(p,null,"256GB Space Gray"),e.createElement(t,{className:"price"},"$29.99"),e.createElement(t,{as:"div"},e.createElement("a",{href:"https://ebay.com"},"Buy it now")),e.createElement(t,null,"Free shipping")),s=i=>e.createElement(a,{file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...i},e.createElement(l,{"aria-label":"action label",icon:e.createElement(y,null)}),e.createElement(c,null,e.createElement(b,{status:"time-sensitive"},"Time Sensitive")),e.createElement(t,{className:"price"},"$29.99"),e.createElement(t,{as:"div"},e.createElement("a",{href:"https://ebay.com"},"Buy it now")),e.createElement(t,null,"Free shipping")),o=i=>e.createElement(a,{href:"https://ebay.com",a11yExternalLinkText:"opens in new window or tab",file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...i},e.createElement(l,{"aria-label":"action label",icon:e.createElement(y,null)}),e.createElement(m,{href:"https://ebay.com"},"Apple iPhone 11 Pro Max"),e.createElement(p,null,"256GB Space Gray"),e.createElement(t,{className:"price"},"$29.99"));n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <EbayItemTile file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args}>
        <EbayItemTileAction aria-label="action label" icon={<EbayIconHeart16 />} />
        <EbayItemTileSupertitle>
            <EbaySignal status="time-sensitive">Time Sensitive</EbaySignal>
        </EbayItemTileSupertitle>
        <EbayItemTileTitle href="/collection">Apple iPhone 11 Pro Max </EbayItemTileTitle>
        <EbayItemTileSubtitle>256GB Space Gray</EbayItemTileSubtitle>
        <EbayItemTileDescription className="price">$29.99</EbayItemTileDescription>
        <EbayItemTileDescription as="div">
            <a href="https://ebay.com">Buy it now</a>
        </EbayItemTileDescription>
        <EbayItemTileDescription>Free shipping</EbayItemTileDescription>
    </EbayItemTile>`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <EbayItemTile file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args}>
        <EbayItemTileSupertitle>
            <EbaySignal status="time-sensitive">Time Sensitive</EbaySignal>
        </EbayItemTileSupertitle>
        <EbayItemTileTitle href="/collection">Apple iPhone 11 Pro Max </EbayItemTileTitle>
        <EbayItemTileSubtitle>256GB Space Gray</EbayItemTileSubtitle>
        <EbayItemTileDescription className="price">$29.99</EbayItemTileDescription>
        <EbayItemTileDescription as="div">
            <a href="https://ebay.com">Buy it now</a>
        </EbayItemTileDescription>
        <EbayItemTileDescription>Free shipping</EbayItemTileDescription>
    </EbayItemTile>`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <EbayItemTile file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args}>
        <EbayItemTileAction aria-label="action label" icon={<EbayIconHeart16 />} />
        <EbayItemTileSupertitle>
            <EbaySignal status="time-sensitive">Time Sensitive</EbaySignal>
        </EbayItemTileSupertitle>
        <EbayItemTileDescription className="price">$29.99</EbayItemTileDescription>
        <EbayItemTileDescription as="div">
            <a href="https://ebay.com">Buy it now</a>
        </EbayItemTileDescription>
        <EbayItemTileDescription>Free shipping</EbayItemTileDescription>
    </EbayItemTile>`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <EbayItemTile href="https://ebay.com" a11yExternalLinkText="opens in new window or tab" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args}>
        <EbayItemTileAction aria-label="action label" icon={<EbayIconHeart16 />} />
        <EbayItemTileTitle href="https://ebay.com">Apple iPhone 11 Pro Max</EbayItemTileTitle>
        <EbayItemTileSubtitle>256GB Space Gray</EbayItemTileSubtitle>
        <EbayItemTileDescription className="price">$29.99</EbayItemTileDescription>
    </EbayItemTile>`,...o.parameters?.docs?.source}}};const W=["Default","NoAction","WithoutSecondarySection","ExternalLink"];export{n as Default,o as ExternalLink,r as NoAction,s as WithoutSecondarySection,W as __namedExportsOrder,R as default};
