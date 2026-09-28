"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useMotionValue, type MotionStyle } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProjectDetail } from "@/components/ui/ProjectDetail";
import { ProjectTile } from "@/components/ui/ProjectTile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { featuredProject, projectCategories, projects, type Project, type ProjectCategory } from "@/data/projects";

type Filter = "All" | ProjectCategory;

const allProjects = [featuredProject, ...projects];
const filters: Filter[] = ["All", ...projectCategories];
const pad = (value: number) => String(value).padStart(2, "0");
const dragThreshold = 6;
// The rail renders three identical sets and quietly re-centres on the middle
// one, so it scrolls forever in both directions. Short filters are repeated
// until a set is long enough to outrun a hard fling.
const copies = 3;
const minSetLength = 8;

function inFilter(filter: Filter) {
  return filter === "All" ? allProjects : allProjects.filter((project) => project.category === filter);
}

function buildSet(list: Project[]) {
  const repeats = Math.max(1, Math.ceil(minSetLength / list.length));
  return Array.from({ length: repeats }, () => list).flat();
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedName, setSelectedName] = useState(featuredProject.name);
  const [dragging, setDragging] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const settleTimer = useRef(0);
  const drag = useRef({ active: false, moved: false, startX: 0, startScroll: 0, pointerId: 0 });
  const thumbX = useMotionValue("0%");

  const visible = inFilter(filter);
  const set = buildSet(visible);
  const selected = allProjects.find((project) => project.name === selectedName) ?? allProjects[0];

  // Tile pitch, rail padding and set width, read from the live layout.
  const measure = useCallback(() => {
    const rail = railRef.current;
    const track = trackRef.current;
    const tile = track?.querySelector<HTMLElement>(".project-tile");
    if (!rail || !track || !tile) return null;
    const step = tile.offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0);
    const start = parseFloat(getComputedStyle(rail).paddingLeft) || 0;
    return { rail, step, start, setWidth: set.length * step, passWidth: visible.length * step };
  }, [set.length, visible.length]);

  const syncIndicator = useCallback(() => {
    const m = measure();
    if (!m) return;
    const offset = m.rail.scrollLeft - m.start;
    const within = ((offset % m.passWidth) + m.passWidth) % m.passWidth;
    thumbX.set(`${(within / m.passWidth) * visible.length * 100}%`);
    if (counterRef.current) {
      const index = Math.round(within / m.step) % visible.length;
      counterRef.current.textContent = pad(index + 1);
    }
  }, [measure, thumbX, visible.length]);

  // Once scrolling settles, jump a whole set back toward the middle copy.
  // The jump is an exact multiple of the tile pitch, so nothing visibly moves.
  const recenter = useCallback(() => {
    const m = measure();
    if (!m) return;
    const offset = m.rail.scrollLeft - m.start;
    const low = m.setWidth * 0.5;
    if (offset >= low && offset <= m.setWidth * 1.5) return;
    // Wrap into [0.5, 1.5) sets in one go, however far a fling travelled.
    const shift = ((((offset - low) % m.setWidth) + m.setWidth) % m.setWidth) + low - offset;
    m.rail.scrollLeft += shift;
    drag.current.startScroll += shift;
  }, [measure]);

  // Start every filter on the first tile of the middle copy.
  useLayoutEffect(() => {
    const m = measure();
    if (!m) return;
    m.rail.scrollLeft = m.start + m.setWidth;
    syncIndicator();
  }, [filter, measure, syncIndicator]);

  useEffect(() => {
    const onResize = () => {
      recenter();
      syncIndicator();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.clearTimeout(settleTimer.current);
    };
  }, [recenter, syncIndicator]);

  const onScroll = () => {
    syncIndicator();
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(recenter, 120);
  };

  const selectFilter = (next: Filter) => {
    setFilter(next);
    const list = inFilter(next);
    if (!list.some((project) => project.name === selectedName)) setSelectedName(list[0].name);
  };

  const selectProject = (name: string, tile: HTMLButtonElement) => {
    setSelectedName(name);
    tile.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    // On narrow screens the detail card sits below the rail, so bring it into view.
    if (window.matchMedia("(max-width: 1100px)").matches) {
      window.setTimeout(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 250);
    }
  };

  const step = (direction: 1 | -1) => {
    const m = measure();
    if (!m) return;
    recenter();
    m.rail.scrollBy({ left: direction * m.step, behavior: "smooth" });
  };

  // Mouse users can grab the rail and fling it sideways; touch keeps native scrolling.
  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0 || !railRef.current) return;
    drag.current = {
      active: true,
      moved: false,
      startX: event.clientX,
      startScroll: railRef.current.scrollLeft,
      pointerId: event.pointerId,
    };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const state = drag.current;
    const rail = railRef.current;
    if (!state.active || !rail) return;
    const delta = event.clientX - state.startX;
    if (!state.moved && Math.abs(delta) < dragThreshold) return;
    if (!state.moved) {
      state.moved = true;
      setDragging(true);
      rail.setPointerCapture(state.pointerId);
    }
    rail.scrollLeft = state.startScroll - delta;
  };

  const endDrag = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    setDragging(false);
    if (railRef.current?.hasPointerCapture(drag.current.pointerId)) {
      railRef.current.releasePointerCapture(drag.current.pointerId);
    }
  };

  // A drag should never also count as a click on the tile it started on.
  const onClickCapture = (event: React.MouseEvent) => {
    if (!drag.current.moved) return;
    drag.current.moved = false;
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <MotionSection id="projects" className="projects-section">
      <div className="projects-intro">
        <SectionHeader eyebrow="// projects" title="Pick a build, see what it does." />
        <p className="projects-intro-copy">
          Every project here started as a real problem: food spoiling in transit, school buses nobody
          could track, contracts nobody wanted to read. Pick one from the palette to open its
          breakdown: the role I played, what it changes, and what it is built on.
        </p>
      </div>

      <div className="project-palette-bar">
        <p>
          <strong>Project palette / {pad(visible.length)} shown</strong>
          <span>Drag or scroll sideways, it loops. Click a card to open it.</span>
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

      <div
        ref={railRef}
        className={`project-palette ${dragging ? "project-palette--dragging" : ""}`}
        role="region"
        aria-label="Projects, scrolls horizontally in a loop"
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
      >
        <div ref={trackRef} className="project-track" key={filter}>
          {Array.from({ length: copies }, (_, copy) =>
            set.map((project, index) => (
              <ProjectTile
                key={`${copy}-${index}`}
                project={project}
                number={allProjects.indexOf(project) + 1}
                selected={project.name === selected.name}
                // Only the first pass of the middle copy is real to assistive tech.
                clone={copy !== 1 || index >= visible.length}
                onSelect={(tile) => selectProject(project.name, tile)}
              />
            )),
          )}
        </div>
      </div>

      <div className="project-rail-controls">
        <span className="project-rail-counter" aria-hidden="true">
          <span ref={counterRef}>01</span> / {pad(visible.length)}
        </span>
        <div className="project-rail-track" aria-hidden="true">
          <motion.span
            className="project-rail-thumb"
            style={{ x: thumbX, width: `${100 / visible.length}%`, "--tile-accent": selected.accent } as MotionStyle}
          />
        </div>
        <button type="button" className="project-rail-button" aria-label="Previous project" onClick={() => step(-1)}>
          <ArrowLeft size={18} />
        </button>
        <button type="button" className="project-rail-button" aria-label="Next project" onClick={() => step(1)}>
          <ArrowRight size={18} />
        </button>
      </div>

      <div ref={detailRef} className="project-detail-anchor">
        <AnimatePresence mode="wait">
          <ProjectDetail key={selected.name} project={selected} />
        </AnimatePresence>
      </div>
    </MotionSection>
  );
}
