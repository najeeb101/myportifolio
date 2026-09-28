"use client";

import { motion } from "framer-motion";
import { IsoGlyph } from "@/components/ui/IsoGlyph";
import { TypeReveal } from "@/components/ui/TypeReveal";
import type { Project } from "@/data/projects";

const pad = (value: number) => String(value).padStart(2, "0");

export function ProjectTile({
  project,
  number,
  selected,
  onSelect,
}: {
  project: Project;
  number: number;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      layout
      type="button"
      className={`project-tile ${selected ? "project-tile--selected" : ""}`}
      style={{ "--tile-accent": project.accent } as React.CSSProperties}
      aria-pressed={selected}
      onClick={onSelect}
      initial={{ opacity: 0.2, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, delay: number * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <span className="project-tile-tag">
        {project.status === "In Progress" && <span className="live-dot" aria-hidden="true" />}
        {selected ? "Viewing" : "View"} {pad(number)}
      </span>
      <span className="project-tile-glyph">
        <IsoGlyph glyph={project.glyph} accent={project.accent} size={112} />
      </span>
      <span className="project-tile-title">{project.name}</span>
      <span className="project-tile-tagline">{project.tagline}</span>
      <span className="project-tile-description">
        <TypeReveal text={project.description} />
      </span>
      <span className="project-tile-meta">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </span>
    </motion.button>
  );
}
