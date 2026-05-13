export type Project = {
  name: string;
  description: string;
  stack: string[];
  status: string;
  year: string;
  github: string;
  live: string;
};

export const featuredProject: Project = {
  name: "RouteyAI",
  description:
    "AI-powered school bus tracking and route optimization concept for schools across Qatar and the GCC.",
  stack: ["Next.js", "Supabase", "Mapbox", "TypeScript", "K-Means++"],
  status: "In Progress",
  year: "2026",
  github: "#",
  live: "#",
};

export const projects: Project[] = [
  {
    name: "Silatha Word Search Game",
    description:
      "Interactive word search experience built for a fast, responsive browser-based learning flow.",
    stack: ["React", "Vite", "Firebase"],
    status: "Project",
    year: "2026",
    github: "#",
    live: "#",
  },
  {
    name: "Social Media Platform",
    description:
      "Full-stack social application concept with user flows, data models, and modern web UI patterns.",
    stack: ["Next.js", "Prisma", "JavaScript"],
    status: "Project",
    year: "2025",
    github: "#",
    live: "#",
  },
  {
    name: "AI Contract Analyzer",
    description:
      "AI assistant concept for reviewing contract text, surfacing risks, and summarizing key clauses.",
    stack: ["Python", "OpenAI API", "Automation"],
    status: "Project",
    year: "2025",
    github: "#",
    live: "#",
  },
  {
    name: "Library Loan Software",
    description:
      "Java application for managing book loans, users, and library workflows with structured logic.",
    stack: ["Java", "GitHub Projects"],
    status: "Coursework",
    year: "2024",
    github: "#",
    live: "#",
  },
  {
    name: "Conference Review DB",
    description:
      "Database-backed review system for conference submissions, reviewers, and decision tracking.",
    stack: ["Oracle SQL", "Java", "Database Design"],
    status: "Coursework",
    year: "2024",
    github: "#",
    live: "#",
  },
  {
    name: "Event Management System",
    description:
      "Data-structure focused system for organizing event records, participants, and scheduling logic.",
    stack: ["Java", "Data Structures"],
    status: "Coursework",
    year: "2024",
    github: "#",
    live: "#",
  },
];
