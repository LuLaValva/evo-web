import{b as r}from"./utils-DyU2_5R1.js";import{_ as e,a as p,j as i,k as o,b as a,e as d,y as O,u as C,z as f,d as T,A as y,v as k,B as w}from"./dom-ByZf3MQk.js";import{c as u,b as _,$ as m,a as b,L as D}from"./index-AK5ugAqO.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CFcR-vvC.js";import"./index-jIAsN_My.js";import"./evo-icon-tick-16-D69BQoRY.js";import"./index-SLqM2JFj.js";/* empty css             */const S=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,A=b,L=(t=>`/${t}&`)(m),E=e("spFMd_A","Option 3","b"),V=e("HcPJ2Vl","Option 2","b"),B=e("hpESqQs","Option 1","b");function M(t){_(t.a)}const R=(t,n)=>u(t.a,{a11ySelectedText:"selected",...n,option:i(i(o({value:"1",content:B(t)}),{value:"2",content:V(t)}),{value:"3",content:E(t)})}),W=p("as7oe7m",A,L,M,R),z=`<evo-listbox a11ySelectedText="selected" ...input>
    <@option value="1">Option 1</>
    <@option value="2">Option 2</>
    <@option value="3">Option 3</>
</evo-listbox>
`,H=(t=>`${t}<!><!>`)(b),U=(t=>`/${t}&%c`)(m),I=e("pq8O3u9","Option C","b"),q=e("Qx$MfSJ","Option B","b"),P=e("ZWPo74h","Option A","b"),h=d(4,t=>w(t,"a",t._.h,t._.i,t.d),2),x=f(1,h),j=T("js2qByz",t=>y(t,"a")),F=t=>{x._(t),J._(t),j(t)},J=f(1,h),Q=a(3,t=>{k(t.b,t.d),h(t)}),N=(t,n)=>Q(t,n[0]),v=d(9,t=>u(t.a,{...t.d,selected:t.h,selectedChange:t.i,option:i(i(o({value:"A",content:P(t)}),{value:"B",content:q(t)}),{value:"C",content:I(t)})}),2),$=C(7,t=>{v(t),x(t)}),g=d(6,t=>$(t,t.e??"A",t.f)),G=a(4,g),K=a(5,g),Z=a(8,v),X=O(1,"<label><input type=radio> </label>","D b l",F,N);function Y(t){_(t.a),Z(t,et(t)),X(t,[["A","B","C"]])}const tt=a(3,t=>{G(t,t.d.selected),K(t,t.d.selectedChange),v(t)});function et(t){return n=>{$(t,n)}}const nt=p("kWMyzGL",H,U,Y,tt),ot=`import { type Input as ListboxInput } from "<evo-listbox>";

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
`,it=b,at=(t=>`/${t}&`)(m),st=e("Rfe4VhK","Option 3 extra info","b"),lt=e("iLhL4FN","Option 3","b"),ct=e("P83Jdbi","Option 2 extra info","b"),rt=e("gNLU2UM","Option 2","b"),pt=e("qswt$BI","Option 1 extra info","b"),dt=e("f7A5p06","Option 1","b");function ut(t){_(t.a)}const _t=(t,n)=>u(t.a,{a11ySelectedText:"selected",...n,option:i(i(o({value:"1",content:dt(t),description:o({content:pt(t)})}),{value:"2",content:rt(t),description:o({content:ct(t)})}),{value:"3",content:lt(t),description:o({content:st(t)})})}),mt=p("DV9QPto",it,at,ut,_t),bt=`<evo-listbox a11ySelectedText="selected" ...input>
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
`,kt={title:"building blocks/evo-listbox",component:D,parameters:{docs:{description:{component:S}}},argTypes:{selected:{controllable:!0,control:"text"},listSelection:{options:["manual (default)","auto"],control:"inline-radio"},option:{"@":{value:{control:"text"},description:{"@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@description>`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@option>`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},s=r(W,z),l=r(nt,ot),c=r(mt,bt);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)",...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithDescriptionTemplate, WithDescriptionTemplateCode)",...c.parameters?.docs?.source}}};const wt=["Default","Controlled","withDescription"];export{l as Controlled,s as Default,wt as __namedExportsOrder,kt as default,c as withDescription};
