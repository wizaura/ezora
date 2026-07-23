"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import FleetCategoryForm from "@/components/admin/fleet/category/FleetCategoryForm";
import { useState } from "react";

export default function NewFleetCategory() {
    const router = useRouter();
    const [saving, setSaving] = useState(false);

    async function handleSubmit(values: any) {
        try {

            const res = await fetch("/api/admin/fleet/categories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (!res.ok) {
                throw new Error("Failed to create category");
            }

            router.push("/admin/fleet");
        } catch(err) {
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

                    <Link href="/admin/fleet">
                        <Button
                            variant="ghost"
                            className="mb-4"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                        </Button>
                    </Link>

                    <h1 className="text-3xl font-bold">
                        Add Fleet Category
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Create a category for organising your fleet vehicles.
                    </p>

                </div>

                <Button
                    type="submit"
                    form="fleet-category-form"
                >
                    <Save className="mr-2 h-4 w-4" />
                    Save Category
                </Button>

            </div>

            <FleetCategoryForm
                onSubmit={handleSubmit}
                loading={saving}
            />

        </div>
    );
}