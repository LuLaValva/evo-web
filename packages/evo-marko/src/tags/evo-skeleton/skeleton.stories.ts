import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Skeleton from "./index.marko";
import Readme from "./README.md";
import AllTemplate from "./examples/all.marko";
import AllCode from "./examples/all.marko?raw";

export default {
  title: "building blocks/evo-skeleton",
  component: Skeleton,
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
  // `size` and `multiline` are props of the `evo-skeleton-button` /
  // `evo-skeleton-text` subtags, not of this component's Input, so docgen
  // cannot see them and they keep their full argTypes entries.
  argTypes: {
    a11yText: {
      control: "text",
    },
    size: {
      type: "string",
      options: ["default", "small", "large"],
      control: "inline-radio",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
      description:
        "The Size of the component to render. Applicable for `evo-skeleton-button` and `evo-skeleton-text` only",
    },
    multiline: {
      type: "boolean",
      control: "boolean",
      description:
        "Boolean flag to make `evo-skeleton-text` render more than one line",
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
    },
  },
} satisfies Meta;

export const Default = buildExtensionTemplate(AllTemplate, AllCode);
