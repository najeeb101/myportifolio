"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, type MotionStyle } from "framer-motion";
import { IsoGlyph } from "@/components/ui/IsoGlyph";
import { TypeReveal } from "@/components/ui/TypeReveal";
import type { Project } from "@/data/projects";

const pad = (value: number) => String(value).padStart(2, "0");
const tilt = { stiffness: 180, damping: 18 };
const maxTilt = 8;

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
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), tilt);
  const rotateY = useSpring(useMotionValue(0), tilt);

  return (
    <motion.button
      type="button"
      className={`project-tile ${selected ? "project-tile--selected" : ""}`}
      style={{ "--tile-accent": project.accent, rotateX, rotateY, transformPerspective: 900 } as MotionStyle}
      aria-pressed={selected}
      aria-hidden={clone || undefined}
      tabIndex={clone ? -1 : undefined}
      onClick={(event) => onSelect(event.currentTarget)}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        // The spotlight follows the cursor; the tilt leans the card toward it.
        event.currentTarget.style.setProperty("--spot-x", `${px * 100}%`);
        event.currentTarget.style.setProperty("--spot-y", `${py * 100}%`);
        if (reduceMotion) return;
        rotateY.set((px - 0.5) * maxTilt * 2);
        rotateX.set((0.5 - py) * maxTilt * 2);
      }}
      onPointerLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: Math.min(number, 5) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
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
