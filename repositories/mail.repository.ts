import { Resend } from "resend";

export interface RentalMailData {
    customerName: string;
    email: string;
    phone: string;

    pickupLocation: string;
    dropLocation: string;

    vehicleType: string;

    pickupDate: string;
    pickupTime: string;

    distance: string;
    duration: string;

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

            subject: "Your Ezora Rental Quotation",

            html: `
                <h2>Hello ${data.customerName},</h2>

                <p>Thank you for choosing Ezora Tours & Travels.</p>

                <p>Your quotation has been generated successfully.</p>

                <table cellpadding="8">
                    <tr>
                        <td><strong>Pickup</strong></td>
                        <td>${data.pickupLocation}</td>
                    </tr>

                    <tr>
                        <td><strong>Destination</strong></td>
                        <td>${data.dropLocation}</td>
                    </tr>

                    <tr>
                        <td><strong>Distance</strong></td>
                        <td>${data.distance}</td>
                    </tr>

                    <tr>
                        <td><strong>Duration</strong></td>
                        <td>${data.duration}</td>
                    </tr>

                    <tr>
                        <td><strong>Estimated Fare</strong></td>
                        <td>₹ ${data.estimatedFare.toFixed(2)}</td>
                    </tr>
                </table>

                <p>Please find your quotation attached.</p>

                <p>Regards,<br/>Ezora Tours & Travels</p>
            `,

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

            html: `
                <h2>New Rental Enquiry</h2>

                <table cellpadding="8">
                    <tr>
                        <td>Name</td>
                        <td>${data.customerName}</td>
                    </tr>

                    <tr>
                        <td>Email</td>
                        <td>${data.email}</td>
                    </tr>

                    <tr>
                        <td>Phone</td>
                        <td>${data.phone}</td>
                    </tr>

                    <tr>
                        <td>Pickup</td>
                        <td>${data.pickupLocation}</td>
                    </tr>

                    <tr>
                        <td>Destination</td>
                        <td>${data.dropLocation}</td>
                    </tr>

                    <tr>
                        <td>Vehicle</td>
                        <td>${data.vehicleType}</td>
                    </tr>

                    <tr>
                        <td>Distance</td>
                        <td>${data.distance}</td>
                    </tr>

                    <tr>
                        <td>Duration</td>
                        <td>${data.duration}</td>
                    </tr>

                    <tr>
                        <td>Estimated Fare</td>
                        <td>₹ ${data.estimatedFare.toFixed(2)}</td>
                    </tr>
                </table>
            `,

            attachments: [
                {
                    filename: "RentalQuotation.pdf",
                    content: pdf,
                },
            ],
        });
    }
}