const m={title:"Skin/File Preview Card Group",parameters:{visual:{widths:[320,512,768,1024,1440,1680,1920]}}},e=()=>`
    <li class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </li>
`,p=()=>`
    <li class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="Image">
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </li>
`,v=()=>`
    <li class="file-preview-card">
        <div class="file-preview-card__body">
            <img class="file-preview-card__asset" src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" alt="Image">
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
        </div>
    </li>
`,u=()=>`
    <li class="file-preview-card">
        <div class="file-preview-card__body">
            <video class="file-preview-card__asset" src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"></video>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
            <div class="file-preview-card__info">
                <svg class="icon icon--12 file-preview-card__video-icon" aria-hidden="true">
                    <use href="#icon-play-16"></use>
                </svg>
                0:21
            </div>
        </div>
    </li>
`,g=()=>`
    <li class="file-preview-card">
        <div class="file-preview-card__body">
            <svg class="icon file-preview-card__asset" aria-hidden="true">
                <use href="#icon-file-24"></use>
            </svg>
            <button class="icon-btn file-preview-card__action" type="button" aria-label="Open menu">
                <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-overflow-vertical-16"></use>
                </svg>
            </button>
            <div class="file-preview-card__info">
                CSV
            </div>
        </div>
        <div class="file-preview-card__footer">
          <span>countries.csv</span>
          <span>English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic</span>
        </div>
    </li>
`,r=()=>`
    <div class="file-preview-card-group">
        <ul>
            ${e().repeat(28)}
        </ul>
    </div>
`,a=()=>`
    <div class="file-preview-card-group">
        <ul>
            ${g()}
            ${e()}
            ${p()}
            ${u()}
            ${v()}
        </ul>
    </div>
`,i=()=>`
    <div style="width: 320px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${e().repeat(28)}
            </ul>
        </div>
    </div>
`,s=()=>`
    <div style="width: 512px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${e().repeat(28)}
            </ul>
        </div>
    </div>
`,d=()=>`
    <div style="width: 768px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${e().repeat(28)}
            </ul>
        </div>
    </div>
`,c=()=>`
    <div style="width: 1024px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${e().repeat(28)}
            </ul>
        </div>
    </div>
`,o=()=>`
    <div style="width: 1280px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${e().repeat(28)}
            </ul>
        </div>
    </div>
`,n=()=>`
    <div style="width: 1440px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${e().repeat(28)}
            </ul>
        </div>
    </div>
`,t=()=>`
    <div style="width: 1680px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${e().repeat(28)}
            </ul>
        </div>
    </div>
`,l=()=>`
    <div style="width: 1920px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                ${e().repeat(28)}
            </ul>
        </div>
    </div>
`;r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
    <div class="file-preview-card-group">
        <ul>
            \${squareImage().repeat(28)}
        </ul>
    </div>
\``,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
    <div class="file-preview-card-group">
        <ul>
            \${withDescription()}
            \${squareImage()}
            \${portraitImage()}
            \${video()}
            \${landscapeImage()}
        </ul>
    </div>
\``,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
    <div style="width: 320px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                \${squareImage().repeat(28)}
            </ul>
        </div>
    </div>
\``,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
    <div style="width: 512px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                \${squareImage().repeat(28)}
            </ul>
        </div>
    </div>
\``,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => \`
    <div style="width: 768px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                \${squareImage().repeat(28)}
            </ul>
        </div>
    </div>
\``,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
    <div style="width: 1024px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                \${squareImage().repeat(28)}
            </ul>
        </div>
    </div>
\``,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
    <div style="width: 1280px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                \${squareImage().repeat(28)}
            </ul>
        </div>
    </div>
\``,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
    <div style="width: 1440px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                \${squareImage().repeat(28)}
            </ul>
        </div>
    </div>
\``,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
    <div style="width: 1680px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                \${squareImage().repeat(28)}
            </ul>
        </div>
    </div>
\``,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
    <div style="width: 1920px; border: 1px dashed orange;">
        <div class="file-preview-card-group">
            <ul>
                \${squareImage().repeat(28)}
            </ul>
        </div>
    </div>
\``,...l.parameters?.docs?.source}}};const w=["base","mixedTypesWithDetails","_320container","_512container","_768container","_1024container","_1280container","_1440container","_1680container","_1920container"];export{c as _1024container,o as _1280container,n as _1440container,t as _1680container,l as _1920container,i as _320container,s as _512container,d as _768container,w as __namedExportsOrder,r as base,m as default,a as mixedTypesWithDetails};
