import { useState } from "react";
import { ILimitedInput } from "../types";

export const LimitedTextInput = ({
  placeholder,
  formProperty,
  required = false,
  register,
}: ILimitedInput): React.ReactElement => {
  const [inputLastingLength, setInputLastingLength] = useState(300);

  return (
    <div>
      <div className="w-full p-2 flex items-center gap-2 rounded-md bg-light-black border-2 border-gray hover:border-light text-base cursor-pointer">
        <textarea
          placeholder={required ? `${placeholder} *` : placeholder}
          className="bg-light-black text-light w-full resize-none p-1"
          maxLength={300}
          {...register(formProperty, { required })}
          onChange={e => setInputLastingLength(300 - Number(e.target.value?.length ?? 300))}
        />
      </div>
      <span className="text-light text-sm">Quantidade de caracteres restantes: {inputLastingLength}</span>
    </div>
  )
}