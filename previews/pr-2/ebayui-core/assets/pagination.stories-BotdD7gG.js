import{t as X}from"./storybook-code-source-CCz6reEH.js";import{a as q}from"./utils-DWCsNc5l.js";import{v as U,b as F,_ as J,d as me,p as B,e as W,c as K}from"./defineComponent-B-Bg3Ud2.js";import{a as k}from"./attr-tag-Dvq4QMvY.js";import"./iframe-DFaovTal.js";/* empty css             *//* empty css                    */import{_ as ue,a as Z,b as pe}from"./index-DUhK46Ns.js";import{_}from"./dynamic-tag-B3Rndxlm.js";import{_ as C}from"./render-tag-B9T2mz-j.js";import{_ as j}from"./of-fallback-DrWEmKV1.js";import{_ as ge}from"./index-Cu-re-ym.js";import{r as he}from"./index-eAGEw84U.js";import{g as be}from"./index-Dc9wtS83.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CL8ZzwFK.js";/* empty css                    */import"./index-ej4xJa_A.js";/* empty css               *//* empty css             */import"./index-BmRbtDLs.js";import"./index-Cw3bSwrm.js";import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-D4_UUNUd.js";import"./index-n7KuEsog.js";import"./index-CZw0tK3j.js";import"./index-3ShC0ciK.js";/* empty css             */import"./index-CiJctCOb.js";import"./style-value-D9hyxyYb.js";import"./index-Bv7icBO0.js";import"./dynamic-import-DdmK3sM_.js";import"./index-CNiudnPv.js";import"./index-CJDBRdqY.js";import"./index-BVXY2btv.js";const ye=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-pagination
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

