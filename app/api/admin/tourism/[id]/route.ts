import { NextRequest } from "next/server";

import { tourismService } from "@/services/tourism.service";
import { TourismSchema } from "@/validators/tourism.validator";

import { ApiResponse } from "@/lib/api-response";

interface Params {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(
    req: NextRequest,
    { params }: Params
) {
    try {
        const { id } = await params;

        const result = await tourismService.getById(id);

        return ApiResponse.success(result);
    } catch (error) {
        return ApiResponse.error(error);
    }
}

export async function PATCH(
    req: NextRequest,
    { params }: Params
) {
    try {
        const { id } = await params;

        const body = await req.json();

        const dto = TourismSchema.parse(body);

        const result = await tourismService.update(
            id,
            dto
        );

        return ApiResponse.success(
            result,
            "Tourism guide updated successfully."
        );
    } catch (error) {
        return ApiResponse.error(error);
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: Params
) {
    try {
        const { id } = await params;

        await tourismService.delete(id);

        return ApiResponse.success(
            null,
            "Tourism guide deleted successfully."
        );
    } catch (error) {
        return ApiResponse.error(error);
    }
}