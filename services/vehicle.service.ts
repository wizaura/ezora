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

    static async create(dto: VehicleDto) {
        const slugExists = await VehicleRepository.findBySlug(dto.slug);

        if (slugExists) {
            throw new Error("Slug already exists");
        }

        const category = await FleetCategoryRepository.exists(dto.categoryId);

        if (!category) {
            throw new Error("Fleet category not found");
        }

        const data: Prisma.VehicleCreateInput = {
            name: dto.name,
            slug: dto.slug,

            tagline: dto.tagline,

            shortDescription: dto.shortDescription,
            description: dto.description,

            featuredImage: dto.featuredImage,
            featuredImagePublicId: dto.featuredImagePublicId,

            heroImage: dto.heroImage,
            heroImagePublicId: dto.heroImagePublicId,

            seatingCapacity: dto.seatingCapacity,
            luggageCapacity: dto.luggageCapacity,

            airConditioning: dto.airConditioning,
            transmission: dto.transmission,
            fuelType: dto.fuelType,

            chauffeurDriven: dto.chauffeurDriven,

            whatsappMessage: dto.whatsappMessage,

            isFeatured: dto.isFeatured,
            isActive: dto.isActive,

            sortOrder: dto.sortOrder,

            seoTitle: dto.seoTitle,
            seoDescription: dto.seoDescription,

            category: {
                connect: {
                    id: dto.categoryId,
                },
            },

            features: {
                create: dto.features.map((feature) => ({
                    title: feature.title,
                    sortOrder: feature.sortOrder,
                })),
            },

            specifications: {
                create: dto.specifications.map((spec) => ({
                    label: spec.label,
                    value: spec.value,
                    sortOrder: spec.sortOrder,
                })),
            },

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

    static async update(id: string, dto: VehicleDto) {
        const vehicle = await VehicleRepository.findById(id);

        if (!vehicle) {
            throw new Error("Vehicle not found");
        }

        const category = await FleetCategoryRepository.exists(dto.categoryId);

        if (!category) {
            throw new Error("Fleet category not found");
        }

        if (dto.slug !== vehicle.slug) {
            const slugExists = await VehicleRepository.findBySlug(dto.slug);

            if (slugExists) {
                throw new Error("Slug already exists");
            }
        }

        const data: Prisma.VehicleUpdateInput = {
            name: dto.name,
            slug: dto.slug,

            tagline: dto.tagline,

            shortDescription: dto.shortDescription,
            description: dto.description,

            featuredImage: dto.featuredImage,
            heroImage: dto.heroImage,

            seatingCapacity: dto.seatingCapacity,
            luggageCapacity: dto.luggageCapacity,

            airConditioning: dto.airConditioning,
            transmission: dto.transmission,
            fuelType: dto.fuelType,

            chauffeurDriven: dto.chauffeurDriven,

            whatsappMessage: dto.whatsappMessage,

            isFeatured: dto.isFeatured,
            isActive: dto.isActive,

            sortOrder: dto.sortOrder,

            seoTitle: dto.seoTitle,
            seoDescription: dto.seoDescription,

            category: {
                connect: {
                    id: dto.categoryId,
                },
            },
        };

        return VehicleRepository.replaceRelations(id, data, {
            features: dto.features,
            specifications: dto.specifications,
            gallery: dto.gallery,
        });
    }

    static async delete(id: string) {
        const vehicle = await VehicleRepository.findById(id);

        if (!vehicle) {
            throw new Error("Vehicle not found");
        }

        return VehicleRepository.delete(id);
    }
}