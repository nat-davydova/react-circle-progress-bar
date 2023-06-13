import styles from "./CircleProgressBar.module.css";
import {
  CIRCLE_CENTER_COORD,
  DEFAULT_PROGRESS_STROKE_WIDTH_PX,
  DEFAULT_STROKE_LINECAP,
} from "./consts.ts";
import {
  IProgressBarSettings,
  ISurfaceSettings,
  TStrokeLineCaps,
} from "./types.ts";
import { getProgressSVGParams } from "./utils.ts";

interface ICircleProgressBarProps {
  strokeWidth?: number;
  progressPercents: number;
  surface: ISurfaceSettings;
  strokeLineCap?: TStrokeLineCaps;
  progressBar: IProgressBarSettings;
}

export function CircleProgressBar({
  strokeWidth = DEFAULT_PROGRESS_STROKE_WIDTH_PX,
  progressPercents,
  strokeLineCap = DEFAULT_STROKE_LINECAP,
  surface,
  progressBar,
}: ICircleProgressBarProps) {
  const { show: showSurface, bgColor: surfaceBgColor } = surface;
  const { bgColor: progressBgColor } = progressBar;
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
            stroke={surfaceBgColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            className={!surfaceBgColor ? styles.surface : ""}
          />
        )}
        <circle
          cx={CIRCLE_CENTER_COORD}
          cy={CIRCLE_CENTER_COORD}
          r={radius}
          stroke={progressBgColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circleLength}
          strokeDashoffset={offset}
          strokeLinecap={strokeLineCap}
          fill="transparent"
          className={!progressBgColor ? styles.progress : ""}
        />
      </svg>
    </div>
  );
}
