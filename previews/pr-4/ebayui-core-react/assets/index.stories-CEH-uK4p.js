import{R as e}from"./iframe-BCVGsZ3l.js";import{E as n}from"./icon-button-DFNx10cY.js";import{E as s}from"./ebay-icon-menu-20-DtZK9FVN.js";import{E as u}from"./ebay-icon-settings-16-BphtIWCk.js";import{E as b,a as m}from"./ebay-icon-chat-16-W9mP270C.js";import"./preload-helper-PPVm8Dsz.js";import"./badge-CRN_kqf1.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,f={title:"buttons/ebay-icon-button",tags:["autodocs"],parameters:{docs:{description:{component:`This is a circular button with an icon only.

## Usage

### Import

\`\`\`jsx harmony
import { EbayIconButton } from "@ebay/ui-core-react/ebay-icon-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/badge";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";

// When using with "href"
import "@ebay/skin/link";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/badge.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";

/* When using with "href" */
@import "@ebay/skin/link.css";
\`\`\`
### Icon button

### Basic

\`\`\`jsx harmony
<EbayIconButton icon={<EbayIconSettings16 />} aria-label="settings" />
\`\`\`

### With badge

\`\`\`jsx harmony
<EbayIconButton icon={<EbayMenu16Icon />} badgeNumber={1} badgeAriaLabel="new feature available" />
\`\`\``}}},argTypes:{icon:{description:"icon name",control:"text"},href:{description:"for link that looks like a button",control:"text"},badgeAriaLabel:{description:"aria label of the badge",control:"text"},badgeNumber:{description:"number on the badge",control:"number"},disabled:{description:"Whether the button is disabled",control:{type:"boolean"}},transparent:{description:"for transparent background",control:"boolean"},size:{description:"alternative size for the icon button, 'large' or 'small'",control:"text"},priority:{description:"`primary`, `secondary`, `tertiary`, `none` (default)",options:["primary","secondary","tertiary","none"],control:{type:"select"}},onClick:{description:"triggered on click",action:"onClick",table:{category:"Events",defaultValue:{summary:"`(MouseEvent)`"}}},onEscape:{description:"triggered on Esc key press",action:"onEscape",table:{category:"Events",defaultValue:{summary:"`(KeyboardEvent)`"}}},onFocus:{description:"triggered on keyboard focus",action:"onFocus",table:{category:"Events",defaultValue:{summary:"`(FocusEvent)`"}}},onBlur:{description:"triggered on focus lost",action:"onBlur",table:{category:"Events",defaultValue:{summary:"`(FocusEvent)`"}}}}},r=a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(n,{...a,onClick:o=>t("onClick")(o),onFocus:o=>t("onFocus")(o),onBlur:o=>t("onBlur")(o),onEscape:o=>t("onEscape")(o),icon:e.createElement(s,null),"aria-label":"Menu"})),e.createElement("p",null,e.createElement(n,{...a,href:"https://ebay.com",icon:e.createElement(u,null),"aria-label":"Settings"}))),c=a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(n,{...a,icon:e.createElement(s,null),"aria-label":"Menu",badgeNumber:1,badgeAriaLabel:"new feature available"})),e.createElement("p",null,e.createElement(n,{...a,href:"https://ebay.com",icon:e.createElement(b,null),badgeNumber:3,badgeAriaLabel:"3 items in your cart","aria-label":"Cart"})),e.createElement("p",null,e.createElement(n,{...a,href:"https://ebay.com",icon:e.createElement(m,null),badgeNumber:99,badgeAriaLabel:"99 unread messages","aria-label":"Chat"}))),i=a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(n,{...a,onClick:t("clicked"),icon:e.createElement(s,null),transparent:!0,"aria-label":"Menu"}))),l=a=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement(n,{...a,onClick:t("clicked"),icon:"menu20","aria-label":"Menu"}),e.createElement(n,{...a,onClick:t("clicked"),priority:"primary",icon:"menu20","aria-label":"Menu"}),e.createElement(n,{...a,onClick:t("clicked"),priority:"secondary",icon:"menu20","aria-label":"Menu"}),e.createElement(n,{...a,onClick:t("clicked"),priority:"tertiary",icon:"menu20","aria-label":"Menu"}));r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayIconButton {...args} onClick={(e: React.MouseEvent) => action("onClick")(e)} onFocus={(e: React.FocusEvent) => action("onFocus")(e)} onBlur={(e: React.FocusEvent) => action("onBlur")(e)} onEscape={(e: React.KeyboardEvent) => action("onEscape")(e)} icon={<EbayIconMenu20 />} aria-label="Menu" />
        </p>
        <p>
            <EbayIconButton {...args} href="https://ebay.com" icon={<EbayIconSettings16 />} aria-label="Settings" />
        </p>
    </>`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayIconButton {...args} icon={<EbayIconMenu20 />} aria-label="Menu" badgeNumber={1} badgeAriaLabel="new feature available" />
        </p>
        <p>
            <EbayIconButton {...args} href="https://ebay.com" icon={<EbayIconCart16 />} badgeNumber={3} badgeAriaLabel="3 items in your cart" aria-label="Cart" />
        </p>
        <p>
            <EbayIconButton {...args} href="https://ebay.com" icon={<EbayIconChat16 />} badgeNumber={99} badgeAriaLabel="99 unread messages" aria-label="Chat" />
        </p>
    </>`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayIconButton {...args} onClick={action("clicked")} icon={<EbayIconMenu20 />} transparent aria-label="Menu" />
        </p>
    </>`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  flexDirection: "column",
  gap: "16px"
}}>
        <EbayIconButton {...args} onClick={action("clicked")} icon="menu20" aria-label="Menu" />
        <EbayIconButton {...args} onClick={action("clicked")} priority="primary" icon="menu20" aria-label="Menu" />
        <EbayIconButton {...args} onClick={action("clicked")} priority="secondary" icon="menu20" aria-label="Menu" />
        <EbayIconButton {...args} onClick={action("clicked")} priority="tertiary" icon="menu20" aria-label="Menu" />
    </div>`,...l.parameters?.docs?.source}}};const I=["Default","WithBadges","Transparent","WithPriority"];export{r as Default,i as Transparent,c as WithBadges,l as WithPriority,I as __namedExportsOrder,f as default};
