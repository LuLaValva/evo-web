import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Card, { type Input } from "./index.marko";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import AnchorTemplate from "./examples/anchor.marko";
import AnchorTemplateCode from "./examples/anchor.marko?raw";
import ButtonTemplate from "./examples/button.marko";
import ButtonTemplateCode from "./examples/button.marko?raw";
import MinimumTemplate from "./examples/minimum.marko";
import MinimumTemplateCode from "./examples/minimum.marko?raw";

export default {
  title: "layout/evo-card",
  component: Card,
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
    layout: {
      control: "inline-radio",
    },
    aspectRatio: {
      control: "inline-radio",
    },
    image: {
      "@": {
        ["<img> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native `<img>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) will be passed through to `<@image>`.",
        },
      },
    },
    title: {
      "@": {
        as: {
          options: ["h1", "h2", "h3", "h4", "h5", "h6", "span"],
          control: "select",
        },
        ["<h3> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native `<h3>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) will be passed through to `<@title>`.",
        },
      },
    },
    action: {
      "@": {
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@action>`.",
        },
      },
    },
    overline: {
      "@": {
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@overline>`.",
        },
      },
    },
    description: {
      "@": {
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@description>`.",
        },
      },
    },
    ["<span>, <a>, <button> attributes" as any]: {
      description:
        "All attributes are passed through to an HTML element. It will be a `<span>` if `action` is present, `<a>` if `href` is present, and `<button>` otherwise.",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const Anchor = buildExtensionTemplate(
  AnchorTemplate,
  AnchorTemplateCode,
);

export const Button = buildExtensionTemplate(
  ButtonTemplate,
  ButtonTemplateCode,
);

export const Minimum = buildExtensionTemplate(
  MinimumTemplate,
  MinimumTemplateCode,
);
