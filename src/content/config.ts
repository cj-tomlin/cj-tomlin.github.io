import { defineCollection, z } from 'astro:content';

// Define the schema for project entries
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        link: z.string().url().optional(),
        tags: z.array(z.string()).optional(),
        date: z.date().optional(),
    }),
});

// Define the schema for blog entries
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        publishDate: z.string().transform((str) => new Date(str)),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().default(false),
    }),
});

// Export the collections
export const collections = {
    projects: projectsCollection,
    blog: blogCollection,
};
