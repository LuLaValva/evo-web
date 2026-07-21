import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import SeparatorTemplate from "./examples/separator.marko";
import SeparatorCode from "./examples/separator.marko?raw";

export default {
  title: "building blocks/evo-fake-menu",
  component: Component,
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
    item: {
      "@": {
        // `href` is inherited from `Marko.HTML.A`, so docgen does not list
        // it individually — documented here instead.
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
export const Separator = buildExtensionTemplate(
  SeparatorTemplate,
  SeparatorCode,
);
