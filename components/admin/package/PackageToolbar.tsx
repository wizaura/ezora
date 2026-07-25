"use client";

import Link from "next/link";
import { Search, Plus } from "lucide-react";

export default function PackageToolbar() {
    return (
        <div className="rounded-xl border bg-white p-5">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div>
                    <h1 className="text-2xl font-bold">
                        Tour Packages
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Manage all your tour packages.
                    </p>
                </div>

                <Link
                    href="/admin/packages/new"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 font-medium text-white"
                >
                    <Plus size={18} className="mr-2" />

                    Add Package
                </Link>

            </div>

            <div className="mt-6 flex flex-col gap-4 lg:flex-row">

                <div className="relative flex-1">

                    <Search
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                    />

                    <input
                        type="text"
                        placeholder="Search packages..."
                        className="w-full rounded-lg border py-2.5 pl-10 pr-4"
                    />

                </div>

                <select className="rounded-lg border px-4 py-2.5">

                    <option>All Status</option>
                    <option>Published</option>
                    <option>Draft</option>

                </select>

                <select className="rounded-lg border px-4 py-2.5">

                    <option>All Packages</option>
                    <option>Featured</option>
                    <option>Normal</option>

                </select>

            </div>

        </div>
    );
}