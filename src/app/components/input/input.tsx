import { IInput } from './types';

export const Input = ({
  placeholder,
  icon,
  type = 'text',
  formProperty,
  required = false,
  register,
  errors,
  errorMessage,
}: IInput): React.ReactElement => {
  return (
    <div>
      <div className="w-80 p-2 flex items-center gap-2 rounded-md bg-light-black border-2 hover:border-gray focus-within:border-gray text-base cursor-pointer">
        {icon}
        <input
          type={type}
          placeholder={required ? `${placeholder} *` : placeholder}
          className="bg-light-black text-light w-full"
          {...register(formProperty, { required })}
        />
      </div>
      {errors?.[formProperty] && <div className="text-base text-red">{errorMessage}</div>}
    </div>
  );
};
