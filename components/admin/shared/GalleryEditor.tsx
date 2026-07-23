"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { ImagePlus, Loader2, Trash2 } from "lucide-react";
import {
    useFieldArray,
    useFormContext,
} from "react-hook-form";

import { Button } from "@/components/ui/button";
import { VehicleDto } from "@/validators/vehicle.validator";

export default function GalleryEditor() {
    const { control } =
        useFormContext<VehicleDto>();

    const inputRef = useRef<HTMLInputElement>(null);

    const {
        fields,
        append,
        remove,
    } = useFieldArray({
        control,
        name: "gallery",
    });

    const [uploading, setUploading] =
        useState(false);

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

                const res = await fetch(
                    "/api/admin/uploads",
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                const result =
                    await res.json();

                if (!res.ok) {
                    throw new Error(
                        result.message
                    );
                }

                append({
                    image: result.data.url,
                    publicId:
                        result.data.publicId,
                    alt: "",
                    sortOrder:
                        fields.length,
                });
            }
        } catch (err) {
            console.error(err);
        } finally {
            setUploading(false);

            e.target.value = "";
        }
    }

    async function handleRemove(
        index: number
    ) {
        const image = fields[index];

        try {
            if (image.publicId) {
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
                                image.publicId,
                        }),
                    }
                );
            }
        } catch (err) {
            console.error(err);
        }

        remove(index);
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-semibold">
                        Gallery
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Upload gallery images.
                    </p>
                </div>

                <Button
                    type="button"
                    disabled={uploading}
                    onClick={() => inputRef.current?.click()}
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
                </Button>

                <input
                    ref={inputRef}
                    hidden
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                />

                <input
                    id="gallery-upload"
                    hidden
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                />
            </div>

            {
                fields.length === 0 ? (
                    <div className="rounded-xl border-2 border-dashed py-16 text-center">
                        <ImagePlus
                            className="mx-auto text-gray-400"
                            size={40}
                        />

                        <p className="mt-3 font-medium">
                            No gallery images
                        </p>

                        <p className="text-sm text-gray-500">
                            Upload multiple
                            images.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {fields.map(
                            (
                                image,
                                index
                            ) => (
                                <div
                                    key={
                                        image.id
                                    }
                                    className="overflow-hidden rounded-xl border bg-white shadow-sm"
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={
                                                image.image
                                            }
                                            alt={
                                                image.alt ||
                                                ""
                                            }
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="p-3">
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            className="w-full"
                                            onClick={() =>
                                                handleRemove(
                                                    index
                                                )
                                            }
                                        >
                                            <Trash2 className="mr-2 h-4 w-4" />
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                )
            }
        </div >
    );
}