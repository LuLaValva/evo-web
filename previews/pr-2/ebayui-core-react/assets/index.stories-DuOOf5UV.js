import{R as e,r as p}from"./iframe-Bfsl7ac4.js";import{a as i,E as g,b as d}from"./dialog-previous-button-e1mYW4fL.js";import{E as c}from"./button-DWUY-Mlp.js";import{E as H}from"./checkbox-Nqy7terD.js";import{L}from"./description-BWMRnbYq.js";import{E as r}from"./lightbox-dialog-DO1fdUI6.js";import{E as T}from"./progress-spinner-DLhywcx5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CpaLjOGe.js";import"./ebay-icon-close-16-CmBDouYD.js";import"./icon-button-mGHiPe1a.js";import"./badge-Dcgdbb-I.js";import"./ebay-icon-chevron-left-16-C7HC5OI9.js";import"./ebay-icon-chevron-down-12-DbNe7ngO.js";import"./utils-CRmSFYmz.js";import"./ebay-icon-checkbox-unchecked-18-vtLm0JM_.js";import"./ebay-icon-spinner-30-BA9xqqPe.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,G={title:"dialogs/ebay-lightbox-dialog",component:r,argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open."},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog opens (defaults to close button)."},a11yCloseText:{control:{type:"text"},description:"A11y text for close button and mask."},bannerImgSrc:{control:{type:"text"},description:"Image source for the expressive variant"},bannerImgPosition:{control:{type:"text"},description:"Position of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)"},size:{options:["wide","narrow","fullscreen","large"],description:"The size of the dialog",table:{defaultValue:{summary:"regular"}},type:{category:"Options"}},onOpen:{action:"onOpen",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"onClose",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}},mode:{description:"Can be `default`, `mini`.",options:["default","mini"],control:{type:"select"}},buttonPosition:{control:{type:"text"},description:"Close button placement"},isModal:{control:{type:"boolean"},description:"Whether the dialog is modal"},ignoreEscape:{control:{type:"boolean"},description:"Whether to ignore Escape key"},animated:{description:"Renders the dialog with an animation. Note that the dialog will always be present in the DOM",control:"boolean"}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayLightboxDialog } from "@ebay/ui-core-react/ebay-lightbox-dialog";
import { EbayDialogHeader, EbayDialogFooter } from "@ebay/ui-core-react/ebay-dialog-base";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/lightbox-dialog";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/lightbox-dialog.css";
\`\`\``}}}},t=e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),b=o=>{const[n,l]=p.useState(!1),a=()=>l(!1);return e.createElement("div",null,e.createElement("button",{className:"btn btn--secondary",onClick:()=>l(!n)},"Open Dialog"),e.createElement("p",null,"Some outside content..."),e.createElement(r,{...o,open:n,onOpen:()=>s("onOpen")(),onClose:()=>{s("onClose")(),a()},a11yCloseText:"Close"},e.createElement(i,null,"Heading"),t,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")),e.createElement(g,null,e.createElement(c,{priority:"primary",onClick:a},"OK"),e.createElement(c,{onClick:a},"Cancel"))))},y=o=>e.createElement("div",null,e.createElement("p",null,"Some outside content..."),e.createElement(r,{...o,open:!0,a11yCloseText:"Close dialog"},e.createElement(i,null,"Heading"),t,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")))),E=o=>e.createElement("div",null,e.createElement("p",null,"Some outside content..."),e.createElement(r,{...o,open:!0,a11yCloseText:"Close"},e.createElement(i,null,"Heading"),t,t,t,t,t,t,t,t,t,t,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")))),h=o=>e.createElement("div",null,e.createElement("p",null,"Some outside content..."),e.createElement(r,{...o,mode:"mini",open:!0,a11yCloseText:"Close"},e.createElement(i,null),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),w=o=>{const[n,l]=p.useState(!1),[a,u]=p.useState(!0),m=()=>{a&&l(!1)};return e.createElement("div",null,e.createElement(c,{onClick:()=>l(!n)},"Show Dialog"),e.createElement(r,{...o,open:n,onClose:m,a11yCloseText:"Close"},e.createElement(i,null,"Heading"),e.createElement("p",null,"Unselect the following checkbox to prevent user to close the dialog"),e.createElement(H,{id:"checkbox-closeable",checked:a,onChange:()=>u(!a)},e.createElement(L,null,"Enable closing dialog")),e.createElement("p",null,"Normally, the dialog can be closed by either:",e.createElement("ul",null,e.createElement("li",null,"clicking [X] icon on top of the dialog"),e.createElement("li",null,"clicking OK button"),e.createElement("li",null,"clicking the overlay or area outside the dialog"),e.createElement("li",null,"Press Esc key on keyboard"))),e.createElement(g,null,e.createElement(c,{onClick:m},"OK"))))},C=o=>{const[n,l]=p.useState(!1),a=()=>l(!1);return e.createElement("div",null,e.createElement("button",{className:"btn btn--secondary",onClick:()=>l(!n)},"Open Dialog"),e.createElement("p",null,"Some outside content..."),e.createElement(r,{...o,open:n,onClose:a,animated:!0,a11yCloseText:"Close"},e.createElement(i,null,"Heading"),t,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")),e.createElement(g,null,e.createElement(c,{priority:"primary",onClick:a},"OK"),e.createElement(c,{onClick:a},"Cancel"))))},D=o=>{const[n,l]=p.useState(!1),a=()=>l(!1);return e.createElement("div",null,e.createElement("button",{className:"btn btn--secondary",onClick:()=>l(!n)},"Open Dialog"),e.createElement("p",null,"Some outside content..."),e.createElement(r,{...o,open:n,onClose:a,buttonPosition:"hidden",a11yCloseText:"Close"},e.createElement(i,null,"Heading"),t,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")),e.createElement(g,null,e.createElement(c,{priority:"primary",onClick:a},"OK"),e.createElement(c,{onClick:a},"Cancel"))))},x=o=>e.createElement("div",null,e.createElement("p",null,"Some outside content..."),e.createElement(r,{...o,open:!0,a11yCloseText:"Close dialog"},e.createElement(d,{"aria-label":"Previous",onClick:s("previous button click")}),e.createElement(i,null,"Heading"),t,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")))),f=o=>e.createElement("div",null,e.createElement("p",null,"Some outside content..."),e.createElement(r,{...o,open:!0,a11yCloseText:"Close dialog",size:"wide"},e.createElement(d,{"aria-label":"Previous",onClick:s("previous button click")}),e.createElement(i,null,"Heading"),t,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")))),v=o=>e.createElement("div",null,e.createElement("p",null,"Some outside content..."),e.createElement(r,{...o,open:!0,a11yCloseText:"Close dialog",size:"narrow"},e.createElement(d,{"aria-label":"Previous",onClick:s("previous button click")}),e.createElement(i,null,"Heading"),t,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")))),S=o=>e.createElement("div",null,e.createElement("p",null,"Some outside content..."),e.createElement(r,{...o,open:!0,a11yCloseText:"Close dialog",size:"fullscreen"},e.createElement(d,{"aria-label":"Previous",onClick:s("previous button click")}),e.createElement(i,null,"Heading"),t,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")))),k=o=>e.createElement("div",null,e.createElement("p",null,"Some outside content..."),e.createElement(r,{...o,open:!0,a11yCloseText:"Close dialog",size:"large"},e.createElement(d,{"aria-label":"Previous",onClick:s("previous button click")}),e.createElement(i,null,"Heading"),t,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")))),O=o=>{const[n,l]=p.useState(!1);return e.createElement("div",null,e.createElement("button",{className:"btn btn--secondary",onClick:()=>l(!n)},"Open Dialog"),e.createElement(r,{...o,bannerImgSrc:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg",bannerImgPosition:"top",open:n,onOpen:()=>s("onOpen")(),onClose:()=>{s("onClose")(),l(!1)},a11yCloseText:"Close"},e.createElement(i,null,"Heading Text"),t,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com"))))},P=o=>{const[n,l]=p.useState(!1),[a,u]=p.useState(!1),m=()=>{l(!1),u(!1)};return e.createElement("div",null,e.createElement("button",{className:"btn btn--secondary",onClick:()=>{l(!n),u(!0),setTimeout(()=>u(!1),1e3)}},"Open Dialog"),e.createElement("p",null,"Some outside content..."),e.createElement(r,{...o,open:n,onOpen:()=>s("onOpen")(),onClose:()=>{s("onClose")(),m()},a11yCloseText:"Close"},e.createElement(i,null,"Heading"),a?e.createElement("div",{style:{display:"flex",justifyContent:"center"}},e.createElement(T,null)):e.createElement(e.Fragment,null,t,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com"))),a?null:e.createElement(g,null,e.createElement(c,{priority:"primary",onClick:m},"OK"),e.createElement(c,{onClick:m},"Cancel"))))};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog {...args} open={open} onOpen={() => action("onOpen")()} onClose={() => {
      action("onClose")();
      close();
    }} a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
                <EbayDialogFooter>
                    <EbayButton priority="primary" onClick={close}>
                        OK
                    </EbayButton>
                    <EbayButton onClick={close}>Cancel</EbayButton>
                </EbayDialogFooter>
            </EbayLightboxDialog>
        </div>;
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog">
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close">
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...E.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} mode="mini" open a11yCloseText="Close">
            <EbayDialogHeader />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>
        </EbayLightboxDialog>
    </div>`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogCloseable, setDialogCloseable] = useState(true);
  const closeDialog = () => {
    if (dialogCloseable) {
      setShowDialog(false);
    }
  };
  return <div>
            <EbayButton onClick={() => setShowDialog(!showDialog)}>Show Dialog</EbayButton>

            <EbayLightboxDialog {...args} open={showDialog} onClose={closeDialog} a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>

                <p>Unselect the following checkbox to prevent user to close the dialog</p>
                <EbayCheckbox id="checkbox-closeable" checked={dialogCloseable} onChange={() => setDialogCloseable(!dialogCloseable)}>
                    <EbayLabel>Enable closing dialog</EbayLabel>
                </EbayCheckbox>

                <p>
                    Normally, the dialog can be closed by either:
                    <ul>
                        <li>clicking [X] icon on top of the dialog</li>
                        <li>clicking OK button</li>
                        <li>clicking the overlay or area outside the dialog</li>
                        <li>Press Esc key on keyboard</li>
                    </ul>
                </p>

                <EbayDialogFooter>
                    <EbayButton onClick={closeDialog}>OK</EbayButton>
                </EbayDialogFooter>
            </EbayLightboxDialog>
        </div>;
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog {...args} open={open} onClose={close} animated a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
                <EbayDialogFooter>
                    <EbayButton priority="primary" onClick={close}>
                        OK
                    </EbayButton>
                    <EbayButton onClick={close}>Cancel</EbayButton>
                </EbayDialogFooter>
            </EbayLightboxDialog>
        </div>;
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog {...args} open={open} onClose={close} buttonPosition="hidden" a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
                <EbayDialogFooter>
                    <EbayButton priority="primary" onClick={close}>
                        OK
                    </EbayButton>
                    <EbayButton onClick={close}>Cancel</EbayButton>
                </EbayDialogFooter>
            </EbayLightboxDialog>
        </div>;
}`,...D.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="wide">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="narrow">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="fullscreen">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="large">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...k.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <EbayLightboxDialog {...args} bannerImgSrc="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg" bannerImgPosition="top" open={open} onOpen={() => action("onOpen")()} onClose={() => {
      action("onClose")();
      setOpen(false);
    }} a11yCloseText="Close">
                <EbayDialogHeader>Heading Text</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayLightboxDialog>
        </div>;
}`,...O.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const close = () => {
    setOpen(false);
    setIsPending(false);
  };
  return <div>
            <button className="btn btn--secondary" onClick={() => {
      setOpen(!open);
      setIsPending(true);
      setTimeout(() => setIsPending(false), 1000);
    }}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog {...args} open={open} onOpen={() => action("onOpen")()} onClose={() => {
      action("onClose")();
      close();
    }} a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {isPending ? <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
                        <EbayProgressSpinner />
                    </div> : <>
                        {textParagraph}
                        <p>
                            <a href="http://www.ebay.com">www.ebay.com</a>
                        </p>
                    </>}

                {isPending ? null : <EbayDialogFooter>
                        <EbayButton priority="primary" onClick={close}>
                            OK
                        </EbayButton>
                        <EbayButton onClick={close}>Cancel</EbayButton>
                    </EbayDialogFooter>}
            </EbayLightboxDialog>
        </div>;
}`,...P.parameters?.docs?.source}}};const J=["Default","AlwaysOpened","ScrollingContent","MiniDialog","DisableDialogClose","WithAnimation","WithNoBackgroundClick","WithPreviousButton","WithWideSize","WithNarrowSize","WithFullscreenSize","WithLargeSize","Expressive","LazyContent"];export{y as AlwaysOpened,b as Default,w as DisableDialogClose,O as Expressive,P as LazyContent,h as MiniDialog,E as ScrollingContent,C as WithAnimation,S as WithFullscreenSize,k as WithLargeSize,v as WithNarrowSize,D as WithNoBackgroundClick,x as WithPreviousButton,f as WithWideSize,J as __namedExportsOrder,G as default};
