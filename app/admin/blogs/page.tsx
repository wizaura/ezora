import BlogHeader from "@/components/admin/blogs/BlogHeader";
import BlogFilters from "@/components/admin/blogs/BlogFilters";
import BlogGrid from "@/components/admin/blogs/BlogGrid";

export default async function BlogsPage() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/blogs`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch blogs");
    }

    const { data: blogs } = await res.json();


    return (
        <div className="space-y-8">
            <BlogHeader />

            <BlogFilters />

            <BlogGrid blogs={blogs} />
        </div>
    );
}