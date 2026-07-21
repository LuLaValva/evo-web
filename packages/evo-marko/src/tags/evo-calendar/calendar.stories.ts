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
    // `getDayHref`, `a11yTodayText`, `a11yDisabledText` and `a11ySelectedText`
    // exist only on `StaticInput`, and docgen only lists props common to every
    // member of the `Input` union — so their docs stay here.
    getDayHref: {
      control: false,
      description:
        "Function `(iso: DayISO) => string | false | null | undefined` that returns an href for each day when `selectMode` is not set. A falsy return renders a `<span>`.",
    },
    a11yNavigateText: {
      control: false,
    },
    a11yTodayText: {
      type: "string",
      control: "text",
      description:
        "Clipped text appended to today's cell for screen readers (non-interactive calendars).",
      table: { defaultValue: { summary: "today" } },
    },
    a11yDisabledText: {
      type: "string",
      control: "text",
      description:
        "Clipped text appended to disabled cells for screen readers (non-interactive calendars).",
      table: { defaultValue: { summary: "disabled" } },
    },
    a11ySelectedText: {
      type: "string",
      control: "text",
      description:
        "Clipped text appended to selected cells for screen readers (non-interactive calendars).",
      table: { defaultValue: { summary: "selected" } },
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
