import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export class FleetCategoryRepository {

    static async exists(id: string) {
        return prisma.fleetCategory.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
            },
        });
    }

    static async findMany({
        page = 1,
        limit = 10,
        search,
    }: {
        page?: number;
        limit?: number;
        search?: string;
    }) {
        const where: Prisma.FleetCategoryWhereInput = {
            ...(search && {
                OR: [
                    {
                        name: {
                            contains: search,
                            mode: "insensitive",
                        },
                    },
                    {
                        slug: {
                            contains: search,
                            mode: "insensitive",
                        },
                    },
                ],
            }),
        };

        const [items, total] = await prisma.$transaction([
            prisma.fleetCategory.findMany({
                where,
                include: {
                    _count: {
                        select: {
                            vehicles: true,
                        },
                    },
                },
                skip: (page - 1) * limit,
                take: limit,
                orderBy: [
                    {
                        sortOrder: "asc",
                    },
                    {
                        createdAt: "desc",
                    },
                ],
            }),

            prisma.fleetCategory.count({
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

    static findById(id: string) {
        return prisma.fleetCategory.findUnique({
            where: {
                id,
            },
            include: {
                vehicles: {
                    orderBy: {
                        sortOrder: "asc",
                    },
                },
            },
        });
    }

    static findBySlug(slug: string) {
        return prisma.fleetCategory.findUnique({
            where: {
                slug,
            },
        });
    }

    static create(data: Prisma.FleetCategoryCreateInput) {
        return prisma.fleetCategory.create({
            data,
        });
    }

    static update(
        id: string,
        data: Prisma.FleetCategoryUpdateInput
    ) {
        return prisma.fleetCategory.update({
            where: {
                id,
            },
            data,
        });
    }

    static delete(id: string) {
        return prisma.fleetCategory.delete({
            where: {
                id,
            },
        });
    }
}