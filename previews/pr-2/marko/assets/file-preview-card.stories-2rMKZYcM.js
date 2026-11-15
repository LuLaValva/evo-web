import{a as m,b as f,k as a,_ as L}from"./dom-C0MY0u5h.js";import{b,c as g,e as h,a as v,g as y,h as T,i as w,j as A,k,$ as x,l as C,m as j,p as S,f as D,d as M,o as E,n as q,F as O}from"./index-CuuS2-wq.js";import{b as n}from"./utils-DyU2_5R1.js";import"./iframe-BkqRzvDk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cyj-PVBR.js";import"./index-Cjr8hqDj.js";import"./index-C5wm6czj.js";import"./evo-icon-spinner-24-ChmSQMgq.js";import"./index-D4aRlw-G.js";/* empty css             */import"./evo-icon-chevron-down-16-DG4w4cE-.js";import"./index-BCpdu4S5.js";/* empty css                    */import"./evo-icon-play-16-C8MLIux8.js";import"./evo-icon-close-16-D9U7-U6d.js";const K=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-file-preview-card
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

Preview card for files, primarily used alongside \`evo-file-preview-card-group\` and \`evo-file-input\`.

## Compatibility

This component only works on Marko 5 and later.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/media-evo-file-preview-card)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/media-evo-file-preview-card)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-file-preview-card/examples)
`,N=(e=>`<!>${e}<!>`)(q),W=(e=>`b/${e}&b`)(E);function Z(e){S(e.a),D(e.a,a({a11yText:"Delete",onClick:Y})),M(e.a,a({a11yText:"Cancel upload",onClick:X}))}const Q=f(2,e=>{b(e.a,e.c.action),g(e.a,e.c.as),h(e.a,e.c.class),v(e.a,e.c.file),y(e.a,e.c.footerSubtitle),T(e.a,e.c.footerTitle),w(e.a,e.c.href),A(e.a,e.c.infoText),k(e.a,e.c.menuActions),x(e.a,e.c.seeMoreAction),C(e.a,e.c.status),j(e.a,(({action:t,as:_,cancelAction:F,class:$,deleteAction:I,file:P,footerSubtitle:R,footerTitle:z,href:B,infoText:G,menuActions:J,seeMoreAction:U,status:V,...u})=>u)(e.c))});function X(){console.log("cancel upload clicked")}function Y(){console.log("delete clicked")}const o=m("c1ZJph5",N,W,Z,Q),i=`<evo-file-preview-card ...input>
    <@deleteAction
        a11yText="Delete"
        onClick() {
            console.log("delete clicked");
        }/>
    <@cancelAction
        a11yText="Cancel upload"
        onClick() {
            console.log("cancel upload clicked");
        }/>
</evo-file-preview-card>
`,ee=(e=>`<!>${e}<!>`)(q),te=(e=>`b/${e}&b`)(E),ne=L("G1NsVuz","+15","b");function ae(e){S(e.a),M(e.a,a({a11yText:"Cancel upload",onClick:le})),D(e.a,a({a11yText:"Delete",onClick:ie})),x(e.a,a({a11yText:null,content:ne(e)}))}const oe=f(2,e=>{const t={file:{name:"file-name.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...e.c};b(e.a,t.action),g(e.a,t.as),h(e.a,t.class),v(e.a,t.file),y(e.a,t.footerSubtitle),T(e.a,t.footerTitle),w(e.a,t.href),A(e.a,t.infoText),k(e.a,t.menuActions),C(e.a,t.status),j(e.a,(({action:_,as:F,cancelAction:$,class:I,deleteAction:P,file:R,footerSubtitle:z,footerTitle:B,href:G,infoText:J,menuActions:U,seeMoreAction:V,status:u,...H})=>H)(t))});function ie(){console.log("delete clicked")}function le(){console.log("cancel upload clicked")}const se=m("KC$p4sl",ee,te,ae,oe),ce=`<evo-file-preview-card
    file={
      name: "file-name.jpg",
      type: "image/jpeg",
      src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
    }

    ...input
>
    <@cancelAction a11yText="Cancel upload" onClick() { console.log("cancel upload clicked"); } />
    <@deleteAction a11yText="Delete" onClick() { console.log("delete clicked"); }/>
    <@seeMoreAction a11yText=null>+15</@seeMoreAction>
</evo-file-preview-card>
`,Ce={title:"media/evo-file-preview-card",component:O,parameters:{docs:{description:{component:K}}},argTypes:{as:{type:"string",control:"text",description:"Override the tag used to wrap this component"},file:{type:{name:"object",value:{}},control:{type:"file"},description:"File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview",table:{type:{summary:"file"}}},status:{type:"string",options:["undefined (default)","uploading"],control:"inline-radio",description:'Status of the file, can be `"uploading"` or `undefined`'},href:{type:"string",control:"text",description:"If present, wrap the card in an `<a>` tag"},infoText:{type:"string",control:"text",description:"File information. If not present, this will default to the file extension"},deleteAction:{description:"The delete button. Requires `a11yText` and `onClick` attributes which will attach to the icon-button.","@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@deleteAction>`"}}},menuActions:{control:"object",description:"Array of menu actions, containing `event` and `label`",table:{type:{summary:"{ event: string, label: string }[]"}}},action:{description:"Additional action. Requires `a11yText` and `onClick` attributes, and an icon in `content`","@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@action>`"}}},seeMoreAction:{description:'The "see more" button. Requires `a11yText` and `onClick` attributes which will attach to the icon-button.',"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@seeMoreAction>`"}}},cancelAction:{description:'The "cancel upload" button. Requires `a11yText` and `onClick` attributes which will attach to the icon-button.',"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@cancelAction>`"}}},footerTitle:{type:"string",control:"text",description:"Title to display beneath the file, usually the filename"},footerSubtitle:{type:"string",control:"text",description:"Subtitle to display beneath the file title"},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},l=n(o,i,{file:{name:"file-name.jpg",type:"image/jpeg"},status:"uploading"}),s=n(o,i,{file:{name:"file-name.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"}}),c=n(o,i,{file:{name:"file-name.mov",type:"video/quicktime",src:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},labelText:"10:30:21"}),r=n(o,i,{file:{name:"file-name.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},menuActions:[{event:"edit",label:"Edit"},{event:"download",label:"Download"}]}),p=n(o,i,{file:{name:"file-name.csv",type:"text/csv"},footerTitle:"file-name.csv",footerSubtitle:"English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic",menuActions:[{event:"edit",label:"Edit"}]}),d=n(se,ce);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  file: {
    name: "file-name.jpg",
    type: "image/jpeg"
  },
  status: "uploading"
})`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  file: {
    name: "file-name.jpg",
    type: "image/jpeg",
    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
  }
})`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  file: {
    name: "file-name.mov",
    type: "video/quicktime",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
  },
  labelText: "10:30:21"
})`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  file: {
    name: "file-name.jpg",
    type: "image/jpeg",
    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
  },
  menuActions: [{
    event: "edit",
    label: "Edit"
  }, {
    event: "download",
    label: "Download"
  }]
})`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  file: {
    name: "file-name.csv",
    type: "text/csv"
  },
  footerTitle: "file-name.csv",
  footerSubtitle: "English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic",
  menuActions: [{
    event: "edit",
    label: "Edit"
  }]
})`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(SeeMoreTemplate, SeeMoreTemplateCode)",...d.parameters?.docs?.source}}};const je=["Uploading","Image","Video","MultipleMenuActions","Document","SeeMore"];export{p as Document,s as Image,r as MultipleMenuActions,d as SeeMore,l as Uploading,c as Video,je as __namedExportsOrder,Ce as default};
