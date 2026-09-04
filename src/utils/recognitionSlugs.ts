import { getRecognitions, type Recognition } from '@/config/recognitions';
import { slugify } from '@/utils/slugify';

export type RecognitionWithSlug = Recognition & { slug: string };

export const getRecognitionsWithSlugs = (lang: 'pt' | 'en'): RecognitionWithSlug[] => {
  const usedSlugs = new Set<string>();

  return getRecognitions(lang).map((recognition) => {
    const baseSlug = slugify(recognition.title);
    let slug = baseSlug;
    let suffix = 2;

    while (usedSlugs.has(slug)) {
      slug = `${baseSlug}-${suffix}`;
      suffix += 1;
    }

    usedSlugs.add(slug);

    return { ...recognition, slug };
  });
};
