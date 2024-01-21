import { ReactNode } from 'react';
import { Control, ControllerProps, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface IBaseInput {
  formProperty: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  icon?: React.ReactElement | ReactNode;
  type?: string;
  required?: boolean;
  errors?: FieldErrors<FieldValues>;
  errorMessage?: string;
  className?: string
  loadedOptions?: string[];
}

export interface IInput extends IBaseInput {
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface ISearchInput extends IBaseInput {
  searchOptions: string[];
}

export interface IRadioButton extends IBaseInput {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
};

export interface ILimitedInput extends IBaseInput {};
