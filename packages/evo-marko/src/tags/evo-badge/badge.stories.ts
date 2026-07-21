import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import { type Meta } from "@storybook/marko";
import Badge, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import EmptyTemplate from "./examples/empty.marko";
import EmptyTemplateCode from "./examples/empty.marko?raw";

export default {
  title: "graphics & icons/evo-badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  // Descriptions, types and required-ness come from the JSDoc on the
  // component's Input type via docgen; only controls that can't be
  // inferred from the type and passthrough notes live here.
  argTypes: {
    number: {
      control: "number",
    },
    type: {
      control: "inline-radio",
    },
    a11yText: {
      control: "text",
    },
    ["<span> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through, except `role`.",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    number: 5,
  },
);

export const Empty = buildExtensionTemplate(
  EmptyTemplate,
  EmptyTemplateCode,
  {},
);
