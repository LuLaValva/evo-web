import{r as g,R as e,c as N}from"./iframe-DwqJUzba.js";import{E as h}from"./button-C2Nfzhvi.js";import{E as a,N as C}from"./notice-content-BersKMFE.js";import{b as I}from"./utils-Z9P_t24o.js";import{E as S}from"./ebay-icon-attention-filled-16-NROql4fS.js";import{a as w,E as _}from"./ebay-icon-information-filled-16-D1yP1CCh.js";import"./preload-helper-PPVm8Dsz.js";import"./progress-spinner-Dac_X6v2.js";import"./ebay-icon-spinner-30-DeWCPX8C.js";import"./ebay-icon-chevron-down-12-B-h7JWBq.js";const x={attention:S,confirmation:_,information:w},o=({className:n,status:t="general",children:m,hidden:p=!1,"aria-label":u,onNoticeShow:y=()=>{},...b})=>{if(g.useEffect(()=>{p||y()},[p]),p)return null;const E=I(m,a);if(!E)throw new Error("EbayInlineNotice: Please use a EbayNoticeContent that defines the content of the notice");const d=t==="general",f=d?null:x[t];return e.createElement("div",{...b,className:N(n,"inline-notice",{[`inline-notice--${t}`]:!d})},d?null:e.createElement("span",{className:"inline-notice__header"},e.createElement(f,{a11yText:u,a11yVariant:"label"})),e.createElement(C,{...E.props,type:"inline"}))};try{inlinenotice.displayName="inlinenotice",inlinenotice.__docgenInfo={description:"",displayName:"inlinenotice",props:{}}}catch{}const{action:T}=__STORYBOOK_MODULE_ACTIONS__,P={title:"notices & tips/ebay-inline-notice",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayInlineNotice, EbayNoticeContent } from "@ebay/ui-core-react/ebay-inline-notice";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/inline-notice";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/inline-notice.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayInlineNotice status="confirmation" aria-label="Confirmation">
    <EbayNoticeContent>
        <p>Delivered on May 1, 2017</p>
    </EbayNoticeContent>
</EbayInlineNotice>
\`\`\``}}},argTypes:{status:{description:"Determines the style and type of notice to be displayed",control:"text"},"aria-label":{description:"The description of the notice itself for screen readers. Check out [this issue](https://github.com/eBay/skin/issues/1001) for more context.",control:"text"},hidden:{description:"Determines whether the notice is hidden or not.",control:"boolean"},onNoticeShow:{description:"A function that is called when the notice is displayed",action:"onNoticeShow",table:{category:"Events"}},children:{description:"The content to be displayed within the notice. **Must have the EbayNoticeContent within the children!**",control:"text"}}},r=n=>e.createElement(e.Fragment,null,e.createElement(o,{...n,"aria-label":"General"},e.createElement(a,null,e.createElement("p",null,"text message")))),i={render:n=>e.createElement(e.Fragment,null,e.createElement(o,{...n,status:"confirmation","aria-label":"Confirmation"},e.createElement(a,null,e.createElement("p",null,"Delivered on May 1, 2017"),e.createElement("p",null,"Tracking number: ",e.createElement("a",{href:"http://www.ebay.com"},"93878473859376898908657567"))))),name:"Confirmation message"},c={render:n=>e.createElement(e.Fragment,null,e.createElement(o,{...n,status:"information","aria-label":"Information"},e.createElement(a,null,e.createElement("p",null,"Global Shipping Program transaction.")))),name:"Information message"},s={render:n=>e.createElement(e.Fragment,null,e.createElement(o,{...n,status:"attention","aria-label":"Attention"},e.createElement(a,null,e.createElement("p",null,"Update your credit card.")))),name:"Attention message"},l={render:n=>e.createElement(e.Fragment,null,e.createElement(M,{...n})),name:"Notice toggle"};function M(n){const[t,m]=g.useState(!1);return e.createElement(e.Fragment,null,e.createElement(h,{onClick:()=>m(!t)},t?"Show":"Hide"," Notice"),e.createElement(o,{...n,status:"confirmation",hidden:t,onNoticeShow:T("Showing"),"aria-label":"Toggle notice"},e.createElement(a,null,e.createElement("p",null,"Delivered on May 1, 2017"),e.createElement("p",null,"Tracking number: ",e.createElement("a",{href:"http://www.ebay.com"},"93878473859376898908657567")))))}r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <>
        <EbayInlineNotice {...args} aria-label="General">
            <EbayNoticeContent>
                <p>text message</p>
            </EbayNoticeContent>
        </EbayInlineNotice>
    </>`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayInlineNotice {...args} status="confirmation" aria-label="Confirmation">
                <EbayNoticeContent>
                    <p>Delivered on May 1, 2017</p>
                    <p>
                        Tracking number: <a href="http://www.ebay.com">93878473859376898908657567</a>
                    </p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>,
  name: "Confirmation message"
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayInlineNotice {...args} status="information" aria-label="Information">
                <EbayNoticeContent>
                    <p>Global Shipping Program transaction.</p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>,
  name: "Information message"
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayInlineNotice {...args} status="attention" aria-label="Attention">
                <EbayNoticeContent>
                    <p>Update your credit card.</p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>,
  name: "Attention message"
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <NoticeToggleStory {...args} />
        </>,
  name: "Notice toggle"
}`,...l.parameters?.docs?.source}}};const R=["Default","ConfirmationMessage","InformationMessage","AttentionMessage","NoticeToggle"];export{s as AttentionMessage,i as ConfirmationMessage,r as Default,c as InformationMessage,l as NoticeToggle,R as __namedExportsOrder,P as default};
