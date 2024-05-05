import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = {
  blogs: blogCollection,
};
