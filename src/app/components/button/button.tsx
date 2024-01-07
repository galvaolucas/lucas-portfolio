import { twMerge } from 'tailwind-merge';
import { IButton } from './types';
import clsx from 'clsx';

export const Button = ({
  label,
  onClick,
  disabled,
  className,
  type = 'button',
}: IButton): React.ReactElement => {
  return (
    <button
      type={type}
      className={twMerge(
        clsx(
          'w-36 md:w-full text-sm md:text-md p-2 font-semibold transition hover:duration-500 rounded-md border border-light text-light bg-dark-black hover:bg-light hover:text-dark-black cursor-pointer',
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
