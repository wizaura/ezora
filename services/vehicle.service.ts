import { Prisma } from "@prisma/client";

import { VehicleRepository } from "@/repositories/vehicle.repository";
import { FleetCategoryRepository } from "@/repositories/fleet-category.repository";
import { VehicleDto } from "@/validators/vehicle.validator";

export class VehicleService {
    static async getAll(query: {
        page?: number;
        limit?: number;
        search?: string;
        categoryId?: string;
        isActive?: boolean;
        isFeatured?: boolean;
    }) {
        return VehicleRepository.findMany(query);
    }

    static async getById(id: string) {
        const vehicle = await VehicleRepository.findById(id);

        if (!vehicle) {
            throw new Error("Vehicle not found");
        }

        return vehicle;
    }

    static async findBySlug(slug: string) {
        const vehicle = await VehicleRepository.findBySlug(slug);

        if (!vehicle) {
            throw new Error("Vehicle not found");
        }

        return vehicle;
    }

    static async findRelated(vehicle: any) {
        const relatedVehicles = await VehicleRepository.findRelated(
            vehicle.categoryId,
            vehicle.id
        );

        return relatedVehicles;
    }

    async getPricing(
        categorySlug: string,
        vehicleSlug: string
    ) {
        const vehicle =
            await VehicleRepository.findPricing(
                categorySlug,
                vehicleSlug
            );

        if (!vehicle) {
            throw new Error("Vehicle not found.");
        }

        return vehicle;
    }

    static async create(dto: VehicleDto) {
        const slugExists =
            await VehicleRepository.findBySlug(dto.slug);

        if (slugExists) {
            throw new Error("Slug already exists");
        }

        const category =
            await FleetCategoryRepository.exists(
                dto.categoryId
            );

        if (!category) {
            throw new Error("Fleet category not found");
        }

        const data: Prisma.VehicleCreateInput = {
            /* ------------------------------------------------------------------ */
            /* General Information                                                */
            /* ------------------------------------------------------------------ */

            name: dto.name,
            slug: dto.slug,

            tagline: dto.tagline,

            shortDescription:
                dto.shortDescription,

            description:
                dto.description,


            /* ------------------------------------------------------------------ */
            /* Images                                                              */
            /* ------------------------------------------------------------------ */

            featuredImage:
                dto.featuredImage,

            featuredImagePublicId:
                dto.featuredImagePublicId,

            heroImage:
                dto.heroImage,

            heroImagePublicId:
                dto.heroImagePublicId,


            /* ------------------------------------------------------------------ */
            /* Capacity                                                            */
            /* ------------------------------------------------------------------ */

            seatingCapacity:
                dto.seatingCapacity,

            luggageCapacity:
                dto.luggageCapacity,


            /* ------------------------------------------------------------------ */
            /* Customer / Market Tariff                                            */
            /* ------------------------------------------------------------------ */

            customerBaseRate:
                dto.customerBaseRate,

            customerBaseKm:
                dto.customerBaseKm,

            customerExtraKmRate:
                dto.customerExtraKmRate,

            customerDriverBata:
                dto.customerDriverBata,

            customerOvertimeRate:
                dto.customerOvertimeRate,


            /* ------------------------------------------------------------------ */
            /* Ezora B2B / Procurement                                             */
            /* ------------------------------------------------------------------ */

            b2bBaseRate:
                dto.b2bBaseRate,

            b2bBaseKm:
                dto.b2bBaseKm,

            b2bExtraKmRate:
                dto.b2bExtraKmRate,

            b2bDriverBata:
                dto.b2bDriverBata,

            b2bOvertimeRate:
                dto.b2bOvertimeRate,


            /* ------------------------------------------------------------------ */
            /* Operating Rules                                                     */
            /* ------------------------------------------------------------------ */

            dutyStartTime:
                dto.dutyStartTime,

            dutyEndTime:
                dto.dutyEndTime,

            fuelIncluded:
                dto.fuelIncluded,

            tollTreatment:
                dto.tollTreatment,

            parkingTreatment:
                dto.parkingTreatment,

            ferryTreatment:
                dto.ferryTreatment,

            driverAccommodationTreatment:
                dto.driverAccommodationTreatment,


            /* ------------------------------------------------------------------ */
            /* Vehicle Specifications                                              */
            /* ------------------------------------------------------------------ */

            airConditioning:
                dto.airConditioning,

            transmission:
                dto.transmission,

            fuelType:
                dto.fuelType,

            chauffeurDriven:
                dto.chauffeurDriven,


            /* ------------------------------------------------------------------ */
            /* WhatsApp                                                            */
            /* ------------------------------------------------------------------ */

            whatsappMessage:
                dto.whatsappMessage,


            /* ------------------------------------------------------------------ */
            /* Status                                                              */
            /* ------------------------------------------------------------------ */

            isFeatured:
                dto.isFeatured,

            isActive:
                dto.isActive,

            sortOrder:
                dto.sortOrder,


            /* ------------------------------------------------------------------ */
            /* SEO                                                                 */
            /* ------------------------------------------------------------------ */

            seoTitle:
                dto.seoTitle,

            seoDescription:
                dto.seoDescription,


            /* ------------------------------------------------------------------ */
            /* Category                                                            */
            /* ------------------------------------------------------------------ */

            category: {
                connect: {
                    id: dto.categoryId,
                },
            },


            /* ------------------------------------------------------------------ */
            /* Features                                                            */
            /* ------------------------------------------------------------------ */

            features: {
                create: dto.features.map((feature) => ({
                    title: feature.title,
                    sortOrder: feature.sortOrder,
                })),
            },


            /* ------------------------------------------------------------------ */
            /* Specifications                                                      */
            /* ------------------------------------------------------------------ */

            specifications: {
                create: dto.specifications.map((spec) => ({
                    label: spec.label,
                    value: spec.value,
                    sortOrder: spec.sortOrder,
                })),
            },


            /* ------------------------------------------------------------------ */
            /* Gallery                                                             */
            /* ------------------------------------------------------------------ */

            gallery: {
                create: dto.gallery.map((image) => ({
                    image: image.image,
                    publicId: image.publicId,
                    alt: image.alt,
                    sortOrder: image.sortOrder,
                })),
            },
        };

        return VehicleRepository.create(data);
    }


