import { shadows } from "@durumim-ui/design-tokens";
import React from "react";

import { Container, Description, Table, Title } from "../ui";

const ShadowsShowcase = ({ title, children }) => (
  <div
    style={{
      backgroundColor: "#E0E0E0",
      padding: "32px",
      borderRadius: "8px",
      marginBottom: "32px",
    }}
  >
    <h3 style={{ color: "#121212", marginBottom: "24px" }}>{title}</h3>
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      {children}
    </div>
  </div>
);

const ShadowExample = ({ name, shadow }) => (
  <div key={name}>
    <div
      style={{
        width: "120px",
        height: "80px",
        backgroundColor: "#FFFFFF",
        borderRadius: "4px",
        boxShadow: shadow,
        marginBottom: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#333",
      }}
    >
      {name}
    </div>
    <div
      style={{
        fontSize: "12px",
        textAlign: "center",
        color: "#121212",
      }}
    >
      {name}
    </div>
  </div>
);

const meta = {
  title: "Design Tokens/Shadows",
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

export const Shadows = () => {
  const useCases = {
    none: "Elements without shadow",
    xs: "Elements subtle like inactive buttons",
    sm: "Interactive elements, cards",
    md: "Cards in focus, hover buttons",
    lg: "Floating elements, dropdowns",
    xl: "Modals, dialogs",
    inset: "Pressed elements, active buttons",
  };

  return (
    <Container>
      <Title title="Shadow" />

      <Description
        description="Shadow tokens create depth and hierarchy in the interface. 
        They help establish relationships between elements and indicate interactive states."
      />

      <ShadowsShowcase title="Visualization of Shadows">
        {Object.entries(shadows).map(([key, value]) => (
          <ShadowExample key={key} name={key} shadow={value} />
        ))}
      </ShadowsShowcase>

      <Table
        tokens={shadows}
        columns={[
          { id: "name", header: "Name" },
          { id: "value", header: "Value" },
          { id: "useCase", header: "Recommended Use" },
        ]}
        title="Shadow Tokens"
        transformers={{
          useCase: (_, key) => useCases[key] || "Generic use case",
        }}
      />
    </Container>
  );
};
