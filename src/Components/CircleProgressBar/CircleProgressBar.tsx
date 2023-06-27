import styles from "./CircleProgressBar.module.css";
import {
  CIRCLE_CENTER_COORD,
  DEFAULT_PROGRESS_STROKE_WIDTH_PX,
  DEFAULT_STROKE_LINECAP,
} from "./consts.ts";
import {
  IProgressBarSettings,
  ISurfaceSettings,
  ITextLabelSettings,
  TStrokeLineCaps,
} from "./types.ts";
import { getProgressSVGParams } from "./utils.ts";

interface ICircleProgressBarProps {
  strokeWidth?: number;
  progressPercents: number;
  surface: ISurfaceSettings;
  strokeLineCap?: TStrokeLineCaps;
  progressBar: IProgressBarSettings;
  containerClassName?: string;
  textLabel?: ITextLabelSettings;
}

export function CircleProgressBar({
  strokeWidth = DEFAULT_PROGRESS_STROKE_WIDTH_PX,
  progressPercents,
  strokeLineCap = DEFAULT_STROKE_LINECAP,
  surface,
  progressBar,
  textLabel,
  containerClassName: externalContainerClassName,
}: ICircleProgressBarProps) {
  const { show: showSurface, bgColor: surfaceBgColor } = surface;
  const {
    bgColor: progressBgColor,
    bgGradientPoints: progressBgradientPoints,
    gradientCoords,
  } = progressBar;

  const { radius, circleLength, offset } = getProgressSVGParams({
    strokeWidth,
    progressPercents,
  });

  const isProgressGradientDefined =
    progressBgradientPoints &&
    Boolean(Object.keys(progressBgradientPoints).length);

  const progressStrokeImage =
    (isProgressGradientDefined && "url(#progressGradient)") ||
    progressBgColor ||
    undefined;

  return (
    <div className={styles.container}>
      <div className={externalContainerClassName || ""}>
        <svg
          className={styles.progressBar}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {isProgressGradientDefined && (
              <linearGradient
                id="progressGradient"
                x1={gradientCoords?.x1}
                x2={gradientCoords?.x2}
                y1={gradientCoords?.y1}
                y2={gradientCoords?.y2}
              >
                {Object.keys(progressBgradientPoints).map((point) => (
                  <stop
                    key={`${point}-${progressBgradientPoints[point]}`}
                    stopColor={progressBgradientPoints[point]}
                    offset={`${point}%`}
                  />
                ))}
              </linearGradient>
            )}
          </defs>

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
            stroke={progressStrokeImage}
            strokeWidth={strokeWidth}
            strokeDasharray={circleLength}
            strokeDashoffset={offset}
            strokeLinecap={strokeLineCap}
            fill="transparent"
            className={
              !progressBgColor && !isProgressGradientDefined
                ? styles.progress
                : ""
            }
          />
        </svg>
        {textLabel?.content && (
          <div className={textLabel?.classname || styles.label}>
            {textLabel?.content}
          </div>
        )}
      </div>
    </div>
  );
}
