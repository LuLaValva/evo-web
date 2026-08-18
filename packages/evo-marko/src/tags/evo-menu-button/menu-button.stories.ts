import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import EvoMenuButton, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import BadgedTemplate from "./examples/badged-items.marko";
import BadgedTemplateCode from "./examples/badged-items.marko?raw";
import IconTemplate from "./examples/icon-with-text.marko";
import IconTemplateCode from "./examples/icon-with-text.marko?raw";
import TypeaheadTemplate from "./examples/typeahead.marko";
import TypeaheadTemplateCode from "./examples/typeahead.marko?raw";
import SeparatorTemplate from "./examples/separator.marko";
import SeparatorTemplateCode from "./examples/separator.marko?raw";
import PrefixLabelTemplate from "./examples/prefix-label.marko";
import PrefixLabelTemplateCode from "./examples/prefix-label.marko?raw";
import FilterTemplate from "./examples/filter.marko";
import FilterTemplateCode from "./examples/filter.marko?raw";
import FooterTemplate from "./examples/footer.marko";
import FooterTemplateCode from "./examples/footer.marko?raw";

export default {
  title: "buttons/evo-menu-button",
  component: EvoMenuButton,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    open: {
      controllable: true,
    },
    variant: {
      options: ["button (default)", "form", "icon", "filter"],
      control: "select",
    },
    priority: {
      options: ["none (default)", "primary", "secondary", "delete", "tertiary"],
      control: "select",
    },
    size: {
      options: ["regular (default)", "large", "small"],
      control: "inline-radio",
    },
    split: {
      options: ["none (default)", "start", "end"],
      control: "inline-radio",
    },
    label: {
      "@": {
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
        },
      },
    },
    footerButton: {
      "@": {
        ["<evo-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-button>` component](?path=/docs/buttons-evo-button--docs) will be passed through to `<@footerButton>`",
        },
      },
    },
    strategy: {
      options: ["absolute", "fixed"],
      control: "inline-radio",
    },
    ["<evo-menu> attributes" as any]: {
      description:
        "All attributes and event handlers from [the `<evo-menu>` component](?path=/docs/building-blocks-evo-menu--docs) will be passed through",
    },
  },
} satisfies Meta<Input<any>>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);
export const IconText = buildExtensionTemplate(IconTemplate, IconTemplateCode);
export const Separator = buildExtensionTemplate(
  SeparatorTemplate,
  SeparatorTemplateCode,
);
export const Typeahead = buildExtensionTemplate(
  TypeaheadTemplate,
  TypeaheadTemplateCode,
);
export const Badged = buildExtensionTemplate(
  BadgedTemplate,
  BadgedTemplateCode,
);

export const Filter = buildExtensionTemplate(
  FilterTemplate,
  FilterTemplateCode,
);

export const Footer = buildExtensionTemplate(
  FooterTemplate,
  FooterTemplateCode,
);

export const PrefixLabel = buildExtensionTemplate(
  PrefixLabelTemplate,
  PrefixLabelTemplateCode,
);
