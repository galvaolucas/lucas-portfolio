import { twMerge } from 'tailwind-merge';
import { IButton } from './types';
import clsx from 'clsx';
import { ButtonVariants } from './styles';

export const Button = ({
  label,
  onClick,
  disabled,
  className,
  type = 'button',
  variant = 'outlined',
}: IButton): React.ReactElement => {
  const buttonStyle = ButtonVariants[variant];
  return (
    <button
      type={type}
      className={twMerge(
        clsx(
          'w-36 md:w-full text-sm md:text-base p-2 font-semibold transition hover:duration-500 rounded-md cursor-pointer',
          buttonStyle,
          className,
        ),
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
