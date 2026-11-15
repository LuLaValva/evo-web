import{R as e,r as x}from"./iframe-Chwe0yWC.js";import{E as n,a as C,b as o,c as a}from"./ebay-infotip-content-BWOzzrj3.js";import{E as v}from"./ebay-icon-settings-16-Dkdhrm0j.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C2oUkhmw.js";import"./use-tooltip-wiDIAiS3.js";import"./ebay-icon-close-16-dJYldMPi.js";import"./dialog-previous-button-BW_Kk7Lm.js";import"./index-CpaLjOGe.js";import"./icon-button-DIUt2uyc.js";import"./badge-D3ppR6S6.js";import"./ebay-icon-chevron-left-16-BDhuBvDF.js";import"./lightbox-dialog-C_lJ2yx-.js";import"./ebay-icon-information-16-CRzxlv3U.js";import"./floating-ui-B6rarkHD.js";import"./jsx-runtime-u17CrQMm.js";import"./index-8a3-YkD_.js";import"./index-CsRCCULS.js";const T=["top","top-left","top-right","right","right-bottom","right-top","bottom","bottom-left","bottom-right","left","left-bottom","left-top"],R={title:"buttons/ebay-infotip",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayInfotip, EbayInfotipHost, EbayInfotipContent, EbayInfotipHeading } from "@ebay/ui-core-react/ebay-infotip";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/infotip";

// When using variant="modal"
import "@ebay/skin/lightbox-dialog"
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/infotip.css";

/* When using variant="modal" */
@import "@ebay/skin/lightbox-dialog.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayInfotip>
    <EbayInfotipHeading>Heading</EbayInfotipHeading>
    <EbayInfotipContent>
        <p>Here's a tip to help you be successful at your task.</p>
    </EbayInfotipContent>
