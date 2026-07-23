"use client";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { FleetCategoryDto } from "@/validators/fleet-category.validator";

function generateSlug(value: string) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

export default function CategoryGeneralInformation() {
    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useFormContext<FleetCategoryDto>();

    const name = watch("name");

    useEffect(() => {
        if (name) {
            setValue("slug", generateSlug(name));
        }
    }, [name, setValue]);

    return (
        <div className="rounded-xl border bg-white p-6">

            <h2 className="mb-6 text-lg font-semibold">
                General Information
            </h2>

            <div className="space-y-5">

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Category Name
                    </label>

                    <input
                        {...register("name")}
                        className="w-full rounded-lg border px-4 py-3"
                        placeholder="Luxury Cars"
                    />

                    {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Slug
                    </label>

                    <input
                        {...register("slug")}
                        className="w-full rounded-lg border px-4 py-3"
                    />

                    {errors.slug && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.slug.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Eyebrow
                    </label>

                    <input
                        {...register("eyebrow")}
                        className="w-full rounded-lg border px-4 py-3"
                        placeholder="Premium Fleet"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Short Description
                    </label>

                    <textarea
                        rows={3}
                        {...register("shortDescription")}
                        className="w-full rounded-lg border px-4 py-3"
                    />

                    {errors.shortDescription && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.shortDescription.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Description
                    </label>

                    <textarea
                        rows={8}
                        {...register("description")}
                        className="w-full rounded-lg border px-4 py-3"
                    />

                    {errors.description && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.description.message}
                        </p>
                    )}
                </div>

            </div>

        </div>
    );
}