"use client";

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import { TourismDto } from "@/validators/tourism.validator";
import { KeralaDistrict } from "@prisma/client";

type TourismCategory = {
    id: string;
    name: string;
};

export default function GeneralSection() {
    const { register, watch } =
        useFormContext<TourismDto>();

    const [categories, setCategories] = useState<TourismCategory[]>([]);
    const [loadingCategories, setLoadingCategories] =
        useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(
                    "/api/admin/tourism/categories"
                );

                const result = await response.json();

                console.log(result, 'res')

                if (response.ok) {
                    setCategories(result.data.items);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoadingCategories(false);
            }
        };

        fetchCategories();
    }, []);

    const title = watch("title") ?? "";

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-xl font-semibold">
                    General Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Basic information about this tourism destination.
                </p>
            </div>

            <div className="space-y-2">
                <label className="font-medium">
                    Title
                </label>

                <input
                    {...register("title")}
                    placeholder="Athirappilly Waterfalls"
                    className="w-full rounded-lg border px-4 py-3 focus:border-primary outline-none"
                />
            </div>

            <div className="space-y-2">
                <label className="font-medium">
                    Slug
                </label>

                <input
                    {...register("slug")}
                    placeholder="athirappilly-waterfalls"
                    className="w-full rounded-lg border px-4 py-3 focus:border-primary outline-none"
                />
            </div>

            <div className="space-y-2">
                <label className="font-medium">
                    Category
                </label>

                <select
                    {...register("categoryId")}
                    className="w-full rounded-lg border px-4 py-3 focus:border-primary outline-none"
                >
                    <option value="">
                        {loadingCategories
                            ? "Loading categories..."
                            : "Select Category"}
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
            </div>

            <div className="space-y-2">
                <label className="font-medium">
                    District
                </label>

                <select
                    {...register("district")}
                    className="w-full rounded-lg border px-4 py-3 focus:border-primary outline-none"
                >
                    <option value="">
                        Select District
                    </option>

                    {Object.values(KeralaDistrict).map((district) => (
                        <option
                            key={district}
                            value={district}
                        >
                            {district
                                .replace(/_/g, " ")
                                .toLowerCase()
                                .replace(/\b\w/g, (char) =>
                                    char.toUpperCase()
                                )}
                        </option>
                    ))}
                </select>
            </div>

            <div className="space-y-2">
                <label className="font-medium">
                    Excerpt
                </label>

                <textarea
                    rows={3}
                    {...register("excerpt")}
                    placeholder="Short summary..."
                    className="w-full rounded-lg border px-4 py-3 resize-none focus:border-primary outline-none"
                />
            </div>

            <div className="space-y-2">
                <label className="font-medium">
                    Content
                </label>

                <textarea
                    rows={8}
                    {...register("content")}
                    placeholder="Complete tourism guide..."
                    className="w-full rounded-lg border px-4 py-3 focus:border-primary outline-none"
                />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <label className="font-medium">
                        Address
                    </label>

                    <input
                        {...register("address")}
                        placeholder="Athirappilly, Thrissur"
                        className="w-full rounded-lg border px-4 py-3 focus:border-primary outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label className="font-medium">
                        Best Time To Visit
                    </label>

                    <input
                        {...register("bestTimeToVisit")}
                        placeholder="October - February"
                        className="w-full rounded-lg border px-4 py-3 focus:border-primary outline-none"
                    />
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <label className="font-medium">
                        Latitude
                    </label>

                    <input
                        type="number"
                        step="any"
                        {...register("latitude", {
                            valueAsNumber: true,
                        })}
                        className="w-full rounded-lg border px-4 py-3 focus:border-primary outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label className="font-medium">
                        Longitude
                    </label>

                    <input
                        type="number"
                        step="any"
                        {...register("longitude", {
                            valueAsNumber: true,
                        })}
                        className="w-full rounded-lg border px-4 py-3 focus:border-primary outline-none"
                    />
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <label className="font-medium">
                        Opening Hours
                    </label>

                    <input
                        {...register("openingHours")}
                        placeholder="8:00 AM - 6:00 PM"
                        className="w-full rounded-lg border px-4 py-3 focus:border-primary outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label className="font-medium">
                        Entry Fee
                    </label>

                    <input
                        {...register("entryFee")}
                        placeholder="₹50"
                        className="w-full rounded-lg border px-4 py-3 focus:border-primary outline-none"
                    />
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <label className="font-medium">
                        Duration
                    </label>

                    <input
                        {...register("duration")}
                        placeholder="2 Hours"
                        className="w-full rounded-lg border px-4 py-3 focus:border-primary outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label className="font-medium">
                        Google Maps URL
                    </label>

                    <input
                        {...register("mapUrl")}
                        placeholder="https://maps.google.com/..."
                        className="w-full rounded-lg border px-4 py-3 focus:border-primary outline-none"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="font-medium">
                    Tags
                </label>

                <input
                    placeholder="waterfall,nature,kerala"
                    onBlur={(e) => {
                        const tags = e.target.value
                            .split(",")
                            .map((tag) => tag.trim())
                            .filter(Boolean);
                    }}
                    className="w-full rounded-lg border px-4 py-3 focus:border-primary outline-none"
                />

                <p className="text-xs text-gray-500">
                    Separate tags with commas.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <label className="flex items-center gap-3 rounded-lg border p-4">
                    <input
                        type="checkbox"
                        {...register("isFeatured")}
                    />
                    Featured
                </label>

                <label className="flex items-center gap-3 rounded-lg border p-4">
                    <input
                        type="checkbox"
                        {...register("isPublished")}
                    />
                    Published
                </label>

                <div className="space-y-2">
                    <label className="font-medium">
                        Sort Order
                    </label>

                    <input
                        type="number"
                        {...register("sortOrder", {
                            valueAsNumber: true,
                        })}
                        className="w-full rounded-lg border px-4 py-3 focus:border-primary outline-none"
                    />
                </div>
            </div>

            <div className="rounded-xl border bg-gray-50 p-6">
                <h3 className="font-semibold">
                    Preview
                </h3>

                <p className="mt-3 text-2xl font-bold">
                    {title || "Tourism Destination"}
                </p>
            </div>
        </div>
    );
}