import Readme from "./README.md";
import { type Meta } from "@storybook/marko";
import FilePreviewCard, { type Input } from "./index.marko";
import { buildExtensionTemplate } from "../../common/storybook/utils";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import SeeMoreTemplate from "./examples/seeMore.marko";
import SeeMoreTemplateCode from "./examples/seeMore.marko?raw";

export default {
  title: "media/evo-file-preview-card",
  component: FilePreviewCard,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    as: {
      control: "text",
    },
    file: {
      control: { type: "file" },
    },
    status: {
      options: ["undefined (default)", "uploading"],
      control: "inline-radio",
    },
    deleteAction: {
      "@": {
        ["<evo-icon-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@deleteAction>`",
        },
      },
    },
    menuActions: {
      control: "object",
    },
    action: {
      "@": {
        ["<evo-icon-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@action>`",
        },
      },
    },
    seeMoreAction: {
      "@": {
        ["<evo-icon-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@seeMoreAction>`",
        },
      },
    },
    cancelAction: {
      "@": {
        ["<evo-icon-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@cancelAction>`",
        },
      },
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Uploading = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    file: {
      name: "file-name.jpg",
      type: "image/jpeg",
    },
    status: "uploading",
  },
);
export const Image = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    file: {
      name: "file-name.jpg",
      type: "image/jpeg",
      src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
    },
  },
);

export const Video = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    file: {
      name: "file-name.mov",
      type: "video/quicktime",
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    },
    labelText: "10:30:21",
  },
);

export const MultipleMenuActions = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    file: {
      name: "file-name.jpg",
      type: "image/jpeg",
      src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
    },
    menuActions: [
      {
        event: "edit",
        label: "Edit",
      },
      {
        event: "download",
        label: "Download",
      },
    ],
  },
);

export const Document = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    file: {
      name: "file-name.csv",
      type: "text/csv",
    },
    footerTitle: "file-name.csv",
    footerSubtitle:
      "English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic",
    menuActions: [
      {
        event: "edit",
        label: "Edit",
      },
    ],
  },
);

export const SeeMore = buildExtensionTemplate(
  SeeMoreTemplate,
  SeeMoreTemplateCode,
);
