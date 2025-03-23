import React from "react";

interface DescriptionProps {
  children: React.ReactNode;
}

export const Description = ({ children }: DescriptionProps) => (
  <p
    style={{
      fontSize: "16px",
      lineHeight: 1.6,
      marginBottom: "32px",
      color: "#f8f8f8",
    }}
  >
    {children}
  </p>
);
