import clsx from 'clsx';
import { ITypography } from '../types';
import { twMerge } from 'tailwind-merge';

export const H3 = ({
  children,
  textColor = 'text-light-black',
  className,
}: ITypography): React.ReactElement => {
  return (
    <h3 className={twMerge(clsx('text-base font-bold', textColor, className))}>
      {children}
    </h3>
  );
};
