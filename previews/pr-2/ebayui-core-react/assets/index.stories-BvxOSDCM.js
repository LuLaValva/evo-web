import{R as e,r as h}from"./iframe-40IW9wFk.js";import{E as f}from"./button-OqHcRAbb.js";import{E as a,a as t}from"./ebay-select-BTDQPQFJ.js";import"./preload-helper-PPVm8Dsz.js";import"./progress-spinner-BZHBla9K.js";import"./ebay-icon-spinner-30-BtiqLtyW.js";import"./ebay-icon-chevron-down-12-BnA4uKCd.js";import"./utils-B6clV3l8.js";import"./hooks-zNOO5MMu.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,B={title:"form input/ebay-select",tags:["autodocs"],parameters:{docs:{description:{component:`This component is used to create a native \`<select>\` form element with default browser styling.

## Import

\`\`\`jsx harmony
import { EbaySelect, EbaySelectOption } from "@ebay/ui-core-react/ebay-select";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/select";
import "@ebay/skin/icon";
import "@ebay/skin/floating-label";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/select.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/floating-label.css";
\`\`\``}}},argTypes:{name:{description:"passed to the `<select>` element",control:"text"},value:{description:"Set the value of the `<select>` element. Use this for **controlled component**.",control:"text"},defaultValue:{description:"Set the initial value for `<select>` element, only for **uncontrolled component**.",control:"text"},disabled:{description:"passed to the `<select>` element, default is `false`",options:["<select>","false"],control:{type:"select"}},className:{description:"passed to the wrapper-element of the `<select>` element",control:"text"},borderless:{description:"whether select is borderless, default is `false`",control:"boolean"},fluid:{description:"whether select takes full width of its container, default is `false`",control:"boolean"},floatingLabel:{description:"Indicates that the select is a floating label type and renders it as a label",control:"text"},inputSize:{description:"`default` (default), `large`",options:["default","large"],control:{type:"select"}},invalid:{description:"Indicates a field-level error with red border if true",control:"boolean"},onChange:{description:"Called on option change with arguments: `(ChangeEvent, { index: number, selected: string[] }`",action:"onChange",table:{category:"Events"}}}},r=n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,name:"formSelect",onChange:(b,o)=>l("onChange")(b,o)},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3"))),c={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,name:"formSelect",value:"3","aria-invalid":"true",onChange:l("select-change"),"aria-label":"Please select a option"},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3"))),name:"Invalid select"},i={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,name:"formSelect",onChange:l("select-change")},e.createElement(t,{value:"pre"},"Option PRE"),e.createElement(t,{optgroup:"Group 1",value:"1"},"Option 1[Group 1]"),e.createElement(t,{optgroup:"Group 1",value:"2"},"Option 2[Group 1]"),e.createElement(t,{optgroup:"Group 1",value:"3"},"Option 3[Group 1]"),e.createElement(t,{value:"mid"},"Option MID"),e.createElement(t,{optgroup:"Group 2",value:"4"},"Option 4[Group 2]"),e.createElement(t,{optgroup:"Group 2",value:"5"},"Option 5[Group 2]"),e.createElement(t,{optgroup:"Group 2",value:"6"},"Option 6[Group 2]"),e.createElement(t,{optgroup:"Group 3",value:"7"},"Option 7[Group 3]"),e.createElement(t,{optgroup:"Group 3",value:"8"},"Option 8[Group 3]"),e.createElement(t,{optgroup:"Group 3",value:"9"},"Option 9[Group 3]"),e.createElement(t,{value:"post"},"Option POST"))),name:"Grouped options"},p={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,borderless:!0,defaultValue:"4",name:"formSelect",onChange:l("select-change")},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3"))),name:"Borderless select"},s={args:{fluid:!0},render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,name:"formSelect",onChange:l("select-change")},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3"))),name:"Fluid select"},u={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,className:"customclass",disabled:!0,name:"formSelect"},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"))),name:"Disabled select"},m={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,name:"formSelect",defaultValue:"3",onChange:l("select-change")},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3"))),name:"Uncontrolled component with defaultValue"},E={render:n=>{const b=()=>{const[o,g]=h.useState("UK"),y=(C,{selected:v})=>{g(v[0])};return e.createElement("div",{style:{width:"500px"}},e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement(a,{...n,name:"selectCountry",value:o,onChange:y},e.createElement(t,{value:"DE"},"DE"),e.createElement(t,{value:"US"},"US"),e.createElement(t,{value:"UK"},"UK"),e.createElement(t,{value:"AU"},"AU")),e.createElement("div",{style:{margin:"0 2rem"}},"Current selected: ",e.createElement("strong",null,o)),e.createElement(f,{onClick:()=>g("US")},"Set selected to US")))};return e.createElement(e.Fragment,null,e.createElement(b,null))},name:"Controlled component"},d={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,name:"formSelect",onChange:l("select-change"),floatingLabel:"Label"},e.createElement(t,{value:""},"Choose an option"),e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3"))),name:"Floating label"},S={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,name:"formSelect",value:"3","aria-invalid":"true",onChange:l("select-change"),floatingLabel:"Invalid label","aria-label":"Please select a option"},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3"))),name:"Invalid floating label select"},O=n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,name:"formSelect",onChange:l("select-change"),floatingLabel:"Label",inputSize:"large"},e.createElement(t,{value:""},"Choose an option"),e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3")));r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <>
        <EbaySelect {...args} name="formSelect" onChange={(e: ChangeEvent, props: ChangeEventProps) => action("onChange")(e, props)}>
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} name="formSelect" value="3" aria-invalid="true" onChange={action("select-change")} aria-label="Please select a option">
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Invalid select"
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} name="formSelect" onChange={action("select-change")}>
                <EbaySelectOption value="pre">Option PRE</EbaySelectOption>
                <EbaySelectOption optgroup="Group 1" value="1">
                    Option 1[Group 1]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 1" value="2">
                    Option 2[Group 1]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 1" value="3">
                    Option 3[Group 1]
                </EbaySelectOption>
                <EbaySelectOption value="mid">Option MID</EbaySelectOption>
                <EbaySelectOption optgroup="Group 2" value="4">
                    Option 4[Group 2]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 2" value="5">
                    Option 5[Group 2]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 2" value="6">
                    Option 6[Group 2]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 3" value="7">
                    Option 7[Group 3]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 3" value="8">
                    Option 8[Group 3]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 3" value="9">
                    Option 9[Group 3]
                </EbaySelectOption>
                <EbaySelectOption value="post">Option POST</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Grouped options"
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} borderless defaultValue="4" name="formSelect" onChange={action("select-change")}>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Borderless select"
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fluid: true
  },
  render: args => <>
            <EbaySelect {...args} name="formSelect" onChange={action("select-change")}>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Fluid select"
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} className="customclass" disabled name="formSelect">
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Disabled select"
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} name="formSelect" defaultValue="3" onChange={action("select-change")}>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Uncontrolled component with defaultValue"
}`,...m.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const TestControlledComponent = () => {
      const [selectedValue, setSelectedValue] = useState("UK");
      const handleChange = (e: ChangeEvent<HTMLSelectElement>, {
        selected
      }: {
        index: number;
        selected: string[];
      }) => {
        setSelectedValue(selected[0]);
      };
      return <div style={{
        width: "500px"
      }}>
                    <div style={{
          display: "flex",
          alignItems: "center"
        }}>
                        <EbaySelect {...args} name="selectCountry" value={selectedValue} onChange={handleChange}>
                            <EbaySelectOption value="DE">DE</EbaySelectOption>
                            <EbaySelectOption value="US">US</EbaySelectOption>
                            <EbaySelectOption value="UK">UK</EbaySelectOption>
                            <EbaySelectOption value="AU">AU</EbaySelectOption>
                        </EbaySelect>

                        <div style={{
            margin: "0 2rem"
          }}>
                            Current selected: <strong>{selectedValue}</strong>
                        </div>
                        <EbayButton onClick={() => setSelectedValue("US")}>Set selected to US</EbayButton>
                    </div>
                </div>;
    };
    return <>
                <TestControlledComponent />
            </>;
  },
  name: "Controlled component"
}`,...E.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} name="formSelect" onChange={action("select-change")} floatingLabel="Label">
                <EbaySelectOption value="">Choose an option</EbaySelectOption>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Floating label"
}`,...d.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} name="formSelect" value="3" aria-invalid="true" onChange={action("select-change")} floatingLabel="Invalid label" aria-label="Please select a option">
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Invalid floating label select"
}`,...S.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => <>
        <EbaySelect {...args} name="formSelect" onChange={action("select-change")} floatingLabel="Label" inputSize="large">
            <EbaySelectOption value="">Choose an option</EbaySelectOption>
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>`,...O.parameters?.docs?.source}}};const T=["Basic","InvalidSelect","GroupedOptions","BorderlessSelect","FluidSelect","DisabledSelect","UncontrolledComponentWithDefaultValue","ControlledComponent","FloatingLabel","InvalidFloatingLabelSelect","LargeSelect"];export{r as Basic,p as BorderlessSelect,E as ControlledComponent,u as DisabledSelect,d as FloatingLabel,s as FluidSelect,i as GroupedOptions,S as InvalidFloatingLabelSelect,c as InvalidSelect,O as LargeSelect,m as UncontrolledComponentWithDefaultValue,T as __namedExportsOrder,B as default};
