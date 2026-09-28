"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProjectRow } from "@/components/ui/ProjectRow";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { featuredProject, projectCategories, projects, type ProjectCategory } from "@/data/projects";

type Filter = "All" | ProjectCategory;

const allProjects = [featuredProject, ...projects];
const filters: Filter[] = ["All", ...projectCategories];

function countFor(filter: Filter) {
  return filter === "All"
    ? allProjects.length
    : allProjects.filter((project) => project.category === filter).length;
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openName, setOpenName] = useState<string | null>(featuredProject.name);

  const visible =
    filter === "All" ? allProjects : allProjects.filter((project) => project.category === filter);

  const selectFilter = (next: Filter) => {
    setFilter(next);
    const first = next === "All" ? allProjects[0] : allProjects.find((project) => project.category === next);
    setOpenName(first?.name ?? null);
  };

  return (
    <MotionSection id="projects">
      <SectionHeader eyebrow="// projects" title="Selected work with practical outcomes." />

      <LayoutGroup id="project-filters">
        <div className="project-filters" role="tablist" aria-label="Filter projects by category">
          {filters.map((item) => {
            const active = item === filter;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={active}
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
                <span className="project-filter-count">{String(countFor(item)).padStart(2, "0")}</span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      <div className="project-index-head" aria-hidden="true">
        <span>#</span>
        <span>Project</span>
        <span>Category</span>
        <span>Year</span>
        <span />
      </div>

      <motion.div className="project-index" layout>
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project, index) => (
            <ProjectRow
              key={project.name}
              project={project}
              index={index}
              total={visible.length}
              open={openName === project.name}
              onToggle={() => setOpenName((current) => (current === project.name ? null : project.name))}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </MotionSection>
  );
}
