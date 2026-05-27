export interface Service {
  name: string;
  url: string;
  icon: string;
  category: 'dev' | 'social' | 'music' | 'other';
  color: string;
  description?: string;
}

export const services: Service[] = [
  // Dev Services
  {
    name: 'GitHub',
    url: 'https://github.com/maisondev',
    icon: 'github',
    category: 'dev',
    color: 'from-gray-700 to-gray-900',
    description: 'Meus repositórios e projetos',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/maisongalvao',
    icon: 'linkedin',
    category: 'dev',
    color: 'from-blue-600 to-blue-800',
    description: 'Meu perfil profissional',
  },
  {
    name: 'CodePen',
    url: 'https://codepen.io/maisongalvao',
    icon: 'codepen',
    category: 'dev',
    color: 'from-gray-900 to-gray-700',
    description: 'Projetos front-end',
  },

  // Social Networks
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/maisongalvao/',
    icon: 'instagram',
    category: 'social',
    color: 'from-pink-500 to-purple-600',
    description: 'Meu dia a dia',
  },
  {
    name: 'Twitter/X',
    url: 'https://x.com/maisongalvao',
    icon: 'twitter',
    category: 'social',
    color: 'from-gray-800 to-black',
    description: 'Tweets e insights',
  },

  // Music Services
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/user/edbo2vdtgnddcbzml4lxtyssm?si=8d4befa778564230',
    icon: 'spotify',
    category: 'music',
    color: 'from-green-500 to-green-700',
    description: 'Minhas playlists',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/profile/maisongalvao',
    icon: 'applemusic',
    category: 'music',
    color: 'from-gray-900 to-pink-600',
    description: 'Minha biblioteca',
  },
];

export const categories = {
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
    icon: '✨',
  },
};
