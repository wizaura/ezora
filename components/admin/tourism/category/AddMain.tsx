"use client";

import { useRouter } from "next/navigation";

import CategoryForm from "./CategoryForm";
import { TourismCategoryDto } from "@/validators/tourism-category.validator";
import { useState } from "react";

export default function AddMain() {

    const [saving, setSaving] = useState(false);
    const router = useRouter();

    async function handleSubmit(
        values: TourismCategoryDto
    ) {
        try{
            setSaving(false);

            const res = await fetch(
                "/api/admin/tourism/categories",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json",
                    },
                    body: JSON.stringify(values),
                }
            );
            
            if (!res.ok) {
                throw new Error();
            }
            
            router.push("/admin/tourism/categories");
            router.refresh();
        } catch (err) {
            console.log(err);
        } finally {
            setSaving(false);
        }
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">
                Add Tourism Category
            </h1>

            <CategoryForm
                onSubmit={handleSubmit}
                loading={saving}
            />
        </div>
    );
}