"use client";

import { motion } from "framer-motion";

const strengths = [
  "Accessible, responsive web interfaces",
  "Mobile professional designs",
  "Component architecture with TypeScript",
  "Modern Next.js and React workflows",
  "API integration and optimization",
  "UI polish, motion, and frontend storytelling",
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

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

export function About() {
  return (
    <motion.section
      id="about"
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
  );
}
