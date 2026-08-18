"use client";

import { useEffect } from "react";
import Link from "next/link";

import {
    FormProvider,
    useForm,
} from "react-hook-form";

import {
    zodResolver,
} from "@hookform/resolvers/zod";

import GeneralSection from "./GeneralSection";
import GalleryEditor from "../shared/GalleryEditor";
import SeoSection from "../shared/SeoSection";
import ImageUploader from "../shared/ImageUploader";

import {
    TourismDto,
    TourismSchema,
} from "@/validators/tourism.validator";

import { Button } from "@/components/ui/button";

interface TourismFormProps {
    defaultValues?: TourismDto;

    onSubmit: (
        values: TourismDto
    ) => Promise<void>;

    loading?: boolean;
}

const emptyValues: TourismDto = {
    title: "",
    slug: "",

    categoryId: "",

    district: undefined,

    excerpt: "",

    content: "",

    featuredImage: "",
    featuredImagePublicId: "",

    gallery: [],

    latitude: null,
    longitude: null,

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
};

export default function TourismForm({
    defaultValues,
    onSubmit,
    loading = false,
}: TourismFormProps) {

    const methods =
        useForm<TourismDto>({
            resolver:
                zodResolver(
                    TourismSchema
                ),

            defaultValues:
                defaultValues ??
                emptyValues,
        });


    useEffect(() => {

        if (!defaultValues) {
            return;
        }

        methods.reset(
            defaultValues
        );

    }, [
        defaultValues,
        methods,
    ]);


    const handleSubmit =
        methods.handleSubmit(
            async (values) => {

                await onSubmit(
                    values
                );

            }
        );


    return (
        <FormProvider {...methods}>

            <form
                id="tourism-form"
                onSubmit={handleSubmit}
                className="space-y-8"
            >

                {/* General Information */}

                <section className="rounded-xl border bg-white p-6 shadow-sm">

                    <GeneralSection />

                </section>


                {/* Featured Image */}

                <section className="rounded-xl border bg-white p-6 shadow-sm">

                    <ImageUploader />

                </section>


                {/* Gallery */}

                <section className="rounded-xl border bg-white p-6 shadow-sm">

                    <GalleryEditor />

                </section>


                {/* SEO */}

                <section className="rounded-xl border bg-white p-6 shadow-sm">

                    <SeoSection />

                </section>


                {/* Bottom Actions */}

                <div className="sticky bottom-0 flex items-center justify-end gap-3 rounded-xl border bg-white p-5 shadow-lg">

                    <Link href="/admin/tourism">

                        <Button
                            type="button"
                            variant="outline"
                            disabled={loading}
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
                            : "Save Changes"}
                    </Button>

                </div>

            </form>

        </FormProvider>
    );
}