import RentalAdminEmail from "@/emails/RentalAdminEmail";
import RentalCustomerEmail from "@/emails/RentalCustomerEmail";
import { Resend } from "resend";


/* ==========================================================================
   ITINERARY TYPES
============================================================================ */

export interface RentalItineraryDay {

    day: number;

    date: string;

    pickupTime: string;

    pickup: {
        place: string;
        placeId: string;
    };

    drop: {
        place: string;
        placeId: string;
    };

    stops: {
        place: string;
        placeId: string;
        type: string;
    }[];

    distance: string;

    duration: string;

    distanceMeters: number;

    durationSeconds: number;
}


/* ==========================================================================
   RENTAL MAIL DATA
============================================================================ */

export interface RentalMailData {

    /* ---------------------------------------------------------------------- */
    /* Customer                                                               */
    /* ---------------------------------------------------------------------- */

    customerName: string;

    email: string;

    phone: string;


    /* ---------------------------------------------------------------------- */
    /* Trip                                                                    */
    /* ---------------------------------------------------------------------- */

    tripType: string;

    passengers: number;


    /* ---------------------------------------------------------------------- */
    /* Vehicle                                                                 */
    /* ---------------------------------------------------------------------- */

    vehicleCategory: string;

    vehicleType: string;


    /* ---------------------------------------------------------------------- */
    /* Itinerary                                                               */
    /* ---------------------------------------------------------------------- */

    itinerary: RentalItineraryDay[];


    /* ---------------------------------------------------------------------- */
    /* Overall Route                                                           */
    /* ---------------------------------------------------------------------- */

    distance: string;

    duration: string;


    /* ---------------------------------------------------------------------- */
    /* Quotation                                                               */
    /* ---------------------------------------------------------------------- */

    quotationNo: string;


    /* ---------------------------------------------------------------------- */
    /* Customer Pricing                                                        */
    /* ---------------------------------------------------------------------- */

    baseRate: number;

    baseKm: number;

    extraKm: number;

    extraKmRate: number;

    extraKmCharge: number;

    driverAllowance: number;

    subtotal: number;

    tax: number;

    estimatedFare: number;
}


/* ==========================================================================
   MAIL REPOSITORY
============================================================================ */

export class MailRepository {

    private readonly resend =
        new Resend(
            process.env.RESEND_API_KEY
        );


    /* ======================================================================
       CUSTOMER EMAIL
    ====================================================================== */

    async sendCustomerQuotation(
        data: RentalMailData,
        pdf: Buffer
    ) {

        await this.resend.emails.send({

            from:
                process.env.EMAIL_FROM!,

            to:
                data.email,

            subject:
                "Your Rental Quotation | Ezora Tours",

            react:
                RentalCustomerEmail(data),

            attachments: [
                {
                    filename:
                        "RentalQuotation.pdf",

                    content:
                        pdf,
                },
            ],
        });
    }


    /* ======================================================================
       ADMIN EMAIL
    ====================================================================== */

    async sendAdminNotification(
        data: RentalMailData,
        pdf: Buffer
    ) {

        await this.resend.emails.send({

            from:
                process.env.EMAIL_FROM!,

            to:
                process.env.ADMIN_EMAIL!,

            subject:
                `New Rental Enquiry | ${data.quotationNo}`,

            react:
                RentalAdminEmail(data),

            attachments: [
                {
                    filename:
                        "RentalQuotation.pdf",

                    content:
                        pdf,
                },
            ],
        });
    }
}