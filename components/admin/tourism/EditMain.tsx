"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Loader2, Save } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import TourismForm from "./TourismForm";
import { TourismDto } from "@/validators/tourism.validator";

interface Props {
    id: string;
}

export default function EditTourism({ id }: Props) {
    const router = useRouter();
    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [tourism, setTourism] =
        useState<TourismDto | null>(null);

    useEffect(() => {
        async function fetchTourism() {
            try {
                const res = await fetch(
                    `/api/admin/tourism/${id}`
                );

                const result = await res.json();

                if (!res.ok) {
                    throw new Error(
                        result.message ??
                            "Unable to load tourism guide."
                    );
                }

                setTourism(result.data);
            } catch (error) {
                console.error(error);

                toast.error(
                    "Failed to load tourism guide."
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

            const res = await fetch(
                `/api/admin/tourism/${id}`,
                {
                    method: "PATCH",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify(values),
                }
            );

            const result = await res.json();

            if (!res.ok) {
                throw new Error(
                    result.message ??
                        "Failed to update tourism guide."
                );
            }

            toast.success(
                "Tourism guide updated successfully."
            );

            router.push("/admin/tourism");
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
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        );
    }

    if (!tourism) {
        return (
            <div className="rounded-xl border p-8 text-center">
                Tourism guide not found.
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <Link href="/admin/tourism">
                        <Button
                            variant="ghost"
                            className="mb-4"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
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

                <Button
                    type="submit"
                    form="tourism-form"
                    disabled={saving}
                >
                    {saving ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <Save className="mr-2 h-4 w-4" />
                    )}

                    Save Changes
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