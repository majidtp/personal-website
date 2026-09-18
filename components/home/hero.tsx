import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}><span aria-hidden="true" /> COMPUTER SCIENCE · RESEARCH & ENGINEERING</p>
          <h1 id="hero-title" className={styles.title}>Curiosity.<br />Logic.<br /><span>Possibility.</span></h1>
          <p className={styles.introduction}>I’m Majid<span className={styles.dot}>.</span></p>
          <p className={styles.description}>A computer science researcher exploring ideas and turning complexity into clarity.</p>
          <div className={styles.actions}>
            <Link href="/#case-studies" className={styles.primaryLink}>Explore my work <span aria-hidden="true">↗</span></Link>
            <Link href="/#contact" className={styles.contactLink}>Let’s talk <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.imagePanel}>
            <div className={styles.grid} aria-hidden="true" />
            <div className={styles.orbit} aria-hidden="true" />
            <span className={styles.cornerLabel} aria-hidden="true">FIG. 01 / THE HUMAN</span>
            <Image src="/images/portraits/majidtp.png" alt="Majid, computer science researcher" width={864} height={1080} sizes="(max-width: 767px) 90vw, (max-width: 1200px) 42vw, 480px" preload className={styles.image} />
            <div className={styles.caption}><span>MAJIDTP</span><span aria-hidden="true">[ human, not a bot ]</span></div>
          </div>
          <div className={styles.note}><span aria-hidden="true">↳</span> no Cache, just Flow<span className={styles.cursor} aria-hidden="true">_</span></div>
        </div>
      </div>
      <div className={styles.footer} aria-hidden="true"><span>01 — INTRODUCTION</span><span>KEEP EXPLORING ↓</span></div>
    </section>
  );
}
