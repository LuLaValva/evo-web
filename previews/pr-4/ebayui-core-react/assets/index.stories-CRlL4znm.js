import{e as n,R as e,E as o}from"./iframe-DQnhKaHl.js";import"./preload-helper-PPVm8Dsz.js";const r={component:n,title:"graphics & icons/ebay-svg",tags:["autodocs"],parameters:{docs:{description:{component:`This is a helper component which holds all the SVG icons for your other \`@ebay/ui-core-react\` components.

## Usage

### Import

\`\`\`jsx harmony
import { EbaySvg, EbayFlagsSvg } from "@ebay/ui-core-react/ebay-svg";
\`\`\`

Import it and place at the end of your HTML. Make sure this component is only rendered on the server and never imported on the client side.

### Basic

\`\`\`jsx harmony
<Html>
    <Component1 />
    <Component2 />
    <EbaySvg />
    <EbayFlagsSvg />
</Html>
\`\`\`

### Use only necessary icons

To reduce the size of the HTML and processing time, use only the necessary icons via the \`icons\` attribute.

\`\`\`jsx harmony
<EbaySvg icons={["attention16", "information16"]} />
\`\`\``}}},argTypes:{icons:{description:"Yes",control:"text"}}},t=()=>e.createElement(e.Fragment,null,e.createElement(n,{icons:["notification16","attention16"]}),e.createElement(o,{name:"notification16"}),e.createElement(o,{name:"attention16"}));t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <>
        <EbaySvg icons={["notification16", "attention16"]} />
        <EbayIcon name="notification16" />
        <EbayIcon name="attention16" />
    </>`,...t.parameters?.docs?.source}}};const i=["FilteredIcons"];export{t as FilteredIcons,i as __namedExportsOrder,r as default};
