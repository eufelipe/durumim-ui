export interface ResponsiveProperties {
  display?: string | { [key: string]: string };
  flexDirection?: string | { [key: string]: string };
  flexWrap?: string | { [key: string]: string };
  justifyContent?: string | { [key: string]: string };
  alignItems?: string | { [key: string]: string };
  alignSelf?: string | { [key: string]: string };
  gap?: string | { [key: string]: string };
  margin?: string | { [key: string]: string };
  marginTop?: string | { [key: string]: string };
  marginRight?: string | { [key: string]: string };
  marginBottom?: string | { [key: string]: string };
  marginLeft?: string | { [key: string]: string };
  padding?: string | { [key: string]: string };
  paddingTop?: string | { [key: string]: string };
  paddingRight?: string | { [key: string]: string };
  paddingBottom?: string | { [key: string]: string };
  paddingLeft?: string | { [key: string]: string };
  width?: string | { [key: string]: string };
  height?: string | { [key: string]: string };
  minWidth?: string | { [key: string]: string };
  minHeight?: string | { [key: string]: string };
  maxWidth?: string | { [key: string]: string };
  maxHeight?: string | { [key: string]: string };
  fontSize?: string | { [key: string]: string };
  fontWeight?: string | number | { [key: string]: string | number };
  textAlign?: string | { [key: string]: string };
  lineHeight?: string | { [key: string]: string };
  borderRadius?: string | { [key: string]: string };
  boxShadow?: string | { [key: string]: string };
  opacity?: string | { [key: string]: string };
  overflow?: string | { [key: string]: string };
  position?: string | { [key: string]: string };
}

export interface ColorProperties {
  color?: string | { [key: string]: string };
  backgroundColor?: string | { [key: string]: string };
  borderColor?: string | { [key: string]: string };
}

export interface ShorthandProperties {
  m?: string | { [key: string]: string };
  mt?: string | { [key: string]: string };
  mr?: string | { [key: string]: string };
  mb?: string | { [key: string]: string };
  ml?: string | { [key: string]: string };
  mx?: string | { [key: string]: string };
  my?: string | { [key: string]: string };
  p?: string | { [key: string]: string };
  pt?: string | { [key: string]: string };
  pr?: string | { [key: string]: string };
  pb?: string | { [key: string]: string };
  pl?: string | { [key: string]: string };
  px?: string | { [key: string]: string };
  py?: string | { [key: string]: string };
  flex?: string | { [key: string]: string };
}

export type SprinklesProps = ResponsiveProperties & ColorProperties & ShorthandProperties; 