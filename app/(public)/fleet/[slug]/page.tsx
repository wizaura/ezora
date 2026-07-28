import { notFound } from "next/navigation";

import { FleetCategoryService } from "@/services/fleet-category.service";

import CategoryIntro from "@/components/fleet/category/CategoryIntro";
// import VehicleGrid from "./components/VehicleGrid";
// import CategoryBenefits from "./components/CategoryBenefits";
// import TravelOccasions from "./components/TravelOccasions";
// import CategoryGallery from "./components/CategoryGallery";
// import CategoryFAQ from "./components/CategoryFAQ";
import PageHero from "@/components/common/PageHero";
import FleetVehicleShowcase from "@/components/fleet/category/FleetVehicleShowcase";
import CategoryBenefits from "@/components/fleet/category/CategoryBenefits";
import TravelOccasions from "@/components/fleet/category/TravelOccasions";
import CategoryGallery from "@/components/fleet/category/CategoryGallery";
import CategoryFAQ from "@/components/fleet/category/CategoryFAQ";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({
    params,
}: Props) {
    const { slug } = await params;

    const category =
        await FleetCategoryService.findBySlug(slug);

    if (!category) {
        return {};
    }

    return {
        title: category.seoTitle || category.name,
        description:
            category.seoDescription ||
            category.shortDescription,
    };
}

export default async function FleetCategoryPage({
    params,
}: Props) {

    const { slug } = await params;

    const category =
        await FleetCategoryService.findBySlug(slug);

    if (!category) {
        notFound();
    }

    return (
        <>
            <PageHero
                eyebrow={category.eyebrow || "Premium Fleet"}
                title={category.name}
                highlightedTitle="for every journey."
                description={
                    category.shortDescription ||
                    category.description
                }
                image={
                    category.featuredImage ??
                    "/images/placeholders/fleet-category.jpg"
                }
                imageAlt={`${category.name} chauffeur-driven vehicles by Ezora Tours`}
                breadcrumbs={[
                    {
                        label: "Fleet",
                        href: "/fleet",
                    },
                    {
                        label: category.name,
                    },
                ]}
            />

            <CategoryIntro category={category} />

            <FleetVehicleShowcase
                vehicles={category.vehicles}
            />

            <CategoryBenefits category={category} />

            <TravelOccasions category={category} />

            <CategoryGallery
                vehicles={category.vehicles}
            />

            <CategoryFAQ category={category} />
        </>
    );
}