import { createContext } from "react";

interface ISettings {
  strokeWidth: number;
}

const initialSettings: ISettings = {
  strokeWidth: 6,
};

export const SettingsContext = createContext(initialSettings);
