import { courses } from '@/config/courses';
import { coursesWithSlugs } from '@/utils/courseSlugs';
import { getContests } from '@/config/contests';
import { getProjects } from '@/config/projects';
import { getRecognitionsWithSlugs } from '@/utils/recognitionSlugs';

const BASE_URL = 'https://maisongalvao.dev';

interface SitemapUrl {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const GET = () => {
  const today = new Date().toISOString().split('T')[0];

  const urls: SitemapUrl[] = [
    // Homepage
    { url: '/', lastmod: today, changefreq: 'weekly', priority: 1.0 },
    { url: '/pt', lastmod: today, changefreq: 'weekly', priority: 1.0 },
    { url: '/en', lastmod: today, changefreq: 'weekly', priority: 1.0 },

    // Main pages PT
    { url: '/pt/courses', lastmod: today, changefreq: 'weekly', priority: 0.9 },
    { url: '/pt/projects', lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { url: '/pt/experience', lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { url: '/pt/education', lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { url: '/pt/contests', lastmod: today, changefreq: 'weekly', priority: 0.7 },
    { url: '/pt/case-studies', lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { url: '/pt/recognitions', lastmod: today, changefreq: 'monthly', priority: 0.7 },
    { url: '/pt/events', lastmod: today, changefreq: 'monthly', priority: 0.7 },
    { url: '/pt/social', lastmod: today, changefreq: 'monthly', priority: 0.6 },

    // Main pages EN
    { url: '/en/courses', lastmod: today, changefreq: 'weekly', priority: 0.9 },
    { url: '/en/projects', lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { url: '/en/experience', lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { url: '/en/education', lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { url: '/en/contests', lastmod: today, changefreq: 'weekly', priority: 0.7 },
    { url: '/en/case-studies', lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { url: '/en/recognitions', lastmod: today, changefreq: 'monthly', priority: 0.7 },
    { url: '/en/events', lastmod: today, changefreq: 'monthly', priority: 0.7 },
    { url: '/en/social', lastmod: today, changefreq: 'monthly', priority: 0.6 },
  ];

  // Adicionar páginas de detalhe de cada curso
  coursesWithSlugs.forEach((course) => {
    urls.push({
      url: `/pt/courses/${course.slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.6,
    });
    urls.push({
      url: `/en/courses/${course.slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.6,
    });
  });

  // Adicionar páginas de detalhe de cada projeto
  getProjects('pt').forEach((project) => {
    urls.push({
      url: `/pt/projects/${project.slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.6,
    });
    urls.push({
      url: `/en/projects/${project.slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.6,
    });
  });

  // Adicionar páginas de detalhe de cada reconhecimento
  getRecognitionsWithSlugs('pt').forEach(({ slug }) => {
    urls.push({
      url: `/pt/recognitions/${slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.6,
    });
  });
  getRecognitionsWithSlugs('en').forEach(({ slug }) => {
    urls.push({
      url: `/en/recognitions/${slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.6,
    });
  });

  // Adicionar cursos com filtros
  const uniqueTechs = Array.from(new Set(courses.flatMap(c => c.technologies)));
  uniqueTechs.forEach((tech) => {
    urls.push({
      url: `/pt/courses?tech=${encodeURIComponent(tech)}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.6,
    });
    urls.push({
      url: `/en/courses?tech=${encodeURIComponent(tech)}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.6,
    });
  });

  // Adicionar concursos com filtros de esfera
  const allContests = getContests('pt');
  const uniqueSpheres = Array.from(new Set(allContests.flatMap(c => c.sphere || [])));
  uniqueSpheres.forEach((sphere) => {
    urls.push({
      url: `/pt/contests?sphere=${encodeURIComponent(sphere)}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.6,
    });
    urls.push({
      url: `/en/contests?sphere=${encodeURIComponent(sphere)}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.6,
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
      (url) => `  <url>
    <loc>${BASE_URL}${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
    )
    .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
