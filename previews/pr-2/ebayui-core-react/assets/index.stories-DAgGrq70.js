import{R as e}from"./iframe-B5dskOpE.js";import{E as a}from"./signal-KJQ5R6ZY.js";import"./preload-helper-PPVm8Dsz.js";const u={component:a,title:"graphics & icons/ebay-signal",tags:["autodocs"],parameters:{docs:{description:{component:'## Description\n\nSignals are data-backed recommendations to help customers make more informed decisions. There are four signal statuses, each corresponding to a specific color: `trustworthy`, `recent`, `time-sensitive` & `neutral`. Defaults to `neutral` if none specified.\n\n## Usage\n\n### Import\n\n```jsx harmony\nimport { EbaySignal } from "@ebay/ui-core-react/ebay-signal";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/signal";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/signal.css";\n```\n\n### Basic\n\n```jsx\n<EbaySignal status="trustworthy">Top Rated</EbaySignal>\n```'}}},argTypes:{status:{description:"Status of signal; determines color. Possible values: `trustworthy`, `recent`, `time-sensitive` & `neutral` (default)",options:["trustworthy","recent","time-sensitive","neutral"],control:{type:"select"}}}},s=t=>e.createElement(e.Fragment,null,e.createElement(a,{...t},"Default")),r=t=>e.createElement(e.Fragment,null,e.createElement(a,{...t,status:"trustworthy"},"Trustworthy")),n=t=>e.createElement(e.Fragment,null,e.createElement(a,{...t,status:"recent"},"Recent")),o=t=>e.createElement(e.Fragment,null,e.createElement(a,{...t,status:"time-sensitive"},"Time-Sensitive")),i=t=>e.createElement(e.Fragment,null,e.createElement(a,{...t,status:"neutral"},"Neutral"));s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args}>Default</EbaySignal>
    </>`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} status="trustworthy">
            Trustworthy
        </EbaySignal>
    </>`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} status="recent">
            Recent
        </EbaySignal>
    </>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} status="time-sensitive">
            Time-Sensitive
        </EbaySignal>
    </>`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} status="neutral">
            Neutral
        </EbaySignal>
    </>`,...i.parameters?.docs?.source}}};const g=["DefaultCase","Trustworthy","Recent","TimeSensitive","Neutral"];export{s as DefaultCase,i as Neutral,n as Recent,o as TimeSensitive,r as Trustworthy,g as __namedExportsOrder,u as default};
