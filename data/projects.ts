export type Project = {
  name: string;
  description: string;
  stack: string[];
  status: string;
  year: string;
  github: string;
  live: string;
  role?: string;
  impact?: string;
  highlights?: string[];
  metrics?: {
    value: string;
    label: string;
  }[];
};

export const featuredProject: Project = {
  name: "RouteyAI",
  description:
    "School transport intelligence platform concept for safer live tracking, smarter routing, and clearer operations across Qatar and the GCC.",
  stack: ["Next.js", "Supabase", "Mapbox", "TypeScript", "K-Means++"],
  status: "In Progress",
  year: "2026",
  github: "#",
  live: "#",
  role: "Product idea, full-stack build, routing logic",
  impact: "Designed to reduce manual route planning and give schools a clearer view of buses, students, and daily transport operations.",
  highlights: [
    "Live route and bus tracking concept for school operations teams.",
    "Route optimization direction using clustering and map-based planning.",
    "Parent and admin experience planned around fast status checks.",
  ],
  metrics: [
    { value: "3", label: "planned user views" },
    { value: "5", label: "core technologies" },
    { value: "2026", label: "active build" },
  ],
};

export const projects: Project[] = [
  {
    name: "Silatha Word Search Game",
    description:
      "Interactive word search experience built for a fast, responsive browser-based learning flow with simple game mechanics.",
    stack: ["React", "Vite", "Firebase"],
    status: "Project",
    year: "2026",
    github: "#",
    live: "#",
    role: "Frontend build and interaction design",
    impact: "Turns vocabulary practice into a lightweight browser game that can be played quickly on desktop or mobile.",
    metrics: [
      { value: "3", label: "core services" },
      { value: "2026", label: "project year" },
    ],
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
    role: "Full-stack concept and data modeling",
    impact: "Explores authentication, posting flows, relational data, and reusable UI patterns.",
    metrics: [
      { value: "3", label: "app layers" },
      { value: "2025", label: "project year" },
    ],
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
    role: "AI workflow design and Python automation",
    impact: "Shows how LLMs can make dense legal text easier to scan, summarize, and review.",
    metrics: [
      { value: "3", label: "review outputs" },
      { value: "2025", label: "project year" },
    ],
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
    role: "Java application logic",
    impact: "Practiced object-oriented design through a practical lending workflow.",
    metrics: [
      { value: "3", label: "loan workflows" },
      { value: "2024", label: "coursework year" },
    ],
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
    role: "Schema design and query logic",
    impact: "Modeled a real review workflow with structured relationships and database constraints.",
    metrics: [
      { value: "4", label: "core entities" },
      { value: "2024", label: "coursework year" },
    ],
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
    role: "Data structures and Java implementation",
    impact: "Applied data-structure choices to organize and retrieve event information cleanly.",
    metrics: [
      { value: "3", label: "data flows" },
      { value: "2024", label: "coursework year" },
    ],
  },
];
