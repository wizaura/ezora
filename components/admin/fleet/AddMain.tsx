"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

import FleetForm from "./FleetForm";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewVehicle() {

    const router = useRouter();

    const [loading, setLoading] = useState(false);


    async function handleCreateVehicle(values: any) {
        try {
            setLoading(true);

            const res = await fetch("/api/admin/fleet/vehicles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || "Failed to create vehicle");
            }

            console.log(result);

            router.push("/admin/fleet");
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="space-y-8">

            {/* Header */}

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                    <Link href="/admin/fleet">
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                        </Button>
                    </Link>

                    <div>
                        <h1 className="text-3xl font-bold">
                            Add Vehicle
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Create a new vehicle for your fleet.
                        </p>
                    </div>

                </div>

                <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Save Vehicle
                </Button>

            </div>

            {/* Layout */}

            <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">

                {/* Main Form */}

                <div className="xl:col-span-2">
                    <FleetForm
                        onSubmit={handleCreateVehicle}
                        loading={loading}
                    />
                </div>

                {/* Sidebar */}

                <div className="space-y-6">

                    {/* Publish */}

                    <div className="rounded-xl border bg-white p-6 shadow-sm">

                        <h3 className="text-lg font-semibold">
                            Publish
                        </h3>

                        <div className="mt-5 space-y-4">

                            <div className="flex items-center justify-between">
                                <span>Status</span>

                                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                                    Draft
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span>Featured</span>

                                <span>No</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span>Visibility</span>

                                <span>Private</span>
                            </div>

                        </div>

                    </div>

                    {/* SEO */}

                    <div className="rounded-xl border bg-white p-6 shadow-sm">

                        <h3 className="text-lg font-semibold">
                            SEO Preview
                        </h3>

                        <div className="mt-4 space-y-2">

                            <div className="h-5 w-40 rounded bg-gray-200" />

                            <div className="h-3 w-52 rounded bg-gray-100" />

                            <div className="h-3 w-full rounded bg-gray-100" />

                        </div>

                    </div>

                    {/* Tips */}

                    <div className="rounded-xl border bg-blue-50 p-6">

                        <h3 className="font-semibold text-blue-700">
                            Tips
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm text-blue-700">

                            <li>• Upload a high-quality featured image.</li>

                            <li>• Use a unique slug.</li>

                            <li>• Add all important specifications.</li>

                            <li>• Include vehicle features.</li>

                            <li>• Write an SEO-friendly description.</li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>
    );
}