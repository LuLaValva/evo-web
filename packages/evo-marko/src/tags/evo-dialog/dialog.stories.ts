import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Dialog, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import BannerTemplate from "./examples/banner.marko";
import BannerTemplateCode from "./examples/banner.marko?raw";
import CustomBannerTemplate from "./examples/custom-banner.marko";
import CustomBannerTemplateCode from "./examples/custom-banner.marko?raw";

export default {
  title: "navigation & disclosure/evo-dialog",
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  // Descriptions, types, required-ness and defaults come from the JSDoc on
  // the component's Input type via docgen; only controls that can't be
  // inferred from the type and passthrough notes live here.
  argTypes: {
    open: {
      controllable: true,
    },
    size: {
      control: "inline-radio",
    },
    // `closedby` is inherited from the native `<dialog>` attributes, so
    // docgen does not list it individually — documented here instead.
    closedby: {
      type: "string",
      options: ["any", "closerequest", "none"],
      control: "inline-radio",
      description:
        'The [`closedby=` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#closedby) from the native `<dialog>` component. Defaults to `"any"` if not specified',
      table: { defaultValue: { summary: "any" } },
    },
    header: {
      "@": {
        ["<h2> attributes" as any]: {
          description:
            "All attributes and event handlers from the heading element will be passed through",
        },
      },
    },
    footer: {
      "@": {
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
        },
      },
    },
    close: {
      "@": {
        ["<button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
        },
      },
    },
    previous: {
      "@": {
        ["<button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
        },
      },
    },
    banner: {
      "@": {
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
        },
      },
    },
    ["<dialog> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const Banner = buildExtensionTemplate(
  BannerTemplate,
  BannerTemplateCode,
);

export const CustomBanner = buildExtensionTemplate(
  CustomBannerTemplate,
  CustomBannerTemplateCode,
);
