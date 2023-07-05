import React from "react";

import { IAction, SettingsAction } from "../reducers/settingsReducer.ts";

export interface IStrokeWidthProps {
  width: string;
  dispatch: React.Dispatch<IAction>;
}

export function onChangeStrokeWidth({ width, dispatch }: IStrokeWidthProps) {
  dispatch({
    type: SettingsAction.CHANGE_STROKE_WIDTH,
    payload: {
      strokeWidth: Number(width),
    },
  });
}
