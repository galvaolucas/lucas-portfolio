import clsx from "clsx"
import { IRadioButton } from "../types"

export const RadioButton = (
 { placeholder,
  formProperty,
  required = false,
  register,
  errors,
  errorMessage,
  className,
  onClick,
}: IRadioButton): React.ReactElement => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row gap-2 items-center">
        <label className="text-base">{placeholder}</label>
        <input 
          className={clsx('toggle-button', className)}
          placeholder={placeholder} 
          type="checkbox" 
          {...register(formProperty, { required })}
          onClick={onClick}
        />
      </div>
    {errors?.[formProperty] && <div className="text-base text-red">{errorMessage}</div>}
    </div>
  )
}