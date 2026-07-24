import { NextRequest } from "next/server";

import { tourismService } from "@/services/tourism.service";
import { TourismSchema } from "@/validators/tourism.validator";

import { ApiResponse } from "@/lib/api-response";
import { KeralaDistrict } from "@prisma/client";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        const page = Number(searchParams.get("page") ?? 1);
        const limit = Number(searchParams.get("limit") ?? 10);

        const search = searchParams.get("search") ?? undefined;
        const categoryId =
            searchParams.get("categoryId") ?? undefined;

        const districtParam =
            searchParams.get("district");

        const district =
            districtParam &&
                Object.values(KeralaDistrict).includes(
                    districtParam as KeralaDistrict
                )
                ? (districtParam as KeralaDistrict)
                : undefined;

        const featured =
            searchParams.get("featured") === null
                ? undefined
                : searchParams.get("featured") === "true";

        const published =
            searchParams.get("published") === null
                ? undefined
                : searchParams.get("published") === "true";

        const result = await tourismService.list({
            page,
            limit,
            search,
            categoryId,
            district,
            featured,
            published,
        });

        return ApiResponse.success(result);
    } catch (error) {
        return ApiResponse.error(error);
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const dto = TourismSchema.parse(body);

        const result = await tourismService.create(dto);

        return ApiResponse.success(result, "Tourism guide created successfully.");
    } catch (error) {
        return ApiResponse.error(error);
    }
}