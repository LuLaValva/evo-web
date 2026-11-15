import{r as y,j as e}from"./iframe-CzZnJahE.js";import{c as f}from"./index-PS7GGN8w.js";import{E as w}from"./chevron-right-12-OF1mzMKJ.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-CO0LAmUM.js";function v({item:t,isLast:n}){const{content:a,as:r="a",href:l,...s}=t;return e.jsx(r,{...s,href:l,"aria-current":n?"location":void 0,children:a})}function x({item:t,isLast:n}){const{content:a,...r}=t;return e.jsx("button",{...r,"aria-current":n?"location":void 0,children:a})}function p({a11yHeadingText:t="Page navigation",a11yHeadingTag:n="h2",items:a,className:r,...l}){const s=y.useId();if(!a)return null;const g=a.length-1;return e.jsxs("nav",{...l,role:"navigation","aria-labelledby":s,className:f("breadcrumbs","breadcrumb--overflow",r),children:[e.jsx(n,{id:s,className:"clipped",children:t}),e.jsx("ul",{children:a.map((o,u)=>{const h=u===g,b="href"in o&&o.href!==void 0;return e.jsxs("li",{children:[b?e.jsx(v,{item:o,isLast:h}):e.jsx(x,{item:o,isLast:h}),!h&&e.jsx(w,{})]},u)})})]})}try{p.displayName="EvoBreadcrumbs",p.__docgenInfo={description:"",displayName:"EvoBreadcrumbs",props:{a11yHeadingText:{defaultValue:{value:"Page navigation"},description:"",name:"a11yHeadingText",required:!1,type:{name:"string"}},a11yHeadingTag:{defaultValue:{value:"h2"},description:"",name:"a11yHeadingTag",required:!1,type:{name:"keyof HTMLElementTagNameMap"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}},a11yMenuButtonText:{defaultValue:null,description:"",name:"a11yMenuButtonText",required:!1,type:{name:"string"}}}}}catch{}const H={title:"navigation & disclosure/evo-breadcrumbs",component:p,tags:["autodocs"],parameters:{docs:{description:{component:`
A breadcrumb navigation component that renders a list of hierarchical links or buttons, displaying the path of the current resource.

## Usage

\`\`\`tsx
import { EvoBreadcrumbs } from "@evo-web/react/breadcrumbs";
\`\`\`
        `}}},argTypes:{a11yHeadingText:{control:"text",description:'Clipped heading text that labels the breadcrumb navigation region. English default is `"Page navigation"`.'},a11yHeadingTag:{control:"text",description:"HTML heading tag used for the clipped heading. Defaults to `h2`."},items:{control:"object",description:"List of breadcrumb items. Each item renders as `<a>` when `href` is present, or `<button>` otherwise. Use `as` to render via a framework Link component."}},args:{a11yHeadingText:"Page navigation",items:[{href:"https://www.ebay.com/",content:"eBay"},{href:"https://www.ebay.com/rpp/cell-phone-pda",content:"Cell Phones, Smart Watches & Accessories"},{href:"https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",content:"Smart Watch Accessories"},{content:"Smart Watch Bands"}]}},c={},i={args:{a11yHeadingText:"Custom page navigation",a11yHeadingTag:"h3",items:[{href:"https://www.ebay.com/",content:"eBay"},{href:"https://www.ebay.com/rpp/cell-phone-pda",content:"Cell Phones, Smart Watches & Accessories"},{href:"https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",content:"Smart Watch Accessories"},{href:"https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906",content:"Smart Watch Bands"}]}},m={args:{a11yHeadingText:"Custom page navigation",a11yHeadingTag:"h3",items:[{content:"eBay"},{content:"Cell Phones, Smart Watches & Accessories"},{content:"Smart Watch Accessories"},{content:"Smart Watch Bands"}]}},d={args:{items:[{content:"Smart Watch Bands"}]}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    a11yHeadingText: "Custom page navigation",
    a11yHeadingTag: "h3",
    items: [{
      href: "https://www.ebay.com/",
      content: "eBay"
    }, {
      href: "https://www.ebay.com/rpp/cell-phone-pda",
      content: "Cell Phones, Smart Watches & Accessories"
    }, {
      href: "https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",
      content: "Smart Watch Accessories"
    }, {
      href: "https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906",
      content: "Smart Watch Bands"
    }]
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    a11yHeadingText: "Custom page navigation",
    a11yHeadingTag: "h3",
    items: [{
      content: "eBay"
    }, {
      content: "Cell Phones, Smart Watches & Accessories"
    }, {
      content: "Smart Watch Accessories"
    }, {
      content: "Smart Watch Bands"
    }]
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      content: "Smart Watch Bands"
    }]
  }
}`,...d.parameters?.docs?.source}}};const _=["Default","AllLinks","AllButtons","SingleItem"];export{m as AllButtons,i as AllLinks,c as Default,d as SingleItem,_ as __namedExportsOrder,H as default};
