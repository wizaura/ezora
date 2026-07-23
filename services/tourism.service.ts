// services/tourism.service.ts

import { TourismDto } from "@/validators/tourism.validator";
import { tourismRepository } from "@/repositories/tourism.repository";
import { tourismCategoryRepository } from "@/repositories/tourism-category.repository";
import cloudinary from "@/lib/cloudinary";
import { KeralaDistrict } from "@prisma/client";

class TourismService {
    async list(params: {
        page?: number;
        limit?: number;
        search?: string;
        categoryId?: string;
        district?: KeralaDistrict;
        featured?: boolean;
        published?: boolean;
    }) {
        return tourismRepository.findMany(params);
    }

    async getById(id: string) {
        const guide = await tourismRepository.findById(id);

        if (!guide) {
            throw new Error("Tourism guide not found.");
        }

        return guide;
    }

    async create(dto: TourismDto) {
        const existingSlug = await tourismRepository.findBySlug(dto.slug);

        if (existingSlug) {
            throw new Error("A guide with this slug already exists.");
        }

        const category =
            await tourismCategoryRepository.findById(dto.categoryId);

        if (!category) {
            throw new Error("Tourism category not found.");
        }

        return tourismRepository.create(dto);
    }

    async update(id: string, dto: TourismDto) {
        const guide = await tourismRepository.findById(id);

        if (!guide) {
            throw new Error("Tourism guide not found.");
        }

        const category =
            await tourismCategoryRepository.findById(dto.categoryId);

        if (!category) {
            throw new Error("Tourism category not found.");
        }

        const existingSlug = await tourismRepository.findBySlug(dto.slug);

        if (existingSlug && existingSlug.id !== id) {
            throw new Error("Slug already exists.");
        }

        /*
         * Delete replaced featured image
         */
        if (
            guide.featuredImagePublicId &&
            guide.featuredImagePublicId !== dto.featuredImagePublicId
        ) {
            await cloudinary.uploader.destroy(
                guide.featuredImagePublicId
            );
        }

        /*
         * Delete removed gallery images
         */
        const incomingPublicIds = dto.gallery.map(
            (g) => g.imagePublicId
        );

        const removedImages = guide.gallery.filter(
            (g) => !incomingPublicIds.includes(g.imagePublicId)
        );

        for (const image of removedImages) {
            await cloudinary.uploader.destroy(
                image.imagePublicId
            );
        }

        return tourismRepository.update(id, dto);
    }

    async delete(id: string) {
        const guide = await tourismRepository.findById(id);

        if (!guide) {
            throw new Error("Tourism guide not found.");
        }

        if (guide.featuredImagePublicId) {
            await cloudinary.uploader.destroy(
                guide.featuredImagePublicId
            );
        }

        for (const image of guide.gallery) {
            await cloudinary.uploader.destroy(
                image.imagePublicId
            );
        }

        return tourismRepository.delete(id);
    }
}

export const tourismService = new TourismService();