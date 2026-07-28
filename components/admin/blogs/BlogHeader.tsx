"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

export default function BlogHeader() {
    return (
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>

                <h1 className="mt-3 text-3xl font-bold text-dark-cerulean">
                    Blogs
                </h1>

                <p className="mt-2 max-w-2xl text-muted">
                    Create SEO-friendly travel guides, destination articles,
                    Kerala tourism updates and informative blogs for your
                    visitors.
                </p>
            </div>

            <Link
                href="/admin/blogs/new"
                className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2

                    rounded-2xl

                    bg-brand

                    px-6
                    py-3

                    bg-dark-cerulean
                    font-medium
                    text-white

                    shadow-sm

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:shadow-lg
                "
            >
                <Plus className="h-5 w-5" />

                New Blog
            </Link>
        </div>
    );
}