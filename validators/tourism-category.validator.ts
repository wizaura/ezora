import { z } from "zod";

export const TourismCategorySchema =
    z.object({
        name: z
            .string()
            .trim()
            .min(2)
            .max(100),

        slug: z
            .string()
            .trim()
            .regex(
                /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                "Invalid slug."
            ),

        description: z
            .string()
            .max(500)
            .optional(),

        featuredImage: z
            .string()
            .url()
            .optional()
            .or(z.literal("")),

        featuredImagePublicId:
            z.string().optional(),

        seoTitle: z
            .string()
            .max(70)
            .optional(),

        seoDescription: z
            .string()
            .max(160)
            .optional(),

        isFeatured: z.boolean(),

        isActive: z.boolean(),

        sortOrder: z
            .number()
            .int()
            .min(0),
    });

export type TourismCategoryDto =
    z.infer<typeof TourismCategorySchema>;