import profiles from "@/data/social-links.json";
import { Icon } from "@/components/ui/icon";

const socialIcons = ["telegram", "instagram", "x", "email", "youtube"] as const;
type SocialIcon = typeof socialIcons[number];

function isSocialIcon(value: string): value is SocialIcon {
  return socialIcons.some((icon) => icon === value);
}

function safeHref(value: string) {
  try {
    const url = new URL(value.trim());
    return ["https:", "mailto:"].includes(url.protocol) ? url.href : undefined;
  } catch { return undefined; }
}

export function SocialLinks() {
  return <div className="social-links" role="group" aria-label="Social profiles">
    {profiles.map((profile) => {
      if (!isSocialIcon(profile.icon)) return null;
      const href = safeHref(profile.href);
      const icon = <Icon name={profile.icon} />;
      if (!href) return <span key={profile.icon} className="icon-button" role="link" aria-disabled="true" aria-label={`${profile.label} (unavailable)`} title={profile.label}>{icon}</span>;
      const external = href.startsWith("https:");
      return <a key={profile.icon} className="icon-button" href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} aria-label={`${profile.label}${external ? " (opens in a new tab)" : ""}`} title={profile.label}>{icon}</a>;
    })}
  </div>;
}
