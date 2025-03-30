// Button.tsx
import React from 'react';

// Define button types with their properties
export type ButtonType = 'primary' | 'secondary' | 'tertiary';

interface ButtonVariant {
  base: string;
  hover: string;
  size: string;
}

const buttonVariants: Record<ButtonType, ButtonVariant> = {
  primary: {
    base: 'bg-blue-600 text-white',
    hover: 'hover:bg-blue-700',
    size: 'px-6 py-3 text-lg',
  },
  secondary: {
    base: 'bg-gray-200 text-gray-800',
    hover: 'hover:bg-gray-300',
    size: 'px-5 py-2 text-md',
  },
  tertiary: {
    base: 'bg-green-500 text-white',
    hover: 'hover:bg-green-600',
    size: 'px-4 py-2 text-sm',
  },
};

interface ButtonProps {
  name: string;
  link: string;
  type: ButtonType;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, type, className = '', onClick }) => {
  const variant = buttonVariants[type];

  return (
    <button
    onClick={onClick}
    className={`
        rounded-md 
        font-medium 
        transition-colors 
        duration-300 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        focus:ring-blue-500
        ${variant.base}
        ${variant.hover}
        ${variant.size}
        ${className}
    `}
    >
    {name}
    </button>
  );
};

export default Button;