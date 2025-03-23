import React from 'react';
import { Table } from './Table';

interface ThreeColumnTableProps {
  tokens: Record<string, any>;
  title?: string;
  description?: string;
  baseFontSize?: number;
  headerStyle?: React.CSSProperties;
}

export const ThreeColumnTable = ({
  tokens,
  title,
  description,
  baseFontSize = 16,
  headerStyle,
}: ThreeColumnTableProps) => {
  const columns = [
    { id: 'name', header: 'Nome' },
    { id: 'value', header: 'Valor' },
    { id: 'pixels', header: 'Pixels' }
  ];

  const transformers: Record<string, (value: any, key: string) => any> = {
    pixels: (value) => {
      if (typeof value === 'string' && value.includes('rem')) {
        return `${Number(value.replace('rem', '')) * baseFontSize}px`;
      }
      return value;
    }
  };

  return (
    <Table
      tokens={tokens}
      columns={columns}
      title={title}
      description={description}
      transformers={transformers}
      headerStyle={headerStyle}
    />
  );
}; 