import{R as e}from"./iframe-xHTfl6Ib.js";import{E as s}from"./progress-spinner-Bxte8mG8.js";import"./preload-helper-PPVm8Dsz.js";import"./ebay-icon-spinner-30-DNdQO9tg.js";const i={title:"progress/ebay-progress-spinner",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayProgressSpinner } from "@ebay/ui-core-react/ebay-progress-spinner";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/progress-spinner";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/progress-spinner.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayProgressSpinner />
\`\`\``}}},argTypes:{size:{description:"`default` (default), `small`, `large`",options:["default","small","large"],control:{type:"select"}},"aria-label":{description:"custom aria label instead of `Busy`",control:"text"}}},r={render:a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(s,{...a})),e.createElement("p",null,e.createElement(s,{...a,size:"small","aria-label":"Stand by..."})),e.createElement("p",null,e.createElement(s,{...a,size:"large","aria-label":"Stand by..."}))),name:"Default, Small & Large"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <p>
                <EbayProgressSpinner {...args} />
            </p>
            <p>
                <EbayProgressSpinner {...args} size="small" aria-label="Stand by..." />
            </p>
            <p>
                <EbayProgressSpinner {...args} size="large" aria-label="Stand by..." />
            </p>
        </>,
  name: "Default, Small & Large"
}`,...r.parameters?.docs?.source}}};const p=["DefaultSmallLarge"];export{r as DefaultSmallLarge,p as __namedExportsOrder,i as default};
