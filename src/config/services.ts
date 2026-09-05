export interface Service {
  name: string;
  url: string;
  icon: string;
  category: 'dev' | 'social' | 'music' | 'other';
  description?: string;
}

const servicesPT: Service[] = [
  // Dev Services
  {
    name: 'GitHub',
    url: 'https://github.com/maisondev',
    icon: 'github',
    category: 'dev',
    description: 'Meus repositórios e projetos',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/maisongalvao',
    icon: 'linkedin',
    category: 'dev',
    description: 'Meu perfil profissional',
  },
  {
    name: 'CodePen',
    url: 'https://codepen.io/maisongalvao',
    icon: 'codepen',
    category: 'dev',
    description: 'Projetos front-end',
  },

  // Social Networks
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/maisongalvao/',
    icon: 'instagram',
    category: 'social',
    description: 'Meu dia a dia',
  },
  {
    name: 'Twitter/X',
    url: 'https://x.com/maisongalvao',
    icon: 'twitter',
    category: 'social',
    description: 'Tweets e insights',
  },

  // Music Services
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/user/edbo2vdtgnddcbzml4lxtyssm?si=8d4befa778564230',
    icon: 'spotify',
    category: 'music',
    description: 'Minhas playlists',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/profile/maisongalvao',
    icon: 'applemusic',
    category: 'music',
    description: 'Minha biblioteca',
  },
];

const servicesEN: Service[] = [
  // Dev Services
  {
    name: 'GitHub',
    url: 'https://github.com/maisondev',
    icon: 'github',
    category: 'dev',
    description: 'My repositories and projects',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/maisongalvao',
    icon: 'linkedin',
    category: 'dev',
    description: 'My professional profile',
  },
  {
    name: 'CodePen',
    url: 'https://codepen.io/maisongalvao',
    icon: 'codepen',
    category: 'dev',
    description: 'Front-end projects',
  },

  // Social Networks
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/maisongalvao/',
    icon: 'instagram',
    category: 'social',
    description: 'My day-to-day life',
  },
  {
    name: 'Twitter/X',
    url: 'https://x.com/maisongalvao',
    icon: 'twitter',
    category: 'social',
    description: 'Tweets and insights',
  },

  // Music Services
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/user/edbo2vdtgnddcbzml4lxtyssm?si=8d4befa778564230',
    icon: 'spotify',
    category: 'music',
    description: 'My playlists',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/profile/maisongalvao',
    icon: 'applemusic',
    category: 'music',
    description: 'My library',
  },
];

export function getServices(lang: 'pt' | 'en'): Service[] {
  return lang === 'pt' ? servicesPT : servicesEN;
}

const categoriesPT = {
  dev: {
    title: 'Desenvolvimento',
    icon: '💻',
  },
  social: {
    title: 'Redes Sociais',
    icon: '📱',
  },
  music: {
    title: 'Música',
    icon: '🎵',
  },
  other: {
    title: 'Outros',
    icon: '🔗',
  },
};

const categoriesEN = {
  dev: {
    title: 'Development',
    icon: '💻',
  },
  social: {
    title: 'Social Networks',
    icon: '📱',
  },
  music: {
    title: 'Music',
    icon: '🎵',
  },
  other: {
    title: 'Other',
    icon: '🔗',
  },
};

export function getCategories(lang: 'pt' | 'en') {
  return lang === 'pt' ? categoriesPT : categoriesEN;
}