The \`<ebay-pagination>\` is a tag used to create a pagination navigation. It will display up to 9 page links.

**Note:** If you want to have client side or ajax based navigation then you should omit the \`href\` attribute on each item. This will cause each item to be \`<button>\` instead of an \`<a>\`.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-ebay-pagination)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-ebay-pagination)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-pagination/examples)
`,fe=9,O=5;class xe extends Marko.Component{handlePageNumberClick(e,t,a){this.emit("select",{el:a,originalEvent:t,value:a.innerText,index:e})}handleMenuPageNumber({originalEvent:e,el:t}){const a=parseInt(t?.getAttribute("data-page-number"),10);this.emit("select",{el:t,originalEvent:e,value:t?.innerText??"",index:a}),setTimeout(()=>this.getEl("pageItem[]",a).focus(),0)}handleNextPageClick(e,t){t.hasAttribute("aria-disabled")||this.emit("next",{el:t,originalEvent:e})}handlePreviousPageClick(e,t){t.hasAttribute("aria-disabled")||this.emit("previous",{el:t,originalEvent:e})}onCreate(){this.state={maxItems:O}}onMount(){this._calculateMaxItems(),this.subscribeTo(he).on("resize",this._calculateMaxItems.bind(this))}getItemTag(e){return e.variant?e.variant==="link"?"a":"button":e.href?"a":"button"}_getVisibleRange(e){const{state:t,input:a}=this,{maxItems:s}=t,{variant:l}=a,p=l==="show-last"||l==="overflow",d=l==="overflow",x=l==="overflow",g=e.length-1,M=p?g:-1,R=d?1:-1;let S=!1,c=!1;const m=e.findIndex(o=>o.current),u=Math.floor(s/2);let n=m-u,i=m+u;return n<=0?(i=s-1,n=0):i>=g?(i=g,n=g-(s-1)):s%2===0&&n++,p&&(m+u>=g||i>=g?S=!0:m<=i-2?i-=2:(n+=1,i-=1)),d&&(m-u<=0?c=!0:m>=n-1?n+=2:(i-=1,n-=1)),{start:n,end:i,hideDots:S,dotsIndex:M,hasOverflow:x,leadingDotsIndex:R,hideLeadingDots:c}}_calculateMaxItems(){const{input:e,state:t}=this;if(!(e.item||[]).some(l=>!l.type))return;const s=this.getEl("root");if(!this._itemWidth){const{children:l}=this.getEl("items");for(let p=0;p<l.length;p++){const d=l[p];if(d.offsetWidth){this._itemWidth=d.offsetWidth;break}}}t.maxItems=Math.max(O,Math.min(fe,Math.floor(be(s)/this._itemWidth)-2))}}const L="niRApRv",T=U.t(L);var N={disabled:!0};function G(r,e){return(r<e.start||r>e.end)&&e.dotsIndex!==r&&e.leadingDotsIndex-1!==r}F.r(L,()=>T);const Q=xe;T._=J(function(r,e,t,a,s,l){const{class:p,item:d=[],a11yHeadingTag:x="h2",a11yCurrentText:g="Results Pagination - Page 1",a11yPreviousText:M="Previous page",a11yNextText:R="Next page",...S}=r,c=[...d];var m=c.length-1,u=c[0]&&c[0].type==="previous"&&c[0]||N,n=c[m]&&c[m].type==="next"&&c[m]||N,i=c.slice(u===N?0:1,n===N?void 0:m),o=a._getVisibleRange(i);const{current:Ie,disabled:te,...ae}=u,{current:_e,disabled:re,...ne}=n;e.be("nav",me(B(S),{role:"navigation",class:W(["pagination",p]),"aria-labelledby":t.elId("heading")}),"@root",a,null,4),e.be("span",{"aria-live":"polite",role:"status"},"0",a,null,0),_(e,x,()=>({id:t.elId("heading"),class:"clipped"}),b=>{b.t(g,a)},null,null,t,"1"),e.ee(),_(e,a.getItemTag(u),()=>({...B(ae),class:["pagination__previous",u.href?"icon-link":"icon-btn",u.class],"aria-disabled":te&&"true","aria-label":M,style:[u.style,{minWidth:40}]}),b=>{C(ue,{},b,t,"3")},null,null,t,"2",[["click","handlePreviousPageClick",!1]]),e.be("ol",{class:"pagination__items"},"@items",a,null,1);{let b=0;for(const v of j(i)){let I=b++;const h=`[${I}]`,{current:ie,disabled:ke,...se}=v;if(o.dotsIndex===I||o.leadingDotsIndex===I){var z=o.hideDots,D=!1;o.leadingDotsIndex===I&&(D=!0,z=!!o.hideLeadingDots),e.be("li",{hidden:z},"4"+h,a,null,0),o.hasOverflow?(e.be("span",{class:W(["pagination__item",v.class]),role:"separator"},"5"+h,a,null,0),C(ge,k.i(()=>{let $=0;for(const H of j(i)){let P=$++;const le=`[${P+h}]`;var oe=D?P<o.start:P>o.end;if(G(P,o)&&oe){const{current:we,disabled:Te,...de}=H;k.r("item",{...B(de),type:a.getItemTag(H),dataPageNumber:P,renderBody:ce=>{_(ce,H.renderBody,null,null,null,null,t,"7"+le)}})}}},{variant:"icon",transparent:!0,icon:Z,collapseOnSelect:!0}),e,t,"6"+h,[["select","handleMenuPageNumber",!1]]),e.ee()):(e.be("span",{class:W(["pagination__item",v.class]),role:"separator"},"8"+h,a,null,0),C(Z,{},e,t,"9"+h),e.ee()),e.ee()}e.be("li",{hidden:G(I,o)},"10"+h,a,null,0),_(e,a.getItemTag(v),()=>({...B(se),class:["pagination__item",v.class],"aria-current":ie&&"page"}),$=>{_($,v.renderBody,null,null,null,null,t,"11"+h)},null,null,t,"@pageItem[]",[["click","handlePageNumberClick",!1,[I]]]),e.ee()}}e.ee(),_(e,a.getItemTag(n),()=>({...B(ne),class:["pagination__next",n.href?"icon-link":"icon-btn",n.class],"aria-disabled":re&&"true","aria-label":R,style:[n.style,{minWidth:40}]}),b=>{C(pe,{},b,t,"13")},null,null,t,"12",[["click","handleNextPageClick",!1]]),e.ee()},{t:L},Q);T.Component=K(Q,T._);const V="q5EdRXH",E=U.t(V),A=15;F.r(V,()=>E);const Y={onCreate(){this.handlePrev=r=>{this.state.current=Math.max(this.state.current-1,0),this.emit("previous",r)},this.handleNext=r=>{this.state.current=Math.min(this.state.current+1,A),this.emit("next",r)},this.state={current:0}},handleSelect(r){this.state.current=r.index,this.emit("select",r)}};E._=J(function(r,e,t,a,s,l){C(T,k.i(()=>{k.r("item",{type:"previous",disabled:s.current===0});for(let p=(A-0)/1,d=0;d<=p;d++){const x=0+d*1;k.r("item",{current:x===s.current,renderBody:g=>{g.t(x,a)}})}k.r("item",{type:"next",disabled:s.current===A})},{a11yCurrentText:`Results Pagination - Page ${s.current}`,...r,item:void 0}),e,t,"0",[["next","handleNext",!1],["previous","handlePrev",!1],["select","handleSelect",!1]])},{t:V},Y);E.Component=K(Y,E._);const ve=`import type { Input as PaginationInput } from "<ebay-pagination>";
static const SIZE = 15;
class {
    declare state: {
        current: number;
    };

    onCreate() {
        this.state = { current: 0 };
    }
    handlePrev: PaginationInput["on-previous"] = (e) => {
        this.state.current = Math.max(this.state.current - 1, 0);
        this.emit("previous", e);
    };
    handleNext: PaginationInput["on-next"] = (e) => {
        this.state.current = Math.min(this.state.current + 1, SIZE);
        this.emit("next", e);
    };
    handleSelect(e: { index: number }) {
        this.state.current = e.index;
        this.emit("select", e);
    }
}

<ebay-pagination
    on-next("handleNext")
    on-previous("handlePrev")
    on-select("handleSelect")
    a11yCurrentText=\`Results Pagination - Page \${state.current}\`
    ...input
>
    <@item type=("previous" as any) disabled=state.current === 0/>
    <for|i| from=0 to=SIZE>
        <@item current=i === state.current>
            \${i}
        </@item>
    </for>
    <@item type="next" disabled=state.current === SIZE/>
</ebay-pagination>
`,ee=r=>({input:q(r)}),dt={title:"navigation & disclosure/ebay-pagination",component:T,parameters:{docs:{description:{component:ye}}},argTypes:{a11yPreviousText:{control:{type:"text"},description:"Localized, a11y text for previous arrow button"},a11yNextText:{control:{type:"text"},description:"Localized, a11y text for next arrow button"},a11yCurrentText:{control:{type:"text"},description:"Localized, description for the current page (e.g. Results of Page 1)"},a11yHeadingTag:{control:{type:"text"},table:{defaultValue:{summary:"h2"}},description:"Heading tag for the clipped pagination label"},variant:{control:{type:"select"},table:{defaultValue:{summary:"show-range"}},options:["show-last","show-range","overflow"],description:"Either `show-last`, or `show-range`. If `show-last` then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible."},disabled:{name:"disabled",table:{category:"@item attribute tags"},description:"Previous/next button is disabled or not"},href:{name:"href",table:{category:"@item attribute tags"},description:"for link that looks like a menu-item; omitting the href will switch to a button"},item:{name:"@item",table:{category:"@attribute tags"}},"@item variant":{name:"variant",table:{category:"@item attribute tags"},description:'"button" or "link". Will force an item to be a link if href is omitted. Defaults to button. If not specified, tag type will still be controlled by `href`'},current:{name:"current",table:{category:"@item attribute tags"},description:"the current page"},type:{name:"type",table:{category:"@item attribute tags"},description:`"previous", "next" or "page"(default). To specify if the information entered is for the previous or next arrrow button or a page. If the type='previous  | next' isn't provided the previous/next arrow buttons will be taken as'disabled'`},onPrevious:{action:"on-previous",description:"Triggered on previous arrow button",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el }"}}},onNext:{action:"on-next",description:"Triggered on next arrow button",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el }"}}},onSelect:{action:"on-select",description:"Triggered on page selected clicked",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el, value, index }"}}}}},y=ee.bind({});y.args={a11yPreviousText:"previous",a11yNextText:"next",a11yCurrentText:"Current page",item:[{renderBody:"",type:"previous",href:"#",disabled:!0},{renderBody:"1",href:"#",current:!0},{renderBody:"2",href:"#"},{renderBody:"3",href:"#"},{renderBody:"4",href:"#"},{renderBody:"5",href:"#"},{renderBody:"6",href:"#"},{renderBody:"7",href:"#"},{renderBody:"8",href:"#"},{renderBody:"9",href:"#"},{renderBody:"",type:"next",href:"#",disabled:!0}]};y.parameters={docs:{source:{code:X("ebay-pagination",y.args)}}};const f=ee.bind({});f.args={a11yPreviousText:"previous",a11yNextText:"next",a11yCurrentText:"Current page",item:[{renderBody:"",type:"previous",disabled:!0},{renderBody:"1",current:!0},{renderBody:"2"},{renderBody:"3"},{renderBody:"4"},{renderBody:"5"},{renderBody:"6"},{renderBody:"7"},{renderBody:"8"},{renderBody:"9"},{renderBody:"",type:"next",disabled:!0}]};f.parameters={docs:{source:{code:X("ebay-pagination",f.args)}}};const w=r=>({component:E,input:q(r)});w.args={};w.parameters={docs:{source:{code:ve}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(args: Input) => ({
  component: interactiveTemplate,
  input: addRenderBodies(args)
})`,...w.parameters?.docs?.source}}};const ct=["Links","Buttons","Interactive"];export{f as Buttons,w as Interactive,y as Links,ct as __namedExportsOrder,dt as default};
