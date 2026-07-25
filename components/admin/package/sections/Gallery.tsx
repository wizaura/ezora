"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { ImagePlus, Loader2, Trash2 } from "lucide-react";

interface GalleryEditorProps {
    form: any;
    setForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function GalleryEditor({
    form,
    setForm,
}: GalleryEditorProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [uploading, setUploading] = useState(false);

    async function handleUpload(
        e: ChangeEvent<HTMLInputElement>
    ) {
        const files = e.target.files;

        if (!files?.length) return;

        setUploading(true);

        try {
            for (const file of Array.from(files)) {
                const formData = new FormData();

                formData.append("file", file);

                const res = await fetch("/api/admin/uploads", {
                    method: "POST",
                    body: formData,
                });

                const json = await res.json();

                if (!res.ok) {
                    throw new Error(
                        json.message || "Upload failed"
                    );
                }

                setForm((prev: any) => ({
                    ...prev,
                    images: [
                        ...prev.images,
                        {
                            imageUrl: json.data.url,
                            publicId: json.data.publicId,
                            alt: "",
                            sortOrder: prev.images.length,
                        },
                    ],
                }));
            }
        } catch (err: any) {
            alert(err.message);
        } finally {
            setUploading(false);
            e.target.value = "";
        }
    }

    async function handleRemove(index: number) {
        const image = form.images[index];

        try {
            if (image?.publicId) {
                await fetch("/api/admin/uploads", {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        publicId: image.publicId,
                    }),
                });
            }
        } catch (err) {
            console.error(err);
        }

        setForm((prev: any) => ({
            ...prev,
            images: prev.images.filter(
                (_: any, i: number) => i !== index
            ),
        }));
    }

    return (
        <div className="rounded-2xl border bg-white shadow-sm">

            <div className="border-b px-6 py-4 flex items-center justify-between">

                <div>
                    <h2 className="text-lg font-semibold">
                        Gallery
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Upload high-quality images for this package.
                    </p>
                </div>

                <button
                    type="button"
                    disabled={uploading}
                    onClick={() => inputRef.current?.click()}
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
                            Upload Images
                        </>
                    )}
                </button>

                <input
                    ref={inputRef}
                    hidden
                    multiple
                    accept="image/*"
                    type="file"
                    onChange={handleUpload}
                />

            </div>

            <div className="p-6">

                {form.images.length === 0 ? (
                    <div className="rounded-xl border-2 border-dashed border-gray-300 py-16 text-center">

                        <ImagePlus
                            className="mx-auto text-gray-400"
                            size={40}
                        />

                        <h3 className="mt-4 font-medium">
                            No Images Uploaded
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            Click "Upload Images" to add gallery images.
                        </p>

                    </div>
                ) : (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {form.images.map(
                            (image: any, index: number) => (
                                <div
                                    key={index}
                                    className="group overflow-hidden rounded-xl border bg-white"
                                >
                                    <div className="relative aspect-[4/3]">

                                        <Image
                                            src={image.imageUrl}
                                            alt={image.alt || ""}
                                            fill
                                            className="object-cover transition duration-300 group-hover:scale-105"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemove(index)
                                            }
                                            className="absolute right-3 top-3 rounded-full bg-red-600 p-2 text-white opacity-0 shadow transition group-hover:opacity-100"
                                        >
                                            <Trash2 size={16} />
                                        </button>

                                    </div>

                                </div>
                            )
                        )}

                    </div>
                )}

            </div>

        </div>
    );
}