"use client";

import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import GeneralSection from "./GeneralSection";

import {
    TourismCategoryDto,
    TourismCategorySchema,
} from "@/validators/tourism-category.validator";
import ImageUploader from "../../shared/ImageUploader";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SeoSection from "../../shared/SeoSection";

interface CategoryFormProps {
    initialData?: TourismCategoryDto;
    onSubmit: (
        values: TourismCategoryDto
    ) => Promise<void>;
    loading?: boolean;
}

export default function CategoryForm({
    initialData,
    onSubmit,
    loading,
}: CategoryFormProps) {
    const methods =
        useForm<TourismCategoryDto>({
            resolver: zodResolver(
                TourismCategorySchema
            ),
            defaultValues: {
                name: "",

                slug: "",

                description: "",

                featuredImage: "",

                featuredImagePublicId: "",

                seoTitle: "",

                seoDescription: "",

                isFeatured: false,

                isActive: true,

                sortOrder: 0,
            },
        });

    useEffect(() => {
        if (initialData) {
            methods.reset(initialData);
        }
    }, [initialData, methods]);

    return (
        <FormProvider {...methods}>
            <form
                id="tourism-category-form"
                onSubmit={methods.handleSubmit(
                    onSubmit,
                    (errors) => {
                        console.log(errors);
                    }
                )}
                className="space-y-8"
            >
                <GeneralSection />

                <ImageUploader />

                <section className="rounded-xl border bg-white p-6 shadow-sm">
                    <SeoSection />
                </section>

                <div className="sticky bottom-0 flex items-center justify-end gap-3 rounded-xl border bg-white p-5 shadow-lg">
                    <Link href="/admin/tourism/categories">
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
                            : "Save Category"}
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
}