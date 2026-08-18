import { z } from "zod";

/* -------------------------------------------------------------------------- */
/* Vehicle Feature                                                            */
/* -------------------------------------------------------------------------- */

const VehicleFeatureSchema = z.object({
    title: z.string().min(1, "Feature is required"),
    sortOrder: z.number(),
});

/* -------------------------------------------------------------------------- */
/* Vehicle Specification                                                      */
/* -------------------------------------------------------------------------- */

export const VehicleSpecificationSchema = z.object({
    label: z.string().min(1, "Label is required"),
    value: z.string().min(1, "Value is required"),
    sortOrder: z.number(),
});

/* -------------------------------------------------------------------------- */
/* Vehicle Gallery Image                                                      */
/* -------------------------------------------------------------------------- */

export const VehicleImageSchema = z.object({
    image: z.string().url(),
    publicId: z.string(),
    alt: z.string().optional(),
    sortOrder: z.number(),
});

/* -------------------------------------------------------------------------- */
/* Commercial Treatment                                                       */
/* -------------------------------------------------------------------------- */

const CommercialTreatmentSchema = z.enum([
    "ACTUALS",
    "INCLUDED",
    "VENDOR",
    "EZORA",
    "CUSTOMER",
    "NOT_APPLICABLE",
]);

/* -------------------------------------------------------------------------- */
/* Vehicle                                                                     */
/* -------------------------------------------------------------------------- */

export const VehicleSchema = z.object({
    /* ---------------------------- General Information ---------------------------- */

    categoryId: z.string().cuid(),

    name: z.string().min(2, "Vehicle name must be at least 2 characters"),

    slug: z.string().min(2, "Slug must be at least 2 characters"),

    tagline: z.string().optional(),

    shortDescription: z
        .string()
        .min(20, "Short description must be at least 20 characters"),

    description: z
        .string()
        .min(50, "Description must be at least 50 characters"),

    /* ---------------------------------- Images ---------------------------------- */

    featuredImage: z.string().optional(),

    featuredImagePublicId: z.string().optional(),

    heroImage: z.string().optional(),

    heroImagePublicId: z.string().optional(),

    /* ----------------------------- Vehicle Capacity ----------------------------- */

    seatingCapacity: z.string(),

    luggageCapacity: z.string(),

    /* -------------------------------------------------------------------------- */
    /* Customer / Market Tariff                                                  */
    /* -------------------------------------------------------------------------- */

    customerBaseRate: z
        .number()
        .min(0, "Customer base rate must be 0 or greater"),

    customerBaseKm: z
        .number()
        .min(0, "Customer base KM must be 0 or greater"),

    customerExtraKmRate: z
        .number()
        .min(0, "Customer extra KM rate must be 0 or greater"),

    customerDriverBata: z
        .number()
        .min(0, "Customer driver Bata must be 0 or greater"),

    customerOvertimeRate: z
        .number()
        .min(0, "Customer overtime rate must be 0 or greater"),

    /* -------------------------------------------------------------------------- */
    /* Ezora B2B / Procurement Rate                                               */
    /* -------------------------------------------------------------------------- */

    b2bBaseRate: z
        .number()
        .min(0, "B2B base rate must be 0 or greater"),

    b2bBaseKm: z
        .number()
        .min(0, "B2B base KM must be 0 or greater"),

    b2bExtraKmRate: z
        .number()
        .min(0, "B2B extra KM rate must be 0 or greater"),

    b2bDriverBata: z
        .number()
        .min(0, "B2B driver Bata must be 0 or greater"),

    b2bOvertimeRate: z
        .number()
        .min(0, "B2B overtime rate must be 0 or greater"),

    /* -------------------------------------------------------------------------- */
    /* Operating Rules                                                           */
    /* -------------------------------------------------------------------------- */

    dutyStartTime: z.string(),

    dutyEndTime: z.string(),

    fuelIncluded: z.boolean(),

    tollTreatment: CommercialTreatmentSchema,

    parkingTreatment: CommercialTreatmentSchema,

    ferryTreatment: CommercialTreatmentSchema,

    driverAccommodationTreatment:
        CommercialTreatmentSchema,

    /* ----------------------------- Vehicle Features ----------------------------- */

    airConditioning: z.string().optional(),

    transmission: z.string().optional(),

    fuelType: z.string().optional(),

    chauffeurDriven: z.boolean(),

    /* -------------------------------- WhatsApp -------------------------------- */

    whatsappMessage: z.string().optional(),

    /* ------------------------------- Visibility -------------------------------- */

    isFeatured: z.boolean(),

    isActive: z.boolean(),

    sortOrder: z.number(),

    /* ----------------------------------- SEO ----------------------------------- */

    seoTitle: z.string().optional(),

    seoDescription: z.string().optional(),

    /* ---------------------------------- Content --------------------------------- */

    features: z.array(VehicleFeatureSchema),

    specifications: z.array(
        VehicleSpecificationSchema
    ),

    gallery: z.array(VehicleImageSchema),
});

export type VehicleDto = z.infer<typeof VehicleSchema>;