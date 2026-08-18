import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import { type Meta } from "@storybook/marko";
import FilterInput, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import ControlsTemplate from "./examples/controls.marko";
import ControlsTemplateCode from "./examples/controls.marko?raw";

export default {
  title: "form input/evo-filter-input",
  component: FilterInput,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    size: {
      options: ["regular (default)", "small", "large"],
      control: "inline-radio",
    },
    placeholder: {
      control: "text",
    },
    ["<evo-input> attributes" as any]: {
      description:
        "All attributes and event handlers from [the `<evo-input>` tag](?path=/docs/form-input-evo-input--docs) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    a11yClearButton: "Clear filter input",
    "aria-label": "Filter input",
  },
);

export const Controls = buildExtensionTemplate(
  ControlsTemplate,
  ControlsTemplateCode,
  {
    a11yClearButton: "Clear filter input",
    "aria-label": "Filter input",
    a11yControlsId: "filter-input-controls",
  },
);
