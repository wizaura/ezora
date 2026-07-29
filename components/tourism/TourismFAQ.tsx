"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What is the best time to visit Kerala?",
        answer:
            "Kerala can be visited throughout the year. October to March offers pleasant weather for sightseeing, while June to September is ideal for experiencing the monsoon and lush greenery.",
    },
    {
        question: "How many days are recommended for exploring Kerala?",
        answer:
            "A 5–7 day itinerary covers major highlights, while 8–10 days allow you to enjoy hill stations, beaches, backwaters and wildlife at a relaxed pace.",
    },
    {
        question: "Are these destinations suitable for families?",
        answer:
            "Yes. Most destinations featured in our guide are ideal for families, couples, solo travellers and groups, with recommendations based on different travel styles.",
    },
    {
        question: "Can Ezora Tours arrange transportation?",
        answer:
            "Absolutely. We provide chauffeur-driven vehicles, airport transfers and customised travel solutions throughout Kerala.",
    },
    {
        question: "Do the destination guides include entry fees and timings?",
        answer:
            "Yes. Wherever available, each destination guide includes opening hours, entry fees, recommended visit duration and travel tips.",
    },
    {
        question: "Can I create a customised Kerala itinerary?",
        answer:
            "Yes. Our team can create personalised itineraries based on your interests, travel duration and preferred destinations.",
    },
];

export default function TourismFAQ() {
    const [open, setOpen] = useState(0);

    return (
        <section className="bg-background py-16">
            <div className="mx-auto max-w-5xl px-5">

                <div className="mb-14 text-center">

                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-sea" />
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                            Frequently Asked Questions
                        </p>
                        <span className="h-px w-10 bg-sea" />
                    </div>

                    <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold tracking-[-0.05em] text-dark-cerulean">
                        Everything you need
                        <span className="block text-dark-grey-blue/55">
                            before exploring Kerala.
                        </span>
                    </h2>

                </div>

                <div className="space-y-4">

                    {faqs.map((faq, index) => {
                        const active = open === index;

                        return (
                            <div
                                key={faq.question}
                                className="overflow-hidden rounded-[24px] border border-border bg-white"
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
                                            active
                                                ? "rotate-180 text-sea"
                                                : ""
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