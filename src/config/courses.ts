export interface Course {
  name: string;
  platform: string;
  technologies: string[];
  completedAt: string; // mês/ano
  certificate?: {
    url?: string;
    credentialCode?: string;
  };
  description?: string;
}

export const courses: Course[] = [
  {
    name: 'Data Administrator / Project Manager',
    platform: 'GRAN',
    technologies: ['Data', 'Project Management', 'Business'],
    completedAt: 'abr 2026',
    description: 'Certificação intermediária em administração de dados e gerenciamento de projetos',
  },
  {
    name: 'Claude Code 101',
    platform: 'Anthropic',
    technologies: ['Claude', 'AI', 'Code', 'Development'],
    completedAt: 'abr 2026',
    certificate: {
      credentialCode: '6zx59q2tz4hu',
    },
    description: 'Certificate of completion: Claude code 101. Competências: Claude da Anthropic, Subagentes de Código Claude',
  },
  {
    name: 'Claude 101',
    platform: 'Anthropic',
    technologies: ['Claude', 'AI', 'Machine Learning'],
    completedAt: 'abr 2026',
    certificate: {
      credentialCode: 'zxxizh6yd85j',
    },
    description: 'Certificate of completion: Claude 101. Competências: Inteligência artificial, Claude da Anthropic',
  },
  {
    name: 'IA para DEVs',
    platform: 'CESAR School',
    technologies: ['AI', 'Development', 'Python', 'Machine Learning'],
    completedAt: 'ago 2025',
    description: 'Certificado em Inteligência Artificial para desenvolvedores',
  },
  {
    name: 'Introduction to Python',
    platform: 'DataCamp',
    technologies: ['Python', 'Programming', 'Data Science'],
    completedAt: 'jun 2025',
    description: 'Competências: Python e NumPy',
  },
  {
    name: 'Understanding Machine Learning',
    platform: 'DataCamp',
    technologies: ['Machine Learning', 'Data Science', 'Deep Learning'],
    completedAt: 'jun 2025',
    description: 'Competências: Machine Learning e Deep Learning',
  },
  {
    name: 'Understanding ChatGPT',
    platform: 'DataCamp',
    technologies: ['ChatGPT', 'AI', 'NLP', 'Generative AI'],
    completedAt: 'jun 2025',
    description: 'Competências: ChatGPT e IA generativa',
  },
  {
    name: 'Understanding Artificial Intelligence',
    platform: 'DataCamp',
    technologies: ['AI', 'Machine Learning', 'Data Science'],
    completedAt: 'jun 2025',
    description: 'Competências: Inteligência artificial e Aprendizado de máquina',
  },
  {
    name: 'Introduction to Cybersecurity',
    platform: 'Cisco',
    technologies: ['Cybersecurity', 'Security', 'IT'],
    completedAt: 'mai 2025',
    certificate: {
      url: 'Introdução a Cibersegurança - CISCO',
    },
    description: 'Competências: Cibersegurança, CyberSecurity',
  },
];

// Extrair todas as tecnologias únicas para filtro
export const getAllTechnologies = () => {
  return Array.from(
    new Set(courses.flatMap((course) => course.technologies))
  ).sort();
};
