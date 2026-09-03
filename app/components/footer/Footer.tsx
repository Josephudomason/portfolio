import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  // FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

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

  // }, {
  //   label: "X",
  //   href: "https://x.com/joecode_007",
  //   Icon: FaXTwitter,
  // }, {
  //   label: "Tiktok",
  //   href: "https://www.tiktok.com/@webdev_joe?_r=1&_t=ZS-94zwMVEVczk",
  //   Icon: FaTiktok,
  // }, 
  {
    label: "What'sApp",
    href: "https://wa.mw/qr/OZTNHLIFRTCF1/",
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
            <a key={link.label} href={link.href} aria-label={link.label} title={link.label}>
              <link.Icon aria-hidden="true" />
              <span className="sr-only">{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
