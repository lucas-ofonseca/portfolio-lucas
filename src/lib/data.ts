// ─────────────────────────────────────────────
// Fonte única de dados do portfólio.
// Edite aqui para atualizar todo o site.
// ─────────────────────────────────────────────

export const personal = {
  name: "Lucas Fonseca",
  role: "Dados, Sistemas e Controle — no código e na operação.",
  tagline: "Conectando operação, dados e tecnologia.",
  description:
    "Analista de dados e sistemas, com experiência em controles internos, auditoria SOX e desenvolvimento full stack. Curso Sistemas de Informação na PUC-MG e construo soluções que unem governança, dados e tecnologia.",
  location: "Belo Horizonte, MG",
  coordinates: "19.9167° S · 43.9345° W",
  available: true,
  email: "fonseca.lucas25@gmail.com",
  whatsapp: "5531997189789",
  whatsappDisplay: "(31) 99718-9789",
  linkedin: "https://www.linkedin.com/in/lucas-ofonseca/",
  linkedinDisplay: "in/lucas-ofonseca",
  github: "https://github.com/lucas-ofonseca",
  githubDisplay: "github.com/lucas-ofonseca",
} as const;

export type ExperienceItem = {
  label: string;
  title: string;
  description: string;
  highlight: string | null;
};

export const experience: ExperienceItem[] = [
  {
    label: "última experiência",
    title: "ArcelorMittal",
    description:
      "Técnico de Inventário — governança de processos, otimização de estoques e decisões orientadas a dados.",
    highlight: null,
  },
  {
    label: "formação",
    title: "PUC-MG",
    description: "Logística — concluído.",
    highlight: "[ Sistemas de Informação — em andamento. ]",
  },
  {
    label: "localização",
    title: "Belo Horizonte, MG",
    description: "remoto ou presencial",
    highlight: null,
  },
];

export type Project = {
  index: string;
  slug: string;
  name: string;
  nameHighlight: string;
  type: string;
  description: string;
  architecture: { layer: string; tags: string[] }[];
  demoUrl?: string;
  githubUrl?: string;
  live: boolean;
};

export const projects: Project[] = [
  {
    index: "01",
    slug: "cinematch",
    name: "Cine",
    nameHighlight: "Match",
    type: "Sistema de recomendação de filmes · Projeto pessoal",
    description:
      "Recomendador de filmes com modelo SVD (RMSE 0,9078) e explicabilidade via similaridade de cossenos em vetores latentes. Pipeline completo: EDA, treinamento, API REST e interface interativa.",
    architecture: [
      { layer: "modelo", tags: ["Python", "scikit-surprise", "SVD"] },
      { layer: "backend", tags: ["FastAPI", "SQLAlchemy", "SQLite"] },
      { layer: "frontend", tags: ["Streamlit"] },
      { layer: "deploy", tags: ["Joblib", "Plotly"] },
    ],
    githubUrl: "https://github.com/lucas-ofonseca/CineMatch",
    live: false,
  },
];

export type SkillCategory = {
  label: string;
  skills: { name: string; highlight: boolean }[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "frontend",
    skills: [
      { name: "TypeScript", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "React", highlight: true },
      { name: "Streamlit", highlight: false },
      { name: "Next.js", highlight: false }
    ],
  },
  {
    label: "backend",
    skills: [
      { name: "Python", highlight: true },
      { name: "FastAPI", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "Express", highlight: true }
    ],
  },
  {
    label: "banco de dados",
    skills: [
      { name: "SQL", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "MySQL", highlight: true },
      { name: "MongoDB", highlight: false }
    ],
  },
  {
    label: "dados & bi",
    skills: [
      { name: "Power BI", highlight: true },
      { name: "Excel (VBA)", highlight: true },
      { name: "SAP ECC", highlight: true },
      { name: "Scikit-learn", highlight: false }
    ],
  },
  {
    label: "ferramentas & devops",
    skills: [
      { name: "Git/GitHub", highlight: true },
      { name: "SCRUM & Kanban", highlight: true },
      { name: "AWS", highlight: false }
    ],
  },
];

export type HeroTag = { name: string; highlight: boolean };

export const heroStackTags: HeroTag[] = [
  { name: "TypeScript", highlight: true },
  { name: "React", highlight: true },
  { name: "Python", highlight: true },
  { name: "Node.js", highlight: true },
  { name: "SQL", highlight: true },
  { name: "Power BI", highlight: true },
  { name: "Excel (VBA)", highlight: true }
];
