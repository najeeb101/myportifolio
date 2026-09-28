"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const item = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease } },
};

// Staggers its RevealItem children into view the first time the group scrolls in.
export function RevealGroup({
  stagger = 0.08,
  ...props
}: HTMLMotionProps<"div"> & { stagger?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      {...props}
    />
  );
}

export function RevealItem({ as = "div", ...props }: HTMLMotionProps<"span"> & { as?: "div" | "span" }) {
  const Component = (as === "span" ? motion.span : motion.div) as typeof motion.span;
  return <Component variants={item} {...props} />;
}
