import { ISettings } from "../contexts/SettingsContext.tsx";

export enum SettingsAction {}

export interface IAction {
  type: SettingsAction;
  payload: {};
}

export function settingsReducer(state: ISettings, action: IAction) {
  const { type, payload } = action;

  switch (type) {
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
}
