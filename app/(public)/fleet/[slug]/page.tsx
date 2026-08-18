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
import { FleetCategoryDetail } from "@/types/fleet.type";

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

    const serializedCategory: FleetCategoryDetail = {
        id: category.id,

        name: category.name,
        slug: category.slug,

        eyebrow: category.eyebrow,

        shortDescription:
            category.shortDescription,

        description:
            category.description,

        featuredImage:
            category.featuredImage,

        featuredImagePublicId:
            category.featuredImagePublicId,

        isFeatured:
            category.isFeatured,

        isActive:
            category.isActive,

        sortOrder:
            category.sortOrder,

        seoTitle:
            category.seoTitle,

        seoDescription:
            category.seoDescription,

        vehicles: category.vehicles.map(
            (vehicle) => ({
                id: vehicle.id,

                categoryId:
                    vehicle.categoryId,

                name: vehicle.name,
                slug: vehicle.slug,

                tagline:
                    vehicle.tagline,

                shortDescription:
                    vehicle.shortDescription,

                description:
                    vehicle.description,

                featuredImage:
                    vehicle.featuredImage,

                featuredImagePublicId:
                    vehicle.featuredImagePublicId,

                heroImage:
                    vehicle.heroImage,

                heroImagePublicId:
                    vehicle.heroImagePublicId,

                seatingCapacity:
                    vehicle.seatingCapacity,

                luggageCapacity:
                    vehicle.luggageCapacity,


                // Customer pricing

                customerBaseRate:
                    Number(
                        vehicle.customerBaseRate
                    ),

                customerBaseKm:
                    vehicle.customerBaseKm,

                customerExtraKmRate:
                    Number(
                        vehicle.customerExtraKmRate
                    ),

                customerDriverBata:
                    Number(
                        vehicle.customerDriverBata
                    ),

                customerOvertimeRate:
                    Number(
                        vehicle.customerOvertimeRate
                    ),


                // B2B pricing

                b2bBaseRate:
                    Number(
                        vehicle.b2bBaseRate
                    ),

                b2bBaseKm:
                    vehicle.b2bBaseKm,

                b2bExtraKmRate:
                    Number(
                        vehicle.b2bExtraKmRate
                    ),

                b2bDriverBata:
                    Number(
                        vehicle.b2bDriverBata
                    ),

                b2bOvertimeRate:
                    Number(
                        vehicle.b2bOvertimeRate
                    ),


                // Duty

                dutyStartTime:
                    vehicle.dutyStartTime,

                dutyEndTime:
                    vehicle.dutyEndTime,


                // Commercial

                fuelIncluded:
                    vehicle.fuelIncluded,

                tollTreatment:
                    vehicle.tollTreatment,

                parkingTreatment:
                    vehicle.parkingTreatment,

                ferryTreatment:
                    vehicle.ferryTreatment,

                driverAccommodationTreatment:
                    vehicle.driverAccommodationTreatment,


                // Vehicle details

                airConditioning:
                    vehicle.airConditioning,

                transmission:
                    vehicle.transmission,

                fuelType:
                    vehicle.fuelType,

                chauffeurDriven:
                    vehicle.chauffeurDriven,

                whatsappMessage:
                    vehicle.whatsappMessage,


                // Publishing

                isFeatured:
                    vehicle.isFeatured,

                isActive:
                    vehicle.isActive,

                sortOrder:
                    vehicle.sortOrder,


                // SEO

                seoTitle:
                    vehicle.seoTitle,

                seoDescription:
                    vehicle.seoDescription,


                // Relations

                features:
                    vehicle.features.map(
                        (feature) => ({
                            id: feature.id,
                            vehicleId:
                                feature.vehicleId,
                            title:
                                feature.title,
                            sortOrder:
                                feature.sortOrder,
                        })
                    ),

                specifications:
                    vehicle.specifications.map(
                        (specification) => ({
                            id:
                                specification.id,
                            vehicleId:
                                specification.vehicleId,
                            label:
                                specification.label,
                            value:
                                specification.value,
                            sortOrder:
                                specification.sortOrder,
                        })
                    ),

                gallery:
                    vehicle.gallery.map(
                        (image) => ({
                            id: image.id,
                            vehicleId:
                                image.vehicleId,
                            image:
                                image.image,
                            publicId:
                                image.publicId,
                            alt:
                                image.alt,
                            sortOrder:
                                image.sortOrder,
                        })
                    ),
            })
        ),
    };

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

            <CategoryIntro category={serializedCategory} />

            <FleetVehicleShowcase
                vehicles={serializedCategory.vehicles}
            />

            <CategoryBenefits category={serializedCategory} />

            <TravelOccasions category={serializedCategory} />

            <CategoryGallery
                vehicles={serializedCategory.vehicles}
            />

            <CategoryFAQ categoryName={category.name} />
        </>
    );
}