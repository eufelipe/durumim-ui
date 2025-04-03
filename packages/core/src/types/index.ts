export type SemanticColorType = 'default' | 'success' | 'danger' | 'warning' | 'info';
export type ElementPosition = 'left' | 'right' | 'top' | 'bottom';
export type ComponentSize = 'small' | 'medium' | 'large';
export type StyleVariant = 'solid' | 'outlined' | 'ghost' | 'link';
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface IHeadingBase {
  level: HeadingLevel;
  as?: unknown;
}

export interface IFullWidthProps {
  fullWidth?: boolean;
}

export interface IButtonBase extends IFullWidthProps {
  size?: ComponentSize;
  variant?: Extract<StyleVariant, 'solid' | 'outlined' | 'ghost'>;
  color?: SemanticColorType;
  disabled?: boolean;
  iconOnly?: boolean;
  icon?: unknown;
  iconPosition?: Extract<ElementPosition, 'left' | 'right'>;
}

export interface IIconComponent {
  (props: { size?: number; color?: string; [key: string]: unknown }): unknown;
}

export interface IIconProps {
  size?: number;
  color?: string;
  semanticColor?: SemanticColorType;
  position?: Extract<ElementPosition, 'left' | 'right'>;
  iconOnly?: boolean;
  children?: unknown;
}

export type IconsMap = Record<SemanticColorType, IIconComponent>;

export function createIconMap(implementation: {
  success: IIconComponent;
  danger: IIconComponent;
  warning: IIconComponent;
  info: IIconComponent;
  default: IIconComponent;
}): IconsMap {
  return implementation;
}