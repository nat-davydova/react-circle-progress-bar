import { CIRCLE_CENTER_COORD } from "./consts.ts";

interface IGetProgressSVGParams {
  strokeWidth: number;
}

export function getProgressSVGParams({ strokeWidth }: IGetProgressSVGParams) {
  const radius = CIRCLE_CENTER_COORD - strokeWidth;
  const circleLength = 2 * Math.PI * radius;

  return { radius, circleLength };
}
