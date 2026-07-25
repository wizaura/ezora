import { NextRequest } from "next/server";

import { packageService } from "@/services/package.service";
import { PackageSchema } from "@/validators/package.validator";

import { ApiResponse } from "@/lib/api-response";
import { PackageStatus } from "@prisma/client";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        const page = Number(searchParams.get("page") ?? 1);
        const limit = Number(searchParams.get("limit") ?? 10);

        const search =
            searchParams.get("search") ?? undefined;

        const featured =
            searchParams.get("featured") === null
                ? undefined
                : searchParams.get("featured") === "true";

        const status = searchParams.get(
            "status"
        ) as PackageStatus | null;

        const result = await packageService.findMany({
            page,
            limit,
            search,
            featured,
            status: status ?? undefined,
        });

        return ApiResponse.success(result);
    } catch (error) {
        console.error(error);

        return ApiResponse.error(
            "Failed to fetch packages."
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const dto = PackageSchema.parse(body);

        const result = await packageService.create(dto);

        return ApiResponse.success(
            result,
            "Package created successfully."
        );
    } catch (error) {
        return ApiResponse.error(error);
    }
}