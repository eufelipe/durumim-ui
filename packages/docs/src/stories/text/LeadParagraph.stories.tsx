import type { Meta, StoryObj } from "@storybook/react";

import {
  LeadParagraph as LeadParagraphComponent,
  LeadParagraphProps,
} from "@durumim-ui/react";

export default {
  title: "Typography/Text",
  component: LeadParagraphComponent,

  args: {
    children: "Meu caro amigo",
  },
  argTypes: {},
} as Meta<LeadParagraphProps>;

export const LeadParagraph: StoryObj<LeadParagraphProps> = {
  parameters: {},
};
