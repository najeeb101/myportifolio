"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IsoGlyph } from "@/components/ui/IsoGlyph";
import type { Project } from "@/data/projects";

const pad = (value: number) => String(value).padStart(2, "0");

export function ProjectTile({
  project,
  number,
  selected,
  clone = false,
  onSelect,
}: {
  project: Project;
  number: number;
  selected: boolean;
  /** A looping duplicate: clickable, but hidden from assistive tech and tab order. */
  clone?: boolean;
  onSelect: (tile: HTMLButtonElement) => void;
}) {
  // One viewport observer per tile drives the glyph drop-in.
  const [seen, setSeen] = useState(false);

  return (
    <motion.button
      type="button"
      className={`project-tile ${selected ? "project-tile--selected" : ""}`}
      style={{ "--tile-accent": project.accent } as React.CSSProperties}
      aria-pressed={selected}
      aria-hidden={clone || undefined}
      tabIndex={clone ? -1 : undefined}
      onClick={(event) => onSelect(event.currentTarget)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      onViewportEnter={() => setSeen(true)}
      transition={{ duration: 0.45, delay: Math.min(number, 5) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="project-tile-tag">
        {project.status === "In Progress" && <span className="live-dot" aria-hidden="true" />}
        {pad(number)}
      </span>
      <span className="project-tile-glyph">
        <IsoGlyph glyph={project.glyph} accent={project.accent} size={112} play={seen} />
      </span>
      <span className="project-tile-title">{project.name}</span>
      <span className="project-tile-tagline">{project.tagline}</span>
      <span className="project-tile-description">{project.description}</span>
      <span className="project-tile-meta">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </span>
    </motion.button>
  );
}
