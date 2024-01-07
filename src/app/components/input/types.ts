import { ReactNode } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface IInput {
  placeholder?: string;
  icon?: React.ReactElement | ReactNode;
  type?: string;
  formProperty: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  errorMessage?: string;
}
