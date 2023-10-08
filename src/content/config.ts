import { z, defineCollection } from "astro:content";

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    title: z.string(),
    image: z.string(),
    description: z.string(),
  }),
});

export const collections = { portfolio };
