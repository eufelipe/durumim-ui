import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div
    style={{
      padding: "32px",
      backgroundColor: "#121212",
      borderRadius: "8px",
      color: "#f8f8f8",
    }}
  >
    {children}
  </div>
);
