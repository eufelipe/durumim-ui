import React from 'react';
import { buttonRecipe, iconWrapperRecipe, ButtonVariants } from './styles.css';
import { CheckCircle, AlertCircle, AlertTriangle, Info, ChevronRight } from './Icons';

type ButtonBaseProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;

export interface ButtonProps extends ButtonBaseProps, ButtonVariants {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
  fullWidth?: boolean;
}

export type SemanticColorType = 'default' | 'success' | 'danger' | 'warning' | 'info';

export interface IconProps {
  size?: number;
  color?: string;
  semanticColor?: SemanticColorType;
  position?: 'left' | 'right';
  iconOnly?: boolean;
  children?: React.ReactNode;
}

const iconsMap = {
  success: CheckCircle,
  danger: AlertCircle,
  warning: AlertTriangle,
  info: Info,
  default: ChevronRight,
};

const Icon = ({
  size = 20,
  position = 'left',
  semanticColor,
  iconOnly = false,
  children,
  ...props
}: IconProps) => {
  const IconComponent = semanticColor ? iconsMap[semanticColor] : iconsMap.default;

  const iconSize = size;

  return (
    <span className={iconWrapperRecipe({ position })}>
      <IconComponent size={iconSize} {...props} />
    </span>
  );
};

interface ButtonComponent
  extends React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
  > {
  Icon: React.FC<IconProps>;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    children,
    className,
    size = 'medium',
    variant = 'solid',
    color = 'default',
    disabled = false,
    iconOnly: iconOnlyProp,
    icon,
    iconPosition = 'left',
    fullWidth = false,
    ...props
  }, ref) => {
    const hasChildren = Boolean(children);
    const iconOnly = iconOnlyProp ?? (Boolean(icon) && !hasChildren);

    const buttonClass = buttonRecipe({
      size,
      variant,
      color,
      disabled,
      iconOnly,
      fullWidth,
    });

    const combinedClassName = className
      ? `${buttonClass} ${className}`
      : buttonClass;

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <Icon position="left" semanticColor={color as SemanticColorType} iconOnly={iconOnly}>{icon}</Icon>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <Icon position="right" semanticColor={color as SemanticColorType} iconOnly={iconOnly}>{icon}</Icon>
        )}
      </button>
    );
  }
) as ButtonComponent;

Button.displayName = 'Button';
Button.Icon = Icon;

export default Button;