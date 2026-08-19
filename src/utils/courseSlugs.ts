import { courses, type Course } from '@/config/courses';

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export type CourseWithSlug = Course & { slug: string };

const buildCoursesWithSlugs = (): CourseWithSlug[] => {
  const usedSlugs = new Set<string>();

  return courses.map((course) => {
    const baseSlug = course.slug ?? slugify(course.name);
    let slug = baseSlug;
    let suffix = 2;

    while (usedSlugs.has(slug)) {
      slug = `${baseSlug}-${suffix}`;
      suffix += 1;
    }

    usedSlugs.add(slug);

    return { ...course, slug };
  });
};

export const coursesWithSlugs: CourseWithSlug[] = buildCoursesWithSlugs();

export const getCourseBySlug = (slug: string): CourseWithSlug | undefined => {
  return coursesWithSlugs.find((course) => course.slug === slug);
};
