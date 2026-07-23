"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Edit, Loader2, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

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

    const [items, setItems] = useState<
        Tourism[]
    >([]);

    useEffect(() => {
        fetchTourism();
    }, []);

    async function fetchTourism() {
        try {
            const res = await fetch(
                "/api/admin/tourism"
            );

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message);
            }

            console.log(result);

            setItems(result.data.items ?? []);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(
        id: string
    ) {
        if (
            !confirm(
                "Delete this tourism guide?"
            )
        ) {
            return;
        }

        const res = await fetch(
            `/api/admin/tourism/${id}`,
            {
                method: "DELETE",
            }
        );

        if (!res.ok) {
            alert("Unable to delete.");
            return;
        }

        setItems((prev) =>
            prev.filter(
                (item) => item.id !== id
            )
        );
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
                                        {
                                            item.title
                                        }
                                    </div>

                                    <div className="text-xs text-gray-500">
                                        {
                                            item.slug
                                        }
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

                                        <Button
                                            size="icon"
                                            variant="destructive"
                                            onClick={() =>
                                                handleDelete(
                                                    item.id
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
    );
}