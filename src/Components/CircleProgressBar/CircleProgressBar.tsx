import styles from "./CircleProgressBar.module.css";

export function CircleProgressBar() {
  return (
    <div className={styles.container}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx={50}
          cy={50}
          r={45}
          strokeWidth={5}
          stroke="black"
          fill="transparent"
        />
      </svg>
    </div>
  );
}
