"use client";

import {
    ArrowRight,
    Calculator,
    FileText,
    MapPinned,
    CarFront,
} from "lucide-react";

const steps = [
    {
        number: "01",
        icon: MapPinned,
        title: "Share Your Journey",
        description:
            "Enter your pickup location, destination, travel date and preferred vehicle type.",
    },
    {
        number: "02",
        icon: Calculator,
        title: "Instant Distance Calculation",
        description:
            "We calculate the distance and estimated travel time using Google Maps for accurate pricing.",
    },
    {
        number: "03",
        icon: FileText,
        title: "Receive Your Quotation",
        description:
            "A professional quotation PDF is generated instantly and delivered to your email.",
    },
    {
        number: "04",
        icon: CarFront,
        title: "Confirm Your Booking",
        description:
            "Our team will contact you to confirm your trip and arrange your preferred vehicle.",
    },
];

export default function RentalProcessSection() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-sea" />

                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                            Simple Process
                        </p>

                        <span className="h-px w-10 bg-sea" />
                    </div>

                    <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-dark-cerulean">
                        Booking your rental
                        <span className="block text-dark-grey-blue/55">
                            takes just a few minutes.
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted">
                        Our streamlined quotation system ensures transparent
                        pricing and a hassle-free booking experience from
                        enquiry to confirmation.
                    </p>
                </div>

                {/* Timeline */}

                <div className="mt-20 grid gap-8 lg:grid-cols-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.number}
                                className="group relative rounded-[28px] border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sea/30 hover:shadow-xl"
                            >
                                {/* Arrow */}

                                {index !== steps.length - 1 && (
                                    <div className="absolute -right-6 top-16 hidden lg:block">
                                        <ArrowRight
                                            size={22}
                                            className="text-sea/40"
                                        />
                                    </div>
                                )}

                                <span className="text-sm font-semibold tracking-[0.2em] text-greenish-blue">
                                    {step.number}
                                </span>

                                <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sea/10 text-sea transition-all duration-300 group-hover:bg-sea group-hover:text-white">
                                    <Icon size={24} />
                                </div>

                                <h3 className="mt-6 text-xl font-semibold text-dark-cerulean">
                                    {step.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-muted">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}