"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Heart,
  MapPin,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";
import { useEffect, useState } from "react";

const tourCategories = [
  {
    id: "honeymoon",
    number: "01",
    eyebrow: "Romantic Escapes",
    title: "Kerala Honeymoon Packages",
    shortDescription:
      "Misty hills, private stays and tranquil backwaters crafted for unforgettable moments together.",
    destinations: "Munnar · Thekkady · Alleppey",
    duration: "4–7 Days",
    image: "/images/home/rental-1.jpg",
    href: "/kerala-tour-packages/honeymoon",
    icon: Heart,
  },
  {
    id: "family",
    number: "02",
    eyebrow: "Family & Group Travel",
    title: "Kerala Family Holidays",
    shortDescription:
      "Thoughtfully planned journeys bringing together nature, wildlife, culture and memorable experiences for every generation.",
    destinations: "Kochi · Munnar · Thekkady",
    duration: "5–8 Days",
    image: "/images/home/rental-2.jpg",
    href: "/kerala-tour-packages/family",
    icon: Users,
  },
  {
    id: "backwaters",
    number: "03",
    eyebrow: "Backwater Experiences",
    title: "Luxury Houseboat Escapes",
    shortDescription:
      "Drift through palm-fringed waterways aboard a private Kerala houseboat with traditional cuisine and premium comfort.",
    destinations: "Alleppey · Kumarakom",
    duration: "1–3 Days",
    image: "/images/home/rental-3.jpg",
    href: "/kerala-tour-packages/houseboat",
    icon: Waves,
  },
];

