import { PackageStatus } from "@prisma/client";

import { packageRepository } from "../repositories/package.repository";
import { PackageDto } from "@/validators/package.validator";

interface FindManyOptions {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    featured?: boolean;
}

export class PackageService {
    async findMany(filters: FindManyOptions) {
        return packageRepository.findMany(filters);
    }

    async findById(id: string) {
        const pkg = await packageRepository.findById(id);

        if (!pkg) {
            throw new Error("Package not found.");
        }

        return pkg;
    }

    async findPublished() {
        const packages = await packageRepository.findPublished();

        return packages;
    }

    async findBySlug(slug: string) {
        return packageRepository.findBySlug(slug);
    }

    async create(dto: PackageDto) {
        return packageRepository.create(dto);
    }

    async update(
        id: string,
        dto: PackageDto
    ) {
        return packageRepository.update(id, dto);
    }

    async delete(id: string) {
        return packageRepository.delete(id);
    }

    async updateStatus(
        id: string,
        status: PackageStatus
    ) {
        return packageRepository.updateStatus(
            id,
            status
        );
    }

    async toggleFeatured(
        id: string,
        featured: boolean
    ) {
        return packageRepository.toggleFeatured(
            id,
            featured
        );
    }
}

export const packageService =
    new PackageService();