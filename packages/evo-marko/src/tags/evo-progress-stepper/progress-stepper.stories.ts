import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import ProgressStepper, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

export default {
  title: "progress/evo-progress-stepper",
  component: ProgressStepper,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    direction: {
      options: ["row (default)", "column"],
      control: "inline-radio",
    },
    step: {
      "@": {
        title: {
          "@": {
            as: {
              options: ["h1", "h2", "h3", "h4", "h5", "h6", "span"],
              control: "select",
            },
            ["<h4> attributes" as any]: {
              description:
                "All attributes and event handlers from [the native `<h4>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) will be passed through to `<@title>`.",
            },
          },
        },
      },
    },
    defaultState: {
      options: ["active (default)", "complete", "upcoming", "attention"],
      control: "inline-radio",
    },
    headingAs: {
      control: "text",
    },
    stepContentAs: {
      control: "text",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);
