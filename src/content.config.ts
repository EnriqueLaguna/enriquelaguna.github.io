import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/projects' }),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    summary: z.string(),
    technologies: z.array(z.string()),
  }),
});

export const collections = { projects };
