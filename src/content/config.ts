// 1. Import utilities from `astro:content`
import {defineCollection, reference, z} from "astro:content";
// 2. Define your collection(s)
const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.date(),
        dateUpdated: z.date().optional(),
        draft: z.boolean(),
        tags: z.array(z.string()),
        summary: z.string(),
        relatedPosts: z.array(reference("blog")).optional(),
    }),
    /* ... */
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    blog,
};

