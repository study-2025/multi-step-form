import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { colorStyles } from '../../config/colorStyles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: ColorKey;
  fullWidth?: boolean;
  className?: string;
}

const Button = ({
  color = 'default',
  fullWidth = false,
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  const currentColor = colorStyles[color] || colorStyles.default;

  const btnClass = twMerge(
    'py-2 px-4 rounded transition-colors duration-200 focus:outline-none text-[15px] h-10',
    fullWidth ? 'w-full' : '',
    disabled ? currentColor.disabled : currentColor.base,
    !disabled && currentColor.hover,
    className
  );

  return (
    <button className={btnClass} {...rest} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
