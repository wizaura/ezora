"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: "family-tour",
    quote:
      "From our airport pickup to the final day of our Kerala journey, everything was handled with exceptional care. The vehicle was spotless, our chauffeur was professional, and the entire experience felt effortless.",
    name: "Customer Name",
    location: "Bengaluru, Karnataka",
    journey: "Kerala Family Holiday",
    image: "/images/home/testimonial-1.jpg",
    rating: 5,
  },
  {
    id: "group-travel",
    quote:
      "Travelling as a large group can be complicated, but Ezora made the entire journey remarkably comfortable. The spacious vehicle, punctual service and knowledgeable chauffeur made a real difference.",
    name: "Customer Name",
    location: "Mumbai, Maharashtra",
    journey: "Group Journey · Force Urbania",
    image: "/images/home/testimonial-2.jpg",
    rating: 5,
  },
  {
    id: "honeymoon",
    quote:
      "Our Kerala honeymoon was exactly the kind of relaxed experience we hoped for. Every transfer was on time, the itinerary felt personal, and we always had someone available whenever we needed help.",
    name: "Customer Name",
    location: "Hyderabad, Telangana",
    journey: "Kerala Honeymoon Package",
    image: "/images/home/testimonial-3.jpg",
    rating: 5,
  },
  {
    id: "corporate",
    quote:
      "Professional, punctual and dependable from beginning to end. The vehicle was presented beautifully and the chauffeur ensured our business travel across Kerala ran exactly to schedule.",
    name: "Customer Name",
    location: "Chennai, Tamil Nadu",
    journey: "Corporate Chauffeur Service",
    image: "/images/home/testimonial-4.jpg",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeTestimonial = testimonials[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  function showPrevious() {
    setActiveIndex(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length,
    );
  }

  function showNext() {
    setActiveIndex(
      (current) => (current + 1) % testimonials.length,
    );
  }

  return (
    <section className="overflow-hidden bg-surface-soft py-16">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-8 pb-10 lg:grid-cols-12 lg:items-end lg:pb-14">
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-sea" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                Traveller Stories
              </p>
            </div>

            <h2 className="max-w-[850px] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-dark-cerulean">
              Journeys remembered.
              <span className="block text-dark-grey-blue/55">
                Experiences shared.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-md text-base leading-7 text-muted lg:ml-auto">
              Hear from travellers who chose Ezora for chauffeur-driven
              journeys, Kerala holidays, group travel and corporate mobility.
            </p>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div
          className="relative overflow-hidden rounded-[28px] bg-white"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid lg:min-h-[620px] lg:grid-cols-12">
            {/* Left Content */}
            <div className="relative flex flex-col justify-between p-6 sm:p-8 lg:col-span-7 lg:p-12 xl:p-14">
              {/* Decorative Quote */}
              <Quote
                size={120}
                strokeWidth={1}
                className="pointer-events-none absolute right-8 top-8 text-dark-cerulean/[0.045]"
                aria-hidden="true"
              />

              {/* Main Testimonial */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {Array.from({
                    length: activeTestimonial.rating,
                  }).map((_, index) => (
                    <Star
                      key={index}
                      size={17}
                      fill="currentColor"
                      strokeWidth={1.5}
                      className="text-sea"
                    />
                  ))}
                </div>

                {/* Journey Type */}
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-greenish-blue">
                  {activeTestimonial.journey}
                </p>

                {/* Quote */}
                <blockquote className="mt-7 max-w-3xl">
                  <p
                    key={activeTestimonial.id}
                    className="text-[clamp(1.8rem,3.2vw,3.4rem)] font-medium leading-[1.15] tracking-[-0.045em] text-dark-cerulean"
                  >
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </p>
                </blockquote>
              </div>

              {/* Bottom */}
              <div className="relative z-10 mt-12 flex flex-col gap-8 border-t border-border pt-7 sm:flex-row sm:items-end sm:justify-between lg:mt-16">
                {/* Customer */}
                <div>
                  <p className="text-base font-semibold text-dark-cerulean">
                    {activeTestimonial.name}
                  </p>

                  <p className="mt-1 text-sm text-muted">
                    {activeTestimonial.location}
                  </p>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Previous testimonial"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-dark-cerulean transition-all duration-300 hover:border-sea hover:bg-sea hover:text-white"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next testimonial"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-cerulean text-white transition-colors duration-300 hover:bg-greenish-blue"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[440px] overflow-hidden lg:col-span-5 lg:min-h-0">
              {testimonials.map((testimonial, index) => (
                <Image
                  key={testimonial.id}
                  src={testimonial.image}
                  alt={`${testimonial.journey} experience with Ezora Tours & Travels Kerala`}
                  fill
                  className={`object-cover transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    activeIndex === index
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-105 opacity-0"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              ))}

              {/* Image Overlays */}
              <div className="absolute inset-0 bg-dark-cerulean/10" />

              <div className="absolute inset-0 bg-gradient-to-t from-dark-cerulean/60 via-transparent to-transparent" />

              {/* Top Counter */}
              <div className="absolute right-5 top-5 z-10 sm:right-7 sm:top-7">
                <div className="rounded-full border border-white/20 bg-black/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                  {String(activeIndex + 1).padStart(2, "0")}

                  <span className="mx-2 text-white/40">/</span>

                  {String(testimonials.length).padStart(2, "0")}
                </div>
              </div>

              {/* Bottom Image Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-light-sea-green" />

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                    Travel with Ezora
                  </p>
                </div>

                <p className="mt-3 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                  Comfort, care and Kerala expertise in every journey.
                </p>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-0 left-0 right-0 z-20 hidden lg:flex">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className="relative h-1 flex-1 overflow-hidden bg-dark-cerulean/10"
              >
                {activeIndex === index && (
                  <span
                    key={`${testimonial.id}-${activeIndex}-${isPaused}`}
                    className={`absolute inset-y-0 left-0 bg-sea ${
                      isPaused
                        ? "w-full"
                        : "animate-[testimonialProgress_6s_linear_forwards]"
                    }`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Pagination */}
        <div className="mt-5 flex items-center justify-center gap-2 lg:hidden">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIndex === index
                  ? "w-10 bg-sea"
                  : "w-4 bg-dark-cerulean/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}