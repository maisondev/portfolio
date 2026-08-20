export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  stars?: number;
  forks?: number;
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
    description: 'Anotações completas do livro "Redes de Computadores: Uma Abordagem Top-Down" (Kurose & Ross, 6ª edição), feitas como material de apoio durante a graduação. Cobrem arquitetura em camadas, comutação de pacotes, desempenho de redes, segurança e Wireshark Labs. Hoje é referência de estudo para outros estudantes da disciplina.',
    tags: ['Redes de Computadores', 'Material de Estudo', 'Markdown', 'Kurose & Ross'],
    github: 'https://github.com/maisonsouza/redes-de-computadores-e-a-internet-uma-abordagem-top-down',
    demo: 'https://github.com/maisonsouza/redes-de-computadores-e-a-internet-uma-abordagem-top-down#readme',
    image: '/projects/redes-de-computadores-preview.png',
    stars: 28,
    forks: 4,
  },
  {
    slug: 'ebook-logica-html-javascript',
    title: 'Exercícios Resolvidos - Lógica de Programação com JavaScript e HTML',
    description: 'Resoluções completas dos exercícios do livro "Lógica de Programação: Crie seus primeiros programas usando JavaScript e HTML" (Casa do Código), organizadas por capítulo. Cobre desde o primeiro programa até arrays, gráficos com canvas, animações e orientação a objetos, com exercícios práticos como IMC, jogo de adivinhação e bingo.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Lógica de Programação'],
    github: 'https://github.com/maisonsouza/ebook-logica-html-javascript',
    demo: 'https://maisonsouza.github.io/ebook-logica-html-javascript',
    image: '/projects/ebook-logica-preview.png',
    stars: 10,
    forks: 2,
  },
  {
    slug: 'design-patterns',
    title: 'Padrões de Projeto (Design Patterns)',
    description: 'Estudo prático dos padrões de projeto do livro "Design Patterns: Elements of Reusable Object-Oriented Software" (Gang of Four), com implementações em Java. Cobre padrões criacionais (Factory Method, Builder, Singleton, Prototype), estruturais (Adapter, Decorator, Façade, Proxy) e comportamentais (Strategy, Observer, State, Template Method, Visitor, entre outros).',
    tags: ['Java', 'Design Patterns', 'POO', 'Material de Estudo'],
    github: 'https://github.com/maisonsouza/design-patterns',
    image: '/projects/design-patterns-preview.png',
    stars: 2,
    forks: 1,
  },
  {
    slug: 'modelagem-de-dados',
    title: 'Modelagem de Dados - Anotações de Curso',
    description: 'Anotações do curso de Modelagem de Dados (Bóson Treinamentos), organizadas em 9 aulas. Cobre dados x informação, metadados, SGBDs, modelos de banco (hierárquico, rede, relacional, orientado a objetos e não-relacional), entidades, relacionamentos e chaves primárias/estrangeiras.',
    tags: ['Banco de Dados', 'Modelagem', 'Material de Estudo', 'Markdown'],
    github: 'https://github.com/maisonsouza/modelagem-de-dados',
    image: '/projects/modelagem-de-dados-preview.png',
    stars: 1,
    forks: 2,
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
    description: 'Complete study notes for "Computer Networking: A Top-Down Approach" (Kurose & Ross, 6th edition), written as study material during college. Covers the layered network architecture, packet switching, network performance, security, and Wireshark Labs. Now a study reference for other students taking the course.',
    tags: ['Computer Networking', 'Study Notes', 'Markdown', 'Kurose & Ross'],
    github: 'https://github.com/maisonsouza/redes-de-computadores-e-a-internet-uma-abordagem-top-down',
    demo: 'https://github.com/maisonsouza/redes-de-computadores-e-a-internet-uma-abordagem-top-down#readme',
    image: '/projects/redes-de-computadores-preview.png',
    stars: 28,
    forks: 4,
  },
  {
    slug: 'ebook-logica-html-javascript',
    title: 'Solved Exercises - Programming Logic with JavaScript and HTML',
    description: 'Complete solutions to the exercises from the book "Lógica de Programação: Crie seus primeiros programas usando JavaScript e HTML" (Casa do Código), organized by chapter. Covers everything from the first program to arrays, canvas graphics, animations, and object orientation, with practical exercises like BMI calculation, a guessing game, and bingo.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Programming Logic'],
    github: 'https://github.com/maisonsouza/ebook-logica-html-javascript',
    demo: 'https://maisonsouza.github.io/ebook-logica-html-javascript',
    image: '/projects/ebook-logica-preview.png',
    stars: 10,
    forks: 2,
  },
  {
    slug: 'design-patterns',
    title: 'Design Patterns',
    description: 'Practical study of the design patterns from "Design Patterns: Elements of Reusable Object-Oriented Software" (Gang of Four), implemented in Java. Covers creational patterns (Factory Method, Builder, Singleton, Prototype), structural patterns (Adapter, Decorator, Façade, Proxy), and behavioral patterns (Strategy, Observer, State, Template Method, Visitor, among others).',
    tags: ['Java', 'Design Patterns', 'OOP', 'Study Notes'],
    github: 'https://github.com/maisonsouza/design-patterns',
    image: '/projects/design-patterns-preview.png',
    stars: 2,
    forks: 1,
  },
  {
    slug: 'modelagem-de-dados',
    title: 'Data Modeling - Course Notes',
    description: 'Study notes for a Data Modeling course (Bóson Treinamentos), organized into 9 lessons. Covers data vs. information, metadata, DBMSs, database models (hierarchical, network, relational, object-oriented, and non-relational), entities, relationships, and primary/foreign keys.',
    tags: ['Databases', 'Data Modeling', 'Study Notes', 'Markdown'],
    github: 'https://github.com/maisonsouza/modelagem-de-dados',
    image: '/projects/modelagem-de-dados-preview.png',
    stars: 1,
    forks: 2,
  },
];

export function getProjects(lang: 'pt' | 'en'): Project[] {
  return lang === 'pt' ? projectsPT : projectsEN;
}
