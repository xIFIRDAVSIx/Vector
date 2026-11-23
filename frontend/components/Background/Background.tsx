
"use client";

import { useEffect, useRef } from "react";
import styles from "./Background.module.css";

export default function Background() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;

    if (!background) return;

    let animationFrame = 0;

    const updateBackground = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;

        const progress =
          maxScroll > 0
            ? Math.min(1, Math.max(0, scrollTop / maxScroll))
            : 0;

        background.style.setProperty(
          "--glow-x",
          `${88 - progress * 48}%`
        );

        background.style.setProperty(
          "--glow-y",
          `${35 + progress * 38}%`
        );

        background.style.setProperty(
          "--glow-opacity",
          `${0.42 - progress * 0.22}`
        );

        background.style.setProperty(
          "--center-opacity",
          `${0.16 - progress * 0.12}`
        );

        background.style.setProperty(
          "--dark-start",
          `${55 - progress * 15}%`
        );

        background.style.setProperty(
          "--dark-middle",
          `${0.65 + progress * 0.30}`
        );

        background.style.setProperty(
          "--dark-bottom",
          `${0.98 + progress * 0.02}`
        );

        background.style.setProperty(
          "--grid-shift",
          `${-progress * 160}px`
        );

        background.style.setProperty(
          "--grid-opacity",
          `${1 - progress * 0.45}`
        );

        background.style.setProperty(
          "--horizon-y",
          `${85.7 - progress * 32}%`
        );

        background.style.setProperty(
          "--horizon-opacity",
          `${1 - progress * 0.65}`
        );

        background.style.setProperty(
          "--bottom-glow-opacity",
          `${0.2 - progress * 0.16}`
        );
      });
    };

    updateBackground();

    window.addEventListener("scroll", updateBackground, {
      passive: true,
    });

    window.addEventListener("resize", updateBackground);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateBackground);
      window.removeEventListener("resize", updateBackground);
    };
  }, []);

  return <div ref={backgroundRef} className={styles.background} />;
}
