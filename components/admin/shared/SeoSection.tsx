"use client";

import { useFormContext } from "react-hook-form";

import { VehicleDto } from "@/validators/vehicle.validator";

const TITLE_LIMIT = 60;
const DESCRIPTION_LIMIT = 160;

export default function SeoSection() {
    const { register, watch } = useFormContext<VehicleDto>();

    const seoTitle = watch("seoTitle") ?? "";
    const seoDescription = watch("seoDescription") ?? "";
    const slug = watch("slug") ?? "";

    return (
        <div className="space-y-8">
            {/* Header */}

            <div>
                <h2 className="text-xl font-semibold">
                    SEO Settings
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Optimize this vehicle for search engines.
                </p>
            </div>

            {/* SEO Title */}

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label className="font-medium">
                        SEO Title
                    </label>

                    <span
                        className={`text-xs ${
                            seoTitle.length > TITLE_LIMIT
                                ? "text-red-500"
                                : "text-gray-500"
                        }`}
                    >
                        {seoTitle.length}/{TITLE_LIMIT}
                    </span>
                </div>

                <input
                    {...register("seoTitle")}
                    type="text"
                    placeholder="Luxury Tempo Traveller Rental in Kerala"
                    className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-primary"
                />
            </div>

            {/* SEO Description */}

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label className="font-medium">
                        SEO Description
                    </label>

                    <span
                        className={`text-xs ${
                            seoDescription.length >
                            DESCRIPTION_LIMIT
                                ? "text-red-500"
                                : "text-gray-500"
                        }`}
                    >
                        {seoDescription.length}/{DESCRIPTION_LIMIT}
                    </span>
                </div>

                <textarea
                    {...register("seoDescription")}
                    rows={4}
                    placeholder="Book premium luxury vehicles for Kerala tours with experienced drivers."
                    className="w-full resize-none rounded-lg border px-4 py-3 outline-none transition focus:border-primary"
                />
            </div>

            {/* Google Preview */}

            <div className="rounded-xl border bg-gray-50 p-6">
                <h3 className="mb-4 font-semibold">
                    Google Search Preview
                </h3>

                <div className="space-y-1">
                    <h4 className="text-lg font-medium text-blue-700">
                        {seoTitle || "Vehicle SEO Title"}
                    </h4>

                    <p className="text-sm text-green-700">
                        https://ezoratours.com/fleet/
                        {slug || "vehicle"}
                    </p>

                    <p className="text-sm text-gray-600">
                        {seoDescription ||
                            "Your SEO description will appear here."}
                    </p>
                </div>
            </div>
        </div>
    );
}