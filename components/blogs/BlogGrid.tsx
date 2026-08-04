"use client";

import { useMemo, useState } from "react";

import { BlogCardType } from "@/types/blogs.type";
import BlogCard from "./BlogCard";
import Link from "next/link";

interface Props {
    blogs: BlogCardType[];

    pagination: {
        page: number;
        totalPages: number;
        hasNext: boolean;
        hasPrevious: boolean;
    };
}

export default function BlogGrid({
    blogs,
    pagination,
}: Props) {
    const categories = useMemo(() => {
        const values = [
            "All",
            ...new Set(
                blogs.map((blog) => blog.category)
            ),
        ];

        return values;
    }, [blogs]);

    const [activeCategory, setActiveCategory] =
        useState("All");

    const filteredBlogs = useMemo(() => {
        if (activeCategory === "All") {
            return blogs;
        }

        return blogs.filter(
            (blog) =>
                blog.category === activeCategory
        );
    }, [blogs, activeCategory]);

    const featuredBlog =
        filteredBlogs.length > 0
            ? filteredBlogs[0]
            : null;

    const remainingBlogs =
        filteredBlogs.slice(1);

    return (
        <section className="bg-background py-8">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                {/* Categories */}

                <div className="mb-14 flex flex-wrap justify-center gap-3">

                    {categories.map((category) => (

                        <button
                            key={category}
                            onClick={() =>
                                setActiveCategory(
                                    category
                                )
                            }
                            className={`rounded-full px-6 py-3 text-sm font-semibold transition ${activeCategory ===
                                    category
                                    ? "bg-light-sea-green text-white"
                                    : "border border-border bg-white text-dark-cerulean hover:border-light-sea-green hover:text-light-sea-green"
                                }`}
                        >
                            {category}
                        </button>

                    ))}

                </div>

                {featuredBlog && (

                    <div className="mb-14">

                        <BlogCard
                            blog={featuredBlog}
                            featured
                        />

                    </div>

                )}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {remainingBlogs.map((blog) => (

                        <BlogCard
                            key={blog.id}
                            blog={blog}
                        />

                    ))}

                </div>

                {!filteredBlogs.length && (

                    <div className="py-20 text-center">

                        <h3 className="text-2xl font-semibold text-dark-cerulean">
                            No blogs found
                        </h3>

                        <p className="mt-4 text-muted">
                            Please try another category.
                        </p>

                    </div>

                )}

            </div>

            <div className="mt-20 flex items-center justify-center gap-4">

                {pagination.hasPrevious && (
                    <Link
                        href={`/blogs?page=${pagination.page - 1}`}
                        className="rounded-full border border-border px-6 py-3 font-medium transition hover:border-light-sea-green hover:text-light-sea-green"
                    >
                        Previous
                    </Link>
                )}

                <span className="text-muted">
                    Page {pagination.page} of{" "}
                    {pagination.totalPages}
                </span>

                {pagination.hasNext && (
                    <Link
                        href={`/blogs?page=${pagination.page + 1}`}
                        className="rounded-full bg-light-sea-green px-6 py-3 font-medium text-white transition hover:opacity-90"
                    >
                        Next
                    </Link>
                )}

            </div>
        </section>
    );
}