import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Tooltip, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import NoHoverTemplate from "./examples/no-hover.marko";
import NoHoverTemplateCode from "./examples/no-hover.marko?raw";
import PlacementsTemplate from "./examples/placements.marko";
import PlacementsTemplateCode from "./examples/placements.marko?raw";
import IconButtonHostTemplate from "./examples/icon-button-host.marko";
import IconButtonHostTemplateCode from "./examples/icon-button-host.marko?raw";

export default {
  title: "notices & tips/evo-tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component:
          "A tooltip provides brief, supplementary information on hover or focus.",
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

export const NoHover = buildExtensionTemplate(
  NoHoverTemplate,
  NoHoverTemplateCode,
);

export const IconButtonHost = buildExtensionTemplate(
  IconButtonHostTemplate,
  IconButtonHostTemplateCode,
);

export const Placements = buildExtensionTemplate(
  PlacementsTemplate,
  PlacementsTemplateCode,
);
