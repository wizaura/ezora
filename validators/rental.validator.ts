import { z } from "zod";

/* =========================================================
   TRIP TYPE
========================================================= */

export const TripTypeSchema = z.enum([
    "ONE_WAY",
    "ROUND_TRIP",
    "MULTI_DAY",
]);

export type TripType = z.infer<
    typeof TripTypeSchema
>;


/* =========================================================
   ITINERARY STOP
========================================================= */

export const ItineraryStopSchema = z.object({
    id: z.string(),

    place: z
        .string()
        .trim()
        .min(2, "Please select a location."),

    placeId: z
        .string()
        .min(1, "Please select a location from Google."),

    type: z.enum([
        "PICKUP",
        "STOP",
        "DROP",
    ]),
});

export type ItineraryStop = z.infer<
    typeof ItineraryStopSchema
>;


/* =========================================================
   ITINERARY DAY
========================================================= */

export const ItineraryDaySchema = z.object({
    id: z.string(),

    date: z
        .string()
        .min(1, "Please select a travel date."),

    pickupTime: z
        .string()
        .min(1, "Please select a pickup time."),

    stops: z
        .array(ItineraryStopSchema)
        .min(
            2,
            "Each day must have a pickup and destination."
        ),
});

export type ItineraryDay = z.infer<
    typeof ItineraryDaySchema
>;


/* =========================================================
   RENTAL QUOTATION
========================================================= */

export const RentalQuotationValidator =
    z.object({

        tripType: TripTypeSchema,

        itinerary: z
            .array(ItineraryDaySchema)
            .min(
                1,
                "At least one travel day is required."
            ),

        categoryType: z
            .string()
            .min(
                1,
                "Please select a vehicle category."
            ),

        vehicleType: z
            .string()
            .min(
                1,
                "Please select a vehicle."
            ),

        passengers: z
            .number()
            .int()
            .min(
                1,
                "At least one passenger is required."
            )
            .max(
                100,
                "Invalid passenger count."
            ),

        name: z
            .string()
            .trim()
            .min(
                2,
                "Please enter your name."
            )
            .max(100),

        phone: z
            .string()
            .trim()
            .min(
                7,
                "Please enter a valid phone number."
            )
            .max(30),

        email: z
            .string()
            .trim()
            .email(
                "Please enter a valid email address."
            ),
    });

export type RentalQuotationInput =
    z.infer<
        typeof RentalQuotationValidator
    >;