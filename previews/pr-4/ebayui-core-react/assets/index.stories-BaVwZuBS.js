import{u as x,r as h,R as e,c as F}from"./iframe-C0-q-Rzd.js";import{b as _,e as D}from"./utils-BmlvPkVL.js";import{E as w}from"./ebay-icon-upload-24-CHn42YF_.js";import{E as C}from"./file-preview-card-group-CKTjroTe.js";import{E as v}from"./file-preview-card-pApbO3wJ.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-button-CF7HIABJ.js";import"./badge-B_PFS9N3.js";import"./menu-button-BN1N-_0c.js";import"./menu-item-separator-BcSg7_3W.js";import"./index-BkO6S4Io.js";import"./ebay-icon-tick-16-BqGNFO6E.js";import"./button-BE9EC6iK.js";import"./progress-spinner-DIVlslwQ.js";import"./ebay-icon-spinner-30-BE6PXRq0.js";import"./ebay-icon-chevron-down-12-BB9nWbns.js";import"./index-B8Qar043.js";import"./floating-ui-BRehECc-.js";import"./jsx-runtime-u17CrQMm.js";import"./index-CivcjaLf.js";import"./index-BprWBkku.js";import"./ebay-icon-overflow-vertical-16-CGjmnKt3.js";import"./ebay-icon-close-16-BomWALEW.js";import"./ebay-icon-delete-16-DuJjEX6c.js";import"./ebay-icon-play-16-Dx-wA8Wv.js";const o=({className:n,as:t="span",...l})=>e.createElement(t,{className:F("file-input__content-header",n),...l}),m=({className:n,as:t="span",...l})=>e.createElement(t,{className:F("file-input__content-subheader",n),...l}),g=({children:n,onInput:t,className:l,...s})=>{const i=x(),[r,a]=h.useState(!1),p=f=>{t&&t(f,{files:f.target.files})},c=()=>a(!0),u=()=>a(!1),d=_(n,o),S=_(n,m),I=D(n,o).filter(({type:f})=>f!==m);return e.createElement("div",{className:F("file-input",r&&"file-input___container--dragged-over",l)},e.createElement("div",{className:"file-input__container"},e.createElement("div",{className:"file-input__upload-icon"},e.createElement(w,null)),e.createElement("div",{className:"file-input__content"},d,S,I&&e.createElement("label",{htmlFor:s.id||i},e.createElement("span",{className:"file-input__content-cta"},I)))),e.createElement("input",{...s,id:s.id||i,type:"file",className:"file-input__input",onChange:p,onDragEnter:c,onDragOver:c,onDragLeave:u,onDrop:u}))};try{o.displayName="EbayFileInputHeader",o.__docgenInfo={description:"",displayName:"EbayFileInputHeader",props:{}}}catch{}try{m.displayName="EbayFileInputSubheader",m.__docgenInfo={description:"",displayName:"EbayFileInputSubheader",props:{}}}catch{}const ee={title:"form input/ebay-file-input",component:g,argTypes:{multiple:{type:"boolean",control:{type:"boolean"},description:"Whether multiple files can be uploaded"},onInput:{action:"onInput",description:"Triggered when the file(s) are uploaded",table:{category:"Events",defaultValue:{summary:"event, { files }"}}}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayFileInput, EbayFileInputHeader, EbayFileInputSubheader } from "@ebay/ui-core-react/ebay-file-input";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/file-input";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/file-input.css";
@import "@ebay/skin/icon.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayFileInput onInput={(event, { files }) => console.log(files)}>
    <EbayFileInputHeader>Upload your files</EbayFileInputHeader>
    <EbayFileInputSubheader>Supported formats: .jpg, .png</EbayFileInputSubheader>
    <span>Click or drag files here to upload</span>
</EbayFileInput>
\`\`\``}}}},y=n=>e.createElement(g,{...n},e.createElement(o,null,"Upload your files"),e.createElement(m,null,"Supported formats: .jpg, .png"),e.createElement("span",null,"Click or drag files here to upload")),E=n=>{const[t,l]=h.useState([]),s=(r,a)=>{l(t.concat(Array.from(a.files)))},i=(r,a)=>{l([...t.slice(0,a.index),...t.slice(a.index+1)])};return e.createElement(e.Fragment,null,e.createElement(g,{...n,onInput:s},e.createElement(o,null,"Custom Header"),e.createElement("span",null,"Click or drag files here to upload")),e.createElement(C,{onDelete:i,onCancel:i},t.map((r,a)=>e.createElement(v,{key:a,file:r,deleteText:"Delete",a11yCancelUploadText:"Cancel upload"}))))},b=n=>{const[t,l]=h.useState([]),s=(r,a)=>{const p=Array.from(a.files);l(t.concat(p.map(c=>[c,void 0]))),p.forEach(async(c,u)=>{await new Promise(d=>setTimeout(d,Math.random()*5e3)),l(d=>[...d.slice(0,u),[c,`https://fakeurl.com/${Math.random().toString(36).substring(7)}`],...d.slice(u+1)])})},i=(r,a)=>{l([...t.slice(0,a.index),...t.slice(a.index+1)])};return e.createElement(e.Fragment,null,e.createElement(g,{multiple:!0,...n,onInput:s},e.createElement(o,null,e.createElement("p",null,"Multiple files")),e.createElement("span",null,"Browse files")),e.createElement(C,{onDelete:i,onCancel:i},t.map(([r,a],p)=>e.createElement(v,{key:p,file:r,deleteText:"Delete",status:a?void 0:"uploading",a11yCancelUploadText:"Cancel upload"}))))};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <EbayFileInput {...args}>
        <EbayFileInputHeader>Upload your files</EbayFileInputHeader>
        <EbayFileInputSubheader>Supported formats: .jpg, .png</EbayFileInputSubheader>
        <span>Click or drag files here to upload</span>
    </EbayFileInput>`,...y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<File[]>([]);
  const handleInput = (_, data) => {
    setFiles(files.concat(Array.from(data.files)));
  };
  const handleDelete: FilePreviewCardActionHandler = (_, data) => {
    setFiles([...files.slice(0, data!.index), ...files.slice(data!.index + 1)]);
  };
  return <>
            <EbayFileInput {...args} onInput={handleInput}>
                <EbayFileInputHeader>Custom Header</EbayFileInputHeader>
                <span>Click or drag files here to upload</span>
            </EbayFileInput>

            <EbayFilePreviewCardGroup onDelete={handleDelete} onCancel={handleDelete}>
                {files.map((file, i) => <EbayFilePreviewCard key={i} file={file} deleteText="Delete" a11yCancelUploadText="Cancel upload" />)}
            </EbayFilePreviewCardGroup>
        </>;
}`,...E.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<[File, string?][]>([]);
  const handleInput: FileInputHandler = (_, data) => {
    const fileList = Array.from(data!.files);
    setFiles(files.concat(fileList.map(file => [file, undefined])));
    fileList.forEach(async (file, index) => {
      await new Promise(resolve => setTimeout(resolve, Math.random() * 5000));
      setFiles(prevFiles => [...prevFiles.slice(0, index), [file, \`https://fakeurl.com/\${Math.random().toString(36).substring(7)}\`], ...prevFiles.slice(index + 1)]);
    });
  };
  const handleDelete: FilePreviewCardActionHandler = (_, data) => {
    setFiles([...files.slice(0, data!.index), ...files.slice(data!.index + 1)]);
  };
  return <>
            <EbayFileInput multiple {...args} onInput={handleInput}>
                <EbayFileInputHeader>
                    <p>Multiple files</p>
                </EbayFileInputHeader>
                <span>Browse files</span>
            </EbayFileInput>

            <EbayFilePreviewCardGroup onDelete={handleDelete} onCancel={handleDelete}>
                {files.map(([file, url], i) => <EbayFilePreviewCard key={i} file={file} deleteText="Delete" status={!url ? "uploading" : undefined} a11yCancelUploadText="Cancel upload" />)}
            </EbayFilePreviewCardGroup>
        </>;
}`,...b.parameters?.docs?.source}}};const te=["Default","WithPreviewCards","WithMockUploads"];export{y as Default,b as WithMockUploads,E as WithPreviewCards,te as __namedExportsOrder,ee as default};
