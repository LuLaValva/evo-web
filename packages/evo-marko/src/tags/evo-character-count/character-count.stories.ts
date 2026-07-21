import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import CharCount, { type Input } from "./index.marko";
import IsolatedTemplate from "./examples/isolated.marko";
import IsolatedCode from "./examples/isolated.marko?raw";
import InFieldTemplate from "./examples/in-field.marko";
import InFieldCode from "./examples/in-field.marko?raw";
import CustomTextTemplate from "./examples/custom-text.marko";
import CustomTextCode from "./examples/custom-text.marko?raw";

export default {
  title: "building blocks/evo-character-count",
  component: CharCount,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    a11yText: {
      control: "text",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(IsolatedTemplate, IsolatedCode, {
  string: "Hello world",
  a11yText: "characters remaining",
  max: 120,
});

export const InField = buildExtensionTemplate(InFieldTemplate, InFieldCode);

export const CustomText = buildExtensionTemplate(
  CustomTextTemplate,
  CustomTextCode,
  {
    max: 120,
  },
);
