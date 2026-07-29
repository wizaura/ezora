import { Metadata } from "next";
import { notFound } from "next/navigation";

import PageHero from "@/components/common/PageHero";

import TourismOverview from "@/components/tourism/place/TourismOverview";
import TourismGallery from "@/components/tourism/place/TourismGallery";
import NearbyAttractions from "@/components/tourism/place/NearbyAttractions";
import TourismFAQ from "@/components/tourism/place/TourismFAQ";

import { tourismService } from "@/services/tourism.service";
import { tourismCategoryService } from "@/services/tourism-category.service";

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
        const guide =
            await tourismService.findBySlug(slug);

        return {
            title:
                guide.seoTitle ??
                `${guide.title} | Kerala Tourism Guide`,
            description:
                guide.seoDescription ??
                guide.excerpt,
        };
    } catch {
        return {
            title: "Destination",
        };
    }
}

export default async function TourismGuidePage({
    params,
}: Props) {
    const { slug } = await params;

    let guide;
    let relatedGuides;
    let categories;

    try {
        guide =
            await tourismService.findBySlug(slug);

        relatedGuides =
            await tourismService.findRelated(
                guide.categoryId,
                guide.id
            );

        categories = 
            await tourismCategoryService.getAllActive();

    } catch {
        notFound();
    }

    return (
        <>
            <PageHero
                eyebrow={
                    guide.category.name
                }
                title={guide.title}
                highlightedTitle="travel guide."
                description={guide.excerpt}
                image={
                    guide.featuredImage ||
                    "/images/placeholders/tourism.jpg"
                }
                imageAlt={guide.title}
                breadcrumbs={[
                    {
                        label: "Tourism",
                        href: "/tourism",
                    },
                    {
                        label:
                            guide.category.name,
                        href: `/tourism/${guide.category.slug}`,
                    },
                    {
                        label: guide.title,
                    },
                ]}
            />

            <TourismOverview
                guide={guide}
                categories={categories}
            />

            <TourismGallery
                guide={guide}
            />

            <NearbyAttractions
                guides={relatedGuides}
            />

            <TourismFAQ
                guide={guide}
            />
        </>
    );
}