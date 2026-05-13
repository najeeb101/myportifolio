"use client";

import type { ExperienceItem } from "@/data/experience";
import { motion } from "framer-motion";

export function TimelineItem({ item, index = 0 }: { item: ExperienceItem; index?: number }) {
  return (
    <motion.article 
      className="timeline-item"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="timeline-dot" />
      <div>
        <div className="timeline-meta">
          <span>{item.period}</span>
          <span>{item.location}</span>
        </div>
        <h3>{item.role}</h3>
        <p className="company">{item.company}</p>
        <ul>
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="chip-row">
          {item.stack.map((tag) => (
            <span className="chip chip--quiet" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
