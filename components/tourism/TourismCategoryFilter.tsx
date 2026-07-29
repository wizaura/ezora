"use client";

import { TourismCategory, TourismCategorySummary } from "@/types/tourism.type";

interface Props {
    categories: TourismCategorySummary[];
    selectedCategory: string;
    onSelect: (slug: string) => void;
}

export default function TourismCategoryFilter({
    categories,
    selectedCategory,
    onSelect,
}: Props) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-3">

            <button
                onClick={() => onSelect("all")}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition
                    ${
                        selectedCategory === "all"
                            ? "bg-sea text-white"
                            : "border border-border bg-white text-dark-grey-blue hover:border-sea hover:text-sea"
                    }`}
            >
                All Destinations
            </button>

            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onSelect(category.slug)}
                    className={`rounded-full px-6 py-3 text-sm font-semibold transition
                        ${
                            selectedCategory === category.slug
                                ? "bg-sea text-white"
                                : "border border-border bg-white text-dark-grey-blue hover:border-sea hover:text-sea"
                        }`}
                >
                    {category.name}
                </button>
            ))}

        </div>
    );
}