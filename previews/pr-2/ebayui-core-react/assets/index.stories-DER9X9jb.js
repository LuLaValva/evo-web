import{R as e}from"./iframe-CxNC-Rdu.js";import{E as i}from"./file-preview-card-group-DOPrD5Ll.js";import{E as p,a as d}from"./file-preview-card-CFSwbd7e.js";import{E as y}from"./ebay-icon-heart-16-D2OL_GsK.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B16kYCzs.js";import"./icon-button-rmeEPbMZ.js";import"./badge-BYbZzdjp.js";import"./menu-button-DFP1mzUf.js";import"./menu-item-separator-ktyaAzQd.js";import"./index-BkO6S4Io.js";import"./ebay-icon-tick-16-D7MfZ9jr.js";import"./button-BzFAQpei.js";import"./progress-spinner-BT-D-IqT.js";import"./ebay-icon-spinner-30-uOMrpsrc.js";import"./ebay-icon-chevron-down-12-BOoeDnci.js";import"./index-B8Qar043.js";import"./floating-ui-4lpPxtXf.js";import"./jsx-runtime-u17CrQMm.js";import"./index-BPBEhjuw.js";import"./index-GTtpa9sJ.js";import"./ebay-icon-overflow-vertical-16-CWCnewPk.js";import"./ebay-icon-close-16-QnLgZGc9.js";import"./ebay-icon-delete-16-DDapZJ2l.js";import"./ebay-icon-play-16-ClYYlPCx.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,V={title:"media/ebay-file-preview-card-group",component:i,argTypes:{a11ySeeMoreText:{type:"string",control:{type:"text"},description:"a11y text for see more button, applied to all cards"},onDelete:{action:"onDelete",description:"Triggered when the delete button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onCancel:{action:"onCancel",description:"Triggered when the cancel button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onAction:{action:"onAction",description:"Triggered when the actiion button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onMenuAction:{action:"onMenuAction",description:"Triggered when an action is selected from the menu. ",table:{category:"Events",defaultValue:{summary:"name, event /* from ebay-menu-button */"}}}},tags:["autodocs"],parameters:{docs:{description:{component:'## Usage\n\n### Import\n\n```jsx harmony\nimport { EbayFilePreviewCardGroup } from "@ebay/ui-core-react/ebay-file-preview-card-group";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/file-preview-card-group";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/file-preview-card-group.css";\n```'}}}},o=r=>{const a=Array.from({length:3},()=>({file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},deleteText:"Delete text"}));return e.createElement(i,{...r},a.map((t,n)=>e.createElement(p,{key:n,...t})))},c=r=>{const a=Array.from({length:3},()=>({file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"}}));return e.createElement(i,{...r},a.map((t,n)=>e.createElement(p,{key:n,...t},e.createElement(d,{icon:e.createElement(y,null),"aria-label":"icon label"}))))},s=r=>{const a=Array.from({length:50},()=>({menuActions:[{event:"action1",label:"Action 1"},{event:"action2",label:"Action 2"}],file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},deleteText:"Delete",onMenuAction:m("onMenuAction"),onDelete:m("onDelete"),as:"div"}));return e.createElement(i,{a11ySeeMoreText:"see more text",...r},a.map((t,n)=>e.createElement(p,{key:n,...t})))},l=r=>{const a=Array.from({length:5},()=>({status:"uploading",file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},a11yCancelUploadText:"cancel upload text",onCancel:m("onCancel")}));return e.createElement(i,{...r},a.map((t,n)=>e.createElement(p,{key:n,...t})))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const cards: EbayFilePreviewCardProps[] = Array.from({
    length: 3
  }, () => ({
    file: {
      name: "file-name.jpg",
      type: "image",
      src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
    },
    deleteText: "Delete text"
  }));
  return <EbayFilePreviewCardGroup {...args}>
            {cards.map((cardFile, index) => <EbayFilePreviewCard key={index} {...cardFile} />)}
        </EbayFilePreviewCardGroup>;
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  const cards: EbayFilePreviewCardProps[] = Array.from({
    length: 3
  }, () => ({
    file: {
      name: "file-name.jpg",
      type: "image",
      src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
    }
  }));
  return <EbayFilePreviewCardGroup {...args}>
            {cards.map((cardFile, index) => <EbayFilePreviewCard key={index} {...cardFile}>
                    <EbayFilePreviewCardAction icon={<EbayIconHeart16 />} aria-label="icon label" />
                </EbayFilePreviewCard>)}
        </EbayFilePreviewCardGroup>;
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const cards: EbayFilePreviewCardProps[] = Array.from({
    length: 50
  }, () => ({
    menuActions: [{
      event: "action1",
      label: "Action 1"
    }, {
      event: "action2",
      label: "Action 2"
    }],
    file: {
      name: "file-name.jpg",
      type: "image",
      src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
    },
    deleteText: "Delete",
    onMenuAction: action("onMenuAction"),
    onDelete: action("onDelete"),
    as: "div"
  }));
  return <EbayFilePreviewCardGroup a11ySeeMoreText="see more text" {...args}>
            {cards.map((cardFile, index) => <EbayFilePreviewCard key={index} {...cardFile} />)}
        </EbayFilePreviewCardGroup>;
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const cards: EbayFilePreviewCardProps[] = Array.from({
    length: 5
  }, () => ({
    status: "uploading",
    file: {
      name: "file-name.jpg",
      type: "image",
      src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
    },
    a11yCancelUploadText: "cancel upload text",
    onCancel: action("onCancel")
  }));
  return <EbayFilePreviewCardGroup {...args}>
            {cards.map((cardFile, index) => <EbayFilePreviewCard key={index} {...cardFile} />)}
        </EbayFilePreviewCardGroup>;
}`,...l.parameters?.docs?.source}}};const R=["Default","WithCustomAction","ManyCards","CardsUploading"];export{l as CardsUploading,o as Default,s as ManyCards,c as WithCustomAction,R as __namedExportsOrder,V as default};
