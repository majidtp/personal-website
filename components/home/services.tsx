import Link from "next/link";
import services from "@/data/services.json";
import { Icon } from "@/components/ui/icon";
import styles from "./services.module.css";

const icons = { compass: "compass", code: "code", collaborate: "collaborate" } as const;

export function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-title">
      <div className={styles.heading}>
        <div><p className={styles.eyebrow}>03 / SERVICES</p><h2 id="services-title">{services.title}</h2></div>
        <p className={styles.intro}>{services.description}</p>
      </div>
      <div className={styles.cards}>
        {services.items.map((service, index) => (
          <article key={service.id} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.icon}><Icon name={icons[service.icon as keyof typeof icons] ?? "compass"} width={28} height={28} /></span>
              <span className={styles.number} aria-hidden="true">0{index + 1}</span>
            </div>
            <p className={styles.kicker}>{service.eyebrow}</p>
            <h3>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
            <ul className={styles.tags} aria-label="Areas of focus">{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <Link href="/#contact" className={styles.link}>{service.cta}<span aria-hidden="true">↗</span></Link>
          </article>
        ))}
      </div>
    </section>
  );
}
