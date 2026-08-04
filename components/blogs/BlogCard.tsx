import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    CalendarDays,
    Tag,
} from "lucide-react";

import { format } from "date-fns";

import { BlogCardType } from "@/types/blogs.type";

interface Props {
    blog: BlogCardType;
    featured?: boolean;
}

export default function BlogCard({
    blog,
    featured = false,
}: Props) {
    if (featured) {
        return (
            <Link
                href={`/blogs/${blog.slug}`}
                className="group grid overflow-hidden rounded-[36px] border border-border bg-white transition hover:-translate-y-2 hover:shadow-xl lg:grid-cols-2"
            >
                <div className="relative min-h-[320px] lg:min-h-[520px]">

                    <Image
                        src={
                            blog.featuredImage ??
                            "/images/placeholders/blog.jpg"
                        }
                        alt={blog.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                    />

                </div>

                <div className="flex flex-col justify-center p-10 lg:p-14">

                    <div className="mb-6 flex flex-wrap items-center gap-5 text-sm text-muted">

                        <span className="inline-flex items-center gap-2 rounded-full bg-light-sea-green/10 px-4 py-2 font-semibold text-light-sea-green">

                            <Tag size={16} />

                            {blog.category}

                        </span>

                        <span className="inline-flex items-center gap-2">

                            <CalendarDays size={16} />

                            {format(
                                new Date(blog.createdAt),
                                "dd MMM yyyy"
                            )}

                        </span>

                    </div>

                    <h2 className="text-[clamp(2rem,3vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-dark-cerulean transition group-hover:text-light-sea-green">

                        {blog.title}

                    </h2>

                    <p className="mt-8 text-lg leading-8 text-muted">

                        {blog.excerpt}

                    </p>

                    <div className="mt-10 inline-flex items-center gap-3 font-semibold text-light-sea-green">

                        Read Article

                        <ArrowUpRight
                            size={18}
                            className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                        />

                    </div>

                </div>
            </Link>
        );
    }

    return (
        <Link
            href={`/blogs/${blog.slug}`}
            className="group overflow-hidden rounded-[30px] border border-border bg-white transition hover:-translate-y-2 hover:shadow-xl"
        >
            <div className="relative aspect-[16/10] overflow-hidden">

                <Image
                    src={
                        blog.featuredImage ??
                        "/images/placeholders/blog.jpg"
                    }
                    alt={blog.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                />

            </div>

            <div className="p-8">

                <div className="mb-5 flex flex-wrap items-center gap-4 text-sm">

                    <span className="rounded-full bg-light-sea-green/10 px-3 py-1 font-semibold text-light-sea-green">

                        {blog.category}

                    </span>

                    <span className="flex items-center gap-2 text-muted">

                        <CalendarDays size={15} />

                        {format(
                            new Date(blog.createdAt),
                            "dd MMM yyyy"
                        )}

                    </span>

                </div>

                <h3 className="line-clamp-2 text-2xl font-semibold leading-tight text-dark-cerulean transition group-hover:text-light-sea-green">

                    {blog.title}

                </h3>

                <p className="mt-5 line-clamp-3 leading-7 text-muted">

                    {blog.excerpt}

                </p>

                <div className="mt-8 inline-flex items-center gap-3 font-semibold text-light-sea-green">

                    Read More

                    <ArrowUpRight
                        size={18}
                        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                </div>

            </div>
        </Link>
    );
}