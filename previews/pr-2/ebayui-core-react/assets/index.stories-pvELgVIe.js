import{r as C,R as e,c as _}from"./iframe-40IW9wFk.js";import{E as A,a as i}from"./combobox-Zh-CvDS4.js";import{f as T}from"./utils-B6clV3l8.js";import{E as U}from"./chip-DpAOLTNV.js";import{E as N}from"./button-OqHcRAbb.js";import"./preload-helper-PPVm8Dsz.js";import"./hooks-zNOO5MMu.js";import"./dropdown-Ba5f5jKw.js";import"./index-BXkPvL5-.js";import"./index-B8Qar043.js";import"./index-BazKmvg5.js";import"./index-CpaLjOGe.js";import"./index-Chz66FiB.js";import"./index-A6WxYBxb.js";import"./floating-ui-ByyP9oY6.js";import"./jsx-runtime-u17CrQMm.js";import"./index-N4bypJbL.js";import"./index-BFK0-lIu.js";import"./ebay-icon-close-12-B-l85Eb5.js";import"./progress-spinner-BZHBla9K.js";import"./ebay-icon-spinner-30-BtiqLtyW.js";import"./ebay-icon-chevron-down-12-BnA4uKCd.js";const x=({className:s,fluid:d,error:c,disabled:r,selected:p,defaultSelected:l,a11yDeleteButtonText:g="Remove",onChange:h,children:O,...S})=>{const k=T(O,i),[v,u]=C.useState(l||[]),a=p||v,[w,y]=C.useState(""),E=e.useRef(null),f=(o,t)=>{const n=[...a,t];u(n),h?.(o,{selected:[...n]}),y("")},D=(o,t)=>{const n=a.filter((W,R)=>R!==t);u(n),h?.(o,{selected:[...n]})},I=o=>{if(o.key==="Enter"){const t=o.target.value;o.preventDefault(),t&&!a.includes(t)&&f(o,t)}},B=(o,t)=>{y(t.currentInputValue)};if(p&&l)throw new Error('EbayChipsCombobox: You cannot use "selected" and "defaultSelected" at the same time.');if(p&&!h)throw new Error('EbayChipsCombobox: You must provide an "onChange" prop when using the "selected" prop.');return e.createElement("span",{ref:E,className:_(s,"chips-combobox",{"chips-combobox--fluid":d,"chips-combobox--error":c}),"aria-disabled":r?"true":void 0},a.length?e.createElement("ul",{className:"chips-combobox__items"},a.map((o,t)=>e.createElement("li",{key:t},e.createElement(U,{a11yDeleteButtonText:`${g} ${o}`,onDelete:n=>D(n,t),disabled:r},o)))):null,e.createElement(A,{...S,className:"chips-combobox__combobox",disabled:r,dropdownRef:E,value:w,autocomplete:"list",onSelect:(o,t)=>f(o,t.selectedOption.text),onInputChange:B,onKeyDown:I},k.filter(o=>!a.includes(o.props.text))))},ae={component:x,title:"form input/ebay-chips-combobox",argTypes:{expanded:{control:"boolean",description:"Whether the combobox is expanded"},fluid:{control:"boolean",description:"Whether the combobox should take full width"},error:{control:"boolean",description:"Whether the combobox is in an error state"},listSelection:{control:"select",options:["manual","automatic"],description:"Selection mode for the list"},defaultSelected:{control:"array",description:"Initial selected options. Use it for uncontrolled components"},selected:{control:"array",description:"Currently selected option. Use it for controlled components"},disabled:{control:"boolean",description:"Whether the combobox is disabled"},a11yDeleteButtonText:{control:"text",description:"Accessibility text for the delete button"},borderless:{control:"boolean",description:"Removes input borders"},floatingLabel:{control:"text",description:"Floating label text"},autocomplete:{control:"select",options:["list","none"],description:"Auto-filtering mode"},onExpand:{action:"onExpand"},onCollapse:{action:"onCollapse"},onChange:{action:"onChange"}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayChipsCombobox, EbayComboboxOption } from "@ebay/ui-core-react/ebay-chips-combobox";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/chip";
import "@ebay/skin/chips-combobox";
import "@ebay/skin/combobox";
import "@ebay/skin/floating-label";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/chip.css";
@import "@ebay/skin/chips-combobox.css";
@import "@ebay/skin/combobox.css";
@import "@ebay/skin/floating-label.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayChipsCombobox onChange={handleChange}>
    <EbayComboboxOption value="option1">Option 1</EbayComboboxOption>
    <EbayComboboxOption value="option2">Option 2</EbayComboboxOption>
    <EbayComboboxOption value="option3">Option 3</EbayComboboxOption>
</EbayChipsCombobox>
\`\`\``}}}},b=s=>e.createElement(x,{placeholder:"Add item",...s},e.createElement(i,{text:"Chip 1"}),e.createElement(i,{text:"Chip 2"}),e.createElement(i,{text:"Chip 3"})),m=s=>{const[d,c]=C.useState([]),r=(p,l)=>{c(l?.selected||[])};return e.createElement(e.Fragment,null,e.createElement(x,{placeholder:"Add item",...s,selected:d,onChange:r},e.createElement(i,{text:"Chip 1"}),e.createElement(i,{text:"Chip 2"}),e.createElement(i,{text:"Chip 3"})),e.createElement("div",{style:{marginTop:16}},e.createElement(N,{onClick:()=>c(["Chip 2"])},"Update with Chip 2")))};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <EbayChipsCombobox placeholder="Add item" {...args}>
        <EbayComboboxOption text="Chip 1" />
        <EbayComboboxOption text="Chip 2" />
        <EbayComboboxOption text="Chip 3" />
    </EbayChipsCombobox>`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState<string[]>([]);
  const handleChange: ChipsComboboxChangeHandler = (event, data) => {
    setSelected(data?.selected || []);
  };
  return <>
            <EbayChipsCombobox placeholder="Add item" {...args} selected={selected} onChange={handleChange}>
                <EbayComboboxOption text="Chip 1" />
                <EbayComboboxOption text="Chip 2" />
                <EbayComboboxOption text="Chip 3" />
            </EbayChipsCombobox>

            <div style={{
      marginTop: 16
    }}>
                <EbayButton onClick={() => setSelected(["Chip 2"])}>Update with Chip 2</EbayButton>
            </div>
        </>;
}`,...m.parameters?.docs?.source}}};const se=["Default","ControlledCombobox"];export{m as ControlledCombobox,b as Default,se as __namedExportsOrder,ae as default};
