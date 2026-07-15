"use client";

import { useState } from "react";
import Image from "next/image";
import { TourPackage } from "@/data/kerala-packages";
import { CheckCircle2, Clock, MapPin, Map, ChevronDown } from "lucide-react";
import TourEnquiryForm from "./TourEnquiryForm";

type PackageDetailViewProps = {
  tourPackage: TourPackage;
};

export default function PackageDetailView({ tourPackage }: PackageDetailViewProps) {
  const [activeDay, setActiveDay] = useState<number | null>(1);

  const toggleDay = (day: number) => {
    setActiveDay(activeDay === day ? null : day);
  };

  return (
    <div className="bg-white">
      {/* Hero Gallery */}
      <div className="relative h-[40vh] min-h-[400px] w-full lg:h-[60vh]">
        <Image
          src={tourPackage.images[0]}
          alt={tourPackage.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark-cerulean/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-cerulean/90 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1440px] px-5 pb-12 lg:px-8 lg:pb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="rounded-full bg-light-sea-green px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              {tourPackage.category}
            </span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl max-w-4xl">
            {tourPackage.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-medium text-white/90 md:text-base">
            <div className="flex items-center gap-2">
              <Clock className="text-light-sea-green" size={20} />
              {tourPackage.duration}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-light-sea-green" size={20} />
              {tourPackage.destinations.length} Destinations
            </div>
            <div className="flex items-center gap-2">
              <Map className="text-light-sea-green" size={20} />
              Starting from {tourPackage.price}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-12 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Includes & Excludes */}
            <div className="mb-16 grid gap-8 md:grid-cols-2">
              <div className="rounded-[24px] bg-surface-soft p-8">
                <h3 className="mb-6 text-xl font-semibold text-dark-cerulean">What&apos;s Included</h3>
                <ul className="space-y-4">
                  {tourPackage.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-sea" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[24px] border border-border p-8">
                <h3 className="mb-6 text-xl font-semibold text-dark-cerulean">What&apos;s Excluded</h3>
                <ul className="space-y-4">
                  {tourPackage.excludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-1.5 flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-muted/20">
                        <span className="h-1 w-1 rounded-full bg-muted/60" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-sea" />
                <h2 className="text-2xl font-semibold uppercase tracking-wide text-dark-cerulean">Daily Itinerary</h2>
              </div>

              <div className="space-y-4">
                {tourPackage.itinerary.map((day) => (
                  <div key={day.day} className="overflow-hidden rounded-[20px] border border-border bg-white transition-colors hover:border-sea/30">
                    <button
                      onClick={() => toggleDay(day.day)}
                      className="flex w-full items-center justify-between p-6 text-left"
                    >
                      <div className="flex items-center gap-5">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-soft text-sm font-bold text-sea">
                          D{day.day}
                        </span>
                        <span className="text-lg font-semibold text-dark-cerulean">{day.title}</span>
                      </div>
                      <ChevronDown
                        className={`text-muted transition-transform duration-300 ${activeDay === day.day ? "rotate-180 text-sea" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${activeDay === day.day ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 pt-0 text-muted leading-relaxed pl-[84px]">
                          {day.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 rounded-[28px] border border-border bg-white p-6 shadow-xl shadow-dark-cerulean/5 lg:p-8">
              <h3 className="mb-2 text-2xl font-semibold text-dark-cerulean">Book this Package</h3>
              <p className="mb-8 text-sm text-muted">Send an enquiry and our travel experts will get back to you shortly.</p>
              <TourEnquiryForm prefilledPackage={tourPackage.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
