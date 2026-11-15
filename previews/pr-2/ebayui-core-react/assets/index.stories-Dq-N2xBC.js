import{E as a,R as e}from"./iframe-NXL6QBQv.js";import{E as n}from"./ebay-icon-notification-16-B_HExbeR.js";import{E as r}from"./ebay-icon-attention-filled-16-C9JABSx6.js";import{E as i,a as s}from"./ebay-icon-attention-16-Bn4K2XkH.js";import"./preload-helper-PPVm8Dsz.js";const y={component:a,title:"graphics & icons/ebay-icon",tags:["autodocs"],parameters:{docs:{description:{component:`The \`EbayIcon\` component will include the actual SVG markup in the HTML and then reference the chosen icon.
Each icon has its own component and all the available icons are listed in the [icons](./icons) folder

## Usage

\`\`\`jsx
import { EbayIconArrowLeft16 } from "@ebay/ui-core-react/icons/ebay-icon-arrow-left-16";
import "@ebay/skin/icon";

<EbayIconArrowLeft16 />;
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
\`\`\`
### Add the \`EbayIconProvider\`

In the root of your app, add the \`EbayIconProvider\` component to avoid loading the SVG markup multiple times for a better server and client performance.

\`\`\`jsx
import { EbayIconProvider } from "@ebay/ui-core-react/ebay-icon";

<EbayIconProvider>
    <App />
</EbayIconProvider>;
\`\`\``}}},argTypes:{name:{description:"name of the icon from [Skin](./types.ts), transparent versions of colored icons has `-transparent` suffix",control:"text"},noSkinClasses:{description:"Used for special cases where `icon` classes from Skin should not be applied",control:"boolean"},a11yText:{description:"text for non-decorative inline icon; icon is assumed to be decorative if this is not passed",control:"text"},type:{description:"'icon' or 'program-badge' default 'icon' (DEPRECATED, use <EbayProgramBadge /> instead)",control:"text"},a11yVariant:{description:"Controls aria-label vs aria-labelledby",options:["label"],control:{type:"select"}},prominent:{description:"Adds icon--prominent CSS class",control:"boolean"}}},o=()=>e.createElement("div",null,e.createElement("style",{dangerouslySetInnerHTML:{__html:".demo3 {color: blue;}"}}),e.createElement("p",null,"default ",e.createElement(n,null)),e.createElement("p",null,"with className ",e.createElement(n,{className:"demo3"})),e.createElement("p",null,"with style ",e.createElement(n,{style:{color:"green"}})),e.createElement("p",null,"with style ",e.createElement(r,{style:{color:"purple"}}))),t=()=>e.createElement("div",null,e.createElement(i,{a11yText:"Confirmation"}),e.createElement(s,{a11yText:"Attention",a11yVariant:"label"}));o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <div>
        <style dangerouslySetInnerHTML={{
    __html: \`.demo3 {color: blue;}\`
  }} />
        <p>
            default <EbayIconNotification16 />
        </p>
        <p>
            with className <EbayIconNotification16 className="demo3" />
        </p>
        <p>
            with style <EbayIconNotification16 style={{
      color: "green"
    }} />
        </p>
        <p>
            with style <EbayIconAttentionFilled16 style={{
      color: "purple"
    }} />
        </p>
    </div>`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <div>
        <EbayIconConfirmation16 a11yText="Confirmation" />
        <EbayIconAttention16 a11yText="Attention" a11yVariant="label" />
    </div>`,...t.parameters?.docs?.source}}};const b=["CustomColor","NonDecorative"];export{o as CustomColor,t as NonDecorative,b as __namedExportsOrder,y as default};
