"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  CarFront,
  MapPinned,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

const fleetBenefits = [
  {
    id: "professional-chauffeurs",
    number: "01",
    title: "Professional Chauffeurs",
    description:
      "Travel with experienced chauffeurs focused on punctuality, comfortable journeys and dependable service from pickup to destination.",
    image: "/images/fleet/why-1.jpg",
    imageAlt:
      "Professional chauffeur providing premium vehicle rental service in Kerala",
    icon: UserRoundCheck,
    meta: "Dependable service",
  },
  {
    id: "maintained-vehicles",
    number: "02",
    title: "Well-Maintained Vehicles",
    description:
      "Our vehicles are kept clean and carefully maintained, ready for comfortable local runs, airport transfers and extended road journeys.",
    image: "/images/fleet/why-2.jpg",
    imageAlt:
      "Well-maintained premium chauffeur-driven vehicle from Ezora Tours and Travels",
    icon: ShieldCheck,
    meta: "Clean & comfortable",
  },
  {
    id: "flexible-fleet",
    number: "03",
    title: "Flexible Fleet Options",
    description:
      "Choose from executive sedans, premium Force Urbania vans and spacious Travellers across multiple seating configurations.",
    image: "/images/fleet/why-3.jpg",
    imageAlt:
      "Premium fleet of sedans, Force Urbania and Traveller vehicles in Kerala",
    icon: CarFront,
    meta: "Multiple configurations",
  },
  {
    id: "kerala-wide",
    number: "04",
    title: "Kerala-Wide Travel Support",
    description:
      "From airport pickups and city travel to intercity journeys and multi-day Kerala tours, travel with support built around your route.",
    image: "/images/fleet/why-4.jpg",
    imageAlt:
      "Chauffeur-driven travel through scenic Kerala with Ezora Tours and Travels",
    icon: MapPinned,
    meta: "Across Kerala",
  },
];

export default function WhyChooseFleetSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeBenefit = fleetBenefits[activeIndex];

  return (
    <section className="overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-12 lg:items-end lg:pb-16">
          <div className="lg:col-span-8">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-sea" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                The Ezora Fleet Experience
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-[850px] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-dark-cerulean">
              More than a vehicle.
              <span className="block text-dark-grey-blue/55">
                A better way to travel.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-md text-base leading-7 text-muted lg:ml-auto">
              Every Ezora journey combines a professionally chauffeured vehicle
              with dependable service, thoughtful comfort and local expertise
              across Kerala.
            </p>
          </div>
        </div>

        {/* Interactive Experience */}
        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-12">
          {/* Desktop Image */}
          <div className="relative hidden min-h-[540px] overflow-hidden rounded-[28px] bg-dark-cerulean lg:col-span-6 lg:block">
            {fleetBenefits.map((benefit, index) => (
              <Image
                key={benefit.id}
                src={benefit.image}
                alt={benefit.imageAlt}
                fill
                className={`object-cover transition-all duration-700 ease-out ${
                  activeIndex === index
                    ? "scale-100 opacity-100"
                    : "scale-[1.03] opacity-0"
                }`}
                sizes="50vw"
              />
            ))}

            {/* Image Overlays */}
            <div className="absolute inset-0 bg-dark-cerulean/15" />

            <div className="absolute inset-0 bg-gradient-to-t from-dark-cerulean/90 via-transparent to-dark-cerulean/10" />

            {/* Image Number */}
            <div className="absolute left-7 top-7 z-10">
              <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-white/20 bg-black/10 px-3 text-[10px] font-semibold tracking-[0.15em] text-white backdrop-blur-md">
                {activeBenefit.number}
              </span>
            </div>

            {/* Bottom Image Content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-8 xl:p-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-light-sea-green" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-light-sea-green">
                  {activeBenefit.meta}
                </p>
              </div>

              <p className="mt-4 max-w-lg text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white xl:text-4xl">
                {activeBenefit.title}
              </p>
            </div>
          </div>

          {/* Benefits List */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-[28px] border border-border bg-background">
              {fleetBenefits.map((benefit, index) => (
                <BenefitItem
                  key={benefit.id}
                  benefit={benefit}
                  isActive={activeIndex === index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type FleetBenefit = (typeof fleetBenefits)[number];

type BenefitItemProps = {
  benefit: FleetBenefit;
  isActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
};

function BenefitItem({
  benefit,
  isActive,
  onMouseEnter,
  onClick,
}: BenefitItemProps) {
  const Icon = benefit.icon;

  return (
    <article
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={`group relative cursor-pointer border-b border-border transition-colors duration-500 last:border-b-0 ${
        isActive ? "bg-white" : "bg-transparent hover:bg-white/60"
      }`}
    >
      <div className="p-5 sm:p-7 lg:p-8">
        {/* Main Row */}
        <div className="flex items-start gap-4 sm:gap-5">
          {/* Number */}
          <span
            className={`mt-1 hidden shrink-0 text-[10px] font-semibold tracking-[0.15em] transition-colors duration-300 sm:block ${
              isActive ? "text-sea" : "text-muted/60"
            }`}
          >
            {benefit.number}
          </span>

          {/* Icon */}
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
              isActive
                ? "border-sea bg-sea text-white"
                : "border-border bg-white text-dark-grey-blue"
            }`}
          >
            <Icon size={20} strokeWidth={1.7} />
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                {/* Mobile Number */}
                <p className="mb-1 text-[9px] font-semibold tracking-[0.15em] text-sea sm:hidden">
                  {benefit.number}
                </p>

                <h3 className="text-xl font-semibold tracking-[-0.035em] text-dark-cerulean sm:text-2xl lg:text-[1.7rem]">
                  {benefit.title}
                </h3>
              </div>

              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                  isActive
                    ? "rotate-0 border-sea bg-sea text-white"
                    : "-rotate-12 border-border bg-white text-muted"
                }`}
              >
                <ArrowUpRight size={15} />
              </span>
            </div>

            {/* Desktop Description Reveal */}
            <div
              className={`hidden transition-all duration-500 lg:grid ${
                isActive
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="mt-4 max-w-lg text-sm leading-6 text-muted">
                  {benefit.description}
                </p>

                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-greenish-blue">
                  {benefit.meta}
                </p>
              </div>
            </div>

            {/* Mobile Description */}
            <p className="mt-3 text-sm leading-6 text-muted lg:hidden">
              {benefit.description}
            </p>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="relative mt-5 min-h-[260px] overflow-hidden rounded-[20px] sm:min-h-[340px] lg:hidden">
          <Image
            src={benefit.image}
            alt={benefit.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw"
          />

          <div className="absolute inset-0 bg-dark-cerulean/15" />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark-cerulean/60 to-transparent" />

          <div className="absolute bottom-5 left-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-light-sea-green">
              {benefit.meta}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}