"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillGroups } from "@/data/skills";

const cardMeta = [
  { label: "AI", color: "var(--accent)" },
  { label: "WEB", color: "var(--accent-2)" },
  { label: "DATA", color: "#a78bfa" },
];

export function Skills() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MotionSection id="skills">
      <SectionHeader eyebrow="// skills" title="Tools I use to build." />

      {/* Interactive hover card */}
      <div
        className="skills-deck-wrapper"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Collapsed state — single stacked card */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              className="skills-deck-collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              <div className="deck-stack">
                <div className="deck-card-bg deck-card-bg--3" />
                <div className="deck-card-bg deck-card-bg--2" />
                <div className="deck-card-bg deck-card-bg--1">
                  <span className="deck-hint">Hover to explore</span>
                  <div className="deck-labels">
                    {cardMeta.map((m) => (
                      <span key={m.label} style={{ color: m.color }}>
                        {m.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded state — three cards fan out */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="skills-deck-expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              {skillGroups.map((group, i) => (
                <motion.div
                  key={group.title}
                  className="skills-fan-card"
                  initial={{ opacity: 0, y: 30, scale: 0.92 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      delay: i * 0.08,
                      type: "spring" as const,
                      stiffness: 260,
                      damping: 22,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    scale: 0.95,
                    transition: { duration: 0.15 },
                  }}
                  style={
                    {
                      "--card-accent": cardMeta[i].color,
                    } as React.CSSProperties
                  }
                >
                  <div className="fan-card-header">
                    <span className="fan-card-label">{cardMeta[i].label}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="chip-row">
                    {group.skills.map((skill) => (
                      <span className="chip" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionSection>
  );
}
