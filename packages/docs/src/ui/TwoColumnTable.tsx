import React from 'react';
import { Table } from './Table';

interface TwoColumnTableProps {
  tokens: Record<string, any>;
  title?: string;
  description?: string;
  valueTransformer?: (value: any, key: string) => any;
  headerStyle?: React.CSSProperties;
}

export const TwoColumnTable = ({
  tokens,
  title,
  description,
  valueTransformer,
  headerStyle,
}: TwoColumnTableProps) => {
  const columns = [
    { id: 'name', header: 'Nome' },
    { id: 'value', header: 'Valor' }
  ];

  const transformers: Record<string, (value: any, key: string) => any> = {};
  if (valueTransformer) {
    transformers.value = valueTransformer;
  }

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