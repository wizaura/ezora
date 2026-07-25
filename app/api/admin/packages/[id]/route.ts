import { NextRequest } from "next/server";

import { packageService } from "@/services/package.service";
import { PackageSchema } from "@/validators/package.validator";

import { ApiResponse } from "@/lib/api-response";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const result =
            await packageService.findById(id);

        console.log(result,'res')

        return ApiResponse.success(result);
    } catch (error) {
        return ApiResponse.error(error);
    }
}

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const body = await req.json();

        const dto = PackageSchema.parse(body);

        const result =
            await packageService.update(id, dto);

        return ApiResponse.success(
            result,
            "Package updated successfully."
        );
    } catch (error) {
        return ApiResponse.error(error);
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        await packageService.delete(id);

        return ApiResponse.success(
            null,
            "Package deleted successfully."
        );
    } catch (error) {
        return ApiResponse.error(error);
    }
}