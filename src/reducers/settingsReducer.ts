import { ISettings } from "../contexts/SettingsContext.tsx";

export enum SettingsAction {
  CHANGE_STROKE_WIDTH = "change-stroke-width",
}

export interface IAction {
  type: SettingsAction;
  payload: Partial<ISettings>;
}

export function settingsReducer(state: ISettings, action: IAction) {
  const { type, payload } = action;

  switch (type) {
    case SettingsAction.CHANGE_STROKE_WIDTH:
      return {
        ...state,
        strokeWidth: payload.strokeWidth,
      };

    default:
      throw new Error(`Unknown action type: ${type}`);
  }
}
