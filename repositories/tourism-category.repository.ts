import { Prisma } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import { TourismCategoryDto } from "@/validators/tourism-category.validator";

interface FindManyOptions {
    page?: number;
    limit?: number;
    search?: string;
    active?: boolean;
}

class TourismCategoryRepository {
    async findMany({
        page = 1,
        limit = 10,
        search,
        active,
    }: FindManyOptions) {
        const skip = (page - 1) * limit;

        const where: Prisma.TourismCategoryWhereInput = {};

        if (search) {
            where.OR = [
                {
                    name: {
                        contains: search,
                        mode: "insensitive",
                    },
                },
                {
                    description: {
                        contains: search,
                        mode: "insensitive",
                    },
                },
            ];
        }

        if (active !== undefined) {
            where.isActive = active;
        }

        const [items, total] = await prisma.$transaction([
            prisma.tourismCategory.findMany({
                where,
                include: {
                    _count: {
                        select: {
                            guides: true,
                        },
                    },
                },
                orderBy: [
                    {
                        sortOrder: "asc",
                    },
                    {
                        createdAt: "desc",
                    },
                ],
                skip,
                take: limit,
            }),

            prisma.tourismCategory.count({
                where,
            }),
        ]);

        return {
            items,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }

    async findAllActive() {
        return prisma.tourismCategory.findMany({
            where: {
                isActive: true,
            },
            orderBy: [
                {
                    sortOrder: "asc",
                },
                {
                    name: "asc",
                },
            ],
        });
    }

    async findById(id: string) {
        return prisma.tourismCategory.findUnique({
            where: {
                id,
            },
            include: {
                _count: {
                    select: {
                        guides: true,
                    },
                },
            },
        });
    }

    async findBySlug(slug: string) {
        return prisma.tourismCategory.findUnique({
            where: {
                slug,
            },
        });
    }

    async create(dto: TourismCategoryDto) {
        return prisma.tourismCategory.create({
            data: {
                name: dto.name,
                slug: dto.slug,
                description: dto.description,

                featuredImage: dto.featuredImage,
                featuredImagePublicId:
                    dto.featuredImagePublicId,

                sortOrder: dto.sortOrder,
                isActive: dto.isActive,
            },
        });
    }

    async update(
        id: string,
        dto: TourismCategoryDto
    ) {
        return prisma.tourismCategory.update({
            where: {
                id,
            },
            data: {
                name: dto.name,
                slug: dto.slug,
                description: dto.description,

                featuredImage: dto.featuredImage,
                featuredImagePublicId:
                    dto.featuredImagePublicId,

                sortOrder: dto.sortOrder,
                isActive: dto.isActive,
            },
        });
    }

    async delete(id: string) {
        return prisma.tourismCategory.delete({
            where: {
                id,
            },
        });
    }
}

export const tourismCategoryRepository =
    new TourismCategoryRepository();