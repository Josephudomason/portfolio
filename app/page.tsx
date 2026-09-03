"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { About } from "@/app/components/about/About";
import { Contact } from "@/app/components/contact/Contact";
import { Footer } from "@/app/components/footer/Footer";
import { Header } from "@/app/components/header/Header";
import { Projects } from "@/app/components/projects/Projects";
import { Toolbox } from "@/app/components/toolbox/Toolbox";

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      const navItems = gsap.utils.toArray<HTMLElement>(".nav-fade");
      const heroCopyItems = gsap.utils.toArray<HTMLElement>(".hero-copy > *");
      const heroPanels = gsap.utils.toArray<HTMLElement>(".hero-panel");
      const orbOne = gsap.utils.toArray<HTMLElement>(".orb-one");
      const orbTwo = gsap.utils.toArray<HTMLElement>(".orb-two");

      if (navItems.length) {
        timeline.from(navItems, {
          y: -24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
        });
      }

      if (heroCopyItems.length) {
        timeline.from(
          heroCopyItems,
          { y: 34, opacity: 0, duration: 0.8, stagger: 0.12 },
          "-=0.45",
        );
      }

      if (heroPanels.length) {
        timeline.from(
          heroPanels,
          { scale: 0.92, opacity: 0, duration: 0.9 },
          "-=0.5",
        );
      }

      if (orbOne.length) {
        gsap.to(orbOne, {
          x: 24,
          y: -18,
          duration: 4.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (orbTwo.length) {
        gsap.to(orbTwo, {
          x: -28,
          y: 22,
          duration: 5.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (portraitRef.current) {
        gsap.to(portraitRef.current, {
          y: -10,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div ref={rootRef} className="portfolio-shell">
      <div className="page-orb orb-one" aria-hidden="true" />
      <div className="page-orb orb-two" aria-hidden="true" />

      <Header />

      <main id="top">
        <section className="hero-section">
          <div ref={heroRef} className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow-pill">Frontend &amp; Mobile Developer in Lagos, Nigeria</span>
              <p className="hero-kicker">
                Frontend Developer | Next.js Dev | React | React-Native &amp; TypeScript
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

        <About />

        <Toolbox />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
