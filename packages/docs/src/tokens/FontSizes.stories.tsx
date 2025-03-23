import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { fontSizes, fonts } from "@durumim-ui/design-tokens";

import { Container, Description, Table, Title } from "../ui";

const meta: Meta = {
  title: "Design Tokens/FontSizes",
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj;

export const FontSizes: Story = {
  render: () => {
    const BASE_FONT_SIZE = 16;

    const fontSizeColumns = [
      { id: "name", header: "Name" },
      { id: "value", header: "Value" },
      { id: "pixels", header: "Pixels" },
      { id: "example", header: "Example" },
    ];

    const fontSizeTransformers: Record<
      string,
      (value: any, key: string) => any
    > = {
      pixels: (value) =>
        `${Number(value.replace("rem", "")) * BASE_FONT_SIZE}px`,
      example: (value) => (
        <span
          style={{
            fontFamily: fonts.default,
            fontSize: value,
            color: "#f8f8f8",
          }}
        >
          Example text
        </span>
      ),
    };

    return (
      <Container>
        <Title title="Font Sizes Tokens" />

        <Description>
          Font size tokens ensure consistent typography across the interface.
          These values define the size of text elements throughout your
          application.
        </Description>

        <Table
          tokens={fontSizes}
          columns={fontSizeColumns}
          transformers={fontSizeTransformers}
        />
      </Container>
    );
  },
};
