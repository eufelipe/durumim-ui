import React from 'react';

import { fonts } from '@durumim-ui/design-tokens';

import { TokenVisualizerProps } from './types';

export const TokenVisualizer = ({
  tokens,
  title,
  description,
  renderSample,
  containerStyle,
  headerStyle = { color: '#4ba695' }
}: TokenVisualizerProps) => {
  return (
    <div style={{ 
      marginBottom: '32px', 
      fontFamily: fonts.default,
      ...containerStyle 
    }}>
      {title && <h3 style={{ 
        marginBottom: '12px', 
        fontFamily: fonts.heading,
        fontWeight: 600,
        ...headerStyle 
      }}>{title}</h3>}
      
      {description && <p style={{ 
        marginBottom: '16px', 
        color: '#f8f8f8',
        lineHeight: 1.5
      }}>{description}</p>}
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {Object.entries(tokens).map(([key, value]) => (
          <div key={key} style={{ 
            marginBottom: '16px',
            backgroundColor: '#242424',
            borderRadius: '4px',
            padding: '16px',
            minWidth: '180px'
          }}>
            <div style={{ marginBottom: '8px' }}>{renderSample(key, value)}</div>
            <div style={{ 
              fontWeight: 'bold', 
              color: '#f8f8f8',
              marginBottom: '4px'
            }}>{key}</div>
            <div style={{ 
              fontSize: '14px', 
              color: '#f8f8f8', 
              opacity: 0.8,
              fontFamily: fonts.mono
            }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}; 