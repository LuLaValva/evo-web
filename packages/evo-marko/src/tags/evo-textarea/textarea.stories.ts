import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Textarea, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledCode from "./examples/controlled.marko?raw";

export default {
  title: "form input/evo-textarea",
  component: Textarea,
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
      type: "string",
      control: "text",
      description: "The value of the textarea",
    },
    inputSize: {
      control: "inline-radio",
    },
    ["<textarea> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<textarea>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#textarea-valuechange)",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledCode,
);
