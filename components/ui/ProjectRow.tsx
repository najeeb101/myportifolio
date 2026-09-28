"use client";

import { CheckCircle2, ExternalLink, GitBranch, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectRow({
  project,
  index,
  total,
  open,
  onToggle,
}: {
  project: Project;
  index: number;
  total: number;
  open: boolean;
  onToggle: () => void;
}) {
  const hasCode = project.github && project.github !== "#";
  const hasLive = project.live && project.live !== "#";
  const inProgress = project.status === "In Progress";
  const panelId = `project-panel-${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <motion.article
      layout
      className={`project-row ${open ? "project-row--open" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.45, delay: index * 0.06, ease } }}
      exit={{ opacity: 0, x: -24, transition: { duration: 0.2 } }}
    >
      <button
        type="button"
        className="project-row-head"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="project-row-index">
          {String(index + 1).padStart(2, "0")}
          <small>/{String(total).padStart(2, "0")}</small>
        </span>
        <span className="project-row-title">
          <strong>{project.name}</strong>
          {inProgress && (
            <span className="live-badge">
              <span className="live-dot" aria-hidden="true" />
              Building
            </span>
          )}
        </span>
        <span className="project-row-category">{project.category}</span>
        <span className="project-row-year">{project.year}</span>
        <motion.span
          className="project-row-toggle"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          aria-hidden="true"
        >
          <Plus size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            className="project-row-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { duration: 0.45, ease } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.3, ease } }}
          >
            <motion.div
              className="project-row-body"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } } }}
            >
              <motion.div className="project-row-main" variants={fadeUp}>
                <p className="project-row-description">{project.description}</p>
                {(project.role || project.impact) && (
                  <dl className="project-row-facts">
                    {project.role && (
                      <div>
                        <dt>Role</dt>
                        <dd>{project.role}</dd>
                      </div>
                    )}
                    {project.impact && (
                      <div>
                        <dt>Impact</dt>
                        <dd>{project.impact}</dd>
                      </div>
                    )}
                  </dl>
                )}
                {project.highlights && (
                  <ul className="project-highlight-list">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>
                        <CheckCircle2 size={17} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>

              <motion.div className="project-row-side" variants={fadeUp}>
                {project.metrics && (
                  <div className="project-row-metrics">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="chip-row">
                  {project.stack.map((item, i) => (
                    <motion.span
                      className="chip"
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1, transition: { delay: 0.18 + i * 0.04 } }}
                    >
                      {item}
                    </motion.span>
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
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};
