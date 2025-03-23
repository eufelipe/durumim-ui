import React from 'react';
import { ThemeProviderProps } from './types';

export const ThemeProvider = ({ 
  children, 
  darkMode = true 
}: ThemeProviderProps) => {
  const theme = {
    backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
    color: darkMode ? '#ffffff' : '#333333',
  };

  return (
    <div style={{
      backgroundColor: theme.backgroundColor,
      color: theme.color,
      padding: '32px',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
    }}>
      {children}
    </div>
  );
}; 