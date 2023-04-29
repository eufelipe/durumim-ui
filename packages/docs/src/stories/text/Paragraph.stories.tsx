import type { Meta, StoryObj } from "@storybook/react";

import {
  Paragraph as ParagraphComponent,
  ParagraphProps,
} from "@durumim-ui/react";

export default {
  title: "Typography/Text",
  component: ParagraphComponent,

  args: {
    children:
      "De onde nem tempo, nem espaço, que a força mande coragem, pra gente te dar carinho, durante toda a viagem, que realizas no nada, através do qual carregas, o nome da tua carne",
  },
  argTypes: {},
} as Meta<ParagraphProps>;

export const Paragraph: StoryObj<ParagraphProps> = {
  parameters: {},
};
