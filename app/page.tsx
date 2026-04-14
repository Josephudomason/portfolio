"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";

type Project = {
  title: string;
  description: string;
  tools: string[];
  highlights: string[];
  live: string;
  image: string;
  accent: string;
  layout: "wide" | "tall" | "standard";
  source: string;
};

const featuredProjects: Project[] = [
  {
    title: "Pristine Gadgets",
    description:
      "A storefront-focused gadgets experience with category-led browsing, product callouts, and a clear retail layout built for fast scanning.",
    tools: ["Next.js", "React", "Vercel", "E-commerce UI"],
    highlights: ["Category filters", "Brand sections", "Promotional banners"],
    live: "https://gadgets-online-store.vercel.app/",
    image: "/project-shots/gadgets-online-store.png",
    accent: "indigo",
    layout: "wide",
    source: "Live deployment",
  },
  {
    title: "Waypoint Travel Map",
    description:
      "A travel discovery interface centered on map-based exploration, place previews, and nearby highlights for planning visually.",
    tools: ["Next.js", "React", "Vercel", "Map-based UX"],
    highlights: ["Interactive map", "Location search", "Destination cards"],
    live: "https://travel-map-app-ashen.vercel.app/",
    image: "/project-shots/travel-map-app.png",
    accent: "amber",
    layout: "tall",
    source: "Live deployment",
  },
  {
    title: "OrbitHQ SaaS Dashboard",
    description:
      "A polished SaaS dashboard concept combining analytics, billing, support, and workflow surfaces inside one enterprise-style workspace.",
    tools: ["Next.js", "React", "Dashboard UI", "Vercel"],
    highlights: ["Executive analytics", "Role-aware views", "Automation panels"],
    live: "https://orbit-hq-saas-dashboard.vercel.app/",
    image: "/project-shots/orbit-hq-saas-dashboard.png",
    accent: "emerald",
    layout: "wide",
    source: "Live deployment",
  },
  {
    title: "Food Recipe App",
    description:
      "A recipe search experience with a lightweight browsing flow and a clean food-first presentation designed around quick discovery.",
    tools: ["React", "Vite", "API Search UI", "Responsive Design"],
    highlights: ["Recipe search", "Card layout", "Fallback empty state"],
    live: "https://food-recipe-app-silk-xi.vercel.app/",
    image: "/project-shots/food-recipe-app.png",
    accent: "rose",
    layout: "standard",
    source: "Live deployment",
  },
  {
    title: "Shopping Cart",
    description:
      "A product listing and cart flow built around item comparison, stateful cart updates, and a classic commerce browsing pattern.",
    tools: ["React", "Redux", "Vite", "E-commerce State"],
    highlights: ["Product catalog", "Cart updates", "Retail UI layout"],
    live: "https://shopping-cart-gray-six.vercel.app/",
    image: "/project-shots/shopping-cart.png",
    accent: "sky",
    layout: "tall",
    source: "Live deployment",
  },
  {
    title: "All Round Insurance",
    description:
      "A conversion-first insurance website with strong content hierarchy, trust-building sections, and service education across multiple policy types.",
    tools: ["Next.js", "React", "Marketing Site", "Vercel"],
    highlights: ["Service sections", "FAQ flow", "Trust-oriented copy"],
    live: "https://insurance-nu-rust.vercel.app/",
    image: "/project-shots/insurance-web.png",
    accent: "violet",
    layout: "standard",
    source: "Live deployment",
  },
  {
    title: "City General Hospital",
    description:
      "A healthcare landing page focused on service clarity, doctor credibility, and patient-facing calls to action for appointments.",
    tools: ["Next.js", "React", "Healthcare UI", "Vercel"],
    highlights: ["Doctor profiles", "Medical services", "Appointment CTA"],
    live: "https://my-health-app-xi.vercel.app/",
    image: "/project-shots/my-health-app.png",
    accent: "emerald",
    layout: "standard",
    source: "Live deployment",
  },
  {
    title: "Pizza Motion",
    description:
      "A playful pizza brand interface with a motion-forward visual style, simple navigation, and bold product personality.",
    tools: ["React", "Vite", "Motion UI", "Brand Landing Page"],
    highlights: ["Animated entry", "Bold hero", "Fast visual storytelling"],
    live: "https://pizza-motion-zeta.vercel.app/",
    image: "/project-shots/pizza-motion.png",
    accent: "amber",
    layout: "standard",
    source: "Live deployment",
  },
  {
    title: "Expense Tracker",
    description:
      "A focused finance dashboard for logging transactions, tracking balance, and visualizing personal income versus expense patterns.",
    tools: ["React", "Vite", "State Management", "Finance UI"],
    highlights: ["Transaction log", "Balance summary", "Income and expense split"],
    live: "https://expense-tracker-app-xi-bice.vercel.app/",
    image: "/project-shots/expense-tracker-app.png",
    accent: "rose",
    layout: "wide",
    source: "Live deployment",
  },
];

