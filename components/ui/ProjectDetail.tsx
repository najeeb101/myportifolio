"use client";

import { ArrowUpRight, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import { IsoGlyph } from "@/components/ui/IsoGlyph";
import type { Project } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

export function ProjectDetail({ project }: { project: Project }) {
  const hasCode = project.github && project.github !== "#";
  const hasLive = project.live && project.live !== "#";

  return (
    <motion.article
      className="project-detail"
      style={{ "--tile-accent": project.accent } as React.CSSProperties}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, ease }}
      aria-live="polite"
    >
      <span className="project-detail-corner project-detail-corner--tl" aria-hidden="true" />
      <span className="project-detail-corner project-detail-corner--br" aria-hidden="true" />

      <div className="project-detail-visual">
        <div className="project-detail-halo" aria-hidden="true" />
        <IsoGlyph glyph={project.glyph} accent={project.accent} size={210} />
      </div>

      <motion.div
        className="project-detail-copy"
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
      >
        <motion.p className="project-detail-kicker" variants={rise}>
          {project.category} / {project.status}
          {project.status === "In Progress" && <span className="live-dot" aria-hidden="true" />}
        </motion.p>
        <motion.h3 variants={rise}>{project.name}</motion.h3>
        {project.role && (
          <motion.p className="project-detail-role" variants={rise}>
            {project.role}
          </motion.p>
        )}
        <motion.p className="project-detail-text" variants={rise}>
          {project.description}
        </motion.p>
        {project.impact && (
          <motion.p className="project-detail-text project-detail-impact" variants={rise}>
            <span>Impact</span>
            {project.impact}
          </motion.p>
        )}
        {project.highlights && (
          <motion.ul className="project-detail-highlights" variants={rise}>
            {project.highlights.map((highlight, index) => (
              <li key={highlight}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {highlight}
              </li>
            ))}
          </motion.ul>
        )}
        {project.metrics && (
          <motion.dl className="project-detail-metrics" variants={rise}>
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </motion.dl>
        )}
        <motion.div className="project-detail-stack" variants={rise}>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </motion.div>
        <motion.div className="project-detail-links" variants={rise}>
          {hasCode ? (
            <a href={project.github} target="_blank" rel="noreferrer">
              <GitBranch size={15} /> Code
            </a>
          ) : (
            <span className="project-detail-link-disabled">
              <GitBranch size={15} /> Code soon
            </span>
          )}
          {hasLive ? (
            <a href={project.live} target="_blank" rel="noreferrer">
              <ArrowUpRight size={15} /> Live
            </a>
          ) : (
            <span className="project-detail-link-disabled">
              <ArrowUpRight size={15} /> Demo soon
            </span>
          )}
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
