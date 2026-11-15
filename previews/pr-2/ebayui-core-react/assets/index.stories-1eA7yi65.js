import{R as t}from"./iframe-B3Uo0W1F.js";import{E as a,a as u}from"./file-preview-card-Cfb5GRyF.js";import{E as y}from"./ebay-icon-heart-16-z-tPnYZa.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-JEjJjRX2.js";import"./icon-button-BH0FnV3Z.js";import"./badge-CmuSiYo3.js";import"./menu-button-Bxy3E0F0.js";import"./menu-item-separator-D7VRgD8I.js";import"./index-BkO6S4Io.js";import"./ebay-icon-tick-16-tvm_rpsD.js";import"./button-2xYkeEIS.js";import"./progress-spinner-D-UfiS2E.js";import"./ebay-icon-spinner-30-CZII7Xs9.js";import"./ebay-icon-chevron-down-12-CHZCNt_y.js";import"./index-B8Qar043.js";import"./floating-ui-CzT4Mbot.js";import"./jsx-runtime-u17CrQMm.js";import"./index-BiCMCe6U.js";import"./index-DGIwzRvr.js";import"./ebay-icon-overflow-vertical-16-CfrJuPtj.js";import"./ebay-icon-close-16-Dpp0tk8A.js";import"./ebay-icon-delete-16-ecIajPJe.js";import"./ebay-icon-play-16-BSbWcwdR.js";const B={title:"media/ebay-file-preview-card",component:a,argTypes:{a11yCancelUploadText:{type:"string",control:{type:"text"},description:"a11y text for cancel upload button"},file:{description:"File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview",table:{category:"File"}},status:{type:"string",control:{type:"text"},description:'Status of the file, can be `"uploading"` or `undefined`'},infoText:{type:"string",control:{type:"text"},description:"Text to display info in file if not image"},a11yMenuButtonText:{table:{category:"Menu Actions"},description:"Accessibility text for menu button. This is required when menuActions is set"},menuActions:{description:"Array of menu actions, containing `event` and `label`",table:{category:"Menu Actions"}},href:{type:"string",control:{type:"text"},description:"href that will wrap the preview card image"},seeMore:{type:"number",control:{type:"number"},description:'Passing a number here will convert the card to a "see more" card'},footerTitle:{type:"string",control:{type:"text"},description:"Title to display beneath the file, usually the filename"},footerSubtitle:{type:"string",control:{type:"text"},description:"Subtitle to display beneath the file title"},onMenuAction:{action:"onMenuAction",description:"Triggered when an action is selected from the menu. ",table:{category:"Events",defaultValue:{summary:"name, event /* from ebay-menu-button */"}}},onSeeMore:{action:"onSeeMore",description:"Triggered when the see more button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onDelete:{action:"onDelete",description:"Triggered when the delete button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onCancel:{action:"onCancel",description:"Triggered when the cancel button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onAction:{action:"onAction",description:"Triggered when the action button is clicked",table:{category:"Events",defaultValue:{summary:""}}},a11yExternalLinkText:{type:"string",control:{type:"text"},description:'When provided, the preview link opens in a new tab (`target="_blank"`) and this text is rendered in a visually-hidden `<span class="clipped">` inside the anchor for screen readers with a ` - ` prefix automatically added (e.g. `"opens in new window or tab"`).'},as:{description:"Element type for the preview card, default is `div`",control:"text"},deleteText:{description:"Text for delete button.",control:"text"},labelText:{description:"Text to display in the label.",control:"text"},a11ySeeMoreText:{description:"a11y text for see more button.",control:"text"},EbayFilePreviewCardAction:{description:"Action component that will be used to render EbayIconButton and needs to have an `icon` and `aria-label` to be render.",options:["icon","aria-label"],control:{type:"select"}}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayFilePreviewCard } from "@ebay/ui-core-react/ebay-file-preview-card";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/button";
import "@ebay/skin/file-preview-card";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/menu-button";
import "@ebay/skin/progress-spinner";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/button.css";
@import "@ebay/skin/file-preview-card.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/menu-button.css";
@import "@ebay/skin/progress-spinner.css";
\`\`\``}}}},r=e=>t.createElement(a,{status:"uploading",a11yCancelUploadText:"cancel upload",...e}),o=e=>t.createElement(a,{a11yCancelUploadText:"Cancel upload",deleteText:"Delete",file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...e}),i=e=>t.createElement(a,{...e,a11yCancelUploadText:"Cancel upload",file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"}},t.createElement(u,{icon:t.createElement(y,null),"aria-label":"like picture"})),n=e=>t.createElement(a,{a11yCancelUploadText:"Cancel upload",file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...e}),s=e=>t.createElement(a,{a11yCancelUploadText:"Cancel upload",deleteText:"Delete",file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},footerTitle:"Here a footer title",footerSubtitle:"Now a footer subtitle",menuActions:[{event:"edit",label:"Edit"},{event:"download",label:"Download"}],...e}),c=e=>t.createElement(a,{a11yCancelUploadText:"Cancel upload",deleteText:"Delete",file:{name:"file-name.mov",type:"video/quicktime",src:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},...e}),l=e=>t.createElement(a,{a11yCancelUploadText:"Cancel upload",deleteText:"Delete",file:{name:"file-name.csv",type:"text/csv"},footerTitle:"file-name.csv",footerSubtitle:"English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic",menuActions:[{event:"edit",label:"Edit"}],...e}),p=e=>t.createElement(a,{a11yCancelUploadText:"Cancel upload",deleteText:"Delete",file:{name:"file-name.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},menuActions:[{event:"edit",label:"Edit"},{event:"download",label:"Download"}],...e}),d=e=>t.createElement(a,{a11yCancelUploadText:"Cancel upload",deleteText:"Delete",a11ySeeMoreText:"See more",seeMore:15,file:{name:"file-name.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...e}),m=e=>t.createElement(a,{a11yCancelUploadText:"Cancel upload",href:"https://ebay.com",a11yExternalLinkText:"opens in new window or tab",file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},footerTitle:"file-name.jpg",...e});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'args => <EbayFilePreviewCard status="uploading" a11yCancelUploadText="cancel upload" {...args} />',...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args} />`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard {...args} a11yCancelUploadText="Cancel upload" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}}>
        <EbayFilePreviewCardAction icon={<EbayIconHeart16 />} aria-label="like picture" />
    </EbayFilePreviewCard>`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args} />`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} footerTitle="Here a footer title" footerSubtitle="Now a footer subtitle" menuActions={[{
  event: "edit",
  label: "Edit"
}, {
  event: "download",
  label: "Download"
}]} {...args} />`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" file={{
  name: "file-name.mov",
  type: "video/quicktime",
  src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
}} {...args} />`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" file={{
  name: "file-name.csv",
  type: "text/csv"
}} footerTitle="file-name.csv" footerSubtitle="English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic" menuActions={[{
  event: "edit",
  label: "Edit"
}]} {...args} />`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" file={{
  name: "file-name.jpg",
  type: "image/jpeg",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} menuActions={[{
  event: "edit",
  label: "Edit"
}, {
  event: "download",
  label: "Download"
}]} {...args} />`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" a11ySeeMoreText="See more" seeMore={15} file={{
  name: "file-name.jpg",
  type: "image/jpeg",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args} />`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" href="https://ebay.com" a11yExternalLinkText="opens in new window or tab" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} footerTitle="file-name.jpg" {...args} />`,...m.parameters?.docs?.source}}};const H=["Default","Image","WithAction","NoAction","ImageFooter","Video","Document","MultipleActions","SeeMore","ExternalLink"];export{r as Default,l as Document,m as ExternalLink,o as Image,s as ImageFooter,p as MultipleActions,n as NoAction,d as SeeMore,c as Video,i as WithAction,H as __namedExportsOrder,B as default};
