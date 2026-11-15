import{R as a}from"./iframe-CYE9XGe7.js";import{E as t}from"./chip-fiJK5Tj2.js";import"./preload-helper-PPVm8Dsz.js";import"./ebay-icon-close-12-BYsPrCP3.js";const p={component:t,title:"building blocks/ebay-chip",argTypes:{a11yDeleteButtonText:{control:"text",description:"Accessibility text for the delete button"},disabled:{control:"boolean",description:"Whether the chip is disabled"},onDelete:{action:"onDelete"}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import EbayChip from "@ebay/ui-core-react/ebay-chip";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/chip";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/chip.css";
@import "@ebay/skin/icon.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayChip a11yDeleteButtonText="Remove item" onDelete={handleDelete} disabled={false}>
    Chip Content
</EbayChip>
\`\`\``}}}},e=o=>a.createElement(t,{...o},"Chip Content");e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <EbayChip {...args}>Chip Content</EbayChip>",...e.parameters?.docs?.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,p as default};
