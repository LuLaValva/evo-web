import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ControllableTemplate from "./examples/controllable.marko";
import ControllableCode from "./examples/controllable.marko?raw";
import WithLinksTemplate from "./examples/with-links.marko";
import WithLinksCode from "./examples/with-links.marko?raw";

export default {
  title: "building blocks/evo-calendar",
  component: Component,
  parameters: {
    docs: {
      description: { component: Readme },
    },
  },
  // Descriptions, types, required-ness and defaults come from the JSDoc on
  // the component's Input type via docgen; only controls that can't be
  // inferred from the type and passthrough notes live here.
  argTypes: {
    selectMode: {
      control: "inline-radio",
      // Kept: the inferred options drop the `undefined` (non-interactive) choice.
      options: [undefined, "day", "range"],
    },
    today: {
      control: "text",
    },
    selected: {
      controllable: true,
      control: "object",
    },
    visibleMonth: {
      controllable: true,
      control: "text",
    },
    disable: {
      control: "object",
    },
    a11yRangeText: {
      control: "object",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const Controllable = buildExtensionTemplate(
  ControllableTemplate,
  ControllableCode,
);
export const WithLinks = buildExtensionTemplate(
  WithLinksTemplate,
  WithLinksCode,
);
