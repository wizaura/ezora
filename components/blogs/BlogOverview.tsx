import Image from "next/image";
import { CalendarDays, Tag } from "lucide-react";
import { format } from "date-fns";

import { Blog } from "@/types/blogs.type";
import Link from "next/link";

interface Props {
    blog: Blog;
}

export default function BlogOverview({
    blog,
}: Props) {

    console.log(blog.content,'ss');
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                <div className="grid gap-6 md:gap-16 lg:grid-cols-[1.2fr_0.8fr]">

                    {/* Article */}

                    <div>

                        <div className="mb-4 md:mb-8 flex flex-wrap items-center gap-5">

                            <span className="inline-flex items-center gap-2 rounded-full bg-light-sea-green/10 px-4 py-2 text-sm font-semibold text-light-sea-green">

                                <Tag size={16} />

                                {blog.category}

                            </span>

                            <span className="inline-flex items-center gap-2 text-sm text-muted">

                                <CalendarDays size={16} />

                                {format(
                                    new Date(blog.createdAt),
                                    "dd MMM yyyy"
                                )}

                            </span>

                        </div>

                        <article
                            className="
                                prose prose-lg
                                max-w-none
                                prose-headings:text-dark-cerulean
                                prose-p:text-muted
                                prose-p:leading-8
                                prose-li:text-muted
                                prose-li:leading-8
                                prose-strong:text-dark-cerulean
                                prose-img:rounded-3xl
                            "
                            dangerouslySetInnerHTML={{
                                __html: blog.content,
                            }}
                        />

                    </div>

                    {/* Sidebar */}

                    <aside className="space-y-8">

                        <div className="overflow-hidden rounded-[34px]">

                            <Image
                                src={
                                    blog.featuredImage ??
                                    "/images/placeholders/blog.jpg"
                                }
                                alt={blog.title}
                                width={700}
                                height={900}
                                className="w-full object-cover"
                            />

                        </div>

                        <div className="rounded-[30px] border border-border bg-background p-8">

                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                                About This Article
                            </p>

                            <h3 className="mt-4 text-2xl font-semibold text-dark-cerulean">
                                Travel Inspiration
                            </h3>

                            <p className="mt-5 leading-8 text-muted">
                                Explore expert travel tips, destination
                                highlights and local insights curated by
                                Ezora Tours to help you plan unforgettable
                                experiences across Kerala.
                            </p>

                            <div className="space-x-3">
                                <Link
                                    href="/packages"
                                    className="mt-8 inline-flex rounded-full bg-light-sea-green px-6 py-3 font-semibold text-white transition hover:opacity-90"
                                >
                                    Plan Your Trip
                                </Link>

                                <Link
                                    href="/contact"
                                    className="mt-8 inline-flex rounded-full bg-light-sea-green px-6 py-3 font-semibold text-white transition hover:opacity-90"
                                >
                                    Contact Us
                                </Link>
                            </div>

                        </div>

                    </aside>

                </div>

            </div>
        </section>
    );
}