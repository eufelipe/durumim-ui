import React from "react";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
};

export const Section = ({ title, children, style = {}, titleStyle = {} }: SectionProps) => (
  <div style={{ 
    marginBottom: '50px',
    ...style
  }}>
    <h3 style={{ marginBottom: '12px', ...titleStyle }}>{title}</h3>
    {children}
  </div>
);
