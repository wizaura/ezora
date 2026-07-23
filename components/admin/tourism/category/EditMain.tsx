"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import CategoryForm from "./CategoryForm";
import { TourismCategoryDto } from "@/validators/tourism-category.validator";

export default function EditMain({
    id,
}: {
    id: string;
}) {
    const [saving, setSaving] = useState(false);
    const router = useRouter();

    const [category, setCategory] =
        useState<TourismCategoryDto>();

    useEffect(() => {
        load();
    }, []);

    async function load() {
        const res = await fetch(
            `/api/admin/tourism/categories/${id}`
        );

        const json = await res.json();

        setCategory(json.data);
    }

    async function handleSubmit(
        values: TourismCategoryDto
    ) {
        console.log("swq")
        try {
            setSaving(true)
            await fetch(
                `/api/admin/tourism/categories/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type":
                        "application/json",
                    },
                    body: JSON.stringify(values),
                }
            );
            
            router.push("/admin/tourism/categories");
            router.refresh();
        } catch (err) {
            console.log(err);
        } finally {
            setSaving(false)
        }
    }

    if (!category) return null;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">
                Edit Tourism Category
            </h1>

            <CategoryForm
                initialData={category}
                onSubmit={handleSubmit}
                loading={saving}
            />
        </div>
    );
}