"use client";

import Image from "next/image";
import Link from "next/link";

interface RecentBlog {
    id: string;
    title: string;
    slug: string;
    featuredImage?: string | null;
    isPublished: boolean;
    category?: string | null;
    createdAt: string | Date;
}

interface RecentBlogsProps {
    blogs?: RecentBlog[];
    loading?: boolean;
}

export default function RecentBlogs({
    blogs = [],
    loading = false,
}: RecentBlogsProps) {

    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

                <div>
                    <h3 className="text-lg font-semibold text-dark-cerulean">
                        Recent Blogs
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Latest articles and travel stories
                    </p>
                </div>

                <Link
                    href="/admin/blogs"
                    className="text-sm font-medium text-sea hover:underline"
                >
                    View all
                </Link>

            </div>


            {loading ? (
                <div className="mt-6 space-y-4">

                    {[1, 2, 3, 4, 5].map(
                        (item) => (
                            <div
                                key={item}
                                className="flex animate-pulse gap-4"
                            >
                                <div className="h-16 w-24 rounded-lg bg-muted" />

                                <div className="flex-1 space-y-2">
                                    <div className="h-4 w-3/4 rounded bg-muted" />
                                    <div className="h-3 w-1/2 rounded bg-muted" />
                                </div>
                            </div>
                        )
                    )}

                </div>
            ) : blogs.length === 0 ? (

                <div className="mt-8 text-center text-slate-400">
                    No blog posts available.
                </div>

            ) : (

                <div className="mt-6 divide-y">

                    {blogs.map((blog) => (

                        <Link
                            key={blog.id}
                            href={`/admin/blogs/${blog.id}`}
                            className="flex gap-4 py-4 first:pt-0 last:pb-0 hover:bg-slate-50"
                        >

                            <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-muted">

                                {blog.featuredImage ? (
                                    <Image
                                        src={
                                            blog.featuredImage
                                        }
                                        alt={
                                            blog.title
                                        }
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                                        No Image
                                    </div>
                                )}

                            </div>


                            <div className="min-w-0 flex-1">

                                <h4 className="line-clamp-2 font-semibold text-dark-cerulean">
                                    {blog.title}
                                </h4>

                                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">

                                    {blog.category && (
                                        <>
                                            <span>
                                                {
                                                    blog.category
                                                }
                                            </span>

                                            <span>
                                                •
                                            </span>
                                        </>
                                    )}

                                    <span>
                                        {new Date(
                                            blog.createdAt
                                        ).toLocaleDateString(
                                            "en-IN",
                                            {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            }
                                        )}
                                    </span>

                                    <span>
                                        •
                                    </span>

                                    <span
                                        className={
                                            blog.isPublished
                                                ? "text-green-600"
                                                : "text-amber-600"
                                        }
                                    >
                                        {blog.isPublished
                                            ? "Published"
                                            : "Draft"}
                                    </span>

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            )}

        </div>
    );
}