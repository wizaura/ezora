"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { ImagePlus, Loader2, Trash2 } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";

export default function ImageUploader() {
    const {
        watch,
        setValue,
    } = useFormContext();

    const featuredImage = watch("featuredImage");
    const heroImage = watch("heroImage");

    const [uploadingFeatured, setUploadingFeatured] = useState(false);
    const [uploadingHero, setUploadingHero] = useState(false);

    async function uploadImage(
        file: File,
        type: "featured" | "hero"
    ) {
        const formData = new FormData();

        formData.append("file", file);
        formData.append("folder", "ezora/fleet");

        try {
            type === "featured"
                ? setUploadingFeatured(true)
                : setUploadingHero(true);

            const res = await fetch("/api/admin/uploads", {
                method: "POST",
                body: formData,
            });

            const result = await res.json();

            if (!result.success) {
                throw new Error(result.message);
            }

            if (type === "featured") {
                setValue("featuredImage", result.data.url);
                setValue(
                    "featuredImagePublicId",
                    result.data.publicId
                );
            } else {
                setValue("heroImage", result.data.url);
                setValue(
                    "heroImagePublicId",
                    result.data.publicId
                );
            }
        } catch (err) {
            console.error(err);
        } finally {
            type === "featured"
                ? setUploadingFeatured(false)
                : setUploadingHero(false);
        }
    }

    function handleImage(
        e: ChangeEvent<HTMLInputElement>,
        type: "featured" | "hero"
    ) {
        const file = e.target.files?.[0];

        if (!file) return;

        uploadImage(file, type);
    }

    function removeImage(type: "featured" | "hero") {
        if (type === "featured") {
            setValue("featuredImage", "");
            setValue("featuredImagePublicId", "");
        } else {
            setValue("heroImage", "");
            setValue("heroImagePublicId", "");
        }
    }

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-xl font-semibold">
                    Vehicle Images
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Upload the primary images for this vehicle.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">

                {/* Featured */}

                <div className="space-y-3">

                    <label className="font-medium">
                        Featured Image
                    </label>

                    <label className="flex h-64 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 hover:border-primary">

                        {uploadingFeatured ? (
                            <Loader2 className="h-8 w-8 animate-spin" />
                        ) : featuredImage ? (
                            <div className="relative h-full w-full">
                                <Image
                                    src={featuredImage}
                                    alt=""
                                    fill
                                    className="rounded-xl object-cover"
                                />
                            </div>
                        ) : (
                            <div className="text-center">
                                <ImagePlus
                                    className="mx-auto mb-3 text-gray-400"
                                    size={42}
                                />

                                <p className="font-medium">
                                    Upload Featured Image
                                </p>

                                <p className="text-sm text-gray-500">
                                    JPG, PNG or WEBP
                                </p>
                            </div>
                        )}

                        <input
                            hidden
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                handleImage(e, "featured")
                            }
                        />
                    </label>

                    {featuredImage && (
                        <Button
                            type="button"
                            variant="destructive"
                            onClick={() =>
                                removeImage("featured")
                            }
                        >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Remove
                        </Button>
                    )}

                </div>

                {/* Hero */}

                <div className="space-y-3">

                    <label className="font-medium">
                        Hero Image
                    </label>

                    <label className="flex h-64 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 hover:border-primary">

                        {uploadingHero ? (
                            <Loader2 className="h-8 w-8 animate-spin" />
                        ) : heroImage ? (
                            <div className="relative h-full w-full">
                                <Image
                                    src={heroImage}
                                    alt=""
                                    fill
                                    className="rounded-xl object-cover"
                                />
                            </div>
                        ) : (
                            <div className="text-center">
                                <ImagePlus
                                    className="mx-auto mb-3 text-gray-400"
                                    size={42}
                                />

                                <p className="font-medium">
                                    Upload Hero Image
                                </p>

                                <p className="text-sm text-gray-500">
                                    Recommended 1600 × 900
                                </p>
                            </div>
                        )}

                        <input
                            hidden
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                handleImage(e, "hero")
                            }
                        />
                    </label>

                    {heroImage && (
                        <Button
                            type="button"
                            variant="destructive"
                            onClick={() =>
                                removeImage("hero")
                            }
                        >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Remove
                        </Button>
                    )}

                </div>

            </div>
        </div>
    );
}