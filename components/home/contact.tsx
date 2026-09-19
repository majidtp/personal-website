import contact from "@/data/contact.json";
import { SocialLinks } from "@/components/layout/social-links";
import { Icon } from "@/components/ui/icon";
import { ContactForm } from "./contact-form";
import styles from "./contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>04 / CONTACT</p>
        <h2 id="contact-title">{contact.title}</h2>
        <p className={styles.description}>{contact.description}</p>
        <a className={styles.email} href={`mailto:${contact.email}`}><Icon name="email" width={24} height={24} /><span>{contact.email}</span><span aria-hidden="true">↗</span></a>
        <div className={styles.socials}><h3>Find me elsewhere</h3><SocialLinks /></div>
      </div>
      <ContactForm email={contact.email} />
    </section>
  );
}
