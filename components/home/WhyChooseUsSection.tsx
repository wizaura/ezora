"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CarFront,
  ChevronDown,
  Clock3,
  Map,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    id: "chauffeurs",
    number: "01",
    eyebrow: "People You Can Trust",
    title: "Professional Chauffeurs",
    description:
      "Travel with experienced, courteous drivers who know Kerala's roads, destinations and routes — ensuring every journey feels safe, comfortable and effortless.",
    image: "/images/home/why-1.png",
    icon: ShieldCheck,
  },
  {
    id: "fleet",
    number: "02",
    eyebrow: "Comfort Without Compromise",
    title: "Premium, Well-Maintained Fleet",
    description:
      "From executive sedans to spacious Force Urbania and Traveller vehicles, every vehicle is carefully maintained for comfort, cleanliness and dependable travel.",
    image: "/images/home/why-2.png",
    icon: CarFront,
  },
  {
    id: "journeys",
    number: "03",
    eyebrow: "Designed Around You",
    title: "Journeys Built Around You",
    description:
      "Airport transfers, intercity journeys, family holidays or corporate travel — every trip is planned around your schedule, group size and individual requirements.",
    image: "/images/home/why-3.png",
    icon: Map,
  },
  {
    id: "support",
    number: "04",
    eyebrow: "We're Here When Needed",
    title: "24/7 On-Road Assistance",
    description:
      "From your first pickup to the final drop-off, our team remains available to help with route changes, travel coordination and unexpected requirements.",
    image: "/images/home/why-4.svg",
    icon: Clock3,
  },
];

