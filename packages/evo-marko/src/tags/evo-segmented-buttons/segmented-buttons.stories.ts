import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import SegmentedButtons, { type Input } from "./index.marko";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import WithIconsTemplate from "./examples/with-icons.marko";
import WithIconsTemplateCode from "./examples/with-icons.marko?raw";

export default {
  title: "buttons/evo-segmented-buttons",
  component: SegmentedButtons,
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
    selected: {
      controllable: true,
      control: "text",
      table: { type: { summary: "string | number" } },
    },
    button: {
      "@": {
        ["<button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
        },
      },
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
    },
  },
} satisfies Meta<Input<any>>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const WithIcons = buildExtensionTemplate(
  WithIconsTemplate,
  WithIconsTemplateCode,
);