    static async update(
        id: string,
        dto: VehicleDto
    ) {
        const vehicle =
            await VehicleRepository.findById(id);

        if (!vehicle) {
            throw new Error("Vehicle not found");
        }


        /* ---------------------------------------------------------------------- */
        /* Validate category                                                     */
        /* ---------------------------------------------------------------------- */

        const category =
            await FleetCategoryRepository.exists(
                dto.categoryId
            );

        if (!category) {
            throw new Error("Fleet category not found");
        }


        /* ---------------------------------------------------------------------- */
        /* Validate slug                                                         */
        /* ---------------------------------------------------------------------- */

        if (dto.slug !== vehicle.slug) {
            const slugExists =
                await VehicleRepository.findBySlug(
                    dto.slug
                );

            if (slugExists) {
                throw new Error("Slug already exists");
            }
        }


        const data: Prisma.VehicleUpdateInput = {

            /* ------------------------------------------------------------------ */
            /* General Information                                                */
            /* ------------------------------------------------------------------ */

            name: dto.name,
            slug: dto.slug,

            tagline: dto.tagline,

            shortDescription:
                dto.shortDescription,

            description:
                dto.description,


            /* ------------------------------------------------------------------ */
            /* Images                                                              */
            /* ------------------------------------------------------------------ */

            featuredImage:
                dto.featuredImage,

            featuredImagePublicId:
                dto.featuredImagePublicId,

            heroImage:
                dto.heroImage,

            heroImagePublicId:
                dto.heroImagePublicId,


            /* ------------------------------------------------------------------ */
            /* Capacity                                                            */
            /* ------------------------------------------------------------------ */

            seatingCapacity:
                dto.seatingCapacity,

            luggageCapacity:
                dto.luggageCapacity,


            /* ------------------------------------------------------------------ */
            /* Customer / Market Tariff                                            */
            /* ------------------------------------------------------------------ */

            customerBaseRate:
                dto.customerBaseRate,

            customerBaseKm:
                dto.customerBaseKm,

            customerExtraKmRate:
                dto.customerExtraKmRate,

            customerDriverBata:
                dto.customerDriverBata,

            customerOvertimeRate:
                dto.customerOvertimeRate,


            /* ------------------------------------------------------------------ */
            /* Ezora B2B / Procurement                                             */
            /* ------------------------------------------------------------------ */

            b2bBaseRate:
                dto.b2bBaseRate,

            b2bBaseKm:
                dto.b2bBaseKm,

            b2bExtraKmRate:
                dto.b2bExtraKmRate,

            b2bDriverBata:
                dto.b2bDriverBata,

            b2bOvertimeRate:
                dto.b2bOvertimeRate,


            /* ------------------------------------------------------------------ */
            /* Operating Rules                                                     */
            /* ------------------------------------------------------------------ */

            dutyStartTime:
                dto.dutyStartTime,

            dutyEndTime:
                dto.dutyEndTime,

            fuelIncluded:
                dto.fuelIncluded,

            tollTreatment:
                dto.tollTreatment,

            parkingTreatment:
                dto.parkingTreatment,

            ferryTreatment:
                dto.ferryTreatment,

            driverAccommodationTreatment:
                dto.driverAccommodationTreatment,


            /* ------------------------------------------------------------------ */
            /* Vehicle Specifications                                              */
            /* ------------------------------------------------------------------ */

            airConditioning:
                dto.airConditioning,

            transmission:
                dto.transmission,

            fuelType:
                dto.fuelType,

            chauffeurDriven:
                dto.chauffeurDriven,


            /* ------------------------------------------------------------------ */
            /* WhatsApp                                                            */
            /* ------------------------------------------------------------------ */

            whatsappMessage:
                dto.whatsappMessage,


            /* ------------------------------------------------------------------ */
            /* Status                                                              */
            /* ------------------------------------------------------------------ */

            isFeatured:
                dto.isFeatured,

            isActive:
                dto.isActive,

            sortOrder:
                dto.sortOrder,


            /* ------------------------------------------------------------------ */
            /* SEO                                                                 */
            /* ------------------------------------------------------------------ */

            seoTitle:
                dto.seoTitle,

            seoDescription:
                dto.seoDescription,


            /* ------------------------------------------------------------------ */
            /* Category                                                            */
            /* ------------------------------------------------------------------ */

            category: {
                connect: {
                    id: dto.categoryId,
                },
            },
        };


        return VehicleRepository.replaceRelations(
            id,
            data,
            {
                features: dto.features,

                specifications:
                    dto.specifications,

                gallery:
                    dto.gallery,
            }
        );
    }

    static async delete(id: string) {
        const vehicle = await VehicleRepository.findById(id);

        if (!vehicle) {
            throw new Error("Vehicle not found");
        }

        return VehicleRepository.delete(id);
    }
}