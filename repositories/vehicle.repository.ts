import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export class VehicleRepository {
    static async findMany({
        page = 1,
        limit = 10,
        search,
        categoryId,
        isActive,
        isFeatured,
    }: {
        page?: number;
        limit?: number;
        search?: string;
        categoryId?: string;
        isActive?: boolean;
        isFeatured?: boolean;
    }) {
        const where: Prisma.VehicleWhereInput = {
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

            ...(categoryId && {
                categoryId,
            }),

            ...(isActive !== undefined && {
                isActive,
            }),

            ...(isFeatured !== undefined && {
                isFeatured,
            }),
        };

        const [items, total] = await prisma.$transaction([
            prisma.vehicle.findMany({
                where,

                include: {
                    category: true,

                    _count: {
                        select: {
                            gallery: true,
                            features: true,
                            specifications: true,
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

                skip: (page - 1) * limit,

                take: limit,
            }),

            prisma.vehicle.count({
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

    static async findById(id: string) {
        return prisma.vehicle.findUnique({
            where: {
                id,
            },

            include: {
                category: true,

                features: {
                    orderBy: {
                        sortOrder: "asc",
                    },
                },

                specifications: {
                    orderBy: {
                        sortOrder: "asc",
                    },
                },

                gallery: {
                    orderBy: {
                        sortOrder: "asc",
                    },
                },
            },
        });
    }

    static async findBySlug(slug: string) {
        return prisma.vehicle.findUnique({
            where: {
                slug,
            },
        });
    }

    static async create(data: Prisma.VehicleCreateInput) {
        return prisma.vehicle.create({
            data,

            include: {
                category: true,

                features: true,

                specifications: true,

                gallery: true,
            },
        });
    }

    static async update(
        id: string,
        data: Prisma.VehicleUpdateInput
    ) {
        return prisma.vehicle.update({
            where: {
                id,
            },

            data,

            include: {
                category: true,

                features: true,

                specifications: true,

                gallery: true,
            },
        });
    }

    static async delete(id: string) {
        return prisma.vehicle.delete({
            where: {
                id,
            },
        });
    }

    static async replaceRelations(
        id: string,
        data: Prisma.VehicleUpdateInput,
        dto: {
            features: {
                title: string;
                sortOrder: number;
            }[];
            specifications: {
                label: string;
                value: string;
                sortOrder: number;
            }[];
            gallery: {
                image: string;
                publicId: string;
                alt?: string;
                sortOrder: number;
            }[];
        }
    ) {
        return prisma.$transaction(async (tx) => {
            const vehicle = await tx.vehicle.update({
                where: {
                    id,
                },
                data,
            });

            await tx.vehicleFeature.deleteMany({
                where: {
                    vehicleId: id,
                },
            });

            await tx.vehicleSpecification.deleteMany({
                where: {
                    vehicleId: id,
                },
            });

            await tx.vehicleImage.deleteMany({
                where: {
                    vehicleId: id,
                },
            });

            if (dto.features.length) {
                await tx.vehicleFeature.createMany({
                    data: dto.features.map((f) => ({
                        vehicleId: id,
                        title: f.title,
                        sortOrder: f.sortOrder,
                    })),
                });
            }

            if (dto.specifications.length) {
                await tx.vehicleSpecification.createMany({
                    data: dto.specifications.map((s) => ({
                        vehicleId: id,
                        label: s.label,
                        value: s.value,
                        sortOrder: s.sortOrder,
                    })),
                });
            }

            if (dto.gallery.length) {
                await tx.vehicleImage.createMany({
                    data: dto.gallery.map((g) => ({
                        vehicleId: id,
                        image: g.image,
                        publicId: g.publicId,
                        alt: g.alt,
                        sortOrder: g.sortOrder,
                    })),
                });
            }

            return tx.vehicle.findUnique({
                where: {
                    id,
                },
                include: {
                    category: true,
                    features: true,
                    specifications: true,
                    gallery: true,
                },
            });
        });
    }
}