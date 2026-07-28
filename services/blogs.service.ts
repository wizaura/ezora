import { BlogDto } from "@/validators/blogs.validator";
import { BlogRepository } from "@/repositories/blogs.repository";

export class BlogService {

    static async create(dto: BlogDto) {

        const exists =
            await BlogRepository.slugExists(dto.slug);

        if (exists) {
            throw new Error("A blog with this slug already exists.");
        }

        return BlogRepository.create(dto);
    }

    static async update(
        id: string,
        dto: BlogDto
    ) {

        const blog =
            await BlogRepository.findById(id);

        if (!blog) {
            throw new Error("Blog not found.");
        }

        const slugExists =
            await BlogRepository.slugExists(
                dto.slug,
                id
            );

        if (slugExists) {
            throw new Error("A blog with this slug already exists.");
        }

        return BlogRepository.update(
            id,
            dto
        );
    }

    static async delete(id: string) {

        const blog =
            await BlogRepository.findById(id);

        if (!blog) {
            throw new Error("Blog not found.");
        }

        return BlogRepository.delete(id);
    }

    static async getById(id: string) {

        const blog =
            await BlogRepository.findById(id);

        if (!blog) {
            throw new Error("Blog not found.");
        }

        return blog;
    }

    static async getBySlug(slug: string) {

        const blog =
            await BlogRepository.findBySlug(slug);

        if (!blog) {
            throw new Error("Blog not found.");
        }

        if (!blog.isPublished) {
            throw new Error("Blog is not published.");
        }

        return blog;
    }

    static async getAll() {
        return BlogRepository.findAll();
    }

    static async getPublished() {
        return BlogRepository.findPublished();
    }
}