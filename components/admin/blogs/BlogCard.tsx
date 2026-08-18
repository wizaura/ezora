"use client";

import Image from "next/image";
import Link from "next/link";

import {
    Calendar,
    Pencil,
    Trash2,
} from "lucide-react";

import { useState } from "react";

import ConfirmDialog from "@/components/common/ConfirmDialog";

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

    onDelete?: (
        id: string
    ) => Promise<void>;
}

export default function BlogCard({
    blog,
    onDelete,
}: Props) {

    const [
        confirmOpen,
        setConfirmOpen,
    ] = useState(false);

    const [
        deleting,
        setDeleting,
    ] = useState(false);


    const handleDelete = async () => {

        if (!onDelete) {
            return;
        }

        try {

            setDeleting(true);

            await onDelete(blog.id);

            setConfirmOpen(false);

        } catch (error) {

            console.error(
                "Failed to delete blog:",
                error
            );

        } finally {

            setDeleting(false);

        }
    };


    return (
        <>
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


                    {/* Actions */}

                    <div className="flex items-center justify-between border-t border-border pt-4">

                        <div className="flex items-center gap-2">

                            {/* Edit */}

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
                                aria-label="Edit blog"
                            >
                                <Pencil
                                    className="h-4 w-4"
                                />
                            </Link>


                            {/* Delete */}

                            <button
                                type="button"
                                onClick={() =>
                                    setConfirmOpen(true)
                                }
                                className="
                                    rounded-xl
                                    p-2
                                    text-muted
                                    transition
                                    hover:bg-red-50
                                    hover:text-red-600
                                "
                                aria-label="Delete blog"
                            >
                                <Trash2
                                    className="h-4 w-4"
                                />
                            </button>

                        </div>

                    </div>

                </div>

            </div>


            {/* Confirmation */}

            <ConfirmDialog
                open={confirmOpen}
                onOpenChange={setConfirmOpen}

                title="Delete this blog?"

                description={`"${blog.title}" will be permanently deleted. This action cannot be undone.`}

                confirmText="Delete Blog"

                cancelText="Cancel"

                onConfirm={handleDelete}

                loading={deleting}
            />
        </>
    );
}