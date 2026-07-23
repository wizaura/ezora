"use client";

import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import GeneralSection from "./GeneralSection";
import GalleryEditor from "../shared/GalleryEditor";
import SeoSection from "../shared/SeoSection";

import {
    TourismDto,
    TourismSchema,
} from "@/validators/tourism.validator";
import ImageUploader from "../shared/ImageUploader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TourismFormProps {
    initialData?: TourismDto;
    onSubmit: (
        values: TourismDto
    ) => Promise<void>;
    loading?: boolean;
}

export default function TourismForm({
    initialData,
    onSubmit,
    loading = false,
}: TourismFormProps) {
    const methods = useForm<TourismDto>({
        resolver: zodResolver(
            TourismSchema
        ),
        defaultValues: {
            title: "",
            slug: "",

            categoryId: "",

            district: undefined,

            excerpt: "",

            content: "",

            featuredImage: "",

            featuredImagePublicId: "",

            gallery: [],

            latitude: undefined,

            longitude: undefined,

            address: "",

            bestTimeToVisit: "",

            openingHours: "",

            entryFee: "",

            duration: "",

            mapUrl: "",

            tags: [],

            isFeatured: false,

            isPublished: true,

            sortOrder: 0,

            seoTitle: "",

            seoDescription: "",
        }
    });

    useEffect(() => {
        if (initialData) {
            methods.reset(initialData);
        }
    }, [initialData, methods]);

    return (
        <FormProvider {...methods}>
            <form
                id="tourism-form"
                onSubmit={methods.handleSubmit(
                    onSubmit
                )}
                className="space-y-8"
            >
                <section className="rounded-xl border bg-white p-6 shadow-sm">
                    <GeneralSection />
                </section>

                <section className="rounded-xl border bg-white p-6 shadow-sm">
                    <ImageUploader />
                </section>

                <section className="rounded-xl border bg-white p-6 shadow-sm">
                    <GalleryEditor />
                </section>

                <section className="rounded-xl border bg-white p-6 shadow-sm">
                    <SeoSection />
                </section>

                <div className="sticky bottom-0 flex items-center justify-end gap-3 rounded-xl border bg-white p-5 shadow-lg">
                    <Link href="/admin/tourism">
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

            </form>
        </FormProvider>
    );
}