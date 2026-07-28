import z from "zod";

export const ContactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(8),

    service: z.string().min(2),

    pickup: z.string().min(2),

    destination: z.string().min(2),

    message: z.string().min(10),
});