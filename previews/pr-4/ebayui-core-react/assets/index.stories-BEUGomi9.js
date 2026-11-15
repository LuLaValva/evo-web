import{R as e,r as W}from"./iframe-yAgKNpaP.js";import{E as D}from"./button-CPgFb1dW.js";import{E as a,b as O,a as R,c as U,d as _}from"./textbox-O3SYYGVi.js";import{E as q}from"./ebay-icon-clear-16-aIwt2JuH.js";import{E as z}from"./ebay-icon-search-16-D0ipmCPx.js";import{E as H,a as j}from"./ebay-icon-profile-20-BEAekvct.js";import"./preload-helper-PPVm8Dsz.js";import"./progress-spinner-ChIssl6E.js";import"./ebay-icon-spinner-30-BAqjc3i-.js";import"./ebay-icon-chevron-down-12-Ck4NjPKh.js";import"./utils-D04eNHcQ.js";import"./icon-button-B2NlU7xW.js";import"./badge-DBToeDti.js";import"./hooks-CHMV_jSQ.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,le={title:"form input/ebay-textbox",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayTextbox } from "@ebay/ui-core-react/ebay-textbox";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/floating-label";
import "@ebay/skin/textbox";
import "@ebay/skin/icon-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/floating-label.css";
@import "@ebay/skin/textbox.css";
@import "@ebay/skin/icon-button.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayTextbox value="Search for anything" />
\`\`\``}}},argTypes:{fluid:{description:"Takes the full width of the container",control:"boolean"},multiline:{description:"Renders a multi-line textbox if true",control:"boolean"},opaqueLabel:{description:"Only works with floating label. If set, then background is obscured of the floating label. Used with textarea to prevent label overlap",control:"boolean"},invalid:{description:"Indicates a field-level error with red border if true",control:"boolean"},type:{description:"Default: `text`, can be `password` if needed",options:["text","password"],control:{type:"select"}},value:{description:"Indicates the value of the input element, required for a controlled component.",control:"text"},defaultValue:{description:"Indicates the default input element value. Use when the component is not controlled.",control:"text"},inputSize:{description:"`default` (default), `large`",options:["default","large"],control:{type:"select"}},floatingLabel:{description:"Indicates that the input is a floating label type and renders it as a label",control:"text"},floatingLabelStatic:{description:"Forces floating label to static/raised position",control:"boolean"},onChange:{description:"Triggered when focus leaves and value is changed.",action:"onChange",table:{category:"Events",defaultValue:{summary:"`(ChangeEvent, { value: string })`"}}},onInputChange:{description:"Triggered when the value of the input is changed.",action:"onInputChange",table:{category:"Events",defaultValue:{summary:"`(ChangeEvent, { value: string })`"}}},onFocus:{description:"Called when input gets focus",action:"onFocus",table:{category:"Events",defaultValue:{summary:"`(FocusEvent, { value: string })`"}}},onBlur:{description:"Called when input loses focus",action:"onBlur",table:{category:"Events",defaultValue:{summary:"`(FocusEvent, { value: string })`"}}},onKeyPress:{description:"Called on key press",action:"onKeyPress",table:{category:"Events",defaultValue:{summary:"`(KeyboardEvent, { value: string })`"}}},onKeyUp:{description:"Called on key up",action:"onKeyUp",table:{category:"Events",defaultValue:{summary:"`(KeyboardEvent, { value: string })`"}}},onKeyDown:{description:"Called on key down",action:"onKeyDown",table:{category:"Events",defaultValue:{summary:"`(KeyboardEvent, { value: string })`"}}},onInvalid:{description:"Triggered when value is invalid",action:"onInvalid",table:{category:"Events",defaultValue:{summary:"`(ChangeEvent, { value: string })`"}}},onFloatingLabelInit:{description:"Triggered when floating label is initialized",action:"onFloatingLabelInit",table:{category:"Events",defaultValue:{summary:"`()`"}}},onButtonClick:{description:"Triggers when clicking on postfix-icon-button. Requires `buttonAriaLabel` to be present in order to attach correctly",action:"onButtonClick",table:{category:"Events",defaultValue:{summary:"`(MouseEvent, { value: string })`"}}},name:{description:"Name of the icon to show",control:"text"},buttonAriaLabel:{description:"Aria-label for postfix icon/button. Required in order to render postfix button",control:"text"}}},d={render:n=>e.createElement(a,{...n,defaultValue:"EbayTextbox"}),name:"Default textbox"},p={render:n=>{const s=()=>{const i=e.useRef(null),[l,c]=W.useState(""),A=(o,r)=>{t("onInputChange")(o,r),c(r.value)},u=(o,r)=>{t("onButtonClick")(o,r),c("")};return e.createElement("form",{ref:i},e.createElement("p",null,e.createElement(a,{...n,value:l,onChange:(o,r)=>t("onChange")(o,r),onInputChange:(o,r)=>A(o,r),onFocus:(o,r)=>t("onFocus")(o,r),onBlur:(o,r)=>t("onBlur")(o,r),onKeyPress:(o,r)=>t("onKeyPress")(o,r),onKeyUp:(o,r)=>t("onKeyUp")(o,r),onKeyDown:(o,r)=>t("onKeyDown")(o,r),onInvalid:(o,r)=>t("onInvalid")(o,r),onButtonClick:(o,r)=>u(o,r),required:!0},e.createElement(R,{icon:e.createElement(q,null),buttonAriaLabel:"Clear",style:{opacity:l.length?"1":"0"}}))),e.createElement("p",null,e.createElement(D,{onClick:o=>{o.preventDefault(),i.current?.reportValidity()}},"Check value presence")))};return e.createElement(e.Fragment,null,e.createElement(s,null))},name:"Testing callbacks"},m={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,disabled:!0})),name:"Disabled textbox"},b={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,placeholder:"placeholder text"})),name:"Placeholder textbox"},g={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,invalid:!0})),name:"Invalid textbox"},x={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,fluid:!0})),name:"Fluid textbox"},h={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,type:"password"})),name:"Password textbox"},E={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,multiline:!0,defaultValue:`some default value
next line`})),name:"Multiline textbox"},f={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,multiline:!0,invalid:!0,defaultValue:"some default value"})),name:"Multiline invalid textbox"},y={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,autoFocus:!0,placeholder:"Should focus here"})),name:"Autofocused textbox"},C={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,placeholder:"placeholder text",inputSize:"large"})),name:"Large textbox"},v={render:n=>e.createElement("div",null,e.createElement("p",null,e.createElement(a,{...n,placeholder:"email"},e.createElement(O,{icon:e.createElement(H,null)}))),e.createElement("p",null,e.createElement(a,{...n,placeholder:"username"},e.createElement(R,{icon:e.createElement(j,null)}))),e.createElement("p",null,e.createElement(a,{...n,placeholder:"search",onButtonClick:t("Clear!")},e.createElement(O,{icon:e.createElement(z,null)}),e.createElement(R,{icon:e.createElement(q,null),buttonAriaLabel:"Clear"})))),name:"With icon"},F={render:n=>e.createElement("div",null,e.createElement("p",null,e.createElement(a,{...n,placeholder:"0.00"},e.createElement(U,{id:"prefix"},"$"))),e.createElement("p",null,e.createElement(a,{...n,placeholder:"0"},e.createElement(_,{id:"postfix"},"in.")))),name:"With Pre/Post fix text"},T={render:n=>{const s=()=>{const[i,l]=W.useState(""),c=(A,u)=>{l(u.value.substring(0,10))};return e.createElement(a,{...n,onInputChange:c,value:i,placeholder:"Max 10 chars"})};return e.createElement(e.Fragment,null,e.createElement(s,null))},name:"Control value from outside"},I={render:n=>{const s=e.createRef();return e.createElement(e.Fragment,null,e.createElement(a,{...n,forwardedRef:s}))},name:"Ref forwarding"},L={render:n=>e.createElement(a,{...n,floatingLabel:"Floating label",onChange:t("onChange"),onInputChange:t("onInputChange"),onFloatingLabelInit:()=>t("onFloatingLabelInit")()}),name:"Floating label"},w={render:n=>e.createElement(a,{...n,fluid:!0,floatingLabel:"Floating label",onChange:t("onChange"),onInputChange:t("onInputChange"),onFloatingLabelInit:()=>t("onFloatingLabelInit")()}),name:"Floating label fluid"},S={render:n=>e.createElement(a,{...n,type:"date",floatingLabel:"Floating label",onChange:t("onChange"),onInputChange:t("onInputChange"),onFloatingLabelInit:()=>t("onFloatingLabelInit")()}),name:"Floating label type date"},P={render:n=>e.createElement(a,{...n,onChange:t("textbox-changed"),floatingLabel:"Floating label",defaultValue:"Default value"}),name:"Floating label with value"},V={render:n=>e.createElement(a,{...n,invalid:!0,onChange:t("textbox-changed"),floatingLabel:"Invalid Floating label"}),name:"Floating label invalid"},k={render:n=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(a,{...n,floatingLabel:"Regular field"})),e.createElement("p",null,e.createElement(a,{...n,floatingLabel:"Autofocused field",autoFocus:!0,onFocus:t("onFocus")}))),name:"Floating label with autofocus"},B={render:n=>{const s=()=>{const[i,l]=W.useState(""),c=(A,{value:u})=>{l(u.toLowerCase())};return e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(a,{...n,floatingLabel:"Will convert to lowercase",placeholder:"Enter some UPPERCASE",onChange:c,value:i,size:30})),e.createElement("p",null,e.createElement(D,{onClick:()=>{l("changed text")}},"Change text")),e.createElement("p",null,e.createElement(D,{onClick:()=>{l("")}},"Clear")))};return e.createElement(e.Fragment,null,e.createElement(s,null))},name:"Floating label with placeholder, controlled"},K={render:n=>e.createElement(a,{...n,onChange:t("textbox-changed"),floatingLabel:"Floating label",multiline:!0}),name:"Floating label with multiline"},M={render:n=>e.createElement(a,{...n,onChange:t("textbox-changed"),floatingLabel:"Floating label",multiline:!0,opaqueLabel:!0}),name:"Floating label with multiline and opaque label"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} defaultValue="EbayTextbox" />,
  name: "Default textbox"
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const TestComponent: FC = () => {
      const ref = React.useRef(null);
      const [value, setValue] = useState("");
      const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement & HTMLInputElement>, props: {
        value: string;
      }) => {
        action("onInputChange")(e, props);
        setValue(props.value);
      };
      const handleButtonClick = (e: KeyboardEvent & MouseEvent<HTMLTextAreaElement & HTMLInputElement>, props: {
        value: string;
      }) => {
        action("onButtonClick")(e, props);
        setValue("");
      };
      return <form ref={ref}>
                    <p>
                        <EbayTextbox {...args} value={value} onChange={(e, props) => action("onChange")(e, props)} onInputChange={(e, props) => handleInputChange(e, props)} onFocus={(e, props) => action("onFocus")(e, props)} onBlur={(e, props) => action("onBlur")(e, props)} onKeyPress={(e, props) => action("onKeyPress")(e, props)} onKeyUp={(e, props) => action("onKeyUp")(e, props)} onKeyDown={(e, props) => action("onKeyDown")(e, props)} onInvalid={(e, props) => action("onInvalid")(e, props)} onButtonClick={(e, props) => handleButtonClick(e, props)} required>
                            <EbayTextboxPostfixIcon icon={<EbayIconClear16 />} buttonAriaLabel="Clear" style={{
              opacity: value.length ? "1" : "0"
            }} />
                        </EbayTextbox>
                    </p>
                    <p>
                        <EbayButton onClick={e => {
            e.preventDefault();
            ref.current?.reportValidity();
          }}>
                            Check value presence
                        </EbayButton>
                    </p>
                </form>;
    };
    return <>
                <TestComponent />
            </>;
  },
  name: "Testing callbacks"
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} disabled />
        </>,
  name: "Disabled textbox"
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} placeholder="placeholder text" />
        </>,
  name: "Placeholder textbox"
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} invalid />
        </>,
  name: "Invalid textbox"
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} fluid />
        </>,
  name: "Fluid textbox"
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} type="password" />
        </>,
  name: "Password textbox"
}`,...h.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} multiline defaultValue={"some default value\\nnext line"} />
        </>,
  name: "Multiline textbox"
}`,...E.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} multiline invalid defaultValue="some default value" />
        </>,
  name: "Multiline invalid textbox"
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} autoFocus placeholder="Should focus here" />
        </>,
  name: "Autofocused textbox"
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} placeholder="placeholder text" inputSize="large" />
        </>,
  name: "Large textbox"
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div>
            <p>
                <EbayTextbox {...args} placeholder="email">
                    <EbayTextboxPrefixIcon icon={<EbayIconMail16 />} />
                </EbayTextbox>
            </p>
            <p>
                <EbayTextbox {...args} placeholder="username">
                    <EbayTextboxPostfixIcon icon={<EbayIconProfile20 />} />
                </EbayTextbox>
            </p>
            <p>
                <EbayTextbox {...args} placeholder="search" onButtonClick={action("Clear!")}>
                    <EbayTextboxPrefixIcon icon={<EbayIconSearch16 />} />
                    <EbayTextboxPostfixIcon icon={<EbayIconClear16 />} buttonAriaLabel="Clear" />
                </EbayTextbox>
            </p>
        </div>,
  name: "With icon"
}`,...v.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <div>
            <p>
                <EbayTextbox {...args} placeholder="0.00">
                    <EbayTextboxPrefixText id="prefix">$</EbayTextboxPrefixText>
                </EbayTextbox>
            </p>
            <p>
                <EbayTextbox {...args} placeholder="0">
                    <EbayTextboxPostfixText id="postfix">in.</EbayTextboxPostfixText>
                </EbayTextbox>
            </p>
        </div>,
  name: "With Pre/Post fix text"
}`,...F.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const Component = () => {
      const [value, setValue] = useState("");
      const handleOnChange = (e, props) => {
        setValue(props.value.substring(0, 10));
      };
      return <EbayTextbox {...args} onInputChange={handleOnChange} value={value} placeholder="Max 10 chars" />;
    };
    return <>
                <Component />
            </>;
  },
  name: "Control value from outside"
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const ref = React.createRef<HTMLInputElement>();
    return <>
                <EbayTextbox {...args} forwardedRef={ref} />
            </>;
  },
  name: "Ref forwarding"
}`,...I.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} floatingLabel="Floating label" onChange={action("onChange")} onInputChange={action("onInputChange")} onFloatingLabelInit={() => action("onFloatingLabelInit")()} />,
  name: "Floating label"
}`,...L.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} fluid floatingLabel="Floating label" onChange={action("onChange")} onInputChange={action("onInputChange")} onFloatingLabelInit={() => action("onFloatingLabelInit")()} />,
  name: "Floating label fluid"
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} type="date" floatingLabel="Floating label" onChange={action("onChange")} onInputChange={action("onInputChange")} onFloatingLabelInit={() => action("onFloatingLabelInit")()} />,
  name: "Floating label type date"
}`,...S.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} onChange={action("textbox-changed")} floatingLabel="Floating label" defaultValue="Default value" />,
  name: "Floating label with value"
}`,...P.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} invalid onChange={action("textbox-changed")} floatingLabel="Invalid Floating label" />,
  name: "Floating label invalid"
}`,...V.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <p>
                <EbayTextbox {...args} floatingLabel="Regular field" />
            </p>
            <p>
                <EbayTextbox {...args} floatingLabel="Autofocused field" autoFocus onFocus={action("onFocus")} />
            </p>
        </>,
  name: "Floating label with autofocus"
}`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const Component = () => {
      const [value, setValue] = useState("");
      const handleOnChange = (e, {
        value: newValue
      }) => {
        setValue(newValue.toLowerCase());
      };
      return <>
                    <p>
                        <EbayTextbox {...args} floatingLabel="Will convert to lowercase" placeholder="Enter some UPPERCASE" onChange={handleOnChange} value={value} size={30} />
                    </p>
                    <p>
                        <EbayButton onClick={() => {
            setValue("changed text");
          }}>
                            Change text
                        </EbayButton>
                    </p>
                    <p>
                        <EbayButton onClick={() => {
            setValue("");
          }}>
                            Clear
                        </EbayButton>
                    </p>
                </>;
    };
    return <>
                <Component />
            </>;
  },
  name: "Floating label with placeholder, controlled"
}`,...B.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} onChange={action("textbox-changed")} floatingLabel="Floating label" multiline />,
  name: "Floating label with multiline"
}`,...K.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} onChange={action("textbox-changed")} floatingLabel="Floating label" multiline opaqueLabel />,
  name: "Floating label with multiline and opaque label"
}`,...M.parameters?.docs?.source}}};const se=["DefaultTextbox","TestingCallbacks","DisabledTextbox","PlaceholderTextbox","InvalidTextbox","FluidTextbox","PasswordTextbox","MultilineTextbox","MultilineInvalidTextbox","AutofocusedTextbox","LargeTextbox","WithIcon","WithPrePostfixText","ControlValueFromOutside","RefForwarding","FloatingLabel","FloatingLabelFluid","FloatingLabelTypeDate","FloatingLabelWithValue","FloatingLabelInvalid","FloatingLabelWithAutofocus","FloatingLabelWithPlaceholderControlled","FloatingLabelWithMultiline","FloatingLabelWithMultilineAndOpaqueLabel"];export{y as AutofocusedTextbox,T as ControlValueFromOutside,d as DefaultTextbox,m as DisabledTextbox,L as FloatingLabel,w as FloatingLabelFluid,V as FloatingLabelInvalid,S as FloatingLabelTypeDate,k as FloatingLabelWithAutofocus,K as FloatingLabelWithMultiline,M as FloatingLabelWithMultilineAndOpaqueLabel,B as FloatingLabelWithPlaceholderControlled,P as FloatingLabelWithValue,x as FluidTextbox,g as InvalidTextbox,C as LargeTextbox,f as MultilineInvalidTextbox,E as MultilineTextbox,h as PasswordTextbox,b as PlaceholderTextbox,I as RefForwarding,p as TestingCallbacks,v as WithIcon,F as WithPrePostfixText,se as __namedExportsOrder,le as default};
