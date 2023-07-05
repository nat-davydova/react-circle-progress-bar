import { createContext, ReactElement, useReducer } from "react";

import { settingsReducer } from "../reducers/settingsReducer.ts";

export interface ISettings {
  strokeWidth: number;
}

interface IContextProps {
  children: ReactElement | ReactElement[];
}

const initialSettings: ISettings = {
  strokeWidth: 6,
};

export const SettingsContext = createContext<ISettings>(initialSettings);

export const SettingsProvider = ({ children }: IContextProps) => {
  const [state] = useReducer(settingsReducer, initialSettings);

  return (
    <SettingsContext.Provider value={state}>
      {children}
    </SettingsContext.Provider>
  );
};
