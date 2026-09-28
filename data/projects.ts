export const projectCategories = ["AI Products", "Web Apps", "Games"] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type ProjectGlyph =
  | "thermal"
  | "tutor"
  | "route"
  | "flow"
  | "wave"
  | "document"
  | "grid"
  | "network"
  | "snake";

export type Project = {
  name: string;
  category: ProjectCategory;
  tagline: string;
  glyph: ProjectGlyph;
  accent: string;
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
  name: "Thermal Trace",
  category: "AI Products",
  tagline: "Shelf life, read from the cold chain",
  glyph: "thermal",
  accent: "#ef4444",
  description:
    "AI cold-chain intelligence platform for food security in Qatar and the GCC, designed to predict remaining shelf life and spoilage risk before losses happen.",
  stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "MQTT", "Leaflet", "Docker", "Predictive ML"],
  status: "Open Innovation Award",
  year: "2026 - Present",
  github: "https://github.com/Isl-d/Reboot-The-Earth-Cold-Chain-Logistics",
  live: "https://thermal-trace-gilt.vercel.app",
  role: "Co-Founder & Lead Developer",
  impact:
    "Models each product's thermal state across farms, transport, cold storage, and retail so operators can act before perishable goods are lost.",
  highlights: [
    "Developed the Thermal Reserve model to calculate item-level shelf life from zone-level sensor readings.",
    "Uses produce-specific temperature limits so mixed loads are assessed item by item, not by one average.",
    "Targets proactive spoilage-risk detection across the cold chain in Qatar and the GCC.",
  ],
  metrics: [
    { value: "4", label: "cold-chain stages" },
    { value: "Item", label: "level modeling" },
    { value: "GCC", label: "market focus" },
  ],
};

