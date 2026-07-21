import{r as m,R as e}from"./iframe-BH1Vbt-r.js";import{E as r}from"./ebay-switch-C-NjJaPW.js";import"./preload-helper-PPVm8Dsz.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,w={title:"form input/ebay-switch",tags:["autodocs"],parameters:{docs:{description:{component:'## Import\n\n```jsx harmony\nimport { EbaySwitch } from "@ebay/ui-core-react/ebay-switch";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/switch";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/switch.css";\n```'}}},argTypes:{checked:{description:"Whether the switch is checked (controlled)",control:"boolean"},defaultChecked:{description:"Whether the switch is initially checked (uncontrolled)",control:"boolean"},disabled:{control:"boolean"},value:{description:"Value of the switch input",control:"text"},onChange:{description:"Triggered on change",action:"onChange",table:{category:"Events",defaultValue:{summary:"`(ChangeEvent, { value: string, checked: boolean }`"}}}}},n={render:a=>e.createElement("span",{className:"field"},e.createElement(r,{...a,value:"123",id:"switch-1",onChange:(t,o)=>d("onChange")(t,o)}),e.createElement("label",{className:"field__label field__label--end",htmlFor:"switch-1"},"Default")),name:"Default switch-button"},s={render:a=>e.createElement("span",{className:"field"},e.createElement(r,{...a,checked:!0,value:"123",id:"switch-2",onChange:d("switch-change")}),e.createElement("label",{className:"field__label field__label--end",htmlFor:"switch-2"},"Checked")),name:"Selected switch-button"},l={render:a=>e.createElement("span",{className:"field"},e.createElement(r,{...a,disabled:!0,id:"switch-20"}),e.createElement("label",{className:"field__label field__label--end",htmlFor:"switch-20"},"Disabled")),name:"Disabled switch-button"},c={render:a=>{const[t,o]=m.useState(!1);return e.createElement("span",{className:"field"},e.createElement(r,{...a,checked:t,id:"switch-30",onChange:(h,i)=>{d("onChange")(h,i),i&&o(i.checked)}}),e.createElement("label",{className:"field__label field__label--end",htmlFor:"switch-30"},t?"Checked":"Unchecked"))},name:"Controlled switch-button"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
            <EbaySwitch {...args} value="123" id="switch-1" onChange={(e, props) => action("onChange")(e, props)} />
            <label className="field__label field__label--end" htmlFor="switch-1">
                Default
            </label>
        </span>,
  name: "Default switch-button"
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
            <EbaySwitch {...args} checked value="123" id="switch-2" onChange={action("switch-change")} />
            <label className="field__label field__label--end" htmlFor="switch-2">
                Checked
            </label>
        </span>,
  name: "Selected switch-button"
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
            <EbaySwitch {...args} disabled id="switch-20" />
            <label className="field__label field__label--end" htmlFor="switch-20">
                Disabled
            </label>
        </span>,
  name: "Disabled switch-button"
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <span className="field">
                <EbaySwitch {...args} checked={checked} id="switch-30" onChange={(e, props) => {
        action("onChange")(e, props);
        if (props) {
          setChecked(props.checked);
        }
      }} />
                <label className="field__label field__label--end" htmlFor="switch-30">
                    {checked ? "Checked" : "Unchecked"}
                </label>
            </span>;
  },
  name: "Controlled switch-button"
}`,...c.parameters?.docs?.source}}};const f=["DefaultSwitchButton","SelectedSwitchButton","DisabledSwitchButton","ControlledSwitchButton"];export{c as ControlledSwitchButton,n as DefaultSwitchButton,l as DisabledSwitchButton,s as SelectedSwitchButton,f as __namedExportsOrder,w as default};
