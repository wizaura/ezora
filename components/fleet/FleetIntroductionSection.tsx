import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CarFront,
  Users,
} from "lucide-react";

import type { FleetCategory } from "@/data/fleet";

type FleetIntroductionSectionProps = {
  categories: FleetCategory[];
};

export default function FleetIntroductionSection({
  categories,
}: FleetIntroductionSectionProps) {
  const activeCategories = categories
    .filter((category) => category.isActive)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  const totalVehicles = activeCategories.reduce(
    (total, category) =>
      total +
      category.vehicles.filter((vehicle) => vehicle.isActive).length,
    0,
  );

  return (
    <section className="overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        {/* Introduction Header */}
        <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-12 lg:items-end lg:pb-16">
          {/* Left */}
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-sea" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                Explore Our Fleet
              </p>
            </div>

            <h2 className="max-w-[850px] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-dark-cerulean">
              A fleet for every
              <span className="block text-dark-grey-blue/55">
                kind of journey.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-md text-base leading-7 text-muted lg:ml-auto">
              From premium Force Urbania vans for comfortable group journeys to
              executive sedans for private and corporate travel, choose a
              chauffeur-driven vehicle designed around your journey.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid border-b border-border sm:grid-cols-3">
          <StatItem
            value={`${activeCategories.length}`}
            label="Fleet Categories"
          />

          <StatItem
            value={`${totalVehicles}+`}
            label="Vehicle Options"
          />

          <StatItem
            value="100%"
            label="Chauffeur Driven"
          />
        </div>

        {/* Category Navigation */}
        <div className="pt-12 lg:pt-16">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-greenish-blue">
                Choose Your Fleet
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-dark-cerulean sm:text-3xl">
                Find the right vehicle for your journey.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted">
              Select a category to explore available vehicles, seating
              configurations and the journeys each fleet is best suited for.
            </p>
          </div>

          {/* Dynamic Category Cards */}
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {activeCategories.map((category, index) => (
              <FleetCategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type StatItemProps = {
  value: string;
  label: string;
};

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="border-b border-border text-center py-7 last:border-b-0 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0">
      <p className="text-3xl font-semibold tracking-[-0.045em] text-dark-cerulean sm:text-4xl">
        {value}
      </p>

      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </p>
    </div>
  );
}

type FleetCategoryCardProps = {
  category: FleetCategory;
  index: number;
};

function FleetCategoryCard({
  category,
  index,
}: FleetCategoryCardProps) {
  const activeVehicles = category.vehicles.filter(
    (vehicle) => vehicle.isActive,
  );

  return (
    <article className="group relative min-h-[520px] overflow-hidden rounded-[28px] bg-dark-cerulean">
      {/* Background Image */}
      <Image
        src={category.image}
        alt={`${category.name} chauffeur-driven rental fleet in Kerala`}
        fill
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-dark-cerulean/15" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-black/95" />

      <div className="absolute inset-0 bg-gradient-to-r from-dark-cerulean/20 to-transparent" />

      {/* Top Content */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-6 sm:p-7">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold tracking-[0.15em] text-light-sea-green">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="h-px w-5 bg-white/25" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-white/65">
              {category.eyebrow}
            </p>
          </div>

          <div className="mt-3 flex items-center gap-2 text-xs font-medium text-white/70">
            <CarFront
              size={15}
              strokeWidth={1.7}
              className="text-light-sea-green"
            />

            {activeVehicles.length}{" "}
            {activeVehicles.length === 1 ? "vehicle" : "vehicles"}
          </div>
        </div>

        <a
          href={`#${category.slug}`}
          aria-label={`Explore ${category.name}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-sea group-hover:bg-sea"
        >
          <ArrowDown size={17} />
        </a>
      </div>

      {/* Bottom Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
        <h3 className="text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl">
          {category.name}
        </h3>

        <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
          {category.shortDescription}
        </p>

        {/* Vehicle Preview */}
        <div className="mt-6 flex flex-wrap gap-2">
          {activeVehicles.slice(0, 3).map((vehicle) => (
            <span
              key={vehicle.id}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[11px] font-medium text-white/80 backdrop-blur-md"
            >
              <Users
                size={13}
                className="text-light-sea-green"
              />

              {vehicle.seatingCapacity} seats
            </span>
          ))}
        </div>

        {/* Explore Link */}
        <a
          href={`#${category.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
        >
          Explore {category.name}

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-sea">
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:animate-pulse"
            />
          </span>
        </a>
      </div>
    </article>
  );
}