"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Edit,
    Loader2,
    Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ConfirmDialog from "@/components/common/ConfirmDialog";

interface Tourism {
    id: string;
    title: string;
    slug: string;

    district?: string | null;

    featuredImage?: string | null;

    isFeatured: boolean;

    isPublished: boolean;

    sortOrder: number;

    updatedAt: string;

    category: {
        id: string;
        name: string;
    };
}

export default function TourismTable() {

    const [loading, setLoading] =
        useState(true);

    const [items, setItems] =
        useState<Tourism[]>([]);

    /*
     * Delete dialog
     */
    const [deleteItem, setDeleteItem] =
        useState<Tourism | null>(null);

    const [deleting, setDeleting] =
        useState(false);


    useEffect(() => {
        fetchTourism();
    }, []);


    async function fetchTourism() {

        try {

            const res = await fetch(
                "/api/admin/tourism"
            );

            const result =
                await res.json();

            if (!res.ok) {
                throw new Error(
                    result.message
                );
            }

            console.log(result);

            setItems(
                result.data.items ?? []
            );

        } catch (err) {

            console.error(err);

        } finally {

            setLoading(false);

        }
    }


    /*
     * Open delete confirmation
     */
    function handleDeleteClick(
        item: Tourism
    ) {
        setDeleteItem(item);
    }


    /*
     * Actually delete the item
     */
    async function handleDelete() {

        if (!deleteItem) {
            return;
        }

        try {

            setDeleting(true);

            const res = await fetch(
                `/api/admin/tourism/${deleteItem.id}`,
                {
                    method: "DELETE",
                }
            );

            if (!res.ok) {

                const result =
                    await res.json()
                        .catch(() => null);

                throw new Error(
                    result?.message ??
                    "Unable to delete tourism guide."
                );
            }

            /*
             * Remove from local state
             */
            setItems((prev) =>
                prev.filter(
                    (item) =>
                        item.id !==
                        deleteItem.id
                )
            );

            /*
             * Close dialog
             */
            setDeleteItem(null);

        } catch (err) {

            console.error(
                "Failed to delete tourism guide:",
                err
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
                                Title
                            </th>

                            <th className="px-6 py-4">
                                Category
                            </th>

                            <th className="px-6 py-4">
                                District
                            </th>

                            <th className="px-6 py-4">
                                Featured
                            </th>

                            <th className="px-6 py-4">
                                Published
                            </th>

                            <th className="px-6 py-4">
                                Sort
                            </th>

                            <th className="px-6 py-4">
                                Actions
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {items.length === 0 ? (

                            <tr>

                                <td
                                    colSpan={8}
                                    className="py-16 text-center text-gray-500"
                                >
                                    No tourism guides found.
                                </td>

                            </tr>

                        ) : (

                            items.map((item) => (

                                <tr
                                    key={item.id}
                                    className="border-t"
                                >

                                    <td className="px-6 py-4">

                                        {item.featuredImage ? (

                                            <div className="relative h-16 w-24 overflow-hidden rounded-lg">

                                                <Image
                                                    src={
                                                        item.featuredImage
                                                    }
                                                    alt={
                                                        item.title
                                                    }
                                                    fill
                                                    className="object-cover"
                                                />

                                            </div>

                                        ) : (
                                            "-"
                                        )}

                                    </td>


                                    <td className="px-6 py-4">

                                        <div className="font-medium">
                                            {item.title}
                                        </div>

                                        <div className="text-xs text-gray-500">
                                            {item.slug}
                                        </div>

                                    </td>


                                    <td className="px-6 py-4">
                                        {
                                            item
                                                .category
                                                .name
                                        }
                                    </td>


                                    <td className="px-6 py-4">
                                        {item.district ??
                                            "-"}
                                    </td>


                                    <td className="px-6 py-4">

                                        {item.isFeatured
                                            ? "✅"
                                            : "—"}

                                    </td>


                                    <td className="px-6 py-4">

                                        {item.isPublished
                                            ? "Published"
                                            : "Draft"}

                                    </td>


                                    <td className="px-6 py-4">
                                        {
                                            item.sortOrder
                                        }
                                    </td>


                                    <td className="px-6 py-4">

                                        <div className="flex gap-2">

                                            {/* Edit */}

                                            <Link
                                                href={`/admin/tourism/${item.id}`}
                                            >
                                                <Button
                                                    size="icon"
                                                    variant="outline"
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                            </Link>


                                            {/* Delete */}

                                            <Button
                                                size="icon"
                                                variant="destructive"
                                                onClick={() =>
                                                    handleDeleteClick(
                                                        item
                                                    )
                                                }
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>


            {/* Delete Confirmation */}

            <ConfirmDialog
                open={!!deleteItem}
                onOpenChange={(open) => {

                    if (!open && !deleting) {
                        setDeleteItem(null);
                    }

                }}
                title="Delete tourism guide?"
                description={
                    deleteItem
                        ? `"${deleteItem.title}" will be permanently deleted. This action cannot be undone.`
                        : "This tourism guide will be permanently deleted."
                }
                confirmText="Delete Guide"
                cancelText="Cancel"
                onConfirm={handleDelete}
                loading={deleting}
            />

        </>
    );
}