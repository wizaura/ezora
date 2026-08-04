import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { format } from "date-fns";

import { BlogCardType } from "@/types/blogs.type";

interface Props {
    blogs: BlogCardType[];
}

export default function RelatedBlogs({
    blogs,
}: Props) {
    if (!blogs.length) return null;

    return (
        <section className="bg-background py-16">

            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                <div className="mb-14">

                    <div className="mb-5 flex items-center gap-3">

                        <span className="h-px w-10 bg-sea" />

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                            Continue Reading
                        </p>

                    </div>

                    <h2 className="text-[clamp(2.6rem,5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">

                        Related
                        <span className="block text-dark-grey-blue/60">
                            Articles.
                        </span>

                    </h2>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {blogs.map((blog) => (

                        <Link
                            key={blog.id}
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

                                <div className="mb-5 flex items-center gap-4 text-sm">

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

                                <h3 className="line-clamp-2 text-2xl font-semibold text-dark-cerulean transition group-hover:text-light-sea-green">

                                    {blog.title}

                                </h3>

                                <p className="mt-5 line-clamp-3 leading-7 text-muted">

                                    {blog.excerpt}

                                </p>

                                <div className="mt-8 inline-flex items-center gap-3 font-semibold text-light-sea-green">

                                    Read Article

                                    <ArrowUpRight
                                        size={18}
                                        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </section>
    );
}