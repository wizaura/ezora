"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import {
    ImagePlus,
    Loader2,
    Trash2,
} from "lucide-react";

import type { BlogFormData } from "./BlogForm";

interface Props {
    form: BlogFormData;
    setForm: React.Dispatch<
        React.SetStateAction<BlogFormData>
    >;
}

export default function FeaturedImageUploader({
    form,
    setForm,
}: Props) {
    const inputRef =
        useRef<HTMLInputElement>(null);

    const [uploading, setUploading] =
        useState(false);

    async function handleUpload(
        e: ChangeEvent<HTMLInputElement>
    ) {
        const file = e.target.files?.[0];

        if (!file) return;

        setUploading(true);

        try {
            const formData = new FormData();

            formData.append("file", file);

            const res = await fetch(
                "/api/admin/uploads",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const json = await res.json();

            if (!res.ok) {
                throw new Error(
                    json.message ??
                        "Upload failed"
                );
            }

            // Remove previous image if replacing
            if (
                form.featuredImagePublicId
            ) {
                await fetch(
                    "/api/admin/uploads",
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        body: JSON.stringify({
                            publicId:
                                form.featuredImagePublicId,
                        }),
                    }
                );
            }

            setForm((prev) => ({
                ...prev,
                featuredImage:
                    json.data.url,
                featuredImagePublicId:
                    json.data.publicId,
            }));
        } catch (err: any) {
            alert(err.message);
        } finally {
            setUploading(false);
            e.target.value = "";
        }
    }

    async function handleRemove() {
        try {
            if (
                form.featuredImagePublicId
            ) {
                await fetch(
                    "/api/admin/uploads",
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        body: JSON.stringify({
                            publicId:
                                form.featuredImagePublicId,
                        }),
                    }
                );
            }
        } catch (err) {
            console.error(err);
        }

        setForm((prev) => ({
            ...prev,
            featuredImage: null,
            featuredImagePublicId:
                null,
        }));
    }

    return (
        <div className="rounded-2xl border bg-white shadow-sm">

            <div className="flex items-center justify-between border-b px-6 py-4">

                <div>
                    <h2 className="text-lg font-semibold">
                        Featured Image
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Upload the main image
                        shown for this blog.
                    </p>
                </div>

                <button
                    type="button"
                    disabled={uploading}
                    onClick={() =>
                        inputRef.current?.click()
                    }
                    className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
                >
                    {uploading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Uploading...
                        </>
                    ) : (
                        <>
                            <ImagePlus className="mr-2 h-4 w-4" />
                            {form.featuredImage
                                ? "Replace Image"
                                : "Upload Image"}
                        </>
                    )}
                </button>

                <input
                    ref={inputRef}
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleUpload}
                />

            </div>

            <div className="p-6">

                {!form.featuredImage ? (
                    <div className="rounded-xl border-2 border-dashed border-gray-300 py-20 text-center">

                        <ImagePlus
                            className="mx-auto text-gray-400"
                            size={40}
                        />

                        <h3 className="mt-4 font-medium">
                            No Featured Image
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            Click "Upload Image"
                            to add a featured
                            image.
                        </p>

                    </div>
                ) : (
                    <div className="group overflow-hidden rounded-xl border">

                        <div className="relative aspect-[16/9]">

                            <Image
                                src={
                                    form.featuredImage
                                }
                                alt={
                                    form.title
                                }
                                fill
                                className="object-cover transition duration-300 group-hover:scale-105"
                            />

                            <button
                                type="button"
                                onClick={
                                    handleRemove
                                }
                                className="absolute right-3 top-3 rounded-full bg-red-600 p-2 text-white opacity-0 shadow transition group-hover:opacity-100"
                            >
                                <Trash2
                                    size={16}
                                />
                            </button>

                        </div>

                    </div>
                )}

            </div>

        </div>
    );
}