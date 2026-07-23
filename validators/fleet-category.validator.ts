import { z } from "zod";

export const FleetCategorySchema = z.object({
    name: z.string().trim().min(2),
    slug: z.string().trim().min(2),

    eyebrow: z.string().trim().optional(),

    shortDescription: z.string().trim().min(10),
    description: z.string().trim().min(20),

    featuredImage: z.string().optional(),
    featuredImagePublicId: z.string().optional(),

    isFeatured: z.boolean(),
    isActive: z.boolean(),

    sortOrder: z.number().min(0),

    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
});

// For react-hook-form
export type FleetCategoryFormValues = z.input<typeof FleetCategorySchema>;

// For validated values after parsing
export type FleetCategoryDto = z.output<typeof FleetCategorySchema>;