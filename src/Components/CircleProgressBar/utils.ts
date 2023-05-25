import { CIRCLE_CENTER_COORD } from "./consts.ts";

interface IGetProgressSVGParams {
  strokeWidth: number;
  progressPercents: number;
}

export function getProgressSVGParams({
  strokeWidth,
  progressPercents,
}: IGetProgressSVGParams) {
  const radius = CIRCLE_CENTER_COORD - strokeWidth;
  const circleLength = 2 * Math.PI * radius;
  const progressBarLength = (circleLength * progressPercents) / 100;
  const offset = circleLength - progressBarLength;

  return { radius, circleLength, offset };
}
