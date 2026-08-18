"use client";

import EmptyBlogs from "./EmptyBlogs";
import BlogCard from "./BlogCard";
import { useRouter } from "next/navigation";

interface Blog {
    id: string; 
    title: string;
    slug: string;
    excerpt: string;
    featuredImage?: string | null;
    isPublished: boolean;
    createdAt: Date | string;
    category?: string;
}

interface BlogGridProps {
    blogs: Blog[];
}

export default function BlogGrid({
    blogs,
}: BlogGridProps) {

    const router = useRouter();

    const handleDelete = async (
        id: string
    ) => {

        const response = await fetch(
            `/api/admin/blogs/${id}`,
            {
                method: "DELETE",
            }
        );

        if (!response.ok) {
            throw new Error(
                "Failed to delete blog"
            );
        }

        // Refresh list
        router.refresh();
    };

    if (!blogs.length) {
        return <EmptyBlogs />;
    }

    return (
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog) => (
                <BlogCard
                    key={blog.id}
                    blog={blog}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
}