import { NextResponse } from "next/server";

import { FleetCategoryService } from "@/services/fleet-category.service";

export async function GET() {
    const data =
        await FleetCategoryService.getRentalOptions();

    return NextResponse.json(data);
}