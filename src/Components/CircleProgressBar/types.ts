import React from "react";

export type TStrokeLineCaps = "round" | "square";

export interface ISurfaceSettings {
  show: boolean;
  bgColor?: string;
}

interface IGradientCoords {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export interface IProgressBarSettings {
  bgColor?: string;
  bgGradientPoints?: Record<string, string>;
  gradientCoords?: IGradientCoords;
}

export interface ITextLabelSettings {
  content: React.ReactElement | string;
  classname?: string;
}
