"use client";

import { useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProjectDetail } from "@/components/ui/ProjectDetail";
import { ProjectTile } from "@/components/ui/ProjectTile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { featuredProject, projectCategories, projects, type ProjectCategory } from "@/data/projects";

type Filter = "All" | ProjectCategory;

const allProjects = [featuredProject, ...projects];
const filters: Filter[] = ["All", ...projectCategories];
const pad = (value: number) => String(value).padStart(2, "0");

function inFilter(filter: Filter) {
  return filter === "All" ? allProjects : allProjects.filter((project) => project.category === filter);
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedName, setSelectedName] = useState(featuredProject.name);
  const detailRef = useRef<HTMLDivElement>(null);

  const visible = inFilter(filter);
  const selected = allProjects.find((project) => project.name === selectedName) ?? allProjects[0];

  const selectFilter = (next: Filter) => {
    setFilter(next);
    const list = inFilter(next);
    if (!list.some((project) => project.name === selectedName)) setSelectedName(list[0].name);
  };

  const selectProject = (name: string) => {
    setSelectedName(name);
    // On stacked layouts the detail card sits below every tile, so bring it into view.
    if (window.matchMedia("(max-width: 1100px)").matches) {
      window.setTimeout(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 250);
    }
  };

  return (
    <MotionSection id="projects" className="projects-section">
      <div className="projects-intro">
        <SectionHeader eyebrow="// projects" title="Pick a build, see what it does." />
        <p className="projects-intro-copy">
          Every project here started as a real problem: school buses nobody could track, contracts
          nobody wanted to read, vocabulary nobody wanted to drill. Pick one from the palette to open
          its breakdown: the role I played, what it changes, and what it is built on.
        </p>
      </div>

      <div className="project-palette-bar">
        <p>
          <strong>Project palette / {pad(visible.length)} shown</strong>
          <span>Grouped by what they are. Click a card to open it.</span>
        </p>
        <LayoutGroup id="project-filters">
          <div className="project-filters" role="group" aria-label="Filter projects by category">
            {filters.map((item) => {
              const active = item === filter;
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={active}
                  className={`project-filter ${active ? "project-filter--active" : ""}`}
                  onClick={() => selectFilter(item)}
                >
                  {active && (
                    <motion.span
                      className="project-filter-pill"
                      layoutId="project-filter-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="project-filter-label">{item}</span>
                  <span className="project-filter-count">{pad(inFilter(item).length)}</span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>
      </div>

      <motion.div className="project-palette" layout>
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <ProjectTile
              key={project.name}
              project={project}
              number={allProjects.indexOf(project) + 1}
              selected={project.name === selected.name}
              onSelect={() => selectProject(project.name)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <div ref={detailRef} className="project-detail-anchor">
        <AnimatePresence mode="wait">
          <ProjectDetail key={selected.name} project={selected} />
        </AnimatePresence>
      </div>
    </MotionSection>
  );
}
