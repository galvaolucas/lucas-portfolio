import React, { Dispatch, SetStateAction } from "react";
import { IStepOptions } from "../login/types";

interface ILoginContext {
  step: IStepOptions,
  setStep: Dispatch<SetStateAction<"login" | "main" | "forgetPassword" | "createAccount">>
}

export const LoginContext = React.createContext<ILoginContext | null>(null);