import { createContext, ReactElement, useState } from "react";

interface ISettings {
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
  const [settings, setSettings] = useState(initialSettings);

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};
