import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledCode from "./examples/controlled.marko?raw";
import ControlledCheckedValuesTemplate from "./examples/controlled-checked-values.marko";
import ControlledCheckedValuesCode from "./examples/controlled-checked-values.marko?raw";
import WithLabelTemplate from "./examples/with-label.marko";
import DisabledTemplate from "./examples/disabled-with-label.marko";
import WithLabelCode from "./examples/with-label.marko?raw";
import DisabledCode from "./examples/disabled-with-label.marko?raw";

export default {
  title: "form input/evo-tri-state-checkbox",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    checked: {
      controllable: true,
      options: ["false", "mixed", "true"],
      control: "inline-radio",
    },
    size: {
      control: "inline-radio",
    },
    checkedValues: {
      controllable: true,
    },
    ["<input> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)",
    },
  },
} satisfies Meta<Input>;

export const WithLabel = buildExtensionTemplate(
  WithLabelTemplate,
  WithLabelCode,
);

export const Disabled = buildExtensionTemplate(DisabledTemplate, DisabledCode);

export const ControlledCheckedValues = buildExtensionTemplate(
  ControlledCheckedValuesTemplate,
  ControlledCheckedValuesCode,
);

export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledCode,
);

export const Isolated = buildExtensionTemplate(DefaultTemplate, DefaultCode);
