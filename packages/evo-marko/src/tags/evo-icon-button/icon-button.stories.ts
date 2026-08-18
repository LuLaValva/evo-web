import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import IconButton, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import Readme from "./README.md";

export default {
  title: "buttons/evo-icon-button",
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    badge: {
      "@": {
        ["<evo-badge> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-badge>` tag](?path=/docs/graphics-icons-evo-badge--docs) will be passed through to `<@badge>`, _except_ `a11yText`. The a11y label for the badge should be included in `a11yText` for the button.",
        },
      },
    },
    size: {
      options: ["regular (default)", "small", "large"],
      control: "inline-radio",
    },
    priority: {
      options: ["none (default)", "primary", "secondary", "tertiary"],
      control: "inline-radio",
    },
    a11yText: {
      control: "text",
    },
    onEscape: {
      action: "onEscape",
      table: { category: "Events" },
    },
    ["<button> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) for anchor variants)",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);
