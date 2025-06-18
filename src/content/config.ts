import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    datePosted: z.coerce.date(),
    summary: z.string(),
    slug: z.string().optional(),
  }),
});

export const collections = { blog }; 