</EbayInfotip>
\`\`\``}}},argTypes:{variant:{description:"Either modal or default. If modal will show the mobile version of infotip",control:"text"},pointer:{description:"options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`",options:["top-left","top","top-right","right","right-bottom","right-top","bottom-left","bottom-right","bottom","left","left-bottom","left-top"],control:{type:"select"}},icon:{description:"Different icon to be used than `information-small`. Full list [here](https://ebay.github.io/skin/index.html#icon)",control:"text"},disabled:{description:"Define if the infotip is disabled or not",control:"boolean"},overlayStyle:{description:"Style object to customize default values for the overlay. It can be used all CSS properties like `top`, `left`, `bottom`, `right`.",options:["top","left","bottom","right"],control:{type:"select"}},initialExpanded:{description:"Open the tooltip on the initial render",control:"boolean"},open:{description:"Control the visibility of the infotip from the parent",control:"boolean"},a11yCloseText:{description:"A11y text for close button and mask.",control:"text"},"aria-label":{description:'A descriptive label of what the infotip button represents (e.g. "Important information")',control:"text"},offset:{description:"Numeric offset for floating-ui positioning",control:{type:"number"}},noFlip:{description:"Disable automatic flip behavior",control:"boolean"},noShift:{description:"Disable automatic shift behavior",control:"boolean"},notInline:{description:"Opt out of inline display",control:"boolean"},onExpand:{description:"overlay has been expanded",action:"onExpand",table:{category:"Events"}},onCollapse:{description:"overlay has been collapsed",action:"onCollapse",table:{category:"Events"}},EbayInfotipHost:{description:"The custom host-button (trigger) for the Infotip",control:"text"},EbayInfotipHeading:{description:"The heading to be displayed in the infotip",control:"text"},EbayInfotipContent:{description:"The content to be displayed in the infotip",control:"text"}}},l=t=>e.createElement("div",{style:{display:"flex",margin:200}},e.createElement(n,{...t,a11yCloseText:"Close","aria-label":"Infotip"},e.createElement(a,null,"Title"),e.createElement(o,null,e.createElement("p",null,"Content")))),s={render:t=>e.createElement("div",{style:{width:"100%",margin:200}},e.createElement(n,{...t,icon:e.createElement(v,null),"aria-label":"Infotip",a11yCloseText:"Close"},e.createElement(o,null,e.createElement(a,null,"Title"),e.createElement("p",null,"Content")))),name:"Custom icon"},p=t=>e.createElement("div",{style:{display:"flex",margin:200}},e.createElement(n,{...t,disabled:!0,a11yCloseText:"Close","aria-label":"Infotip"},e.createElement(a,null,"Title"),e.createElement(o,null,e.createElement("p",null,"Content")))),c={render:t=>e.createElement("div",{style:{width:"100%",margin:100}},e.createElement("em",null,"NOTE: No block elements can be nested in p elements, like div, h1-6, or other p elements. Any content with that will break"),e.createElement("p",null,"Some paragraph content"," ",e.createElement(n,{...t,a11yCloseText:"Dismiss infotip","aria-label":"Important information"},e.createElement(a,null,"Important"),e.createElement(o,null,e.createElement("span",null,"This is some important info")))," ","More paragraph content")),name:"In paragraph"},m=t=>e.createElement("div",{style:{width:"100%",margin:100}},e.createElement(n,{variant:"modal",a11yCloseText:"Close","aria-label":"Infotip",...t},e.createElement(a,null,"Title"),e.createElement(o,null,e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))),d={render:t=>e.createElement("div",{style:{width:"100%",marginLeft:300}},T.map((i,g)=>e.createElement("div",{key:g,style:{margin:"100px 0"}},i," ",e.createElement(n,{pointer:i,a11yCloseText:"Close","aria-label":"Infotip",...t},e.createElement(a,null,"Title"),e.createElement(o,null,e.createElement("p",null,"Use Access Key 'S' to display settings.")))))),name:"Pointer direction"},y={render:t=>e.createElement("div",{style:{width:"100%",margin:200}},e.createElement(n,{...t,pointer:"top-left",overlayStyle:{top:40,left:-16},a11yCloseText:"Close","aria-label":"Infotip"},e.createElement(a,null,"Title"),e.createElement(o,null,e.createElement("p",null,"Use Access Key 'S' to display settings.")))),name:"Pointer with custom location"},f={render:t=>e.createElement("div",{style:{width:"100%",margin:200}},e.createElement(n,{...t,pointer:"top-left",a11yCloseText:"Close"},e.createElement(C,null,"Click for infotip"),e.createElement(a,null,"Title"),e.createElement(o,null,e.createElement("p",null,"Use Access Key 'S' to display settings.")))),name:"Text instead of icon"},b={render:t=>e.createElement("div",{style:{width:"100%",margin:200}},e.createElement(n,{...t,pointer:"top-left",a11yCloseText:"Close","aria-label":"Wrong aria-label, should be overwritten"},e.createElement(C,{"aria-label":"Click to open infotip",style:{height:"auto",width:"auto"}},({icon:i})=>e.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},i,e.createElement("span",{style:{marginLeft:5}},"Click me"))),e.createElement(o,null,e.createElement(a,null,"Title"),e.createElement("p",null,"Use Access Key 'S' to display settings.")))),name:"Custom button content (With render prop)"},E={render:t=>e.createElement("div",{style:{width:"100%",margin:200}},e.createElement(n,{...t,pointer:"top-left",initialExpanded:!0,a11yCloseText:"Close","aria-label":"Infotip"},e.createElement(a,null,"Title"),e.createElement(o,null,e.createElement("p",null,"Use Access Key 'S' to display settings.")))),name:"Expanded by default"},u={render:()=>{const t=["First infotip content","Second infotip content","Third infotip content"],i=()=>{const[g,I]=x.useState(null);return e.createElement("div",{style:{display:"flex",gap:24,margin:200}},t.map((h,r)=>e.createElement(n,{key:r,open:g===r,onExpand:()=>I(r),onCollapse:()=>I(null),a11yCloseText:"Close","aria-label":`Infotip ${r+1}`},e.createElement(a,null,"Item ",r+1),e.createElement(o,null,e.createElement("p",null,h)))))};return e.createElement(i,null)},name:"Controlled (mutual exclusivity)"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  margin: 200
}}>
        <EbayInfotip {...args} a11yCloseText="Close" aria-label="Infotip">
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>Content</p>
            </EbayInfotipContent>
        </EbayInfotip>
    </div>`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%",
    margin: 200
  }}>
            <EbayInfotip {...args} icon={<EbayIconSettings16 />} aria-label="Infotip" a11yCloseText="Close">
                <EbayInfotipContent>
                    <EbayInfotipHeading>Title</EbayInfotipHeading>
                    <p>Content</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>,
  name: "Custom icon"
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  margin: 200
}}>
        <EbayInfotip {...args} disabled a11yCloseText="Close" aria-label="Infotip">
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>Content</p>
            </EbayInfotipContent>
        </EbayInfotip>
    </div>`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%",
    margin: 100
  }}>
            <em>
                NOTE: No block elements can be nested in p elements, like div, h1-6, or other p elements. Any content
                with that will break
            </em>
            <p>
                Some paragraph content{" "}
                <EbayInfotip {...args} a11yCloseText="Dismiss infotip" aria-label="Important information">
                    <EbayInfotipHeading>Important</EbayInfotipHeading>
                    <EbayInfotipContent>
                        <span>This is some important info</span>
                    </EbayInfotipContent>
                </EbayInfotip>{" "}
                More paragraph content
            </p>
        </div>,
  name: "In paragraph"
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "100%",
  margin: 100
}}>
        <EbayInfotip variant="modal" a11yCloseText="Close" aria-label="Infotip" {...args}>
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </EbayInfotipContent>
        </EbayInfotip>
    </div>`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%",
    marginLeft: 300
  }}>
            {allPointers.map((pointerType, index) => <div key={index} style={{
      margin: "100px 0"
    }}>
                    {pointerType}{" "}
                    <EbayInfotip pointer={pointerType} a11yCloseText="Close" aria-label="Infotip" {...args}>
                        <EbayInfotipHeading>Title</EbayInfotipHeading>
                        <EbayInfotipContent>
                            <p>Use Access Key &apos;S&apos; to display settings.</p>
                        </EbayInfotipContent>
                    </EbayInfotip>
                </div>)}
        </div>,
  name: "Pointer direction"
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%",
    margin: 200
  }}>
            <EbayInfotip {...args} pointer="top-left" overlayStyle={{
      top: 40,
      left: -16
    }} a11yCloseText="Close" aria-label="Infotip">
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>,
  name: "Pointer with custom location"
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%",
    margin: 200
  }}>
            <EbayInfotip {...args} pointer="top-left" a11yCloseText="Close">
                <EbayInfotipHost>Click for infotip</EbayInfotipHost>
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>,
  name: "Text instead of icon"
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%",
    margin: 200
  }}>
            <EbayInfotip {...args} pointer="top-left" a11yCloseText="Close" aria-label="Wrong aria-label, should be overwritten">
                <EbayInfotipHost aria-label="Click to open infotip" style={{
        height: "auto",
        width: "auto"
      }}>
                    {({
          icon
        }) => <span style={{
          display: "inline-flex",
          alignItems: "center"
        }}>
                            {icon}
                            <span style={{
            marginLeft: 5
          }}>Click me</span>
                        </span>}
                </EbayInfotipHost>
                <EbayInfotipContent>
                    <EbayInfotipHeading>Title</EbayInfotipHeading>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>,
  name: "Custom button content (With render prop)"
}`,...b.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%",
    margin: 200
  }}>
            <EbayInfotip {...args} pointer="top-left" initialExpanded a11yCloseText="Close" aria-label="Infotip">
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>,
  name: "Expanded by default"
}`,...E.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = ["First infotip content", "Second infotip content", "Third infotip content"];
    const Component = () => {
      const [openIndex, setOpenIndex] = useState<number | null>(null);
      return <div style={{
        display: "flex",
        gap: 24,
        margin: 200
      }}>
                    {items.map((text, i) => <EbayInfotip key={i} open={openIndex === i} onExpand={() => setOpenIndex(i)} onCollapse={() => setOpenIndex(null)} a11yCloseText="Close" aria-label={\`Infotip \${i + 1}\`}>
                            <EbayInfotipHeading>Item {i + 1}</EbayInfotipHeading>
                            <EbayInfotipContent>
                                <p>{text}</p>
                            </EbayInfotipContent>
                        </EbayInfotip>)}
                </div>;
    };
    return <Component />;
  },
  name: "Controlled (mutual exclusivity)"
}`,...u.parameters?.docs?.source}}};const q=["Default","CustomIcon","Disabled","InParagraph","Modal","_PointerDirection","PointerWithCustomLocation","TextInsteadOfIcon","CustomButtonContentWithRenderProp","ExpandedByDefault","Controlled"];export{u as Controlled,b as CustomButtonContentWithRenderProp,s as CustomIcon,l as Default,p as Disabled,E as ExpandedByDefault,c as InParagraph,m as Modal,y as PointerWithCustomLocation,f as TextInsteadOfIcon,d as _PointerDirection,q as __namedExportsOrder,R as default};
