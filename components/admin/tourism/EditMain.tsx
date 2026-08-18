"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    Loader2,
    Save,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import TourismForm from "./TourismForm";

import {
    TourismDto,
} from "@/validators/tourism.validator";

import {
    toTourismFormData,
} from "@/utils/tourism.util";

interface Props {
    id: string;
}

export default function EditTourism({
    id,
}: Props) {

    const router = useRouter();

    const [loading, setLoading] =
        useState(true);

    const [saving, setSaving] =
        useState(false);

    const [tourism, setTourism] =
        useState<TourismDto | null>(null);


    useEffect(() => {

        async function fetchTourism() {

            try {

                const res = await fetch(
                    `/api/admin/tourism/${id}`
                );

                const result =
                    await res.json();

                if (!res.ok) {
                    throw new Error(
                        result.message ??
                        "Unable to load tourism guide."
                    );
                }

                /*
                 * Convert the database response
                 * into the exact form structure.
                 *
                 * This also converts:
                 *
                 * Decimal -> number
                 * null -> ""
                 * gallery -> form gallery
                 */
                const formData =
                    toTourismFormData(
                        result.data
                    );

                setTourism(formData);

            } catch (error) {

                console.error(error);

                toast.error(
                    error instanceof Error
                        ? error.message
                        : "Failed to load tourism guide."
                );

            } finally {

                setLoading(false);

            }
        }

        fetchTourism();

    }, [id]);


    async function handleSubmit(
        values: TourismDto
    ) {

        try {

            setSaving(true);

            const res =
                await fetch(
                    `/api/admin/tourism/${id}`,
                    {
                        method: "PATCH",

                        headers: {
                            "Content-Type":
                                "application/json",
                        },

                        body:
                            JSON.stringify(values),
                    }
                );

            const result =
                await res.json();

            if (!res.ok) {

                throw new Error(
                    result.message ??
                    "Failed to update tourism guide."
                );

            }

            toast.success(
                "Tourism guide updated successfully."
            );

            router.push(
                "/admin/tourism"
            );

            router.refresh();

        } catch (error) {

            console.error(error);

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Something went wrong."
            );

        } finally {

            setSaving(false);

        }
    }


    if (loading) {

        return (
            <div className="flex h-96 items-center justify-center">
                <Loader2
                    className="h-8 w-8 animate-spin"
                />
            </div>
        );

    }


    if (!tourism) {

        return (
            <div className="rounded-xl border bg-white p-8 text-center">
                <p className="text-muted-foreground">
                    Tourism guide not found.
                </p>

                <Link
                    href="/admin/tourism"
                    className="mt-4 inline-block"
                >
                    <Button variant="outline">
                        Back to Tourism
                    </Button>
                </Link>
            </div>
        );

    }


    return (
        <div className="space-y-6">

            {/* Header */}

            <div className="flex items-start justify-between">

                <div>

                    <Link href="/admin/tourism">

                        <Button
                            type="button"
                            variant="ghost"
                            className="mb-4"
                        >
                            <ArrowLeft
                                className="mr-2 h-4 w-4"
                            />

                            Back
                        </Button>

                    </Link>

                    <h1 className="text-3xl font-bold">
                        Edit Tourism Guide
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Update tourism destination
                        information.
                    </p>

                </div>


                {/* Desktop save button */}

                <Button
                    type="submit"
                    form="tourism-form"
                    disabled={saving}
                >

                    {saving ? (
                        <Loader2
                            className="mr-2 h-4 w-4 animate-spin"
                        />
                    ) : (
                        <Save
                            className="mr-2 h-4 w-4"
                        />
                    )}

                    {saving
                        ? "Saving..."
                        : "Save Changes"}

                </Button>

            </div>


            <TourismForm
                defaultValues={tourism}
                loading={saving}
                onSubmit={handleSubmit}
            />

        </div>
    );
}