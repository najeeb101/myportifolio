"use client";

import { ArrowDown, Download, GitBranch, Mail, MapPin, Network, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { profile, socials, stats } from "@/data/profile";

const words = ["AI systems", "automation", "usable products"];

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <motion.div
        className="hero-grid"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="hero-copy">
          <div className="status-pill">
            <span />
            Open to opportunities
          </div>
          <p className="eyebrow">{profile.shortTitle}</p>
          <h1>
            {profile.name}
            <span>builds practical AI.</span>
          </h1>
          <p className="hero-subtitle">
            I build AI systems, automation workflows, and full-stack products that make complex
            ideas easier to use.
          </p>
          <div className="hero-word-row" aria-label="Focus areas">
            {words.map((word) => (
              <motion.span
                key={word}
                whileHover={{ y: -4, rotate: -1 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="button button--primary" href="#projects">
              View Projects
              <ArrowDown size={18} />
            </a>
            <a className="button button--secondary" href="#" aria-disabled="true">
              Download Resume
              <Download size={18} />
            </a>
          </div>
          <div className="social-row" aria-label="Social links">
            <a href={socials.github}>
              <GitBranch size={20} />
              GitHub
            </a>
            <a href={socials.linkedin}>
              <Network size={20} />
              LinkedIn
            </a>
            <a href={`mailto:${socials.email}`}>
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>
        <motion.div
          className="hero-panel"
          initial={{ opacity: 1, scale: 1, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.18, duration: 0.7, ease: "easeOut" }}
        >
          <div className="hero-panel-glow" aria-hidden="true" />
          <div className="portrait-placeholder" aria-label="Najeeb Barkhad monogram">
            <div className="orbit-ring orbit-ring--one" aria-hidden="true" />
            <div className="orbit-ring orbit-ring--two" aria-hidden="true" />
            <span>NB</span>
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
            <div>
              <Sparkles size={18} />
              <span>Current focus</span>
            </div>
            <strong>RouteyAI</strong>
            <p>School transport intelligence for routing, tracking, and operations.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
