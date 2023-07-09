import React from "react";

import { IAction, SettingsAction } from "../reducers/settingsReducer.ts";

export interface IDispatch {
  dispatch: React.Dispatch<IAction>;
}

export interface IStrokeWidthProps extends IDispatch {
  width: string;
}

export interface IProgressPercentsProps extends IDispatch {
  progressPercents: number;
}

export function onChangeStrokeWidth({ width, dispatch }: IStrokeWidthProps) {
  dispatch({
    type: SettingsAction.CHANGE_STROKE_WIDTH,
    payload: {
      strokeWidth: Number(width),
    },
  });
}

export function onChangeProgressPercents({
  progressPercents,
  dispatch,
}: IProgressPercentsProps) {
  dispatch({
    type: SettingsAction.CHANGE_PROGRESS_PERECENTS,
    payload: {
      progressPercents: Number(progressPercents),
    },
  });
}
