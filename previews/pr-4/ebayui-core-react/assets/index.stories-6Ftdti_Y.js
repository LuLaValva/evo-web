import{R as t}from"./iframe-B3ueQOiX.js";import{E as a}from"./cta-button-PPl8y-1X.js";import"./preload-helper-PPVm8Dsz.js";import"./button-CmYa5JRW.js";import"./progress-spinner-Dv1yyLEf.js";import"./ebay-icon-spinner-30-DKKtkRHH.js";import"./ebay-icon-chevron-down-12-DP1SGrVn.js";import"./ebay-icon-arrow-right-24-B6jZsUJD.js";const d={component:a,title:"buttons/ebay-cta-button",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayCtaButton } from "@ebay/ui-core-react/ebay-cta-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/cta-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/cta-button.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayCtaButton>I'm a CTA button!</EbayCtaButton>
\`\`\``}}},argTypes:{size:{description:"can be only `large` or just omit it for default appearance",control:"text"},href:{description:"URL",control:"text"},fluid:{description:"takes the whole width of the parent element",control:"boolean"},truncate:{description:"will truncate the text of the button onto a single line, and adds an ellipsis, when the button's text overflows",control:"boolean"}}},r=e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(a,{...e,href:"https://ebay.com"},"Take Action Now!"))),n=e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(a,{...e,href:"https://ebay.com",size:"large"},"Large Button"))),o=e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(a,{...e,href:"https://ebay.com",fluid:!0},"100%")),t.createElement("p",null,t.createElement(a,{...e,href:"https://ebay.com",size:"large",fluid:!0},"Large!"))),s=e=>t.createElement("div",{style:{maxWidth:"200px"}},t.createElement("p",null,t.createElement(a,{...e,href:"https://ebay.com",truncate:!0},"Wide Long Call To Action!")),t.createElement("p",null,t.createElement(a,{...e,href:"https://ebay.com",size:"large",truncate:!0},"Go Big with Call To Action!")));r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayCtaButton {...args} href="https://ebay.com">
                Take Action Now!
            </EbayCtaButton>
        </p>
    </>`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayCtaButton {...args} href="https://ebay.com" size="large">
                Large Button
            </EbayCtaButton>
        </p>
    </>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayCtaButton {...args} href="https://ebay.com" fluid>
                100%
            </EbayCtaButton>
        </p>
        <p>
            <EbayCtaButton {...args} href="https://ebay.com" size="large" fluid>
                Large!
            </EbayCtaButton>
        </p>
    </>`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  maxWidth: "200px"
}}>
        <p>
            <EbayCtaButton {...args} href="https://ebay.com" truncate>
                Wide Long Call To Action!
            </EbayCtaButton>
        </p>
        <p>
            <EbayCtaButton {...args} href="https://ebay.com" size="large" truncate>
                Go Big with Call To Action!
            </EbayCtaButton>
        </p>
    </div>`,...s.parameters?.docs?.source}}};const h=["Default","Large","Fluid","Truncated"];export{r as Default,o as Fluid,n as Large,s as Truncated,h as __namedExportsOrder,d as default};
