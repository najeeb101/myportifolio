"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  const words = title.split(" ");

  return (
    <motion.div
      className="section-header"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
    >
      <motion.span
        className="section-eyebrow"
        variants={{
          hidden: { opacity: 0, x: -24 },
          show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
        }}
      >
        {eyebrow}
        <span className="caret" aria-hidden="true" />
      </motion.span>
      <h2 aria-label={title}>
        {words.map((word, index) => (
          <span className="word-mask" key={`${word}-${index}`} aria-hidden="true">
            <motion.span
              className="word"
              variants={{
                hidden: { y: "110%" },
                show: { y: "0%", transition: { duration: 0.6, ease } },
              }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 ? " " : ""}
          </span>
        ))}
      </h2>
    </motion.div>
  );
}
