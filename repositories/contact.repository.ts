import { resend } from "@/lib/resend";

import ContactAdminEmail from "@/emails/ContactAdminEmail";
import ContactCustomerEmail from "@/emails/ContactCustomerEmail";

import { ContactDto } from "@/types/contact.type";

export class ContactRepository {

    static async send(dto: ContactDto) {

        await Promise.all([

            resend.emails.send({
                from: "Ezora Tours <noreply@glassics.shop>",
                to: [process.env.CONTACT_EMAIL!],
                subject: `New Enquiry • ${dto.service}`,
                react: ContactAdminEmail(dto),
            }),

            resend.emails.send({
                from: "Ezora Tours <noreply@glassics.shop>",
                to: [dto.email],
                subject: "We've received your enquiry",
                react: ContactCustomerEmail({
                    name: dto.name,
                }),
            }),

        ]);

        return true;
    }

}