"use client";

import Image from "next/image";
import { ArrowDown, FileText, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { profile, stats } from "@/data/profile";

const ease = [0.22, 1, 0.36, 1] as const;
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};
// The name and intro are the page's largest paints on phones, so they are visible
// from the first frame and only slide into place; fading them in held mobile LCP
// until hydration.
const settle = {
  hidden: { y: 16 },
  show: { y: 0, transition: { duration: 0.5, ease } },
};

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <motion.div className="hero-grid" initial="hidden" animate="show" variants={stagger}>
        <motion.div className="hero-copy" variants={stagger}>
          <motion.p className="eyebrow" variants={rise}>
            {profile.shortTitle}
          </motion.p>
          <motion.h1 variants={settle}>
            {profile.name}
            <span>I build web apps, and lately most of them use AI.</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={settle}>
            I study computer science at Qatar University. Most of what I make starts with a problem I
            ran into or someone told me about: buses nobody could track, food going bad in transit,
            lectures too long to rewatch.
          </motion.p>
          <motion.div className="hero-actions" variants={rise}>
            <a className="button button--primary" href="#projects">
              See my projects
              <ArrowDown size={18} />
            </a>
            <a className="button button--secondary" href="/resume/Najeeb Resume.pdf" target="_blank" rel="noreferrer">
              Resume
              <FileText size={18} />
            </a>
          </motion.div>
        </motion.div>
        <motion.div className="hero-panel" variants={rise}>
          <div className="portrait-placeholder">
            <Image
              src="/media/IMG_7755.jpeg"
              alt="Najeeb Abdi"
              fill
              sizes="(max-width: 920px) 90vw, 480px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="location-line">
            <MapPin size={18} />
            {profile.location}
          </div>
          <div className="stat-grid">
            {stats.map((stat) => (
              <div key={stat}>
                <strong>{stat}</strong>
              </div>
            ))}
          </div>
          <div className="hero-showcase">
            <span>Working on now</span>
            <strong>CodeTutor</strong>
            <p>A coding tutor and auto-grader for CS students.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
