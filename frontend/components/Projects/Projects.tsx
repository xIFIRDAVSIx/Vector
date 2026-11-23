
import styles from "./Projects.module.css";

const projects = [
  {
    number: "01",
    title: "PROJECT ONE",
    category: "ENGINEERING / ROBOTICS",
    year: "2026",
    className: "mainProject",
  },
  {
    number: "02",
    title: "PROJECT TWO",
    category: "DEVELOPMENT",
    year: "2026",
    className: "smallProject",
  },
  {
    number: "03",
    title: "PROJECT THREE",
    category: "TECHNOLOGY",
    year: "2025",
    className: "smallProject",
  },
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow}>
              03 / WHAT WE CREATE
            </span>

            <h2 className={styles.heading}>
              OUR
              <span> PROJECTS</span>
            </h2>
          </div>

          <p className={styles.description}>
            Ideas become reality through engineering,
            creativity and technology.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article
              key={project.number}
              className={`${styles.projectCard} ${styles[project.className]}`}
            >
              <div className={styles.projectVisual}>
                <span className={styles.visualLabel}>
                  VECTOR / {project.number}
                </span>

                <span className={styles.visualNumber}>
                  {project.number}
                </span>

                <div className={styles.visualCross}>
                  +
                </div>

                <span className={styles.visualPlaceholder}>
                  PROJECT VISUAL
                </span>
              </div>

              <div className={styles.projectInfo}>
                <div>
                  <span className={styles.projectCategory}>
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>
                </div>

                <div className={styles.projectMeta}>
                  <span>{project.year}</span>
                  <span className={styles.projectArrow}>↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FOOTER */}
        <div className={styles.sectionFooter}>
          <span>MORE IDEAS. MORE POSSIBILITIES.</span>
          <span>VECTOR © 2026</span>
        </div>

      </div>
    </section>
  );
}