export default function WhyChooseEzoraSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeBenefit = benefits[activeIndex];

  return (
    <section className="overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-8 pb-10 lg:grid-cols-12 lg:items-end lg:pb-16">
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-sea" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                Why Choose Ezora
              </p>
            </div>

            <h2 className="max-w-[850px] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-dark-cerulean">
              More than transport.

              <span className="block text-dark-grey-blue/55">
                A better way to travel.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-md text-base leading-7 text-muted lg:ml-auto">
              Every Ezora journey brings together professional chauffeurs,
              premium vehicles and dependable local support for a travel
              experience built around your comfort.
            </p>
          </div>
        </div>

        {/* ========================= */}
        {/* MOBILE / TABLET LAYOUT    */}
        {/* ========================= */}

        <div className="lg:hidden">
          <div className="border-t border-border">
            {benefits.map((benefit, index) => (
              <MobileBenefitRow
                key={benefit.id}
                benefit={benefit}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 rounded-[24px] bg-surface-soft p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-greenish-blue">
              Planning a journey?
            </p>

            <p className="mt-2 max-w-lg text-sm leading-6 text-muted">
              Tell us where you&apos;re going and what you need. We&apos;ll help
              you choose the right vehicle and travel plan.
            </p>

            <Link
              href="/quick-quote"
              className="group mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-dark-cerulean px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-greenish-blue sm:w-auto sm:self-start"
            >
              Get Quick Quote

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* ========================= */}
        {/* DESKTOP LAYOUT            */}
        {/* ========================= */}

        <div className="hidden gap-10 lg:grid lg:grid-cols-12 lg:items-stretch">
          {/* Left Image */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[624px] overflow-hidden rounded-[28px] bg-dark-cerulean">
              {/* Images */}
              {benefits.map((benefit, index) => (
                <Image
                  key={benefit.id}
                  src={benefit.image}
                  alt={`${benefit.title} with Ezora Tours & Travels Kerala`}
                  fill
                  className={`object-cover transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    activeIndex === index
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-105 opacity-0"
                  }`}
                  sizes="50vw"
                />
              ))}

              {/* Overlays */}
              <div className="absolute inset-0 bg-dark-cerulean/10" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              {/* Top Badge */}
              <div className="absolute left-8 top-8 z-10">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-light-sea-green" />

                  Chauffeur-driven across Kerala
                </div>
              </div>

              {/* Current Number */}
              <div className="absolute right-8 top-8 z-10">
                <span className="text-sm font-medium text-white/60">
                  {String(activeIndex + 1).padStart(2, "0")}

                  <span className="mx-2 text-white/25">/</span>

                  {String(benefits.length).padStart(2, "0")}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-8">
                <div key={activeBenefit.id}>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs font-semibold tracking-[0.15em] text-light-sea-green">
                      {activeBenefit.number}
                    </span>

                    <span className="h-px w-8 bg-white/30" />

                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/65">
                      {activeBenefit.eyebrow}
                    </span>
                  </div>

                  <p className="max-w-lg text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white">
                    {activeBenefit.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Benefits */}
          <div className="flex flex-col lg:col-span-6">
            <div className="border-t border-border">
              {benefits.map((benefit, index) => (
                <DesktopBenefitRow
                  key={benefit.id}
                  benefit={benefit}
                  isActive={activeIndex === index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="mt-auto pt-8">
              <div className="flex items-center justify-between gap-5 rounded-[24px] bg-surface-soft p-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-greenish-blue">
                    Planning a journey?
                  </p>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                    Tell us where you&apos;re going and what you need. We&apos;ll
                    help you choose the right vehicle and travel plan.
                  </p>
                </div>

                <Link
                  href="/quick-quote"
                  className="group flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-dark-cerulean px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-greenish-blue"
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
      </div>
    </section>
  );
}

type Benefit = (typeof benefits)[number];

type DesktopBenefitRowProps = {
  benefit: Benefit;
  isActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
};

function DesktopBenefitRow({
  benefit,
  isActive,
  onMouseEnter,
  onClick,
}: DesktopBenefitRowProps) {
  const Icon = benefit.icon;

  return (
    <button
      type="button"
      onMouseEnter={onMouseEnter}
      onFocus={onMouseEnter}
      onClick={onClick}
      className="group w-full border-b border-border text-left"
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-start gap-5 py-7">
        {/* Icon */}
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
            isActive
              ? "border-sea bg-sea text-white"
              : "border-border bg-white text-greenish-blue group-hover:border-sea/40"
          }`}
        >
          <Icon size={20} strokeWidth={1.7} />
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3">
            <span
              className={`text-[10px] font-semibold tracking-[0.15em] transition-colors duration-500 ${
                isActive ? "text-sea" : "text-muted/60"
              }`}
            >
              {benefit.number}
            </span>

            <h3
              className={`text-2xl font-semibold tracking-[-0.035em] transition-colors duration-500 ${
                isActive ? "text-dark-cerulean" : "text-dark-grey-blue"
              }`}
            >
              {benefit.title}
            </h3>
          </div>

          {/* Expandable Description */}
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isActive
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="max-w-lg pt-3 text-sm leading-6 text-muted">
                {benefit.description}
              </p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
            isActive
              ? "rotate-0 border-sea bg-sea text-white"
              : "-rotate-12 border-border text-muted group-hover:rotate-0 group-hover:border-sea group-hover:text-sea"
          }`}
        >
          <ArrowUpRight size={17} />
        </div>
      </div>
    </button>
  );
}

type MobileBenefitRowProps = {
  benefit: Benefit;
  isActive: boolean;
  onClick: () => void;
};

function MobileBenefitRow({
  benefit,
  isActive,
  onClick,
}: MobileBenefitRowProps) {
  const Icon = benefit.icon;

  return (
    <article className="border-b border-border">
      {/* Row Header */}
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isActive}
        className="flex w-full items-center gap-4 py-5 text-left"
      >
        {/* Icon */}
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
            isActive
              ? "border-sea bg-sea text-white"
              : "border-border bg-white text-greenish-blue"
          }`}
        >
          <Icon size={19} strokeWidth={1.7} />
        </div>

        {/* Title */}
        <div className="min-w-0 flex-1">
          <span
            className={`text-[10px] font-semibold tracking-[0.15em] ${
              isActive ? "text-sea" : "text-muted/60"
            }`}
          >
            {benefit.number}
          </span>

          <h3
            className={`mt-1 text-xl font-semibold leading-tight tracking-[-0.035em] ${
              isActive ? "text-dark-cerulean" : "text-dark-grey-blue"
            }`}
          >
            {benefit.title}
          </h3>
        </div>

        {/* Chevron */}
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
            isActive
              ? "rotate-180 border-sea bg-sea text-white"
              : "border-border text-muted"
          }`}
        >
          <ChevronDown size={17} />
        </div>
      </button>

      {/* Expandable Mobile Content */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isActive
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6">
            {/* Corresponding Image */}
            <div className="relative min-h-[360px] overflow-hidden rounded-[22px] bg-dark-cerulean sm:min-h-[440px]">
              <Image
                src={benefit.image}
                alt={`${benefit.title} with Ezora Tours & Travels Kerala`}
                fill
                className="object-cover"
                sizes="100vw"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-dark-cerulean/10" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              {/* Badge */}
              <div className="absolute left-4 top-4 z-10">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-3 py-2 text-[10px] font-medium text-white backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-light-sea-green" />

                  {benefit.eyebrow}
                </div>
              </div>

              {/* Image Title */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-light-sea-green">
                    {benefit.number}
                  </span>

                  <span className="h-px w-6 bg-white/30" />
                </div>

                <p className="max-w-sm text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white">
                  {benefit.title}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-5 text-sm leading-6 text-muted">
              {benefit.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}