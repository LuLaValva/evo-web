import{r as u,R as t}from"./iframe-Chwe0yWC.js";import{T as o}from"./toggle-button-BiiUD2YO.js";import{E as m}from"./ebay-icon-settings-24-6IdLQ0at.js";import"./preload-helper-PPVm8Dsz.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,f={title:"Buttons/ebay-toggle-button",component:o,argTypes:{title:{control:{type:"text"},description:"Title attribute for the button",table:{type:{summary:"string"}}},subtitle:{control:{type:"text"},description:"Subtitle attribute for the button",table:{type:{summary:"string"}}},pressed:{control:{type:"boolean"},description:"Pressed state of the button",type:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Pressed state of the button",type:"boolean",table:{type:{summary:"boolean"}}},layoutType:{options:["minimal","list","gallery"],control:{type:"select"},table:{defaultValue:{summary:"minimal"}},description:"Enforced layout type of all buttons. May be `minimal` (default), `list`, or `gallery`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may not be used when there is an icon or an image"},icon:{description:"Name of EbayIcon for the component",table:{type:{summary:"EbayIcon"}}},img:{description:"Image for the component",table:{type:{summary:"ToggleButtonImge = {src: string; alt: string; fillPlacement?: string}"}}},onToggle:{description:"Triggered when the button is toggled: { originalEvent, pressed }",action:"onToggle",table:{category:"Events"}}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayToggleButton } from "@ebay/ui-core-react/ebay-toggle-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/toggle-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/toggle-button.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayToggleButton title="Label" subtitle="Subtitle" />
\`\`\``}}}},s={render:e=>{const[i,c]=u.useState(!1);return t.createElement(o,{className:"toggle-button--custom-modifier",pressed:i,onToggle:()=>c(!i),title:"Button 1",subtitle:"subtitle",...e})}},n=e=>t.createElement(o,{...e,pressed:!1,onToggle:g("toggle")},t.createElement("p",null,"Button 1")),a=e=>t.createElement(o,{...e,pressed:!1,title:"Button 1",subtitle:"Some context here",onToggle:g("toggle"),icon:t.createElement(m,null)}),r=e=>t.createElement(o,{...e,pressed:!1,title:"Button 1",subtitle:"Some context here",onToggle:g("toggle"),img:{src:"https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",alt:"image alt"}}),l=e=>t.createElement(o,{...e,pressed:!1,title:"Button 1",subtitle:"Some context here",onToggle:g("toggle"),layoutType:"gallery",img:{src:"https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",alt:"image alt",fillPlacement:"top"}});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isPressed, setIsPressed] = useState(false);
    return <EbayToggleButton className="toggle-button--custom-modifier" pressed={isPressed} onToggle={() => setIsPressed(!isPressed)} title={"Button 1"} subtitle={"subtitle"} {...args}></EbayToggleButton>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <EbayToggleButton {...args} pressed={false} onToggle={action("toggle")}>
        <p>Button 1</p>
    </EbayToggleButton>`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'args => <EbayToggleButton {...args} pressed={false} title={"Button 1"} subtitle={"Some context here"} onToggle={action("toggle")} icon={<EbayIconSettings24 />}></EbayToggleButton>',...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <EbayToggleButton {...args} pressed={false} title={"Button 1"} subtitle={"Some context here"} onToggle={action("toggle")} img={{
  src: "https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",
  alt: "image alt"
}}></EbayToggleButton>`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <EbayToggleButton {...args} pressed={false} title={"Button 1"} subtitle={"Some context here"} onToggle={action("toggle")} layoutType="gallery" img={{
  src: "https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",
  alt: "image alt",
  fillPlacement: "top"
}}></EbayToggleButton>`,...l.parameters?.docs?.source}}};const T=["Default","WithChildren","IconButton","ImageButton","ImageButtonWithPlacement"];export{s as Default,a as IconButton,r as ImageButton,l as ImageButtonWithPlacement,n as WithChildren,T as __namedExportsOrder,f as default};
