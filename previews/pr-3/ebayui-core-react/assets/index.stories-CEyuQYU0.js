import{R as e,r as v}from"./iframe-xHTfl6Ib.js";import{L as t,F as y}from"./description-C5F3lk7N.js";import{E as C}from"./button-Cs3Wu5KI.js";import{E as n}from"./radio-BZmTJGrd.js";import"./preload-helper-PPVm8Dsz.js";import"./progress-spinner-Bxte8mG8.js";import"./ebay-icon-spinner-30-DNdQO9tg.js";import"./ebay-icon-chevron-down-12-CGnBL3Il.js";import"./ebay-icon-radio-unchecked-18-C0zFArCX.js";import"./utils-BQ7QCpBC.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,w={title:"form input/ebay-radio",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayRadio } from "@ebay/ui-core-react/ebay-radio";
import { EbayLabel } from "@ebay/ui-core-react/ebay-field";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/field";
import "@ebay/skin/icon";
import "@ebay/skin/radio";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/field.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/radio.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayRadio value="1" id="radio-1">
    <EbayLabel>Choice 1</EbayLabel>
</EbayRadio>
\`\`\``}}},argTypes:{disabled:{description:"Disabled when true",control:"boolean"},value:{description:"The value of radio button component. For the radio checked/unchecked state, please use `checked` props.",control:"text"},checked:{description:"Set the radio button state to checked/unchecked. Use this for **controlled component**.",control:"boolean"},defaultChecked:{description:"Set the radio button initial state to checked/unchecked. Use this for **uncontrolled component**.",control:"boolean"},size:{description:"No",control:"text"},onChange:{description:"Callback fired when selected radio button is changed",action:"onChange",table:{category:"Events",defaultValue:{summary:"`(ChangeEvent, { value })`"}}},onFocus:{description:"Callback fired when radio button is focused",action:"onFocus",table:{category:"Events",defaultValue:{summary:"`(FocusEvent, { value })`"}}},onKeyDown:{description:"Callback fired when key is down",action:"onKeyDown",table:{category:"Events",defaultValue:{summary:"`(KeyboardEvent, { value })`"}}}}},s=a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(n,{...a,value:"123",id:"radio-1"},e.createElement(t,null,"Default"))),e.createElement("p",null,e.createElement(n,{...a,value:"123",id:"radio-11",size:"large"},e.createElement(t,null,"Large")))),i={render:a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(n,{...a,value:"123",id:"radio-1"}),e.createElement("label",{className:"field__label field__label--end",htmlFor:"radio-1"},"Default")),e.createElement("p",null,e.createElement(n,{...a,value:"123",id:"radio-11",size:"large"}),e.createElement("label",{className:"field__label field__label--end",htmlFor:"radio-11"},"Large"))),name:"Using custom label html"},c={render:a=>e.createElement(e.Fragment,null,e.createElement(n,{...a,checked:!0,id:"radio-2"},e.createElement(t,null,"Selected"))),name:"Selected radio-button"},u={render:a=>e.createElement(e.Fragment,null,e.createElement(n,{...a,disabled:!0,id:"radio-20"},e.createElement(t,null,"Disabled"))),name:"Disabled radio-button"},m={render:a=>{const r={onChange:(l,o)=>E("onChange")(l,o),onFocus:(l,o)=>E("onFocus")(l,o),onKeyDown:(l,o)=>E("onKeyDown")(l,o)};return e.createElement("fieldset",null,e.createElement("legend",null,"Choose an Option"),e.createElement(y,null,e.createElement(n,{...a,id:"group-radio-1",value:"1",defaultChecked:!0,name:"radio-group",...r},e.createElement(t,null,"Option 1"))),e.createElement(y,null,e.createElement(n,{...a,id:"group-radio-2",value:"2",defaultChecked:!1,name:"radio-group",...r},e.createElement(t,null,"Option 2"))),e.createElement(y,null,e.createElement(n,{...a,id:"group-radio-3",value:"3",defaultChecked:!1,name:"radio-group",...r},e.createElement(t,null,"Option 3"))))},name:"Grouped radio-buttons"},p={render:a=>e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:`
                .custom ~ label,
                .custom .radio__icon svg { color: green !important }
                `}}),e.createElement(n,{...a,className:"custom","aria-label":"custom color radio example",id:"radio-30"},e.createElement(t,null,"Custom style"))),name:"Styled radio-button"},b={render:a=>{const r=["Regular","Express","Local Pickup"],l=()=>{const[o,h]=v.useState(r[0]),f=(d,...g)=>{E("radio-change")(d,...g),h(d.target.value)};return e.createElement("div",null,e.createElement("fieldset",null,e.createElement("legend",null,"Choose your delivery"),r.map((d,g)=>e.createElement(y,{key:`delivery-${d}`},e.createElement(n,{...a,id:`delivery-${g}`,checked:o===d,value:d,name:"delivery-method",onChange:f},e.createElement(t,null,d))))),e.createElement("div",{style:{display:"flex",alignItems:"center",marginTop:"2rem"}},e.createElement("div",{style:{marginRight:"1rem"}},"Current selected: ",e.createElement("strong",null,o)),e.createElement(C,{onClick:()=>h(r[1])},"Reset to default (Express)")))};return e.createElement(e.Fragment,null,e.createElement(l,null))},name:"Controlled component"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayRadio {...args} value="123" id="radio-1">
                <EbayLabel>Default</EbayLabel>
            </EbayRadio>
        </p>
        <p>
            <EbayRadio {...args} value="123" id="radio-11" size="large">
                <EbayLabel>Large</EbayLabel>
            </EbayRadio>
        </p>
    </>`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <p>
                <EbayRadio {...args} value="123" id="radio-1" />
                <label className="field__label field__label--end" htmlFor="radio-1">
                    Default
                </label>
            </p>
            <p>
                <EbayRadio {...args} value="123" id="radio-11" size="large" />
                <label className="field__label field__label--end" htmlFor="radio-11">
                    Large
                </label>
            </p>
        </>,
  name: "Using custom label html"
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayRadio {...args} checked id="radio-2">
                <EbayLabel>Selected</EbayLabel>
            </EbayRadio>
        </>,
  name: "Selected radio-button"
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayRadio {...args} disabled id="radio-20">
                <EbayLabel>Disabled</EbayLabel>
            </EbayRadio>
        </>,
  name: "Disabled radio-button"
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const defaultProps = {
      onChange: (e, props) => action("onChange")(e, props),
      onFocus: (e, props) => action("onFocus")(e, props),
      onKeyDown: (e, props) => action("onKeyDown")(e, props)
    };
    return <fieldset>
                <legend>Choose an Option</legend>
                <EbayField>
                    <EbayRadio {...args} id="group-radio-1" value="1" defaultChecked name="radio-group" {...defaultProps}>
                        <EbayLabel>Option 1</EbayLabel>
                    </EbayRadio>
                </EbayField>
                <EbayField>
                    <EbayRadio {...args} id="group-radio-2" value="2" defaultChecked={false} name="radio-group" {...defaultProps}>
                        <EbayLabel>Option 2</EbayLabel>
                    </EbayRadio>
                </EbayField>
                <EbayField>
                    <EbayRadio {...args} id="group-radio-3" value="3" defaultChecked={false} name="radio-group" {...defaultProps}>
                        <EbayLabel>Option 3</EbayLabel>
                    </EbayRadio>
                </EbayField>
            </fieldset>;
  },
  name: "Grouped radio-buttons"
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <style dangerouslySetInnerHTML={{
      __html: \`
                .custom ~ label,
                .custom .radio__icon svg { color: green !important }
                \`
    }} />
            <EbayRadio {...args} className="custom" aria-label="custom color radio example" id="radio-30">
                <EbayLabel>Custom style</EbayLabel>
            </EbayRadio>
        </>,
  name: "Styled radio-button"
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const deliveryMethods = ["Regular", "Express", "Local Pickup"];
    const TestControlledComponent = () => {
      const [selectedValue, setSelectedValue] = useState(deliveryMethods[0]);
      const handleChange = (e, ...rest) => {
        action("radio-change")(e, ...rest);
        setSelectedValue(e.target.value);
      };
      return <div>
                    <fieldset>
                        <legend>Choose your delivery</legend>
                        {deliveryMethods.map((item, index) => <EbayField key={\`delivery-\${item}\`}>
                                <EbayRadio {...args} id={\`delivery-\${index}\`} checked={selectedValue === item} value={item} name="delivery-method" onChange={handleChange}>
                                    <EbayLabel>{item}</EbayLabel>
                                </EbayRadio>
                            </EbayField>)}
                    </fieldset>

                    <div style={{
          display: "flex",
          alignItems: "center",
          marginTop: "2rem"
        }}>
                        <div style={{
            marginRight: "1rem"
          }}>
                            Current selected: <strong>{selectedValue}</strong>
                        </div>

                        <EbayButton onClick={() => setSelectedValue(deliveryMethods[1])}>
                            Reset to default (Express)
                        </EbayButton>
                    </div>
                </div>;
    };
    return <>
                <TestControlledComponent />
            </>;
  },
  name: "Controlled component"
}`,...b.parameters?.docs?.source}}};const T=["Default","UsingCustomLabelHtml","SelectedRadioButton","DisabledRadioButton","GroupedRadioButtons","StyledRadioButton","ControlledComponent"];export{b as ControlledComponent,s as Default,u as DisabledRadioButton,m as GroupedRadioButtons,c as SelectedRadioButton,p as StyledRadioButton,i as UsingCustomLabelHtml,T as __namedExportsOrder,w as default};
