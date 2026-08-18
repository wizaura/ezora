"use client";

import {
    useEffect,
    useState,
} from "react";

import {
    useRouter,
} from "next/navigation";

import {
    Loader2,
} from "lucide-react";

import {
    toast,
} from "sonner";

import CategoryForm from "./CategoryForm";

import {
    TourismCategoryDto,
} from "@/validators/tourism-category.validator";


interface Props {
    id: string;
}


export default function EditMain({
    id,
}: Props) {

    const router = useRouter();

    const [saving, setSaving] =
        useState(false);

    const [loading, setLoading] =
        useState(true);

    const [category, setCategory] =
        useState<TourismCategoryDto | null>(
            null
        );


    useEffect(() => {

        async function load() {

            try {

                setLoading(true);

                const res =
                    await fetch(
                        `/api/admin/tourism/categories/${id}`,
                        {
                            cache: "no-store",
                        }
                    );

                const json =
                    await res.json();

                if (!res.ok) {
                    throw new Error(
                        json.message ??
                        "Failed to load category."
                    );
                }

                const data =
                    json.data;

                if (!data) {
                    throw new Error(
                        "Category data not found."
                    );
                }

                /*
                 * Normalize database data
                 * before passing it to React Hook Form.
                 */
                setCategory({
                    name:
                        data.name ?? "",

                    slug:
                        data.slug ?? "",

                    description:
                        data.description ?? "",

                    featuredImage:
                        data.featuredImage ?? "",

                    featuredImagePublicId:
                        data.featuredImagePublicId ??
                        "",

                    seoTitle:
                        data.seoTitle ?? "",

                    seoDescription:
                        data.seoDescription ?? "",

                    isFeatured:
                        data.isFeatured ??
                        false,

                    isActive:
                        data.isActive ??
                        true,

                    sortOrder:
                        data.sortOrder ??
                        0,
                });

            } catch (error) {

                console.error(
                    "Failed to load category:",
                    error
                );

                toast.error(
                    error instanceof Error
                        ? error.message
                        : "Failed to load category."
                );

            } finally {

                setLoading(false);

            }
        }

        load();

    }, [id]);


    async function handleSubmit(
        values: TourismCategoryDto
    ) {

        try {

            setSaving(true);

            const res =
                await fetch(
                    `/api/admin/tourism/categories/${id}`,
                    {
                        method: "PATCH",

                        headers: {
                            "Content-Type":
                                "application/json",
                        },

                        body:
                            JSON.stringify(values),
                    }
                );

            const json =
                await res.json();

            if (!res.ok) {

                throw new Error(
                    json.message ??
                    "Failed to update category."
                );

            }

            toast.success(
                "Tourism category updated successfully."
            );

            router.push(
                "/admin/tourism/categories"
            );

            router.refresh();

        } catch (error) {

            console.error(
                "Failed to update category:",
                error
            );

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Something went wrong."
            );

        } finally {

            setSaving(false);

        }
    }


    if (loading) {

        return (
            <div className="flex h-96 items-center justify-center">
                <Loader2
                    className="h-8 w-8 animate-spin"
                />
            </div>
        );

    }


    if (!category) {

        return (
            <div className="rounded-xl border bg-white p-8 text-center">
                Category not found.
            </div>
        );

    }


    return (
        <div className="space-y-6">

            <div>

                <h1 className="text-3xl font-bold">
                    Edit Tourism Category
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                    Update the tourism category
                    information.
                </p>

            </div>


            <CategoryForm
                initialData={category}
                onSubmit={handleSubmit}
                loading={saving}
            />

        </div>
    );
}