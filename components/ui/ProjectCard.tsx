"use client";

import { ExternalLink, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
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
        <div className="chip-row">
          {project.stack.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} aria-label={`${project.name} GitHub link`}>
            <GitBranch size={17} />
            Code
          </a>
          <a href={project.live} aria-label={`${project.name} live link`}>
            <ExternalLink size={17} />
            Live
          </a>
        </div>
      </div>
    </motion.article>
  );
}
