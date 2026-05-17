"use client";

import Image from "next/image";
import { BrainCircuit, Code2, GraduationCap, MapPin, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";

const aboutHighlights = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "Computer Science major at Qatar University",
  },
  {
    icon: BrainCircuit,
    label: "Focus",
    value: "AI engineering, frontend product work, and automation",
  },
  {
    icon: Rocket,
    label: "Building",
    value: "RouteyAI and practical AI product systems",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: profile.location,
  },
];

export function About() {
  return (
    <MotionSection id="about">
      <SectionHeader eyebrow="// about" title="Turning AI ideas into usable web products." />
      <div className="about-grid">
        <div className="prose-block">
          <p>
            I&apos;m Najeeb Barkhad, a computer science major at Qatar University focused on AI
            engineering, frontend development, and automation. I like working on ideas that can move
            from a rough problem into something people can actually use.
          </p>
          <motion.div 
            className="about-photo"
            initial={{ rotate: -2, scale: 0.98 }}
            whileHover={{ rotate: 1, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
             <Image src="/media/IMG_7554.jpeg" alt="Najeeb in action" fill style={{ objectFit: 'cover' }} />
          </motion.div>
          <p>
            My strongest work sits between product thinking and technical execution: understanding
            the workflow, designing the system, building the interface, and making the result clear
            enough for real users to trust.
          </p>
          <p>
            Right now I&apos;m especially interested in practical AI tools, transport and operations
            software, data-driven products, and automation workflows that reduce repeated manual
            work.
          </p>
          <div className="about-chip-row" aria-label="About focus areas">
            <span>AI Engineering</span>
            <span>Automation</span>
            <span>Frontend Products</span>
            <span>Backend Integrations</span>
          </div>
        </div>
        <div className="about-panel" aria-label="Profile summary">
          <div className="about-panel-header">
            <Code2 size={19} />
            <span>Profile snapshot</span>
          </div>
          <div className="about-highlight-list">
            {aboutHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div className="about-highlight" key={item.label}>
                  <Icon size={19} />
                  <div>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="about-current">
            <span>Current direction</span>
            <p>{profile.summary}</p>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