const toolbox = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Query",
  "Next.js",
  "Jest",
  "Tailwind CSS",
  "Sass",
  "shadcn/ui",
  "Material UI",
  "Chakra UI",
  "Framer Motion",
  "AOS",
  "GSAP",
  "Firebase",
  "MongoDB",
];

const strengths = [
  "Accessible, responsive web interfaces",
  "Component architecture with TypeScript",
  "Modern Next.js and React workflows",
  "UI polish, motion, and frontend storytelling",
];

const contactLinks = [
  {
    label: "Email",
    href: "mailto:josephudomason5@gmail.com",
    value: "josephudomason5@gmail.com",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2348128274808",
    value: "+2348128274808",
  },
  {
    label: "Phone",
    href: "tel:+2348107364422",
    value: "+2348107364422",
  },
  {
    label: "GitHub",
    href: "https://github.com/Josephudomason",
    value: "github.com/Josephudomason",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joseph-udomason-0ba1aa319/",
    value: "linkedin.com/in/joseph-udomason-0ba1aa319",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@webdev_joe?_r=1&_t=ZS-94zwMVEVczk",
    value: "@webdev_joe",
  },
  {
    label: "X",
    href: "https://x.com/joecode_007",
    value: "@joecode_007",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

type Theme = "light" | "dark";

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-copy">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [theme, setTheme] = useState<Theme>("dark");
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const currentTheme =
        document.documentElement.dataset.theme === "light" ? "light" : "dark";
      setTheme(currentTheme);
      setIsThemeReady(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!isThemeReady) {
      return;
    }

    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [isThemeReady, theme]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from(".nav-fade", { y: -24, opacity: 0, duration: 0.7, stagger: 0.08 })
        .from(
          ".hero-copy > *",
          { y: 34, opacity: 0, duration: 0.8, stagger: 0.12 },
          "-=0.45",
        )
        .from(
          ".hero-panel",
          { scale: 0.92, opacity: 0, duration: 0.9 },
          "-=0.5",
        )
        .from(
          ".metric-card",
          { y: 24, opacity: 0, duration: 0.55, stagger: 0.12 },
          "-=0.45",
        );

      gsap.to(".orb-one", {
        x: 24,
        y: -18,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orb-two", {
        x: -28,
        y: 22,
        duration: 5.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(portraitRef.current, {
        y: -10,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, rootRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div ref={rootRef} className="portfolio-shell">
      <div className="page-orb orb-one" aria-hidden="true" />
      <div className="page-orb orb-two" aria-hidden="true" />

      <header className="site-header">
        <div className="container site-header__inner">
          <a href="#top" className="brand nav-fade">
            Joseph Udomason
          </a>

          <nav aria-label="Primary navigation" className="site-nav">
            <a className="nav-fade" href="#projects">
              Projects
            </a>
            <a className="nav-fade" href="#toolbox">
              Toolbox
            </a>
            <a className="nav-fade" href="#contact">
              Contact
            </a>
            <button
              type="button"
              className="theme-toggle nav-fade"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              aria-label={
                isThemeReady
                  ? `Activate ${theme === "dark" ? "light" : "dark"} mode`
                  : "Toggle theme"
              }
              title={
                isThemeReady ? (theme === "dark" ? "Light mode" : "Dark mode") : "Toggle theme"
              }
              aria-pressed={isThemeReady ? theme === "light" : false}
            >
              <span
                className={`theme-toggle__icon theme-toggle__icon--${
                  isThemeReady ? theme : "dark"
                }`}
                aria-hidden="true"
              />
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div ref={heroRef} className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow-pill">Frontend Developer in Lagos, Nigeria</span>
              <p className="hero-kicker">
                Frontend Developer | Next.js Dev | React &amp; TypeScript
              </p>
              <h1>
                Building accessible, responsive web apps with modern React,
                thoughtful motion, and clean visual systems.
              </h1>
              <p className="hero-description">
                I&apos;m Joseph Udomason. I design and build polished interfaces that
                feel fast, readable, and intentional across mobile and desktop.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  View Projects
                </a>
                <a
                  className="button button-secondary"
                  href="mailto:josephudomason5@gmail.com"
                >
                  Let&apos;s Work Together
                </a>
              </div>

              <div className="metrics-grid" aria-label="Key strengths">
                <article className="metric-card">
                  <span>Focus</span>
                  <strong>Accessible Frontend</strong>
                </article>
                <article className="metric-card">
                  <span>Core Stack</span>
                  <strong>Next.js, React, TypeScript</strong>
                </article>
                <article className="metric-card">
                  <span>Tooling</span>
                  <strong>GSAP, Framer Motion, Firebase</strong>
                </article>
              </div>
            </div>

            <div className="hero-panel">
              <div className="portrait-wrap" ref={portraitRef}>
                <span className="portrait-badge portrait-badge--top">
                  Available for frontend roles
                </span>
                <span className="portrait-badge portrait-badge--bottom">
                  UI polish + responsive systems
                </span>
                <div className="portrait-frame">
                  <Image
                    src="/IMG_6596.jpeg"
                    alt="Portrait of Joseph Udomason"
                    width={760}
                    height={760}
                    priority
                    className="portrait-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <motion.section
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="content-section"
        >
          <div className="container section-grid section-grid--intro">
            <SectionHeader
              eyebrow="About"
              title="Professional frontend work with a strong eye for clarity"
              description="I enjoy building interfaces that balance aesthetics, usability, and maintainable code. My approach centers on accessibility, responsive layout systems, and interactions that support the content instead of distracting from it."
            />

            <div className="glass-panel intro-panel">
              {strengths.map((item) => (
                <div key={item} className="strength-row">
                  <span className="strength-dot" aria-hidden="true" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <section id="toolbox" className="content-section">
          <div className="container section-grid">
            <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
              <SectionHeader
                eyebrow="Toolbox"
                title="The stack I reach for when shipping frontend products"
                description="I work comfortably across core frontend foundations, component libraries, motion tooling, and app-focused integrations."
              />
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="toolbox-panel"
            >
              {toolbox.map((tool) => (
                <span key={tool} className="tool-chip">
                  {tool}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="projects" className="content-section">
          <div className="container">
            <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
              <SectionHeader
                eyebrow="Selected Work"
                title="A screenshot-led project gallery shaped around real live deployments"
                description="Each card pairs a full-page capture with the project story, the tools behind it, and the product cues that define the interface."
              />
            </motion.div>

            <div className="projects-grid">
              {featuredProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  {...fadeUp}
                  transition={{ duration: 0.65, delay: index * 0.06 }}
                  className={`project-card project-card--${project.accent} project-card--${project.layout}`}
                >
                  <div className="project-shot">
                    <Image
                      src={project.image}
                      alt={`${project.title} full-page screenshot`}
                      width={1440}
                      height={2400}
                      className="project-shot__image"
                    />
                  </div>

                  <div className="project-card__content">
                    <div className="project-card__top">
                      <div className="project-card__meta">
                        <span className="project-source">{project.source}</span>
                        <span className="project-index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>

                    <div className="project-notes" aria-label={`${project.title} interface highlights`}>
                      {project.highlights.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <div className="project-stack" aria-label={`${project.title} tools used`}>
                      {project.tools.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Visit Live Site
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="container contact-banner">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7 }}
              className="contact-banner__copy"
            >
              <span className="section-eyebrow">What I Build</span>
              <h2>Marketing sites, dashboards, landing pages, and modern product interfaces.</h2>
              <p>
                If you need a frontend developer who cares about responsiveness,
                accessibility, and presentation quality, I&apos;d love to connect.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="glass-panel contact-panel"
              id="contact"
            >
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} className="contact-row">
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
