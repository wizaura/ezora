import cloudinary from "@/lib/cloudinary";
import { AppError } from "@/lib/errors";

import { tourismCategoryRepository } from "@/repositories/tourism-category.repository";
import { TourismCategoryDto } from "@/validators/tourism-category.validator";

class TourismCategoryService {
    async list(params: {
        page?: number;
        limit?: number;
        search?: string;
        active?: boolean;
    }) {
        return tourismCategoryRepository.findMany(params);
    }

    async getById(id: string) {
        const category = await tourismCategoryRepository.findById(id);

        if (!category) {
            throw new AppError(
                "Category not found.",
                404,
                "CATEGORY_NOT_FOUND"
            );
        }

        return category;
    }

    async getAllActive() {
        return tourismCategoryRepository.findAllActive();
    }

    async create(dto: TourismCategoryDto) {
        const existing = await tourismCategoryRepository.findBySlug(
            dto.slug
        );

        if (existing) {
            throw new AppError(
                "Slug already exists.",
                409,
                "SLUG_ALREADY_EXISTS"
            );
        }

        return tourismCategoryRepository.create(dto);
    }

    async update(
        id: string,
        dto: TourismCategoryDto
    ) {
        const category =
            await tourismCategoryRepository.findById(id);

        if (!category) {
            throw new AppError(
                "Category not found.",
                404,
                "CATEGORY_NOT_FOUND"
            );
        }

        const slug =
            await tourismCategoryRepository.findBySlug(
                dto.slug
            );

        if (slug && slug.id !== id) {
            throw new AppError(
                "Slug already exists.",
                409,
                "SLUG_ALREADY_EXISTS"
            );
        }

        if (
            category.featuredImagePublicId &&
            category.featuredImagePublicId !==
                dto.featuredImagePublicId
        ) {
            await cloudinary.uploader.destroy(
                category.featuredImagePublicId
            );
        }

        return tourismCategoryRepository.update(
            id,
            dto
        );
    }

    async delete(id: string) {
        const category =
            await tourismCategoryRepository.findById(id);

        if (!category) {
            throw new AppError(
                "Category not found.",
                404,
                "CATEGORY_NOT_FOUND"
            );
        }

        if (category._count.guides > 0) {
            throw new AppError(
                "This category contains tourism guides.",
                400,
                "CATEGORY_IN_USE"
            );
        }

        if (category.featuredImagePublicId) {
            await cloudinary.uploader.destroy(
                category.featuredImagePublicId
            );
        }

        return tourismCategoryRepository.delete(id);
    }
}

export const tourismCategoryService =
    new TourismCategoryService();