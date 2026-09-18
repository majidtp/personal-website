import { Hero } from "@/components/home/hero";
import { navigation } from "@/lib/site";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <div className="page-shell">
        {navigation.map((section, index) => (
          <section key={section.id} id={section.id} className="home-section" aria-labelledby={`${section.id}-title`}>
            <span className="section-number" aria-hidden="true">0{index + 1}</span>
            <h2 id={`${section.id}-title`}>{section.label}</h2>
          </section>
        ))}
      </div>
    </main>
  );
}
