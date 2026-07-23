"use client";

import { useFormContext } from "react-hook-form";

import { TourismCategoryDto } from "@/validators/tourism-category.validator";

export default function GeneralSection() {
    const {
        register,
        watch,
    } = useFormContext<TourismCategoryDto>();

    const name = watch("name") ?? "";

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-xl font-semibold">
                    General Information
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    Configure the tourism category details.
                </p>
            </div>

            <div className="space-y-2">
                <label className="font-medium">
                    Category Name
                </label>

                <input
                    {...register("name")}
                    placeholder="Waterfalls"
                    className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-primary"
                />
            </div>

            <div className="space-y-2">
                <label className="font-medium">
                    Slug
                </label>

                <input
                    {...register("slug")}
                    placeholder="waterfalls"
                    className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-primary"
                />
            </div>

            <div className="space-y-2">
                <label className="font-medium">
                    Description
                </label>

                <textarea
                    rows={5}
                    {...register("description")}
                    placeholder="Brief description about this tourism category."
                    className="w-full resize-none rounded-lg border px-4 py-3 outline-none transition focus:border-primary"
                />
            </div>

            <div className="grid gap-6 md:grid-cols-2">

                <div className="space-y-2">
                    <label className="font-medium">
                        Sort Order
                    </label>

                    <input
                        type="number"
                        {...register("sortOrder", {
                            valueAsNumber: true,
                        })}
                        className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-primary"
                    />
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <label className="flex items-center gap-3 rounded-lg border p-4">
                    <input
                        type="checkbox"
                        {...register("isFeatured")}
                    />

                    <span className="font-medium">
                        Featured Category
                    </span>
                </label>

                <label className="flex items-center gap-3 rounded-lg border p-4">
                    <input
                        type="checkbox"
                        {...register("isActive")}
                    />

                    <span className="font-medium">
                        Active
                    </span>
                </label>
            </div>

            <div className="rounded-xl border bg-gray-50 p-6">
                <h3 className="font-semibold">
                    Preview
                </h3>

                <p className="mt-3 text-2xl font-bold">
                    {name || "Category Name"}
                </p>
            </div>
        </div>
    );
}