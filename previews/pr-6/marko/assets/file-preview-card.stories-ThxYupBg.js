import{a as u,b as f,k as a,_ as R}from"./dom-ByZf3MQk.js";import{b,c as g,e as v,a as h,g as T,h as y,i as A,j as k,k as w,$ as x,l as C,m as j,p as D,f as S,d as M,o as E,n as _,F as K}from"./index-DmMESh3v.js";import{b as n}from"./utils-DyU2_5R1.js";import"./iframe-EsWVLFv_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DO3pdl0Q.js";import"./index-Bz-e3gKr.js";import"./index-VCYgT6qA.js";import"./evo-icon-spinner-24-fKp9ZYWc.js";import"./index-SLqM2JFj.js";/* empty css             */import"./evo-icon-chevron-down-16-B7IB9ME0.js";import"./index-_ZERrm0Z.js";/* empty css                    */import"./evo-icon-play-16-BMlgBiVl.js";import"./evo-icon-close-16-T-sOsZXf.js";const N=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,O=(e=>`<!>${e}<!>`)(_),W=(e=>`b/${e}&b`)(E);function Z(e){D(e.a),S(e.a,a({a11yText:"Delete",onClick:Y})),M(e.a,a({a11yText:"Cancel upload",onClick:X}))}const Q=f(2,e=>{b(e.a,e.c.action),g(e.a,e.c.as),v(e.a,e.c.class),h(e.a,e.c.file),T(e.a,e.c.footerSubtitle),y(e.a,e.c.footerTitle),A(e.a,e.c.href),k(e.a,e.c.infoText),w(e.a,e.c.menuActions),x(e.a,e.c.seeMoreAction),C(e.a,e.c.status),j(e.a,(({action:t,as:q,cancelAction:$,class:F,deleteAction:P,file:I,footerSubtitle:z,footerTitle:B,href:G,infoText:J,menuActions:U,seeMoreAction:V,status:H,...d})=>d)(e.c))});function X(){console.log("cancel upload clicked")}function Y(){console.log("delete clicked")}const o=u("c1ZJph5",O,W,Z,Q),i=`<evo-file-preview-card ...input>
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
`,ee=(e=>`<!>${e}<!>`)(_),te=(e=>`b/${e}&b`)(E),ne=R("G1NsVuz","+15","b");function ae(e){D(e.a),M(e.a,a({a11yText:"Cancel upload",onClick:le})),S(e.a,a({a11yText:"Delete",onClick:ie})),x(e.a,a({a11yText:null,content:ne(e)}))}const oe=f(2,e=>{const t={file:{name:"file-name.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...e.c};b(e.a,t.action),g(e.a,t.as),v(e.a,t.class),h(e.a,t.file),T(e.a,t.footerSubtitle),y(e.a,t.footerTitle),A(e.a,t.href),k(e.a,t.infoText),w(e.a,t.menuActions),C(e.a,t.status),j(e.a,(({action:q,as:$,cancelAction:F,class:P,deleteAction:I,file:z,footerSubtitle:B,footerTitle:G,href:J,infoText:U,menuActions:V,seeMoreAction:H,status:d,...L})=>L)(t))});function ie(){console.log("delete clicked")}function le(){console.log("cancel upload clicked")}const se=u("KC$p4sl",ee,te,ae,oe),ce=`<evo-file-preview-card
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
`,Ce={title:"media/evo-file-preview-card",component:K,parameters:{docs:{description:{component:N}}},argTypes:{as:{control:"text"},file:{control:{type:"file"}},status:{options:["undefined (default)","uploading"],control:"inline-radio"},deleteAction:{"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@deleteAction>`"}}},menuActions:{control:"object"},action:{"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@action>`"}}},seeMoreAction:{"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@seeMoreAction>`"}}},cancelAction:{"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@cancelAction>`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},l=n(o,i,{file:{name:"file-name.jpg",type:"image/jpeg"},status:"uploading"}),s=n(o,i,{file:{name:"file-name.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"}}),c=n(o,i,{file:{name:"file-name.mov",type:"video/quicktime",src:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},labelText:"10:30:21"}),r=n(o,i,{file:{name:"file-name.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},menuActions:[{event:"edit",label:"Edit"},{event:"download",label:"Download"}]}),p=n(o,i,{file:{name:"file-name.csv",type:"text/csv"},footerTitle:"file-name.csv",footerSubtitle:"English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic",menuActions:[{event:"edit",label:"Edit"}]}),m=n(se,ce);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
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
})`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"buildExtensionTemplate(SeeMoreTemplate, SeeMoreTemplateCode)",...m.parameters?.docs?.source}}};const je=["Uploading","Image","Video","MultipleMenuActions","Document","SeeMore"];export{p as Document,s as Image,r as MultipleMenuActions,m as SeeMore,l as Uploading,c as Video,je as __namedExportsOrder,Ce as default};
