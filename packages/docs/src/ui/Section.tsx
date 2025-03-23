import React from "react";

export const Section = ({ title, children, style = {}, titleStyle = {} }) => (
  <div style={{ 
    marginBottom: '32px',
    ...style
  }}>
    <h3 style={{ marginBottom: '12px', ...titleStyle }}>{title}</h3>
    {children}
  </div>
);
