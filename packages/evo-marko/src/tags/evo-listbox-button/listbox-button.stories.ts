import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import ListboxButton, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledTemplateCode from "./examples/controlled.marko?raw";
import WithDescriptionTemplate from "./examples/with-description.marko";
import WithDescriptionTemplateCode from "./examples/with-description.marko?raw";
import WithErrorTemplate from "./examples/with-error.marko";
import WithErrorTemplateCode from "./examples/with-error.marko?raw";

export default {
  title: "buttons/evo-listbox-button",
  component: ListboxButton,
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
    },
    open: {
      controllable: true,
    },
    option: {
      "@": {
        value: {
          control: "text",
        },
        description: {
          "@": {
            ["<span> attributes" as any]: {
              description:
                "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@description>`",
            },
          },
        },
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@option>`",
        },
      },
    },
    listSelection: {
      control: "inline-radio",
    },
    variant: {
      control: "inline-radio",
    },
    strategy: {
      control: "inline-radio",
    },
    split: {
      control: "inline-radio",
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

export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledTemplateCode,
);

export const withDescription = buildExtensionTemplate(
  WithDescriptionTemplate,
  WithDescriptionTemplateCode,
);

export const withError = buildExtensionTemplate(
  WithErrorTemplate,
  WithErrorTemplateCode,
);
