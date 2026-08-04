import RentalAdminEmail from "@/emails/RentalAdminEmail";
import RentalCustomerEmail from "@/emails/RentalCustomerEmail";
import { Resend } from "resend";

export interface RentalMailData {
    customerName: string;
    email: string;
    phone: string;

    pickupLocation: string;
    dropLocation: string;

    vehicleCategory: string;
    vehicleType: string;

    pickupDate: string;
    pickupTime: string;

    distance: string;
    duration: string;

    quotationNo: string;

    ratePerKm: number;
    baseFare: number;
    driverAllowance: number;
    tax: number;

    estimatedFare: number;
}

export class MailRepository {
    private readonly resend = new Resend(
        process.env.RESEND_API_KEY
    );

    async sendCustomerQuotation(
        data: RentalMailData,
        pdf: Buffer
    ) {
        await this.resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: data.email,
            subject: "Your Rental Quotation | Ezora Tours",
            react: RentalCustomerEmail(data),
            attachments: [
                {
                    filename: "RentalQuotation.pdf",
                    content: pdf,
                },
            ],
        });
    }

    async sendAdminNotification(
        data: RentalMailData,
        pdf: Buffer
    ) {
        await this.resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: process.env.ADMIN_EMAIL!,
            subject: "New Rental Enquiry",
            react: RentalAdminEmail(data),
            attachments: [
                {
                    filename: "RentalQuotation.pdf",
                    content: pdf,
                },
            ],
        });
    }
}