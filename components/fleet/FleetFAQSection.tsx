"use client";

import Link from "next/link";
import { useState } from "react";
import {
    ArrowRight,
    ChevronDown,
    MessageCircle,
    Sparkles,
} from "lucide-react";

import type { FleetFAQ } from "@/data/fleet-faqs";

type FleetFAQSectionProps = {
    faqs: FleetFAQ[];
};

export default function FleetFAQSection({
    faqs,
}: FleetFAQSectionProps) {
    const [activeId, setActiveId] = useState<string | null>(
        faqs.find((faq) => faq.isActive)?.id ?? null,
    );

    const activeFAQs = faqs
        .filter((faq) => faq.isActive)
        .sort((a, b) => a.sortOrder - b.sortOrder);

    const toggleFAQ = (id: string) => {
        setActiveId((currentId) => (currentId === id ? null : id));
    };

    if (activeFAQs.length === 0) {
        return null;
    }

    return (
        <section className="bg-background py-16">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
                {/* Section Header */}
                <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-12 lg:items-end lg:pb-16">
                    <div className="lg:col-span-8">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-sea" />

                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                                Fleet FAQs
                            </p>
                        </div>

                        <h2 className="max-w-[850px] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-dark-cerulean">
                            Questions about our fleet?
                            <span className="block text-dark-grey-blue/55">
                                We have the answers.
                            </span>
                        </h2>
                    </div>

                    <div className="lg:col-span-4 lg:pb-1">
                        <p className="max-w-md text-base leading-7 text-muted lg:ml-auto">
                            Find answers about vehicle capacity, chauffeur-driven rentals,
                            airport transfers, multi-day journeys and corporate leasing with
                            Ezora.
                        </p>
                    </div>
                </div>

                {/* FAQ Layout */}
                <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-12 lg:items-start">
                    {/* Left Sticky Panel */}
                    <div className="lg:sticky lg:top-28 lg:col-span-4">
                        <div className="relative overflow-hidden rounded-[28px] bg-dark-cerulean p-6 sm:p-8 lg:min-h-[500px] lg:p-9">
                            {/* Decorative Glow */}
                            <div
                                className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sea/20 blur-[100px]"
                                aria-hidden="true"
                            />

                            <div
                                className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-light-sea-green/10 blur-[120px]"
                                aria-hidden="true"
                            />

                            <div className="relative z-10 flex h-full flex-col">
                                {/* Icon */}
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-light-sea-green">
                                    <MessageCircle size={20} strokeWidth={1.7} />
                                </div>

                                {/* Content */}
                                <div className="mt-8">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-light-sea-green">
                                        Need more help?
                                    </p>

                                    <h3 className="mt-3 max-w-sm text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl">
                                        Tell us about your journey.
                                    </h3>

                                    <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
                                        Share your group size, pickup location, destination and travel
                                        dates. Our team can help you identify the right vehicle for your
                                        requirements.
                                    </p>
                                </div>

                                {/* Journey Points */}
                                <div className="mt-8 space-y-3">
                                    {[
                                        "Group size & luggage",
                                        "Pickup & destination",
                                        "Travel dates & duration",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3 text-sm font-medium text-white/70"
                                        >
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sea/20 text-light-sea-green">
                                                <Sparkles size={11} />
                                            </span>

                                            {item}
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="mt-9 lg:mt-auto lg:pt-10">
                                    <Link
                                        href="/quick-quote"
                                        className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-sea px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-light-sea-green sm:w-auto"
                                    >
                                        Get a Quick Quote

                                        <ArrowRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="lg:col-span-8">
                        <div className="overflow-hidden rounded-[28px] border border-border bg-white">
                            {activeFAQs.map((faq, index) => (
                                <FAQItem
                                    key={faq.id}
                                    faq={faq}
                                    index={index}
                                    isOpen={activeId === faq.id}
                                    onToggle={() => toggleFAQ(faq.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

type FAQItemProps = {
    faq: FleetFAQ;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
};

function FAQItem({
    faq,
    index,
    isOpen,
    onToggle,
}: FAQItemProps) {
    const contentId = `faq-answer-${faq.id}`;

    return (
        <article className="border-b border-border last:border-b-0">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="group flex w-full items-start gap-4 px-5 py-6 text-left sm:gap-6 sm:px-7 sm:py-7 lg:px-8"
            >
                {/* Number */}
                <span
                    className={`mt-1 shrink-0 text-[10px] font-semibold tracking-[0.15em] transition-colors duration-300 ${isOpen ? "text-sea" : "text-muted/60"
                        }`}
                >
                    {String(index + 1).padStart(2, "0")}
                </span>

                {/* Question */}
                <span className="min-w-0 flex-1">
                    <span
                        className={`block text-lg font-semibold leading-snug tracking-[-0.025em] transition-colors duration-300 sm:text-xl ${isOpen
                                ? "text-sea"
                                : "text-dark-cerulean group-hover:text-greenish-blue"
                            }`}
                    >
                        {faq.question}
                    </span>
                </span>

                {/* Toggle Icon */}
                <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isOpen
                            ? "rotate-180 border-sea bg-sea text-white"
                            : "border-border bg-background text-muted group-hover:border-sea group-hover:text-sea"
                        }`}
                >
                    <ChevronDown size={17} strokeWidth={1.8} />
                </span>
            </button>

            {/* Answer Reveal */}
            <div
                id={contentId}
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="px-5 pb-7 pl-[3.75rem] sm:px-7 sm:pb-8 sm:pl-[5.25rem] lg:px-8 lg:pl-[5.5rem]">
                        <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}