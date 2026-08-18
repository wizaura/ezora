import { NextResponse } from "next/server";

import { DashboardService } from "@/services/dashboard.service";

export async function GET() {

    try {

        const data =
            await DashboardService.getDashboard();


        return NextResponse.json({
            success: true,
            data,
        });

    } catch (error) {

        console.error(
            "Dashboard API error:",
            error
        );


        return NextResponse.json(
            {
                success: false,
                message:
                    "Failed to load dashboard data.",
            },
            {
                status: 500,
            }
        );
    }
}