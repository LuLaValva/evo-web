import Readme from "./README.md";
import { type Meta } from "@storybook/marko";
import FilePreviewCardGroup, { type Input } from "./index.marko";
import { buildExtensionTemplate } from "../../common/storybook/utils";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import ManyCardsTemplate from "./examples/manyCards.marko";
import ManyCardsTemplateCode from "./examples/manyCards.marko?raw";

export default {
  title: "media/evo-file-preview-card-group",
  component: FilePreviewCardGroup,
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
    card: {
      "@": {
        ["<evo-file-preview-card> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-file-preview-card>` tag](?path=/docs/media-evo-file-preview-card--docs) will be passed through to `<@card>`",
        },
      },
    },
    seeMoreAction: {
      "@": {
        ["<evo-icon-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@seeMoreAction>`",
        },
      },
    },
    visibleCardCount: {
      controllable: true,
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const ManyCards = buildExtensionTemplate(
  ManyCardsTemplate,
  ManyCardsTemplateCode,
);
