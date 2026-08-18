import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Details, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import WithLeadingTemplate from "./examples/with-leading.marko";
import WithLeadingTemplateCode from "./examples/with-leading.marko?raw";

export default {
  title: "navigation & disclosure/evo-details",
  component: Details,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    content: {},
    leading: {
      "@": {
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
        },
      },
    },
    summary: {
      "@": {
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
        },
      },
    },
    alignment: {
      options: ["regular (default)", "center"],
      control: "inline-radio",
    },
    size: {
      options: ["regular (default)", "small"],
      control: "inline-radio",
    },
    open: {
      controllable: true,
    },
    contentAs: {
      control: "text",
    },
    ["<details> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<details>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const WithLeading = buildExtensionTemplate(
  WithLeadingTemplate,
  WithLeadingTemplateCode,
);
