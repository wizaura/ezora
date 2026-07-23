import { NextRequest, NextResponse } from "next/server";

import { VehicleService } from "@/services/vehicle.service";
import { VehicleSchema } from "@/validators/vehicle.validator";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = req.nextUrl;

        const page = Number(searchParams.get("page") ?? 1);

        const limit = Number(searchParams.get("limit") ?? 10);

        const search = searchParams.get("search") ?? undefined;

        const categoryId =
            searchParams.get("categoryId") ?? undefined;

        const isFeatured =
            searchParams.get("isFeatured") !== null
                ? searchParams.get("isFeatured") === "true"
                : undefined;

        const isActive =
            searchParams.get("isActive") !== null
                ? searchParams.get("isActive") === "true"
                : undefined;

        const vehicles = await VehicleService.getAll({
            page,
            limit,
            search,
            categoryId,
            isFeatured,
            isActive,
        });

        return NextResponse.json({
            success: true,
            data: vehicles,
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Unable to fetch vehicles",
            },
            {
                status: 500,
            }
        );
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const dto = VehicleSchema.parse(body);

        const vehicle = await VehicleService.create(dto);

        return NextResponse.json(
            {
                success: true,
                data: vehicle,
                message: "Vehicle created successfully",
            },
            {
                status: 201,
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Unable to create vehicle",
            },
            {
                status: 400,
            }
        );
    }
}