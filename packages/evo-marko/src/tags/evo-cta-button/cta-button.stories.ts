import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import CtaButton, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

import Readme from "./README.md";

export default {
  title: "buttons/evo-cta-button",
  component: CtaButton,
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
    size: {
      control: "inline-radio",
    },
    // `href` is inherited from `Marko.HTML.A` (node_modules), so docgen
    // cannot see it — the full entry stays handwritten.
    href: {
      type: "string",
      control: "text",
      description:
        "The URL. If not present, the button inherits disabled styles",
    },
    ["<a> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    href: "https://www.ebay.com",
    size: "regular",
  },
);
