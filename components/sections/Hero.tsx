"use client";

import Image from "next/image";
import { ArrowDown, Download, FileText, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "@/components/ui/Typewriter";
import { profile, stats } from "@/data/profile";

const words = ["AI products", "backend integrations", "frontend systems"];
const typedPhrases = ["building RouteyAI", "automating workflows with n8n", "shipping Next.js products"];

const ease = [0.22, 1, 0.36, 1] as const;
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <motion.div className="hero-grid" initial="hidden" animate="show" variants={stagger}>
        <motion.div className="hero-copy" variants={stagger}>
          <motion.p className="eyebrow" variants={rise}>
            {profile.shortTitle}
          </motion.p>
          <motion.p className="hero-typed" variants={rise}>
            <Typewriter prefix="> currently " phrases={typedPhrases} />
          </motion.p>
          <motion.h1 variants={rise}>
            {profile.name}
            <span>builds AI-powered web products.</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={rise}>
            I build AI-powered web apps, backend integrations, and automation tools that turn
            complex processes into usable products.
          </motion.p>
          <motion.div className="hero-word-row" aria-label="Focus areas" variants={rise}>
            {words.map((word) => (
              <motion.span
                key={word}
                whileHover={{ y: -4, rotate: -1 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <motion.div className="hero-actions" variants={rise}>
            <a className="button button--primary" href="#projects">
              View Projects
              <ArrowDown size={18} />
            </a>
            <a className="button button--secondary" href="/resume/Najeeb Resume.pdf" target="_blank" rel="noreferrer">
              View Resume
              <FileText size={18} />
            </a>
            <a className="button button--secondary" href="/resume/Najeeb Resume.pdf" download>
              Download Resume
              <Download size={18} />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-panel"
          variants={{
            hidden: { opacity: 0, scale: 0.94, rotate: 1.5 },
            show: { opacity: 1, scale: 1, rotate: 0, transition: { delay: 0.3, duration: 0.8, ease } },
          }}
        >
          <div className="hero-panel-glow" aria-hidden="true" />
          <motion.div 
            className="portrait-placeholder" 
            aria-label="Najeeb Barkhad portrait"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <Image 
              src="/media/IMG_7755.jpeg" 
              alt="Najeeb Barkhad" 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
            />
            <div className="orbit-ring orbit-ring--one" aria-hidden="true" />
            <div className="orbit-ring orbit-ring--two" aria-hidden="true" />
          </motion.div>
          <div className="location-line">
            <MapPin size={18} />
            {profile.location}
          </div>
          <div className="stat-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.08, duration: 0.5, ease }}
              >
                <strong>{stat}</strong>
              </motion.div>
            ))}
          </div>
          <div className="hero-showcase">
            <div>
              <Sparkles size={18} />
              <span>Current focus</span>
              <span className="live-badge">
                <span className="live-dot" aria-hidden="true" />
                Live build
              </span>
            </div>
            <strong>RouteyAI</strong>
            <p>School transport intelligence for routing, tracking, and operations.</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.a
        href="#about"
        className="scroll-cue"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span>Scroll</span>
        <span className="scroll-cue-line" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
