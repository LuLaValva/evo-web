import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Pagination, { type Input } from "./index.marko";
import BasicLinksTemplate from "./examples/basic-links.marko";
import BasicLinksCode from "./examples/basic-links.marko?raw";
import ButtonsTemplate from "./examples/buttons.marko";
import ButtonsCode from "./examples/buttons.marko?raw";
import InteractiveTemplate from "./examples/buttons-interactive.marko";
import InteractiveCode from "./examples/buttons-interactive.marko?raw";
import ManyItemsTemplate from "./examples/many-items.marko";
import ManyItemsCode from "./examples/many-items.marko?raw";

export default {
  title: "navigation & disclosure/evo-pagination",
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    a11yCurrentText: {
      control: "text",
    },
    a11yHeadingTag: {
      control: "text",
    },
    item: {
      "@": {
        ["<button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) when `href` is present)",
        },
      },
    },
    prev: {
      "@": {
        ["<evo-icon-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@prev>`",
        },
      },
    },
    next: {
      "@": {
        ["<evo-icon-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@next>`",
        },
      },
    },
    variant: {
      control: "inline-radio",
    },
    ["<nav> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<nav>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Links = buildExtensionTemplate(BasicLinksTemplate, BasicLinksCode);

export const Buttons = buildExtensionTemplate(ButtonsTemplate, ButtonsCode);

export const Interactive = buildExtensionTemplate(
  InteractiveTemplate,
  InteractiveCode,
);

export const ManyItems = buildExtensionTemplate(
  ManyItemsTemplate,
  ManyItemsCode,
);
