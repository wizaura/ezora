"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  categoryName: string;
}

export default function CategoryFAQ({
    categoryName,
}: Props) {
    const faqs = [
        {
            question: `What makes ${categoryName} a good choice?`,
            answer: `Our ${categoryName.toLowerCase()} fleet combines comfort, reliability and professional chauffeur service, making it ideal for both short and long-distance journeys across Kerala.`,
        },
        {
            question: "Are all vehicles chauffeur-driven?",
            answer: "Yes. Every vehicle is operated by experienced, licensed and courteous chauffeurs, ensuring a safe and comfortable travel experience.",
        },
        {
            question: "Can these vehicles be booked for airport transfers?",
            answer: "Absolutely. Our fleet is available for airport pickups and drop-offs, with punctual service and sufficient luggage space for travellers.",
        },
        {
            question: "Can I hire these vehicles for multi-day tours?",
            answer: "Yes. Whether you're planning a weekend getaway or a multi-day Kerala tour, our vehicles can be booked for customised travel itineraries.",
        },
        {
            question: "Are the vehicles suitable for family or group travel?",
            answer: "Yes. Depending on the seating capacity, our vehicles comfortably accommodate families, business travellers and tour groups.",
        },
        {
            question: "How do I book a vehicle?",
            answer: "Simply contact our team through the enquiry form or WhatsApp. We'll recommend the most suitable vehicle based on your travel plans and provide a personalised quotation.",
        },
    ];

    const [open, setOpen] = useState<number>(0);

    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-5xl px-5 lg:px-8">

                {/* Heading */}

                <div className="mb-16 text-center">

                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-sea" />

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                            Frequently Asked Questions
                        </p>

                        <span className="h-px w-10 bg-sea" />
                    </div>

                    <h2 className="text-[clamp(2.6rem,5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                        Everything you need
                        <span className="block text-dark-grey-blue/55">
                            to know.
                        </span>
                    </h2>

                </div>

                {/* Accordion */}

                <div className="space-y-4">

                    {faqs.map((faq, index) => {
                        const isOpen = open === index;

                        return (
                            <div
                                key={faq.question}
                                className="overflow-hidden rounded-[24px] border border-border bg-background"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpen(isOpen ? -1 : index)
                                    }
                                    className="flex w-full items-center justify-between px-7 py-6 text-left"
                                >
                                    <span className="pr-6 text-lg font-semibold text-dark-cerulean">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        size={22}
                                        className={`shrink-0 transition-transform duration-300 ${
                                            isOpen
                                                ? "rotate-180 text-sea"
                                                : "text-muted"
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${
                                        isOpen
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