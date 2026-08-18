"use client";

import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import ConfirmDialog from "@/components/common/ConfirmDialog";

import { FleetCategoryTableItem } from "./types";

interface Props {
    data: FleetCategoryTableItem[];

    onDelete?: (id: string) => void;
}

export default function FleetCategoryTable({
    data,
    onDelete,
}: Props) {

    const [deleteCategory, setDeleteCategory] =
        useState<FleetCategoryTableItem | null>(
            null
        );

    const [deleting, setDeleting] =
        useState(false);


    function handleDeleteClick(
        category: FleetCategoryTableItem
    ) {
        setDeleteCategory(category);
    }


    async function handleDelete() {

        if (!deleteCategory) {
            return;
        }

        try {

            setDeleting(true);

            const res = await fetch(
                `/api/admin/fleet/categories/${deleteCategory.id}`,
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
                    "Unable to delete fleet category."
                );
            }

            toast.success(
                "Fleet category deleted successfully."
            );

            /*
             * Tell parent to remove the
             * category from its state.
             */
            onDelete?.(
                deleteCategory.id
            );

            setDeleteCategory(null);

        } catch (error) {

            console.error(
                "Failed to delete fleet category:",
                error
            );

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Unable to delete fleet category."
            );

        } finally {

            setDeleting(false);

        }
    }


    return (
        <>
            <div className="overflow-hidden rounded-xl border bg-white">

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-gray-50">

                            <tr className="text-left">

                                <th className="px-6 py-4">
                                    Category
                                </th>

                                <th className="px-6 py-4">
                                    Vehicles
                                </th>

                                <th className="px-6 py-4">
                                    Featured
                                </th>

                                <th className="px-6 py-4">
                                    Status
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

                            {data.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan={6}
                                        className="py-12 text-center text-gray-500"
                                    >
                                        No fleet categories
                                        found.
                                    </td>

                                </tr>

                            ) : (

                                data.map(
                                    (category) => (

                                        <tr
                                            key={
                                                category.id
                                            }
                                            className="border-t"
                                        >

                                            {/* Category */}

                                            <td className="px-6 py-4">

                                                <div className="flex items-center gap-4">

                                                    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border bg-gray-50">

                                                        {category.featuredImage ? (

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

                                                        ) : (

                                                            <div className="flex h-full items-center justify-center text-xs text-gray-400">
                                                                No image
                                                            </div>

                                                        )}

                                                    </div>


                                                    <div>

                                                        <p className="font-semibold text-dark-cerulean">
                                                            {
                                                                category.name
                                                            }
                                                        </p>

                                                        <p className="text-sm text-gray-500">
                                                            {
                                                                category.slug
                                                            }
                                                        </p>

                                                    </div>

                                                </div>

                                            </td>


                                            {/* Vehicles */}

                                            <td className="px-6 py-4">

                                                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium">
                                                    {
                                                        category
                                                            ._count
                                                            .vehicles
                                                    }
                                                </span>

                                            </td>


                                            {/* Featured */}

                                            <td className="px-6 py-4">

                                                {category.isFeatured ? (

                                                    <Star
                                                        size={18}
                                                        className="fill-yellow-400 text-yellow-400"
                                                    />

                                                ) : (

                                                    "-"

                                                )}

                                            </td>


                                            {/* Status */}

                                            <td className="px-6 py-4">

                                                <span
                                                    className={`rounded-full px-3 py-1 text-sm ${
                                                        category.isActive
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-gray-100 text-gray-600"
                                                    }`}
                                                >
                                                    {
                                                        category.isActive
                                                            ? "Active"
                                                            : "Inactive"
                                                    }
                                                </span>

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
                                                        href={`/admin/fleet/categories/${category.id}`}
                                                        className="rounded-lg border p-2 transition hover:bg-gray-100"
                                                    >
                                                        <Pencil
                                                            size={18}
                                                        />
                                                    </Link>


                                                    {/* Delete */}

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleDeleteClick(
                                                                category
                                                            )
                                                        }
                                                        className="rounded-lg border p-2 text-red-500 transition hover:bg-red-50"
                                                    >
                                                        <Trash2
                                                            size={18}
                                                        />
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    )
                                )

                            )}

                        </tbody>

                    </table>

                </div>

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

                title="Delete fleet category?"

                description={
                    deleteCategory
                        ? `"${deleteCategory.name}" will be permanently deleted. This action cannot be undone.`
                        : "This fleet category will be permanently deleted."
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