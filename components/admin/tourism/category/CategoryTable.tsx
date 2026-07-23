"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Edit, Loader2, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

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
    const [categories, setCategories] = useState<
        TourismCategory[]
    >([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {
        fetchCategories();
    }, []);

    async function fetchCategories() {
        try {
            const res = await fetch(
                "/api/admin/tourism/categories"
            );

            const result = await res.json();

            console.log(result,'reds')

            setCategories(
                Array.isArray(result.data.items)
                    ? result.data.items
                    : []
            );
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(id: string) {
        if (
            !confirm(
                "Are you sure you want to delete this category?"
            )
        ) {
            return;
        }

        try {
            const res = await fetch(
                `/api/admin/tourism/categories/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!res.ok) {
                throw new Error();
            }

            setCategories((prev) =>
                prev.filter(
                    (category) =>
                        category.id !== id
                )
            );
        } catch (error) {
            console.error(error);
            alert(
                "Unable to delete category."
            );
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
                    {categories.length ===
                    0 ? (
                        <tr>
                            <td
                                colSpan={7}
                                className="py-16 text-center text-gray-500"
                            >
                                No categories
                                found.
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

                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {
                                            category.slug
                                        }
                                    </td>

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

                                    <td className="px-6 py-4">
                                        {
                                            category.sortOrder
                                        }
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex justify-end gap-2">
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

                                            <Button
                                                variant="destructive"
                                                size="icon"
                                                onClick={() =>
                                                    handleDelete(
                                                        category.id
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
    );
}