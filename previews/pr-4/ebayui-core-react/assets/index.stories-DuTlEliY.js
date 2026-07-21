import{R as e}from"./iframe-C0-q-Rzd.js";import{E as g,a as E}from"./ebay-icon-attention-16-DvU8-1sB.js";import{T as k,a as p,b as I}from"./tabs-7xx1P-9Q.js";import{a as r,E as t,b as v}from"./menu-item-separator-BcSg7_3W.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BkO6S4Io.js";import"./utils-BmlvPkVL.js";import"./badge-B_PFS9N3.js";import"./ebay-icon-tick-16-BqGNFO6E.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,K={component:r,title:"building blocks/ebay-menu",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayMenu, EbayMenuItem as Item } from "@ebay/ui-core-react/ebay-menu";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/badge";
import "@ebay/skin/icon";
import "@ebay/skin/menu";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/badge.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/menu.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayMenu>
    <Item>Item 1</Item>
    <Item>Item 2</Item>
    <Item>Item 3</Item>
</EbayMenu>
\`\`\``}}},argTypes:{type:{description:"Can be `radio`/`checkbox`",options:["radio","checkbox"],control:{type:"select"}},checked:{description:"when used with `radio` type will check the item with the corresponding index",control:"number"},baseEl:{description:"Container can be `span` (default) or `div`",options:["span","div"],control:{type:"select"}},onKeyDown:{description:"props: (e: event, { index: number, checked: number[], checkedValues?: string[] })",action:"onKeyDown",table:{category:"Events"}},onSelect:{description:"props: (e: event, { index: number }), triggered on item clicked (not for type `radio`/`checkbox`)",action:"onSelect",table:{category:"Events"}},onChange:{description:"props: (e: event, { index: number, checked: number[], checkedValues: string[]), triggered on item `checked` change, (for type `radio`/`checkbox` only)",action:"onChange",table:{category:"Events"}},classPrefix:{description:"class prefix for the component, defaults to `menu`",control:"text"},reverse:{description:"reverse the menu item layout, so that the badge is on the left and the text on the right (default: false)",control:"boolean"},fixWidth:{description:"makes the menu width the same as its parent",control:"boolean"},fixed:{description:"Swap between `fixed` and `absolute` positioning strategy. Use `fixed` when dropdown is in contained in an overflow and needs to be visible as you scroll the screen.",control:"boolean"},value:{description:"for type `radio`, `checkbox`: the value to use with callbacks for `checkedValues[]`",options:["radio","checkbox","checkedValues[]"],control:{type:"select"}},disabled:{description:"makes the menu item disabled",control:"boolean"},badgeNumber:{description:"used as the number to be placed in the badge",control:"number"},badgeAriaLabel:{control:"text"},priority:{description:"Menu priority style",options:["primary","secondary","none"],control:{type:"select"}},autofocus:{description:"Auto-focus menu on mount",control:"boolean"}}},o=n=>e.createElement(e.Fragment,null,e.createElement(r,{...n,onClick:a("click"),onKeyDown:a("key down")},e.createElement(t,null,"Item 1 that has very long text"),e.createElement(t,null,"Item 2"),e.createElement(t,null,"Item 3"))),c=n=>e.createElement(e.Fragment,null,e.createElement(k,null,e.createElement(p,null,"Menu.checked"),e.createElement(I,null,e.createElement(r,{...n,type:"radio",checked:1,onKeyDown:a("key down"),onChange:(b,{index:y,checked:h})=>a("change")(b,{index:y,checked:h}),onSelect:(b,{index:y,checked:h})=>a("select")(b,{index:y,checked:h})},e.createElement(t,null,"item 0"),e.createElement(t,null,"Prechecked on menu level"),e.createElement(t,null,"item 2"))),e.createElement(p,null,"Item.checked"),e.createElement(I,null,e.createElement(r,{...n,type:"radio",onKeyDown:a("key down"),onChange:a("change"),onSelect:a("select")},e.createElement(t,{checked:!0},"Prechecked on item level"),e.createElement(t,null,"item 1"),e.createElement(t,null,"item 2"))),e.createElement(p,null,"Menu.checked+Item.checked"),e.createElement(I,null,e.createElement(r,{...n,type:"radio",checked:1,onKeyDown:a("key down"),onChange:a("change"),onSelect:a("select")},e.createElement(t,{checked:!0},"Prechecked on item level"),e.createElement(t,null,"Prechecked on menu level"),e.createElement(t,null,"item 2"))))),m=n=>e.createElement(e.Fragment,null,e.createElement(r,{...n,type:"checkbox",onKeyDown:a("key down"),onChange:a("change"),onSelect:a("select")},e.createElement(t,{value:"item 1",checked:!0},"item 1"),e.createElement(t,{value:"item 2"},"item 2"),e.createElement(t,{value:"item 3",checked:!0},"item 3"))),l=n=>e.createElement(e.Fragment,null,e.createElement(r,{...n},e.createElement(t,null,"item 1 that has very long text"),e.createElement(t,null,"Item 2"),e.createElement(v,null),e.createElement(t,null,"Item 3"),e.createElement(t,null,"Item 4"),e.createElement(t,null,"Item 5"))),i=n=>e.createElement(e.Fragment,null,e.createElement(r,{...n},e.createElement(t,null,"item 1 that has very long text"),e.createElement(t,{disabled:!0},"Item 2"),e.createElement(t,null,"Item 3"))),s=n=>e.createElement(e.Fragment,null,e.createElement(r,{...n},e.createElement(t,{badgeNumber:5,badgeAriaLabel:"item 1 (5 unread items)"},"item 1"),e.createElement(t,{badgeNumber:23,"aria-label":"item 2 (23 unread items)"},"item 2"),e.createElement(t,null,"item 3"))),d=n=>e.createElement(e.Fragment,null,e.createElement(r,{...n},e.createElement(t,null,e.createElement(g,{style:{marginRight:"8px"}})," Confirmed"),e.createElement(t,{value:"item 2"},e.createElement(E,{style:{marginRight:"8px"}})," Not yet confirmed"),e.createElement(t,{value:"item 3"},e.createElement(E,{style:{marginRight:"8px"}})," Not yet confirmed"))),u={render:n=>e.createElement(e.Fragment,null,e.createElement(r,{...n,baseEl:"div"},e.createElement(t,null,"Item 1 that has very long text"),e.createElement(t,null,"Item 2"),e.createElement(t,null,"Item 3"))),name:"Div container"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenu {...args} onClick={action("click")} onKeyDown={action("key down")}>
            <Item>Item 1 that has very long text</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
        </EbayMenu>
    </>`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <>
        <EbayTabs>
            <EbayTab>Menu.checked</EbayTab>
            <EbayTabPanel>
                <EbayMenu {...args} type="radio" checked={1} onKeyDown={action("key down")}
      // Test TS complier errors here:
      onChange={(e, {
        index,
        checked
      }) => action("change")(e, {
        index,
        checked
      })} onSelect={(e, {
        index,
        checked
      }) => action("select")(e, {
        index,
        checked
      })}>
                    <Item>item 0</Item>
                    <Item>Prechecked on menu level</Item>
                    <Item>item 2</Item>
                </EbayMenu>
            </EbayTabPanel>

            <EbayTab>Item.checked</EbayTab>
            <EbayTabPanel>
                <EbayMenu {...args} type="radio" onKeyDown={action("key down")} onChange={action("change")} onSelect={action("select")}>
                    <Item checked>Prechecked on item level</Item>
                    <Item>item 1</Item>
                    <Item>item 2</Item>
                </EbayMenu>
            </EbayTabPanel>

            <EbayTab>Menu.checked+Item.checked</EbayTab>
            <EbayTabPanel>
                <EbayMenu {...args} type="radio" checked={1} onKeyDown={action("key down")} onChange={action("change")} onSelect={action("select")}>
                    <Item checked>Prechecked on item level</Item>
                    <Item>Prechecked on menu level</Item>
                    <Item>item 2</Item>
                </EbayMenu>
            </EbayTabPanel>
        </EbayTabs>
    </>`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenu {...args} type="checkbox" onKeyDown={action("key down")} onChange={action("change")} onSelect={action("select")}>
            <Item value="item 1" checked>
                item 1
            </Item>
            <Item value="item 2">item 2</Item>
            <Item value="item 3" checked>
                item 3
            </Item>
        </EbayMenu>
    </>`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenu {...args}>
            <Item>item 1 that has very long text</Item>
            <Item>Item 2</Item>
            <Separator />
            <Item>Item 3</Item>
            <Item>Item 4</Item>
            <Item>Item 5</Item>
        </EbayMenu>
    </>`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenu {...args}>
            <Item>item 1 that has very long text</Item>
            <Item disabled>Item 2</Item>
            <Item>Item 3</Item>
        </EbayMenu>
    </>`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenu {...args}>
            <Item badgeNumber={5} badgeAriaLabel="item 1 (5 unread items)">
                item 1
            </Item>
            <Item badgeNumber={23} aria-label="item 2 (23 unread items)">
                item 2
            </Item>
            <Item>item 3</Item>
        </EbayMenu>
    </>`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenu {...args}>
            <Item>
                <EbayIconConfirmation16 style={{
        marginRight: "8px"
      }} /> Confirmed
            </Item>
            <Item value="item 2">
                <EbayIconAttention16 style={{
        marginRight: "8px"
      }} /> Not yet confirmed
            </Item>
            <Item value="item 3">
                <EbayIconAttention16 style={{
        marginRight: "8px"
      }} /> Not yet confirmed
            </Item>
        </EbayMenu>
    </>`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayMenu {...args} baseEl="div">
                <Item>Item 1 that has very long text</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbayMenu>
        </>,
  name: "Div container"
}`,...u.parameters?.docs?.source}}};const N=["Default","Radio","Checkbox","WithSeparator","WithDisabledItem","WithBadges","WithIcons","DivContainer"];export{m as Checkbox,o as Default,u as DivContainer,c as Radio,s as WithBadges,i as WithDisabledItem,d as WithIcons,l as WithSeparator,N as __namedExportsOrder,K as default};
