import { ISidebarAreaOptions, IStepOptions } from '@/global/types';
import React, { Dispatch, SetStateAction } from 'react';

interface ISidebarContext {
  area: ISidebarAreaOptions
  setArea: Dispatch<
    SetStateAction<ISidebarAreaOptions>
  >
}

export const SidebarContext = React.createContext<ISidebarContext | null>(null);
