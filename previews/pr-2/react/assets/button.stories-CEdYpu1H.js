import{j as t}from"./iframe-DFM01L8b.js";import{E as c}from"./button-CPudjGgx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7IG8l_C.js";import"./chevron-down-16-BLIY2zsc.js";import"./icon-BGM_keET.js";/* empty css               */const l={cta:"cta-",fake:"fake-",expand:"expand-",default:""};function i({type:e="default",children:o,...n}){return t.jsx("span",{className:`${l[e]}btn__cell`,...n,children:o})}try{i.displayName="EvoButtonCell",i.__docgenInfo={description:"",displayName:"EvoButtonCell",props:{type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"ButtonType"}}}}}catch{}const v={title:"buttons/evo-button",component:c,subcomponents:{EvoButtonCell:i},tags:["autodocs"],parameters:{docs:{description:{component:'\nA flexible button component that can render as either a `<button>` or `<a>` element based on the `href` prop.\n\n## Usage\n\n```tsx\nimport { EvoButton } from "@evo-web/react/button";\n```\n        '}}},argTypes:{priority:{control:"select",options:["primary","secondary","tertiary","none"],description:"Button priority level"},variant:{control:"select",options:["standard","destructive","form"],description:"Button variant style"},size:{control:"select",options:["small","large"],description:"Button size"},bodyState:{control:"select",options:["loading","expand","reset","none"],description:"Button body state"},split:{control:"select",options:["start","end"],description:"Split button position"},fluid:{control:"boolean",description:"Full width button"},disabled:{control:"boolean",description:"Disabled state"},partiallyDisabled:{control:"boolean",description:"Partially disabled (aria-disabled)"},transparent:{control:"boolean",description:"Transparent background"},borderless:{control:"boolean",description:"No border"},fixedHeight:{control:"boolean",description:"Fixed height"},truncate:{control:"boolean",description:"Truncate text with ellipsis"},href:{control:"text",description:"Link URL (renders as anchor)"},as:{control:!1,description:"Override the anchor element with a custom component (e.g. React Router's `Link`). Only applies when `href` is provided."},children:{control:"text",description:"Button text content"}},args:{priority:"primary",variant:"standard",children:"Button"}},r={args:{children:"Button"}};function p({to:e,...o}){return t.jsx("a",{"data-custom-link":"true",...o,href:e,onClick:n=>{n.preventDefault(),alert("client side navigation")}})}const s={render:e=>t.jsx(c,{...e,href:"/home",as:({href:o,...n})=>t.jsx(p,{...n,to:o}),priority:"primary",children:"Click me"}),parameters:{docs:{description:{story:'\nPass a custom component via the `as` prop to replace the native `<a>`. Only applies when `href` is set. Here we simulate React Router\'s `<Link to="/home">`\n\n```tsx\nimport { Link, href } from "react-router";\n\n<EvoButton\n  href={href("/home")}\n  as=(({ href, ...rest }) => <Link {...rest} to={href} />)\n```\n'}}}},a={render:e=>t.jsx(c,{...e,children:t.jsxs(i,{style:{justifyContent:"space-between"},children:[t.jsx("span",{children:"Select"}),t.jsx("span",{children:"Any"})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <EvoButton {...args as unknown as AnchorButtonProps} href="/home" as={({
      href,
      ...rest
    }) => <Link {...rest} to={href} />} priority="primary">
        Click me
      </EvoButton>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
Pass a custom component via the \\\`as\\\` prop to replace the native \\\`<a>\\\`. Only applies when \\\`href\\\` is set. Here we simulate React Router\\'s \\\`<Link to="/home">\\\`

\\\`\\\`\\\`tsx
import { Link, href } from "react-router";

<EvoButton
  href={href("/home")}
  as=(({ href, ...rest }) => <Link {...rest} to={href} />)
\\\`\\\`\\\`
\`
      }
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <EvoButton {...args}>
      <EvoButtonCell style={{
      justifyContent: "space-between"
    }}>
        <span>Select</span>
        <span>Any</span>
      </EvoButtonCell>
    </EvoButton>
}`,...a.parameters?.docs?.source}}};const x=["Default","WithCustomLinkComponent","WithButtonCell"];export{r as Default,a as WithButtonCell,s as WithCustomLinkComponent,x as __namedExportsOrder,v as default};
