import React from "react";

import { TStrokeLineCaps } from "../Components/CircleProgressBar/types.ts";
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

export interface IStrokeLineCapsProps extends IDispatch {
  strokeLineCapsType: TStrokeLineCaps;
}

export interface ITextContentProps extends IDispatch {
  textContent: string;
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

export function onChangeStrokeLineCaps({
  strokeLineCapsType,
  dispatch,
}: IStrokeLineCapsProps) {
  dispatch({
    type: SettingsAction.CHANGE_STROKE_LINE_CAPS,
    payload: {
      strokeLineCaps: strokeLineCapsType,
    },
  });
}

export function onChangeTextContent({
  textContent,
  dispatch,
}: ITextContentProps) {
  dispatch({
    type: SettingsAction.CHANGE_TEXT_CONTENT,
    payload: {
      textContent,
    },
  });
}
