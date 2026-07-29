"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { TourismGuideDetail } from "@/types/tourism.type";

interface Props {
    guide: TourismGuideDetail;
}

export default function TourismFAQ({ guide }: Props) {
    const faqs = [
        {
            question: `What is the best time to visit ${guide.title}?`,
            answer:
                guide.bestTimeToVisit ??
                "The destination can be visited throughout the year depending on your travel preferences.",
        },
        {
            question: `How much time should I spend at ${guide.title}?`,
            answer:
                guide.duration ??
                "Most visitors spend a few hours exploring the destination.",
        },
        {
            question: "Is there an entry fee?",
            answer:
                guide.entryFee ??
                "Please check with local authorities before your visit.",
        },
        {
            question: "What are the opening hours?",
            answer:
                guide.openingHours ??
                "Opening hours may vary depending on the season.",
        },
        {
            question: "Can Ezora arrange transportation?",
            answer:
                "Yes. Ezora Tours offers chauffeur-driven vehicles, airport transfers and customised Kerala tour packages.",
        },
    ];

    const [open, setOpen] = useState(0);

    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-5xl px-5">

                <div className="mb-14 text-center">

                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-sea" />
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                            Frequently Asked Questions
                        </p>
                        <span className="h-px w-10 bg-sea" />
                    </div>

                    <h2 className="text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                        Have questions?
                        <span className="block text-dark-grey-blue/60">
                            We've got answers.
                        </span>
                    </h2>

                </div>

                <div className="space-y-4">

                    {faqs.map((faq, index) => {
                        const active = open === index;

                        return (
                            <div
                                key={faq.question}
                                className="overflow-hidden rounded-[24px] border border-border bg-background"
                            >
                                <button
                                    onClick={() =>
                                        setOpen(active ? -1 : index)
                                    }
                                    className="flex w-full items-center justify-between px-7 py-6 text-left"
                                >
                                    <span className="font-semibold text-dark-cerulean">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        className={`transition ${
                                            active ? "rotate-180 text-sea" : ""
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${
                                        active
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">

                                        <div className="border-t border-border px-7 py-6">

                                            <p className="leading-8 text-muted">
                                                {faq.answer}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}