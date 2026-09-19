"use client";

import { useState, type FormEvent } from "react";
import styles from "./contact.module.css";

export function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState("");

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const replyTo = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !message) {
      setStatus("Please enter your name and a message.");
      return;
    }
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nReply to: ${replyTo}\n\n${message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatus(`Your message is ready for your email app. Send it there to finish. If nothing opened, email ${email} directly.`);
  }

  return (
    <form className={styles.form} onSubmit={prepareEmail} aria-labelledby="contact-form-title" aria-describedby="contact-form-help">
      <h3 id="contact-form-title">What’s on your mind?</h3>
      <div className={styles.fields}>
        <label htmlFor="contact-name">Your name<input id="contact-name" name="name" autoComplete="name" required maxLength={80} placeholder="Your name" /></label>
        <label htmlFor="contact-email">Email address<input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
      </div>
      <label htmlFor="contact-message">Your message<textarea id="contact-message" name="message" required rows={5} maxLength={1500} placeholder="Tell me a little about your idea or project…" /></label>
      <p id="contact-form-help" className={styles.help}>This form opens your email app with a draft. Your message is sent only when you send that email.</p>
      <button type="submit" className={styles.submit}>Continue in email app <span aria-hidden="true">↗</span></button>
      <p className={styles.status} role="status">{status}</p>
    </form>
  );
}
