"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  MapPinned,
  Plane,
  Route,
  Sparkles,
  Users,
} from "lucide-react";

import type { FleetCategory } from "@/data/fleet";

type FleetRecommendationSectionProps = {
  categories: FleetCategory[];
};

const passengerOptions = [
  {
    id: "small",
    label: "1–4",
    description: "Private travel",
    min: 1,
    max: 4,
  },
  {
    id: "medium",
    label: "5–10",
    description: "Small groups",
    min: 5,
    max: 10,
  },
  {
    id: "large",
    label: "11–17",
    description: "Large groups",
    min: 11,
    max: 17,
  },
  {
    id: "extra-large",
    label: "18+",
    description: "Group travel",
    min: 18,
    max: 50,
  },
];

const journeyTypes = [
  {
    id: "airport",
    label: "Airport Transfer",
    icon: Plane,
  },
  {
    id: "tour",
    label: "Kerala Tour",
    icon: MapPinned,
  },
  {
    id: "corporate",
    label: "Corporate",
    icon: Building2,
  },
  {
    id: "intercity",
    label: "Intercity",
    icon: Route,
  },
];

export default function FleetRecommendationSection({
  categories,
}: FleetRecommendationSectionProps) {
  const [selectedPassengers, setSelectedPassengers] = useState("medium");
  const [selectedJourney, setSelectedJourney] = useState("tour");

  const recommendation = useMemo(() => {
    const passengerGroup = passengerOptions.find(
      (option) => option.id === selectedPassengers,
    );

    if (!passengerGroup) {
      return null;
    }

    const activeCategories = categories
      .filter((category) => category.isActive)
      .sort((a, b) => a.sortOrder - b.sortOrder);

    /*
      Recommendation logic for the current dummy fleet:

      1–4 passengers   -> Executive Sedans
      5–17 passengers -> Force Urbania
      18+ passengers  -> Force Traveller

      Later, this logic can come from your database/admin panel.
    */

    let preferredSlug: string;

    if (passengerGroup.max <= 4) {
      preferredSlug = "executive-sedans";
    } else if (passengerGroup.max <= 17) {
      preferredSlug = "force-urbania";
    } else {
      preferredSlug = "force-traveller";
    }

    return (
      activeCategories.find(
        (category) => category.slug === preferredSlug,
      ) || activeCategories[0]
    );
  }, [categories, selectedPassengers]);

  const selectedPassengerOption = passengerOptions.find(
    (option) => option.id === selectedPassengers,
  );

  const selectedJourneyOption = journeyTypes.find(
    (journey) => journey.id === selectedJourney,
  );

  if (!recommendation) {
    return null;
  }

  const activeVehicles = recommendation.vehicles
    .filter((vehicle) => vehicle.isActive)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section className="overflow-hidden bg-background py-16">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-8 pb-12 lg:grid-cols-12 lg:items-end lg:pb-16">
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-sea" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                Find Your Ideal Vehicle
              </p>
            </div>

            <h2 className="max-w-[850px] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-dark-cerulean">
              Not sure which vehicle
              <span className="block text-dark-grey-blue/55">
                fits your journey?
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-md text-base leading-7 text-muted lg:ml-auto">
              Select your group size and journey type. We&apos;ll help you
              identify the fleet category best suited to your comfort, space
              and travel requirements.
            </p>
          </div>
        </div>

        {/* Recommendation Interface */}
        <div className="grid overflow-hidden rounded-[32px] border border-border bg-white lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left: Selectors */}
          <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
            {/* Step 1 */}
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sea/10 text-[10px] font-bold text-sea">
                  01
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dark-cerulean">
                  How many people are travelling?
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {passengerOptions.map((option) => {
                  const isActive = selectedPassengers === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedPassengers(option.id)}
                      className={`group rounded-[18px] border p-4 text-left transition-all duration-300 ${
                        isActive
                          ? "border-sea bg-sea text-white shadow-[0_10px_30px_rgba(11,126,134,0.18)]"
                          : "border-border bg-background hover:border-sea/40 hover:bg-sea/[0.04]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Users
                          size={17}
                          strokeWidth={1.7}
                          className={
                            isActive ? "text-white" : "text-sea"
                          }
                        />

                        {isActive && (
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                            <Check size={11} strokeWidth={2.5} />
                          </span>
                        )}
                      </div>

                      <p
                        className={`mt-5 text-xl font-semibold tracking-[-0.04em] ${
                          isActive ? "text-white" : "text-dark-cerulean"
                        }`}
                      >
                        {option.label}
                      </p>

                      <p
                        className={`mt-1 text-[11px] ${
                          isActive ? "text-white/70" : "text-muted"
                        }`}
                      >
                        {option.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="my-9 h-px bg-border" />

            {/* Step 2 */}
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sea/10 text-[10px] font-bold text-sea">
                  02
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dark-cerulean">
                  What type of journey are you planning?
                </p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {journeyTypes.map((journey) => {
                  const Icon = journey.icon;
                  const isActive = selectedJourney === journey.id;

                  return (
                    <button
                      key={journey.id}
                      type="button"
                      onClick={() => setSelectedJourney(journey.id)}
                      className={`flex min-h-16 items-center gap-4 rounded-[18px] border px-4 text-left transition-all duration-300 ${
                        isActive
                          ? "border-sea bg-sea/[0.07]"
                          : "border-border bg-background hover:border-sea/40"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                          isActive
                            ? "bg-sea text-white"
                            : "bg-sea/10 text-sea"
                        }`}
                      >
                        <Icon size={18} strokeWidth={1.7} />
                      </span>

                      <span
                        className={`text-sm font-semibold ${
                          isActive
                            ? "text-sea"
                            : "text-dark-cerulean"
                        }`}
                      >
                        {journey.label}
                      </span>

                      {isActive && (
                        <Check
                          size={16}
                          strokeWidth={2.3}
                          className="ml-auto shrink-0 text-sea"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Help Text */}
            <div className="mt-9 flex items-start gap-3 rounded-[18px] bg-background p-4">
              <Sparkles
                size={18}
                strokeWidth={1.7}
                className="mt-0.5 shrink-0 text-sea"
              />

              <p className="text-xs leading-5 text-muted">
                This is a general recommendation based on your group size.
                Luggage requirements, route and trip duration may affect the
                ideal vehicle choice.
              </p>
            </div>
          </div>

          {/* Right: Recommendation */}
          <div className="relative min-h-[600px] overflow-hidden bg-dark-cerulean lg:min-h-full">
            {/* Background Image */}
            <Image
              key={recommendation.id}
              src={recommendation.image}
              alt={`${recommendation.name} recommended chauffeur-driven fleet in Kerala`}
              fill
              className="object-cover transition-transform duration-1000"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-dark-cerulean/20" />

            <div className="absolute inset-0 bg-gradient-to-t from-dark-cerulean via-dark-cerulean/50 to-dark-cerulean/5" />

            <div className="absolute inset-0 bg-gradient-to-r from-dark-cerulean/30 to-transparent" />

            {/* Top Label */}
            <div className="absolute left-6 top-6 z-10 sm:left-8 sm:top-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                <Sparkles
                  size={13}
                  className="text-light-sea-green"
                />

                Recommended for you
              </div>
            </div>

            {/* Recommendation Content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-10 xl:p-12">
              {/* Selection Summary */}
              <div className="mb-5 flex flex-wrap gap-2">
                {selectedPassengerOption && (
                  <span className="rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[11px] font-medium text-white/75 backdrop-blur-md">
                    {selectedPassengerOption.label} passengers
                  </span>
                )}

                {selectedJourneyOption && (
                  <span className="rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[11px] font-medium text-white/75 backdrop-blur-md">
                    {selectedJourneyOption.label}
                  </span>
                )}
              </div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-light-sea-green">
                {recommendation.eyebrow}
              </p>

              <h3 className="mt-3 text-[clamp(2.5rem,4.5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
                {recommendation.name}
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                {recommendation.shortDescription}
              </p>

              {/* Available Vehicles */}
              {activeVehicles.length > 0 && (
                <div className="mt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                    Available Options
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeVehicles.slice(0, 3).map((vehicle) => (
                      <span
                        key={vehicle.id}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-medium text-white/80 backdrop-blur-md"
                      >
                        <Users
                          size={13}
                          className="text-light-sea-green"
                        />

                        {vehicle.seatingCapacity} seats
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`#${recommendation.slug}`}
                  className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-sea px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-light-sea-green"
                >
                  Explore {recommendation.name}

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <Link
                  href={`/quick-quote?fleet=${recommendation.slug}&journey=${selectedJourney}`}
                  className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/15"
                >
                  Get Quick Quote

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Assistance */}
        <div className="mt-5 flex flex-col gap-5 rounded-[24px] border border-border bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="text-sm font-semibold text-dark-cerulean">
              Still unsure which vehicle to choose?
            </p>

            <p className="mt-1 text-sm leading-6 text-muted">
              Share your group size, luggage requirements and travel plans. Our
              team can recommend the most suitable vehicle for your journey.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-dark-cerulean"
          >
            Talk to our team

            <ArrowRight
              size={16}
              className="text-sea transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}