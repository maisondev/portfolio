// Mapeamento de tecnologias para logos reais das marcas via SimpleIcons CDN
// Formato: https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/{icon-slug}.svg

export interface TechLogo {
  name: string;
  logo: string; // URL ou slug para SimpleIcons
  color?: string; // Cor oficial da marca
}

const SIMPLE_ICONS_CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons';

export const techLogosMap: Record<string, TechLogo> = {
  'HTML5': {
    name: 'HTML5',
    logo: `${SIMPLE_ICONS_CDN}/html5.svg`,
    color: '#e34c26',
  },
  'CSS': {
    name: 'CSS',
    logo: `${SIMPLE_ICONS_CDN}/css3.svg`,
    color: '#1572b6',
  },
  'JavaScript': {
    name: 'JavaScript',
    logo: `${SIMPLE_ICONS_CDN}/javascript.svg`,
    color: '#f7df1e',
  },
  'TypeScript': {
    name: 'TypeScript',
    logo: `${SIMPLE_ICONS_CDN}/typescript.svg`,
    color: '#3178c6',
  },
  'React': {
    name: 'React',
    logo: `${SIMPLE_ICONS_CDN}/react.svg`,
    color: '#61dafb',
  },
  'Vue.js': {
    name: 'Vue.js',
    logo: `${SIMPLE_ICONS_CDN}/vuedotjs.svg`,
    color: '#4fc08d',
  },
  'Astro': {
    name: 'Astro',
    logo: `${SIMPLE_ICONS_CDN}/astro.svg`,
    color: '#ff5d01',
  },
  'Tailwind CSS': {
    name: 'Tailwind CSS',
    logo: `${SIMPLE_ICONS_CDN}/tailwindcss.svg`,
    color: '#06b6d4',
  },
  'Node.js': {
    name: 'Node.js',
    logo: `${SIMPLE_ICONS_CDN}/nodedotjs.svg`,
    color: '#68a063',
  },
  'Python': {
    name: 'Python',
    logo: `${SIMPLE_ICONS_CDN}/python.svg`,
    color: '#3776ab',
  },
  'PostgreSQL': {
    name: 'PostgreSQL',
    logo: `${SIMPLE_ICONS_CDN}/postgresql.svg`,
    color: '#336791',
  },
  'PHP 8.2': {
    name: 'PHP 8.2',
    logo: `${SIMPLE_ICONS_CDN}/php.svg`,
    color: '#777bb4',
  },
  'Docker': {
    name: 'Docker',
    logo: `${SIMPLE_ICONS_CDN}/docker.svg`,
    color: '#2496ed',
  },
  'Git': {
    name: 'Git',
    logo: `${SIMPLE_ICONS_CDN}/git.svg`,
    color: '#f1502f',
  },
  'Claude AI': {
    name: 'Claude AI',
    logo: `${SIMPLE_ICONS_CDN}/anthropic.svg`,
    color: '#84cc16',
  },
  'Figma': {
    name: 'Figma',
    logo: `${SIMPLE_ICONS_CDN}/figma.svg`,
    color: '#0acf83',
  },
  'AWS': {
    name: 'AWS',
    logo: `${SIMPLE_ICONS_CDN}/amazonwebservices.svg`,
    color: '#ff9900',
  },
  'Google Cloud': {
    name: 'Google Cloud',
    logo: `${SIMPLE_ICONS_CDN}/googlecloud.svg`,
    color: '#4285f4',
  },
  'Vercel': {
    name: 'Vercel',
    logo: `${SIMPLE_ICONS_CDN}/vercel.svg`,
    color: '#000000',
  },
  'Next.js': {
    name: 'Next.js',
    logo: `${SIMPLE_ICONS_CDN}/nextdotjs.svg`,
    color: '#000000',
  },
  'GraphQL': {
    name: 'GraphQL',
    logo: `${SIMPLE_ICONS_CDN}/graphql.svg`,
    color: '#e10098',
  },
  'API REST': {
    name: 'API REST',
    logo: `${SIMPLE_ICONS_CDN}/swagger.svg`,
    color: '#85ea2d',
  },
  'Machine Learning': {
    name: 'Machine Learning',
    logo: `${SIMPLE_ICONS_CDN}/tensorflow.svg`,
    color: '#ff6f20',
  },
  'Data Science': {
    name: 'Data Science',
    logo: `${SIMPLE_ICONS_CDN}/pandas.svg`,
    color: '#150458',
  },
  'Kubernetes': {
    name: 'Kubernetes',
    logo: `${SIMPLE_ICONS_CDN}/kubernetes.svg`,
    color: '#326ce5',
  },
  'Anthropic API': {
    name: 'Anthropic API',
    logo: `${SIMPLE_ICONS_CDN}/anthropic.svg`,
    color: '#84cc16',
  },
  'ChatGPT': {
    name: 'ChatGPT',
    logo: `${SIMPLE_ICONS_CDN}/openai.svg`,
    color: '#10a37f',
  },
  'Generative AI': {
    name: 'Generative AI',
    logo: `${SIMPLE_ICONS_CDN}/openai.svg`,
    color: '#10a37f',
  },
  'NLP': {
    name: 'NLP',
    logo: `${SIMPLE_ICONS_CDN}/huggingface.svg`,
    color: '#ffd21e',
  },
  'Deep Learning': {
    name: 'Deep Learning',
    logo: `${SIMPLE_ICONS_CDN}/pytorch.svg`,
    color: '#ee4c2c',
  },
  'AI': {
    name: 'AI',
    logo: `${SIMPLE_ICONS_CDN}/anthropic.svg`,
    color: '#84cc16',
  },
  'Cybersecurity': {
    name: 'Cybersecurity',
    logo: `${SIMPLE_ICONS_CDN}/owasp.svg`,
    color: '#000000',
  },
  'Security': {
    name: 'Security',
    logo: `${SIMPLE_ICONS_CDN}/owasp.svg`,
    color: '#000000',
  },
  'Project Management': {
    name: 'Project Management',
    logo: `${SIMPLE_ICONS_CDN}/trello.svg`,
    color: '#0079bf',
  },
  'Data': {
    name: 'Data',
    logo: `${SIMPLE_ICONS_CDN}/datacamp.svg`,
    color: '#03a1e7',
  },
  'Business': {
    name: 'Business',
    logo: `${SIMPLE_ICONS_CDN}/linkedin.svg`,
    color: '#0a66c2',
  },
  'Web Development': {
    name: 'Web Development',
    logo: `${SIMPLE_ICONS_CDN}/w3c.svg`,
    color: '#005a9c',
  },
  'Frontend': {
    name: 'Frontend',
    logo: `${SIMPLE_ICONS_CDN}/react.svg`,
    color: '#61dafb',
  },
  'Backend': {
    name: 'Backend',
    logo: `${SIMPLE_ICONS_CDN}/nodedotjs.svg`,
    color: '#68a063',
  },
  'Programming': {
    name: 'Programming',
    logo: `${SIMPLE_ICONS_CDN}/gnubash.svg`,
    color: '#4eaa25',
  },
  'IT': {
    name: 'IT',
    logo: `${SIMPLE_ICONS_CDN}/cisco.svg`,
    color: '#1ba0d7',
  },
  'Code': {
    name: 'Code',
    logo: `${SIMPLE_ICONS_CDN}/anthropic.svg`,
    color: '#84cc16',
  },
  'Development': {
    name: 'Development',
    logo: `${SIMPLE_ICONS_CDN}/github.svg`,
    color: '#ffffff',
  },
  'Técnico': {
    name: 'Técnico',
    logo: `${SIMPLE_ICONS_CDN}/microsoft.svg`,
    color: '#00a4ef',
  },
  'Produtividade': {
    name: 'Produtividade',
    logo: `${SIMPLE_ICONS_CDN}/microsoft.svg`,
    color: '#00a4ef',
  },
  'Aprendizagem': {
    name: 'Aprendizagem',
    logo: `${SIMPLE_ICONS_CDN}/udemy.svg`,
    color: '#ec5905',
  },
  'Desenvolvimento Pessoal': {
    name: 'Desenvolvimento Pessoal',
    logo: `${SIMPLE_ICONS_CDN}/udemy.svg`,
    color: '#ec5905',
  },
  'Linguagem': {
    name: 'Linguagem',
    logo: `${SIMPLE_ICONS_CDN}/udemy.svg`,
    color: '#ec5905',
  },
  'Metodologia': {
    name: 'Metodologia',
    logo: `${SIMPLE_ICONS_CDN}/udemy.svg`,
    color: '#ec5905',
  },
  'Pesquisa': {
    name: 'Pesquisa',
    logo: `${SIMPLE_ICONS_CDN}/researchgate.svg`,
    color: '#0ea5e9',
  },
  'Ciência': {
    name: 'Ciência',
    logo: `${SIMPLE_ICONS_CDN}/arxiv.svg`,
    color: '#b31b1b',
  },
  'Coursera': {
    name: 'Coursera',
    logo: `${SIMPLE_ICONS_CDN}/coursera.svg`,
    color: '#0066cc',
  },
  'DataCamp': {
    name: 'DataCamp',
    logo: `${SIMPLE_ICONS_CDN}/datacamp.svg`,
    color: '#03a1e7',
  },
  'Cisco': {
    name: 'Cisco',
    logo: `${SIMPLE_ICONS_CDN}/cisco.svg`,
    color: '#1ba0d7',
  },
  'W3C': {
    name: 'W3C',
    logo: `${SIMPLE_ICONS_CDN}/w3c.svg`,
    color: '#005a9c',
  },
  'edX': {
    name: 'edX',
    logo: `${SIMPLE_ICONS_CDN}/edx.svg`,
    color: '#ffffff',
  },
};

export const getTechLogo = (techName: string): TechLogo | null => {
  // Tenta correspondência exata primeiro
  if (techLogosMap[techName]) {
    return techLogosMap[techName];
  }

  // Tenta correspondência parcial (case-insensitive)
  const key = Object.keys(techLogosMap).find(
    (k) => k.toLowerCase() === techName.toLowerCase()
  );

  if (key) {
    return techLogosMap[key];
  }

  // Retorna null se não encontrar (será filtrado depois)
  return null;
};

export const hasValidLogo = (techName: string): boolean => {
  return getTechLogo(techName) !== null;
};
