
import styles from "./About.module.css";

const features = [
  {
    number: "01",
    title: "ROBOTICS",
    description: "Разработка и создание современных робототехнических решений.",
  },
  {
    number: "02",
    title: "ENGINEERING",
    description: "Проектирование, конструирование и инженерные разработки.",
  },
  {
    number: "03",
    title: "INNOVATION",
    description: "Поиск новых идей и внедрение инновационных технологий.",
  },
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>

        {/* SECTION HEADER */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>01 /</span>
          <span className={styles.sectionLabel}>ABOUT VECTOR</span>
          <span className={styles.headerLine} />
        </div>

        {/* MAIN CONTENT */}
        <div className={styles.aboutLayout}>

          <div className={styles.aboutContent}>
            <span className={styles.eyebrow}>
              WHO WE ARE
            </span>

            <h2 className={styles.title}>
              MORE THAN
              <span> ROBOTICS.</span>
            </h2>

            <p className={styles.description}>
              VECTOR — команда инженеров, разработчиков и энтузиастов,
              объединённых стремлением создавать инновационные технологии
              и воплощать сложные идеи в реальность.
            </p>

            <p className={styles.descriptionSecondary}>
              Мы исследуем, проектируем и разрабатываем решения,
              которые открывают новые возможности в мире робототехники.
            </p>

            <a href="#projects" className={styles.aboutButton}>
              <span>НАШИ ПРОЕКТЫ</span>
              <span className={styles.buttonArrow}>↗</span>
            </a>
          </div>

          {/* VISUAL AREA */}
          <div className={styles.visualArea}>
            <div className={styles.visualFrame}>

              <div className={styles.visualTop}>
                <span>VECTOR / ABOUT</span>
                <span>SYS.01 — ACTIVE</span>
              </div>

              <div className={styles.visualCenter}>
                <div className={styles.visualCircle}>
                  <div className={styles.visualInner}>
                    <span>V</span>
                  </div>
                </div>

                <span className={styles.visualCaption}>
                  ENGINEERING THE FUTURE
                </span>
              </div>

              <div className={styles.visualBottom}>
                <span>ROBOTICS DIVISION</span>
                <span>EST. VECTOR</span>
              </div>

            </div>
          </div>

        </div>

        {/* FEATURES */}
        <div className={styles.features}>
          {features.map((feature) => (
            <div className={styles.feature} key={feature.number}>
              <span className={styles.featureNumber}>
                {feature.number}
              </span>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <span className={styles.featureLine} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
