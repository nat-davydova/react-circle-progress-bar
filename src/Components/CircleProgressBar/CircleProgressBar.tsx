import styles from "./CircleProgressBar.module.css";
import {
  CIRCLE_CENTER_COORD,
  PROGRESS_STROKE_WIDTH_DEFAULT_PX,
} from "./consts.ts";
import { getProgressSVGParams } from "./utils.ts";

interface ICircleProgressBarProps {
  strokeWidth?: number;
}

export function CircleProgressBar({
  strokeWidth = PROGRESS_STROKE_WIDTH_DEFAULT_PX,
}: ICircleProgressBarProps) {
  const { radius, circleLength } = getProgressSVGParams({ strokeWidth });

  return (
    <div className={styles.container}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx={CIRCLE_CENTER_COORD}
          cy={CIRCLE_CENTER_COORD}
          r={radius}
          stroke="black"
          strokeWidth={strokeWidth}
          strokeDasharray={circleLength}
          fill="transparent"
        />
      </svg>
    </div>
  );
}
