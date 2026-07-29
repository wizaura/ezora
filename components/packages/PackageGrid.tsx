"use client";

import { PackageCard } from "@/types/package.type";
import PackageCardItem from "./PackageCardItem";

type PackageGridProps = {
  packages: PackageCard[];
};

export default function PackageGrid({ packages }: PackageGridProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-light-sea-green" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-light-sea-green">
              Our Packages
            </span>
            <span className="h-px w-10 bg-light-sea-green" />
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-dark-cerulean lg:text-5xl">
            Curated Kerala Experiences
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted">
            Explore carefully designed Kerala tour packages featuring
            breathtaking hill stations, tranquil backwaters, pristine beaches,
            wildlife adventures, and unforgettable cultural experiences for
            every kind of traveller.
          </p>
        </div>

        {packages.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCardItem
                key={pkg.id}
                package={pkg}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[32px] border border-border bg-surface-soft py-20 text-center">
            <h3 className="text-2xl font-semibold text-dark-cerulean">
              No Packages Available
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-muted">
              We're currently preparing exciting Kerala tour packages.
              Please check back soon for new travel experiences.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}