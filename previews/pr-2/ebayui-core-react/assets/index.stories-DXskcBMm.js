import{r as u,R as e,c as L}from"./iframe-BgTX0Pxt.js";import{f as M}from"./utils-lr-swOuy.js";import{T as r}from"./toggle-button-BI91e2g2.js";import{E as G}from"./ebay-icon-settings-24-B2K-9XCd.js";import"./preload-helper-PPVm8Dsz.js";const d=({a11yText:a,a11yLabelId:g,layoutType:p="minimal",variant:m="checkbox",children:b,columnsMin:y,columnsXS:f,columnsSM:h,columnsMD:E,columnsXL:B,onChange:i,className:T,...w})=>{const c=M(b,r),x=()=>c.reduce((n,t,o)=>(n[o]=t.props.pressed||!1,n),{}),[I,S]=u.useState(x),k=u.useCallback((n,t)=>{S(o=>{let s={};switch(m){case"checkbox":s={...o},s[t]=!o[t];break;case"radio-toggle":s[t]=!o[t];break;case"radio":s[t]=!0;break}return i&&i(n,{pressedButtonsIndex:s}),s})},[m,i]);return e.createElement("div",{className:L(T,"toggle-button-group"),"data-columns-min":y,"data-columns-xs":f,"data-columns-sm":h,"data-columns-md":E,"data-columns-xl":B,...w},e.createElement("ul",{"aria-label":a,"aria-labelledby":g},c.map((n,t)=>e.createElement("li",{key:t},u.cloneElement(n,{layoutType:p,pressed:I[t],onToggle:o=>{k(o,t)}})))))},D={title:"Buttons/ebay-toggle-button-group",component:d,argTypes:{a11yText:{control:{type:"text"},table:{type:{summary:"string"}},description:"Accessibility text for the group. Cannot be used together with `a11yLabelId`"},a11yLabelId:{control:{type:"text"},table:{type:{summary:"string"}},description:"Id of the element that labels the group. Required for a11y compliance. Cannot be used together with `a11yText`"},variant:{options:["checkbox","radio","radio-toggle"],control:{type:"select"},table:{defaultValue:{summary:"checkbox"},type:{summary:"string"}},description:'Selection type for the buttons in the group. May be "checkbox" (default), "radio", or "radio-toggle" (same as radio but with the option to deselect)'},layoutType:{options:["minimal","list","gallery"],control:{type:"select"},table:{defaultValue:{summary:"minimal"},type:{summary:["minimal","list","gallery"]}},description:"Enforced layout type of all buttons. May be `minimal` (default), `list`, or `gallery`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may not be used when there is an icon or an image"},onChange:{action:"changed",table:{category:"Events",defaultValue:{summary:"originalEvent,  pressedButtons"}},description:"Triggered when the pressed state changes"},columnsMin:{control:{type:"number"},type:{name:"number",required:!1},name:"columnsMin",table:{type:{summary:"number"}},description:"Preferred minimum number of columns for smallest container/screen (1-3). If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsXS:{control:{type:"number"},type:{name:"number",required:!1},name:"columnsXS",table:{type:{summary:"number"}},description:"Preferred minimum number of columns within extra small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsSM:{control:{type:"number"},type:{name:"number",required:!1},name:"columnsSM",table:{type:{summary:"number"}},description:"Preferred minimum number of columns within small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsMD:{control:{type:"number"},type:{name:"number",required:!1},name:"columnsMD",table:{type:{summary:"number"}},description:"Preferred minimum number of columns within medium containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsXL:{control:{type:"number"},type:{name:"number",required:!1},name:"columnsXL",table:{type:{summary:"number"}},description:"Preferred minimum number of columns within extra large containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."}},decorators:[a=>e.createElement("div",{style:{padding:"3rem"}},e.createElement(a,null))],tags:["autodocs"],parameters:{layout:"left",controls:{expanded:!0},options:{storySort:{order:["buttons","dialogs","form input","graphics & icons","media","navigation & disclosure","notices & tips","progress","building blocks"]}},docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayToggleButtonGroup } from "@ebay/ui-core-react/ebay-toggle-button-group";
import { EbayToggleButton } from "@ebay/ui-core-react/ebay-toggle-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/toggle-button";
import "@ebay/skin/toggle-button-group";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/toggle-button.css";
@import "@ebay/skin/toggle-button-group.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayToggleButtonGroup>
    <EbayToggleButton pressed title="Option 1" />
    <EbayToggleButton title="Option 2" />
    <EbayToggleButton title="Option 3" />
</EbayToggleButtonGroup>
\`\`\``}}}},l={render:a=>e.createElement(d,{...a},e.createElement(r,{pressed:!0,title:"Button1"}),e.createElement(r,null,"Child Button"),e.createElement(r,{title:"Button2",subtitle:"subtitle"}),e.createElement(r,{icon:e.createElement(G,null),title:"Button3",subtitle:"subtitle"}),e.createElement(r,{title:"Button4",subtitle:"subtitle",img:{src:"https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",alt:"image alt"}}))};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <EbayToggleButtonGroup {...args}>
                <EbayToggleButton pressed title="Button1" />
                <EbayToggleButton>Child Button</EbayToggleButton>
                <EbayToggleButton title="Button2" subtitle={"subtitle"} />
                <EbayToggleButton icon={<EbayIconSettings24 />} title="Button3" subtitle="subtitle"></EbayToggleButton>
                <EbayToggleButton title="Button4" subtitle="subtitle" img={{
        src: "https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",
        alt: "image alt"
      }}></EbayToggleButton>
            </EbayToggleButtonGroup>;
  }
}`,...l.parameters?.docs?.source}}};const O=["Default"];export{l as Default,O as __namedExportsOrder,D as default};
