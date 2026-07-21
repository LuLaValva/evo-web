import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import ImagePlaceholder, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import ResizedTemplate from "./examples/resized.marko";
import ResizedTemplateCode from "./examples/resized.marko?raw";

export default {
  title: "graphics & icons/evo-image-placeholder",
  component: ImagePlaceholder,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    ["<svg> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<svg>` tag](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/svg) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const Resized = buildExtensionTemplate(
  ResizedTemplate,
  ResizedTemplateCode,
);
