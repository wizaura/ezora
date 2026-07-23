"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import TourismForm from "./TourismForm";
import { TourismDto } from "@/validators/tourism.validator";
import { useState } from "react";

export default function AddTourism() {

    const [saving, setSaving] = useState(false);
    const router = useRouter();

    async function handleSubmit(
        values: TourismDto
    ) {
        try {

            setSaving(true)

            const res = await fetch(
                "/api/admin/tourism",
                {
                    method: "POST",
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
                    "Failed to create tourism guide."
                );
            }

            router.push("/admin/tourism");
        } catch (err) {
            console.error(err);
        } finally {
            setSaving(false);
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}

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
                        Add Tourism Guide
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Create a new tourism guide
                        or destination.
                    </p>
                </div>

                <Button
                    type="submit"
                    form="tourism-form"
                >
                    <Save className="mr-2 h-4 w-4" />
                    Save Guide
                </Button>
            </div>

            <TourismForm
                onSubmit={handleSubmit}
                loading={saving}
            />
        </div>
    );
}