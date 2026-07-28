import { NextRequest } from "next/server";

import { ContactSchema } from "@/validators/contact.validator";
import { ContactService } from "@/services/contact.service";

import { ApiResponse } from "@/lib/api-response";

export async function POST(req: NextRequest) {

    try {

        const body = await req.json();

        const dto = ContactSchema.parse(body);

        await ContactService.send(dto);

        return ApiResponse.success(
            null,
            "Enquiry sent successfully."
        );

    } catch (error) {

        return ApiResponse.error(error);

    }

}