import { IStepOptions } from '@/global/types';
import React, { Dispatch, SetStateAction } from 'react';

interface ILoginContext {
  step: IStepOptions
  setStep: Dispatch<
    SetStateAction<'login' | 'main' | 'forgetPassword' | 'createAccount'>
  >
}

export const LoginContext = React.createContext<ILoginContext | null>(null);
