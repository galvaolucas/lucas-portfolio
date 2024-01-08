import { IAuthUser, IUser } from '@/global/types';
import React, { Dispatch, SetStateAction } from 'react';

interface IUserContext {
  user: IAuthUser | undefined
  setUser: Dispatch<SetStateAction<IAuthUser | undefined>>
}

export const UserContext = React.createContext<IUserContext | undefined>(undefined);
