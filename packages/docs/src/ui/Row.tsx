import React from 'react';

type RowProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Row = ({ children, style = {} }: RowProps) => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'row', 
    gap: '16px',
    flexWrap: 'wrap',
    marginBottom: '24px',
    ...style
  }}>
    {children}
  </div>
);