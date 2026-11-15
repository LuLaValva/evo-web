import{R as e}from"./iframe-iKvjn3Bc.js";import{F as l,L as i}from"./description-Cn5lHM8k.js";import{E as o}from"./tri-state-checkbox-Dfv0vhv0.js";import"./preload-helper-PPVm8Dsz.js";import"./ebay-icon-checkbox-unchecked-18-D7nLXVjD.js";import"./ebay-icon-checkbox-mixed-24-Dz3QcH0O.js";const p={component:o,title:"form input/ebay-tri-state-checkbox",argTypes:{checked:{options:["false","mixed","true"],control:{type:"select"},description:'Either "true", "false" or "mixed". Changes the checkbox state to the given one depdending on the checked state.'},skipMixed:{type:"boolean",control:{type:"boolean"},description:"If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none."},size:{options:["default","large"],control:{type:"select"},description:'Either "large" or "default". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)',table:{defaultValue:{summary:"default"}}},onChange:{action:"onChange",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"originalEvent, { value, checked }"}}},onFocus:{action:"onFocus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"originalEvent, { value, checked }"}}},onKeyDown:{action:"onKeydown",description:"Triggered on key down",table:{category:"Events",defaultValue:{summary:"originalEvent, { value, checked }"}}},disabled:{control:"boolean"},defaultChecked:{options:["true","false","mixed"],control:{type:"select"},description:"Initial uncontrolled checked state"}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayTriStateCheckbox } from "@ebay/ui-core-react/ebay-tri-state-checkbox";
import { EbayLabel } from "@ebay/ui-core-react/ebay-field";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/checkbox";
import "@ebay/skin/field";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/checkbox.css";
@import "@ebay/skin/field.css";
@import "@ebay/skin/icon.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayTriStateCheckbox id="tri-checkbox-1">
    <EbayLabel>Select all</EbayLabel>
</EbayTriStateCheckbox>
\`\`\``}}}},r=a=>e.createElement(o,{...a,value:"123",id:"checkbox-11"}),t=a=>e.createElement(o,{...a,checked:"mixed",value:"123",id:"checkbox-11"});t.argTypes={checked:{table:{disable:!0}}};const c=a=>e.createElement(l,null,e.createElement(o,{...a,value:"123",id:"checkbox-11"}),e.createElement(i,{className:"field__label field__label--end",htmlFor:"checkbox-11"},"Label")),s=a=>e.createElement(l,null,e.createElement(o,{...a,value:"123",disabled:!0,id:"checkbox-11"}),e.createElement(i,{className:"field__label--disabled",style:{marginLeft:"8px"},htmlFor:"checkbox-11"},"Label"));r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'args => <EbayTriStateCheckbox {...args} value="123" id="checkbox-11" />',...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:'args => <EbayTriStateCheckbox {...args} checked="mixed" value="123" id="checkbox-11" />',...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <EbayField>
        <EbayTriStateCheckbox {...args} value="123" id="checkbox-11" />
        <EbayLabel className="field__label field__label--end" htmlFor="checkbox-11">
            Label
        </EbayLabel>
    </EbayField>`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <EbayField>
        <EbayTriStateCheckbox {...args} value="123" disabled id="checkbox-11" />
        <EbayLabel className="field__label--disabled" style={{
    marginLeft: "8px"
  }} htmlFor="checkbox-11">
            Label
        </EbayLabel>
    </EbayField>`,...s.parameters?.docs?.source}}};const y=["Default","MixedCheckbox","WithLabel","Disabled"];export{r as Default,s as Disabled,t as MixedCheckbox,c as WithLabel,y as __namedExportsOrder,p as default};
