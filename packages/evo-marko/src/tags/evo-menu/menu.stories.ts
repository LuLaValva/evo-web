import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Menu, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import RadioTemplate from "./examples/radio.marko";
import RadioTemplateCode from "./examples/radio.marko?raw";
import CheckboxTemplate from "./examples/checkbox.marko";
import CheckboxTemplateCode from "./examples/checkbox.marko?raw";
import BadgedTemplate from "./examples/badged.marko";
import BadgedTemplateCode from "./examples/badged.marko?raw";
import FilterTemplate from "./examples/filter.marko";
import FilterTemplateCode from "./examples/filter.marko?raw";
import SpritesTemplate from "./examples/sprites.marko";
import SpritesTemplateCode from "./examples/sprites.marko?raw";
import TypeaheadTemplate from "./examples/typeahead.marko";
import TypeaheadTemplateCode from "./examples/typeahead.marko?raw";
import SeparatorTemplate from "./examples/separator.marko";
import SeparatorTemplateCode from "./examples/separator.marko?raw";
import FooterTemplate from "./examples/footer.marko";
import FooterTemplateCode from "./examples/footer.marko?raw";

export default {
  title: "building blocks/evo-menu",
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    selected: {
      controllable: true,
      table: { type: { summary: "number | string | (number | string)[]" } },
    },
    item: {
      "@": {
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@item>`",
        },
      },
    },
    variant: {
      control: "inline-radio",
    },
    footerButton: {
      "@": {
        ["<evo-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-button>` component](?path=/docs/buttons-evo-button--docs) will be passed through to `<@footerButton>`",
        },
      },
    },
    ["<span> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
    },
  },
} satisfies Meta<Input<any>>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const SingleSelect = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    selected: 0,
  },
);
export const MultiSelect = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    selected: [0],
  },
);

export const Typeahead = buildExtensionTemplate(
  TypeaheadTemplate,
  TypeaheadTemplateCode,
);

export const Badged = buildExtensionTemplate(
  BadgedTemplate,
  BadgedTemplateCode,
);

export const Sprites = buildExtensionTemplate(
  SpritesTemplate,
  SpritesTemplateCode,
);

export const Footer = buildExtensionTemplate(
  FooterTemplate,
  FooterTemplateCode,
);
