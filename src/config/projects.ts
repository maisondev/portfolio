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
  {
    slug: 'redes-de-computadores-top-down',
    title: 'Redes de Computadores e a Internet - Uma Abordagem Top-Down',
    description: 'Anotações completas do livro "Redes de Computadores: Uma Abordagem Top-Down" (Kurose & Ross, 6ª edição), feitas como material de apoio durante a graduação. Cobrem arquitetura em camadas, comutação de pacotes, desempenho de redes, segurança e Wireshark Labs. Hoje é referência de estudo para outros estudantes da disciplina, com 28 estrelas no GitHub.',
    tags: ['Redes de Computadores', 'Material de Estudo', 'Markdown', 'Kurose & Ross'],
    github: 'https://github.com/maisonsouza/redes-de-computadores-e-a-internet-uma-abordagem-top-down',
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
  {
    slug: 'redes-de-computadores-top-down',
    title: 'Computer Networking - A Top-Down Approach',
    description: 'Complete study notes for "Computer Networking: A Top-Down Approach" (Kurose & Ross, 6th edition), written as study material during college. Covers the layered network architecture, packet switching, network performance, security, and Wireshark Labs. Now a study reference for other students taking the course, with 28 stars on GitHub.',
    tags: ['Computer Networking', 'Study Notes', 'Markdown', 'Kurose & Ross'],
    github: 'https://github.com/maisonsouza/redes-de-computadores-e-a-internet-uma-abordagem-top-down',
  },
];

export function getProjects(lang: 'pt' | 'en'): Project[] {
  return lang === 'pt' ? projectsPT : projectsEN;
}
