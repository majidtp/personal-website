import background from "@/data/background.json";
import styles from "./background.module.css";

export function Background() {
  return (
    <section id="experience" className={styles.section} aria-labelledby="background-title">
      <h2 id="background-title" className="sr-only">{background.title}</h2>
      <p className={styles.eyebrow}>02 / BACKGROUND</p>
      <div className={styles.columns}>
        <section aria-labelledby="experience-title">
          <h3 id="experience-title" className={styles.heading}>{background.experience.title}</h3>
          <ol className={styles.timeline}>
            {background.experience.items.map((item) => (
              <li key={item.id} className={styles.experience}>
                <p className={styles.period}>{item.period}</p>
                <h4 className={styles.title}>{item.role}</h4>
                <p className={styles.detail}>
                  {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer">{item.organization}<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span></a> : item.organization}
                </p>
              </li>
            ))}
          </ol>
          <aside className={styles.recognition} aria-labelledby="recognition-title">
            <svg className={styles.awardIcon} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M8 3h8v6a4 4 0 0 1-8 0V3ZM8 5H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4M12 13v5m-4 3h8m-7-3h6v3H9z" />
            </svg>
            <div><h4 id="recognition-title">{background.experience.recognition.title}</h4><p>{background.experience.recognition.description}</p></div>
          </aside>
        </section>
        <div className={styles.rightColumn}>
          <section aria-labelledby="education-title">
            <h3 id="education-title" className={styles.heading}>{background.education.title}</h3>
            <ul className={styles.list}>
              {background.education.items.map((item) => (
                <li key={item.id} className={styles.item}>
                  <span className={styles.educationMark} aria-hidden="true">↗</span>
                  <h4 className={styles.title}>{item.degree}</h4>
                  <p className={styles.detail}>{item.institution}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
