import { KeralaDistrict } from "@prisma/client";
import { z } from "zod";

export const TourismGalleryImageSchema = z.object({
    image: z.string().url("Invalid image URL."),
    imagePublicId: z.string().min(1, "Image public ID is required."),
    alt: z.string().optional(),
    sortOrder: z.number().int().min(0),
});

export const TourismSchema = z.object({
    title: z
        .string()
        .trim()
        .min(3, "Title must be at least 3 characters.")
        .max(200),

    slug: z
        .string()
        .trim()
        .min(3)
        .max(200)
        .regex(
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
            "Slug must contain only lowercase letters, numbers and hyphens."
        ),

    categoryId: z.string().cuid("Invalid category."),

    district: z.nativeEnum(KeralaDistrict).optional(),

    excerpt: z
        .string()
        .trim()
        .min(20, "Excerpt should be at least 20 characters.")
        .max(500),

    content: z
        .string()
        .trim()
        .min(50, "Content is required."),

    featuredImage: z.string().url().optional().or(z.literal("")),

    featuredImagePublicId: z.string().optional(),

    gallery: z.array(TourismGalleryImageSchema),

    latitude: z
        .number()
        .min(-90)
        .max(90)
        .nullable()
        .optional(),

    longitude: z
        .number()
        .min(-180)
        .max(180)
        .nullable()
        .optional(),

    address: z.string().max(300).optional(),

    bestTimeToVisit: z.string().max(100).optional(),

    openingHours: z.string().max(150).optional(),

    entryFee: z.string().max(100).optional(),

    duration: z.string().max(100).optional(),

    mapUrl: z
        .string()
        .url("Invalid Google Maps URL.")
        .optional()
        .or(z.literal("")),

    tags: z.array(z.string()).max(20),

    isFeatured: z.boolean(),

    isPublished: z.boolean(),

    sortOrder: z
        .number()
        .int()
        .min(0),

    seoTitle: z
        .string()
        .max(70)
        .optional(),

    seoDescription: z
        .string()
        .max(160)
        .optional(),
});

export type TourismDto = z.infer<typeof TourismSchema>;