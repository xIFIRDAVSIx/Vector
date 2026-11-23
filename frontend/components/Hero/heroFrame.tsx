import styles from "./heroFrame.module.css";

export default function HeroFrame() {
  return (
    <div className={styles.frame} aria-label="Место для фотографии команды">
      <span className={styles.topLabel}>VECTOR / VISUAL</span>

      <div className={styles.frameContent}>
        <h2>IMAGE PREVIEW</h2>
        <p>PHOTO IN DEVELOPMENT</p>
      </div>

      <div className={styles.bottomInfo}>
        <span className={styles.bottomLabel}>ROBOTICS DIVISION</span>
        <span className={styles.systemLabel}>SYS.3D // ACTIVE</span>
      </div>
    </div>
  );
}
