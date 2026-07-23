import { NextRequest } from "next/server";

import { tourismCategoryService } from "@/services/tourism-category.service";
import { TourismCategorySchema } from "@/validators/tourism-category.validator";

import { ApiResponse } from "@/lib/api-response";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        const page = Number(searchParams.get("page") ?? 1);
        const limit = Number(searchParams.get("limit") ?? 10);

        const search =
            searchParams.get("search") ?? undefined;

        const active =
            searchParams.get("active") === null
                ? undefined
                : searchParams.get("active") === "true";

        const result =
            await tourismCategoryService.list({
                page,
                limit,
                search,
                active,
            });

        return ApiResponse.success(result);
    } catch (error) {
        return ApiResponse.error(error);
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const dto =
            TourismCategorySchema.parse(body);

        const result =
            await tourismCategoryService.create(dto);

        return ApiResponse.success(
            result,
            "Category created successfully."
        );
    } catch (error) {
        return ApiResponse.error(error);
    }
}