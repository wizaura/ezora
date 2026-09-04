"use client";

import {
    Calculator,
    Clock3,
    FileText,
    MapPinned,
} from "lucide-react";

import RentalForm from "./RentalForm";

const features = [
    {
        icon: MapPinned,
        title: "Google Maps Calculation",
        description:
            "Accurate distance and estimated travel time using Google Maps.",
    },
    {
        icon: Calculator,
        title: "Instant Quotation",
        description:
            "Transparent rental pricing based on your journey details.",
    },
    {
        icon: FileText,
        title: "Professional PDF Quote",
        description:
            "Receive a beautifully formatted quotation directly in your email.",
    },
    {
        icon: Clock3,
        title: "Fast Response",
        description:
            "Our team reviews and confirms your booking without delays.",
    },
];

export default function RentalEnquirySection() {
    return (
        <section className="w-full overflow-x-hidden bg-gradient-to-b from-white via-surface-soft to-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

                <div className="grid w-full min-w-0 gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">

                    {/* LEFT */}
                    <div className="w-full min-w-0 lg:col-span-5">
                        
                        {/* Sticky wrapper */}
                        <div className="w-full lg:sticky lg:top-28">
                            
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 shrink-0 bg-sea" />

                                <p className="min-w-0 text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                                    Rental Enquiry
                                </p>
                            </div>

                            <h2 className="max-w-full break-words text-[clamp(2.5rem,5vw,5.3rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-dark-cerulean">
                                Get your
                                <span className="block text-dark-grey-blue/55">
                                    instant rental quotation.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-xl break-words text-base leading-7 text-muted">
                                Planning a journey across Kerala? Simply enter your
                                pickup and destination details, choose your vehicle,
                                and our intelligent quotation system will calculate
                                the distance, travel time, and estimated rental
                                cost. A professional quotation PDF will be sent
                                directly to your email.
                            </p>

                            {/* Feature Cards */}
                            <div className="mt-10 grid min-w-0 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
                                {features.map((feature) => {
                                    const Icon = feature.icon;

                                    return (
                                        <div
                                            key={feature.title}
                                            className="group min-w-0 rounded-3xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sea/30 hover:shadow-xl sm:p-6"
                                        >
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sea/10 text-sea transition-colors duration-300 group-hover:bg-sea group-hover:text-white">
                                                <Icon size={22} />
                                            </div>

                                            <h3 className="mt-5 break-words text-lg font-semibold text-dark-cerulean">
                                                {feature.title}
                                            </h3>

                                            <p className="mt-2 break-words text-sm leading-6 text-muted">
                                                {feature.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Bottom Stats */}
                            <div className="mt-10 flex min-w-0 flex-wrap gap-3 sm:mt-12 sm:gap-5">
                                <div className="min-w-0 rounded-3xl border border-border bg-white px-5 py-4 shadow-sm sm:px-6 sm:py-5">
                                    <h3 className="text-2xl font-semibold text-dark-cerulean sm:text-3xl">
                                        24/7
                                    </h3>

                                    <p className="mt-1 text-sm text-muted">
                                        Booking Support
                                    </p>
                                </div>

                                <div className="min-w-0 rounded-3xl border border-border bg-white px-5 py-4 shadow-sm sm:px-6 sm:py-5">
                                    <h3 className="text-2xl font-semibold text-dark-cerulean sm:text-3xl">
                                        100%
                                    </h3>

                                    <p className="mt-1 text-sm text-muted">
                                        Transparent Pricing
                                    </p>
                                </div>

                                <div className="min-w-0 rounded-3xl border border-border bg-white px-5 py-4 shadow-sm sm:px-6 sm:py-5">
                                    <h3 className="text-2xl font-semibold text-dark-cerulean sm:text-3xl">
                                        PDF
                                    </h3>

                                    <p className="mt-1 text-sm text-muted">
                                        Instant Quotation
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative w-full min-w-0 lg:col-span-7">

                        {/* Background decoration */}
                        <div className="absolute -left-10 top-12 hidden h-52 w-52 rounded-full bg-sea/10 blur-3xl lg:block" />

                        <div className="absolute -bottom-10 right-0 hidden h-60 w-60 rounded-full bg-greenish-blue/10 blur-3xl lg:block" />

                        {/* Form */}
                        <div className="relative w-full min-w-0 max-w-full">
                            <RentalForm />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}