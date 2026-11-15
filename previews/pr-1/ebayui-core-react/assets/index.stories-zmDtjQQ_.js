import{R as e,r as h}from"./iframe-f06u4jfk.js";import{L as n}from"./description-BochhsDV.js";import{E as o}from"./checkbox-Cm1mhoRw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DC2oLLGZ.js";import"./ebay-icon-checkbox-unchecked-18-BQTNu6R8.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,O={component:o,title:"form input/ebay-checkbox",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayCheckbox } from "@ebay/ui-core-react/ebay-checkbox";
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
<EbayCheckbox id="checkbox-1">
    <EbayLabel>Remember me!</EbayLabel>
</EbayCheckbox>
\`\`\``}}},argTypes:{size:{description:"Either `large` or `regular` (default). Sets the checkbox icon size. For mweb this should be set to `large`. (Note: The dimensions of the radio will not change, but only the icon)",options:["regular","large"],control:{type:"select"}},disabled:{control:"boolean"},checked:{description:"indicates the checked value of the input element, required for a controlled component.",control:"boolean"},defaultChecked:{description:"indicates the default checked input element value. Use when the component is not controlled.",control:"boolean"},onChange:{description:"Callback fired on change",action:"onChange",table:{category:"Events",defaultValue:{summary:"`(event: ChangeEvent, { value: string, checked: Boolean })`"}}},onFocus:{description:"Callback fired when button is focused",action:"onFocus",table:{category:"Events",defaultValue:{summary:"`(event: FocusEvent, { value: string, checked: Boolean })`"}}},onKeyDown:{description:"Callback fired when key is pressed",action:"onKeyDown",table:{category:"Events",defaultValue:{summary:"`(event: KeyboardEvent, { value: string, checked: Boolean })`"}}}}},r=a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(o,{...a,value:"123",id:"checkbox-11",onChange:(c,t)=>l("onChange")(c,t),onFocus:(c,t)=>l("onFocus")(c,t),onKeyDown:(c,t)=>l("onKeyDown")(c,t)},e.createElement(n,null,"Default"))),e.createElement("p",null,e.createElement(o,{...a,value:"123",id:"checkbox-12",size:"large"},e.createElement(n,null,"Large")))),s=a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(o,{...a,checked:!0,value:"123",id:"checkbox-21"},e.createElement(n,null,"Default"))),e.createElement("p",null,e.createElement(o,{...a,checked:!0,value:"123",id:"checkbox-22",size:"large"},e.createElement(n,null,"Large")))),b=a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(o,{...a,disabled:!0,value:"123",id:"checkbox-31"},e.createElement(n,null,"Default disabled"))),e.createElement("p",null,e.createElement(o,{...a,disabled:!0,value:"123",id:"checkbox-32",size:"large"},e.createElement(n,null,"Large disabled")))),i=a=>e.createElement("fieldset",null,e.createElement("legend",null,"Choose an Option"),e.createElement("span",{className:"field"},e.createElement(o,{...a,id:"group-checkbox-1",value:"1",onChange:l("checkbox-change"),name:"checkbox-group"},e.createElement(n,null,"Option 1"))),e.createElement("span",{className:"field"},e.createElement(o,{...a,id:"group-checkbox-2",value:"2",onChange:l("checkbox-change"),name:"checkbox-group"},e.createElement(n,null,"Option 2"))),e.createElement("span",{className:"field"},e.createElement(o,{...a,id:"group-checkbox-3",value:"3",onChange:l("checkbox-change"),name:"checkbox-group"},e.createElement(n,null,"Option 3")))),u=a=>e.createElement("span",{className:"checkbox"},e.createElement("style",{dangerouslySetInnerHTML:{__html:`
                .custom ~ label { color: green; }
                .custom ~ .checkbox__icon svg { color: green !important; }
            `}}),e.createElement(o,{...a,className:"custom","aria-label":"custom color checkbox example",id:"checkbox-30"},e.createElement(n,null,"Custom style"))),d=a=>{const c=()=>{const[t,k]=h.useState(!0),[p,E]=h.useState(!1),m=h.useRef(0),g=(y,{checked:x})=>{m.current<4?k(x):E(!0),m.current++};return e.createElement(o,{...a,className:"custom",onChange:g,checked:t,"aria-label":"custom color checkbox example",id:"checkbox-30",disabled:p},p?e.createElement(n,null,"Disabled"):e.createElement(n,null,"Gets disabled after ",5-m.current," clicks"))};return e.createElement(e.Fragment,null,e.createElement(c,null))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayCheckbox {...args} value="123" id="checkbox-11" onChange={(e, props) => action("onChange")(e, props)} onFocus={(e, props) => action("onFocus")(e, props)} onKeyDown={(e, props) => action("onKeyDown")(e, props)}>
                <EbayLabel>Default</EbayLabel>
            </EbayCheckbox>
        </p>
        <p>
            <EbayCheckbox {...args} value="123" id="checkbox-12" size="large">
                <EbayLabel>Large</EbayLabel>
            </EbayCheckbox>
        </p>
    </>`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayCheckbox {...args} checked value="123" id="checkbox-21">
                <EbayLabel>Default</EbayLabel>
            </EbayCheckbox>
        </p>
        <p>
            <EbayCheckbox {...args} checked value="123" id="checkbox-22" size="large">
                <EbayLabel>Large</EbayLabel>
            </EbayCheckbox>
        </p>
    </>`,...s.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayCheckbox {...args} disabled value="123" id="checkbox-31">
                <EbayLabel>Default disabled</EbayLabel>
            </EbayCheckbox>
        </p>
        <p>
            <EbayCheckbox {...args} disabled value="123" id="checkbox-32" size="large">
                <EbayLabel>Large disabled</EbayLabel>
            </EbayCheckbox>
        </p>
    </>`,...b.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <fieldset>
        <legend>Choose an Option</legend>
        <span className="field">
            <EbayCheckbox {...args} id="group-checkbox-1" value="1" onChange={action("checkbox-change")} name="checkbox-group">
                <EbayLabel>Option 1</EbayLabel>
            </EbayCheckbox>
        </span>
        <span className="field">
            <EbayCheckbox {...args} id="group-checkbox-2" value="2" onChange={action("checkbox-change")} name="checkbox-group">
                <EbayLabel>Option 2</EbayLabel>
            </EbayCheckbox>
        </span>
        <span className="field">
            <EbayCheckbox {...args} id="group-checkbox-3" value="3" onChange={action("checkbox-change")} name="checkbox-group">
                <EbayLabel>Option 3</EbayLabel>
            </EbayCheckbox>
        </span>
    </fieldset>`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <span className="checkbox">
        <style dangerouslySetInnerHTML={{
    __html: \`
                .custom ~ label { color: green; }
                .custom ~ .checkbox__icon svg { color: green !important; }
            \`
  }} />
        <EbayCheckbox {...args} className="custom" aria-label="custom color checkbox example" id="checkbox-30">
            <EbayLabel>Custom style</EbayLabel>
        </EbayCheckbox>
    </span>`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const Controller = () => {
    const [isChecked, setChecked] = useState(true);
    const [isDisabled, setDisabled] = useState(false);
    const counter = useRef(0);
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>, {
      checked
    }: {
      value: string | number;
      checked: boolean;
    }) => {
      if (counter.current < 4) {
        setChecked(checked);
      } else {
        setDisabled(true);
      }
      counter.current++;
    };
    return <EbayCheckbox {...args} className="custom" onChange={handleOnChange} checked={isChecked} aria-label="custom color checkbox example" id="checkbox-30" disabled={isDisabled}>
                {isDisabled ? <EbayLabel>Disabled</EbayLabel> : <EbayLabel>Gets disabled after {5 - counter.current} clicks</EbayLabel>}
            </EbayCheckbox>;
  };
  return <>
            <Controller />
        </>;
}`,...d.parameters?.docs?.source}}};const _=["DefaultCheckboxButton","SelectedCheckboxButton","DisabledCheckboxButton","GroupedCheckboxButtons","StyledCheckboxButton","ControlValueFromOutside"];export{d as ControlValueFromOutside,r as DefaultCheckboxButton,b as DisabledCheckboxButton,i as GroupedCheckboxButtons,s as SelectedCheckboxButton,u as StyledCheckboxButton,_ as __namedExportsOrder,O as default};
