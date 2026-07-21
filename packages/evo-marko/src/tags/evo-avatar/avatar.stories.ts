import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import avatar, { type Input } from "./index.marko";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import imageTemplate from "./examples/image.marko";
import imageTemplateCode from "./examples/image.marko?raw";
import autoImageTemplate from "./examples/with-auto-placement.marko";
import autoImageTemplateCode from "./examples/with-auto-placement.marko?raw";
import signedOutTemplate from "./examples/signedout.marko";
import signedOutTemplateCode from "./examples/signedout.marko?raw";

export default {
  title: "graphics & icons/evo-avatar",
  component: avatar,
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
    content: {},
    color: {
      options: [
        "teal",
        "light-teal",
        "green",
        "lime",
        "yellow",
        "orange",
        "magenta",
        "pink",
      ],
      control: "select",
    },
    size: {
      options: ["32", "40", "48", "56", "64", "96", "128"],
      control: "select",
    },
    a11yText: {
      control: "text",
    },
    image: {
      "@": {
        ["<img> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native `<img>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) will be passed through to `<@image>`, except `alt`",
        },
      },
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through, except `role`",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    a11yText: "Signed in - as Elizabeth",
    username: "Elizabeth",
    color: "teal",
  },
);

export const WithImage = buildExtensionTemplate(
  imageTemplate,
  imageTemplateCode,
  {
    a11yText: "Signed in - as Doggy",
    username: "Doggy",
  },
);

export const WithAutoPlacement = buildExtensionTemplate(
  autoImageTemplate,
  autoImageTemplateCode,
  {
    a11yText: "Signed in - as Doggy",
    username: "Doggy",
  },
);

export const SignedOut = buildExtensionTemplate(
  signedOutTemplate,
  signedOutTemplateCode,
  {
    a11yText: "Signed out",
  },
);
