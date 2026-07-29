import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TourismCategorySummary } from "@/types/tourism.type";

interface Props {
    categories: TourismCategorySummary[];
}

export default function TourismCategories({
    categories,
}: Props) {
    return (
        <section className="mt-20">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">


                <div className="flex items-end justify-between">

                    <div>

                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-px w-10 bg-sea" />

                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                                Explore Kerala
                            </p>

                        </div>

                        <h3 className="text-4xl font-semibold text-dark-cerulean">
                            Browse by category
                        </h3>

                    </div>

                </div>

                <div className="mt-10 flex flex-wrap gap-4">

                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/tourism/${category.slug}`}
                            className="group inline-flex items-center gap-3 rounded-full border border-border bg-background px-6 py-4 font-medium transition hover:border-sea hover:bg-sea hover:text-white"
                        >
                            {category.name}

                            <ArrowRight
                                size={16}
                                className="transition group-hover:translate-x-1"
                            />
                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}