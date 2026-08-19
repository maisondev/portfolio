// Schema.org JSON-LD generators para SEO

export interface PersonSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  image?: string;
  url: string;
  sameAs?: string[];
  email?: string;
  jobTitle: string;
  knowsLanguage: string[];
  worksFor?: {
    '@type': string;
    name: string;
  };
}

export interface CourseSchema {
  '@context': string;
  '@type': string;
  name: string;
  description?: string;
  provider: {
    '@type': string;
    name: string;
    url?: string;
  };
  educationLevel?: string;
  url?: string;
}

export interface ProjectSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url?: string;
  image?: string;
  creator: {
    '@type': string;
    name: string;
  };
}

export const personSchema = (lang: string = 'pt'): PersonSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Maison Galvão',
  description: lang === 'pt'
    ? 'Desenvolvedor Full Stack especializado em arquitetura de sistemas de larga escala, cloud computing e inteligência artificial.'
    : 'Full Stack Developer specializing in large-scale system architecture, cloud computing, and artificial intelligence.',
  jobTitle: 'Full Stack Developer',
  url: 'https://maisongalvao.dev',
  image: 'https://maisongalvao.dev/profile.jpg',
  email: 'maisongalvao@outlook.com',
  sameAs: [
    'https://github.com/maisondev',
    'https://linkedin.com/in/maison-galvão',
  ],
  knowsLanguage: ['pt-BR', 'en'],
});

export const courseListSchema = (courses: Array<{
  name: string;
  platform: string;
  technologies?: string[];
  completedAt?: string;
}>, _lang: string = 'pt'): CourseSchema[] => {
  return courses.map((course) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.technologies?.join(', '),
    provider: {
      '@type': 'Organization',
      name: course.platform,
    },
    educationLevel: 'Professional Development',
    url: undefined,
  }));
};

export const organizationSchema = (lang: string = 'pt') => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Maison Galvão',
  url: 'https://maisongalvao.dev',
  logo: 'https://maisongalvao.dev/profile.jpg',
  description: lang === 'pt'
    ? 'Portfolio profissional de desenvolvedor Full Stack'
    : 'Professional portfolio of Full Stack Developer',
  sameAs: [
    'https://github.com/maisondev',
    'https://linkedin.com/in/maison-galvão',
  ],
  contact: {
    '@type': 'ContactPoint',
    telephone: undefined,
    contactType: 'Customer Service',
    email: 'maisongalvao@outlook.com',
  },
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
