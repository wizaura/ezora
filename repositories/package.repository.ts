import { Prisma } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import { PackageDto } from "@/validators/package.validator";

interface FindManyOptions {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    featured?: boolean;
}

class PackageRepository {
    async findMany({
        page = 1,
        limit = 10,
        search,
        status,
        featured,
    }: FindManyOptions) {
        const skip = (page - 1) * limit;

        const where: Prisma.PackageWhereInput = {};

        if (search) {
            where.OR = [
                {
                    title: {
                        contains: search,
                        mode: "insensitive",
                    },
                },
                {
                    location: {
                        contains: search,
                        mode: "insensitive",
                    },
                },
            ];
        }

        if (status) {
            where.status = status as any;
        }

        if (featured !== undefined) {
            where.featured = featured;
        }

        const [items, total] = await prisma.$transaction([
            prisma.package.findMany({
                where,
                include: {
                    images: true,
                },
                orderBy: [
                    {
                        featured: "desc",
                    },
                    {
                        createdAt: "desc",
                    },
                ],
                skip,
                take: limit,
            }),

            prisma.package.count({
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

    async findById(id: string) {
        return prisma.package.findUnique({
            where: {
                id,
            },
            include: {
                images: {
                    orderBy: {
                        order: "asc",
                    },
                },
                details: true,
            },
        });
    }

    async findBySlug(slug: string) {
        return prisma.package.findUnique({
            where: {
                slug,
            },
        });
    }

    async create(dto: PackageDto) {
        return prisma.package.create({
            data: {
                title: dto.title,
                slug: dto.slug,
                shortDescription: dto.shortDescription,
                description: dto.description,
                location: dto.location,
                duration: dto.duration,
                days: dto.days,
                nights: dto.nights,
                startingPrice: dto.startingPrice,
                featured: dto.featured,
                status: dto.status,

                images: {
                    create: dto.images.map((image) => ({
                        imageUrl: image.imageUrl,
                        publicId: image.publicId,
                        alt: image.alt,
                        order: image.sortOrder,
                    })),
                },

                details: {
                    create: {
                        itinerary: dto.itinerary,
                        highlights: dto.highlights,
                        inclusions: dto.inclusions,
                        exclusions: dto.exclusions,
                        faqs: dto.faqs,
                    },
                },
            },
            include: {
                images: true,
                details: true,
            },
        });
    }

    async update(
        id: string,
        dto: PackageDto
    ) {
        return prisma.package.update({
            where: {
                id,
            },
            data: {
                title: dto.title,
                slug: dto.slug,
                shortDescription: dto.shortDescription,
                description: dto.description,
                location: dto.location,
                duration: dto.duration,
                days: dto.days,
                nights: dto.nights,
                startingPrice: dto.startingPrice,
                featured: dto.featured,
                status: dto.status,

                images: {
                    deleteMany: {},
                    create: dto.images.map((image) => ({
                        imageUrl: image.imageUrl,
                        publicId: image.publicId,
                        alt: image.alt,
                        order: image.sortOrder,
                    })),
                },

                details: {
                    upsert: {
                        create: {
                            itinerary: dto.itinerary,
                            highlights: dto.highlights,
                            inclusions: dto.inclusions,
                            exclusions: dto.exclusions,
                            faqs: dto.faqs,
                        },
                        update: {
                            itinerary: dto.itinerary,
                            highlights: dto.highlights,
                            inclusions: dto.inclusions,
                            exclusions: dto.exclusions,
                            faqs: dto.faqs,
                        },
                    },
                },
            },
            include: {
                images: true,
                details: true,
            },
        });
    }

    async delete(id: string) {
        return prisma.package.delete({
            where: {
                id,
            },
        });
    }

    async updateStatus(
        id: string,
        status: Prisma.PackageStatus
    ) {
        return prisma.package.update({
            where: {
                id,
            },
            data: {
                status,
            },
        });
    }

    async toggleFeatured(
        id: string,
        featured: boolean
    ) {
        return prisma.package.update({
            where: {
                id,
            },
            data: {
                featured,
            },
        });
    }
}

export const packageRepository =
    new PackageRepository();