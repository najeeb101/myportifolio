"use client";

import { GitBranch, Mail, Network } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { socials } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <Link href="#home" className="brand" aria-label="Go to home">
        <span className="brand-mark">NB</span>
        <span>Najeeb</span>
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="nav-actions">
        <a href={socials.github} aria-label="GitHub profile">
          <GitBranch size={18} />
        </a>
        <a href={socials.linkedin} aria-label="LinkedIn profile">
          <Network size={18} />
        </a>
        <a href={`mailto:${socials.email}`} aria-label="Email Najeeb">
          <Mail size={18} />
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
