"use client";

import { useState } from "react";
import { TourPackage, PackageCategory } from "@/data/kerala-packages";
import PackageCard from "./PackageCard";
import PackageCategoryFilter from "./PackageCategoryFilter";

type PackageGridProps = {
  packages: TourPackage[];
};

const CATEGORIES: ("All" | PackageCategory)[] = ["All", "Honeymoon", "Family", "Hill Station", "Backwater", "Group", "Luxury"];

export default function PackageGrid({ packages }: PackageGridProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | PackageCategory>("All");

  const filteredPackages = packages.filter((pkg) => 
    activeCategory === "All" ? true : pkg.category === activeCategory
  );

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="mb-10 text-center lg:mb-16">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-dark-cerulean md:text-4xl lg:text-5xl">
            Curated Experiences
          </h2>
          <PackageCategoryFilter 
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {filteredPackages.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.slug} tourPackage={pkg} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg text-muted">No packages found for this category.</p>
            <button 
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-sm font-semibold text-sea hover:underline"
            >
              View all packages
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
