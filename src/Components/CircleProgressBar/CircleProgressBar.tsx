import styles from "./CircleProgressBar.module.css";
import {
  CIRCLE_CENTER_COORD,
  PROGRESS_STROKE_WIDTH_DEFAULT_PX,
} from "./consts.ts";
import { getProgressSVGParams } from "./utils.ts";

interface ICircleProgressBarProps {
  strokeWidth?: number;
  showSurface?: boolean;
  progressPercents: number;
  surfaceSettings?: ISurfaceSettings;
}

interface ISurfaceSettings {
  bgColor: string;
}

export function CircleProgressBar({
  strokeWidth = PROGRESS_STROKE_WIDTH_DEFAULT_PX,
  progressPercents,
  showSurface = false,
  surfaceSettings,
}: ICircleProgressBarProps) {
  const { radius, circleLength, offset } = getProgressSVGParams({
    strokeWidth,
    progressPercents,
  });

  return (
    <div className={styles.container}>
      <svg
        className={styles.progressBar}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {showSurface && (
          <circle
            cx={CIRCLE_CENTER_COORD}
            cy={CIRCLE_CENTER_COORD}
            r={radius}
            stroke="black"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
        )}
        <circle
          cx={CIRCLE_CENTER_COORD}
          cy={CIRCLE_CENTER_COORD}
          r={radius}
          stroke="black"
          strokeWidth={strokeWidth}
          strokeDasharray={circleLength}
          strokeDashoffset={offset}
          fill="transparent"
        />
      </svg>
    </div>
  );
}
