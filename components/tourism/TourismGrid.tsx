"use client";

import { useMemo, useState } from "react";

import TourismCard from "./TourismCard";
import TourismCategoryFilter from "./TourismCategoryFilter";

import {
    TourismGuide,
    TourismCategory,
    TourismGuideCard,
    TourismCategorySummary,
} from "@/types/tourism.type";

interface Props {
    guides: TourismGuideCard[];
    categories: TourismCategorySummary[];

    selectedCategory?: string;
    showCategoryFilter?: boolean;
}

export default function TourismGrid({
    guides,
    categories,
    selectedCategory = "all",
    showCategoryFilter = true,
}: Props) {

    const [selected, setSelected] = useState(selectedCategory);

    const filteredGuides = useMemo(() => {
        if (selectedCategory === "all") {
            return guides;
        }

        return guides.filter(
            (guide) =>
                guide.category.slug === selectedCategory
        );
    }, [guides, selectedCategory]);

    return (
        <section className="bg-background py-16">

            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                <div className="mb-14 text-center">

                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-sea" />

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                            Explore Destinations
                        </p>

                        <span className="h-px w-10 bg-sea" />
                    </div>

                    <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold tracking-[-0.05em] text-dark-cerulean">
                        Find your next
                        <span className="block text-dark-grey-blue/55">
                            unforgettable destination.
                        </span>
                    </h2>

                </div>

                {
                    showCategoryFilter && (
                        <TourismCategoryFilter
                            categories={categories}
                            selectedCategory={selected}
                            onSelect={setSelected}
                        />
                    )
                }

                <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {filteredGuides.map((guide) => (
                        <TourismCard
                            key={guide.id}
                            guide={guide}
                        />
                    ))}

                </div>

                {filteredGuides.length === 0 && (

                    <div className="py-24 text-center">

                        <h3 className="text-2xl font-semibold text-dark-cerulean">
                            No destinations found.
                        </h3>

                        <p className="mt-4 text-muted">
                            Try selecting another category.
                        </p>

                    </div>

                )}

            </div>

        </section>
    );
}