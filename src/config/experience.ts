export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

const experiencePT: Experience[] = [
  {
    role: 'Desenvolvedor de Software',
    company: 'PRODAM-AM (Empresa de Processamento de Dados do Amazonas)',
    companyUrl: 'https://prodam.am.gov.br/',
    period: 'Ago 2018 - Atual (7 anos 10 meses)',
    description: 'Desenvolvimento e manutenção de sistemas de informação para a administração pública estadual do Amazonas. Responsável por arquitetura, implementação e manutenção de soluções web escaláveis.',
    highlights: [
      'Desenvolvimento de múltiplas aplicações web em produção atendendo milhares de usuários',
      'Design e arquitetura de sistemas escaláveis para serviços públicos',
      'Integração com APIs externas e sistemas legados',
    ],
    technologies: ['TypeScript', 'Node.js', 'Vue.js', 'React', 'PostgreSQL', 'Docker', 'Cloud'],
  },
  {
    role: 'Gerente de Informática',
    company: 'SEMTRAD - Secretaria Municipal do Trabalho, Emprego e Desenvolvimento',
    companyUrl: 'https://www.manaus.am.gov.br/',
    period: 'Fev 2013 - Jul 2018 (5 anos 6 meses)',
    description: 'Liderança de equipe de TI responsável pela infraestrutura, desenvolvimento de sistemas e operações para a secretaria municipal. Gestão de orçamento de TI e planejamento estratégico de tecnologia.',
    highlights: [
      'Gerenciamento de equipe de até 5 profissionais de TI',
      'Modernização de sistemas legados e migração para plataforma web',
    ],
    technologies: ['Leadership', 'Infrastructure', 'Cloud Architecture', 'Process Automation', 'System Design'],
  },
  {
    role: 'Técnico de Informática',
    company: 'SEMTEPI - Secretaria Municipal do Trabalho, Empreendedorismo e Inovação',
    companyUrl: 'https://www.manaus.am.gov.br/',
    period: 'Set 2010 - Jan 2013 (2 anos 5 meses)',
    description: 'Gestão de infraestrutura de rede e sistemas para a secretaria municipal. Responsável pela administração de usuários, controle de permissões, manutenção de rede de computadores e suporte a múltiplos departamentos.',
    highlights: [
      'Gerenciamento de rede de computadores e infraestrutura de TI para vários departamentos',
      'Administração de sistemas Linux (LDAP, CAS) e gerenciamento de usuários',
      'Execução de projetos de cabeamento estruturado e especificação de serviços/produtos de TI',
      'Gerenciamento de equipe de técnicos estagiários de informática',
    ],
    technologies: ['Linux', 'Windows', 'LDAP', 'CAS', 'Network Administration', 'Infrastructure', 'Hardware Management'],
  },
];

const experienceEN: Experience[] = [
  {
    role: 'Software Developer',
    company: 'PRODAM-AM (Amazonas Data Processing Company)',
    companyUrl: 'https://prodam.am.gov.br/',
    period: 'Aug 2018 - Present (7 years 10 months)',
    description: 'Development and maintenance of information systems for the state public administration of Amazonas. Responsible for architecture, implementation, and maintenance of scalable web solutions.',
    highlights: [
      'Development of multiple production web applications serving thousands of users',
      'Design and architecture of scalable systems for public services',
      'Integration with external APIs and legacy systems',
    ],
    technologies: ['TypeScript', 'Node.js', 'Vue.js', 'React', 'PostgreSQL', 'Docker', 'Cloud'],
  },
  {
    role: 'IT Manager',
    company: 'SEMTRAD - Municipal Department of Labor, Employment and Development',
    companyUrl: 'https://www.manaus.am.gov.br/',
    period: 'Feb 2013 - Jul 2018 (5 years 6 months)',
    description: 'Leadership of IT team responsible for infrastructure, system development, and operations for the municipal secretariat. Management of IT budget and strategic technology planning.',
    highlights: [
      'Management of up to 5 IT professionals',
      'Modernization of legacy systems and migration to web platform',
    ],
    technologies: ['Leadership', 'Infrastructure', 'Cloud Architecture', 'Process Automation', 'System Design'],
  },
  {
    role: 'IT Technician',
    company: 'SEMTEPI - Municipal Department of Labor, Entrepreneurship and Innovation',
    companyUrl: 'https://www.manaus.am.gov.br/',
    period: 'Sep 2010 - Jan 2013 (2 years 5 months)',
    description: 'Management of network infrastructure and systems for the municipal secretariat. Responsible for user administration, permission control, computer network maintenance, and support for multiple departments.',
    highlights: [
      'Management of computer networks and IT infrastructure for multiple departments',
      'Administration of Linux systems (LDAP, CAS) and user management',
      'Execution of structured cabling projects and specification of IT services/products',
      'Management of IT technician and intern teams',
    ],
    technologies: ['Linux', 'Windows', 'LDAP', 'CAS', 'Network Administration', 'Infrastructure', 'Hardware Management'],
  },
];

export function getExperience(lang: 'pt' | 'en'): Experience[] {
  return lang === 'pt' ? experiencePT : experienceEN;
}
