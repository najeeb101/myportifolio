"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, Download, FileText, MapPin, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { Typewriter } from "@/components/ui/Typewriter";
import { profile, stats } from "@/data/profile";

const words = ["AI products", "backend integrations", "frontend systems"];
const typedPhrases = ["building Thermal Trace", "automating workflows with n8n", "shipping Next.js products"];

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
  const reduceMotion = useReducedMotion();
  const [wide, setWide] = useState(false);
  const { scrollY } = useScroll();
  // Copy and portrait drift apart as the hero scrolls away.
  const copyY = useTransform(scrollY, [0, 700], [0, 110]);
  const copyOpacity = useTransform(scrollY, [0, 520], [1, 0.25]);
  const panelY = useTransform(scrollY, [0, 700], [0, -70]);

  useEffect(() => {
    // Parallax only on side-by-side layouts, where the columns cannot collide.
    const query = window.matchMedia("(min-width: 921px)");
    const update = () => setWide(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const parallax = wide && !reduceMotion;

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <motion.div className="hero-grid" initial="hidden" animate="show" variants={stagger}>
        <motion.div
          className="hero-copy"
          variants={stagger}
          style={parallax ? { y: copyY, opacity: copyOpacity } : undefined}
        >
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
            <MagneticLink className="button button--primary" href="#projects">
              View Projects
              <ArrowDown size={18} />
            </MagneticLink>
            <MagneticLink className="button button--secondary" href="/resume/Najeeb Resume.pdf" target="_blank" rel="noreferrer">
              View Resume
              <FileText size={18} />
            </MagneticLink>
            <MagneticLink className="button button--secondary" href="/resume/Najeeb Resume.pdf" download>
              Download Resume
              <Download size={18} />
            </MagneticLink>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-panel"
          style={parallax ? { y: panelY } : undefined}
          variants={{
            hidden: { opacity: 0, scale: 0.94, rotate: 1.5 },
            show: { opacity: 1, scale: 1, rotate: 0, transition: { delay: 0.3, duration: 0.8, ease } },
          }}
        >
          <div className="hero-panel-glow" aria-hidden="true" />
          <motion.div 
            className="portrait-placeholder" 
            aria-label="Najeeb A. Abdi portrait"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <Image 
              src="/media/IMG_7755.jpeg" 
              alt="Najeeb A. Abdi"
              fill
              sizes="(max-width: 920px) 90vw, 480px"
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
            <strong>Thermal Trace</strong>
            <p>Cold-chain intelligence for shelf-life and spoilage-risk prediction.</p>
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
