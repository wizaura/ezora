"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Vehicle } from "@/types/fleet.type";

interface Props {
    vehicle: Vehicle;
}

export default function VehicleFAQ({
    vehicle,
}: Props) {
    const faqs = [
        {
            question: `How many passengers can ${vehicle.name} accommodate?`,
            answer: `${vehicle.name} comfortably accommodates ${vehicle.seatingCapacity} passengers.`,
        },
        {
            question: "Is a professional chauffeur included?",
            answer: "Yes. Every Ezora Tours vehicle includes a professional, experienced chauffeur.",
        },
        {
            question: "Can I book this vehicle for multiple days?",
            answer: "Absolutely. The vehicle can be hired for single-day trips, weekend getaways and customised multi-day Kerala tours.",
        },
        {
            question: "Is airport transfer available?",
            answer: "Yes. We provide reliable airport pickup and drop-off services throughout Kerala.",
        },
        {
            question: "Can I customise my itinerary?",
            answer: "Yes. We can tailor your travel plan based on your preferred destinations and schedule.",
        },
        {
            question: "How do I book this vehicle?",
            answer: "Contact us through the enquiry form or WhatsApp. Our team will provide availability, pricing and a personalised quotation.",
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
                            FAQ
                        </p>
                        <span className="h-px w-10 bg-sea" />
                    </div>

                    <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold tracking-[-0.05em] text-dark-cerulean">
                        Frequently Asked
                        <span className="block text-dark-grey-blue/55">
                            Questions
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