import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Button, { type Input } from "./index.marko";
import Readme from "./README.md";
import ButtonTemplate from "./examples/button.marko";
import ButtonTemplateCode from "./examples/button.marko?raw";
import ExpandButtonTemplate from "./examples/expand-button.marko";
import ExpandButtonTemplateCode from "./examples/expand-button.marko?raw";

export default {
  title: "buttons/evo-button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    size: {
      control: "inline-radio",
    },
    priority: {
      control: "inline-radio",
    },
    bodyState: {
      control: "inline-radio",
    },
    variant: {
      control: "inline-radio",
    },
    split: {
      control: "inline-radio",
    },
    ["<button> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  ButtonTemplate,
  ButtonTemplateCode,
);

export const ExpandButton = buildExtensionTemplate(
  ExpandButtonTemplate,
  ExpandButtonTemplateCode,
);
