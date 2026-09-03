"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { featuredProjects } from "@/app/data/projects";

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

export function Projects() {
  return (
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
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
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

                <div
                  className="project-notes"
                  aria-label={`${project.title} interface highlights`}
                >
                  {project.highlights.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div
                  className="project-stack"
                  aria-label={`${project.title} tools used`}
                >
                  {project.tools.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                {project.live ? (
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Visit Live Site
                    </a>
                  </div>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
