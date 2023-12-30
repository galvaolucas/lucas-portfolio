import clsx from "clsx";
import { ITypography } from "../types";
import { twMerge } from "tailwind-merge";

export const H2 = ({ children, textColor = 'text-light-black', className }: ITypography): React.ReactElement => {
  return <h2 className={twMerge(clsx('text-lg font-bold', textColor, className))}>{children}</h2>;
};