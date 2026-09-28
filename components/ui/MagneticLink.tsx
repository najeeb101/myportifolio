"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, type HTMLMotionProps } from "framer-motion";

const spring = { stiffness: 220, damping: 15, mass: 0.4 };

// A link that leans toward the cursor while hovered and springs back on leave.
export function MagneticLink({
  strength = 0.3,
  className,
  style,
  onPointerMove,
  onPointerLeave,
  ...props
}: HTMLMotionProps<"a"> & { strength?: number }) {
  const reduceMotion = useReducedMotion();
  const x = useSpring(useMotionValue(0), spring);
  const y = useSpring(useMotionValue(0), spring);

  return (
    <motion.a
      {...props}
      className={`${className ?? ""} magnetic`}
      style={{ ...style, x, y }}
      onPointerMove={(event) => {
        onPointerMove?.(event);
        if (reduceMotion || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
      }}
      onPointerLeave={(event) => {
        onPointerLeave?.(event);
        x.set(0);
        y.set(0);
      }}
    />
  );
}
