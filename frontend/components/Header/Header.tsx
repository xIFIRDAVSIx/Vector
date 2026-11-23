
"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(currentScroll > 40);

      setProgress(
        maxScroll > 0 ? (currentScroll / maxScroll) * 100 : 0
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="top"
      className={`${styles.header} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <nav className={`container ${styles.nav}`}>
        {/* LOGO */}
        <a href="#top" className={styles.logo}>
          <img src="/photo_vector.png" alt="VECTOR" />
        </a>

        {/* NAVIGATION */}
        <div className={styles.navlinks}>
          <a href="#about">О команде</a>
          <a href="#contact">Контакты</a>
        </div>

        {/* BRAND */}
        <a className={styles.brand} href="#top">
          TSTU <span>×</span> VECTOR
        </a>
      </nav>

      {/* SCROLL PROGRESS */}
      <div className={styles.progressTrack}>
        <div
          className={styles.progress}
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
