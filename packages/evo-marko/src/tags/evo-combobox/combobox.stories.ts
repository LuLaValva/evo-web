import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ControllableTemplate from "./examples/controllable.marko";
import ControllableCode from "./examples/controllable.marko?raw";
import AsyncFilteringTemplate from "./examples/async-filtering.marko";
import AsyncFilteringCode from "./examples/async-filtering.marko?raw";

export default {
  title: "form input/evo-combobox",
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
    autocomplete: {
      control: "inline-radio",
    },
    listSelection: {
      control: "inline-radio",
    },
    strategy: {
      control: "select",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Disables the input.",
    },
    value: {
      controllable: true,
      type: "string",
      control: "text",
      description: "Current input value. Two-way bindable via `:=`.",
    },
    open: {
      controllable: true,
    },
    option: {
      "@": {
        value: {
          type: "string",
          control: "text",
          description: "Optional value; defaults to `text`.",
        },
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) will be passed through to `<@option>`.",
        },
      },
    },
    button: {
      "@": {
        ["<button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) will be passed through to `<@button>`.",
        },
      },
    },
    ["<input> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) will be passed through.",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode, {
  "aria-label": "Campaign",
  placeholder: "Choose a campaign",
});

export const Controllable = buildExtensionTemplate(
  ControllableTemplate,
  ControllableCode,
  { "aria-label": "Campaign", placeholder: "Choose a campaign" },
);

export const AsyncFiltering = buildExtensionTemplate(
  AsyncFilteringTemplate,
  AsyncFilteringCode,
  { placeholder: "Type a country name..." },
);
