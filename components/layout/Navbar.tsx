"use client";

import { Mail, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHubLogo, LinkedInLogo } from "@/components/ui/BrandIcons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { profile, socials } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <Link href="#home" className="brand" aria-label="Go to home">
          <span className="brand-avatar" aria-hidden="true">
            <Image src="/media/najeeb-bitmoji-upper.png" alt="" width={72} height={58} priority />
          </span>
          <span>{profile.name}</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <GitHubLogo size={18} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <LinkedInLogo size={18} />
          </a>
          <a href={`mailto:${socials.email}`} aria-label="Email Najeeb">
            <Mail size={18} />
          </a>
          <ThemeToggle />
          <button
            className="icon-button mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu-overlay ${mobileOpen ? "mobile-menu-overlay--open" : ""}`} onClick={closeMobile} />
      <nav className={`mobile-menu ${mobileOpen ? "mobile-menu--open" : ""}`} aria-label="Mobile navigation">
        <div className="mobile-menu-links">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMobile}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="mobile-menu-socials">
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubLogo size={20} /> GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInLogo size={20} /> LinkedIn
          </a>
          <a href={`mailto:${socials.email}`} aria-label="Email">
            <Mail size={20} /> Email
          </a>
        </div>
        <a className="button button--primary mobile-menu-cta" href="/resume/Najeeb Resume.pdf" download onClick={closeMobile}>
          Download Resume
        </a>
      </nav>
    </>
  );
}
