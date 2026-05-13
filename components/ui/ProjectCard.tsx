"use client";

import { CheckCircle2, ExternalLink, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const hasCode = project.github && project.github !== "#";
  const hasLive = project.live && project.live !== "#";

  return (
    <motion.article
      className={`project-card ${featured ? "project-card--featured" : ""}`}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="project-visual" aria-hidden="true">
        <div className="project-window">
          <span />
          <span />
          <span />
        </div>
        <div className="project-screen">
          <div className="project-screen-line project-screen-line--wide" />
          <div className="project-screen-line" />
          <div className="project-screen-grid">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="project-card-content">
        <div className="card-topline">
          <span>{project.status}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {featured && (
          <div className="project-case-grid">
            {project.role && (
              <div>
                <span>Role</span>
                <strong>{project.role}</strong>
              </div>
            )}
            {project.impact && (
              <div>
                <span>Impact</span>
                <strong>{project.impact}</strong>
              </div>
            )}
          </div>
        )}
        {featured && project.highlights && (
          <ul className="project-highlight-list">
            {project.highlights.map((highlight) => (
              <li key={highlight}>
                <CheckCircle2 size={17} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
        {!featured && project.impact && <p className="project-impact">{project.impact}</p>}
        {project.metrics && (
          <div className={`project-metrics ${featured ? "project-metrics--featured" : ""}`}>
            {project.metrics.map((metric, index) => (
              <div
                className={`project-metric project-metric--${index + 1}`}
                key={`${project.name}-${metric.label}`}
              >
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        )}
        <div className="chip-row">
          {project.stack.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="project-links">
          {hasCode ? (
            <a href={project.github} aria-label={`${project.name} GitHub link`} target="_blank" rel="noreferrer">
              <GitBranch size={17} />
              Code
            </a>
          ) : (
            <span className="project-link-disabled">
              <GitBranch size={17} />
              Code soon
            </span>
          )}
          {hasLive ? (
            <a href={project.live} aria-label={`${project.name} live link`} target="_blank" rel="noreferrer">
              <ExternalLink size={17} />
              Live
            </a>
          ) : (
            <span className="project-link-disabled">
              <ExternalLink size={17} />
              Demo soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
