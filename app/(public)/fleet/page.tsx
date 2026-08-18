import PageHero from "@/components/common/PageHero";
import FleetFAQSection from "@/components/fleet/FleetFAQSection";
import FleetIntroductionSection from "@/components/fleet/FleetIntroductionSection";
import FleetRecommendationSection from "@/components/fleet/FleetRecommendationSection";
import FleetVehiclesSection from "@/components/fleet/FleetVehiclesSection";
import WhyChooseFleetSection from "@/components/fleet/WhyChooseFleetSection";

import { fleetFAQs } from "@/data/fleet-faqs";
import { FleetCategoryService } from "@/services/fleet-category.service";

export default async function FleetPage() {
    const activeCategories =
        await FleetCategoryService.getPublicCategories();

    /*
     * Prisma Decimal values cannot be passed directly
     * from Server Components to Client Components.
     *
     * The public fleet page uses CUSTOMER pricing.
     *
     * B2B/vendor pricing is intentionally NOT exposed
     * to the public website.
     */

    const serializedCategories =
        activeCategories.map((category) => ({
            id: category.id,

            name: category.name,

            slug: category.slug,

            eyebrow:
                category.eyebrow,

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

            vehicles:
                category.vehicles.map(
                    (vehicle) => ({
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


                        /*
                         * CUSTOMER TARIFF
                         *
                         * These are the rates displayed/used
                         * for normal customer quotations.
                         */

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


                        /*
                         * DUTY INFORMATION
                         */

                        dutyStartTime:
                            vehicle.dutyStartTime,

                        dutyEndTime:
                            vehicle.dutyEndTime,


                        /*
                         * COMMERCIAL CONDITIONS
                         */

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


                        /*
                         * VEHICLE INFORMATION
                         */

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

                        isFeatured:
                            vehicle.isFeatured,

                        isActive:
                            vehicle.isActive,

                        sortOrder:
                            vehicle.sortOrder,

                        seoTitle:
                            vehicle.seoTitle,

                        seoDescription:
                            vehicle.seoDescription,


                        /*
                         * Relations
                         */

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


                        /*
                         * Dates
                         *
                         * Convert Date objects because
                         * they also cannot be passed directly
                         * to Client Components.
                         */

                        createdAt:
                            vehicle.createdAt.toISOString(),

                        updatedAt:
                            vehicle.updatedAt.toISOString(),
                    })
                ),
        }));


    return (
        <>
            <PageHero
                eyebrow="Our Fleet"
                title="Premium vehicles."
                highlightedTitle="Exceptional journeys."
                description="Discover our chauffeur-driven fleet of luxury passenger vans, premium Force Travellers and executive sedans, selected for comfort, reliability and seamless travel across Kerala."
                image="/images/fleet/hero-1.jpg"
                imageAlt="Premium chauffeur-driven vehicle fleet in Kerala by Ezora Tours and Travels"
                breadcrumbs={[
                    {
                        label: "Our Fleet",
                    },
                ]}
            />


            <FleetIntroductionSection
                categories={
                    serializedCategories
                }
            />


            <FleetVehiclesSection
                categories={
                    serializedCategories
                }
            />


            <FleetRecommendationSection
                categories={
                    serializedCategories
                }
            />


            <WhyChooseFleetSection />


            <FleetFAQSection
                faqs={fleetFAQs}
            />
        </>
    );
}