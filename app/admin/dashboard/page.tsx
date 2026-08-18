"use client";

import { useEffect, useState } from "react";

import DashboardStats from "@/components/admin/dashboard/DashboardStats";
import RecentBlogs from "@/components/admin/dashboard/RecentBlogs";
import RecentEnquiries from "@/components/admin/dashboard/RecentEnquiries";
import QuickActions from "@/components/admin/dashboard/QuickActions";
import PageHeader from "@/components/admin/shared/PageHeader";

interface DashboardData {

    stats: {
        totalVehicles: number;
        activeVehicles: number;

        totalPackages: number;
        publishedPackages: number;

        totalBlogs: number;
        publishedBlogs: number;

        totalTourismGuides: number;

        totalEnquiries: number;
        pendingEnquiries: number;
    };

    recentEnquiries: any[];

    recentBlogs: any[];
}


export default function DashboardPage() {

    const [data, setData] =
        useState<DashboardData | null>(null);

    const [loading, setLoading] =
        useState(true);


    useEffect(() => {

        async function loadDashboard() {

            try {

                const res =
                    await fetch(
                        "/api/admin/dashboard"
                    );

                const result =
                    await res.json();


                if (!res.ok) {
                    throw new Error(
                        result.message ??
                        "Failed to load dashboard."
                    );
                }


                setData(result.data);

            } catch (error) {

                console.error(
                    "Dashboard loading error:",
                    error
                );

            } finally {

                setLoading(false);

            }
        }


        loadDashboard();

    }, []);


    return (
        <div className="space-y-8">

            <PageHeader
                title="Dashboard"
                description="Welcome back."
            />


            <DashboardStats
                stats={
                    data?.stats
                }
                loading={
                    loading
                }
            />


            <QuickActions />


            <div className="grid gap-6 lg:grid-cols-2">

                {/* <RecentEnquiries
                    enquiries={
                        data?.recentEnquiries ??
                        []
                    }
                    loading={
                        loading
                    }
                /> */}


                <RecentBlogs
                    blogs={
                        data?.recentBlogs ??
                        []
                    }
                    loading={
                        loading
                    }
                />

            </div>

        </div>
    );
}