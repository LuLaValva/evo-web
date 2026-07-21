import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import ToggleButtonGroup, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import withIconsTemplate from "./examples/icons.marko";
import withIconsCode from "./examples/icons.marko?raw";
import withDefaultTemplate from "./examples/withDefault.marko";
import withDefaultCode from "./examples/withDefault.marko?raw";
import controlledTemplate from "./examples/controlled.marko";
import controlledCode from "./examples/controlled.marko?raw";
import externalLabelTemplate from "./examples/externalLabel.marko";
import externalLabelCode from "./examples/externalLabel.marko?raw";
import columnsTemplate from "./examples/columns.marko";
import columnsCode from "./examples/columns.marko?raw";

export default {
  title: "buttons/evo-toggle-button-group",
  component: ToggleButtonGroup,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    button: {
      "@": {
        name: {
          control: "text",
        },
        ["<evo-toggle-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-toggle-button>` tag](?path=/docs/buttons-evo-toggle-button--docs) will be passed through to `<@button>`, except `pressed` since it is handled in the parent",
        },
      },
    },
    pressed: {
      controllable: true,
      control: "text",
      table: { type: { summary: "string | number | (string | number)[]" } },
    },
    layoutType: {
      control: "inline-radio",
    },
  },
} satisfies Meta<Input<any>>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);

export const WithIcons = buildExtensionTemplate(
  withIconsTemplate,
  withIconsCode,
);

export const WithDefaultSelected = buildExtensionTemplate(
  withDefaultTemplate,
  withDefaultCode,
);

export const externalLabel = buildExtensionTemplate(
  externalLabelTemplate,
  externalLabelCode,
);

export const Controlled = buildExtensionTemplate(
  controlledTemplate,
  controlledCode,
);

export const PreferredColumns = buildExtensionTemplate(
  columnsTemplate,
  columnsCode,
  {
    columnsMin: 1,
    columnsSM: 3,
    columnsXS: 2,
    columnsMD: 6,
    columnsXL: 8,
  },
);
