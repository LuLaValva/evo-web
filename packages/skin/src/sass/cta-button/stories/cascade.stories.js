export default {
    title: "Skin/CTA Button/Cascade",
    parameters: {
        visual: { rtl: true },
    },
};

export const color = () => `
<a class="cta-btn" href="http://www.ebay.com" style="color: red">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
`;

export const fontSize = () => `
<a class="cta-btn" href="http://www.ebay.com" style="font-size: 200%">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
`;
