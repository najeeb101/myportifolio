"use client";

import { motion } from "framer-motion";
import type { ProjectGlyph } from "@/data/projects";

type Cube = [x: number, y: number, z: number];

// Each project gets its own little isometric sculpture, in the spirit of
// Pantheon's per-archetype cube glyphs.
const shapes: Record<ProjectGlyph, Cube[]> = {
  // A pallet of cold-chain crates watched by a thermometer tower.
  thermal: [
    [0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0], [1, 0, 1], [0, 1, 1],
    [3, 3, 0], [3, 3, 1], [3, 3, 2], [3, 3, 3],
  ],
  // A cohort climbing semester steps toward graduation.
  flow: [
    [0, 0, 0], [0, 1, 0], [1, 0, 0], [1, 1, 0], [1, 0, 1],
    [2, 0, 0], [2, 0, 1], [2, 0, 2], [3, 0, 0], [3, 0, 1], [3, 0, 2], [3, 0, 3],
  ],
  // An audio waveform rising out of a lecture recording.
  wave: [
    [0, 0, 0], [1, 0, 0], [1, 0, 1], [1, 0, 2], [2, 0, 0], [2, 0, 1],
    [3, 0, 0], [3, 0, 1], [3, 0, 2], [3, 0, 3], [4, 0, 0],
  ],
  // Two raised fighters facing off across an arena floor.
  arena: [
    [0, 0, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [0, 1, 0], [1, 1, 0], [2, 1, 0], [3, 1, 0],
    [0, 0, 1], [0, 0, 2], [3, 1, 1], [3, 1, 2],
  ],
  // A coiled snake with a raised head and one pellet ahead of it.
  snake: [
    [0, 0, 0], [1, 0, 0], [2, 0, 0], [2, 1, 0], [2, 2, 0], [1, 2, 0],
    [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 4, 0], [1, 4, 1], [3, 4, 0],
  ],
  // A bus route snaking across the grid with a raised "bus" cube.
  route: [
    [0, 0, 0], [1, 0, 0], [2, 0, 0], [2, 1, 0], [2, 2, 0],
    [3, 2, 0], [4, 2, 0], [4, 3, 0], [4, 4, 0], [2, 0, 1], [4, 3, 1],
  ],
  // A stack of document pages, offset like a fanned pile.
  document: [
    [0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0], [0, 2, 0], [1, 2, 0],
    [0, 0, 1], [1, 0, 1], [0, 1, 1], [1, 1, 1], [0, 0, 2], [1, 0, 2],
  ],
  // A word-search board with a few raised letters.
  grid: [
    [0, 0, 0], [1, 0, 0], [2, 0, 0], [0, 1, 0], [1, 1, 0], [2, 1, 0],
    [0, 2, 0], [1, 2, 0], [2, 2, 0], [0, 0, 1], [1, 1, 1], [2, 2, 1],
  ],
  // Scattered nodes of a social graph with one hub on top.
  network: [
    [0, 0, 0], [3, 0, 0], [0, 3, 0], [3, 3, 0], [1, 1, 0], [2, 2, 0],
    [1, 1, 1], [3, 0, 1], [0, 3, 1], [1, 1, 2],
  ],
};

const S = 20;
const C = S * 0.866;

function project(x: number, y: number, z: number): [number, number] {
  return [(x - y) * C, (x + y) * S * 0.5 - z * S];
}

function poly(points: [number, number][]) {
  return points.map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join(" ");
}

export function IsoGlyph({
  glyph,
  accent,
  size = 120,
  animateIn = true,
}: {
  glyph: ProjectGlyph;
  accent: string;
  size?: number;
  animateIn?: boolean;
}) {
  const cubes = [...shapes[glyph]].sort((a, b) => a[0] + a[1] + a[2] - (b[0] + b[1] + b[2]) || a[2] - b[2]);

  const all = cubes.flatMap(([x, y, z]) => [
    project(x, y, z + 1), project(x + 1, y, z), project(x, y + 1, z), project(x + 1, y + 1, z),
  ]);
  const xs = all.map((p) => p[0]);
  const ys = all.map((p) => p[1]);
  const pad = 4;
  const minX = Math.min(...xs) - pad;
  const minY = Math.min(...ys) - pad;
  const width = Math.max(...xs) - minX + pad;
  const height = Math.max(...ys) - minY + pad;

  return (
    <svg
      className="iso-glyph"
      viewBox={`${minX} ${minY} ${width} ${height}`}
      width={size}
      height={(size * height) / width}
      aria-hidden="true"
      style={{ "--glyph-accent": accent } as React.CSSProperties}
    >
      {cubes.map(([x, y, z], index) => {
        const top = poly([project(x, y, z + 1), project(x + 1, y, z + 1), project(x + 1, y + 1, z + 1), project(x, y + 1, z + 1)]);
        const right = poly([project(x + 1, y, z), project(x + 1, y + 1, z), project(x + 1, y + 1, z + 1), project(x + 1, y, z + 1)]);
        const left = poly([project(x, y + 1, z), project(x + 1, y + 1, z), project(x + 1, y + 1, z + 1), project(x, y + 1, z + 1)]);

        return (
          <motion.g
            key={`${x}-${y}-${z}`}
            className="iso-cube"
            style={{ "--cube-delay": `${index * -0.35}s` } as React.CSSProperties}
            initial={animateIn ? { opacity: 0, y: -18 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.045, type: "spring", stiffness: 260, damping: 18 }}
          >
            <polygon className="iso-top" points={top} />
            <polygon className="iso-left" points={left} />
            <polygon className="iso-right" points={right} />
          </motion.g>
        );
      })}
    </svg>
  );
}
