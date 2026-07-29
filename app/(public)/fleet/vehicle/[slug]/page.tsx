import { notFound } from "next/navigation";

import VehicleOverview from "@/components/fleet/vehicle/VehicleOverview";

import { VehicleService } from "@/services/vehicle.service";
import PageHero from "@/components/common/PageHero";
import VehicleSpecifications from "@/components/fleet/vehicle/VehicleSpecifications";
import VehicleFeatures from "@/components/fleet/vehicle/VehicleFeatures";
import VehicleGallery from "@/components/fleet/vehicle/VehicleGallery";
import VehicleOccasions from "@/components/fleet/vehicle/VehicleOccasions";
import RelatedVehicles from "@/components/fleet/vehicle/RelatedVehicles";
import VehicleFAQ from "@/components/fleet/vehicle/VehicleFAQs";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({
    params,
}: Props) {
    const { slug } = await params;

    try {
        const vehicle =
            await VehicleService.findBySlug(slug);

        return {
            title:
                vehicle.seoTitle ??
                vehicle.name,
            description:
                vehicle.seoDescription ??
                vehicle.shortDescription,
        };
    } catch {
        return {
            title: "Vehicle",
        };
    }
}

export default async function VehiclePage({
    params,
}: Props) {
    const { slug } = await params;

    let vehicle;
    let relatedVehicles;

    try {
        vehicle =
            await VehicleService.findBySlug(slug);

        relatedVehicles =
            await VehicleService.findRelated(vehicle);
    } catch {
        notFound();
    }

    return (
        <>
            <PageHero
                eyebrow={
                    vehicle.tagline ??
                    "Premium Chauffeur Service"
                }
                title={vehicle.name}
                highlightedTitle="for every journey."
                description={
                    vehicle.shortDescription
                }
                image={
                    vehicle.heroImage ||
                    vehicle.featuredImage ||
                    "/images/placeholders/fleet-category.jpg"
                }
                imageAlt={`${vehicle.category.name} chauffeur-driven vehicles by Ezora Tours`}
                breadcrumbs={[
                    {
                        label: "Fleet",
                        href: "/fleet",
                    },
                    {
                        label:
                            vehicle.category.name,
                        href: `/fleet/${vehicle.category.slug}`,
                    },
                    {
                        label: vehicle.name,
                    },
                ]}
            />

            <VehicleOverview
                vehicle={vehicle}
            />

            <VehicleSpecifications
                vehicle={vehicle}
            />

            <VehicleFeatures
                vehicle={vehicle}
            />

            <VehicleGallery
                vehicle={vehicle}
            />

            <VehicleOccasions
                vehicle={vehicle}
            />

            <RelatedVehicles
                vehicles={relatedVehicles}
            />

            <VehicleFAQ
                vehicle={vehicle}
            />
        </>
    );
}