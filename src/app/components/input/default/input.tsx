import clsx from 'clsx';
import { IInput } from '../types';

export const Input = ({
  placeholder,
  icon,
  type = 'text',
  formProperty,
  required = false,
  register,
  errors,
  errorMessage,
  onBlur,
  className,
}: IInput): React.ReactElement => {
  return (
    <div className='w-full flex flex-col gap-1'>
      <div className={clsx("flex flex-grow items-center p-2 rounded-md bg-light-black border-2 border-gray hover:border-light text-base cursor-pointer", className)}>
          <div className='w-full flex flex-row gap-2 items-center'>
            {icon}
            <input
              {...register(formProperty, { required })}
              type={type}
              placeholder={required ? `${placeholder} *` : placeholder}
              className="bg-light-black text-light w-full"
              onBlur={(e) => {
                if (onBlur) onBlur(e);
                if (type === 'date') e.target.type = 'text';
              }}
              onFocus={type === 'date' ? (e) => e.target.type = 'date' : undefined}
            />
          </div>
        </div>
      {errors?.[formProperty] && <div className="text-base text-red">{errorMessage}</div>}
    </div>
  );
};
