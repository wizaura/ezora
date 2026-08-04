import { prisma } from "@/lib/prisma";
import { BlogDto } from "@/validators/blogs.validator";

export class BlogRepository {

    static async create(dto: BlogDto) {
        return prisma.blog.create({
            data: {
                title: dto.title,
                slug: dto.slug,
                excerpt: dto.excerpt,
                content: dto.content,

                category: dto.category,

                featuredImage: dto.featuredImage,
                featuredImagePublicId:
                    dto.featuredImagePublicId,
                seoTitle: dto.seoTitle,
                seoDescription: dto.seoDescription,

                isPublished: dto.isPublished,
            },
        });
    }

    static async update(
        id: string,
        dto: BlogDto
    ) {
        return prisma.blog.update({
            where: {
                id,
            },
            data: {
                title: dto.title,
                slug: dto.slug,
                excerpt: dto.excerpt,
                content: dto.content,

                category: dto.category,

                featuredImage: dto.featuredImage,
                featuredImagePublicId:
                    dto.featuredImagePublicId,
                seoTitle: dto.seoTitle,
                seoDescription: dto.seoDescription,

                isPublished: dto.isPublished,
            },
        });
    }

    static async delete(id: string) {
        return prisma.blog.delete({
            where: {
                id,
            },
        });
    }

    static async findById(id: string) {
        return prisma.blog.findUnique({
            where: {
                id,
            },
        });
    }

    static async findBySlug(slug: string) {
        return prisma.blog.findUnique({
            where: {
                slug,
            },
        });
    }

    static async findAll() {
        return prisma.blog.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    static async findPublished(params?: {
        page?: number;
        limit?: number;
    }) {
        const page = params?.page ?? 1;
        const limit = params?.limit ?? 9;

        const [blogs, total] = await Promise.all([
            prisma.blog.findMany({
                where: {
                    isPublished: true,
                },
                orderBy: {
                    createdAt: "desc",
                },
                skip: (page - 1) * limit,
                take: limit,
            }),

            prisma.blog.count({
                where: {
                    isPublished: true,
                },
            }),
        ]);

        return {
            blogs,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
                hasNext: page < Math.ceil(total / limit),
                hasPrevious: page > 1,
            },
        };
    }

    static async findRelated(
        category: string,
        blogId: string
    ) {
        return prisma.blog.findMany({
            where: {
                isPublished: true,
                category,
                NOT: {
                    id: blogId,
                },
            },
            take: 3,
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    static async slugExists(
        slug: string,
        ignoreId?: string
    ) {
        const blog =
            await prisma.blog.findFirst({
                where: {
                    slug,
                    ...(ignoreId && {
                        NOT: {
                            id: ignoreId,
                        },
                    }),
                },
                select: {
                    id: true,
                },
            });

        return !!blog;
    }
}