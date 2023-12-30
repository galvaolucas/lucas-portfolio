import clsx from "clsx";
import { ITypography } from "../types";
import { twMerge } from "tailwind-merge";

export const H1 = ({ children, textColor = 'text-light-black', className }: ITypography): React.ReactElement => {
  return <h1 className={twMerge(clsx('text-xl font-bold', textColor, className))}>{children}</h1>;
};