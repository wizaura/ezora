"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    Edit,
    Loader2,
    Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import ConfirmDialog from "@/components/common/ConfirmDialog";

interface TourismCategory {
    id: string;
    name: string;
    slug: string;

    description?: string | null;

    featuredImage?: string | null;

    isFeatured: boolean;

    isActive: boolean;

    sortOrder: number;

    createdAt: string;

    updatedAt: string;
}

export default function CategoryTable() {

    const [categories, setCategories] =
        useState<TourismCategory[]>([]);

    const [loading, setLoading] =
        useState(true);

    /*
     * Category currently selected
     * for deletion.
     */
    const [deleteCategory, setDeleteCategory] =
        useState<TourismCategory | null>(null);

    /*
     * Delete loading state.
     */
    const [deleting, setDeleting] =
        useState(false);


    useEffect(() => {
        fetchCategories();
    }, []);


    async function fetchCategories() {

        try {

            const res = await fetch(
                "/api/admin/tourism/categories"
            );

            const result =
                await res.json();

            if (!res.ok) {
                throw new Error(
                    result.message ??
                    "Unable to load categories."
                );
            }

            console.log(
                result,
                "reds"
            );

            setCategories(
                Array.isArray(
                    result.data.items
                )
                    ? result.data.items
                    : []
            );

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    }


    /*
     * Open confirmation dialog.
     */
    function handleDeleteClick(
        category: TourismCategory
    ) {
        setDeleteCategory(category);
    }


    /*
     * Actually delete the category.
     */
    async function handleDelete() {

        if (!deleteCategory) {
            return;
        }

        try {

            setDeleting(true);

            const res = await fetch(
                `/api/admin/tourism/categories/${deleteCategory.id}`,
                {
                    method: "DELETE",
                }
            );

            const result =
                await res.json().catch(
                    () => null
                );

            if (!res.ok) {

                throw new Error(
                    result?.message ??
                    "Unable to delete category."
                );

            }

            /*
             * Remove category from
             * local state.
             */
            setCategories((prev) =>
                prev.filter(
                    (category) =>
                        category.id !==
                        deleteCategory.id
                )
            );

            /*
             * Close dialog.
             */
            setDeleteCategory(null);

        } catch (error) {

            console.error(
                "Failed to delete category:",
                error
            );

        } finally {

            setDeleting(false);

        }
    }


    if (loading) {

        return (
            <div className="flex justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        );

    }


    return (
        <>
            <div className="overflow-hidden rounded-xl border bg-white">

                <table className="min-w-full">

                    <thead className="bg-gray-50">

                        <tr className="text-left text-sm font-semibold">

                            <th className="px-6 py-4">
                                Image
                            </th>

                            <th className="px-6 py-4">
                                Name
                            </th>

                            <th className="px-6 py-4">
                                Slug
                            </th>

                            <th className="px-6 py-4">
                                Featured
                            </th>

                            <th className="px-6 py-4">
                                Active
                            </th>

                            <th className="px-6 py-4">
                                Sort
                            </th>

                            <th className="px-6 py-4 text-right">
                                Actions
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {categories.length === 0 ? (

                            <tr>

                                <td
                                    colSpan={7}
                                    className="py-16 text-center text-gray-500"
                                >
                                    No categories found.
                                </td>

                            </tr>

                        ) : (

                            categories.map(
                                (category) => (

                                    <tr
                                        key={
                                            category.id
                                        }
                                        className="border-t"
                                    >

                                        {/* Image */}

                                        <td className="px-6 py-4">

                                            {category.featuredImage ? (

                                                <div className="relative h-14 w-20 overflow-hidden rounded-lg">

                                                    <Image
                                                        src={
                                                            category.featuredImage
                                                        }
                                                        alt={
                                                            category.name
                                                        }
                                                        fill
                                                        className="object-cover"
                                                    />

                                                </div>

                                            ) : (
                                                "-"
                                            )}

                                        </td>


                                        {/* Name */}

                                        <td className="px-6 py-4">

                                            <div className="font-medium">
                                                {
                                                    category.name
                                                }
                                            </div>

                                            {category.description && (
                                                <p className="mt-1 line-clamp-2 text-xs text-gray-500">
                                                    {
                                                        category.description
                                                    }
                                                </p>
                                            )}

                                        </td>


                                        {/* Slug */}

                                        <td className="px-6 py-4 text-sm text-gray-600">

                                            {
                                                category.slug
                                            }

                                        </td>


                                        {/* Featured */}

                                        <td className="px-6 py-4">

                                            {category.isFeatured ? (

                                                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                                                    Yes
                                                </span>

                                            ) : (

                                                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                                                    No
                                                </span>

                                            )}

                                        </td>


                                        {/* Active */}

                                        <td className="px-6 py-4">

                                            {category.isActive ? (

                                                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                                                    Active
                                                </span>

                                            ) : (

                                                <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                                                    Inactive
                                                </span>

                                            )}

                                        </td>


                                        {/* Sort */}

                                        <td className="px-6 py-4">

                                            {
                                                category.sortOrder
                                            }

                                        </td>


                                        {/* Actions */}

                                        <td className="px-6 py-4">

                                            <div className="flex justify-end gap-2">

                                                {/* Edit */}

                                                <Link
                                                    href={`/admin/tourism/categories/${category.id}`}
                                                >
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                </Link>


                                                {/* Delete */}

                                                <Button
                                                    variant="destructive"
                                                    size="icon"
                                                    onClick={() =>
                                                        handleDeleteClick(
                                                            category
                                                        )
                                                    }
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>

                                            </div>

                                        </td>

                                    </tr>

                                )
                            )

                        )}

                    </tbody>

                </table>

            </div>


            {/* Delete Confirmation */}

            <ConfirmDialog
                open={
                    !!deleteCategory
                }

                onOpenChange={(
                    open
                ) => {

                    if (
                        !open &&
                        !deleting
                    ) {
                        setDeleteCategory(
                            null
                        );
                    }

                }}

                title="Delete tourism category?"

                description={
                    deleteCategory
                        ? `"${deleteCategory.name}" will be permanently deleted. This action cannot be undone.`
                        : "This tourism category will be permanently deleted."
                }

                confirmText="Delete Category"

                cancelText="Cancel"

                onConfirm={
                    handleDelete
                }

                loading={
                    deleting
                }
            />

        </>
    );
}