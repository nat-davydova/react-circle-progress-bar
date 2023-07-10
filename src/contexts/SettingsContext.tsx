import React, { createContext, ReactElement, useReducer } from "react";

import {
  ISurfaceSettings,
  TStrokeLineCaps,
} from "../Components/CircleProgressBar/types.ts";
import { IAction, settingsReducer } from "../reducers/settingsReducer.ts";

import { initialSettings } from "./settings.consts.ts";

export interface ISettings {
  strokeWidth?: number;
  progressPercents: number;
  strokeLineCaps?: TStrokeLineCaps;
  textContent?: string;
  surface: ISurfaceSettings;
}

interface IContextProps {
  children: ReactElement | ReactElement[];
}

export const SettingsContext = createContext<ISettings>(initialSettings);
export const SettingsDispatchContext =
  createContext<React.Dispatch<IAction> | null>(null);

export const SettingsProvider = ({ children }: IContextProps) => {
  const [state, dispatch] = useReducer(settingsReducer, initialSettings);

  return (
    <SettingsContext.Provider value={state}>
      <SettingsDispatchContext.Provider value={dispatch}>
        {children}
      </SettingsDispatchContext.Provider>
    </SettingsContext.Provider>
  );
};
