import { z } from "zod";

export const PackageImageSchema = z.object({
    imageUrl: z.string().url("Invalid image URL."),
    publicId: z.string().min(1, "Image public ID is required."),
    alt: z.string().optional(),
    sortOrder: z.number().int().min(0),
});

export const PackageItinerarySchema = z.object({
    day: z
        .number()
        .int()
        .min(1, "Day must be at least 1."),

    title: z
        .string()
        .trim()
        .min(3, "Title is required.")
        .max(200),

    description: z
        .string()
        .trim()
        .min(10, "Description is required."),
});

export const PackageFaqSchema = z.object({
    question: z
        .string()
        .trim()
        .min(3, "Question is required.")
        .max(300),

    answer: z
        .string()
        .trim()
        .min(3, "Answer is required."),
});

export const PackageSchema = z.object({
    title: z
        .string()
        .trim()
        .min(3, "Package title is required.")
        .max(200),

    slug: z
        .string()
        .trim()
        .min(3)
        .max(200)
        .regex(
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
            "Slug may only contain lowercase letters, numbers and hyphens."
        ),

    shortDescription: z
        .string()
        .trim()
        .min(20, "Short description should be at least 20 characters.")
        .max(500),

    description: z
        .string()
        .trim()
        .min(50, "Description is required."),

    location: z
        .string()
        .trim()
        .min(2, "Location is required.")
        .max(150),

    duration: z
        .string()
        .trim()
        .max(100)
        .optional(),

    days: z
        .number()
        .int()
        .min(1, "Days must be at least 1."),

    nights: z
        .number()
        .int()
        .min(0, "Nights cannot be negative."),

    startingPrice: z
        .number()
        .positive("Starting price must be greater than zero."),

    featured: z.boolean(),

    status: z.enum([
        "DRAFT",
        "PUBLISHED",
    ]),

    images: z.array(PackageImageSchema),

    itinerary: z.array(PackageItinerarySchema),

    highlights: z
        .array(
            z.string().trim().min(1)
        )
        .max(100),

    inclusions: z
        .array(
            z.string().trim().min(1)
        )
        .max(100),

    exclusions: z
        .array(
            z.string().trim().min(1)
        )
        .max(100),

    faqs: z.array(PackageFaqSchema),
});

export type PackageDto = z.infer<typeof PackageSchema>;