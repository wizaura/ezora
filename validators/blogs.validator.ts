import { z } from "zod";

export const BlogSchema = z.object({
    title: z.string().min(3),
    slug: z.string().min(3),

    excerpt: z.string().min(20),

    content: z.string().min(20),

    category: z.string().min(1),

    seoTitle: z.string().optional(),

    seoDescription: z.string().optional(),

    featuredImage: z.string().nullable().optional(),

    featuredImagePublicId: z
        .string()
        .nullable()
        .optional(),

    isPublished: z.boolean(),
});

export type BlogDto = z.infer<typeof BlogSchema>;