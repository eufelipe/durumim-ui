import type { Meta, StoryObj } from "@storybook/react";

import { Headline, HeadlineProps } from "@durumim-ui/react";

export default {
  title: "Typography/Headline",
  component: Headline,

  args: {
    children: "Nature.",
  },
} as Meta<HeadlineProps>;

export const Default: StoryObj<HeadlineProps> = {
  parameters: {
    docs: {
      description: {
        story:
          "The `Headline` component has been configured to use the `h2` tag by default, as usually only one `h1` is needed per page. If it is necessary to use the `h1`, it is possible to make the change using the `as` property.",
      },
    },
  },
};

export const Headline1: StoryObj<HeadlineProps> = {
  args: {
    children: "Headline 1",
    as: "h1",
    size: "2xl",
  },
  parameters: {
    docs: {
      description: {
        story:
          "It is also possible to use the already configured component `<Headline1>lorem ipsum</Headline1>`",
      },
    },
  },
};

export const Headline2: StoryObj<HeadlineProps> = {
  args: {
    children: "Headline 2",
    size: "xl",
  },
  parameters: {
    docs: {
      description: {
        story:
          "It is also possible to use the already configured component `<Headline2>lorem ipsum</Headline2>`",
      },
    },
  },
};

export const Headline3: StoryObj<HeadlineProps> = {
  args: {
    children: "Headline 3",
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story:
          "It is also possible to use the already configured component `<Headline3>lorem ipsum</Headline3>`",
      },
    },
  },
};

export const Headline4: StoryObj<HeadlineProps> = {
  args: {
    children: "Headline 4",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story:
          "It is also possible to use the already configured component `<Headline4>lorem ipsum</Headline4>`",
      },
    },
  },
};

export const Headline5: StoryObj<HeadlineProps> = {
  args: {
    children: "Headline 5",
    size: "sm",
  },
  parameters: {
    docs: {
      description: {
        story:
          "It is also possible to use the already configured component `<Headline5>lorem ipsum</Headline5>`",
      },
    },
  },
};
