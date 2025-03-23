export interface ColumnDefinition {
  id: string;
  header: string;
}

export interface TokenTableProps {
  tokens: Record<string, any>;
  columns: ColumnDefinition[];
  title?: string;
  description?: string;
  transformers?: Record<string, (value: any, key: string) => any>;
  style?: any;
  headerStyle?: any;
}

export interface TwoColumnTableProps {
  tokens: Record<string, any>;
  title?: string;
  description?: string;
  valueTransformer?: (value: any, key: string) => any;
  style?: any;
  headerStyle?: any;
}

export interface ThreeColumnTableProps {
  tokens: Record<string, any>;
  title?: string;
  description?: string;
  baseFontSize?: number;
  style?: any;
  headerStyle?: any;
}

export interface TokenVisualizerProps {
  tokens: Record<string, any>;
  title?: string;
  description?: string;
  renderSample: (key: string, value: any) => any;
  containerStyle?: any;
  headerStyle?: any;
}

export interface ColorSwatchesProps {
  colors: Record<string, string>;
  title?: string;
  description?: string;
  style?: any;
  headerStyle?: any;
}

export interface ThemeProviderProps {
  children?: any;
  darkMode?: boolean;
}

export interface SectionProps {
  children: any;
  style?: any;
}

export interface RowProps {
  children: any;
  style?: any;
} 