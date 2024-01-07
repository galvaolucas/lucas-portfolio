import { IAuthUser, IUser } from '@/global/types';
import React, { Dispatch, SetStateAction } from 'react';

interface IAuthContext {
  user: IAuthUser | undefined
  login: (user: IAuthUser) => void
  logout: () => void
}

export const AuthContext = React.createContext<IAuthContext | null>(null);
