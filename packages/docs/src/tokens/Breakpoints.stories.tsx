import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { breakpoints, colors } from "@durumim-ui/design-tokens";

import { Container, Description, Table, Title } from "../ui";

const meta: Meta = {
  title: "Design Tokens/Breakpoints",
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Breakpoints: Story = {
  render: () => {
    const descriptions: Record<string, string> = {
      xs: "Extra small devices (portrait mode smartphones)",
      sm: "Small devices (landscape mode smartphones)",
      md: "Medium devices (tablets)",
      lg: "Large devices (desktops)",
      xl: "Extra large devices (large desktops)",
      xxl: "Extra extra large devices (very large desktops)",
    };

    const headerStyle = { color: colors.secondary };

    const columns = [
      { id: "name", header: "Name" },
      { id: "value", header: "Value" },
      { id: "description", header: "Description" },
    ];

    const transformers: Record<string, (value: any, key: string) => any> = {
      description: (_, key) => descriptions[key] || "Generic breakpoint",
    };

    return (
      <Container>
        <Title title="Breakpoint" />

        <Description>
          Breakpoint tokens define the limits used in media queries to adapt the
          layout to different screen sizes in responsive designs.
        </Description>

        <Table
          tokens={breakpoints}
          columns={columns}
          transformers={transformers}
          headerStyle={headerStyle}
        />
      </Container>
    );
  },
};
