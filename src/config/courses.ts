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
    name: 'Google AI Essentials',
    platform: 'Coursera',
    technologies: ['AI', 'Google Cloud', 'Machine Learning', 'Generative AI'],
    completedAt: 'abr 2025',
    certificate: {
      url: 'https://coursera.org/verify/QBKI6CGYDMG4',
      credentialCode: 'QBKI6CGYDMG4',
    },
    description: 'Certificado pela Google. Programa de cursos integrados sobre IA essencial',
  },
  {
    name: 'Claude Code - The Practical Guide',
    platform: 'Udemy',
    technologies: ['Claude', 'AI', 'Code', 'Development'],
    completedAt: 'jun 2026',
    certificate: {
      url: 'https://www.udemy.com/certificate/UC-2636df55-0c5d-4f2f-bb36-ee9bad5725de/',
      credentialCode: 'UC-2636df55-0c5d-4f2f-bb36-ee9bad5725de',
    },
    description: 'Guia prático sobre Claude Code pela Academind. Competências: Claude, desenvolvimento com IA',
  },
  {
    name: 'HTML, CSS, and Javascript for Web Developers',
    platform: 'Coursera',
    technologies: ['HTML5', 'CSS', 'JavaScript', 'Web Development', 'Frontend'],
    completedAt: 'out 2024',
    certificate: {
      url: 'https://www.coursera.org/account/accomplishments/verify/1Z82NDTIW58J',
      credentialCode: '1Z82NDTIW58J',
    },
    description: 'Certificado pela Johns Hopkins University. Competências: Front-End Web Development, JavaScript, HTML, CSS, Responsive Web Design, AJAX',
  },
  {
    name: 'Programming with JavaScript',
    platform: 'Coursera',
    technologies: ['JavaScript', 'Programming', 'Web Development'],
    completedAt: 'set 2023',
    certificate: {
      url: 'https://www.coursera.org/account/accomplishments/verify/768KNH2MLFG4',
      credentialCode: '768KNH2MLFG4',
    },
    description: 'Certificado pela Meta. Competências: Desenvolvimento de código JavaScript, objetos e arrays, testes unitários com Jest',
  },
  {
    name: 'Introduction to Front-End Development',
    platform: 'Coursera',
    technologies: ['Frontend', 'React', 'HTML5', 'CSS', 'JavaScript', 'Web Development'],
    completedAt: 'set 2023',
    certificate: {
      url: 'https://www.coursera.org/account/accomplishments/verify/8UE3HUCJD5YX',
      credentialCode: '8UE3HUCJD5YX',
    },
    description: 'Certificado pela Meta. Competências: Front-End Development, React.js, Bootstrap, Responsive Web Design',
  },
  {
    name: 'Version Control',
    platform: 'Coursera',
    technologies: ['Git', 'GitHub', 'Version Control', 'Command Line'],
    completedAt: 'ago 2023',
    certificate: {
      url: 'https://www.coursera.org/account/accomplishments/verify/HD8R9NX22B8Z',
      credentialCode: 'HD8R9NX22B8Z',
    },
    description: 'Certificado pela Meta. Competências: Git, GitHub, Unix Commands, Linux, Command-Line Interface, Controle de Versão',
  },
  {
    name: 'HTML5.0x: HTML5 and CSS Fundamentals',
    platform: 'edX',
    technologies: ['HTML5', 'CSS', 'Web Development', 'Frontend'],
    completedAt: 'jun 2026',
    certificate: {
      url: 'https://courses.edx.org/certificates/e841b2b57de9490886beaddc99ba35b6',
      credentialCode: 'e841b2b57de9490886beaddc99ba35b6',
    },
    description: 'Certificado Verificado pela W3Cx. Competências: HTML5 e CSS Fundamentals',
  },
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
      url: 'https://learn.anthropic.com/verify-certificate?credential=6zx59q2tz4hu',
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
      url: 'https://learn.anthropic.com/verify-certificate?credential=zxxizh6yd85j',
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
  {
    name: 'Introduction to HTML5',
    platform: 'Coursera',
    technologies: ['HTML5', 'Web Development', 'Frontend'],
    completedAt: 'out 2024',
    certificate: {
      url: 'https://www.coursera.org/account/accomplishments/verify/QEF0XGYGN7DI',
      credentialCode: 'QEF0XGYGN7DI',
    },
    description: 'Certificado de conclusão: Introduction to HTML5 pela University of Michigan',
  },
  {
    name: 'Formatação dinâmica de TCC - Microsoft Word',
    platform: 'Udemy',
    technologies: ['Microsoft Word', 'Técnico', 'Produtividade'],
    completedAt: 'set 2022',
    certificate: {
      url: 'https://www.udemy.com/certificate/UC-5c2e4be5-e8cf-4b8b-92d5-40feee8ad019/',
      credentialCode: 'UC-5c2e4be5-e8cf-4b8b-92d5-40feee8ad019',
    },
    description: 'Formatação dinâmica de Trabalhos Científicos em Microsoft Word',
  },
  {
    name: 'Hiper-Memória & Hiper-Aprendizagem',
    platform: 'Udemy',
    technologies: ['Aprendizagem', 'Desenvolvimento Pessoal'],
    completedAt: 'set 2023',
    certificate: {
      url: 'https://www.udemy.com/certificate/UC-199cbe6b-9c21-4b60-83d7-eda4536e6b93/',
      credentialCode: 'UC-199cbe6b-9c21-4b60-83d7-eda4536e6b93',
    },
    description: 'Curso sobre técnicas de memorização e aprendizagem acelerada',
  },
  {
    name: 'Curso de Português: Intelectção e Interpretação de Textos',
    platform: 'Udemy',
    technologies: ['Português', 'Linguagem'],
    completedAt: 'out 2021',
    certificate: {
      url: 'https://www.udemy.com/certificate/UC-89e7998d-e256-46cc-8f6e-7f02440d30df/',
      credentialCode: 'UC-89e7998d-e256-46cc-8f6e-7f02440d30df',
    },
    description: 'Competências: Intelectção e interpretação de textos em português',
  },
  {
    name: 'Curso Completo de Metodologia Científica',
    platform: 'Udemy',
    technologies: ['Metodologia', 'Pesquisa', 'Ciência'],
    completedAt: 'jul 2021',
    certificate: {
      url: 'https://www.udemy.com/certificate/UC-6b8b0036-01bd-42c6-9ff2-f5c73a606197/',
      credentialCode: 'UC-6b8b0036-01bd-42c6-9ff2-f5c73a606197',
    },
    description: 'Curso completo sobre metodologia científica para pesquisa e desenvolvimento',
  },
];

// Extrair todas as tecnologias únicas para filtro
export const getAllTechnologies = () => {
  return Array.from(
    new Set(courses.flatMap((course) => course.technologies))
  ).sort();
};
