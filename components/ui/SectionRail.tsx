"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "gallery", label: "Gallery" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const pad = (value: number) => String(value).padStart(2, "0");

export function SectionRail() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = sections.findIndex((section) => section.id === entry.target.id);
          if (index !== -1) setActive(index);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="section-rail" aria-label="Section progress">
      <div className="section-rail-counter" aria-live="polite">
        <span className="section-rail-current">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={active}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {pad(active + 1)}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="section-rail-total">/{pad(sections.length)}</span>
      </div>
      <ol>
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={index === active ? "section-rail-link--active" : undefined}
              aria-current={index === active ? "true" : undefined}
            >
              <span className="section-rail-tick" aria-hidden="true" />
              <span className="section-rail-label">{section.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
