import React from 'react';
import { TokenVisualizer } from './TokenVisualizer';
import { ColorSwatchesProps } from './types';

export const ColorSwatches = ({ 
  colors, 
  title, 
  description, 
  style, 
  headerStyle 
}: ColorSwatchesProps) => {
  return (
    <TokenVisualizer
      tokens={colors}
      title={title}
      description={description}
      containerStyle={style}
      headerStyle={headerStyle}
      renderSample={(key, value) => (
        <div style={{
          backgroundColor: value,
          height: '60px',
          width: '100%',
          borderRadius: '4px',
          border: '1px solid #333'
        }} />
      )}
    />
  );
}; 