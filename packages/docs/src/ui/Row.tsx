import React from 'react';

export const Row = ({ children, style = {} }) => (
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