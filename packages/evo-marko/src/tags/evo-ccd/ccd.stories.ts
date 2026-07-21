import Readme from "./README.md";
import { type Meta } from "@storybook/marko";
import { buildExtensionTemplate } from "../../common/storybook/utils";
import CCD, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

export default {
  title: "graphics & icons/evo-ccd",
  component: CCD,
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
    chargerIcon: {
      control: "inline-radio",
    },
    a11yText: {
      control: "text",
    },
    secondaryType: {
      options: ["none (default)", "usbpd"],
      control: "select",
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    max: "2000",
    min: "1000",
  },
);
