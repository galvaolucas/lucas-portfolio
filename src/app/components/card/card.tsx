import clsx from 'clsx';
import { ICard } from './types';

export const Card = ({
  backgroundColor = 'bg-light',
  children,
  className,
}: ICard): React.ReactElement => {
  return (
    <div className={clsx('h-fit rounded-lg p-4', backgroundColor, className)}>
      {children}
    </div>
  );
};
