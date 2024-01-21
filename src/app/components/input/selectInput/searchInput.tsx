import { useState, useRef, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ISearchInput } from "../types";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

export const SearchInput = ({
  placeholder,
  icon,
  formProperty,
  required = false,
  register,
  errors,
  errorMessage,
  searchOptions,
  className,
  loadedOptions,
}: ISearchInput): React.ReactElement => {
  const [options, setOptions] = useState<string[]>(loadedOptions ?? []);
  const [selected, setSelected] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const listRef = useRef<HTMLDivElement>(null);
  const form = useFormContext();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setSelected(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (options?.length > 0) {
      form.setValue(formProperty, [...options], { shouldDirty: true });
    }
  }, [options]);

  return (
    <div className={clsx("flex w-full flex-col gap-2", className)}>
      <div 
        className="relative p-2 flex flex-col items-center gap-2 rounded-md bg-light-black border-2 border-gray hover:border-light text-base cursor-pointer"
      >
        {icon}
        <input
          id={`input-${formProperty}`}
          autoComplete="off"
          list={formProperty}
          type='search'
          placeholder={required ? `${placeholder} *` : placeholder}
          className="bg-light-black text-light w-full"
          {...register(formProperty, { required })}
          onSelect={() => setSelected(true)}
          value={value}
          onChange={(e) => { 
            setValue(e.target.value)
          }}
        />
        {selected && 
          <div 
            ref={listRef}
            className="absolute top-10 rounded-md bg-gray w-full h-36 overflow-y-scroll"
          >
            <ul className="text-light h-fit">
              {searchOptions.map((option, index) => {
                if (option.includes(value)) {
                  return (
                    <li 
                      key={index} 
                      className="cursor-pointer hover:bg-dark-gray p-2" 
                      onClick={(e) => { 
                        if (searchOptions.find(item => item === e.currentTarget.innerText) && !options.find(item => item === e.currentTarget.innerText)) {
                          setSelected(false)
                          setOptions([...options, e.currentTarget.innerText])
                          setValue('')
                        }
                      }}>{option}</li>
                  )
                }
              })}
            </ul>
          </div>
        }
      </div>
      {errors?.[formProperty] && <div className="text-base text-red">{errorMessage}</div>}
      <div className={clsx({ 'hidden': !options.length }, "w-full flex flex-row overflow-x-auto gap-2 p-2")}>
        {options.map((option, index) => (
          <div key={index} className="h-fit flex flex-row items-center gap-2 border border-light rounded-lg p-2 bg-gray text-sm">
            <span className="text-light w-max">{option}</span>
            <MdOutlineClose className='text-light cursor-pointer' onClick={() => {
              setOptions(options.filter(item => item !== option))
            }} />
          </div>
        ))}
      </div>
    </div>
  )
}