export interface TechIcon {
  name: string;
  svg: string;
  color?: string;
}

// Mapeamento de tecnologias para ícones SVG flat/minimalistas
export const techIconsMap: Record<string, TechIcon> = {
  'HTML5': {
    name: 'HTML5',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3m2 2v14h14V5H5m1 1h2v2h2V6h2v8h-2v-2H8v2H6V6m4 0v2h2V6h-2m4 0v8h2V8h2V6h-4m4 4h2v4h-2v-4"/></svg>',
    color: '#e34c26',
  },
  'CSS': {
    name: 'CSS',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3m2 2v14h14V5H5m1.5 2h9v2h-9V7m0 2.5h9v2h-9v-2m0 2.5h6v2h-6v-2"/></svg>',
    color: '#1572b6',
  },
  'JavaScript': {
    name: 'JavaScript',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3m2 2v14h14V5H5m1 1h2v8h-2V6m3 0h2v8h-2V6m3 0h2v6h-2V6m3 0h2v8h-2V6"/></svg>',
    color: '#f7df1e',
  },
  'TypeScript': {
    name: 'TypeScript',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3m2 2v14h14V5H5m1 1h4v2h2V6h4v8h-4v-2h-2v2H6V6m3 0v2h2V6H9m3 0v6h2V6h-2m-2 2h2v2h-2V8z"/></svg>',
    color: '#3178c6',
  },
  'React': {
    name: 'React',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="1.5"/><path d="M12 5c-2 1.5-4 3.5-4 7 0 3.5 2 5.5 4 7 2-1.5 4-3.5 4-7 0-3.5-2-5.5-4-7m-5 6c-.5 1-.8 2.5-.8 3.5 1 .5 2.5 1 5.8 1 3.3 0 4.8-.5 5.8-1 0-1-.3-2.5-.8-3.5-1 .3-2.5.5-5 .5s-4-.2-5-.5m0-3c-.5-1-.8-2.5-.8-3.5 1-.5 2.5-1 5.8-1 3.3 0 4.8.5 5.8 1 0 1-.3 2.5-.8 3.5-1-.3-2.5-.5-5-.5s-4 .2-5 .5"/></svg>',
    color: '#61dafb',
  },
  'Vue.js': {
    name: 'Vue.js',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5m0 2.18l6 3.27V17c0 4.3-2.88 8.05-6 9.09-3.12-1.04-6-4.79-6-9.09v-9.55l6-3.27m-3 4.32l-2.5 2.5h2V15h2v-4.5h2l-2.5-2.5-1 1zm3 0l2.5 2.5h-2V15h-2v-4.5h-2l2.5-2.5 1 1z"/></svg>',
    color: '#4fc08d',
  },
  'Astro': {
    name: 'Astro',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 7h8v2H8V7m0 3h6v2H8v-2m0 3h8v2H8v-2m-2-8h12v1H6V3m0 16h12v1H6v-1M5 5h1v14H5V5m13 0h1v14h-1V5"/></svg>',
    color: '#ff5d01',
  },
  'Tailwind CSS': {
    name: 'Tailwind CSS',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 8c-1.5 0-2.5 1-3 2.5.6-.4 1.3-.6 2-.6 1.7 0 3.1 1.4 3.1 3.1 0-1.7 1.4-3.1 3.1-3.1.7 0 1.4.2 2 .6-.5-1.5-1.5-2.5-3-2.5-1.5 0-2.5 1-3 2.5-.5-1.5-1.5-2.5-3-2.5m6 2c-1.5 0-2.5 1-3 2.5.6-.4 1.3-.6 2-.6 1.7 0 3.1 1.4 3.1 3.1 0-1.7 1.4-3.1 3.1-3.1.7 0 1.4.2 2 .6-.5-1.5-1.5-2.5-3-2.5-1.5 0-2.5 1-3 2.5-.5-1.5-1.5-2.5-3-2.5"/></svg>',
    color: '#06b6d4',
  },
  'Node.js': {
    name: 'Node.js',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10m-3 13c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1m3-3c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1m3 3c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1m0-6c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1m-3-1c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1"/></svg>',
    color: '#68a063',
  },
  'Python': {
    name: 'Python',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m2-13h-4v2h4v-2m0 3h-4v5h4v-5m-2-3h-2v2h2V7z"/></svg>',
    color: '#3776ab',
  },
  'PostgreSQL': {
    name: 'PostgreSQL',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v2h2v-2m0-4h-2v4h2v-4m2-4h-2v4h2v-4m-4 0H9v4h2v-4m-4 2h-2v2h2v-2"/></svg>',
    color: '#336791',
  },
  'PHP 8.2': {
    name: 'PHP 8.2',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 8h2v4H8V8m3 0h2v4h-2V8m3 0h2v4h-2V8m2-2H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/></svg>',
    color: '#777bb4',
  },
  'Docker': {
    name: 'Docker',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 13h2v2H7v-2m0-3h2v2H7v-2m3 3h2v2h-2v-2m0-3h2v2h-2v-2m3 3h2v2h-2v-2m0-3h2v2h-2v-2m1-5h2v2h-2V5"/></svg>',
    color: '#2496ed',
  },
  'Git': {
    name: 'Git',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>',
    color: '#f1502f',
  },
  'Claude AI': {
    name: 'Claude AI',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>',
    color: '#84cc16',
  },
  'Web Development': {
    name: 'Web Development',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2m0 2v14h18V5H3m2 2h2v2H5V7m3 0h2v2H8V7m3 0h2v2h-2V7m3 0h2v2h-2V7m2 4H5v6h12v-6z"/></svg>',
    color: '#4a9eff',
  },
  'Machine Learning': {
    name: 'Machine Learning',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15h4v2h-4v-2m2-12c.83 0 1.5.67 1.5 1.5S12.83 8 12 8s-1.5-.67-1.5-1.5S11.17 5 12 5m0 3c2.21 0 4 1.79 4 4 0 .88-.3 1.69-.77 2.35-1.2-1.7-3.17-2.75-5.23-2.75s-4.03 1.05-5.23 2.75c-.47-.66-.77-1.47-.77-2.35 0-2.21 1.79-4 4-4z"/></svg>',
    color: '#ff6b6b',
  },
  'Data Science': {
    name: 'Data Science',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>',
    color: '#4a9eff',
  },
  'Cybersecurity': {
    name: 'Cybersecurity',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4m0 10.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 4.5 12 4.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>',
    color: '#ff6b6b',
  },
  'AWS': {
    name: 'AWS',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 11h10v2H7v-2m0-3h10v2H7V8m0-3h10v2H7V5m10 12H7v2h10v-2m3-13H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>',
    color: '#ff9900',
  },
  'Google Cloud': {
    name: 'Google Cloud',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>',
    color: '#4285f4',
  },
  'Vercel': {
    name: 'Vercel',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 20h20L12 2z"/></svg>',
    color: '#000000',
  },
  'Next.js': {
    name: 'Next.js',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m5 9.5H9v1h8v-1m0-2H9v1h8v-1m0-2H9v1h8v-1"/></svg>',
    color: '#000000',
  },
  'GraphQL': {
    name: 'GraphQL',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8m0 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6"/></svg>',
    color: '#e10098',
  },
  'API REST': {
    name: 'API REST',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 7h14v2H5V7m0 4h14v2H5v-2m0 4h14v2H5v-2m-2-8h2v2H3V7m0 4h2v2H3v-2m0 4h2v2H3v-2m18-8h2v2h-2V7m0 4h2v2h-2v-2m0 4h2v2h-2v-2"/></svg>',
    color: '#4a9eff',
  },
  'NLP': {
    name: 'NLP',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>',
    color: '#7c3aed',
  },
  'Deep Learning': {
    name: 'Deep Learning',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>',
    color: '#f97316',
  },
  'Figma': {
    name: 'Figma',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 12c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4m6-6H8c-1.1 0-2 .9-2 2v4h4V6m4 0v4h4V8c0-1.1-.9-2-2-2m0 10h-4v4c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-4m-8 0H6v2c0 1.1.9 2 2 2h2v-4z"/></svg>',
    color: '#0acf83',
  },
  'Project Management': {
    name: 'Project Management',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 4h18v2H3V4m0 3h18v2H3V7m0 3h18v2H3v-2m0 3h18v2H3v-2m0 3h18v2H3v-2"/></svg>',
    color: '#667eea',
  },
  'Kubernetes': {
    name: 'Kubernetes',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-3 3a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m6 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-3 6a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m3 3a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1"/></svg>',
    color: '#326ce5',
  },
  'Anthropic API': {
    name: 'Anthropic API',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>',
    color: '#84cc16',
  },
  'ChatGPT': {
    name: 'ChatGPT',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>',
    color: '#10a37f',
  },
  'Generative AI': {
    name: 'Generative AI',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 10c-3.314 0-6 1.343-6 3v1h12v-1c0-1.657-2.686-3-6-3z"/></svg>',
    color: '#ec4899',
  },
  'AI': {
    name: 'AI',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>',
    color: '#84cc16',
  },
  'Security': {
    name: 'Security',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4m0 10.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 4.5 12 4.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>',
    color: '#ff6b6b',
  },
  'Frontend': {
    name: 'Frontend',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2m0 2v14h18V5H3m4 4h2v2H7V9m3 0h2v2h-2V9m3 0h2v2h-2V9m-6 4h8v2H7v-2"/></svg>',
    color: '#4a9eff',
  },
  'Backend': {
    name: 'Backend',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2m0 2v14h18V5H3m2 2h2v2H5V7m3 0h2v2H8V7m3 0h2v2h-2V7m3 0h2v2h-2V7m-8 3h10v2H7v-2m0 3h10v2H7v-2"/></svg>',
    color: '#68a063',
  },
  'Programming': {
    name: 'Programming',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.5 16.5L4 12l5.5-4.5m5 0L20 12l-5.5 4.5M15.5 4l-7 16"/></svg>',
    color: '#4a9eff',
  },
};

export const getTechIcon = (techName: string): TechIcon => {
  // Tenta correspondência exata primeiro
  if (techIconsMap[techName]) {
    return techIconsMap[techName];
  }

  // Tenta correspondência parcial (case-insensitive)
  const key = Object.keys(techIconsMap).find(
    (k) => k.toLowerCase() === techName.toLowerCase()
  );

  if (key) {
    return techIconsMap[key];
  }

  // Retorna ícone genérico como fallback
  return {
    name: techName,
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>',
    color: '#d4d4d8',
  };
};
