"use client";

import dynamic from "next/dynamic";
import type { BlogFormData } from "./BlogForm";
import FeaturedImageUploader from "./FeaturedImageUploader";

const BlogEditor = dynamic(
    () => import("./BlogEditor"),
    {
        ssr: false,
    }
);

interface Props {
    form: BlogFormData;
    onChange: React.Dispatch<
        React.SetStateAction<BlogFormData>
    >;
}

export default function BlogContent({
    form,
    onChange,
}: Props) {
    function handleImageUpload(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        const file = e.target.files?.[0];

        if (!file) return;

        onChange({
            ...form,
            featuredImage: URL.createObjectURL(file),
        });
    }

    return (
        <div className="space-y-6 rounded-3xl border border-border bg-white p-8 shadow-sm">

            {/* Featured Image */}

            <FeaturedImageUploader
                form={form}
                setForm={onChange}
            />

            {/* Title */}

            <div>
                <label className="mb-2 block text-sm font-semibold">
                    Blog Title
                </label>

                <input
                    value={form.title}
                    onChange={(e) =>
                        onChange({
                            ...form,
                            title: e.target.value,
                        })
                    }
                    placeholder="Exploring Munnar During Monsoon"
                    className="
                        w-full
                        rounded-2xl
                        border
                        border-border
                        px-4
                        py-3
                        outline-none
                        transition
                        focus:border-brand
                    "
                />
            </div>

            {/* Slug */}

            <div>
                <label className="mb-2 block text-sm font-semibold">
                    URL Slug
                </label>

                <input
                    value={form.slug}
                    onChange={(e) =>
                        onChange({
                            ...form,
                            slug: e.target.value,
                        })
                    }
                    placeholder="exploring-munnar-during-monsoon"
                    className="
                        w-full
                        rounded-2xl
                        border
                        border-border
                        px-4
                        py-3
                        outline-none
                        transition
                        focus:border-brand
                    "
                />

                <p className="mt-2 text-xs text-muted">
                    https://ezoratours.com/blogs/
                    <span className="font-medium text-dark-cerulean">
                        {form.slug || "your-blog-slug"}
                    </span>
                </p>
            </div>

            {/* Category */}

            <div>
                <label className="mb-2 block text-sm font-semibold">
                    Category
                </label>

                <select
                    value={form.category}
                    onChange={(e) =>
                        onChange({
                            ...form,
                            category: e.target.value,
                        })
                    }
                    className="
                        w-full
                        rounded-2xl
                        border
                        border-border
                        px-4
                        py-3
                        outline-none
                        transition
                        focus:border-brand
                    "
                >
                    <option value="">
                        Select Category
                    </option>

                    <option value="Travel Guides">
                        Travel Guides
                    </option>

                    <option value="Kerala Tourism">
                        Kerala Tourism
                    </option>

                    <option value="Destination Guides">
                        Destination Guides
                    </option>

                    <option value="Travel Tips">
                        Travel Tips
                    </option>

                    <option value="News">
                        News
                    </option>
                </select>
            </div>

            {/* Excerpt */}

            <div>
                <label className="mb-2 block text-sm font-semibold">
                    Short Description
                </label>

                <textarea
                    rows={4}
                    value={form.excerpt}
                    onChange={(e) =>
                        onChange({
                            ...form,
                            excerpt: e.target.value,
                        })
                    }
                    placeholder="Write a short summary..."
                    className="
                        w-full
                        rounded-2xl
                        border
                        border-border
                        px-4
                        py-3
                        outline-none
                        transition
                        focus:border-brand
                    "
                />
            </div>

            {/* Editor */}

            <div>
                <label className="mb-3 block text-sm font-semibold">
                    Blog Content
                </label>

                <div className="overflow-hidden rounded-2xl border border-border">
                    <BlogEditor
                        value={form.content}
                        onChange={(value) =>
                            onChange({
                                ...form,
                                content: value,
                            })
                        }
                    />
                </div>
            </div>

        </div>
    );
}