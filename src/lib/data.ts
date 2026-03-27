// ─────────────────────────────────────────────
// Fonte única de dados do portfólio.
// Edite aqui para atualizar todo o site.
// ─────────────────────────────────────────────

export const personal = {
  name: "Lucas Fonseca",
  role: "Full Stack Developer",
  tagline: "Conectando dados, lógica e código.",
  description:
    "Desenvolvedor Full Stack e técnico de inventário na ArcelorMittal — curso Sistemas de Informação na PUC-MG e construo soluções que unem experiência operacional com tecnologia.",
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
    label: "experiência",
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
    slug: "sgv",
    name: "Sistema de Gestão de",
    nameHighlight: "Viagens",
    type: "Aplicação web · Projeto pessoal",
    description:
      "Plataforma completa para gerenciamento de viagens corporativas — cadastro de rotas, controle de participantes e dashboard de acompanhamento em tempo real. Arquitetura separada em frontend e backend com padrão Controller → Service → Repository, autenticação via middleware e tratamento centralizado de erros.",
    architecture: [
      { layer: "frontend", tags: ["React", "Vite", "TypeScript"] },
      { layer: "backend", tags: ["Node.js", "Express", "TypeScript"] },
      { layer: "banco", tags: ["Supabase", "PostgreSQL"] },
      { layer: "deploy", tags: ["Vercel"] },
    ],
    demoUrl: "",
    live: true,
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
      { name: "React", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "HTML5", highlight: true },
      { name: "CSS3", highlight: true },
    ],
  },
  {
    label: "backend",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express", highlight: true },
      { name: "Python", highlight: false },
      { name: "REST APIs", highlight: false },
    ],
  },
  {
    label: "banco de dados",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "Supabase", highlight: true },
      { name: "MongoDB", highlight: false },
      { name: "MySQL", highlight: false },
    ],
  },
  {
    label: "dados & bi",
    skills: [
      { name: "Power BI", highlight: true },
      { name: "Excel avançado", highlight: true },
      { name: "SAP", highlight: true },
      { name: "Análise de dados", highlight: true },
    ],
  },
  {
    label: "ferramentas & devops",
    skills: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "Vercel", highlight: true },
      { name: "VS Code", highlight: true },
      { name: "Vite", highlight: true },
    ],
  },
];

export type HeroTag = { name: string; highlight: boolean };

export const heroStackTags: HeroTag[] = [
  { name: "React", highlight: true },
  { name: "Next.js", highlight: true },
  { name: "TypeScript", highlight: true },
  { name: "Node.js", highlight: true },
  { name: "PostgreSQL", highlight: true },
  { name: "Power BI", highlight: true },
  { name: "Git", highlight: true },
  { name: "Python", highlight: false },
];
