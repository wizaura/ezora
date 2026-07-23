import { z } from "zod";

const VehicleFeatureSchema = z.object({
    title: z.string().min(1, "Feature is required"),
    sortOrder: z.number(),
});

export const VehicleSpecificationSchema = z.object({
    label: z.string().min(1),
    value: z.string().min(1),
    sortOrder: z.number(),
});

export const VehicleImageSchema = z.object({
    image: z.string().url(),
    publicId: z.string(),
    alt: z.string().optional(),
    sortOrder: z.number(),
});

export const VehicleSchema = z.object({
    categoryId: z.string().cuid(),

    name: z.string().min(2),
    slug: z.string().min(2),

    tagline: z.string().optional(),

    shortDescription: z.string().min(20),

    description: z.string().min(50),

    featuredImage: z.string().optional(),
    featuredImagePublicId: z.string().optional(),

    heroImage: z.string().optional(),
    heroImagePublicId: z.string().optional(),

    seatingCapacity: z.string(),

    luggageCapacity: z.string(),

    airConditioning: z.string().optional(),

    transmission: z.string().optional(),

    fuelType: z.string().optional(),

    chauffeurDriven: z.boolean(),

    whatsappMessage: z.string().optional(),

    isFeatured: z.boolean(),

    isActive: z.boolean(),

    sortOrder: z.number(),

    seoTitle: z.string().optional(),

    seoDescription: z.string().optional(),

    features: z.array(VehicleFeatureSchema),

    specifications: z.array(VehicleSpecificationSchema),

    gallery: z.array(VehicleImageSchema),
});

export type VehicleDto = z.infer<typeof VehicleSchema>;