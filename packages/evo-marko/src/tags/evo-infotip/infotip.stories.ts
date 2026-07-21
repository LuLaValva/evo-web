import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Infotip, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import InParagraphTemplate from "./examples/in-paragraph.marko";
import InParagraphTemplateCode from "./examples/in-paragraph.marko?raw";
import DisabledTemplate from "./examples/disabled.marko";
import DisabledTemplateCode from "./examples/disabled.marko?raw";
import CustomIconTemplate from "./examples/custom-icon.marko";
import CustomIconTemplateCode from "./examples/custom-icon.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledTemplateCode from "./examples/controlled.marko?raw";

export default {
  title: "notices & tips/evo-infotip",
  component: Infotip,
  parameters: {
    docs: {
      description: {
        component:
          "An infotip provides additional information via a clickable info icon button.",
      },
    },
  },

  argTypes: {
    open: {
      controllable: true,
    },
    icon: {
      "@": {
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@icon>`",
        },
      },
    },
    heading: {
      "@": {
        as: {
          options: ["span", "h1", "h2", "s", "h4", "h5", "h6"],
          control: "select",
        },
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@title>`.",
        },
      },
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const InParagraph = buildExtensionTemplate(
  InParagraphTemplate,
  InParagraphTemplateCode,
);

export const Disabled = buildExtensionTemplate(
  DisabledTemplate,
  DisabledTemplateCode,
);

export const CustomIcon = buildExtensionTemplate(
  CustomIconTemplate,
  CustomIconTemplateCode,
);

export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledTemplateCode,
);
