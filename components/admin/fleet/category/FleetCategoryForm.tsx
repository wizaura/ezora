"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import CategoryGeneralInformation from "./CategoryGeneralInformation";
import ImageUploader from "@/components/admin/shared/ImageUploader";
import SeoSection from "@/components/admin/shared/SeoSection";

import {
    FleetCategorySchema,
    FleetCategoryDto,
    FleetCategoryFormValues,
} from "@/validators/fleet-category.validator";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FleetCategoryFormProps {
    initialData?: FleetCategoryDto;
    onSubmit: (values: FleetCategoryDto) => Promise<void>;
    loading: boolean;
}

export default function FleetCategoryForm({
    initialData,
    onSubmit,
    loading = false,
}: FleetCategoryFormProps) {
    const methods = useForm<FleetCategoryFormValues>({
        resolver: zodResolver(FleetCategorySchema),
        defaultValues: {
            name: "",
            slug: "",
            eyebrow: "",
            shortDescription: "",
            description: "",
            featuredImage: "",
            featuredImagePublicId: "",
            isFeatured: false,
            isActive: true,
            sortOrder: 0,
            seoTitle: "",
            seoDescription: "",
        },
    });

    useEffect(() => {
        if (initialData) {
            methods.reset(initialData);
        }
    }, [initialData, methods]);

    const handleSubmit = methods.handleSubmit(async (values) => {
        await onSubmit(values);
    });

    return (
        <FormProvider {...methods}>
            <form
                id="fleet-category-form"
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 xl:grid-cols-3"
            >
                {/* Left */}

                <div className="space-y-6 xl:col-span-2">

                    <section className="rounded-xl border bg-white p-6 shadow-sm">
                        <CategoryGeneralInformation />
                    </section>

                    <section className="rounded-xl border bg-white p-6 shadow-sm">
                        <ImageUploader />
                    </section>
                    <section className="rounded-xl border bg-white p-6 shadow-sm">
                        <SeoSection />
                    </section>

                    <div className="sticky bottom-0 flex items-center justify-end gap-3 rounded-xl border bg-white p-5 shadow-lg">
                        <Link href="/admin/fleet">
                            <Button
                                type="button"
                                variant="outline"
                            >
                                Cancel
                            </Button>
                        </Link>

                        <Button
                            type="submit"
                            disabled={loading}
                        >
                            {loading
                                ? "Saving..."
                                : "Save Vehicle"}
                        </Button>
                    </div>

                </div>

                {/* Right */}

                <div className="space-y-6">

                    <div className="rounded-xl border bg-white p-6">

                        <h3 className="mb-5 text-lg font-semibold">
                            Publish
                        </h3>

                        <div className="space-y-5">

                            <label className="flex items-center justify-between">

                                <span>
                                    Active
                                </span>

                                <input
                                    type="checkbox"
                                    {...methods.register("isActive")}
                                />

                            </label>

                            <label className="flex items-center justify-between">

                                <span>
                                    Featured
                                </span>

                                <input
                                    type="checkbox"
                                    {...methods.register("isFeatured")}
                                />

                            </label>

                            <div>

                                <label className="mb-2 block text-sm font-medium">
                                    Sort Order
                                </label>

                                <input
                                    type="number"
                                    {...methods.register("sortOrder", {
                                        valueAsNumber: true,
                                    })}
                                    className="w-full rounded-lg border px-3 py-2"
                                />

                            </div>

                        </div>

                    </div>

                </div>
            </form>
        </FormProvider>
    );
}