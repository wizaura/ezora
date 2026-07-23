"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import FleetCategoryForm from "./FleetCategoryForm";
import { FleetCategory } from "./types";

interface Props {
    id: string;
}

export default function EditFleetCategory({
    id,
}: Props) {
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [category, setCategory] =
        useState<FleetCategory | null>(null);

    useEffect(() => {
        fetchCategory();
    }, []);

    async function fetchCategory() {
        try {
            const res = await fetch(
                `/api/admin/fleet/categories/${id}`
            );

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message);
            }

            console.log(result, 'red')

            setCategory(result);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    async function handleSubmit(values: any) {
        try {
            setSaving(true);

            const res = await fetch(
                `/api/admin/fleet/categories/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify(values),
                }
            );

            if (!res.ok) {
                throw new Error(
                    "Failed to update category"
                );
            }

            router.push("/admin/fleet");

        } catch (err) {
            console.error(err);
        } finally {
            setSaving(false)
        }
    }

    if (loading) {
        return (
            <div className="flex h-96 items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        );
    }

    if (!category) {
        return (
            <div className="py-20 text-center">
                Category not found.
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <Link href="/admin/fleet">
                        <Button
                            variant="ghost"
                            className="mb-4"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                        </Button>
                    </Link>

                    <h1 className="text-3xl font-bold">
                        Edit Fleet Category
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Update this fleet category.
                    </p>
                </div>

                <Button
                    type="submit"
                    form="fleet-category-form"
                >
                    <Save className="mr-2 h-4 w-4" />
                    Update Category
                </Button>
            </div>

            <FleetCategoryForm
                initialData={{
                    name: category.name,
                    slug: category.slug,
                    eyebrow: category.eyebrow ?? "",
                    shortDescription: category.shortDescription ?? "",
                    description: category.description ?? "",

                    featuredImage: category.featuredImage ?? "",
                    featuredImagePublicId:
                        category.featuredImagePublicId ?? "",

                    seoTitle: category.seoTitle ?? "",
                    seoDescription: category.seoDescription ?? "",

                    isFeatured: category.isFeatured,
                    isActive: category.isActive,
                    sortOrder: category.sortOrder,
                }}
                onSubmit={handleSubmit}
                loading={saving}
            />
        </div>
    );
}