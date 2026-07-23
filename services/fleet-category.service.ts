import { FleetCategoryDto } from "@/validators/fleet-category.validator";
import { FleetCategoryRepository } from "@/repositories/fleet-category.repository";

export class FleetCategoryService {
    static async getAll(query: {
        page?: number;
        limit?: number;
        search?: string;
    }) {
        return FleetCategoryRepository.findMany(query);
    }

    static async getById(id: string) {
        const category =
            await FleetCategoryRepository.findById(id);

        if (!category) {
            throw new Error("Category not found");
        }

        return category;
    }

    static async create(dto: FleetCategoryDto) {
        const exists =
            await FleetCategoryRepository.findBySlug(dto.slug);

        if (exists) {
            throw new Error("Slug already exists");
        }

        return FleetCategoryRepository.create(dto);
    }

    static async update(
        id: string,
        dto: FleetCategoryDto
    ) {
        const category =
            await FleetCategoryRepository.findById(id);

        if (!category) {
            throw new Error("Category not found");
        }

        return FleetCategoryRepository.update(id, dto);
    }

    static async delete(id: string) {
        const category =
            await FleetCategoryRepository.findById(id);

        if (!category) {
            throw new Error("Category not found");
        }

        return FleetCategoryRepository.delete(id);
    }
}