import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/lib/site";
import contact from "@/data/contact.json";
import { SocialLinks } from "./social-links";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <Link href="/" className={styles.brand} aria-label="MajidTP home">
            <Image src="/images/brand/logo-on-light.png" alt="" width={800} height={187} sizes="200px" className="theme-light" />
            <Image src="/images/brand/logo-on-dark.png" alt="" width={800} height={187} sizes="200px" className="theme-dark" />
          </Link>
          <nav className={styles.navigation} aria-label="Footer navigation">
            {navigation.map((item) => <Link key={item.id} href={item.href}>{item.label}</Link>)}
          </nav>
        </div>
        <div className={styles.middle}>
          <a className={styles.email} href={`mailto:${contact.email}`}>{contact.email}<span aria-hidden="true">↗</span></a>
          <SocialLinks />
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} MajidTP. All rights reserved.</p>
          <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}
