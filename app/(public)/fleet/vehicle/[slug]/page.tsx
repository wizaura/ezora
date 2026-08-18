import { notFound } from "next/navigation";

import VehicleOverview from "@/components/fleet/vehicle/VehicleOverview";
import VehicleSpecifications from "@/components/fleet/vehicle/VehicleSpecifications";
import VehicleFeatures from "@/components/fleet/vehicle/VehicleFeatures";
import VehicleGallery from "@/components/fleet/vehicle/VehicleGallery";
import VehicleOccasions from "@/components/fleet/vehicle/VehicleOccasions";
import RelatedVehicles from "@/components/fleet/vehicle/RelatedVehicles";
import VehicleFAQ from "@/components/fleet/vehicle/VehicleFAQs";
import PageHero from "@/components/common/PageHero";

import { VehicleService } from "@/services/vehicle.service";

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
            await VehicleService.findBySlug(
                slug
            );

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
            await VehicleService.findBySlug(
                slug
            );

        if (!vehicle) {
            notFound();
        }


        relatedVehicles =
            await VehicleService.findRelated(
                vehicle
            );

    } catch {

        notFound();
    }


    /*
     * Prisma Decimal values cannot be passed
     * directly from a Server Component to a
     * Client Component.
     *
     * Convert all pricing Decimal values
     * into normal JavaScript numbers.
     */

    const serializedVehicle = {

        id: vehicle.id,

        categoryId:
            vehicle.categoryId,

        name:
            vehicle.name,

        slug:
            vehicle.slug,

        tagline:
            vehicle.tagline,

        shortDescription:
            vehicle.shortDescription,

        description:
            vehicle.description,


        /* Images */

        featuredImage:
            vehicle.featuredImage,

        featuredImagePublicId:
            vehicle.featuredImagePublicId,

        heroImage:
            vehicle.heroImage,

        heroImagePublicId:
            vehicle.heroImagePublicId,


        /* Capacity */

        seatingCapacity:
            vehicle.seatingCapacity,

        luggageCapacity:
            vehicle.luggageCapacity,


        /* Customer Pricing */

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


        /* B2B Pricing */

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


        /* Duty */

        dutyStartTime:
            vehicle.dutyStartTime,

        dutyEndTime:
            vehicle.dutyEndTime,


        /* Commercial */

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


        /* Vehicle details */

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


        /* Publishing */

        isFeatured:
            vehicle.isFeatured,

        isActive:
            vehicle.isActive,

        sortOrder:
            vehicle.sortOrder,


        /* SEO */

        seoTitle:
            vehicle.seoTitle,

        seoDescription:
            vehicle.seoDescription,


        /* Relations */

        features:
            vehicle.features.map(
                (feature) => ({
                    id:
                        feature.id,

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
                    id:
                        image.id,

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


        /* Category */

        category: {
            id:
                vehicle.category.id,

            name:
                vehicle.category.name,

            slug:
                vehicle.category.slug,
        },
    };


    /*
     * Related vehicles normally don't contain
     * Decimal pricing fields, but serialize them
     * explicitly as a clean public object.
     */

    const serializedRelatedVehicles =
        relatedVehicles.map(
            (relatedVehicle) => ({
                id:
                    relatedVehicle.id,

                name:
                    relatedVehicle.name,

                slug:
                    relatedVehicle.slug,

                shortDescription:
                    relatedVehicle.shortDescription,

                featuredImage:
                    relatedVehicle.featuredImage,

                seatingCapacity:
                    relatedVehicle.seatingCapacity,

                luggageCapacity:
                    relatedVehicle.luggageCapacity,
            })
        );


    return (
        <>

            <PageHero
                eyebrow={
                    vehicle.tagline ??
                    "Premium Chauffeur Service"
                }

                title={
                    vehicle.name
                }

                highlightedTitle="for every journey."

                description={
                    vehicle.shortDescription
                }

                image={
                    vehicle.featuredImage ??
                    "/images/placeholders/fleet-category.jpg"
                }

                imageAlt={`${vehicle.category.name} chauffeur-driven vehicle by Ezora Tours`}

                breadcrumbs={[
                    {
                        label: "Fleet",
                        href: "/fleet",
                    },

                    {
                        label:
                            vehicle.category.name,

                        href:
                            `/fleet/${vehicle.category.slug}`,
                    },

                    {
                        label:
                            vehicle.name,
                    },
                ]}
            />


            <VehicleOverview
                vehicle={
                    serializedVehicle
                }
            />


            <VehicleSpecifications
                vehicle={
                    serializedVehicle
                }
            />


            <VehicleFeatures
                vehicle={
                    serializedVehicle
                }
            />


            <VehicleGallery
                vehicle={
                    serializedVehicle
                }
            />


            <VehicleOccasions
                vehicle={
                    serializedVehicle
                }
            />


            <RelatedVehicles
                vehicles={
                    serializedRelatedVehicles
                }
            />


            <VehicleFAQ
                vehicle={
                    serializedVehicle
                }
            />

        </>
    );
}