import { Metadata } from "next";

import PageHero from "@/components/common/PageHero";

import TourismIntro from "@/components/tourism/TourismIntro";
import TourismGrid from "@/components/tourism/TourismGrid";
import WhyExploreKerala from "@/components/tourism/WhyExploreKerala";
import TourismFAQ from "@/components/tourism/TourismFAQ";

import { tourismService } from "@/services/tourism.service";
import { tourismCategoryService } from "@/services/tourism-category.service";
import TourismCategories from "@/components/tourism/TourismCategories";
import DistrictExplorer from "@/components/tourism/DistrictExplorer";
import { keralaDistricts } from "@/data/kerala-districts";

export const metadata: Metadata = {
    title: "Kerala Tourism Guide | Ezora Tours",
    description:
        "Discover the best places to visit in Kerala including hill stations, beaches, backwaters, waterfalls, wildlife destinations and cultural attractions with Ezora Tours.",
};

export default async function TourismPage() {
    const [guides, categories] = await Promise.all([
        tourismService.findPublished(),
        tourismCategoryService.getAllActive(),
    ]);

    return (
        <>
            <PageHero
                eyebrow="Kerala Tourism"
                title="Explore the beauty of"
                highlightedTitle="God's Own Country."
                description="Discover breathtaking destinations across Kerala—from misty hill stations and tranquil backwaters to pristine beaches, waterfalls and vibrant cultural attractions."
                image="/images/tourism/hero.jpg"
                imageAlt="Kerala Tourism"
                breadcrumbs={[
                    {
                        label: "Tourism",
                    },
                ]}
            />

            <TourismIntro />

            <TourismGrid
                guides={guides}
                categories={categories}
            />

            <WhyExploreKerala />

            <DistrictExplorer districts={keralaDistricts} />

            <TourismCategories categories={categories} />

            <TourismFAQ />
        </>
    );
}