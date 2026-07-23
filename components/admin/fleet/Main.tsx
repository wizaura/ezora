"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Car, FolderTree, Plus } from "lucide-react";

import FleetTable from "@/components/admin/fleet/FleetTable";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import FleetCategoryTable from "./category/FleetCategoryTable";
import { FleetCategoryTableItem } from "./category/types";

interface Vehicle {
    id: string;
    name: string;
    slug: string;

    featuredImage?: string | null;

    seatingCapacity: string;
    luggageCapacity: string;

    isFeatured: boolean;
    isActive: boolean;

    sortOrder: number;

    category: {
        id: string;
        name: string;
    };
}

interface CategoryResponse {
        items: FleetCategoryTableItem[];

        total: number;

        page: number;

        limit: number;

        totalPages: number;
}

async function getCategories() {
    const res = await fetch(
        "/api/admin/fleet/categories",
        {
            credentials: "include",
        }
    );

    if (!res.ok) {
        throw new Error(
            "Failed to fetch categories"
        );
    }

    return res.json() as Promise<CategoryResponse>;
}

async function getVehicles() {
    const res = await fetch("/api/admin/fleet/vehicles", {
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch vehicles");
    }

    return res.json() as Promise<ApiResponse>;
}

interface ApiResponse {
    success: boolean;
    data: {
        items: Vehicle[];
        total: number;
        page: number;
        totalPages: number;
    };
}

const tabs = [
    {
        id: "vehicles",
        label: "Vehicles",
        icon: Car,
    },
    {
        id: "categories",
        label: "Categories",
        icon: FolderTree,
    },
] as const;

type Tab = "vehicles" | "categories";

export default function Fleet() {
    const [tab, setTab] = useState<Tab>("vehicles");

    const vehiclesQuery = useQuery({
        queryKey: ["fleet-vehicles"],
        queryFn: getVehicles,
        enabled: tab === "vehicles",
    });

    const categoriesQuery = useQuery({
        queryKey: ["fleet-categories"],
        queryFn: getCategories,
        enabled: tab === "categories",
    });

    return (
        <div className="space-y-6">

            {/* Header */}

            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-3xl font-bold">
                        Fleet Management
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Manage vehicles and fleet categories.
                    </p>
                </div>

                {tab === "vehicles" ? (
                    <Link href="/admin/fleet/new">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Vehicle
                        </Button>
                    </Link>
                ) : (
                    <Link href="/admin/fleet/categories/new">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Category
                        </Button>
                    </Link>
                )}

            </div>

            {/* Tabs */}

            <div className="inline-flex rounded-lg border bg-white p-1">

                {tabs.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setTab(item.id)}
                            className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm transition ${
                                tab === item.id
                                    ? "bg-primary text-white"
                                    : "hover:bg-muted"
                            }`}
                        >
                            <Icon size={18} />

                            {item.label}
                        </button>
                    );
                })}

            </div>

            {/* Content */}

            {tab === "vehicles" && (
                <FleetTable
                    data={
                        vehiclesQuery.data?.data.items ??
                        []
                    }
                />
            )}

            {tab === "categories" && (
                <FleetCategoryTable
                    data={
                        categoriesQuery.data?.items ??
                        []
                    }
                />
            )}

        </div>
    );
}