import Link from "next/link";
import research from "@/data/research.json";
import styles from "./research.module.css";

function articleLink(href: string) {
  if (/^\/(?!\/)/.test(href) && !/[\\\s]/.test(href)) return { href, external: false };
  try {
    const url = new URL(href);
    if (url.protocol === "https:") return { href: url.href, external: true };
  } catch { /* Unconfigured links are not published. */ }
  return null;
}

function publishedDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) return null;
  return new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(date);
}

export function Research() {
  const articles = research.items.flatMap((item) => {
    const link = articleLink(item.href);
    return item.published && link ? [{ ...item, link }] : [];
  });

  return (
    <section id="case-studies" className={styles.section} aria-labelledby="research-title">
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>01 / FIELD NOTES</p>
          <h2 id="research-title">{research.title}</h2>
        </div>
        <p className={styles.description}>{research.description}</p>
      </div>
      {articles.length ? (
        <div className={styles.articles}>
          {articles.map((article, index) => {
            const date = publishedDate(article.date);
            return (
              <article key={article.id} className={styles.article}>
                <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <div className={styles.meta}><span>{article.topic}</span>{date && <time dateTime={article.date}>{date}</time>}</div>
                  <h3><Link href={article.link.href} target={article.link.external ? "_blank" : undefined} rel={article.link.external ? "noopener noreferrer" : undefined}>
                    {article.title}<span className={styles.arrow} aria-hidden="true">{article.link.external ? "↗" : "→"}</span>
                    {article.link.external && <span className="sr-only"> (opens in a new tab)</span>}
                  </Link></h3>
                  <p className={styles.summary}>{article.summary}</p>
                  <p className={styles.publication}>{article.publication}</p>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className={styles.empty}>
          <span className={styles.emptyMark} aria-hidden="true">[ … ]</span>
          <div><h3>A space for deeper questions.</h3><p>Articles and research notes will appear here as they’re published.</p></div>
        </div>
      )}
    </section>
  );
}
