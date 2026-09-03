import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const footerLinks = [
  {
    label: "Email",
    href: "mailto:josephudomason5@gmail.com",
    Icon: FaEnvelope,
  },
  {
    label: "GitHub",
    href: "https://github.com/Josephudomason",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joseph-udomason-0ba1aa319/",
    Icon: FaLinkedin,
  },
  {
    label: "What'sApp",
    href: "https://wa.me/2348128274808",
    Icon: FaWhatsapp,
  }, {
    label: "Phone",
    href: "tel:+2348128274808",
    Icon: FaPhoneAlt,
  },
] satisfies Array<{
  label: string;
  href: string;
  Icon: IconType;
}>;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>Joseph Udomason</p>

        <nav aria-label="Footer navigation" className="site-footer__links">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              <link.Icon aria-hidden="true" />
              <span className="sr-only">{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
