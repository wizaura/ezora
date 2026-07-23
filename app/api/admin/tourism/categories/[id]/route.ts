import { NextRequest } from "next/server";

import { tourismCategoryService } from "@/services/tourism-category.service";
import { TourismCategorySchema } from "@/validators/tourism-category.validator";

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

        const result =
            await tourismCategoryService.getById(id);

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

        const dto =
            TourismCategorySchema.parse(body);

        const result =
            await tourismCategoryService.update(
                id,
                dto
            );

        return ApiResponse.success(
            result,
            "Category updated successfully."
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

        await tourismCategoryService.delete(id);

        return ApiResponse.success(
            null,
            "Category deleted successfully."
        );
    } catch (error) {
        return ApiResponse.error(error);
    }
}