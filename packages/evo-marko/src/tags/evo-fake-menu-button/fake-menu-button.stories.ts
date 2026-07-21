import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import IconTextTemplate from "./examples/icon-with-text.marko";
import IconTextCode from "./examples/icon-with-text.marko?raw";
import CustomLabelTemplate from "./examples/custom-label.marko";
import CustomLabelCode from "./examples/custom-label.marko?raw";
import SeparatorTemplate from "./examples/separator.marko";
import SeparatorCode from "./examples/separator.marko?raw";
import OverflowTemplate from "./examples/overflow.marko";
import OverflowCode from "./examples/overflow.marko?raw";

export default {
  title: "buttons/evo-fake-menu-button",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    open: {
      controllable: true,
    },
    variant: {
      control: "select",
    },
    priority: {
      control: "select",
    },
    size: {
      control: "inline-radio",
    },
    label: {
      "@": {
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
        },
      },
    },
    strategy: {
      control: "inline-radio",
    },
    item: {
      "@": {
        href: {
          type: "string",
          control: "text",
          description: "URL for the link item. Omit for button items.",
        },
        type: {
          control: { type: "select" },
        },
        ["<a> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through to `<@item>`",
        },
      },
    },
    ["<span> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const IconText = buildExtensionTemplate(IconTextTemplate, IconTextCode);
export const CustomLabel = buildExtensionTemplate(
  CustomLabelTemplate,
  CustomLabelCode,
);
export const Separator = buildExtensionTemplate(
  SeparatorTemplate,
  SeparatorCode,
);
export const Overflow = buildExtensionTemplate(OverflowTemplate, OverflowCode);
