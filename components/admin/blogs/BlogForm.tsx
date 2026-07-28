"use client";

import { useMemo, useState } from "react";
import {toast} from "sonner";
import { useRouter } from "next/navigation";

import BlogContent from "./BlogContent";
import PublishCard from "./PublishCard";
import SeoCard from "./SeoCard";    

export interface BlogFormData {
    id?: string;

    title: string;
    slug: string;

    excerpt: string;

    content: string;

    seoTitle: string;
    seoDescription: string;

    category: string;

    featuredImage?: string | null;
    featuredImagePublicId: string | null;

    isPublished: boolean;
}

interface Props {
    mode: "create" | "edit";
    initialData?: BlogFormData;
}

export default function BlogForm({
    mode,
    initialData,
}: Props) {

    const router = useRouter();

    const [loading, setLoading] =
        useState(false);

    const [form, setForm] =
        useState<BlogFormData>(
            initialData ?? {
                title: "",
                slug: "",
                excerpt: "",
                content: "",

                seoTitle: "",
                seoDescription: "",

                category: "",

                featuredImage: null,
                featuredImagePublicId: "",
                

                isPublished: false,
            }
        );

    async function handleSubmit() {

        try {

            setLoading(true);

            const body = {
                ...form,
            };

            const res = await fetch(

                mode === "create"
                    ? "/api/admin/blogs"
                    : `/api/admin/blogs/${form.id}`,

                {
                    method:
                        mode === "create"
                            ? "POST"
                            : "PATCH",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify(body),
                }
            );

            if (!res.ok) {
                throw new Error();
            }

            toast.success(
                mode === "create"
                    ? "Blog created"
                    : "Blog updated"
            );

            router.push("/admin/blogs");
            router.refresh();

        } catch {

            toast.error(
                "Something went wrong."
            );

        } finally {

            setLoading(false);

        }

    }

    return (

        <div className="space-y-8">

            <div>

                <h1 className="text-3xl font-bold">

                    {mode === "create"
                        ? "Create Blog"
                        : "Edit Blog"}

                </h1>

                <p className="mt-2 text-muted">

                    Publish destination guides,
                    travel tips and articles.

                </p>

            </div>

            <div className="grid gap-8 xl:grid-cols-[1fr_360px]">

                <BlogContent
                    form={form}
                    onChange={setForm}
                />

                <div className="space-y-6">

                    <PublishCard
                        loading={loading}
                        isPublished={
                            form.isPublished
                        }
                        onPublishChange={(
                            value
                        ) =>
                            setForm({
                                ...form,
                                isPublished:
                                    value,
                            })
                        }
                        onSubmit={
                            handleSubmit
                        }
                        submitLabel={
                            mode === "create"
                                ? "Create Blog"
                                : "Save Changes"
                        }
                    />

                    <SeoCard
                        seoTitle={
                            form.seoTitle
                        }
                        seoDescription={
                            form.seoDescription
                        }
                        onSeoTitleChange={(
                            value
                        ) =>
                            setForm({
                                ...form,
                                seoTitle: value,
                            })
                        }
                        onSeoDescriptionChange={(
                            value
                        ) =>
                            setForm({
                                ...form,
                                seoDescription:
                                    value,
                            })
                        }
                    />

                </div>

            </div>

        </div>

    );

}