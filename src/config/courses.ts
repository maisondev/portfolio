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
    name: 'Lógica de programação: mergulhe em programação com JavaScript',
    platform: 'Alura',
    technologies: ['JavaScript', 'Programming', 'Lógica'],
    completedAt: 'mar 2024',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/logica-programacao-mergulhe-programacao-javascript/certificate',
    },
    description: 'Competências: JavaScript, lógica de programação, condicionais, loops',
  },
  {
    name: 'Certificação Linux LPI Essentials parte 2: Open Source Software and Licensing',
    platform: 'Alura',
    technologies: ['Linux', 'Open Source', 'DevOps'],
    completedAt: 'jul 2020',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/linux-essentials-2/certificate',
    },
    description: 'Competências: Open source philosophy, licensing frameworks (GPL, BSD, Apache)',
  },
  {
    name: 'Certificação Linux LPI Essentials parte 1: Evolution and Distributions',
    platform: 'Alura',
    technologies: ['Linux', 'DevOps', 'Package Management'],
    completedAt: 'jun 2020',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/linux-essentials-1/certificate',
    },
    description: 'Competências: Linux distributions, package management, server applications',
  },
  {
    name: 'Git e Github: estratégias de ramificação, Conflitos e Pull Requests',
    platform: 'Alura',
    technologies: ['Git', 'GitHub', 'Version Control'],
    completedAt: 'mai 2020',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/git-github-branching-conflitos-pull-requests/certificate',
    },
    description: 'Competências: Git branching, conflict resolution, pull requests, GitHub workflows',
  },
  {
    name: 'JavaScript: interfaces e Herança em Orientação a Objetos',
    platform: 'Alura',
    technologies: ['JavaScript', 'OOP', 'Programming'],
    completedAt: 'mai 2020',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/javascript-polimorfismo/certificate',
    },
    description: 'Competências: Inheritance, interfaces, abstract classes em JavaScript',
  },
  {
    name: 'JavaScript: programando a Orientação a Objetos',
    platform: 'Alura',
    technologies: ['JavaScript', 'OOP', 'Programming'],
    completedAt: 'mai 2020',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/javascritpt-orientacao-objetos/certificate',
    },
    description: 'Competências: OOP em JavaScript, constructors, static methods, code modularization',
  },
  {
    name: 'JavaScript: explorando a linguagem',
    platform: 'Alura',
    technologies: ['JavaScript', 'Programming'],
    completedAt: 'mai 2020',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/javascript-introducao/certificate',
    },
    description: 'Competências: JavaScript fundamentals, variables, collections, conditionals, iteration',
  },
  {
    name: 'Amazon S3: Manipule e armazene objetos na nuvem',
    platform: 'Alura',
    technologies: ['AWS', 'Amazon S3', 'Cloud', 'DevOps'],
    completedAt: 'jan 2020',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/aws-s3-manipule-e-armazene-na-nuvem/certificate',
    },
    description: 'Competências: AWS S3, cloud storage, access policies, versioning, storage classes',
  },
  {
    name: 'HTML5 e CSS3 parte 4: avançando no CSS',
    platform: 'Alura',
    technologies: ['HTML5', 'CSS3', 'Web Development', 'Frontend'],
    completedAt: 'dez 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/html5-css3-avancando-css/certificate',
    },
    description: 'Competências: Advanced CSS, responsive design, opacity, shadows, selectors',
  },
  {
    name: 'HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas',
    platform: 'Alura',
    technologies: ['HTML5', 'CSS3', 'Web Development', 'Frontend'],
    completedAt: 'dez 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/html5-css3-formularios-tabelas/certificate',
    },
    description: 'Competências: HTML5 forms, tables, semantic HTML, advanced CSS',
  },
  {
    name: 'Node.js Parte 1: Inovando com JavaScript no backend',
    platform: 'Alura',
    technologies: ['Node.js', 'JavaScript', 'Backend', 'Express'],
    completedAt: 'dez 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/nodejs-fundamentos/certificate',
    },
    description: 'Competências: Node.js, Express, middleware, backend JavaScript development',
  },
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
  {
    name: 'Arquitetura de computadores: por trás de como seu programa funciona',
    platform: 'Alura',
    technologies: ['Programação', 'Arquitetura', 'Computadores'],
    completedAt: 'jul 2021',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/arquitetura-computadores-funcionamento-programa/certificate',
    },
    description: 'Competências: Arquitetura de computadores, execução de programas, memória',
  },
  {
    name: 'Lógica de programação: laços e listas com JavaScript',
    platform: 'Alura',
    technologies: ['JavaScript', 'Programming', 'Lógica'],
    completedAt: 'jul 2021',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/javascript-listas-lacos/certificate',
    },
    description: 'Competências: Loops, arrays/listas, JavaScript fundamentals',
  },
  {
    name: 'Lógica de programação: comece em lógica com o jogo Pong e JavaScript',
    platform: 'Alura',
    technologies: ['JavaScript', 'Game Development', 'Lógica'],
    completedAt: 'jul 2021',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/pong-javascript/certificate',
    },
    description: 'Competências: Game development, JavaScript, lógica de programação aplicada',
  },
  {
    name: 'Rest com NodeJS: API com Express e MySQL',
    platform: 'Alura',
    technologies: ['Node.js', 'Express', 'MySQL', 'API REST', 'Backend'],
    completedAt: 'abr 2021',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/node-rest-api/certificate',
    },
    description: 'Competências: REST API, Node.js, Express framework, MySQL database',
  },
  {
    name: 'Lean Startup: primeiros passos da sua Startup enxuta',
    platform: 'Alura',
    technologies: ['Lean', 'Startups', 'Business', 'Gestão'],
    completedAt: 'dez 2020',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/lean/certificate',
    },
    description: 'Competências: Lean methodology, MVP development, startup strategy',
  },
  {
    name: 'Adobe XD: design visual de um site mobile',
    platform: 'Alura',
    technologies: ['Adobe XD', 'Design', 'Mobile', 'UI/UX'],
    completedAt: 'out 2020',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/adobe-xd-site-mobile/certificate',
    },
    description: 'Competências: Adobe XD, mobile design, wireframing, prototyping',
  },
  {
    name: 'Figma: design visual de um site mobile',
    platform: 'Alura',
    technologies: ['Figma', 'Design', 'Mobile', 'UI/UX'],
    completedAt: 'set 2020',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/figma-design-visual-site-mobile/certificate',
    },
    description: 'Competências: Figma, mobile design, wireframing, prototyping, visual design',
  },
  {
    name: 'Certificação PMP e CAPM parte 1: processos de gerenciamento de projetos',
    platform: 'Alura',
    technologies: ['PMP', 'Project Management', 'Gestão'],
    completedAt: 'set 2020',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/certificacao-pmp-processos-de-gerenciamento-projetos/certificate',
    },
    description: 'Competências: PMP/CAPM certification, project management processes',
  },
  {
    name: 'Certificação Linux LPI Essentials parte 3: Command Line Basics',
    platform: 'Alura',
    technologies: ['Linux', 'Command Line', 'DevOps'],
    completedAt: 'ago 2020',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/linux-essentials-3/certificate',
    },
    description: 'Competências: Linux, command line, shell basics, system administration',
  },
  {
    name: 'HTML5 e CSS3 parte 2: posicionamento, listas e navegação',
    platform: 'Alura',
    technologies: ['HTML5', 'CSS3', 'Web Development', 'Frontend'],
    completedAt: 'dez 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/html5-css3-posicionamento-listas-navegacao/certificate',
    },
    description: 'Competências: CSS positioning, list structures, navigation design',
  },
  {
    name: 'HTML5 e CSS3 parte 1: crie uma página da Web',
    platform: 'Alura',
    technologies: ['HTML5', 'CSS3', 'Web Development', 'Frontend'],
    completedAt: 'nov 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/html5-css3-primeiros-passos/certificate',
    },
    description: 'Competências: HTML5 fundamentals, CSS3 styling, web page creation',
  },
  {
    name: 'Introdução aos Métodos Ágeis',
    platform: 'Alura',
    technologies: ['Agile', 'Scrum', 'Gestão', 'Project Management'],
    completedAt: 'out 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/introducao-aos-metodos-ageis/certificate',
    },
    description: 'Competências: Agile methods, Scrum, XP, Kanban, sprint planning',
  },
  {
    name: 'Linux II: programas, processos e pacotes',
    platform: 'Alura',
    technologies: ['Linux', 'DevOps', 'System Administration'],
    completedAt: 'out 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/linux-ubuntu-processos/certificate',
    },
    description: 'Competências: Process management, package installation, user management, shell scripting',
  },
  {
    name: 'Scrum: agilidade em seu projeto',
    platform: 'Alura',
    technologies: ['Scrum', 'Agile', 'Project Management', 'Gestão'],
    completedAt: 'set 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/agile-scrum/certificate',
    },
    description: 'Competências: Scrum framework, sprint management, retrospectives, backlog management',
  },
  {
    name: 'Git e Github: controle e compartilhe seu código',
    platform: 'Alura',
    technologies: ['Git', 'GitHub', 'Version Control', 'DevOps'],
    completedAt: 'set 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/git-github-controle-de-versao/certificate',
    },
    description: 'Competências: Git fundamentals, GitHub collaboration, version management',
  },
  {
    name: 'Avançando com PHP: Arrays, Strings, Função e Web',
    platform: 'Alura',
    technologies: ['PHP', 'Programming', 'Backend', 'Web Development'],
    completedAt: 'ago 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/php-arrays-strings-funcoes/certificate',
    },
    description: 'Competências: PHP arrays, strings, functions, web development with PHP',
  },
  {
    name: 'Mídias Sociais: estratégias para engajar o público',
    platform: 'Alura',
    technologies: ['Social Media', 'Marketing', 'Business'],
    completedAt: 'jul 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/estrategias-midias-sociais/certificate',
    },
    description: 'Competências: Social media strategy, content creation, community engagement, analytics',
  },
  {
    name: 'Linux I: conhecendo e utilizando o terminal',
    platform: 'Alura',
    technologies: ['Linux', 'Terminal', 'DevOps', 'Bash'],
    completedAt: 'jul 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/linux-ubuntu/certificate',
    },
    description: 'Competências: Linux terminal, file management, text editing with VI',
  },
  {
    name: 'PHP: conceitos, lidando com dados, loops e mais',
    platform: 'Alura',
    technologies: ['PHP', 'Backend', 'Programming'],
    completedAt: 'jul 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/php-primeiros-passos/certificate',
    },
    description: 'Competências: PHP, variáveis, tipos de dados, strings, loops, condicionais',
  },
  {
    name: 'Modelagem de Banco de Dados Relacional: Índices e Normalização',
    platform: 'Alura',
    technologies: ['Database', 'Data', 'SQL'],
    completedAt: 'jul 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/modelagem-banco-relacional/certificate',
    },
    description: 'Competências: Índices de banco de dados, normalização, formas normais',
  },
  {
    name: 'Comandos DML: manipulação de dados com MySQL',
    platform: 'Alura',
    technologies: ['MySQL', 'SQL', 'Database'],
    completedAt: 'jul 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/mysql-dml-manipulacao-de-dados/certificate',
    },
    description: 'Competências: SQL DML, inserção, atualização, exclusão de dados, triggers',
  },
  {
    name: 'Android parte 3: refinando o projeto',
    platform: 'Alura',
    technologies: ['Android', 'Java', 'Mobile Development'],
    completedAt: 'jun 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/android-refinando-o-projeto/certificate',
    },
    description: 'Competências: UI design patterns, arquitetura de aplicação, diálogos, refatoração',
  },
  {
    name: 'Android parte 2: avançando com listeners, menu e UI',
    platform: 'Alura',
    technologies: ['Android', 'Java', 'Mobile Development'],
    completedAt: 'jun 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/android-avancando-listeners-menu-ui/certificate',
    },
    description: 'Competências: Event listeners, menus, UI design, componentes Android',
  },
  {
    name: 'SOLID com Java: Orientação a Objetos com Java',
    platform: 'Alura',
    technologies: ['Java', 'Programming', 'Metodologia'],
    completedAt: 'jun 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/orientacao-a-objetos-avancada-e-principios-solid/certificate',
    },
    description: 'Competências: SOLID principles, single responsibility, open/closed, Liskov substitution',
  },
  {
    name: 'Consultas SQL: avançando no SQL com MySQL',
    platform: 'Alura',
    technologies: ['MySQL', 'SQL', 'Database'],
    completedAt: 'jun 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/mysql-consultas-sql/certificate',
    },
    description: 'Competências: Filtros SQL, joins, funções MySQL, relatórios, otimização de queries',
  },
  {
    name: 'SQL com MySQL: manipule e consulte dados',
    platform: 'Alura',
    technologies: ['MySQL', 'SQL', 'Database'],
    completedAt: 'jun 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/mysql-manipule-dados-com-sql/certificate',
    },
    description: 'Competências: Manipulação e consulta de dados, operações CRUD, gerenciamento de banco',
  },
  {
    name: 'Agilidade: promovendo a transformação ágil',
    platform: 'Alura',
    technologies: ['Agile', 'Metodologia', 'Project Management'],
    completedAt: 'jun 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/fundamentos-agilidade/certificate',
      credentialCode: '089c9956-67b5-441e-8383-5bc3dfc32c08',
    },
    description: 'Competências: Metodologias ágeis, Waterfall vs Agile, priorização, feedback loops',
  },
  {
    name: 'Design Patterns Java II: Boas praticas de programação',
    platform: 'Alura',
    technologies: ['Java', 'Programming', 'Design Patterns'],
    completedAt: 'jun 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/design-patterns-2/certificate',
    },
    description: 'Competências: Design patterns avançados, factories, flyweight, visitor, adapters',
  },
  {
    name: 'Android parte 1: crie um app mobile',
    platform: 'Alura',
    technologies: ['Android', 'Java', 'Mobile Development'],
    completedAt: 'mai 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/android-sua-primeira-app-mobile/certificate',
    },
    description: 'Competências: Desenvolvimento Android, layouts, Activities, construção de aplicações mobile',
  },
  {
    name: 'Orientação a Objetos: Melhores técnicas com Java',
    platform: 'Alura',
    technologies: ['Java', 'Programming', 'Object-Oriented Design'],
    completedAt: 'mai 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/orientacao-objetos-java/certificate',
    },
    description: 'Competências: Programação orientada a objetos, encapsulamento, herança, polimorfismo',
  },
  {
    name: 'Design Patterns Java I: Boas práticas de programação',
    platform: 'Alura',
    technologies: ['Java', 'Programming', 'Design Patterns'],
    completedAt: 'mai 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/design-patterns/certificate',
    },
    description: 'Competências: Design patterns Strategy, Chain of Responsibility, Template Method, Decorator',
  },
  {
    name: 'VRaptor3: Suas aplicações web em java mais produtivas',
    platform: 'Alura',
    technologies: ['VRaptor', 'Java', 'Web Framework'],
    completedAt: 'abr 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/vraptor/certificate',
    },
    description: 'Competências: Framework VRaptor3, MVC architecture, controllers, dependency injection',
  },
  {
    name: 'Expressões regulares: capturando textos de forma mágica',
    platform: 'Alura',
    technologies: ['Regex', 'Programming', 'Text Processing'],
    completedAt: 'abr 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/expressoes-regulares/certificate',
    },
    description: 'Competências: Expressões regulares, pattern matching, character classes, greedy vs lazy',
  },
  {
    name: 'Java e java.io: Streams, Reader e Writers',
    platform: 'Alura',
    technologies: ['Java', 'Backend', 'File I/O'],
    completedAt: 'abr 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/java-trabalhando-com-io/certificate',
    },
    description: 'Competências: Java I/O, Streams, file operations, encoding, object serialization',
  },
  {
    name: 'Java e java.util: Coleções, Wrappers e Lambda expressions',
    platform: 'Alura',
    technologies: ['Java', 'Backend', 'Lambdas'],
    completedAt: 'abr 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/java-util-lambdas/certificate',
    },
    description: 'Competências: Collections API, wrapper classes, lambda expressions, anonymous classes',
  },
  {
    name: 'Java e java.lang: programe com a classe Object e String',
    platform: 'Alura',
    technologies: ['Java', 'Backend', 'Programming'],
    completedAt: 'mar 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/java-pacotes-e-java-lang/certificate',
    },
    description: 'Competências: Java fundamentals, java.lang package, Object class, String class',
  },
  {
    name: 'Vue.js parte 1: construindo Single Page Applications',
    platform: 'Alura',
    technologies: ['Vue.js', 'JavaScript', 'Frontend'],
    completedAt: 'mar 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/vue-parte1/certificate',
    },
    description: 'Competências: Vue.js, component creation, API integration, routing, animations',
  },
  {
    name: 'JavaScript: conhecendo o Browser e padrões de projeto',
    platform: 'Alura',
    technologies: ['JavaScript', 'Frontend', 'Design Patterns'],
    completedAt: 'mar 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/javascript-es6-orientacao-a-objetos-parte-1/certificate',
    },
    description: 'Competências: ES6, object-oriented programming, browser APIs, design patterns',
  },
  {
    name: 'Java Exceções: aprenda a criar, lançar e controlar exceções',
    platform: 'Alura',
    technologies: ['Java', 'Backend', 'Programming'],
    completedAt: 'mar 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/java-excecoes/certificate',
    },
    description: 'Competências: Exception handling, throwing exceptions, checked vs unchecked exceptions',
  },
  {
    name: 'Java Polimorfismo: entenda herança e interfaces',
    platform: 'Alura',
    technologies: ['Java', 'Backend', 'Object-Oriented Design'],
    completedAt: 'mar 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/java-heranca-interfaces-polimorfismo/certificate',
    },
    description: 'Competências: Herança, polymorphism, interfaces, abstract classes, method overriding',
  },
  {
    name: 'Java OO: entendendo a Orientação a Objetos',
    platform: 'Alura',
    technologies: ['Java', 'Backend', 'Object-Oriented Design'],
    completedAt: 'fev 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/java-introducao-orientacao-objetos/certificate',
    },
    description: 'Competências: OOP fundamentals, encapsulation, object composition, static members',
  },
  {
    name: 'Java JRE e JDK: compile e execute o seu programa',
    platform: 'Alura',
    technologies: ['Java', 'Backend', 'Development Tools'],
    completedAt: 'fev 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/java-primeiros-passos/certificate',
    },
    description: 'Competências: Java installation, JRE/JDK setup, Eclipse IDE, data types, variables',
  },
  {
    name: 'Sass e Compass: Descomplicando o CSS',
    platform: 'Alura',
    technologies: ['Sass', 'CSS', 'Frontend'],
    completedAt: 'fev 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/sass/certificate',
    },
    description: 'Competências: Sass, Compass, mixins, nesting, color functions, mathematical operations',
  },
  {
    name: 'PHP e MySQL II: Cookies, sessões e mais recursos',
    platform: 'Alura',
    technologies: ['PHP', 'MySQL', 'Backend', 'Web Development'],
    completedAt: 'jan 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/php-mysql-e-fundamentos-da-web-parte-2/certificate',
    },
    description: 'Competências: Authentication, sessions, security, email, SQL injection prevention',
  },
  {
    name: 'Front-end: Projeto de conclusão',
    platform: 'Alura',
    technologies: ['Frontend', 'Web Development', 'HTML', 'CSS', 'JavaScript'],
    completedAt: 'jan 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/projeto-carreira-front-end/certificate',
    },
    description: 'Competências: Header design, presenter panels, forms, page interactivity',
  },
  {
    name: 'jQuery: avance na biblioteca mais popular do mercado parte 2',
    platform: 'Alura',
    technologies: ['jQuery', 'JavaScript', 'Frontend'],
    completedAt: 'dez 2018',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/jquery-a-biblioteca-do-mercado-parte-2/certificate',
    },
    description: 'Competências: jQuery animations, AJAX, error handling, CORS, plugins',
  },
  {
    name: 'Vim: boas práticas a edição no terminal',
    platform: 'Alura',
    technologies: ['Vim', 'Terminal', 'Development Tools'],
    completedAt: 'dez 2018',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/vim/certificate',
    },
    description: 'Competências: Vim editor, terminal editing, configuration, code patterns',
  },
  {
    name: 'jQuery: domine a biblioteca mais popular do mercado parte 1',
    platform: 'Alura',
    technologies: ['jQuery', 'JavaScript', 'Frontend'],
    completedAt: 'dez 2018',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/jquery-a-biblioteca-do-mercado/certificate',
    },
    description: 'Competências: jQuery events, DOM manipulation, element creation, event listeners',
  },
  {
    name: 'UX: o que é experiência de usuário',
    platform: 'Alura',
    technologies: ['UX Design', 'Design', 'User Experience'],
    completedAt: 'dez 2018',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/ux-base/certificate',
    },
    description: 'Competências: UX fundamentals, ideation, kanban, design deliverables, decision-making',
  },
  {
    name: 'Go: a linguagem do Google',
    platform: 'Alura',
    technologies: ['Go', 'Backend', 'Programming'],
    completedAt: 'nov 2018',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/golang/certificate',
    },
    description: 'Competências: Go language, variables, control flow, web requests, collections, file I/O',
  },
  {
    name: 'PHP e MySQL I: Fundamentos para criar um sistema na Web',
    platform: 'Alura',
    technologies: ['PHP', 'MySQL', 'Backend', 'Web Development'],
    completedAt: 'nov 2018',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/php-mysql-e-fundamentos-da-web/certificate',
    },
    description: 'Competências: PHP basics, MySQL, form handling, product management, server deployment',
  },
  {
    name: 'Bootstrap: criação de uma single-page responsiva',
    platform: 'Alura',
    technologies: ['Bootstrap', 'CSS', 'Responsive Design', 'Frontend'],
    completedAt: 'ago 2018',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/bootstrap-criacao-single-page-responsiva/certificate',
    },
    description: 'Competências: Bootstrap framework, responsive design, single-page applications',
  },
  {
    name: 'WordPress: Primeiros passos para não programadores',
    platform: 'Alura',
    technologies: ['WordPress', 'CMS', 'Web Development'],
    completedAt: 'jul 2018',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/wordpress-primeiros-passos/certificate',
    },
    description: 'Competências: WordPress setup, site customization, content management, SEO',
  },
  {
    name: 'C: avançando na linguagem',
    platform: 'Alura',
    technologies: ['C', 'Programming', 'Backend'],
    completedAt: 'jul 2018',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/introducao-a-programacao-com-c-parte-2/certificate',
    },
    description: 'Competências: C arrays, pointers, memory management, binary, functions, I/O',
  },
  {
    name: 'C: conhecendo a Linguagem das Linguagens',
    platform: 'Alura',
    technologies: ['C', 'Programming', 'Backend'],
    completedAt: 'jun 2018',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/introducao-a-programacao-com-c-parte-1/certificate',
    },
    description: 'Competências: C fundamentals, variables, conditionals, loops, data types, game logic',
  },
  {
    name: 'Gestalt: aplicando princípios em um layout Photoshop',
    platform: 'Alura',
    technologies: ['Photoshop', 'Design', 'UX Design'],
    completedAt: 'jan 2018',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/design-gestalt/certificate',
    },
    description: 'Competências: Gestalt principles, Photoshop layout design, website design',
  },
  {
    name: 'Acessibilidade web: crie designs inclusivos',
    platform: 'Alura',
    technologies: ['Web Accessibility', 'Design', 'Inclusive Design'],
    completedAt: 'jan 2018',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/acessibilidade-web-design-inclusivos/certificate',
    },
    description: 'Competências: Web accessibility, inclusive design for autism, deafness, dyslexia, low vision',
  },
  {
    name: 'Minecraft: crie estruturas com redstone',
    platform: 'Alura',
    technologies: ['Minecraft', 'Lógica', 'Programming Concepts'],
    completedAt: 'jan 2018',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/minecraft-estruturas-logicas-redstone/certificate',
    },
    description: 'Competências: Redstone automation, circuits, conditional logic, pistons, dispensers',
  },
  {
    name: 'Chrome DevTools: analise, inspecione e depure suas páginas Web',
    platform: 'Alura',
    technologies: ['Chrome DevTools', 'Frontend', 'Debugging'],
    completedAt: 'out 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/chrome-devtools/certificate',
    },
    description: 'Competências: Chrome DevTools, inspection, debugging, performance, cookies, cache',
  },
  {
    name: 'Git: Controle e compartilhe seu código',
    platform: 'Alura',
    technologies: ['Git', 'Version Control', 'Development Tools'],
    completedAt: 'out 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/git/certificate',
    },
    description: 'Competências: Git fundamentals, branching, conflict resolution, open-source contribution',
  },
  {
    name: 'Web Design Responsivo: Páginas que se adaptam do mobile ao desk',
    platform: 'Alura',
    technologies: ['Responsive Design', 'CSS', 'Web Design'],
    completedAt: 'out 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/web-design-responsivo/certificate',
    },
    description: 'Competências: Fluid design, media queries, responsive imagery, mobile UX, viewport',
  },
  {
    name: 'Flexbox: posicione elementos na tela',
    platform: 'Alura',
    technologies: ['Flexbox', 'CSS', 'Layout'],
    completedAt: 'out 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/posicione-elementos-com-flexbox/certificate',
    },
    description: 'Competências: Flexbox layout, responsive design, grid layouts, mobile optimization',
  },
  {
    name: 'Hábitos: da produtividade às metas pessoais',
    platform: 'Alura',
    technologies: ['Produtividade', 'Desenvolvimento Pessoal', 'Habilidades'],
    completedAt: 'jun 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/habitos/certificate',
    },
    description: 'Competências: Habit formation, productivity, self-discipline, personal goals',
  },
  {
    name: 'Java e JDBC: Trabalhando com um banco de dados',
    platform: 'Alura',
    technologies: ['Java', 'JDBC', 'Database', 'Backend'],
    completedAt: 'mai 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/jdbc/certificate',
    },
    description: 'Competências: JDBC, database operations, SQL injection prevention, transactions',
  },
  {
    name: 'MySQL I: Iniciando suas consultas',
    platform: 'Alura',
    technologies: ['MySQL', 'SQL', 'Database'],
    completedAt: 'mai 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/introducao-a-banco-de-dados-e-sql/certificate',
    },
    description: 'Competências: MySQL queries, data consultation, updates, deletions, joins',
  },
  {
    name: 'Java e JSTL: Tags para facilitar o desenvolvimento JSP',
    platform: 'Alura',
    technologies: ['Java', 'JSTL', 'JSP', 'Web Development'],
    completedAt: 'mai 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/jstl/certificate',
    },
    description: 'Competências: JSTL tags, JSP development, iterating collections, formatting',
  },
  {
    name: 'Servlets: Fundamentos de Java na Web',
    platform: 'Alura',
    technologies: ['Java', 'Servlets', 'Web Development', 'Backend'],
    completedAt: 'mai 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/servlet-3-e-fundamentos-web/certificate',
    },
    description: 'Competências: Servlet API, HTTP methods, cookies, sessions, MVC pattern',
  },
  {
    name: 'HTTP: Entendendo a web por baixo dos panos',
    platform: 'Alura',
    technologies: ['HTTP', 'Web Development', 'Backend'],
    completedAt: 'abr 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/http-fundamentos/certificate',
    },
    description: 'Competências: HTTP fundamentals, HTTPS, REST web services, HTTP/2, security',
  },
  {
    name: 'JavaScript: programando na linguagem da web',
    platform: 'Alura',
    technologies: ['JavaScript', 'Frontend', 'Web Development'],
    completedAt: 'mar 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/javascript-programando-na-linguagem-web/certificate',
    },
    description: 'Competências: JavaScript fundamentals, variables, arrays, events, form handling, AJAX',
  },
  {
    name: 'HTML5 e CSS3 II: Turbinando as suas páginas',
    platform: 'Alura',
    technologies: ['HTML5', 'CSS', 'Frontend', 'Web Development'],
    completedAt: 'mar 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/avancando-html-css/certificate',
    },
    description: 'Competências: Flexbox, animations, transformations, gradients, responsive design',
  },
  {
    name: 'HTML5 e CSS3 I: Suas primeiras páginas da Web',
    platform: 'Alura',
    technologies: ['HTML5', 'CSS', 'Frontend', 'Web Development'],
    completedAt: 'jan 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/introducao-html-css/certificate',
    },
    description: 'Competências: HTML5, CSS3, web layout, positioning, semantic markup',
  },
  {
    name: 'HTTP: Entendendo a web por baixo dos panos',
    platform: 'Alura',
    technologies: ['HTTP', 'Web Development', 'Backend'],
    completedAt: 'jan 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/fundamentos-http/certificate',
    },
    description: 'Competências: HTTP protocol, HTTPS, domains, request/response, debugging',
  },
  {
    name: 'Jogos com Android: Desenvolva seu próprio Flappy Bird',
    platform: 'Alura',
    technologies: ['Android', 'Java', 'Game Development'],
    completedAt: 'jan 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/desenvolvendo-jogos-em-android/certificate',
    },
    description: 'Competências: Game programming, sprite animation, collision detection, audio',
  },
  {
    name: 'Jogos com Android I: Desenvolvimento de jogos 2D',
    platform: 'Alura',
    technologies: ['Android', 'Java', 'Game Development'],
    completedAt: 'jan 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/desenvolvimento-em-jogos-2d-com-android/certificate',
    },
    description: 'Competências: 2D graphics, Cartesian coordinates, image handling, game logic',
  },
  {
    name: 'Android III: Integrações e Mapas para turbinar sua App',
    platform: 'Alura',
    technologies: ['Android', 'Java', 'Mobile Development'],
    completedAt: 'jan 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/android3/certificate',
    },
    description: 'Competências: GPS, Google Maps, location services, fragments, asynchronous data',
  },
  {
    name: 'Android II: Imersão em interfaces e recursos',
    platform: 'Alura',
    technologies: ['Android', 'Java', 'Mobile Development'],
    completedAt: 'jan 2017',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/android2/certificate',
    },
    description: 'Competências: Android Intents, camera, file handling, LayoutInflater, services',
  },
  {
    name: 'Produtividade: Aumente sua performance otimizando e organizando o seu tempo',
    platform: 'Alura',
    technologies: ['Produtividade', 'Desenvolvimento Pessoal'],
    completedAt: 'dez 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/produtividade-otimizando-e-organizando-o-seu-tempo/certificate',
    },
    description: 'Competências: Time management, task organization, productivity, stress elimination',
  },
  {
    name: 'Android I: Crie sua App fantástica no Eclipse',
    platform: 'Alura',
    technologies: ['Android', 'Java', 'Mobile Development'],
    completedAt: 'dez 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/android1/certificate',
    },
    description: 'Competências: Android development, Eclipse IDE, UI design, SQLite, data persistence',
  },
  {
    name: 'JavaScript e HTML: pratique lógica com desenhos, animações e um jogo',
    platform: 'Alura',
    technologies: ['JavaScript', 'HTML', 'Frontend', 'Game Development'],
    completedAt: 'nov 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/logica-programacao-pratica-com-desenho-animacoes-em-jogo/certificate',
    },
    description: 'Competências: Canvas graphics, animations, game fundamentals, user interaction',
  },
  {
    name: 'Android III: Aprimore sua app com Fragments, Google Maps e GPS',
    platform: 'Alura',
    technologies: ['Android', 'Java', 'Mobile Development'],
    completedAt: 'nov 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/android-studio-iii-fragments-maps-gps/certificate',
    },
    description: 'Competências: Fragments, Google Maps, GPS, location services',
  },
  {
    name: 'Eclipse: Produtividade Extrema na IDE com Java',
    platform: 'Alura',
    technologies: ['Eclipse', 'Java', 'Development Tools'],
    completedAt: 'out 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/eclipse/certificate',
    },
    description: 'Competências: Eclipse IDE, reducing errors, debugging, productivity techniques',
  },
  {
    name: 'Redes parte 1: conceitos e prática',
    platform: 'Alura',
    technologies: ['Networks', 'IT', 'Infrastructure'],
    completedAt: 'out 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/redes-introducao/certificate',
    },
    description: 'Competências: IP addresses, DNS, routers, DHCP, network communication',
  },
  {
    name: 'Android II: Integração com apps e recursos do device',
    platform: 'Alura',
    technologies: ['Android', 'Java', 'Mobile Development'],
    completedAt: 'out 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/android-studio-ii-integracoes-e-recursos/certificate',
    },
    description: 'Competências: SMS, maps, camera, browser integration, device permissions',
  },
  {
    name: 'Java Collections: Dominando Listas, Sets e Mapas',
    platform: 'Alura',
    technologies: ['Java', 'Backend', 'Data Structures'],
    completedAt: 'set 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/java-collections/certificate',
    },
    description: 'Competências: ArrayLists, Sets, Maps, Java collection framework',
  },
  {
    name: 'UML: modelagem de soluções',
    platform: 'Alura',
    technologies: ['UML', 'Software Design', 'Metodologia'],
    completedAt: 'set 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/introducao-a-uml/certificate',
    },
    description: 'Competências: Use case, class, sequence, activity, state, component diagrams',
  },
  {
    name: 'Android I: Crie sua App fantástica com Android Studio',
    platform: 'Alura',
    technologies: ['Android', 'Java', 'Mobile Development'],
    completedAt: 'set 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/android-studio/certificate',
    },
    description: 'Competências: Android Studio, project setup, UI, menus, activity lifecycle',
  },
  {
    name: 'Java III: Principais APIs e bibliotecas',
    platform: 'Alura',
    technologies: ['Java', 'Backend', 'Libraries'],
    completedAt: 'ago 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/java-e-bibliotecas/certificate',
    },
    description: 'Competências: java.lang, java.io, Collections, threading, JAR, Javadoc',
  },
  {
    name: 'Java II: Orientação a Objetos',
    platform: 'Alura',
    technologies: ['Java', 'Backend', 'Object-Oriented Design'],
    completedAt: 'ago 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/java-e-orientacao-a-objetos/certificate',
    },
    description: 'Competências: Java OOP, inheritance, polymorphism, abstract classes, interfaces',
  },
  {
    name: 'Fotografia: técnicas de composição',
    platform: 'Alura',
    technologies: ['Photography', 'Design', 'Creative Skills'],
    completedAt: 'ago 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/introducao-a-fotografia/certificate',
    },
    description: 'Competências: Photo composition, planning, compositional rules, photography best practices',
  },
  {
    name: 'Inglês: Candidate-se a vagas no exterior',
    platform: 'Alura',
    technologies: ['English', 'Linguagem', 'Professional Development'],
    completedAt: 'ago 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/ingles-para-entrevistas/certificate',
    },
    description: 'Competências: Professional English, resume writing, cover letter, LinkedIn, interviews',
  },
  {
    name: 'Excel: Domine o editor de planilhas mais famoso do mundo',
    platform: 'Alura',
    technologies: ['Excel', 'Produtividade', 'Data'],
    completedAt: 'ago 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/excel/certificate',
    },
    description: 'Competências: Spreadsheet calculations, functions, VLOOKUP, filtering, charts',
  },
  {
    name: 'Java I: Primeiros passos',
    platform: 'Alura',
    technologies: ['Java', 'Backend', 'Programming'],
    completedAt: 'ago 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/primeiros-passos-com-java/certificate',
    },
    description: 'Competências: Java fundamentals, variables, OOP basics, arrays, constructors',
  },
  {
    name: 'HTML e CSS: Os seus primeiros passos',
    platform: 'Alura',
    technologies: ['HTML', 'CSS', 'Frontend', 'Web Development'],
    completedAt: 'jul 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/html-e-css/certificate',
    },
    description: 'Competências: HTML basics, CSS styling, web fundamentals',
  },
  {
    name: 'Concursos: noções básicas de informática',
    platform: 'Alura',
    technologies: ['IT', 'Informática', 'Professional'],
    completedAt: 'jul 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/informatica-para-concursos/certificate',
    },
    description: 'Competências: Operating systems, hardware, Windows, internet, Microsoft Office',
  },
  {
    name: 'Design de Apresentação parte 1: Princípios e Técnicas Visuais',
    platform: 'Alura',
    technologies: ['Design', 'Presentation', 'Visual Design'],
    completedAt: 'jul 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/apresentacao-design/certificate',
    },
    description: 'Competências: Visual design principles, presentation strategies, audience engagement',
  },
  {
    name: 'JavaScript e HTML: desenvolva um jogo e pratique lógica de programação',
    platform: 'Alura',
    technologies: ['JavaScript', 'HTML', 'Game Development', 'Programming'],
    completedAt: 'jul 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/logica-programacao-javascript-html/certificate',
    },
    description: 'Competências: Variables, functions, conditionals, loops, game development',
  },
  {
    name: 'Lógica de Programação II: Funções, Desenhos e um Jogo',
    platform: 'Alura',
    technologies: ['Programming', 'Lógica', 'Game Development'],
    completedAt: 'jul 2016',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/praticando-logica-de-programacao/certificate',
    },
    description: 'Competências: Canvas graphics, function extraction, game development, animations',
  },
  {
    name: 'Instagram Marketing: primeiros passos para fortalecer sua marca',
    platform: 'Alura',
    technologies: ['Instagram', 'Social Media', 'Marketing', 'Business'],
    completedAt: 'jul 2019',
    certificate: {
      url: 'https://cursos.alura.com.br/user/maisongalvao/course/instagram/certificate',
    },
    description: 'Competências: Instagram marketing, profile optimization, content creation, analytics',
  },
];

// Extrair todas as tecnologias únicas para filtro
export const getAllTechnologies = () => {
  return Array.from(
    new Set(courses.flatMap((course) => course.technologies))
  ).sort();
};
