import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>React Circle Progress Bar Concept</h1>
      <div className={styles.btnsContainer}>
        <a
          className={styles.btn}
          href="https://github.com/nat-davydova/react-circle-progress-bar"
          target="_blank"
          title="Check On Github"
        >
          Check On Github
        </a>
      </div>
    </header>
  );
}
