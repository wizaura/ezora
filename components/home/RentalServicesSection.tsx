"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  CalendarClock,
  CarFront,
  MapPinned,
  Plane,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "hourly-daily",
    number: "01",
    icon: CalendarClock,
    title: "Hourly & Daily Rentals",
    shortTitle: "Hourly & Daily",
    description:
      "Flexible chauffeur-driven rentals for local journeys, weddings, events, business meetings and full-day travel across Kerala.",
    image: "/images/home/rental-1.jpg",
    href: "/rental-services/hourly-daily",
    meta: "Flexible duration",
  },
  {
    id: "intercity",
    number: "02",
    icon: MapPinned,
    title: "Intercity & Interstate",
    shortTitle: "Intercity Travel",
    description:
      "Comfortable one-way and round-trip journeys across Kerala and neighbouring states, professionally driven from pickup to destination.",
    image: "/images/home/rental-2.jpg",
    href: "/rental-services/intercity",
    meta: "One-way · Round-trip",
  },
  {
    id: "airport",
    number: "03",
    icon: Plane,
    title: "Airport Transfers",
    shortTitle: "Airport Transfers",
    description:
      "Reliable chauffeur-driven airport pickups and drops connecting Cochin, Calicut and Trivandrum airports with destinations across Kerala.",
    image: "/images/home/rental-3.jpg",
    href: "/rental-services/airport-transfers",
    meta: "COK · CCJ · TRV",
  },
  {
    id: "corporate",
    number: "04",
    icon: Building2,
    title: "Corporate Mobility",
    shortTitle: "Corporate Mobility",
    description:
      "Dedicated chauffeur-driven fleet solutions for companies, hotels and business teams through monthly, quarterly and yearly agreements.",
    image: "/images/home/rental-4.jpg",
    href: "/corporate-leases",
    meta: "Monthly · Quarterly · Yearly",
  },
];

export default function RentalServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(
    services[0].id,
  );

  return (
    <section className="relative overflow-hidden bg-dark-cerulean py-16 text-white">
      {/* Background Decoration */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-sea/10 blur-[140px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-48 left-[15%] h-[450px] w-[450px] rounded-full bg-greenish-blue/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-8 pb-12 lg:grid-cols-12 lg:items-end lg:pb-16">
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-light-sea-green" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-light-sea-green">
                Rental Services
              </p>
            </div>

            <h2 className="max-w-[850px] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
              Flexible mobility,
              <span className="block text-white/45">
                built around your journey.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-md text-base leading-7 text-white/60 lg:ml-auto">
              From a few hours in the city to airport transfers and long-distance
              road trips, choose a chauffeur-driven service designed around your
              schedule.
            </p>

            <Link
              href="/rental-services"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Explore all rental services

              <ArrowUpRight
                size={17}
                className="text-light-sea-green transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div
          className="border-t border-white/15"
          onMouseLeave={() => setActiveService(services[0].id)}
        >
          {services.map((service) => (
            <ServiceRow
              key={service.id}
              service={service}
              isActive={activeService === service.id}
              onMouseEnter={() => setActiveService(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type Service = (typeof services)[number];

type ServiceRowProps = {
  service: Service;
  isActive: boolean;
  onMouseEnter: () => void;
};

function ServiceRow({
  service,
  isActive,
  onMouseEnter,
}: ServiceRowProps) {
  const Icon = service.icon;

  return (
    <article
      onMouseEnter={onMouseEnter}
      className="group relative overflow-hidden border-b border-white/15"
    >
      {/* Active Background */}
      <div
        className={`pointer-events-none absolute inset-0 bg-white/[0.035] transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative px-5 py-7 sm:px-6 sm:py-8 lg:grid lg:min-h-[150px] lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-6 lg:py-0">
        
        {/* Number — Desktop */}
        <div className="hidden lg:col-span-1 lg:block">
          <span
            className={`text-xs font-semibold tracking-[0.15em] transition-colors duration-500 ${
              isActive ? "text-light-sea-green" : "text-white/35"
            }`}
          >
            {service.number}
          </span>
        </div>

        {/* Title Area */}
        <div className="lg:col-span-4">
          {/* Mobile meta */}
          <div className="mb-4 flex items-center gap-2 lg:hidden">
            <span className="text-[10px] font-semibold tracking-[0.15em] text-light-sea-green">
              {service.number}
            </span>

            <span className="h-px w-5 bg-white/20" />

            <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/45">
              {service.meta}
            </span>
          </div>

          {/* Icon, Title and Arrow */}
          <div className="flex items-center gap-4">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 sm:h-12 sm:w-12 ${
                isActive
                  ? "border-sea bg-sea text-white"
                  : "border-white/15 bg-white/5 text-white/60"
              }`}
            >
              <Icon size={19} strokeWidth={1.7} />
            </div>

            <h3 className="min-w-0 flex-1 text-xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-2xl lg:text-3xl">
              {service.title}
            </h3>

            {/* Mobile Arrow */}
            <Link
              href={service.href}
              aria-label={`Explore ${service.title}`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all duration-300 hover:border-sea hover:bg-sea hover:text-white lg:hidden"
            >
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="mt-6 lg:col-span-3 lg:mt-0">
          {/* Mobile Image */}
          <div className="relative h-[190px] overflow-hidden rounded-[18px] sm:h-[240px] lg:hidden">
            <Image
              src={service.image}
              alt={`${service.title} chauffeur-driven service in Kerala`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 600px"
            />

            <div className="absolute inset-0 bg-dark-cerulean/10" />
          </div>

          {/* Desktop Animated Image */}
          <div
            className={`relative hidden overflow-hidden rounded-[18px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:block ${
              isActive ? "h-[118px] opacity-100" : "h-0 opacity-0"
            }`}
          >
            <Image
              src={service.image}
              alt={`${service.title} chauffeur-driven service in Kerala`}
              fill
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              sizes="300px"
            />

            <div className="absolute inset-0 bg-dark-cerulean/15" />
          </div>
        </div>

        {/* Description */}
        <div className="mt-5 lg:col-span-3 lg:mt-0">
          <p
            className={`max-w-md text-sm leading-6 transition-colors duration-500 ${
              isActive ? "text-white/75" : "text-white/55"
            }`}
          >
            {service.description}
          </p>

          <p className="mt-3 hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-light-sea-green/80 lg:block">
            {service.meta}
          </p>
        </div>

        {/* Desktop Arrow */}
        <div className="hidden lg:col-span-1 lg:flex lg:justify-end">
          <Link
            href={service.href}
            aria-label={`Explore ${service.title}`}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500 ${
              isActive
                ? "rotate-0 border-sea bg-sea text-white"
                : "border-white/15 bg-white/5 text-white/50 -rotate-12"
            }`}
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}