import { NextResponse } from "next/server";

import { FleetCategorySchema } from "@/validators/fleet-category.validator";
import { FleetCategoryService } from "@/services/fleet-category.service";

export async function GET(
    _: Request,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    }
) {
    const { id } = await params;

    const category =
        await FleetCategoryService.getById(id);

    return NextResponse.json(category);
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

        const dto = FleetCategorySchema.parse(body);

        const category =
            await FleetCategoryService.update(id, dto);

        return NextResponse.json(category);
    } catch (error) {
        return NextResponse.json(
            {
                message:
                    error instanceof Error
                        ? error.message
                        : "Unable to update category",
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

        await FleetCategoryService.delete(id);

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        return NextResponse.json(
            {
                message:
                    error instanceof Error
                        ? error.message
                        : "Unable to delete category",
            },
            {
                status: 400,
            }
        );
    }
}