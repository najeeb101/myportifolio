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
    name: "Naja7 AI Contract Analyzer",
    description:
      "Web app for uploading contract documents, storing them in Supabase, and generating AI-powered summaries and key document insights.",
    stack: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS", "shadcn-ui", "Gemini"],
    status: "Project",
    year: "2025",
    github: "#",
    live: "#",
    role: "Frontend development, Supabase integration, and AI document analysis workflow",
    impact:
      "Helps users upload contracts and quickly understand document content through summaries, stats, and AI-generated analysis.",
    metrics: [
      { value: "5MB", label: "max file size" },
      { value: "6", label: "file types" },
    ],
  },
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
];
