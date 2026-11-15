import{R as e}from"./iframe-CxNC-Rdu.js";import{E as n}from"./textbox-xzmcB_eT.js";import{E as p}from"./ebay-switch-CJLcd0BC.js";import{E as s}from"./checkbox-Cc3EUykT.js";import{F as l,L as t,D as r}from"./description-DyaMGclO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B16kYCzs.js";import"./icon-button-rmeEPbMZ.js";import"./badge-BYbZzdjp.js";import"./hooks-BPNlBQ-m.js";import"./ebay-icon-checkbox-unchecked-18-CJloYInV.js";const S={title:"form input/ebay-field",tags:["autodocs"],parameters:{docs:{description:{component:'## Import\n\n```jsx harmony\nimport { EbayField, EbayLabel, EbayFieldDescription } from "@ebay/ui-core-react/ebay-field";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/field";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/field.css";\n```'}}},argTypes:{layout:{description:"`block`, `inline` (default)",options:["block","inline"],control:{type:"select"}},stacked:{description:"display label above the field if true",control:"boolean"},required:{description:"indicates the field is required if true",control:"boolean"},position:{description:"`start` (default) or `end` position towards the input",options:["start","end"],control:{type:"select"}},type:{description:"`confirmation`, `default`(Default), `attention`, `information`, `group`",options:["confirmation","default","attention","information","group"],control:{type:"select"}}}},o={render:a=>e.createElement("div",null,e.createElement(l,{...a},e.createElement(t,null,"Label for textbox"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a},e.createElement(t,null,"Label for switch"),e.createElement(p,{value:"123",id:"switch-1"})),e.createElement(l,{...a},e.createElement(t,null,"Label for checkbox"),e.createElement(s,{defaultChecked:!0,id:"checkbox-2"}))),name:"Default - inline"},c=a=>e.createElement("div",null,e.createElement(l,{...a,layout:"block"},e.createElement(t,{stacked:!0},"Label 1"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a,layout:"block"},e.createElement(t,{stacked:!0},"Label 1"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a,layout:"block"},e.createElement(t,{stacked:!0},"Label 1"),e.createElement(n,{placeholder:"placeholder text"}))),i={render:a=>e.createElement("div",null,e.createElement(l,{...a},e.createElement(t,null,"Label 1"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a},e.createElement(t,null,"Label 2"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a,layout:"block"},e.createElement(t,null,"Label 3"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a},e.createElement(t,null,"Label 4"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a},e.createElement(t,null,"Label 5"),e.createElement(n,{placeholder:"placeholder text"}))),name:"Block and inline combination"},b={render:a=>e.createElement("div",null,e.createElement(l,{...a},e.createElement(t,{required:!0},"Label 1"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a},e.createElement(t,null,"Label 1"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a},e.createElement(t,null,"Label 1"),e.createElement(n,{placeholder:"placeholder text"}))),name:"required"},d={render:a=>e.createElement("div",null,e.createElement(l,{...a,layout:"block"},e.createElement(t,{stacked:!0,htmlFor:"field1"},"Label 1"),e.createElement(n,{placeholder:"placeholder text",id:"field1"}),e.createElement(r,null,"Some description Text")),e.createElement(l,{...a,layout:"block"},e.createElement(t,{stacked:!0},"Label 2"),e.createElement(n,{placeholder:"placeholder text"}),e.createElement(r,{type:"confirmation"},"Some description Text")),e.createElement(l,{...a,layout:"block"},e.createElement(t,{stacked:!0},"Label 3"),e.createElement(n,{placeholder:"placeholder text",invalid:!0}),e.createElement(r,{type:"attention"},"Some description Text")),e.createElement(l,{...a,layout:"block"},e.createElement(t,{stacked:!0,htmlFor:"field4"},"Label 4"),e.createElement(n,{placeholder:"placeholder text",id:"field4"}),e.createElement(r,{type:"confirmation",position:"below"},"Some description Text"))),name:"with description"},E={render:a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(l,{...a},e.createElement(n,{placeholder:"placeholder text"}),e.createElement(t,{position:"end"},"Label 1"))),e.createElement("p",null,e.createElement(l,{...a},e.createElement(p,{value:"123",id:"switch-1"}),e.createElement(t,{position:"end"},"Label 1"))),e.createElement("p",null,e.createElement(l,{...a},e.createElement(s,{defaultChecked:!0,id:"checkbox-2"}),e.createElement(t,{position:"end"},"Label 1")))),name:"Labels on the right"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div>
            <EbayField {...args}>
                <EbayLabel>Label for textbox</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField {...args}>
                <EbayLabel>Label for switch</EbayLabel>
                <EbaySwitch value="123" id="switch-1" />
            </EbayField>
            <EbayField {...args}>
                <EbayLabel>Label for checkbox</EbayLabel>
                <EbayCheckbox defaultChecked id="checkbox-2" />
            </EbayField>
        </div>,
  name: "Default - inline"
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div>
        <EbayField {...args} layout="block">
            <EbayLabel stacked>Label 1</EbayLabel>
            <EbayTextbox placeholder="placeholder text" />
        </EbayField>
        <EbayField {...args} layout="block">
            <EbayLabel stacked>Label 1</EbayLabel>
            <EbayTextbox placeholder="placeholder text" />
        </EbayField>
        <EbayField {...args} layout="block">
            <EbayLabel stacked>Label 1</EbayLabel>
            <EbayTextbox placeholder="placeholder text" />
        </EbayField>
    </div>`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div>
            <EbayField {...args}>
                <EbayLabel>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField {...args}>
                <EbayLabel>Label 2</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField {...args} layout="block">
                <EbayLabel>Label 3</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField {...args}>
                <EbayLabel>Label 4</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField {...args}>
                <EbayLabel>Label 5</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
        </div>,
  name: "Block and inline combination"
}`,...i.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div>
            <EbayField {...args}>
                <EbayLabel required>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField {...args}>
                <EbayLabel>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField {...args}>
                <EbayLabel>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
        </div>,
  name: "required"
}`,...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div>
            <EbayField {...args} layout="block">
                <EbayLabel stacked htmlFor="field1">
                    Label 1
                </EbayLabel>
                <EbayTextbox placeholder="placeholder text" id="field1" />
                <EbayFieldDescription>Some description Text</EbayFieldDescription>
            </EbayField>
            <EbayField {...args} layout="block">
                <EbayLabel stacked>Label 2</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
                <EbayFieldDescription type="confirmation">Some description Text</EbayFieldDescription>
            </EbayField>
            <EbayField {...args} layout="block">
                <EbayLabel stacked>Label 3</EbayLabel>
                <EbayTextbox placeholder="placeholder text" invalid />
                <EbayFieldDescription type="attention">Some description Text</EbayFieldDescription>
            </EbayField>
            <EbayField {...args} layout="block">
                <EbayLabel stacked htmlFor="field4">
                    Label 4
                </EbayLabel>
                <EbayTextbox placeholder="placeholder text" id="field4" />
                <EbayFieldDescription type="confirmation" position="below">
                    Some description Text
                </EbayFieldDescription>
            </EbayField>
        </div>,
  name: "with description"
}`,...d.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <p>
                <EbayField {...args}>
                    <EbayTextbox placeholder="placeholder text" />
                    <EbayLabel position="end">Label 1</EbayLabel>
                </EbayField>
            </p>
            <p>
                <EbayField {...args}>
                    <EbaySwitch value="123" id="switch-1" />
                    <EbayLabel position="end">Label 1</EbayLabel>
                </EbayField>
            </p>
            <p>
                <EbayField {...args}>
                    <EbayCheckbox defaultChecked id="checkbox-2" />
                    <EbayLabel position="end">Label 1</EbayLabel>
                </EbayField>
            </p>
        </>,
  name: "Labels on the right"
}`,...E.parameters?.docs?.source}}};const v=["DefaultInline","Block","BlockAndInlineCombination","Required","WithDescription","LabelsOnTheRight"];export{c as Block,i as BlockAndInlineCombination,o as DefaultInline,E as LabelsOnTheRight,b as Required,d as WithDescription,v as __namedExportsOrder,S as default};
