import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Tourtip, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import WithFooterTemplate from "./examples/with-footer.marko";
import WithFooterTemplateCode from "./examples/with-footer.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledTemplateCode from "./examples/controlled.marko?raw";
import PlacementsTemplate from "./examples/placements.marko";
import PlacementsTemplateCode from "./examples/placements.marko?raw";

export default {
  title: "notices & tips/evo-tourtip",
  component: Tourtip,
  parameters: {
    docs: {
      description: {
        component:
          "A tourtip is used to highlight new features or guide users through an experience.",
      },
    },
  },

  // Descriptions, types, required-ness and defaults come from the JSDoc on
  // the component's Input type via docgen; only controls that can't be
  // inferred from the type and passthrough notes live here.
  argTypes: {
    open: {
      controllable: true,
    },
    host: {
      "@": {
        as: {
          control: "text",
        },
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
        },
      },
    },
    heading: {
      "@": {
        as: {
          control: "text",
        },
        ["<h2> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<h2>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) will be passed through",
        },
      },
    },
    footer: {
      "@": {
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
        },
      },
    },
    ["<span> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const WithFooter = buildExtensionTemplate(
  WithFooterTemplate,
  WithFooterTemplateCode,
);

export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledTemplateCode,
);

export const Placements = buildExtensionTemplate(
  PlacementsTemplate,
  PlacementsTemplateCode,
);
