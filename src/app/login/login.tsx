'use client';
import { useState } from "react";
import { LoginStep } from "./steps/loginStep";
import { MainStep } from "./steps/mainStep";
import { CreateAccountStep } from "./steps/createAccountStep";
import { LoginContext } from "../contexts/loginContext";
import { IStepOptions } from "./types";

export const Login = (): React.ReactElement => {
  const [step, setStep] = useState<IStepOptions>('main');
  return (
    <LoginContext.Provider value={{ step, setStep }}>
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
        { step === 'main' && <MainStep />}
        { step === 'login' && <LoginStep />}
        { step === 'createAccount' && <CreateAccountStep />}
        <div className='absolute bottom-5 text-light text-sm'>Created By Lucas Galvão</div>
      </div>
    </LoginContext.Provider>
  );
};