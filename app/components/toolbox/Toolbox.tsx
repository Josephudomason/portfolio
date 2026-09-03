"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { MdAnimation } from "react-icons/md";
import {
  SiChakraui,
  SiCypress,
  SiAppwrite,
  SiExpo,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiGreensock,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiTanstack,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVitest,
} from "react-icons/si";

const toolbox = [
  { label: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { label: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { label: "React/React-Native", Icon: SiReact, color: "#61dafb" },
  { label: "React Query", Icon: SiReactquery, color: "#ff4154" },
  { label: "TanStack Query", Icon: SiTanstack, color: "#ff4154" },
  { label: "Next.js", Icon: SiNextdotjs, color: "var(--foreground)" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#5fa04e" },
  { label: "Tailwind CSS/NativeWind", Icon: SiTailwindcss, color: "#06b6d4" },
  { label: "State Management/Redux/Redux-Toolkit", Icon: SiRedux, color: "#764abc" },
  { label: "Git", Icon: SiGit, color: "#f05032" },
  { label: "GitHub", Icon: SiGithub, color: "var(--foreground)" },
  { label: "Sass", Icon: SiSass, color: "#cc6699" },
  { label: "shadcn/ui", Icon: SiShadcnui, color: "var(--foreground)" },
  { label: "Material UI", Icon: SiMui, color: "#007fff" },
  { label: "Chakra UI", Icon: SiChakraui, color: "#319795" },
  { label: "Framer Motion", Icon: SiFramer, color: "var(--foreground)" },
  { label: "AOS", Icon: MdAnimation, color: "#f3b34c" },
  { label: "GSAP", Icon: SiGreensock, color: "#88ce02" },
  { label: "React-Testing-Library", Icon: SiTestinglibrary, color: "#e33332" },
  { label: "Jest", Icon: SiJest, color: "#c21325" },
  { label: "Vitest", Icon: SiVitest, color: "#6e9f18" },
  { label: "Cypress", Icon: SiCypress, color: "#69d3a7" },
  { label: "API Integration", Icon: SiOpenapiinitiative, color: "#6ba539" },
  { label: "Expo", Icon: SiExpo, color: "var(--foreground)" },
  { label: "Appwrite", Icon: SiAppwrite, color: "#fd366e" },
  { label: "Firebase", Icon: SiFirebase, color: "#ffca28" },
  { label: "MongoDB", Icon: SiMongodb, color: "#47a248" },
] satisfies Array<{
  label: string;
  Icon: IconType;
  color: string;
}>;

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

export function Toolbox() {
  return (
    <section id="toolbox" className="content-section">
      <div className="container section-grid">
        <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
          <SectionHeader
            eyebrow="Toolbox"
            title="The stack I reach for when shipping frontend and Native products"
            description="I work comfortably across core frontend foundations, component libraries, motion tooling, and app-focused integrations."
          />
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="toolbox-panel"
        >
          {toolbox.map((tool) => (
            <span
              key={tool.label}
              className="tool-chip"
              aria-label={tool.label}
              title={tool.label}
              style={{ color: tool.color }}
            >
              <tool.Icon aria-hidden="true" />
              <span className="sr-only">{tool.label}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
