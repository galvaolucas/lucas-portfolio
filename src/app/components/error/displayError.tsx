'use client';

import { H3 } from "../typography/h3/h3";
import { IDisplayError } from "./types";
import { MdOutlineClose } from "react-icons/md";

export const DisplayError = ({ children }: IDisplayError): React.ReactElement => {
  return (
    <div className="flex flex-row items-center p-1 justify-between border border-red rounded-md">
      <H3 textColor="text-light">{children}</H3>
      <MdOutlineClose className='text-light' />
    </div>
  );
}