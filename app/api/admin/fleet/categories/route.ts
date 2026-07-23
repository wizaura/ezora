import { NextRequest, NextResponse } from "next/server";

import { FleetCategorySchema } from "@/validators/fleet-category.validator";
import { FleetCategoryService } from "@/services/fleet-category.service";

export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl;

    const page = Number(searchParams.get("page") ?? 1);

    const limit = Number(searchParams.get("limit") ?? 10);

    const search = searchParams.get("search") ?? undefined;

    const data = await FleetCategoryService.getAll({
        page,
        limit,
        search,
    });

    console.log(data,'ds')

    return NextResponse.json(data);
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const dto = FleetCategorySchema.parse(body);

        const category =
            await FleetCategoryService.create(dto);

        return NextResponse.json(category, {
            status: 201,
        });
    } catch (error) {
        return NextResponse.json(
            {
                message:
                    error instanceof Error
                        ? error.message
                        : "Unable to create category",
            },
            {
                status: 400,
            }
        );
    }
}