"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Calendar,
    Pencil,
    Eye,
    Trash2,
} from "lucide-react";

interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    featuredImage?: string | null;
    isPublished: boolean;
    createdAt: Date | string;
    category?: string;
}

interface Props {
    blog: Blog;
}

export default function BlogCard({
    blog,
}: Props) {
    return (
        <div
            className="
                group

                overflow-hidden

                rounded-3xl

                border
                border-border

                bg-white

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-xl
            "
        >
            {/* Image */}

            <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                    src={
                        blog.featuredImage ||
                        "/images/placeholders/blog.jpg"
                    }
                    alt={blog.title}
                    fill
                    className="
                        object-cover

                        transition-transform
                        duration-500

                        group-hover:scale-105
                    "
                />

                <span
                    className={`
                        absolute
                        left-4
                        top-4

                        rounded-full

                        px-3
                        py-1

                        text-xs
                        font-semibold

                        ${
                            blog.isPublished
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-600"
                        }
                    `}
                >
                    {blog.isPublished
                        ? "Published"
                        : "Draft"}
                </span>
            </div>

            {/* Content */}

            <div className="space-y-4 p-6">
                {blog.category && (
                    <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                        {blog.category}
                    </span>
                )}

                <div>
                    <h3 className="line-clamp-2 text-xl font-semibold text-dark-cerulean">
                        {blog.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm text-muted">
                        {blog.excerpt}
                    </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted">
                    <Calendar className="h-4 w-4" />

                    {new Date(
                        blog.createdAt
                    ).toLocaleDateString()}
                </div>

                <div className="flex items-center justify-between border-t border-border pt-4">

                    <div className="flex items-center gap-2">
                        <Link
                            href={`/admin/blogs/${blog.id}`}
                            className="
                                rounded-xl

                                p-2

                                text-muted

                                transition

                                hover:bg-brand/10
                                hover:text-brand
                            "
                        >
                            <Pencil className="h-4 w-4" />
                        </Link>

                        <button
                            className="
                                rounded-xl

                                p-2

                                text-muted

                                transition

                                hover:bg-red-50
                                hover:text-red-600
                            "
                        >
                            <Trash2 className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}