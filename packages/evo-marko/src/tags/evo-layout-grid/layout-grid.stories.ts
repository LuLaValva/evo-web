import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import LayoutGrid, { type Input } from "./index.marko";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import WithCustomColumnsTemplate from "./examples/with-custom-columns.marko";
import WithCustomColumnsTemplateCode from "./examples/with-custom-columns.marko?raw";

export default {
  title: "layout/evo-layout-grid",
  component: LayoutGrid,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    columns: {
      control: "object",
    },
    item: {
      "@": {
        ["<li> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<li>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li) will be passed through",
        },
      },
    },
    ["<ul> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<ul>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    columns: {
      min: 1,
      xs: 2,
      sm: 3,
      md: 4,
      lg: 6,
      xl: 8,
      xl2: 10,
      xl3: 12,
      xl4: 14,
    },
  },
);

export const WithCustomColumns = buildExtensionTemplate(
  WithCustomColumnsTemplate,
  WithCustomColumnsTemplateCode,
  {
    columns: {
      min: 2,
      xs: 3,
      sm: 4,
      md: 6,
      lg: 8,
    },
  },
);
