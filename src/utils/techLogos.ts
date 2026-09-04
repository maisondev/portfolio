// Mapeamento de tecnologias para logos reais das marcas via Devicon CDN
// Formato: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{icon-name}/

export interface TechLogo {
  name: string;
  logo: string; // URL para Devicon
  color?: string; // Cor oficial da marca
}

const DEVICON_CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const techLogosMap: Record<string, TechLogo> = {
  'Java': {
    name: 'Java',
    logo: `${DEVICON_CDN}/java/java-original.svg`,
    color: '#007396',
  },
  'Go': {
    name: 'Go',
    logo: `${DEVICON_CDN}/go/go-original-wordmark.svg`,
    color: '#00add8',
  },
  'Sass': {
    name: 'Sass',
    logo: `${DEVICON_CDN}/sass/sass-original.svg`,
    color: '#cc6699',
  },
  'jQuery': {
    name: 'jQuery',
    logo: `${DEVICON_CDN}/jquery/jquery-original.svg`,
    color: '#0769ad',
  },
  'Linux': {
    name: 'Linux',
    logo: `${DEVICON_CDN}/linux/linux-original.svg`,
    color: '#fcc624',
  },
  'Bash': {
    name: 'Bash',
    logo: `${DEVICON_CDN}/bash/bash-original.svg`,
    color: '#4eaa25',
  },
  'MySQL': {
    name: 'MySQL',
    logo: `${DEVICON_CDN}/mysql/mysql-original.svg`,
    color: '#4479a1',
  },
  'Android': {
    name: 'Android',
    logo: `${DEVICON_CDN}/android/android-original.svg`,
    color: '#3ddc84',
  },
  'Adobe XD': {
    name: 'Adobe XD',
    logo: `${DEVICON_CDN}/xd/xd-original.svg`,
    color: '#ff26be',
  },
  'Scrum': {
    name: 'Scrum',
    logo: `${DEVICON_CDN}/jira/jira-original.svg`,
    color: '#0052cc',
  },
  'HTML5': {
    name: 'HTML5',
    logo: `${DEVICON_CDN}/html5/html5-original.svg`,
    color: '#e34c26',
  },
  'CSS': {
    name: 'CSS',
    logo: `${DEVICON_CDN}/css3/css3-original.svg`,
    color: '#1572b6',
  },
  'JavaScript': {
    name: 'JavaScript',
    logo: `${DEVICON_CDN}/javascript/javascript-original.svg`,
    color: '#f7df1e',
  },
  'TypeScript': {
    name: 'TypeScript',
    logo: `${DEVICON_CDN}/typescript/typescript-original.svg`,
    color: '#3178c6',
  },
  'React': {
    name: 'React',
    logo: `${DEVICON_CDN}/react/react-original.svg`,
    color: '#61dafb',
  },
  'Vue.js': {
    name: 'Vue.js',
    logo: `${DEVICON_CDN}/vuejs/vuejs-original.svg`,
    color: '#4fc08d',
  },
  'Astro': {
    name: 'Astro',
    logo: `${DEVICON_CDN}/astro/astro-original.svg`,
    color: '#ff5d01',
  },
  'Tailwind CSS': {
    name: 'Tailwind CSS',
    logo: `${DEVICON_CDN}/tailwindcss/tailwindcss-original.svg`,
    color: '#06b6d4',
  },
  'Node.js': {
    name: 'Node.js',
    logo: `${DEVICON_CDN}/nodejs/nodejs-original.svg`,
    color: '#68a063',
  },
  'Python': {
    name: 'Python',
    logo: `${DEVICON_CDN}/python/python-original.svg`,
    color: '#3776ab',
  },
  'PostgreSQL': {
    name: 'PostgreSQL',
    logo: `${DEVICON_CDN}/postgresql/postgresql-original.svg`,
    color: '#336791',
  },
  'PHP 8.2': {
    name: 'PHP 8.2',
    logo: `${DEVICON_CDN}/php/php-original.svg`,
    color: '#777bb4',
  },
  'Docker': {
    name: 'Docker',
    logo: `${DEVICON_CDN}/docker/docker-original.svg`,
    color: '#2496ed',
  },
  'Git': {
    name: 'Git',
    logo: `${DEVICON_CDN}/git/git-original.svg`,
    color: '#f1502f',
  },
  'Figma': {
    name: 'Figma',
    logo: `${DEVICON_CDN}/figma/figma-original.svg`,
    color: '#0acf83',
  },
  'AWS': {
    name: 'AWS',
    logo: `${DEVICON_CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
    color: '#ff9900',
  },
  'Google Cloud': {
    name: 'Google Cloud',
    logo: `${DEVICON_CDN}/googlecloud/googlecloud-original.svg`,
    color: '#4285f4',
  },
  'Next.js': {
    name: 'Next.js',
    logo: `${DEVICON_CDN}/nextjs/nextjs-original.svg`,
    color: '#000000',
  },
  'GraphQL': {
    name: 'GraphQL',
    logo: `${DEVICON_CDN}/graphql/graphql-plain.svg`,
    color: '#e10098',
  },
  'Machine Learning': {
    name: 'Machine Learning',
    logo: `${DEVICON_CDN}/tensorflow/tensorflow-original.svg`,
    color: '#ff6f20',
  },
  'Data Science': {
    name: 'Data Science',
    logo: `${DEVICON_CDN}/pandas/pandas-original.svg`,
    color: '#150458',
  },
  'Kubernetes': {
    name: 'Kubernetes',
    logo: `${DEVICON_CDN}/kubernetes/kubernetes-original.svg`,
    color: '#326ce5',
  },
  'Terraform': {
    name: 'Terraform',
    logo: `${DEVICON_CDN}/terraform/terraform-original.svg`,
    color: '#623ce4',
  },
  'Jenkins': {
    name: 'Jenkins',
    logo: `${DEVICON_CDN}/jenkins/jenkins-original.svg`,
    color: '#d24939',
  },
  'GitHub Actions': {
    name: 'GitHub Actions',
    logo: `${DEVICON_CDN}/github/github-original.svg`,
    color: '#2088ff',
  },
  'Ansible': {
    name: 'Ansible',
    logo: `${DEVICON_CDN}/ansible/ansible-original.svg`,
    color: '#ee0000',
  },
  'Spark': {
    name: 'Spark',
    logo: `${DEVICON_CDN}/apachespark/apachespark-original.svg`,
    color: '#e2611c',
  },
  'Airflow': {
    name: 'Airflow',
    logo: `${DEVICON_CDN}/apache/apache-original.svg`,
    color: '#017cee',
  },
  'DevOps': {
    name: 'DevOps',
    logo: `${DEVICON_CDN}/docker/docker-original.svg`,
    color: '#2496ed',
  },
  'AI Engineer': {
    name: 'AI Engineer',
    logo: `${DEVICON_CDN}/pytorch/pytorch-original.svg`,
    color: '#ee4c2c',
  },
  'Data Engineer': {
    name: 'Data Engineer',
    logo: `${DEVICON_CDN}/apachespark/apachespark-original.svg`,
    color: '#e2611c',
  },
  'Deep Learning': {
    name: 'Deep Learning',
    logo: `${DEVICON_CDN}/pytorch/pytorch-original.svg`,
    color: '#ee4c2c',
  },
  'Frontend': {
    name: 'Frontend',
    logo: `${DEVICON_CDN}/react/react-original.svg`,
    color: '#61dafb',
  },
  'Backend': {
    name: 'Backend',
    logo: `${DEVICON_CDN}/nodejs/nodejs-original.svg`,
    color: '#68a063',
  },
  'Programming': {
    name: 'Programming',
    logo: `${DEVICON_CDN}/bash/bash-original.svg`,
    color: '#4eaa25',
  },
};

export const getTechLogo = (techName: string): TechLogo | null => {
  // Tenta correspondência exata primeiro
  if (techLogosMap[techName]) {
    return techLogosMap[techName];
  }

  // Tenta correspondência parcial (case-insensitive)
  const key = Object.keys(techLogosMap).find(
    (k) => k.toLowerCase() === techName.toLowerCase(),
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
