import { Metadata } from "next";
import { notFound } from "next/navigation";

import PageHero from "@/components/common/PageHero";

import BlogOverview from "@/components/blogs/BlogOverview";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";

import { BlogService } from "@/services/blogs.service";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { slug } = await params;

    try {
        const blog =
            await BlogService.getBySlug(slug);

        return {
            title:
                blog.seoTitle ??
                blog.title,

            description:
                blog.seoDescription ??
                blog.excerpt,
        };
    } catch {
        return {
            title: "Blog",
        };
    }
}

export default async function BlogPage({
    params,
}: Props) {
    const { slug } = await params;

    let blog;
    let relatedBlogs;

    try {
        blog =
            await BlogService.getBySlug(slug);

        relatedBlogs =
            await BlogService.findRelated(
                blog.category,
                blog.id
            );
    } catch {
        notFound();
    }

    return (
        <>
            <PageHero
                eyebrow={blog.category}
                title={blog.title}
                highlightedTitle=""
                description={blog.excerpt}
                image={
                    blog.featuredImage ??
                    "/images/placeholders/blog.jpg"
                }
                imageAlt={blog.title}
                breadcrumbs={[
                    {
                        label: "Blogs",
                        href: "/blogs",
                    },
                    {
                        label: blog.title,
                    },
                ]}
            />

            <BlogOverview
                blog={blog}
            />

            <RelatedBlogs
                blogs={relatedBlogs}
            />
        </>
    );
}