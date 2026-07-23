"use client";

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface FleetCategoryOption {
    id: string;
    name: string;
}


export default function GeneralInformation() {

    const [categories, setCategories] = useState<FleetCategoryOption[]>([]);
    const [loadingCategories, setLoadingCategories] = useState(true);

    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useFormContext();

    const name = watch("name");

    function generateSlug(value: string) {
        return value
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");
    }

    useEffect(() => {
        if (name) {
            setValue("slug", generateSlug(name));
        }
    }, [name, setValue]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const res = await fetch("/api/admin/fleet/categories");

                if (!res.ok) {
                    throw new Error("Failed to fetch categories");
                }

                const result = await res.json();

                console.log(result, 'result')

                // Adjust if your API returns a different shape
                setCategories(result?.items ?? []);
            } catch (err) {
                console.error(err);
            } finally {
                setLoadingCategories(false);
            }
        }

        fetchCategories();
    }, []);

    const categoryId = watch("categoryId");

    useEffect(() => {
        if (categories.length > 0 && categoryId) {
            setValue("categoryId", categoryId, {
                shouldDirty: false,
                shouldValidate: false,
            });
        }
    }, [categories, categoryId, setValue]);

    return (
        <div className="space-y-6">

            <div>
                <h2 className="text-xl font-semibold">
                    General Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Basic information about the vehicle.
                </p>
            </div>

            {/* Vehicle Name */}

            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Vehicle Name *
                </label>

                <input
                    {...register("name")}
                    placeholder="Toyota Innova Crysta"
                    className="w-full rounded-lg border px-4 py-3 outline-none focus:border-primary"
                />

                {errors.name && (
                    <p className="text-sm text-red-500">
                        {errors.name.message as string}
                    </p>
                )}
            </div>

            {/* Slug */}

            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Slug
                </label>

                <input
                    {...register("slug")}
                    className="w-full rounded-lg border px-4 py-3 outline-none focus:border-primary"
                />

                <p className="text-xs text-gray-500">
                    Used for the URL.
                </p>
            </div>

            {/* Category */}

            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Category *
                </label>

                <select
                    {...register("categoryId")}
                    className="w-full rounded-lg border px-4 py-3"
                >
                    <option value="">
                        Select Category
                    </option>

                    {categories.map((category) => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>

                {errors.categoryId && (
                    <p className="text-sm text-red-500">
                        {errors.categoryId.message as string}
                    </p>
                )}

                {errors.categoryId && (
                    <p className="text-sm text-red-500">
                        {errors.categoryId.message as string}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                <div className="space-y-2">
                    <label className="text-sm font-medium">
                        Seating Capacity
                    </label>

                    <input
                        {...register("seatingCapacity")}
                        placeholder="7"
                        className="w-full rounded-lg border px-4 py-3 outline-none focus:border-primary"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">
                        Luggage Capacity
                    </label>

                    <input
                        {...register("luggageCapacity")}
                        placeholder="4 Bags"
                        className="w-full rounded-lg border px-4 py-3 outline-none focus:border-primary"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">
                        Transmission
                    </label>

                    <select
                        {...register("transmission")}
                        className="w-full rounded-lg border px-4 py-3 outline-none focus:border-primary"
                    >
                        <option value="">
                            Select
                        </option>

                        <option value="Automatic">
                            Automatic
                        </option>

                        <option value="Manual">
                            Manual
                        </option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">
                        Fuel Type
                    </label>

                    <select
                        {...register("fuelType")}
                        className="w-full rounded-lg border px-4 py-3 outline-none focus:border-primary"
                    >
                        <option value="">
                            Select
                        </option>

                        <option value="Diesel">
                            Diesel
                        </option>

                        <option value="Petrol">
                            Petrol
                        </option>

                        <option value="Electric">
                            Electric
                        </option>

                        <option value="Hybrid">
                            Hybrid
                        </option>
                    </select>
                </div>

            </div>

            {/* AC */}

            <div className="flex items-center justify-between rounded-lg border p-4">

                <div>
                    <h4 className="font-medium">
                        Air Conditioning
                    </h4>

                    <p className="text-sm text-gray-500">
                        Does this vehicle have AC?
                    </p>
                </div>

                <input
                    type="checkbox"
                    {...register("chauffeurDriven")}
                    className="h-5 w-5"
                />

            </div>

            {/* Short Description */}

            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Short Description
                </label>

                <textarea
                    rows={3}
                    {...register("shortDescription")}
                    className="w-full resize-none rounded-lg border px-4 py-3 outline-none focus:border-primary"
                />
            </div>

            {/* Description */}

            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Description
                </label>

                <textarea
                    rows={8}
                    {...register("description")}
                    className="w-full resize-none rounded-lg border px-4 py-3 outline-none focus:border-primary"
                />
            </div>

        </div>
    );
}