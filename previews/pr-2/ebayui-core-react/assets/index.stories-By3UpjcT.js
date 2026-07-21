import{c as o,R as e}from"./iframe-D9ERtKCv.js";import{E as y,a as d}from"./ebay-icon-eek-arrow-C-aQj7-N.js";import"./preload-helper-PPVm8Dsz.js";const k={"A+++":["D","E","G"],"A++":["E","G"],"A+":["F","G"],A:["G"]},b=a=>{const{max:m,min:r,rating:s}=a,E=k[m];if(!(E&&E.indexOf(r)>-1))return null;let t=m,i=1;for(;t!==s;){if(i++,r===t)return null;t.length>1?t=t.slice(0,t.length-1):t=String.fromCharCode(t.charCodeAt(0)+1)}return i>7?7:i},n=({min:a="",max:m="",rating:r,a11yText:s,className:E})=>{const t=b({rating:r,min:a,max:m}),i=o(E,"eek",{[`eek--rating-${t}`]:!!t}),x=`Energy Rating: ${r}. Range: ${m} - ${a}.`;return e.createElement("div",{className:i,role:"img","aria-label":s||x},e.createElement("div",{className:"eek__container","aria-hidden":!0},e.createElement("span",{className:"eek__rating-range"},e.createElement("span",null,m),e.createElement(y,null),e.createElement("span",null,a)),e.createElement("span",{className:"eek__rating"},r)),e.createElement(d,null))};try{eekrating.displayName="eekrating",eekrating.__docgenInfo={description:"",displayName:"eekrating",props:{rating:{defaultValue:null,description:"",name:"rating",required:!0,type:{name:"string"}},max:{defaultValue:{value:""},description:"",name:"max",required:!1,type:{name:"string"}},min:{defaultValue:{value:""},description:"",name:"min",required:!1,type:{name:"string"}},a11yText:{defaultValue:null,description:"",name:"a11yText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const D={component:n,title:"graphics & icons/ebay-eek",tags:["autodocs"],parameters:{docs:{description:{component:`This component displays the current European Union Energy (EEK) rating of certain items that consume energy.

## Usage

### Import

\`\`\`jsx harmony
import { EbayEek } from "@ebay/ui-core-react/ebay-eek";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/eek";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/eek.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayEek max="A+++" min="E" rating="C" />
\`\`\``}}},argTypes:{rating:{description:"The energy rating",control:"text"},max:{description:"The maximum range",control:"text"},min:{description:"The minimum range",control:"text"},a11yText:{description:"Accessible label for the energy rating graphic",control:"text"}}},l=a=>e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement(n,{...a,max:"A",min:"G",rating:"A"}),e.createElement(n,{...a,max:"A",min:"G",rating:"B"}),e.createElement(n,{...a,max:"A",min:"G",rating:"C"}),e.createElement(n,{...a,max:"A",min:"G",rating:"D"}),e.createElement(n,{...a,max:"A",min:"G",rating:"E"}),e.createElement(n,{...a,max:"A",min:"G",rating:"F"}),e.createElement(n,{...a,max:"A",min:"G",rating:"G"}))),g={render:a=>e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement(n,{...a,max:"A++",min:"E",rating:"A++"}),e.createElement(n,{...a,max:"A++",min:"E",rating:"A+"}),e.createElement(n,{...a,max:"A++",min:"E",rating:"A"}),e.createElement(n,{...a,max:"A++",min:"E",rating:"B"}),e.createElement(n,{...a,max:"A++",min:"E",rating:"C"}),e.createElement(n,{...a,max:"A++",min:"E",rating:"D"}),e.createElement(n,{...a,max:"A++",min:"E",rating:"E"})),e.createElement("div",null,e.createElement(n,{...a,max:"A++",min:"G",rating:"A++"}),e.createElement(n,{...a,max:"A++",min:"G",rating:"A+"}),e.createElement(n,{...a,max:"A++",min:"G",rating:"A"}),e.createElement(n,{...a,max:"A++",min:"G",rating:"B"}),e.createElement(n,{...a,max:"A++",min:"G",rating:"C"}),e.createElement(n,{...a,max:"A++",min:"G",rating:"D"}),e.createElement(n,{...a,max:"A++",min:"G",rating:"E"}),e.createElement(n,{...a,max:"A++",min:"G",rating:"F"}),e.createElement(n,{...a,max:"A++",min:"G",rating:"G"}))),name:"A++"},A={render:a=>e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement(n,{...a,max:"A+++",min:"D",rating:"A+++"}),e.createElement(n,{...a,max:"A+++",min:"D",rating:"A++"}),e.createElement(n,{...a,max:"A+++",min:"D",rating:"A+"}),e.createElement(n,{...a,max:"A+++",min:"D",rating:"A"}),e.createElement(n,{...a,max:"A+++",min:"D",rating:"B"}),e.createElement(n,{...a,max:"A+++",min:"D",rating:"C"}),e.createElement(n,{...a,max:"A+++",min:"D",rating:"D"})),e.createElement("div",null,e.createElement(n,{...a,max:"A+++",min:"E",rating:"A+++"}),e.createElement(n,{...a,max:"A+++",min:"E",rating:"A++"}),e.createElement(n,{...a,max:"A+++",min:"E",rating:"A+"}),e.createElement(n,{...a,max:"A+++",min:"E",rating:"A"}),e.createElement(n,{...a,max:"A+++",min:"E",rating:"B"}),e.createElement(n,{...a,max:"A+++",min:"E",rating:"C"}),e.createElement(n,{...a,max:"A+++",min:"E",rating:"D"}),e.createElement(n,{...a,max:"A+++",min:"E",rating:"E"})),e.createElement("div",null,e.createElement(n,{...a,max:"A+++",min:"G",rating:"A+++"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"A++"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"A+"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"A"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"B"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"C"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"D"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"E"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"F"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"G"}))),name:"Valid A+++"},c=a=>e.createElement(e.Fragment,null,e.createElement(n,{...a,max:"B",min:"G",rating:"D"}),e.createElement(n,{...a,max:"A",min:"G",rating:"A+++"}),e.createElement(n,{...a,max:"A++",min:"B",rating:"A++"}),e.createElement(n,{...a,max:"A+",min:"B",rating:"A++"}));l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <>
        <div>
            <EbayEek {...args} max="A" min="G" rating="A" />
            <EbayEek {...args} max="A" min="G" rating="B" />
            <EbayEek {...args} max="A" min="G" rating="C" />
            <EbayEek {...args} max="A" min="G" rating="D" />
            <EbayEek {...args} max="A" min="G" rating="E" />
            <EbayEek {...args} max="A" min="G" rating="F" />
            <EbayEek {...args} max="A" min="G" rating="G" />
        </div>
    </>`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <div>
                <EbayEek {...args} max="A++" min="E" rating="A++" />
                <EbayEek {...args} max="A++" min="E" rating="A+" />
                <EbayEek {...args} max="A++" min="E" rating="A" />
                <EbayEek {...args} max="A++" min="E" rating="B" />
                <EbayEek {...args} max="A++" min="E" rating="C" />
                <EbayEek {...args} max="A++" min="E" rating="D" />
                <EbayEek {...args} max="A++" min="E" rating="E" />
            </div>
            <div>
                <EbayEek {...args} max="A++" min="G" rating="A++" />
                <EbayEek {...args} max="A++" min="G" rating="A+" />
                <EbayEek {...args} max="A++" min="G" rating="A" />
                <EbayEek {...args} max="A++" min="G" rating="B" />
                <EbayEek {...args} max="A++" min="G" rating="C" />
                <EbayEek {...args} max="A++" min="G" rating="D" />
                <EbayEek {...args} max="A++" min="G" rating="E" />
                <EbayEek {...args} max="A++" min="G" rating="F" />
                <EbayEek {...args} max="A++" min="G" rating="G" />
            </div>
        </>,
  name: "A++"
}`,...g.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <div>
                <EbayEek {...args} max="A+++" min="D" rating="A+++" />
                <EbayEek {...args} max="A+++" min="D" rating="A++" />
                <EbayEek {...args} max="A+++" min="D" rating="A+" />
                <EbayEek {...args} max="A+++" min="D" rating="A" />
                <EbayEek {...args} max="A+++" min="D" rating="B" />
                <EbayEek {...args} max="A+++" min="D" rating="C" />
                <EbayEek {...args} max="A+++" min="D" rating="D" />
            </div>
            <div>
                <EbayEek {...args} max="A+++" min="E" rating="A+++" />
                <EbayEek {...args} max="A+++" min="E" rating="A++" />
                <EbayEek {...args} max="A+++" min="E" rating="A+" />
                <EbayEek {...args} max="A+++" min="E" rating="A" />
                <EbayEek {...args} max="A+++" min="E" rating="B" />
                <EbayEek {...args} max="A+++" min="E" rating="C" />
                <EbayEek {...args} max="A+++" min="E" rating="D" />
                <EbayEek {...args} max="A+++" min="E" rating="E" />
            </div>
            <div>
                <EbayEek {...args} max="A+++" min="G" rating="A+++" />
                <EbayEek {...args} max="A+++" min="G" rating="A++" />
                <EbayEek {...args} max="A+++" min="G" rating="A+" />
                <EbayEek {...args} max="A+++" min="G" rating="A" />
                <EbayEek {...args} max="A+++" min="G" rating="B" />
                <EbayEek {...args} max="A+++" min="G" rating="C" />
                <EbayEek {...args} max="A+++" min="G" rating="D" />
                <EbayEek {...args} max="A+++" min="G" rating="E" />
                <EbayEek {...args} max="A+++" min="G" rating="F" />
                <EbayEek {...args} max="A+++" min="G" rating="G" />
            </div>
        </>,
  name: "Valid A+++"
}`,...A.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <>
        <EbayEek {...args} max="B" min="G" rating="D" />
        <EbayEek {...args} max="A" min="G" rating="A+++" />
        <EbayEek {...args} max="A++" min="B" rating="A++" />
        <EbayEek {...args} max="A+" min="B" rating="A++" />
    </>`,...c.parameters?.docs?.source}}};const v=["RegularA","A","ValidA","InvalidCombinations"];export{g as A,c as InvalidCombinations,l as RegularA,A as ValidA,v as __namedExportsOrder,D as default};
