"use client";

import { FormEvent, useEffect, useState } from "react";

import GeneralInformation from "./GeneralInformation";
import ImageUploader from "../shared/ImageUploader";
import FeatureEditor from "./FeatureEditor";
import SpecificationEditor from "./SpecificationEditor";
import GalleryEditor from "../shared/GalleryEditor";
import SeoSection from "../shared/SeoSection";

import { Button } from "@/components/ui/button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VehicleDto, VehicleSchema } from "@/validators/vehicle.validator";
import Link from "next/link";

interface FleetFormProps {
    defaultValues?: Partial<VehicleDto>;
    onSubmit?: (values: VehicleDto) => Promise<void>;
    loading?: boolean;
}

export default function FleetForm({
    defaultValues,
    onSubmit,
    loading = false,
}: FleetFormProps) {

    const methods = useForm<VehicleDto>({
        resolver: zodResolver(VehicleSchema),

        defaultValues: defaultValues ?? {
            categoryId: "",

            name: "",

            slug: "",

            tagline: "",

            shortDescription: "",

            description: "",

            featuredImage: "",
            featuredImagePublicId: "",

            heroImage: "",
            heroImagePublicId: "",

            seatingCapacity: "",

            luggageCapacity: "",

            airConditioning: "",

            transmission: "",

            fuelType: "",

            chauffeurDriven: true,

            whatsappMessage: "",

            isFeatured: false,

            isActive: true,

            sortOrder: 0,

            seoTitle: "",

            seoDescription: "",

            features: [],

            specifications: [],

            gallery: [],
        },
    });

    useEffect(() => {
        if (defaultValues) {
            methods.reset(defaultValues);
        }
    }, [defaultValues, methods]);

    const handleSubmit = methods.handleSubmit(async (values) => {
        await onSubmit?.(values);
    });

    return (
        <FormProvider {...methods}>

            <form
                onSubmit={handleSubmit}
                className="space-y-8"
            >
                {/* General Information */}

                <section className="rounded-xl border bg-white p-6 shadow-sm">
                    <GeneralInformation />
                </section>

                {/* Images */}

                <section className="rounded-xl border bg-white p-6 shadow-sm">
                    <ImageUploader />
                </section>

                {/* Features */}

                <section className="rounded-xl border bg-white p-6 shadow-sm">
                    <FeatureEditor />
                </section>

                {/* Specifications */}

                <section className="rounded-xl border bg-white p-6 shadow-sm">
                    <SpecificationEditor />
                </section>

                {/* Gallery */}

                <section className="rounded-xl border bg-white p-6 shadow-sm">
                    <GalleryEditor />
                </section>

                {/* SEO */}

                <section className="rounded-xl border bg-white p-6 shadow-sm">
                    <SeoSection />
                </section>

                {/* Footer */}

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
            </form>
        </FormProvider>
    );
}