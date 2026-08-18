"use client";

import {
    CarFront,
    Package,
    Newspaper,
    Mail,
} from "lucide-react";

import StatCard from "./StatCard";

interface DashboardStatsData {
    totalVehicles: number;
    activeVehicles: number;

    totalPackages: number;
    publishedPackages: number;

    totalBlogs: number;
    publishedBlogs: number;

    totalTourismGuides: number;

    totalEnquiries: number;
    pendingEnquiries: number;
}

interface DashboardStatsProps {
    stats?: DashboardStatsData;
    loading?: boolean;
}

export default function DashboardStats({
    stats,
    loading = false,
}: DashboardStatsProps) {

    const vehicles =
        stats?.totalVehicles ?? 0;

    const packages =
        stats?.totalPackages ?? 0;

    const blogs =
        stats?.totalBlogs ?? 0;


    if (loading) {
        return (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                {[1, 2, 3, 4].map(
                    (item) => (
                        <div
                            key={item}
                            className="h-32 animate-pulse rounded-2xl border bg-white"
                        />
                    )
                )}

            </div>
        );
    }


    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
                title="Vehicles"
                value={vehicles}
                change={`${stats?.activeVehicles ?? 0} active`}
                icon={CarFront}
            />

            <StatCard
                title="Packages"
                value={packages}
                change={`${stats?.publishedPackages ?? 0} published`}
                icon={Package}
            />

            <StatCard
                title="Blogs"
                value={blogs}
                change={`${stats?.publishedBlogs ?? 0} published`}
                icon={Newspaper}
            />

            {/* <StatCard
                title="Enquiries"
                value={
                    stats?.totalEnquiries ?? 0
                }
                change={`${stats?.pendingEnquiries ?? 0} pending`}
                icon={Mail}
            /> */}

        </div>
    );
}