import React from 'react';
import { buttonRecipe, iconWrapperRecipe, ButtonVariants, IconWrapperVariants } from './styles.css';
import { CheckCircle, AlertCircle, AlertTriangle, Info, ChevronRight } from './Icons';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
}

export interface IconProps {
  size?: number;
  color?: string;
  semanticColor?: 'success' | 'danger' | 'warning' | 'info';
  position?: 'left' | 'right';
  children?: React.ReactNode;
}

// Mapa de ícones para cores semânticas
const iconsMap = {
  success: CheckCircle,
  danger: AlertCircle,
  warning: AlertTriangle,
  info: Info,
  default: ChevronRight,
};

// Componente de ícone
const Icon = ({ 
  size = 20, 
  position = 'left', 
  semanticColor, 
  children,
  ...props 
}: IconProps) => {
  const IconComponent = semanticColor ? iconsMap[semanticColor] : iconsMap.default;
  const hasChildren = Boolean(children);
  
  const iconSize = size;
  
  return (
    <span className={iconWrapperRecipe({ position, iconOnly: !hasChildren })}>
      <IconComponent size={iconSize} {...props} />
    </span>
  );
};

// Componente de botão principal
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    className,
    size = 'medium',
    variant = 'solid',
    semanticColor,
    disabled = false,
    iconOnly = false,
    icon,
    iconPosition = 'left',
    ...props
  }, ref) => {
    // Calcular as classes CSS usando a receita
    const buttonClass = buttonRecipe({ 
      size, 
      variant, 
      semanticColor, 
      disabled, 
      iconOnly,
    });
    
    // Combinar com classes customizadas
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
          <Icon position="left" semanticColor={semanticColor}>{icon}</Icon>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <Icon position="right" semanticColor={semanticColor}>{icon}</Icon>
        )}
      </button>
    );
  }
);

// Adicionar propriedade estática Icon ao componente Button
Button.displayName = 'Button';

// Estender o componente Button com o subcomponente Icon
Object.assign(Button, { Icon });

export default Button;