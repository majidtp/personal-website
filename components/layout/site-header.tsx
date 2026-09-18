"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { navigation } from "@/lib/site";
import { SocialLinks } from "./social-links";
import { Icon } from "@/components/ui/icon";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) { setOpen(false); menuButton.current?.focus(); }
    }}>
      <div className="header-inner">
        <Link href="/" className="brand-link" aria-label="MajidTP home" onClick={() => setOpen(false)}>
          <Image src="/images/brand/mark-on-light.png" alt="" width={279} height={187} sizes="60px" className="brand-mark theme-light" />
          <Image src="/images/brand/mark-on-dark.png" alt="" width={279} height={187} sizes="60px" className="brand-mark theme-dark" />
        </Link>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.id} href={item.href} className="nav-link">{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <div className="desktop-socials"><SocialLinks /></div>
          <ThemeToggle />
          <button ref={menuButton} type="button" className="icon-button menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} /></button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation" hidden={!open}>
        {navigation.map((item) => <Link key={item.id} href={item.href} className="nav-link" onClick={() => setOpen(false)}>{item.label}</Link>)}
        <SocialLinks />
      </nav>
    </header>
  );
}
