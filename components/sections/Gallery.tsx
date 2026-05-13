"use client";

import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

const photos = [
  "/media/IMG_1772.jpeg",
  "/media/IMG_1822.jpeg",
  "/media/IMG_2550.jpeg",
  "/media/IMG_3700.jpg",
  "/media/IMG_5519.JPG",
  "/media/IMG_6892.jpeg",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 200, damping: 20 } }
};

export function Gallery() {
  return (
    <MotionSection id="gallery">
      <SectionHeader eyebrow="// moments" title="Behind the scenes." />
      <motion.div 
        className="columns-1 sm:columns-2 md:columns-3 gap-4 mt-8 space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {photos.map((src, index) => (
          <motion.div
            key={src}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5, rotate: index % 2 === 0 ? 1 : -1, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative overflow-hidden rounded-xl border border-[var(--border)] shadow-md hover:shadow-xl cursor-pointer break-inside-avoid"
          >
            <img
              src={src}
              alt={`Moment ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </MotionSection>
  );
}
