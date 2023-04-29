import type { Meta, StoryObj } from "@storybook/react";

import { Text as TextComponent, TextProps } from "@durumim-ui/react";

export default {
  title: "Typography/Text",
  component: TextComponent,

  args: {
    size: "md",
    children: (
      <span>
        Meu caro amigo, me perdoe, por favor, se eu não lhe faço uma visita, mas
        como agora apareceu um portador, mando notícias nessa fita. Aqui na
        terra tão jogando futebol, tem muito samba, muito choro e rock'n'roll,
        uns dias chove, noutros dias bate Sol, mas o que eu quero é lhe dizer
        que a coisa aqui tá preta. Muita mutreta pra levar a situação, que a
        gente vai levando de teimoso e de pirraça, E a gente vai tomando que
        também sem a cachaça, ninguém segura esse rojão
        <br />
        Meu caro amigo - Canção de Chico Buarque
      </span>
    ),
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Text: StoryObj<TextProps> = {
  parameters: {},
};
