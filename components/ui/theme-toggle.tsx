"use client";

import { Icon } from "./icon";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const current = root.dataset.theme ?? "dark";
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch { /* Theme still works without storage. */ }
  }

  return <button type="button" className="icon-button" onClick={toggleTheme} aria-label="Toggle light and dark theme" title="Toggle light and dark theme"><Icon name="moon" className="theme-light" /><Icon name="sun" className="theme-dark" /></button>;
}
