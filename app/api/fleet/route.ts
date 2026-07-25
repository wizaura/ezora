import { NextResponse } from "next/server";
import { FleetCategoryService } from "@/services/fleet-category.service";

export async function GET() {
    try {
        const categories =
            await FleetCategoryService.getPublicCategories();

        return NextResponse.json({
            success: true,
            data: categories,
        });
    } catch (error: any) {
        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            {
                status: 500,
            }
        );
    }
}