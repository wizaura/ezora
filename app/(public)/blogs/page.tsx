import { Metadata } from "next";

import PageHero from "@/components/common/PageHero";
import BlogIntro from "@/components/blogs/BlogIntro";
import BlogGrid from "@/components/blogs/BlogGrid";

import { BlogService } from "@/services/blogs.service";

export const metadata: Metadata = {
    title: "Kerala Travel Blog | Ezora Tours",
    description:
        "Explore Kerala travel guides, destination tips, itineraries, local experiences and travel inspiration from Ezora Tours.",
};

interface Props {
    searchParams: Promise<{
        page?: string;
    }>;
}

export default async function BlogsPage({
    searchParams,
}: Props) {
    const params = await searchParams;

    const page = Number(params.page ?? 1);

    const result =
        await BlogService.findPublished({
            page,
            limit: 10,
        });

    return (
        <>
            <PageHero
                eyebrow="Travel Stories"
                title="Kerala Travel"
                highlightedTitle="Blog."
                description="Explore destination guides, travel tips, local experiences and curated articles to help you plan the perfect Kerala holiday."
                image="/images/heroes/blogs.jpg"
                imageAlt="Kerala travel blog by Ezora Tours"
                breadcrumbs={[
                    {
                        label: "Blogs",
                    },
                ]}
            />

            <BlogIntro />

            <BlogGrid blogs={result.blogs} pagination={result.pagination} />
        </>
    );
}