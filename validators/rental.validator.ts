import { z } from "zod";

export const RentalQuotationValidator = z.object({
    pickupLocation: z
        .string()
        .trim()
        .min(3, "Pickup location is required"),

    dropLocation: z
        .string()
        .trim()
        .min(3, "Drop location is required"),

    pickupDate: z
        .string()
        .min(1, "Pickup date is required"),

    pickupTime: z
        .string()
        .min(1, "Pickup time is required"),

    returnDate: z
        .string()
        .optional()
        .or(z.literal("")),

    vehicleType: z
        .string()
        .trim()
        .min(1, "Vehicle type is required"),

    name: z
        .string()
        .trim()
        .min(2, "Name is required")
        .max(100),

    phone: z
        .string()
        .trim()
        .regex(
            /^[+]?[0-9\s()-]{8,20}$/,
            "Invalid phone number"
        ),

    email: z
        .string()
        .trim()
        .email("Invalid email address"),
});

export type RentalQuotationInput = z.infer<
    typeof RentalQuotationValidator
>;