import { navigation } from "@/lib/site";

export default function Home() {
  return (
    <main id="main-content" className="page-shell" tabIndex={-1}>
      <section className="intro" aria-labelledby="intro-title">
        <span className="eyebrow">MajidTP</span>
        <h1 id="intro-title">no Cache, just Flow</h1>
        <div className="intro-line" aria-hidden="true" />
      </section>
      {navigation.map((section, index) => (
        <section key={section.id} id={section.id} className="home-section" aria-labelledby={`${section.id}-title`}>
          <span className="section-number" aria-hidden="true">0{index + 1}</span>
          <h2 id={`${section.id}-title`}>{section.label}</h2>
        </section>
      ))}
    </main>
  );
}
