import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

export default {
  title: "media/evo-3d-viewer",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  // Descriptions, types, required-ness and defaults come from the JSDoc on
  // the component's Input type via docgen; only controls that can't be
  // inferred from the type and passthrough notes live here.
  argTypes: {
    // `src` is inherited from `Partial<ModelViewerElement>` (node_modules),
    // so docgen does not list it — keep its docs here.
    src: {
      control: "text",
      description: "The asset to load",
    },
    a11yLoadingText: {
      table: {
        category: "Accessibility",
      },
    },
    onLoadError: {
      table: {
        category: "Events",
      },
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);
