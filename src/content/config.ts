
import { z, defineCollection } from 'astro:content';

const portfolio = defineCollection({ 
    type: 'content',
    schema: z.object({
        title: z.string(),
        image: z.string(),
        description: z.string(),
    })
});


export const collections = { portfolio };