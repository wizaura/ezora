import BlogForm from "@/components/admin/blogs/BlogForm";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditBlogPage({
    params,
}: PageProps) {
    const { id } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/blogs/${id}`,
        {
            cache: "no-store",
        }
    );

    if (res.status === 404) {
        notFound();
    }

    if (!res.ok) {
        throw new Error("Failed to fetch blog");
    }

    const { data: blog } = await res.json();

    return (
        <BlogForm
            mode="edit"
            initialData={blog}
        />
    );
}