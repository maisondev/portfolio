export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
}

const projectsPT: Project[] = [
  {
    slug: 'sinapses',
    title: 'Sinapses - Gerador de Roadmaps com IA',
    description: 'Plataforma que gera roadmaps de aprendizado personalizados usando IA (Google Gemini). Os usuários descrevem seu objetivo e a IA cria um plano estruturado passo a passo.',
    tags: ['Vue.js', 'Node.js', 'PostgreSQL', 'Google Gemini API', 'Cloud'],
    github: 'https://github.com/maisongalvao',
    demo: 'https://www.sinapses.site/',
    image: '/projects/sinapses-preview.png',
  },
  {
    slug: 'portfolio',
    title: 'Portfolio Profissional',
    description: 'Meu portfólio construído com Astro, TypeScript e Tailwind CSS. Showcase de projetos, experiência e artigos técnicos.',
    tags: ['Astro', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/maisongalvao/portfolio',
    demo: 'https://maisongalvao.dev',
    image: '/projects/portfolio-preview.png',
  },
];

const projectsEN: Project[] = [
  {
    slug: 'sinapses',
    title: 'Sinapses - AI-Powered Roadmap Generator',
    description: 'Platform that generates personalized learning roadmaps using AI (Google Gemini). Users describe their goal and the AI creates a structured step-by-step plan.',
    tags: ['Vue.js', 'Node.js', 'PostgreSQL', 'Google Gemini API', 'Cloud'],
    github: 'https://github.com/maisongalvao',
    demo: 'https://www.sinapses.site/',
    image: '/projects/sinapses-preview.png',
  },
  {
    slug: 'portfolio',
    title: 'Professional Portfolio',
    description: 'My portfolio built with Astro, TypeScript, and Tailwind CSS. Showcase of projects, experience, and technical articles.',
    tags: ['Astro', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/maisongalvao/portfolio',
    demo: 'https://maisongalvao.dev',
    image: '/projects/portfolio-preview.png',
  },
];

export function getProjects(lang: 'pt' | 'en'): Project[] {
  return lang === 'pt' ? projectsPT : projectsEN;
}
