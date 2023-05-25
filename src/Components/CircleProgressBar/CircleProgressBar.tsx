import styles from "./CircleProgressBar.module.css";

const PROGRESS_STROKE_WIDTH_DEFAULT_PX = 3;
const CIRCLE_CENTER_COORD = 50;

export function CircleProgressBar() {
  return (
    <div className={styles.container}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx={CIRCLE_CENTER_COORD}
          cy={CIRCLE_CENTER_COORD}
          r={45}
          strokeWidth={PROGRESS_STROKE_WIDTH_DEFAULT_PX}
          stroke="black"
          fill="transparent"
        />
      </svg>
    </div>
  );
}
