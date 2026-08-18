import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Accordion, { type Input } from "./index.marko";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledCode from "./examples/controlled.marko?raw";

export default {
  title: "navigation & disclosure/evo-accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    size: {
      options: ["regular (default)", "large"],
      control: "inline-radio",
    },
    item: {
      "@": {
        ["<evo-details> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-details>` tag](?path=/story/navigation-disclosure-evo-details--docs) will be passed through to `<@item>`, except `open`",
        },
      },
    },
    open: {
      controllable: true,
      control: "number",
      table: { type: { summary: "number | number[]" } },
    },
    ["<ul> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<ul>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul) will be passed through",
    },
  },
} satisfies Meta<Input<any>>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);

export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledCode,
);
