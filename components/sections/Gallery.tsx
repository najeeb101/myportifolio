"use client";

import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Image from "next/image";
import { motion } from "framer-motion";

// Real (EXIF-rotated) dimensions, so next/image reserves the right space and
// serves resized WebP instead of the multi-megabyte originals.
const photos = [
  {
    src: "/media/IMG_1822.jpeg",
    width: 2268,
    height: 2722,
    caption: "AIxSummit and AIxHack, Doha",
    alt: "Najeeb in a black suit in front of the AIxSummit and AIxHack sponsor wall",
  },
  {
    src: "/media/IMG_2550.jpeg",
    width: 1900,
    height: 3121,
    caption: "Shell Intilaaqah entrepreneurship program",
    alt: "Najeeb holding an envelope between two people at a Shell Intilaaqah event",
  },
  {
    src: "/media/IMG_3700.jpg",
    width: 2208,
    height: 1242,
    caption: "With friends on an expo floor",
    alt: "Selfie of Najeeb in purple sunglasses with four friends wearing event badges",
  },
  {
    src: "/media/IMG_6892.jpeg",
    width: 3024,
    height: 4032,
    caption: "Checking out Lucidya's AI support booth",
    alt: "Najeeb with arms crossed looking at the Lucidya booth screen",
  },
  {
    src: "/media/IMG_5519.JPG",
    width: 1242,
    height: 2208,
    caption: "Qatar University graduation ceremony",
    alt: "Najeeb in a suit outside the Qatar University Events Complex on graduation day",
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export function Gallery() {
  return (
    <MotionSection id="gallery">
      <SectionHeader eyebrow="Photos" title="A few photos" />
      <motion.div 
        className="columns-1 sm:columns-2 md:columns-3 gap-4 mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {photos.map((photo) => (
          <motion.figure
            key={photo.src}
            variants={itemVariants}
            className="gallery-photo break-inside-avoid"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="w-full h-auto object-cover"
            />
            <figcaption>{photo.caption}</figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </MotionSection>
  );
}