export const projects: Project[] = [
  {
    name: "CodeTutor",
    category: "AI Products",
    tagline: "Tutor, grader, training data",
    glyph: "tutor",
    accent: "#0ea5e9",
    description:
      "AI coding tutor and auto-grader platform for CS students, pairing a RAG-based tutor with an evaluation harness and an RL data pipeline that turns graded attempts into training data.",
    stack: ["RAG", "LLMs", "Auto-Grading", "Eval Harness", "Reinforcement Learning", "GRPO"],
    status: "In Progress",
    year: "2026 - Present",
    github: "#",
    live: "#",
    role: "RAG tutor, auto-grader, eval harness, and RL data pipeline",
    impact:
      "Gives CS students guided help on their code, while every graded attempt becomes training data for improving the tutor itself.",
    highlights: [
      "RAG-based tutor that helps students work through coding problems.",
      "Auto-grader backed by an evaluation harness.",
      "RL data pipeline (GRPO) that turns graded attempts into training data.",
    ],
  },
  {
    name: "RouteyAI",
    category: "AI Products",
    tagline: "School transport, routed live",
    glyph: "route",
    accent: "#f97316",
    description:
      "AI-powered school bus routing platform for the Qatar and GCC market, combining optimized routes, live GPS tracking, ETAs, and operations workflows.",
    stack: ["Next.js", "TypeScript", "FastAPI", "Supabase", "PostGIS", "Mapbox", "K-Means++", "TSP"],
    status: "In Progress",
    year: "2025 - Present",
    github: "https://github.com/najeeb101/RouteyAI",
    live: "#",
    role: "Founder, sole engineer, and lead developer",
    impact:
      "Owns the route engine, database and RLS schema, backend APIs, and UI for a working platform used to plan, track, and operate school transport.",
    metrics: [
      { value: "4", label: "user roles" },
      { value: "Live", label: "GPS tracking" },
    ],
  },
  {
    name: "Cohort Simulator",
    category: "Web Apps",
    tagline: "Graduation paths, simulated",
    glyph: "flow",
    accent: "#84cc16",
    description:
      "Discrete-event agent-based model of Qatar University CS student progression, using Monte Carlo simulation to reveal prerequisite and capacity constraints that can delay graduation.",
    stack: ["Python", "Next.js", "React", "TypeScript", "Tailwind CSS", "Simulation"],
    status: "Research Tool",
    year: "2026",
    github: "https://github.com/najeeb101/Single-Cohort-Flow-Simulator",
    live: "https://scfs-frontend.onrender.com",
    role: "Simulation model, Scenario Builder, Plan Builder, and dashboard workflow",
    impact:
      "Lets department leadership test curriculum and capacity scenarios, then see projected effects on student flow before committing to changes.",
    metrics: [
      { value: "12", label: "semester horizon" },
      { value: "8", label: "study cohorts" },
    ],
  },
  {
    name: "Lectura",
    category: "AI Products",
    tagline: "Lectures in, study notes out",
    glyph: "wave",
    accent: "#eab308",
    description:
      "AI study-notes platform that turns YouTube lectures into transcripts, structured notes, exports, and a document-specific chat experience.",
    stack: ["FastAPI", "Next.js", "TypeScript", "Supabase", "faster-whisper", "Groq", "OpenAI"],
    status: "AI Product",
    year: "2026",
    github: "https://github.com/najeeb101/VideoNoteExtractor",
    live: "#",
    role: "Backend pipeline, authenticated API, frontend dashboard, and notes chat",
    impact:
      "Compresses long lecture videos into readable study material while keeping notes searchable, exportable, and conversational.",
    metrics: [
      { value: "3", label: "pipeline stages" },
      { value: "2", label: "LLM providers" },
    ],
  },
  {
    name: "Naja7 AI",
    category: "AI Products",
    tagline: "Reads the fine print for you",
    glyph: "document",
    accent: "#3b82f6",
    description:
      "AI-assisted contract review demo for uploading TXT, PDF, and DOCX files, extracting readable text, generating reviews, and asking document-specific questions.",
    stack: ["React", "TypeScript", "Vite", "Supabase", "Gemini", "pdfjs", "mammoth"],
    status: "AI Product",
    year: "2026",
    github: "https://github.com/najeeb101/Naja7-AI",
    live: "#",
    role: "Frontend development, Supabase auth/storage, and AI document analysis workflow",
    impact:
      "Applies document parsing and QDB business rules to extract key terms and flag risk clauses for faster contract review decisions.",
    metrics: [
      { value: "3", label: "file types" },
      { value: "10MB", label: "max file size" },
    ],
  },
  {
    name: "Silatha Game",
    category: "Games",
    tagline: "Awareness as a quick game",
    glyph: "grid",
    accent: "#14b8a6",
    description:
      "Educational word-search game focused on women's health, empowerment, and workplace equality, with progressive levels and Firebase deployment.",
    stack: ["React", "Vite", "Firebase", "JavaScript", "React Router"],
    status: "Live Game",
    year: "2026",
    github: "https://github.com/najeeb101/word-search-game",
    live: "https://silathagame.web.app",
    role: "Frontend build, game interaction, and Firebase deployment",
    impact: "Turns awareness topics into a quick browser game with a meaningful learning layer and mobile-friendly play.",
    metrics: [
      { value: "6", label: "levels" },
      { value: "Live", label: "Firebase demo" },
    ],
  },
  {
    name: "StudentHub",
    category: "Web Apps",
    tagline: "Posts, people, and relations",
    glyph: "network",
    accent: "#d946ef",
    description:
      "Student-focused social platform for posting thoughts, connecting with classmates, and practicing modern full-stack application patterns.",
    stack: ["Next.js", "React", "Prisma", "SQLite", "JavaScript", "TypeScript"],
    status: "Live App",
    year: "2026",
    github: "https://github.com/najeeb101/StudentHub",
    live: "https://student-hub-alpha-six.vercel.app",
    role: "Full-stack concept and data modeling",
    impact: "Explores student community workflows with a database-backed Next.js app and a deployed Vercel demo.",
    metrics: [
      { value: "3", label: "app layers" },
      { value: "Live", label: "Vercel demo" },
    ],
  },
  {
    name: "Snake Arcade",
    category: "Games",
    tagline: "A classic loop, rebuilt",
    glyph: "snake",
    accent: "#22c55e",
    description:
      "Premium canvas-based Snake game with animated menus, missions, combo scoring, power-ups, obstacles, run summaries, and local persistence.",
    stack: ["React", "TypeScript", "Vite", "Framer Motion", "Canvas"],
    status: "Game",
    year: "2026",
    github: "https://github.com/najeeb101/SnakeGame",
    live: "https://najeeb-snake-arcade.vercel.app",
    role: "Game engine, React UI, scoring systems, and persistence hooks",
    impact:
      "Rebuilds a classic arcade loop into a polished browser game with progression systems and responsive controls.",
    metrics: [
      { value: "4", label: "control modes" },
      { value: "2.0", label: "version" },
    ],
  },
];
