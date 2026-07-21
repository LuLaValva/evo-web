import{b as c}from"./utils-DyU2_5R1.js";import{_ as e,a as p,j as i,k as o,b as a,e as d,y,u as O,z as f,d as T,A as C,v as w,B as k}from"./dom-C0MY0u5h.js";import{c as u,b as m,$ as b,a as _,L as S}from"./index-BHTg6VUV.js";import"./iframe-BkqRzvDk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DkgQI3CB.js";import"./index-CBBvmiDB.js";import"./evo-icon-tick-16-C8xk9dUi.js";import"./index-D4aRlw-G.js";/* empty css             */const A=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-listbox
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

Used to generate a menu portion of listbox. For use with a button which hides and shows the menu use \`evo-listbox-button\` instead.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-evo-listbox)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-evo-listbox)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-listbox/examples)
`,D=_,L=(t=>`/${t}&`)(b),E=e("spFMd_A","Option 3","b"),M=e("HcPJ2Vl","Option 2","b"),V=e("hpESqQs","Option 1","b");function R(t){m(t.a)}const B=(t,n)=>u(t.a,{a11ySelectedText:"selected",...n,option:i(i(o({value:"1",content:V(t)}),{value:"2",content:M(t)}),{value:"3",content:E(t)})}),W=p("as7oe7m",D,L,R,B),z=`<evo-listbox a11ySelectedText="selected" ...input>
    <@option value="1">Option 1</>
    <@option value="2">Option 2</>
    <@option value="3">Option 3</>
</evo-listbox>
`,H=(t=>`${t}<!><!>`)(_),U=(t=>`/${t}&%c`)(b),q=e("pq8O3u9","Option C","b"),I=e("Qx$MfSJ","Option B","b"),P=e("ZWPo74h","Option A","b"),h=d(4,t=>k(t,"a",t._.h,t._.i,t.d),2),g=f(1,h),j=T("js2qByz",t=>C(t,"a")),F=t=>{g._(t),J._(t),j(t)},J=f(1,h),Q=a(3,t=>{w(t.b,t.d),h(t)}),N=(t,n)=>Q(t,n[0]),v=d(9,t=>u(t.a,{...t.d,selected:t.h,selectedChange:t.i,option:i(i(o({value:"A",content:P(t)}),{value:"B",content:I(t)}),{value:"C",content:q(t)})}),2),x=O(7,t=>{v(t),g(t)}),$=d(6,t=>x(t,t.e??"A",t.f)),G=a(4,$),K=a(5,$),Z=a(8,v),X=y(1,"<label><input type=radio> </label>","D b l",F,N);function Y(t){m(t.a),Z(t,et(t)),X(t,[["A","B","C"]])}const tt=a(3,t=>{G(t,t.d.selected),K(t,t.d.selectedChange),v(t)});function et(t){return n=>{x(t,n)}}const nt=p("kWMyzGL",H,U,Y,tt),ot=`import { type Input as ListboxInput } from "<evo-listbox>";

export interface Input extends ListboxInput<string> {}

<let/selected=input.selected ?? "A" valueChange=input.selectedChange>

<evo-listbox ...input selected:=selected>
    <@option value="A">Option A</>
    <@option value="B">Option B</>
    <@option value="C">Option C</>
</evo-listbox>

<for|value| of=["A", "B", "C"]>
  <label>
    <input type="radio" value=value checkedValue:=selected>
    \${value}
  </label>
</for>
`,it=_,at=(t=>`/${t}&`)(b),st=e("Rfe4VhK","Option 3 extra info","b"),lt=e("iLhL4FN","Option 3","b"),rt=e("P83Jdbi","Option 2 extra info","b"),ct=e("gNLU2UM","Option 2","b"),pt=e("qswt$BI","Option 1 extra info","b"),dt=e("f7A5p06","Option 1","b");function ut(t){m(t.a)}const mt=(t,n)=>u(t.a,{a11ySelectedText:"selected",...n,option:i(i(o({value:"1",content:dt(t),description:o({content:pt(t)})}),{value:"2",content:ct(t),description:o({content:rt(t)})}),{value:"3",content:lt(t),description:o({content:st(t)})})}),bt=p("DV9QPto",it,at,ut,mt),_t=`<evo-listbox a11ySelectedText="selected" ...input>
    <@option value="1">
        <@description>Option 1 extra info</@description>
        Option 1
    </@option>
    <@option value="2">
        <@description>Option 2 extra info</@description>
        Option 2
    </@option>
    <@option value="3">
        <@description>Option 3 extra info</@description>
        Option 3
    </@option>
</evo-listbox>
`,wt={title:"building blocks/evo-listbox",component:S,parameters:{docs:{description:{component:A}}},argTypes:{selected:{controllable:!0,type:"string",control:"text",description:"The selected item in the list. Checks for equality with `value` in each `@option`"},listSelection:{type:"string",options:["manual (default)","auto"],control:"inline-radio",description:"If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down"},name:{type:"string",control:"text",description:"Used for the `name` attribute of the native `<select>`"},a11ySelectedText:{type:{name:"string",required:!0},control:"text",description:"Localized text to be read by screen readers when an option is selected",table:{defaultValue:{summary:"selected"}}},option:{description:"Attribute tag representing a list option","@":{value:{type:{name:"string",required:!0},control:"text",description:"Passed through to `value` of the underlying [HTML `<option>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option)"},disabled:{type:"boolean",control:"boolean",description:"Option will not be clickable, and keyboard navigation will skip over it"},description:{description:"An optional description, rendered beneath the tag content as a `<span>`","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@description>`"}}},icon:{description:"An optional icon rendered at the start of the item","@":{}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@option>`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},s=c(W,z),l=c(nt,ot),r=c(bt,_t);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)",...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithDescriptionTemplate, WithDescriptionTemplateCode)",...r.parameters?.docs?.source}}};const kt=["Default","Controlled","withDescription"];export{l as Controlled,s as Default,kt as __namedExportsOrder,wt as default,r as withDescription};
