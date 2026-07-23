import { NextResponse } from "next/server";

import { VehicleService } from "@/services/vehicle.service";
import { VehicleSchema } from "@/validators/vehicle.validator";
import { ApiResponse } from "@/lib/api-response";

export async function GET(
    _: Request,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    }
) {
    try {
        const { id } = await params;

        const vehicle = await VehicleService.getById(id);

        return NextResponse.json({
            success: true,
            data: vehicle,
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Vehicle not found",
            },
            {
                status: 404,
            }
        );
    }
}

export async function PATCH(
    req: Request,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    }
) {
    try {
        const { id } = await params;

        const body = await req.json();

        const dto = VehicleSchema.parse(body);

        const vehicle = await VehicleService.update(
            id,
            dto
        );

        return ApiResponse.success(
            vehicle,
            "Vehicle updated successfully"
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Unable to update vehicle",
            },
            {
                status: 400,
            }
        );
    }
}

export async function DELETE(
    _: Request,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    }
) {
    try {
        const { id } = await params;

        await VehicleService.delete(id);

        return ApiResponse.success(
            null,
            "Vehicle deleted successfully"
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Unable to delete vehicle",
            },
            {
                status: 400,
            }
        );
    }
}