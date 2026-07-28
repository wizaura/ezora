"use client";

import {
    ArrowDown,
    CheckCircle2,
    MessageSquareText,
    Receipt,
    CarFront,
} from "lucide-react";

const steps = [
    {
        number: "01",
        icon: MessageSquareText,
        title: "Send Your Enquiry",
        description:
            "Tell us about your travel plans, preferred destination, dates, number of passengers and any special requirements.",
    },
    {
        number: "02",
        icon: Receipt,
        title: "Receive Your Quote",
        description:
            "Our travel specialists will recommend the ideal vehicle or tour package and provide a transparent quotation tailored to your journey.",
    },
    {
        number: "03",
        icon: CheckCircle2,
        title: "Confirm Your Booking",
        description:
            "Review your itinerary, confirm your booking and relax while we take care of every travel detail.",
    },
    {
        number: "04",
        icon: CarFront,
        title: "Enjoy Your Journey",
        description:
            "Your professional chauffeur arrives on time, ensuring a safe, comfortable and memorable travel experience.",
    },
];

export default function JourneyProcessSection() {
    return (
        <section className="overflow-hidden bg-white py-16">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                {/* Header */}

                <div className="grid gap-12 border-b border-border pb-16 lg:grid-cols-12 lg:items-end">

                    <div className="lg:col-span-7">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-10 bg-sea" />

                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                                How It Works
                            </p>

                        </div>

                        <h2 className="max-w-[850px] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-dark-cerulean">
                            From enquiry to
                            <span className="block text-dark-grey-blue/55">
                                unforgettable journeys.
                            </span>
                        </h2>

                    </div>

                    <div className="lg:col-span-5">

                        <p className="max-w-md text-base leading-8 text-muted lg:ml-auto">
                            Booking with Ezora is simple and personalised.
                            From your first enquiry to the moment your journey
                            begins, our team ensures every step is smooth,
                            transparent and tailored to your travel needs.
                        </p>

                    </div>

                </div>

                {/* Timeline */}

                <div className="relative mt-20">

                    {/* Desktop Line */}

                    <div className="absolute left-0 right-0 top-14 hidden h-px bg-border lg:block" />

                    <div className="grid gap-10 lg:grid-cols-4">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.number}
                                    className="relative flex"
                                >
                                    {/* Connector */}

                                    {index !== steps.length - 1 && (
                                        <ArrowDown
                                            className="mx-auto mb-6 text-muted lg:hidden"
                                            size={24}
                                        />
                                    )}

                                    {/* Card */}

                                    <div className="group relative flex h-full w-full flex-col rounded-[30px] border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sea hover:bg-white hover:shadow-2xl">

                                        {/* Number */}

                                        <span className="text-xs font-semibold tracking-[0.18em] text-greenish-blue">
                                            {step.number}
                                        </span>

                                        {/* Icon */}

                                        <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-sea/10 text-sea transition duration-300 group-hover:bg-sea group-hover:text-white">
                                            <Icon size={30} />
                                        </div>

                                        {/* Title */}

                                        <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-dark-cerulean">
                                            {step.title}
                                        </h3>

                                        {/* Description */}

                                        <p className="mt-5 flex-1 leading-7 text-muted">
                                            {step.description}
                                        </p>

                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* Bottom Banner */}

                <div className="mt-20 rounded-[36px] bg-dark-cerulean px-8 py-10 text-center text-white lg:px-16">

                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-light-sea-green">
                        Ready to Begin?
                    </p>

                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                        Your perfect Kerala journey starts with a simple enquiry.
                    </h3>

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/75">
                        Whether you're planning a family holiday, airport transfer,
                        corporate trip or customised Kerala tour, our team is here
                        to guide you every step of the way.
                    </p>

                </div>

            </div>
        </section>
    );
}