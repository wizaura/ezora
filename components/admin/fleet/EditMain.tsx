"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";

import FleetForm from "./FleetForm";
import { Button } from "@/components/ui/button";
import { VehicleDto } from "@/validators/vehicle.validator";
import { Vehicle } from "./types";

interface Props {
    id: string;
}

export default function EditVehicle({
    id,
}: Props) {
    const router = useRouter();

    const [vehicle, setVehicle] = useState<Vehicle | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        async function loadVehicle() {
            try {
                const res = await fetch(
                    `/api/admin/fleet/vehicles/${id}`
                );

                const result = await res.json();

                if (!res.ok) {
                    throw new Error(result.message);
                }

                setVehicle(result.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        loadVehicle();
    }, [id]);

    async function handleUpdateVehicle(values: any) {
        try {
            setSaving(true);

            const res = await fetch(
                `/api/admin/fleet/vehicles/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                }
            );

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message);
            }

            router.push("/admin/fleet");
        } catch (err) {
            console.error(err);
        } finally {
            setSaving(false);
        }
    }

    if (!vehicle) {
        return null;
    }

    if (loading) {
        return (
            <div className="space-y-6">
                <div className="h-10 w-72 animate-pulse rounded bg-gray-200" />

                <div className="rounded-xl border bg-white p-8">
                    <div className="space-y-4">
                        <div className="h-5 rounded bg-gray-200" />
                        <div className="h-5 rounded bg-gray-200" />
                        <div className="h-5 rounded bg-gray-200" />
                        <div className="h-5 rounded bg-gray-200" />
                    </div>
                </div>
            </div>
        );
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
                            Edit Vehicle
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Update your vehicle information.
                        </p>

                    </div>

                </div>

                <Button
                    form="fleet-form"
                    type="submit"
                    disabled={saving}
                >
                    <Save className="mr-2 h-4 w-4" />
                    {saving
                        ? "Saving..."
                        : "Update Vehicle"}
                </Button>

            </div>

            {/* Layout */}

            <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">

                <div className="xl:col-span-2">

                    <FleetForm
                        defaultValues={
                            vehicle
                                ? {
                                    categoryId: vehicle.categoryId,
                                    name: vehicle.name,
                                    slug: vehicle.slug,
                                    tagline: vehicle.tagline,
                                    shortDescription: vehicle.shortDescription,
                                    description: vehicle.description,

                                    featuredImage: vehicle.featuredImage ?? "",
                                    featuredImagePublicId:
                                        vehicle.featuredImagePublicId ?? "",

                                    heroImage: vehicle.heroImage ?? "",
                                    heroImagePublicId:
                                        vehicle.heroImagePublicId ?? "",

                                    seatingCapacity: vehicle.seatingCapacity,
                                    luggageCapacity: vehicle.luggageCapacity,

                                    airConditioning: vehicle.airConditioning,
                                    transmission: vehicle.transmission,
                                    fuelType: vehicle.fuelType,

                                    chauffeurDriven: vehicle.chauffeurDriven,

                                    whatsappMessage: vehicle.whatsappMessage,

                                    isFeatured: vehicle.isFeatured,
                                    isActive: vehicle.isActive,

                                    sortOrder: vehicle.sortOrder,

                                    seoTitle: vehicle.seoTitle ?? "",
                                    seoDescription:
                                        vehicle.seoDescription ?? "",

                                    features: vehicle.features,

                                    specifications:
                                        vehicle.specifications.map(
                                            (item) => ({
                                                label: item.label,
                                                value: item.value,
                                                sortOrder:
                                                    item.sortOrder,
                                            })
                                        ),

                                    gallery: vehicle.gallery.map(
                                        (image) => ({
                                            image: image.image,
                                            publicId:
                                                image.publicId,
                                            alt: image.alt ?? "",
                                            sortOrder:
                                                image.sortOrder,
                                        })
                                    ),
                                }
                                : undefined
                        }
                        onSubmit={handleUpdateVehicle}
                        loading={saving}
                    />

                </div>

                <div className="space-y-6">

                    <div className="rounded-xl border bg-white p-6 shadow-sm">

                        <h3 className="text-lg font-semibold">
                            Publish
                        </h3>

                        <div className="mt-5 space-y-4">

                            <div className="flex justify-between">
                                <span>Status</span>

                                <span
                                    className={`rounded-full px-3 py-1 text-sm ${vehicle.isActive
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {vehicle.isActive
                                        ? "Published"
                                        : "Inactive"}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span>Featured</span>

                                <span>
                                    {vehicle.isFeatured
                                        ? "Yes"
                                        : "No"}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span>Created</span>

                                <span>
                                    {new Date(
                                        vehicle?.createdAt
                                    ).toLocaleDateString()}
                                </span>
                            </div>

                        </div>

                    </div>

                    <div className="rounded-xl border bg-white p-6 shadow-sm">

                        <h3 className="text-lg font-semibold">
                            SEO Preview
                        </h3>

                        <div className="mt-4 space-y-2">

                            <p className="font-medium">
                                {vehicle.seoTitle ||
                                    vehicle.name}
                            </p>

                            <p className="text-sm text-green-700">
                                /fleet/{vehicle.slug}
                            </p>

                            <p className="text-sm text-gray-500">
                                {vehicle.seoDescription ||
                                    "No SEO description"}
                            </p>

                        </div>

                    </div>

                    <div className="rounded-xl border bg-blue-50 p-6">

                        <h3 className="font-semibold text-blue-700">
                            Tips
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm text-blue-700">

                            <li>• Keep vehicle details up to date.</li>

                            <li>• Upload high-quality images.</li>

                            <li>• Review SEO metadata.</li>

                            <li>• Check specifications carefully.</li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>
    );
}