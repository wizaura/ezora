import { Prisma, KeralaDistrict } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { TourismDto } from "@/validators/tourism.validator";

interface FindManyOptions {
    page?: number;
    limit?: number;
    search?: string;
    categoryId?: string;
    district?: KeralaDistrict;
    featured?: boolean;
    published?: boolean;
}

export class TourismRepository {
    async findMany({
        page = 1,
        limit = 10,
        search,
        categoryId,
        district,
        featured,
        published,
    }: FindManyOptions) {
        const skip = (page - 1) * limit;

        const where: Prisma.TourismGuideWhereInput = {};

        if (search) {
            where.OR = [
                {
                    title: {
                        contains: search,
                        mode: "insensitive",
                    },
                },
                {
                    excerpt: {
                        contains: search,
                        mode: "insensitive",
                    },
                },
                {
                    tags: {
                        has: search,
                    },
                },
            ];
        }

        if (categoryId) {
            where.categoryId = categoryId;
        }

        if (district) {
            where.district = district;
        }

        if (featured !== undefined) {
            where.isFeatured = featured;
        }

        if (published !== undefined) {
            where.isPublished = published;
        }

        const [items, total] = await prisma.$transaction([
            prisma.tourismGuide.findMany({
                where,
                include: {
                    category: true,
                    gallery: {
                        orderBy: {
                            sortOrder: "asc",
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

            prisma.tourismGuide.count({
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
        return prisma.tourismGuide.findUnique({
            where: {
                id,
            },
            include: {
                category: true,
                gallery: {
                    orderBy: {
                        sortOrder: "asc",
                    },
                },
            },
        });
    }

    async findPublished() {
        return prisma.tourismGuide.findMany({
            where: {
                isPublished: true,
            },
            select: {
                id: true,
                title: true,
                slug: true,
                excerpt: true,
                featuredImage: true,
                district: true,
                bestTimeToVisit: true,
                duration: true,
                isFeatured: true,
                category: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
            },
            orderBy: [
                { isFeatured: "desc" },
                { sortOrder: "asc" },
            ],
        });
    }

    async findBySlug(slug: string) {
        return prisma.tourismGuide.findUnique({
            where: {
                slug,
            },
            include: {
                category: true,
                gallery: {
                    orderBy: {
                        sortOrder: "asc",
                    },
                },
            }
        });
    }

    async findRelated(categoryId: string, guideId: string) {
        return prisma.tourismGuide.findMany({
            where: {
                categoryId,
                isPublished: true,
                NOT: {
                    id: guideId,
                },
            },
            take: 3,
            orderBy: [
                {
                    isFeatured: "desc",
                },
                {
                    sortOrder: "asc",
                },
            ],
            select: {
                id: true,
                slug: true,
                title: true,
                excerpt: true,
                featuredImage: true,
                district: true,
                category: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
            },
        })
    }

    async findByCategorySlug(slug: string) {
        return prisma.tourismGuide.findMany({
            where: {
                isPublished: true,
                category: {
                    slug,
                },
            },
            select: {
                id: true,
                title: true,
                slug: true,
                excerpt: true,
                featuredImage: true,
                district: true,
                bestTimeToVisit: true,
                duration: true,
                isFeatured: true,
                category: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
            },
            orderBy: [
                {
                    isFeatured: "desc",
                },
                {
                    sortOrder: "asc",
                },
            ],
        });
    }

    async findByDistrict(district: KeralaDistrict) {
        return prisma.tourismGuide.findMany({
            where: {
                district,
                isPublished: true,
            },
            orderBy: {
                sortOrder: "asc",
            },
            select: {
                id: true,
                title: true,
                slug: true,
                excerpt: true,
                featuredImage: true,
                address: true,
                duration: true,
                district: true,
                category: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
            },
        });
    }

    async create(dto: TourismDto) {
        return prisma.tourismGuide.create({
            data: {
                title: dto.title,
                slug: dto.slug,

                categoryId: dto.categoryId,

                district: dto.district,

                excerpt: dto.excerpt,
                content: dto.content,

                featuredImage: dto.featuredImage,
                featuredImagePublicId:
                    dto.featuredImagePublicId,

                latitude:
                    dto.latitude != null
                        ? new Prisma.Decimal(dto.latitude)
                        : null,

                longitude:
                    dto.longitude != null
                        ? new Prisma.Decimal(dto.longitude)
                        : null,

                address: dto.address,

                bestTimeToVisit: dto.bestTimeToVisit,

                openingHours: dto.openingHours,

                entryFee: dto.entryFee,

                duration: dto.duration,

                mapUrl: dto.mapUrl,

                tags: dto.tags,

                isFeatured: dto.isFeatured,
                isPublished: dto.isPublished,

                sortOrder: dto.sortOrder,

                seoTitle: dto.seoTitle,
                seoDescription: dto.seoDescription,

                gallery: {
                    create: dto.gallery.map((image) => ({
                        image: image.image,
                        imagePublicId:
                            image.imagePublicId,
                        alt: image.alt,
                        sortOrder: image.sortOrder,
                    })),
                },
            },
            include: {
                category: true,
                gallery: true,
            },
        });
    }

    async update(id: string, dto: TourismDto) {
        return prisma.tourismGuide.update({
            where: {
                id,
            },
            data: {
                title: dto.title,
                slug: dto.slug,

                categoryId: dto.categoryId,

                district: dto.district,

                excerpt: dto.excerpt,
                content: dto.content,

                featuredImage: dto.featuredImage,
                featuredImagePublicId:
                    dto.featuredImagePublicId,

                latitude: dto.latitude,
                longitude: dto.longitude,

                address: dto.address,

                bestTimeToVisit: dto.bestTimeToVisit,

                openingHours: dto.openingHours,

                entryFee: dto.entryFee,

                duration: dto.duration,

                mapUrl: dto.mapUrl,

                tags: dto.tags,

                isFeatured: dto.isFeatured,
                isPublished: dto.isPublished,

                sortOrder: dto.sortOrder,

                seoTitle: dto.seoTitle,
                seoDescription: dto.seoDescription,

                gallery: {
                    deleteMany: {},

                    create: dto.gallery.map((image) => ({
                        image: image.image,
                        imagePublicId:
                            image.imagePublicId,
                        alt: image.alt,
                        sortOrder: image.sortOrder,
                    })),
                },
            },
            include: {
                category: true,
                gallery: true,
            },
        });
    }

    async delete(id: string) {
        return prisma.tourismGuide.delete({
            where: {
                id,
            },
        });
    }
}

export const tourismRepository = new TourismRepository();