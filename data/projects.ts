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
    "Tracks temperature across the cold chain and estimates how much shelf life each load has left, so food in Qatar and the GCC gets sold or moved before it spoils.",
  stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "MQTT", "Leaflet", "Docker", "Predictive ML"],
  status: "Open Innovation Award",
  year: "2026 - Present",
  github: "https://github.com/Isl-d/Reboot-The-Earth-Cold-Chain-Logistics",
  live: "https://thermal-trace-gilt.vercel.app",
  role: "Co-Founder & Lead Developer",
  impact:
    "Follows a product from the farm through trucks, cold rooms, and shops, and warns operators while there is still time to do something about it.",
  highlights: [
    "Led development in a 5-person team and built the shelf-life model: an Arrhenius model that turns a load's temperature history into its remaining safe life.",
    "Built around one rule: deterministic math owns every number, every value carries its provenance, and the LLM only explains.",
    "Won the Open Innovation Award.",
  ],
  metrics: [
    { value: "4", label: "cold-chain stages" },
    { value: "5", label: "person team" },
    { value: "GCC", label: "market focus" },
  ],
};

export const projects: Project[] = [
  {
    name: "CodeTutor",
    category: "AI Products",
    tagline: "Grades code, tutors, and tests the AI",
    glyph: "tutor",
    accent: "#0ea5e9",
    description:
      "A practice platform for intro Python with instant auto-grading and an AI tutor that gives hints, not answers. The same grader also scores AI models and is the reward for reinforcement-learning training of a small code model.",
    stack: ["Python", "FastAPI", "Next.js", "Postgres", "pgvector", "Docker", "Ollama", "GRPO"],
    status: "Built and measured",
    year: "2026",
    github: "https://github.com/najeeb101/CodeTutor",
    live: "#",
    role: "Solo developer: grader, problem bank, eval harness, tutor, RL training, API, and UI",
    impact:
      "One grading function serves students, model evals, and RL rewards, so they can never disagree. Results come with their caveats: the tutor's hints and the GRPO gain were within noise, and the write-up says so.",
    highlights: [
      "33 problems with hidden tests, validated against 97 known-wrong solutions.",
      "Evaluated Qwen2.5-Coder 1.5B and 7B with pass@k and confidence intervals.",
      "Hybrid-search tutor found the right note section in the top 3 for 40 of 40 test questions.",
    ],
    metrics: [
      { value: "33", label: "problems" },
      { value: "8", label: "weeks, all done" },
    ],
  },
  {
    name: "RouteyAI",
    category: "AI Products",
    tagline: "School buses you can actually track",
    glyph: "route",
    accent: "#f97316",
    description:
      "School bus platform for Qatar schools. It plans the routes, shows where each bus is on a live map, and gives parents an ETA. I stopped it in September 2026, when the Ministry of Education rolled out its own national attendance system, which would have left the product with a single feature.",
    stack: ["Next.js", "TypeScript", "Expo", "Supabase", "PostGIS", "Mapbox", "K-Means"],
    status: "Wound down Sep 2026",
    year: "2026",
    github: "https://github.com/najeeb101/RouteyAI",
    live: "https://routeyai.vercel.app",
    role: "Founder, sole engineer, and lead developer",
    impact:
      "I built all of it solo: the route engine (K-means to group stops, nearest-neighbour and cheapest-insertion routing on Mapbox driving times), the database and its access rules, and the web and mobile apps for admins, drivers, and parents.",
    metrics: [
      { value: "4", label: "user roles" },
      { value: "Live", label: "GPS tracking" },
    ],
  },
  {
    name: "CS Intake Planner",
    category: "Web Apps",
    tagline: "Who graduates on time, and why not",
    glyph: "flow",
    accent: "#84cc16",
    description:
      "Built during the Scale AI internship through Qatar University. An agent-based Monte Carlo simulation of QU CS students moving through the real 41-course study plan. It shows which prerequisites and full sections push graduation back, and recommends the largest intake within the department's limits, with 95% uncertainty bounds.",
    stack: ["Python", "FastAPI", "Next.js", "React", "TypeScript", "Tailwind CSS", "Ollama", "Simulation"],
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
    stack: ["FastAPI", "Next.js", "TypeScript", "Supabase", "faster-whisper", "Groq", "OpenAI", "Ollama", "Docker"],
    status: "AI Product",
    year: "Mar - Oct 2026",
    github: "https://github.com/najeeb101/VideoNoteExtractor",
    live: "#",
    role: "Backend pipeline, authenticated API, frontend dashboard, and notes chat",
    impact:
      "A long lecture becomes notes you can read quickly and search later. I tested it end to end on 5 lecture videos from 3 to 30 minutes, and all of them processed successfully.",
    metrics: [
      { value: "3", label: "pipeline stages" },
      { value: "3", label: "LLM providers" },
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
      { value: "40", label: "days of puzzles" },
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
      { value: "~200", label: "players" },
    ],
  },
  {
    name: "IEEE Q-Con Website",
    category: "Web Apps",
    tagline: "One site for a whole conference",
    glyph: "network",
    accent: "#3b82f6",
    description:
      "The official website for IEEE Q-Con, the student engineering conference in Doha, set up for the 2027 edition. It merges last year's two separate sites into one.",
    stack: ["Astro", "TypeScript", "CSS", "GitHub Actions", "GitHub Pages"],
    status: "Live Site",
    year: "2026 - Present",
    github: "https://github.com/najeeb101/IEEEQCON2026",
    live: "https://najeeb101.github.io/IEEEQCON2026/",
    role: "Sole developer",
    impact:
      "Committee members update dates, venue, and open or closed statuses through one config file instead of touching code.",
    metrics: [
      { value: "2", label: "old sites merged" },
      { value: "0", label: "servers to run" },
    ],
  },
];