export default function KeralaToursSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % tourCategories.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative overflow-hidden bg-dark-cerulean py-16 lg:py-20">
      {/* Background Image */}
      <Image
        src="/images/home/tour-1.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Background Overlays */}
      <div className="absolute inset-0 bg-dark-cerulean/55" />

      <div className="absolute inset-0 bg-gradient-to-b from-dark-cerulean/75 via-dark-cerulean/45 to-dark-cerulean/85" />

      {/* Decorative Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-sea/10 blur-[150px]"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-8 pb-8 lg:grid-cols-12 lg:items-end">
          {/* Left */}
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-light-sea-green" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-light-sea-green">
                Kerala Tour Packages
              </p>
            </div>

            <h2 className="max-w-[850px] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
              Discover Kerala,
              <span className="block text-white/55">your way.</span>
            </h2>
          </div>

          {/* Right */}
          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-md text-base leading-7 text-white/75 lg:ml-auto">
              From misty Munnar hills and tranquil backwaters to unforgettable
              family escapes, discover handcrafted journeys shaped around your
              pace, preferences and travel style.
            </p>

            <Link
              href="/kerala-tour-packages"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Explore all Kerala tours

              <ArrowUpRight
                size={17}
                className="text-light-sea-green transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Desktop Animated Cards */}
        <div
          className="relative mt-12 hidden h-[500px] lg:block"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {tourCategories.map((tour, index) => {
            const position =
              (index - activeIndex + tourCategories.length) %
              tourCategories.length;

            return (
              <AnimatedTourCard
                key={tour.id}
                tour={tour}
                position={position}
              />
            );
          })}
        </div>

        {/* Mobile Cards */}
        <div className="mt-10 grid gap-5 lg:hidden">
          {tourCategories.map((tour) => (
            <MobileTourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* Slider Controls */}
        <div className="mt-5 hidden items-center justify-center gap-2 lg:flex">
          {tourCategories.map((tour, index) => (
            <button
              key={tour.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${tour.title}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIndex === index
                  ? "w-10 bg-light-sea-green"
                  : "w-4 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Bottom Custom Itinerary CTA */}
        <div className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-white/15 pt-7 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sea/15 text-light-sea-green">
              <Sparkles size={19} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-light-sea-green">
                100% Customizable
              </p>

              <p className="mt-1 max-w-xl text-md leading-6 text-white/65">
                Tell us your dates, group size and interests. We&apos;ll create
                a personalized Kerala journey around you.
              </p>
            </div>
          </div>

          <Link
            href="/quick-quote"
            className="group inline-flex h-14 w-full shrink-0 items-center justify-center gap-3 rounded-full bg-sea px-7 text-sm font-semibold text-white transition-colors duration-300 hover:bg-light-sea-green sm:w-auto"
          >
            Create My Itinerary

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

type Tour = (typeof tourCategories)[number];

type AnimatedTourCardProps = {
  tour: Tour;
  position: number;
};

function AnimatedTourCard({
  tour,
  position,
}: AnimatedTourCardProps) {
  const Icon = tour.icon;

  const positionClasses = {
    0: "left-[4%] top-[35px] z-10 h-[430px] w-[30%]",
    1: "left-1/2 top-0 z-20 h-[500px] w-[38%] -translate-x-1/2",
    2: "right-[4%] top-[35px] z-10 h-[430px] w-[30%]",
  };

  return (
    <article
      className={`group absolute overflow-hidden rounded-[28px] bg-dark-cerulean shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        positionClasses[position as keyof typeof positionClasses]
      }`}
    >
      {/* Card Image */}
      <Image
        src={tour.image}
        alt={`${tour.title} by Ezora Tours & Travels Kerala`}
        fill
        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        sizes="40vw"
      />

      {/* Card Overlays */}
      <div className="absolute inset-0 bg-black/20 transition-colors duration-700 group-hover:bg-black/10" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />

      <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-black/60 to-transparent" />

      <div className="absolute inset-0 bg-dark-cerulean/10 mix-blend-multiply" />

      {/* Top Content */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-5 xl:p-6">
        <div className="flex min-w-0 items-center gap-2">
          <span className="shrink-0 text-[10px] font-semibold tracking-[0.15em] text-light-sea-green">
            {tour.number}
          </span>

          <span className="h-px w-5 shrink-0 bg-white/25" />

          <p className="truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
            {tour.eyebrow}
          </p>
        </div>

        <div className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-sea group-hover:bg-sea xl:h-11 xl:w-11">
          <Icon size={18} strokeWidth={1.7} />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 xl:p-6">
        {/* Metadata */}
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="flex items-center gap-2 text-xs font-medium text-white/80">
            <MapPin
              size={14}
              className="shrink-0 text-light-sea-green"
            />

            <span>{tour.destinations}</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-white/80">
            <CalendarDays
              size={14}
              className="shrink-0 text-light-sea-green"
            />

            <span>{tour.duration}</span>
          </div>
        </div>

        {/* Title */}
        <h3
          className={`font-semibold leading-[1.02] tracking-[-0.045em] text-white transition-all duration-700 ${
            position === 1
              ? "text-4xl xl:text-5xl"
              : "text-2xl xl:text-3xl"
          }`}
        >
          {tour.title}
        </h3>

        {/* Description — Center Card Only */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-700 ${
            position === 1
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/85">
              {tour.shortDescription}
            </p>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={tour.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white"
        >
          Explore Package

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-sea">
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </Link>
      </div>
    </article>
  );
}

function MobileTourCard({ tour }: { tour: Tour }) {
  const Icon = tour.icon;

  return (
    <article className="group relative min-h-[480px] overflow-hidden rounded-[24px] bg-dark-cerulean sm:min-h-[520px]">
      {/* Card Image */}
      <Image
        src={tour.image}
        alt={`${tour.title} by Ezora Tours & Travels Kerala`}
        fill
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        sizes="100vw"
      />

      {/* Card Overlays */}
      <div className="absolute inset-0 bg-black/15" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/10" />

      <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-black/55 to-transparent" />

      {/* Top Content */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-5">
        <div className="flex min-w-0 items-center gap-2 pr-3">
          <span className="shrink-0 text-[10px] font-semibold tracking-[0.15em] text-light-sea-green">
            {tour.number}
          </span>

          <span className="h-px w-5 shrink-0 bg-white/25" />

          <p className="truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">
            {tour.eyebrow}
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md">
          <Icon size={17} strokeWidth={1.7} />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
        {/* Metadata */}
        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2">
          <span className="flex items-center gap-1.5 text-xs font-medium text-white/80">
            <MapPin
              size={13}
              className="shrink-0 text-light-sea-green"
            />

            {tour.destinations}
          </span>

          <span className="flex items-center gap-1.5 text-xs font-medium text-white/80">
            <CalendarDays
              size={13}
              className="shrink-0 text-light-sea-green"
            />

            {tour.duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl">
          {tour.title}
        </h3>

        {/* Description */}
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
          {tour.shortDescription}
        </p>

        {/* CTA */}
        <Link
          href={tour.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white"
        >
          Explore Package

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
            <ArrowUpRight
              size={15}
              className="text-light-sea-green"
            />
          </span>
        </Link>
      </div>
    </article>
  );
}