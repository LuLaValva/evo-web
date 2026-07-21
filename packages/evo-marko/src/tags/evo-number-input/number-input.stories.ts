import Readme from "./README.md";
import { type Meta } from "@storybook/marko";
import NumberInput, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledCode from "./examples/controlled.marko?raw";
import WithLabelTemplate from "./examples/with-label.marko";
import WithLabelCode from "./examples/with-label.marko?raw";
import { buildExtensionTemplate } from "../../common/storybook/utils";

export default {
  title: "form input/evo-number-input",
  component: NumberInput,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    value: {
      controllable: true,
    },
    label: {
      "@": {
        ["<label> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<label>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label) will be passed through",
        },
      },
    },
    ["<evo-input> attributes" as any]: {
      description:
        "All attributes and event handlers from [the `<evo-input>` tag](?path=/docs/form-input-evo-input--docs) will be passed through",
    },
    onIncrement: {
      action: "onIncrement",
      table: { category: "Events" },
    },
    onDecrement: {
      action: "onDecrement",
      table: { category: "Events" },
    },
    onDelete: {
      action: "onDelete",
      table: { category: "Events" },
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledCode,
);
export const WithLabel = buildExtensionTemplate(
  WithLabelTemplate,
  WithLabelCode,
);
