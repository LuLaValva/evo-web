import{r as d,R as e,c as C}from"./iframe-BgTX0Pxt.js";import{E as N}from"./button-DIe0w_rS.js";import{a as _,b as w,E as D}from"./ebay-icon-stepper-upcoming-24-B18-vbV-.js";import"./preload-helper-PPVm8Dsz.js";import"./progress-spinner-C5mHzikr.js";import"./ebay-icon-spinner-30-Cc8oBNHl.js";import"./ebay-icon-chevron-down-12-BZqBnVcD.js";const c=({direction:t="row",defaultState:n="active",children:o,className:i,...u})=>{const l=d.Children.toArray(o),p=I(l,n);return e.createElement("div",{...u,className:C(i,"progress-stepper",{"progress-stepper--vertical":t==="column"})},e.createElement("div",{role:"list",className:"progress-stepper__items"},l.map((m,a)=>e.createElement(d.Fragment,{key:a},a>0&&e.createElement("hr",{className:"progress-stepper__separator",role:"presentation"}),d.cloneElement(m,{state:M(a,p),...m.props,current:p===a})))))};function I(t,n){const o=t.findIndex(i=>i.props.current);if(o===-1)switch(n){case"complete":return t.length-1;case"upcoming":return 0}return o}function M(t,n){if(t<=n)return"complete";if(t>n)return"upcoming"}try{ebayprogressstepper.displayName="ebayprogressstepper",ebayprogressstepper.__docgenInfo={description:"",displayName:"ebayprogressstepper",props:{direction:{defaultValue:{value:"row"},description:"",name:"direction",required:!1,type:{name:"StepperDirection"}},defaultState:{defaultValue:{value:"active"},description:"",name:"defaultState",required:!1,type:{name:"StepState"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const k={complete:_,attention:D,upcoming:w,active:_},r=({current:t,state:n="complete",children:o,className:i,...u})=>{const l=d.Children.toArray(o),p=l.find(y=>y.type===s),m=l.filter(y=>y.type!==s),a=C(i,"progress-stepper__item",{"progress-stepper__item--attention":n==="attention"}),g=k[n],T=t?"current":n;return e.createElement("div",{...u,className:a,role:"listitem","aria-current":t?"step":void 0},e.createElement("div",{className:"progress-stepper__icon"},e.createElement(g,{"aria-label":T})),e.createElement("div",{className:"progress-stepper__text"},p,m))};try{ebayprogressstep.displayName="ebayprogressstep",ebayprogressstep.__docgenInfo={description:"",displayName:"ebayprogressstep",props:{state:{defaultValue:{value:"complete"},description:"",name:"state",required:!1,type:{name:"StepState"}},current:{defaultValue:null,description:"",name:"current",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const s=({as:t="h4",children:n})=>d.createElement(t,{},n);try{ebayprogresstitle.displayName="ebayprogresstitle",ebayprogresstitle.__docgenInfo={description:"",displayName:"ebayprogresstitle",props:{as:{defaultValue:{value:"h4"},description:"",name:"as",required:!1,type:{name:"string"}}}}}catch{}const q={title:"progress/ebay-progress-stepper",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayProgressStepper, EbayProgressStep, EbayProgressTitle } from "@ebay/ui-core-react/ebay-progress-stepper";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/progress-stepper";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/progress-stepper.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayProgressStepper>
    <EbayProgressStep>Started</EbayProgressStep>
    <EbayProgressStep>Shipped</EbayProgressStep>
    <EbayProgressStep current>Transit</EbayProgressStep>
    <EbayProgressStep>Delivered</EbayProgressStep>
</EbayProgressStepper>
\`\`\`

## Components

### EbayProgressStepper

This is the container of the wizard stepper and you can define the direction of the stepper and pass properties to
customize the layout (\`className\` or \`style\`)

### EbayProgressStep

This component is used to render each step. It renders an icon, a title and a text label.

### EbayProgressTitle

The bolded title for each step. Will be rendered in an \`h4\` by default.

#### Example

\`\`\`jsx
<EbayProgressStepper>
    <EbayProgressStep>
        <EbayProgressTitle>Started</EbayProgressTitle>
        July 3rd
    </EbayProgressStep>

    <EbayProgressStep current>
        <EbayProgressTitle>Shipped</EbayProgressTitle>
        July 4th
    </EbayProgressStep>
</EbayProgressStepper>
\`\`\``}}},argTypes:{direction:{description:"Either `column` or `row` (default). Will display stepper as a vertical column or horizontal row.",options:["column","row"],control:{type:"select"}},defaultState:{description:"`complete`: all items will be in `complete` state by default, `upcoming`:all items will be in `upcoming` state, `attention`: current item will be shown as blocked. Otherwise, default state (`active`) will change items based on the current item (defaults to first step if not set).",options:["complete","complete","upcoming","upcoming","attention","active"],control:{type:"select"}},current:{description:"The current step. Only first step that has this property will be considered current. All steps before will be rendered as complete, and all after will render as upcoming. If not present on any step, then will render based on `defaultState` property",control:"boolean"},as:{description:"HTML tag to use instead of `h4`",control:"text"},state:{description:"State of a progress step",options:["complete","upcoming","attention","active"],control:{type:"select"}}}},S=t=>e.createElement("div",{style:{padding:50}},e.createElement(c,{...t},e.createElement(r,null,"Started"),e.createElement(r,null,"Shipped"),e.createElement(r,{current:!0},"Transit"),e.createElement(r,null,"Delivered"))),E={render:t=>e.createElement("div",{style:{padding:50}},e.createElement(c,{...t,defaultState:"upcoming"},e.createElement(r,null,e.createElement(s,null,"Paid"),"July 3rd"),e.createElement(r,null,e.createElement(s,null,"Shipped"),"July 4th"),e.createElement(r,null,e.createElement(s,null,"Transit"),"July 5th"),e.createElement(r,null,e.createElement(s,null,"Delivered"),"July 6th"))),name:"Default state: upcoming"},b={render:t=>e.createElement("div",{style:{padding:50}},e.createElement(c,{...t,defaultState:"complete"},e.createElement(r,null,"Started"),e.createElement(r,null,"Shipped"),e.createElement(r,null,"Transit"),e.createElement(r,null,"Delivered"))),name:"Default state: complete"},f=t=>e.createElement("div",{style:{padding:50}},e.createElement(c,{...t},e.createElement(r,null,"Started"),e.createElement(r,null,"Shipped"),e.createElement(r,{state:"attention",current:!0},"Blocked"),e.createElement(r,null,"Delivered"))),h=t=>e.createElement("div",{style:{padding:50}},e.createElement(c,{...t},e.createElement(r,null,e.createElement(s,{as:"h1"},"H1")),e.createElement(r,{current:!0},e.createElement(s,{as:"small"},"Small")),e.createElement(r,null,e.createElement(s,{as:"h2"},"H2")))),v={render:t=>e.createElement("div",{style:{padding:50}},e.createElement(c,{...t,direction:"column"},e.createElement(r,null,e.createElement(s,null,"Order placed"),e.createElement("p",null,"New Mens Addidas Ultra Boost"),e.createElement("p",null,"Order total $220")),e.createElement(r,{current:!0},e.createElement(s,null,"Preparing for shipment"),e.createElement("p",null,"We will notify you once it ships.")),e.createElement(r,null,e.createElement(s,null,"Delivered"),e.createElement("p",null,"Guaranteed Wednesday, October 09.")))),name:"Vertical (column)"},P=t=>{const n=()=>{const u=(a,g=0)=>Array.from(Array(a-g+1)).map((T,y)=>g+y),[l,p]=d.useState(2),m=()=>l<1?"upcoming":(l>4,"complete");return e.createElement("div",{style:{padding:50}},e.createElement(c,{...t,defaultState:m()},u(4,1).map(a=>e.createElement(r,{current:l===a,key:a},"Step ",a))),e.createElement("p",null,e.createElement(N,{onClick:()=>{p(Math.max(1,l-1))}},"Back")," ",e.createElement(N,{onClick:()=>{p(Math.min(4,l+1))}},"Forward")))};return e.createElement(e.Fragment,null,e.createElement(n,null))};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: 50
}}>
        <EbayProgressStepper {...args}>
            <Step>Started</Step>
            <Step>Shipped</Step>
            <Step current>Transit</Step>
            <Step>Delivered</Step>
        </EbayProgressStepper>
    </div>`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 50
  }}>
            <EbayProgressStepper {...args} defaultState="upcoming">
                <Step>
                    <Title>Paid</Title>
                    July 3rd
                </Step>
                <Step>
                    <Title>Shipped</Title>
                    July 4th
                </Step>
                <Step>
                    <Title>Transit</Title>
                    July 5th
                </Step>
                <Step>
                    <Title>Delivered</Title>
                    July 6th
                </Step>
            </EbayProgressStepper>
        </div>,
  name: "Default state: upcoming"
}`,...E.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 50
  }}>
            <EbayProgressStepper {...args} defaultState="complete">
                <Step>Started</Step>
                <Step>Shipped</Step>
                <Step>Transit</Step>
                <Step>Delivered</Step>
            </EbayProgressStepper>
        </div>,
  name: "Default state: complete"
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: 50
}}>
        <EbayProgressStepper {...args}>
            <Step>Started</Step>
            <Step>Shipped</Step>
            <Step state="attention" current>
                Blocked
            </Step>
            <Step>Delivered</Step>
        </EbayProgressStepper>
    </div>`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: 50
}}>
        <EbayProgressStepper {...args}>
            <Step>
                <Title as="h1">H1</Title>
            </Step>
            <Step current>
                <Title as="small">Small</Title>
            </Step>
            <Step>
                <Title as="h2">H2</Title>
            </Step>
        </EbayProgressStepper>
    </div>`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 50
  }}>
            <EbayProgressStepper {...args} direction="column">
                <Step>
                    <Title>Order placed</Title>
                    <p>New Mens Addidas Ultra Boost</p>
                    <p>Order total $220</p>
                </Step>
                <Step current>
                    <Title>Preparing for shipment</Title>
                    <p>We will notify you once it ships.</p>
                </Step>
                <Step>
                    <Title>Delivered</Title>
                    <p>Guaranteed Wednesday, October 09.</p>
                </Step>
            </EbayProgressStepper>
        </div>,
  name: "Vertical (column)"
}`,...v.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
  const TestingComponent: FC = () => {
    const MIN = 1;
    const MAX = 4;
    const range = (to: number, from = 0): number[] => Array.from(Array(to - from + 1)).map((v, k) => from + k);
    const [currentNumber, setCurrentNumber] = useState<number>(2);
    const defaultState = (): StepState => {
      if (currentNumber < MIN) return "upcoming";
      if (currentNumber > MAX) return "complete";
      return "complete";
    };
    return <div style={{
      padding: 50
    }}>
                <EbayProgressStepper {...args} defaultState={defaultState()}>
                    {range(MAX, MIN).map(n => <Step current={currentNumber === n} key={n}>
                            Step {n}
                        </Step>)}
                </EbayProgressStepper>
                <p>
                    <EbayButton onClick={() => {
          setCurrentNumber(Math.max(MIN, currentNumber - 1));
        }}>
                        Back
                    </EbayButton>
                    &nbsp;
                    <EbayButton onClick={() => {
          setCurrentNumber(Math.min(MAX, currentNumber + 1));
        }}>
                        Forward
                    </EbayButton>
                </p>
            </div>;
  };
  return <>
            <TestingComponent />
        </>;
}`,...P.parameters?.docs?.source}}};const U=["Default","DefaultStateUpcoming","DefaultStateComplete","Blocked","CustomTitles","VerticalColumn","Controlled"];export{f as Blocked,P as Controlled,h as CustomTitles,S as Default,b as DefaultStateComplete,E as DefaultStateUpcoming,v as VerticalColumn,U as __namedExportsOrder,q as default};
