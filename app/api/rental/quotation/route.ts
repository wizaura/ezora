import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api-response";

import { RentalService } from "@/services/rental.service";

import {
    RentalQuotationValidator,
} from "@/validators/rental.validator";


const rentalService =
    new RentalService();


export async function POST(
    request: NextRequest
) {

    try {

        const body =
            await request.json();


        const validatedData =
            RentalQuotationValidator.parse(
                body
            );


        const quotation =
            await rentalService
                .generateQuotation(
                    validatedData
                );


        return ApiResponse.success(
            quotation,
            "Quotation generated successfully."
        );

    } catch (error) {

        console.error(
            "Rental quotation error:",
            error
        );


        if (
            error instanceof Error
        ) {

            return ApiResponse.error(
                error.message
            );
        }


        return ApiResponse.error(
            "Something went wrong while generating the quotation."
        );
    }
}