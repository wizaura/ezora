import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CarFront,
  Check,
  Luggage,
  MessageCircle,
  Users,
} from "lucide-react";

import type { FleetCategory, Vehicle } from "@/data/fleet";

type FleetVehiclesSectionProps = {
  categories: FleetCategory[];
};

export default function FleetVehiclesSection({
  categories,
}: FleetVehiclesSectionProps) {
  const activeCategories = categories
    .filter((category) => category.isActive)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section>
      {activeCategories.map((category, categoryIndex) => {
        const activeVehicles = category.vehicles
          .filter((vehicle) => vehicle.isActive)
          .sort((a, b) => a.sortOrder - b.sortOrder);

        if (activeVehicles.length === 0) {
          return null;
        }

        return (
          <FleetCategorySection
            key={category.id}
            category={category}
            vehicles={activeVehicles}
            categoryIndex={categoryIndex}
          />
        );
      })}
    </section>
  );
}

type FleetCategorySectionProps = {
  category: FleetCategory;
  vehicles: Vehicle[];
  categoryIndex: number;
};

function FleetCategorySection({
  category,
  vehicles,
  categoryIndex,
}: FleetCategorySectionProps) {
  const isDark = categoryIndex % 3 === 1;

  return (
    <section
      id={category.slug}
      className={`scroll-mt-24 overflow-hidden py-16 ${
        isDark ? "bg-dark-cerulean" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        {/* Category Header */}
        <div className={`grid gap-8 border-b ${isDark ? "border-white/15" : "border-border"} pb-12 lg:grid-cols-12 lg:items-end lg:pb-16`}>
          <div
            className={`lg:col-span-8 ${
              isDark ? "border-white/15" : "border-border"
            }`}
          >
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-sea" />

              <p
                className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                  isDark ? "text-light-sea-green" : "text-greenish-blue"
                }`}
              >
                {String(categoryIndex + 1).padStart(2, "0")} ·{" "}
                {category.eyebrow}
              </p>
            </div>

            {/* Heading */}
            <h2
              className={`max-w-[850px] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] ${
                isDark ? "text-white" : "text-dark-cerulean"
              }`}
            >
              {category.name}
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p
              className={`max-w-md text-base leading-7 lg:ml-auto ${
                isDark ? "text-white/60" : "text-muted"
              }`}
            >
              {category.description}
            </p>

            <div
              className={`mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] ${
                isDark ? "text-light-sea-green" : "text-greenish-blue"
              }`}
            >
              <CarFront size={16} strokeWidth={1.7} />

              {vehicles.length}{" "}
              {vehicles.length === 1 ? "vehicle" : "vehicles"} available
            </div>
          </div>
        </div>

        {/* Vehicle List */}
        <div className="mt-8 space-y-5 lg:mt-10">
          {vehicles.map((vehicle, vehicleIndex) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              imageRight={vehicleIndex % 2 !== 0}
              isDarkSection={isDark}
              index={vehicleIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type VehicleCardProps = {
  vehicle: Vehicle;
  imageRight: boolean;
  isDarkSection: boolean;
  index: number;
};

function VehicleCard({
  vehicle,
  imageRight,
  isDarkSection,
  index,
}: VehicleCardProps) {
  return (
    <article
      className={`group grid overflow-hidden rounded-[28px] borde lg:min-h-[500px] lg:grid-cols-2 ${
        isDarkSection
          ? "border-white/10 bg-white/[0.055]"
          : "border-border bg-background"
      }`}
    >
      {/* Vehicle Image */}
      <div
        className={`relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-full ${
          imageRight ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={vehicle.featuredImage}
          alt={`${vehicle.name} chauffeur-driven rental in Kerala by Ezora Tours and Travels`}
          fill
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Image Overlays */}
        <div className="absolute inset-0 bg-dark-cerulean/10" />

        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/50 to-transparent" />

        {/* Vehicle Number */}
        <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
          <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/20 bg-black/15 px-3 text-[10px] font-semibold tracking-[0.15em] text-white backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Featured Badge */}
        {vehicle.isFeatured && (
          <div className="absolute right-5 top-5 sm:right-7 sm:top-7">
            <span className="inline-flex items-center rounded-full bg-sea px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-white">
              Featured
            </span>
          </div>
        )}

        {/* Mobile Vehicle Name */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:hidden">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-light-sea-green">
            Chauffeur Driven
          </p>

          <h3 className="mt-2 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-white">
            {vehicle.name}
          </h3>
        </div>
      </div>

      {/* Vehicle Content */}
      <div
        className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12 ${
          imageRight ? "lg:order-1" : ""
        }`}
      >
        {/* Desktop Eyebrow */}
        <div className="hidden items-center gap-3 lg:flex">
          <span className="h-px w-8 bg-sea" />

          <p
            className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
              isDarkSection
                ? "text-light-sea-green"
                : "text-greenish-blue"
            }`}
          >
            Chauffeur Driven
          </p>
        </div>

        {/* Desktop Title */}
        <h3
          className={`hidden text-[clamp(2.2rem,3.5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.05em] lg:mt-5 lg:block ${
            isDarkSection ? "text-white" : "text-dark-cerulean"
          }`}
        >
          {vehicle.name}
        </h3>

        {/* Description */}
        <p
          className={`max-w-xl text-sm leading-7 sm:text-base ${
            isDarkSection ? "text-white/65" : "text-muted"
          } lg:mt-6`}
        >
          {vehicle.shortDescription}
        </p>

        {/* Main Specifications */}
        <div
          className={`mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-[18px] border ${
            isDarkSection
              ? "border-white/10 bg-white/10"
              : "border-border bg-border"
          }`}
        >
          <SpecificationItem
            icon={Users}
            label="Seating"
            value={`${vehicle.seatingCapacity} seats`}
            isDark={isDarkSection}
          />

          <SpecificationItem
            icon={Luggage}
            label="Luggage"
            value={vehicle.luggageCapacity || "Available"}
            isDark={isDarkSection}
          />
        </div>

        {/* Features */}
        {vehicle.features.length > 0 && (
          <div className="mt-7">
            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
                isDarkSection ? "text-white/40" : "text-muted"
              }`}
            >
              Vehicle Features
            </p>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
              {vehicle.features.slice(0, 4).map((feature) => (
                <div
                  key={feature.label}
                  className={`flex items-center gap-2 text-sm font-medium ${
                    isDarkSection ? "text-white/70" : "text-dark-grey-blue"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      isDarkSection
                        ? "bg-sea/20 text-light-sea-green"
                        : "bg-sea/10 text-sea"
                    }`}
                  >
                    <Check size={11} strokeWidth={2.5} />
                  </span>

                  {feature.label}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ideal For */}
        {vehicle.idealFor.length > 0 && (
          <div className="mt-7">
            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
                isDarkSection ? "text-white/40" : "text-muted"
              }`}
            >
              Ideal For
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {vehicle.idealFor.map((item) => (
                <span
                  key={item}
                  className={`rounded-full border px-3.5 py-2 text-xs font-medium ${
                    isDarkSection
                      ? "border-white/10 bg-white/5 text-white/65"
                      : "border-border bg-white text-dark-grey-blue"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href={`/fleet/${vehicle.slug}`}
            className={`group/link inline-flex h-13 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors duration-300 ${
              isDarkSection
                ? "bg-white text-dark-cerulean hover:bg-light-sea-green hover:text-white"
                : "bg-dark-cerulean text-white hover:bg-greenish-blue"
            }`}
          >
            View Vehicle

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </Link>

          <Link
            href={`/quick-quote?vehicle=${vehicle.slug}`}
            className={`group/quote inline-flex h-13 items-center justify-center gap-2 rounded-full border px-6 text-sm font-semibold transition-all duration-300 ${
              isDarkSection
                ? "border-white/15 bg-white/5 text-white hover:border-sea hover:bg-sea"
                : "border-border bg-white text-dark-cerulean hover:border-sea hover:text-sea"
            }`}
          >
            Get Quote

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover/quote:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

type SpecificationItemProps = {
  icon: React.ElementType;
  label: string;
  value: string;
  isDark: boolean;
};

function SpecificationItem({
  icon: Icon,
  label,
  value,
  isDark,
}: SpecificationItemProps) {
  return (
    <div
      className={`flex items-center gap-3 p-4 sm:p-5 ${
        isDark ? "bg-dark-cerulean" : "bg-white"
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
          isDark
            ? "bg-sea/20 text-light-sea-green"
            : "bg-sea/10 text-sea"
        }`}
      >
        <Icon size={18} strokeWidth={1.7} />
      </div>

      <div className="min-w-0">
        <p
          className={`text-[9px] font-semibold uppercase tracking-[0.13em] ${
            isDark ? "text-white/40" : "text-muted"
          }`}
        >
          {label}
        </p>

        <p
          className={`mt-1 truncate text-sm font-semibold ${
            isDark ? "text-white" : "text-dark-cerulean"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}