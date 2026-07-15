"use client";

import { PackageCategory } from "@/data/kerala-packages";

type PackageCategoryFilterProps = {
  categories: ("All" | PackageCategory)[];
  activeCategory: "All" | PackageCategory;
  onSelectCategory: (category: "All" | PackageCategory) => void;
};

export default function PackageCategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: PackageCategoryFilterProps) {
  return (
    <div className="flex flex-nowrap gap-3 overflow-x-auto pb-4 scrollbar-hide lg:flex-wrap lg:justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300 ${
            activeCategory === category
              ? "border-sea bg-sea text-white"
              : "border-border bg-white text-muted hover:border-sea hover:text-sea"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
