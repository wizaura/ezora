import { Metadata } from "next";
import { notFound } from "next/navigation";

import PageHero from "@/components/common/PageHero";

import TourismIntro from "@/components/tourism/TourismIntro";
import TourismGrid from "@/components/tourism/TourismGrid";
import WhyExploreKerala from "@/components/tourism/WhyExploreKerala";
import TourismFAQ from "@/components/tourism/TourismFAQ";

import { tourismCategoryService } from "@/services/tourism-category.service";
import { tourismService } from "@/services/tourism.service";

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
        const category =
            await tourismCategoryService.findBySlug(slug);

        return {
            title:
                `${category.name} in Kerala | Ezora Tours`,
            description:
                `Discover the best ${category.name.toLowerCase()} in Kerala with Ezora Tours.`,
        };
    } catch {
        return {
            title: "Kerala Tourism",
        };
    }
}

export default async function TourismCategoryPage({
    params,
}: Props) {
    const { slug } = await params;

    let category;
    let guides;
    let categories;

    try {
        [category, guides, categories] =
            await Promise.all([
                tourismCategoryService.findBySlug(slug),
                tourismService.findByCategorySlug(slug),
                tourismCategoryService.getAllActive(),
            ]);
    } catch {
        notFound();
    }

    return (
        <>
            <PageHero
                eyebrow="Kerala Tourism"
                title={category.name}
                highlightedTitle="destinations."
                description={
                    category.description ??
                    `Explore the best ${category.name.toLowerCase()} across Kerala.`
                }
                image={
                    category.featuredImage ??
                    "/images/placeholders/tourism-category.jpg"
                }
                imageAlt={category.name}
                breadcrumbs={[
                    {
                        label: "Tourism",
                        href: "/tourism",
                    },
                    {
                        label: category.name,
                    },
                ]}
            />

            <TourismIntro />

            <TourismGrid
                guides={guides}
                categories={categories}
                selectedCategory={category.slug}
                showCategoryFilter={false}
            />

            <WhyExploreKerala />

            <TourismFAQ />
        </>
    );
}