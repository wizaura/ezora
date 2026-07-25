"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import BasicInformation from "./sections/BasicInformation";
import Description from "./sections/Description";
import Itinerary from "./sections/Itinerary";
import Highlights from "./sections/Highlights";
import Inclusions from "./sections/Inclusions";
import Exclusions from "./sections/Exclusions";
import FAQ from "./sections/FAQ";
import GalleryEditor from "./sections/Gallery";

interface PackageFormProps {
    mode: "create" | "edit";
    packageId?: string;
}

export default function PackageForm({
    mode,
    packageId,
}: PackageFormProps) {
    const router = useRouter();

    const [loading, setLoading] = useState(mode === "edit");
    const [saving, setSaving] = useState(false);

    const [form, setForm] = useState<any>({
        title: "",
        slug: "",
        shortDescription: "",
        description: "",
        location: "",
        duration: "",
        days: 1,
        nights: 0,
        startingPrice: "",

        featured: false,
        status: "DRAFT",

        images: [],
        itinerary: [],
        highlights: [],
        inclusions: [],
        exclusions: [],
        faqs: [],
    });

    useEffect(() => {
        if (mode === "edit" && packageId) {
            fetchPackage();
        }
    }, [mode, packageId]);

    async function fetchPackage() {
        try {
            const res = await fetch(
                `/api/admin/packages/${packageId}`
            );

            const json = await res.json();

            const pkg = json.data;

            setForm({
                title: pkg.title,
                slug: pkg.slug,
                shortDescription: pkg.shortDescription,
                description: pkg.description,
                location: pkg.location,
                duration: pkg.duration,
                days: pkg.days,
                nights: pkg.nights,

                startingPrice: Number(pkg.startingPrice),

                featured: pkg.featured,
                status: pkg.status,

                images:
                    pkg.images?.map((image: any) => ({
                        imageUrl: image.imageUrl,
                        publicId: image.publicId,
                        alt: image.alt ?? "",
                        sortOrder: image.order,
                    })) ?? [],

                itinerary:
                    pkg.details?.itinerary ?? [],

                highlights:
                    pkg.details?.highlights ?? [],

                inclusions:
                    pkg.details?.inclusions ?? [],

                exclusions:
                    pkg.details?.exclusions ?? [],

                faqs:
                    pkg.details?.faqs ?? [],
            });
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    async function handleSubmit() {
        try {
            setSaving(true);

            const url =
                mode === "create"
                    ? "/api/admin/packages"
                    : `/api/admin/packages/${packageId}`;

            const method =
                mode === "create"
                    ? "POST"
                    : "PATCH";

            const res = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const json = await res.json();

            if (!res.ok) {
                throw new Error(json.message);
            }

            router.push("/admin/packages");
            router.refresh();
        } catch (err: any) {
            alert(err.message);
        } finally {
            setSaving(false);
        }
    }

    if (loading) {
        return (
            <div className="rounded-xl border bg-white p-10 text-center">
                Loading package...
            </div>
        );
    }

    return (
        <div className="space-y-8">

            <BasicInformation
                form={form}
                setForm={setForm}
            />

            <Description
                form={form}
                setForm={setForm}
            />

            <GalleryEditor
                form={form}
                setForm={setForm}
            />

            <Itinerary
                form={form}
                setForm={setForm}
            />

            <Highlights
                form={form}
                setForm={setForm}
            />

            <Inclusions
                form={form}
                setForm={setForm}
            />

            <Exclusions
                form={form}
                setForm={setForm}
            />

            <FAQ
                form={form}
                setForm={setForm}
            />

            <div className="sticky bottom-0 flex justify-end gap-3 border-t bg-white p-5">

                <button
                    type="button"
                    onClick={() => router.back()}
                    className="rounded-lg border px-5 py-2"
                >
                    Cancel
                </button>

                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={saving}
                    className="rounded-lg bg-gray-900 px-5 py-2 text-white disabled:opacity-50"
                >
                    {saving
                        ? "Saving..."
                        : mode === "create"
                            ? "Create Package"
                            : "Save Changes"}
                </button>

            </div>

        </div>
    );
}