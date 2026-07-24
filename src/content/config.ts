import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Free-form category / label, e.g. "Vorago", "Digital Tools", "Mechanical".
    category: z.string(),
    // Free-form status, e.g. "In development", "Paused / exploratory", "Complete".
    status: z.string(),
    // One or two sentences shown on the card and at the top of the project page.
    summary: z.string(),
    technologies: z.array(z.string()).default([]),
    role: z.string().optional(),
    domain: z.string().optional(),
    year: z.string().optional(),
    // Sort key: newest first by default.
    date: z.date(),
    // Optional manual override: lower numbers sort earlier, regardless of date.
    order: z.number().optional(),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
