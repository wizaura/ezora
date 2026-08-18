"use client";

import Link from "next/link";
import {
    Pencil,
    Trash2,
    Star,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import ConfirmDialog from "@/components/common/ConfirmDialog";

interface Package {
    id: string;
    title: string;
    location: string;
    duration: string;
    startingPrice: string;
    featured: boolean;
    status: "DRAFT" | "PUBLISHED";

    images: {
        imageUrl: string;
    }[];
}

interface Props {
    packages: Package[];
    loading: boolean;

    /*
     * Parent can use this to remove the
     * deleted package from its local state.
     */
    onDelete?: (id: string) => void;
}

export default function PackageTable({
    packages,
    loading,
    onDelete,
}: Props) {

    const [deletePackage, setDeletePackage] =
        useState<Package | null>(null);

    const [deleting, setDeleting] =
        useState(false);


    function handleDeleteClick(
        pkg: Package
    ) {
        setDeletePackage(pkg);
    }


    async function handleDelete() {

        if (!deletePackage) {
            return;
        }

        try {

            setDeleting(true);

            const res = await fetch(
                `/api/admin/packages/${deletePackage.id}`,
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
                    "Unable to delete package."
                );
            }

            toast.success(
                "Package deleted successfully."
            );

            /*
             * Tell parent to remove it
             * from the table.
             */
            onDelete?.(
                deletePackage.id
            );

            setDeletePackage(null);

        } catch (error) {

            console.error(
                "Failed to delete package:",
                error
            );

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Unable to delete package."
            );

        } finally {

            setDeleting(false);

        }
    }


    return (
        <>
            <div className="overflow-hidden rounded-xl border bg-white">

                <table className="w-full">

                    <thead className="bg-gray-50">

                        <tr className="text-left">

                            <th className="px-6 py-4">
                                Package
                            </th>

                            <th className="px-6 py-4">
                                Location
                            </th>

                            <th className="px-6 py-4">
                                Duration
                            </th>

                            <th className="px-6 py-4">
                                Price
                            </th>

                            <th className="px-6 py-4">
                                Featured
                            </th>

                            <th className="px-6 py-4">
                                Status
                            </th>

                            <th className="px-6 py-4 text-right">
                                Actions
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {loading ? (

                            <tr>
                                <td
                                    colSpan={7}
                                    className="py-10 text-center"
                                >
                                    Loading packages...
                                </td>
                            </tr>

                        ) : packages.length === 0 ? (

                            <tr>
                                <td
                                    colSpan={7}
                                    className="py-10 text-center text-gray-500"
                                >
                                    No packages found.
                                </td>
                            </tr>

                        ) : (

                            packages.map(
                                (pkg) => (

                                    <tr
                                        key={pkg.id}
                                        className="border-t"
                                    >

                                        {/* Package */}

                                        <td className="px-6 py-4">

                                            <div className="flex items-center gap-4">

                                                <img
                                                    src={
                                                        pkg.images?.[0]?.imageUrl ??
                                                        "/images/placeholder.jpg"
                                                    }
                                                    alt={
                                                        pkg.title
                                                    }
                                                    className="h-16 w-20 rounded-lg object-cover"
                                                />

                                                <div>

                                                    <p className="font-semibold">
                                                        {
                                                            pkg.title
                                                        }
                                                    </p>

                                                    <p className="text-sm text-gray-500">
                                                        Starting from ₹
                                                        {Number(
                                                            pkg.startingPrice
                                                        ).toLocaleString(
                                                            "en-IN"
                                                        )}
                                                    </p>

                                                </div>

                                            </div>

                                        </td>


                                        {/* Location */}

                                        <td className="px-6 py-4">
                                            {
                                                pkg.location
                                            }
                                        </td>


                                        {/* Duration */}

                                        <td className="px-6 py-4">
                                            {
                                                pkg.duration
                                            }
                                        </td>


                                        {/* Price */}

                                        <td className="px-6 py-4">
                                            ₹
                                            {Number(
                                                pkg.startingPrice
                                            ).toLocaleString(
                                                "en-IN"
                                            )}
                                        </td>


                                        {/* Featured */}

                                        <td className="px-6 py-4">

                                            {pkg.featured ? (

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
                                                    pkg.status ===
                                                    "PUBLISHED"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-yellow-100 text-yellow-700"
                                                }`}
                                            >
                                                {
                                                    pkg.status
                                                }
                                            </span>

                                        </td>


                                        {/* Actions */}

                                        <td className="px-6 py-4">

                                            <div className="flex justify-end gap-2">

                                                {/* Edit */}

                                                <Link
                                                    href={`/admin/packages/${pkg.id}`}
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
                                                            pkg
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


            {/* Delete Confirmation */}

            <ConfirmDialog
                open={
                    !!deletePackage
                }

                onOpenChange={(
                    open
                ) => {

                    if (
                        !open &&
                        !deleting
                    ) {
                        setDeletePackage(
                            null
                        );
                    }

                }}

                title="Delete package?"

                description={
                    deletePackage
                        ? `"${deletePackage.title}" will be permanently deleted. This action cannot be undone.`
                        : "This package will be permanently deleted."
                }

                confirmText="Delete Package"

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