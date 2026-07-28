"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
    {
        question: "How can I book a vehicle with Ezora?",
        answer:
            "You can book by filling out our enquiry form, contacting us via WhatsApp, calling our travel specialists, or sending us an email. We'll guide you through the booking process and recommend the best travel option for your needs.",
    },
    {
        question: "Do you provide airport transfers across Kerala?",
        answer:
            "Yes. We provide reliable airport transfers to and from Kannur, Calicut, Cochin and Trivandrum airports, with professional chauffeurs and comfortable premium vehicles.",
    },
    {
        question: "Can I customise my Kerala tour package?",
        answer:
            "Absolutely. Every itinerary can be tailored to your travel dates, destinations, accommodation preferences and sightseeing plans to create a personalised Kerala experience.",
    },
    {
        question: "Are your vehicles chauffeur-driven?",
        answer:
            "Yes. All our vehicles are chauffeur-driven by experienced and professional drivers, ensuring a safe, comfortable and hassle-free journey.",
    },
    {
        question: "Do you offer transportation for weddings and corporate events?",
        answer:
            "Yes. We provide premium transportation for weddings, corporate travel, conferences, group events and other special occasions across Kerala.",
    },
    {
        question: "How soon will I receive a response after submitting an enquiry?",
        answer:
            "Our team aims to respond as quickly as possible during business hours. For urgent travel requirements, we recommend contacting us directly by phone or WhatsApp.",
    },
];

export default function ContactFAQSection() {
    const [open, setOpen] = useState(0);

    return (
        <section className="overflow-hidden bg-background py-16">
            <div className="mx-auto max-w-[1200px] px-5 lg:px-8">

                {/* Header */}

                <div className="text-center">

                    <div className="mb-5 flex items-center justify-center gap-3">

                        <span className="h-px w-10 bg-sea" />

                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                            Frequently Asked Questions
                        </p>

                        <span className="h-px w-10 bg-sea" />

                    </div>

                    <h2 className="text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-dark-cerulean">
                        Everything you need
                        <span className="block text-dark-grey-blue/55">
                            before your journey.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
                        Find answers to the questions travellers ask us most.
                        If you need any additional information, our team is
                        always happy to help.
                    </p>

                </div>

                {/* FAQ */}

                <div className="mt-16 space-y-5">

                    {faqs.map((faq, index) => {
                        const isOpen = open === index;

                        return (
                            <div
                                key={faq.question}
                                className="overflow-hidden rounded-[24px] border border-border bg-white transition-all duration-300"
                            >
                                <button
                                    onClick={() =>
                                        setOpen(
                                            isOpen
                                                ? -1
                                                : index,
                                        )
                                    }
                                    className="flex w-full items-center justify-between p-7 text-left"
                                >
                                    <h3 className="pr-6 text-lg font-semibold text-dark-cerulean sm:text-xl">
                                        {faq.question}
                                    </h3>

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sea/10 text-sea">

                                        {isOpen ? (
                                            <Minus size={20} />
                                        ) : (
                                            <Plus size={20} />
                                        )}

                                    </div>
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
                                            <p className="max-w-4xl leading-8 text-muted">
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