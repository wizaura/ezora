"use client";

import Image from "next/image";
import {
    ShieldCheck,
    Clock3,
    CarFront,
    MapPinned,
    BadgeCheck,
    Headphones,
    ArrowUpRight,
} from "lucide-react";

const features = [
    {
        icon: CarFront,
        title: "Premium Fleet",
        description:
            "Travel in well-maintained Force Urbania vans, premium SUVs and executive sedans designed for comfort and reliability.",
    },
    {
        icon: BadgeCheck,
        title: "Professional Chauffeurs",
        description:
            "Experienced, courteous and knowledgeable drivers committed to providing a safe and comfortable travel experience.",
    },
    {
        icon: ShieldCheck,
        title: "Safe & Reliable",
        description:
            "Regularly serviced vehicles with safety-first standards, ensuring every journey is dependable and worry-free.",
    },
    {
        icon: Clock3,
        title: "Always On Time",
        description:
            "From airport pickups to multi-day tours, we value punctuality and ensure timely arrivals and departures.",
    },
    {
        icon: MapPinned,
        title: "Kerala Wide Coverage",
        description:
            "Explore destinations across Kerala with customised travel solutions tailored to your itinerary.",
    },
    {
        icon: Headphones,
        title: "Dedicated Support",
        description:
            "Our travel specialists are available to assist before, during and after your journey whenever you need us.",
    },
];

export default function WhyChooseEzoraSection() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                {/* Header */}

                <div className="grid gap-12 border-b border-border pb-16 lg:grid-cols-12 lg:items-end">

                    <div className="lg:col-span-7">

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-sea" />

                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                                Why Choose Ezora
                            </p>
                        </div>

                        <h2 className="max-w-[850px] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-dark-cerulean">
                            Travel with confidence.
                            <span className="block text-dark-grey-blue/55">
                                Every mile matters.
                            </span>
                        </h2>

                    </div>

                    <div className="lg:col-span-5">

                        <p className="max-w-md text-base leading-8 text-muted lg:ml-auto">
                            At Ezora Tours & Travels, every journey is planned
                            with comfort, safety and reliability in mind. From
                            premium vehicles to personalised travel assistance,
                            we ensure a seamless experience from the moment you
                            book until you reach your destination.
                        </p>

                    </div>

                </div>

                {/* Content */}

                <div className="mt-16 grid gap-14 lg:grid-cols-12">

                    {/* Image */}

                    <div className="lg:col-span-5">

                        <div className="sticky top-28">


                            <div className="relative overflow-hidden rounded-[32px]">

                                <Image
                                    src="/images/home/corporate-1.jpg"
                                    alt="Premium chauffeur-driven travel with Ezora"
                                    width={700}
                                    height={900}
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                                <div className="absolute bottom-8 left-8 right-8">

                                    <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur">
                                        Premium Travel Experience
                                    </span>

                                    <h3 className="mt-5 text-3xl font-semibold leading-tight text-white">
                                        Designed for journeys you'll remember.
                                    </h3>

                                </div>

                            </div>
                        </div>

                    </div>

                    {/* Features */}

                    <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">

                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="group rounded-[28px] border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-2 hover:border-sea hover:bg-white hover:shadow-xl"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sea/10 text-sea transition group-hover:bg-sea group-hover:text-white">
                                        <Icon size={26} />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-dark-cerulean">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-muted">
                                        {feature.description}
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-sea opacity-0 transition group-hover:opacity-100">
                                        Learn More

                                        <ArrowUpRight size={16} />
                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>
        </section>
    );
}