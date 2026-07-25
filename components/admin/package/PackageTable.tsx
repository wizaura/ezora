"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2, Star } from "lucide-react";

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
}

export default function PackageTable({
    packages,
    loading,
}: Props) {
    return (
        <div className="overflow-hidden rounded-xl border bg-white">

            <table className="w-full">

                <thead className="bg-gray-50">

                    <tr className="text-left">

                        <th className="px-6 py-4">Package</th>
                        <th className="px-6 py-4">Location</th>
                        <th className="px-6 py-4">Duration</th>
                        <th className="px-6 py-4">Price</th>
                        <th className="px-6 py-4">Featured</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Actions</th>

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

                            packages.map((pkg) => (
                                <tr
                                    key={pkg.id}
                                    className="border-t"
                                >
                                    <td className="px-6 py-4">

                                        <div className="flex items-center gap-4">

                                            <img
                                                src={
                                                    pkg.images?.[0]?.imageUrl ??
                                                    "/images/placeholder.jpg"
                                                }
                                                alt={pkg.title}
                                                className="h-16 w-20 rounded-lg object-cover"
                                            />

                                            <div>

                                                <p className="font-semibold">
                                                    {pkg.title}
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    Starting from ₹{Number(pkg.startingPrice).toLocaleString("en-IN")}
                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    <td className="px-6 py-4">
                                        {pkg.location}
                                    </td>

                                    <td className="px-6 py-4">
                                        {pkg.duration}
                                    </td>

                                    <td className="px-6 py-4">
                                        {pkg.startingPrice}
                                    </td>

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

                                    <td className="px-6 py-4">

                                        <span
                                            className={`rounded-full px-3 py-1 text-sm ${pkg.status === "PUBLISHED"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {pkg.status}
                                        </span>

                                    </td>

                                    <td className="px-6 py-4">

                                        <div className="flex justify-end gap-2">

                                            <button className="rounded-lg border p-2 hover:bg-gray-100">
                                                <Eye size={18} />
                                            </button>

                                            <Link
                                                href={`/admin/packages/${pkg.id}`}
                                                className="rounded-lg border p-2 hover:bg-gray-100"
                                            >
                                                <Pencil size={18} />
                                            </Link>

                                            <button className="rounded-lg border p-2 text-red-500 hover:bg-red-50">
                                                <Trash2 size={18} />
                                            </button>

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