export const projectCategories = ["AI Products", "Web Apps", "Games"] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type ProjectGlyph =
  | "thermal"
  | "tutor"
  | "route"
  | "flow"
  | "wave"
  | "estimate"
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
  tagline: "How long food lasts on the way",
  glyph: "thermal",
  accent: "#ef4444",
  description:
    "Tracks temperature across the cold chain and estimates how much shelf life each item has left, so food in Qatar and the GCC gets sold or moved before it spoils.",
  stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "MQTT", "Leaflet", "Docker", "Predictive ML"],
  status: "Open Innovation Award",
  year: "2026 - Present",
  github: "https://github.com/Isl-d/Reboot-The-Earth-Cold-Chain-Logistics",
  live: "https://thermal-trace-gilt.vercel.app",
  role: "Co-Founder & Lead Developer",
  impact:
    "Follows a product from the farm through trucks, cold rooms, and shops, and warns operators while there is still time to do something about it.",
  highlights: [
    "Wrote the Thermal Reserve model, which turns sensor readings for a zone into a shelf-life estimate for each item in it.",
    "Each type of produce has its own temperature limits, so a mixed load is judged item by item instead of by one average.",
    "Won the Open Innovation Award.",
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
    tagline: "Helps students, then learns from them",
    glyph: "tutor",
    accent: "#0ea5e9",
    description:
      "A coding tutor and auto-grader for CS students. The tutor answers from course material (RAG), the grader runs on an eval harness, and graded attempts are saved as RL training data.",
    stack: ["RAG", "LLMs", "Auto-Grading", "Eval Harness", "Reinforcement Learning", "GRPO"],
    status: "In Progress",
    year: "2026 - Present",
    github: "#",
    live: "#",
    role: "RAG tutor, auto-grader, eval harness, and RL data pipeline",
    impact:
      "Students get hints on their own code instead of full answers, and every graded attempt becomes data for making the tutor better.",
    highlights: [
      "Tutor that pulls from course material (RAG) to walk students through a problem.",
      "Auto-grader built on an evaluation harness, so grading is repeatable.",
      "Pipeline that turns graded attempts into GRPO training data.",
    ],
  },
  {
    name: "RouteyAI",
    category: "AI Products",
    tagline: "School buses you can actually track",
    glyph: "route",
    accent: "#f97316",
    description:
      "School bus platform for Qatar and the GCC. It plans the routes, shows where each bus is on a live map, and gives parents an ETA.",
    stack: ["Next.js", "TypeScript", "FastAPI", "Supabase", "PostGIS", "Mapbox", "K-Means++", "TSP"],
    status: "In Progress",
    year: "2025 - Present",
    github: "https://github.com/najeeb101/RouteyAI",
    live: "#",
    role: "Founder, sole engineer, and lead developer",
    impact:
      "I built all of it: the route engine (K-Means++ to group stops, a TSP heuristic to order them), the database and its access rules, the API, and the apps for admins, drivers, and parents.",
    metrics: [
      { value: "4", label: "user roles" },
      { value: "Live", label: "GPS tracking" },
    ],
  },
  {
    name: "Cohort Simulator",
    category: "Web Apps",
    tagline: "Who graduates on time, and why not",
    glyph: "flow",
    accent: "#84cc16",
    description:
      "A simulation of Qatar University CS students moving through the degree. It runs many simulated cohorts to show which prerequisites and full sections push graduation back.",
    stack: ["Python", "Next.js", "React", "TypeScript", "Tailwind CSS", "Simulation"],
    status: "Research Tool",
    year: "2026",
    github: "https://github.com/najeeb101/Single-Cohort-Flow-Simulator",
    live: "https://scfs-frontend.onrender.com",
    role: "Simulation model, Scenario Builder, Plan Builder, and dashboard workflow",
    impact:
      "The department can try a change, like opening another section or moving a prerequisite, and see the effect on graduation before doing it for real.",
    metrics: [
      { value: "12", label: "semester horizon" },
      { value: "8", label: "study cohorts" },
    ],
  },
  {
    name: "Lectura",
    category: "AI Products",
    tagline: "A lecture video, turned into notes",
    glyph: "wave",
    accent: "#eab308",
    description:
      "Paste a YouTube lecture and get a transcript, organised notes you can export, and a chat that answers questions about that lecture only.",
    stack: ["FastAPI", "Next.js", "TypeScript", "Supabase", "faster-whisper", "Groq", "OpenAI"],
    status: "AI Product",
    year: "2026",
    github: "https://github.com/najeeb101/VideoNoteExtractor",
    live: "#",
    role: "Backend pipeline, authenticated API, frontend dashboard, and notes chat",
    impact:
      "A long lecture becomes notes you can read quickly and search later.",
    metrics: [
      { value: "3", label: "pipeline stages" },
      { value: "2", label: "LLM providers" },
    ],
  },
  {
    name: "Taqriban",
    category: "Games",
    tagline: "Three numbers a day, roughly",
    glyph: "estimate",
    accent: "#be3a5e",
    description:
      "A daily guessing game in Arabic; the name means \"roughly\". Every day there are three questions with huge answers, like how many times you blink in a year. You get one guess each, and the score is how many times off you were.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Postgres", "Vitest", "Playwright"],
    status: "Live Game",
    year: "2026",
    github: "https://github.com/najeeb101/Taqriban",
    live: "https://taqriban.vercel.app",
    role: "Game design, backend, frontend, and the questions",
    impact:
      "Built for phones first and fully right-to-left. Answers stay on the server until you lock a guess, so you can't peek at them.",
    highlights: [
      "Leaderboards, private groups with invite codes, streaks, and an archive of old puzzles.",
      "Every read and write goes through Postgres functions, and the tables themselves are closed to the client.",
      "Each question has a source and the working shown, so you can check how the answer was reached.",
    ],
    metrics: [
      { value: "3", label: "questions a day" },
      { value: "20", label: "puzzles written" },
    ],
  },
  {
    name: "Naja7 AI",
    category: "AI Products",
    tagline: "Reads the contract so you don't have to",
    glyph: "document",
    accent: "#3b82f6",
    description:
      "Upload a contract as TXT, PDF, or DOCX. It pulls out the text, writes a review, and lets you ask questions about that document.",
    stack: ["React", "TypeScript", "Vite", "Supabase", "Gemini", "pdfjs", "mammoth"],
    status: "AI Product",
    year: "2025",
    github: "https://github.com/najeeb101/Naja7-AI",
    live: "#",
    role: "Frontend development, Supabase auth/storage, and AI document analysis workflow",
    impact:
      "Checks the contract against QDB's business rules, lists the key terms, and flags clauses that look risky.",
    metrics: [
      { value: "3", label: "file types" },
      { value: "10MB", label: "max file size" },
    ],
  },
  {
    name: "Silatha Game",
    category: "Games",
    tagline: "Word search with something to say",
    glyph: "grid",
    accent: "#14b8a6",
    description:
      "A word-search game about women's health, empowerment, and equality at work. Six levels, each harder than the last.",
    stack: ["React", "Vite", "Firebase", "JavaScript", "React Router"],
    status: "Live Game",
    year: "2026",
    github: "https://github.com/najeeb101/word-search-game",
    live: "https://silathagame.web.app",
    role: "Frontend build, game interaction, and Firebase deployment",
    impact: "People learn a few things while they play, and it works fine on a phone.",
    metrics: [
      { value: "6", label: "levels" },
      { value: "Live", label: "Firebase demo" },
    ],
  },
  {
    name: "StudentHub",
    category: "Web Apps",
    tagline: "A small social network for students",
    glyph: "network",
    accent: "#d946ef",
    description:
      "Post, follow classmates, and see what they are up to. I built it to practise full-stack work with a real database behind it.",
    stack: ["Next.js", "React", "Prisma", "SQLite", "JavaScript", "TypeScript"],
    status: "Live App",
    year: "2026",
    github: "https://github.com/najeeb101/StudentHub",
    live: "https://student-hub-alpha-six.vercel.app",
    role: "Full-stack build and data model",
    impact: "Users, posts, and connections modelled in Prisma, with a live demo on Vercel.",
    metrics: [
      { value: "3", label: "app layers" },
      { value: "Live", label: "Vercel demo" },
    ],
  },
  {
    name: "Snake Arcade",
    category: "Games",
    tagline: "Snake, with a few more ideas",
    glyph: "snake",
    accent: "#22c55e",
    description:
      "Snake on a canvas, plus missions, combos, power-ups, obstacles, and a summary after each run. Your best scores are saved in the browser.",
    stack: ["React", "TypeScript", "Vite", "Framer Motion", "Canvas"],
    status: "Game",
    year: "2026",
    github: "https://github.com/najeeb101/SnakeGame",
    live: "https://najeeb-snake-arcade.vercel.app",
    role: "Game engine, React UI, scoring systems, and persistence hooks",
    impact:
      "I wrote the game loop, scoring, and saves myself, with four ways to control the snake.",
    metrics: [
      { value: "4", label: "control modes" },
      { value: "2.0", label: "version" },
    ],
  },
];
