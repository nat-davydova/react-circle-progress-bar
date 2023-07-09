import { ISettings } from "../contexts/SettingsContext.tsx";

export enum SettingsAction {
  CHANGE_STROKE_WIDTH = "change-stroke-width",
  CHANGE_PROGRESS_PERECENTS = "change-progress-percents",
  CHANGE_STROKE_LINE_CAPS = "change-stroke-line-caps",
}

export interface IAction {
  type: SettingsAction;
  payload: Partial<ISettings>;
}

export function settingsReducer(
  state: ISettings,
  action: IAction
): ISettings | never {
  const { type, payload } = action;
  const { strokeWidth, progressPercents, strokeLineCaps } = payload;

  switch (type) {
    case SettingsAction.CHANGE_STROKE_WIDTH:
      return {
        ...state,
        strokeWidth,
      };

    case SettingsAction.CHANGE_PROGRESS_PERECENTS:
      if (!progressPercents && progressPercents !== 0) {
        throw new Error(`Invalid Progress Percents value: ${progressPercents}`);
      }

      return {
        ...state,
        progressPercents,
      };

    case SettingsAction.CHANGE_STROKE_LINE_CAPS: {
      return {
        ...state,
        strokeLineCaps,
      };
    }

    default:
      throw new Error(`Unknown action type: ${type}`);
  }
}
