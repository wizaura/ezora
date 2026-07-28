import Link from "next/link";
import { FileText, Plus } from "lucide-react";

export default function EmptyBlogs() {
    return (
        <div
            className="
                flex
                flex-col
                items-center
                justify-center

                rounded-3xl

                border
                border-dashed
                border-border

                bg-white

                px-8
                py-24

                text-center
            "
        >
            <div
                className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center

                    rounded-3xl

                    bg-brand/10
                "
            >
                <FileText className="h-10 w-10 text-brand" />
            </div>

            <h2 className="mt-8 text-2xl font-semibold text-dark-cerulean">
                No blogs yet
            </h2>

            <p className="mt-3 max-w-lg text-muted">
                Start publishing travel guides, destination stories,
                Kerala tourism updates and SEO content to engage
                your visitors.
            </p>

            <Link
                href="/admin/blogs/new"
                className="
                    mt-8

                    inline-flex
                    items-center
                    gap-2

                    rounded-2xl

                    bg-brand

                    px-6
                    py-3

                    font-medium
                    text-white

                    transition

                    hover:-translate-y-0.5
                    hover:shadow-lg
                "
            >
                <Plus className="h-5 w-5" />

                Create First Blog
            </Link>
        </div>
    );
}