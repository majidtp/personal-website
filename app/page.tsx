import { Services } from "@/components/home/services";
import { Background } from "@/components/home/background";
import { Research } from "@/components/home/research";
import { Hero } from "@/components/home/hero";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <div className="page-shell">
        <Research />
        <Background />
        <Services />
        <Contact />
      </div>
    </main>
  );
}
