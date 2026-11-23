"use client";

import type { MouseEvent } from "react";
import styles from "./Hero.module.css";
import HeroFrame from "./heroFrame";

type MotionMouseEvent = MouseEvent<HTMLDivElement>;

const INITIAL_TEXT_MOTION: Record<string, string> = {
  "--text-rx": "0deg",
  "--text-ry": "0deg",
  "--text-tx": "0px",
  "--text-ty": "0px",
};

export default function Hero() {
  const handleTextMouseMove = (event: MotionMouseEvent) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();

    if (rect.width <= 0 || rect.height <= 0) return;

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const dx = Math.max(-1, Math.min(1, (x - 0.5) * 2));
    const dy = Math.max(-1, Math.min(1, (y - 0.5) * 2));

    // Keep the movement restrained so the wordmark does not stretch visually.
    target.style.setProperty("--text-rx", `${-dy * 7}deg`);
    target.style.setProperty("--text-ry", `${dx * 9}deg`);
    target.style.setProperty("--text-tx", `${dx * 6}px`);
    target.style.setProperty("--text-ty", `${dy * 4}px`);
  };

  const resetTextMotion = (event: MotionMouseEvent) => {
    const target = event.currentTarget;

    Object.entries(INITIAL_TEXT_MOTION).forEach(([property, value]) => {
      target.style.setProperty(property, value);
    });
  };

  return (
    <section className={`container ${styles.hero}`} id="home">
      <div className={styles.heroLayout}>
        <div className={styles.heroContent}>
          {/* Static robotics label */}
          <div className={styles.heroLabel}>
            <span className={styles.labelLines} aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
            <span className={styles.labelDivider} aria-hidden="true" />
            <span className={styles.labelText}>ROBOTICS TEAM</span>
          </div>

          {/* Only the logo and slogan respond to mouse movement */}
          <div
            className={styles.heroTextInteractive}
            onMouseMove={handleTextMouseMove}
            onMouseLeave={resetTextMotion}
          >
            <h1 className={styles.vectorTitle} aria-label="VECTOR">
              <span className={styles.vectorV} aria-hidden="true">V</span>
              <span className={styles.vectorRest} aria-hidden="true">ECTOR</span>
            </h1>

            <h2 className={styles.subtitle}>
              <span>ENGINEERING</span>
              <span className={styles.subtitleOrange}>THE FUTURE</span>
            </h2>
          </div>

          {/* Description and buttons stay still */}
          <p className={styles.subtitleDis}>
            Мы создаём технологии, разрабатываем роботов и воплощаем
            инновационные идеи.
          </p>

          <div className={styles.heroButtons}>
            <a href="#about" className={styles.primaryButton}>
              Узнать о команде <span aria-hidden="true">→</span>
            </a>
            <a href="#projects" className={styles.secondaryButton}>
              Наши проекты <span aria-hidden="true">▷</span>
            </a>
          </div>
        </div>

        {/* Static photo placeholder: no pointer animation */}
        <div className={styles.heroFrameStage}>
          <HeroFrame />
        </div>
      </div>
    </section>
  );
}