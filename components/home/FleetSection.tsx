"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    Armchair,
    BriefcaseBusiness,
    Luggage,
    Snowflake,
    Users,
} from "lucide-react";
import { useState } from "react";

const fleetCategories = [
    {
        id: "force-urbania",
        eyebrow: "Premium Luxury Van",
        title: "Force Urbania",
        description:
            "Premium chauffeur-driven travel with spacious interiors, reclining seating and exceptional comfort for families, groups and corporate journeys.",
        image: "/images/home/fleet-1.jpg",
        href: "/fleet/force-urbania",
        seating: "10 · 12 · 17 seats",
        features: [
            {
                icon: Armchair,
                label: "Reclining seats",
            },
            {
                icon: Snowflake,
                label: "Premium AC",
            },
            {
                icon: Luggage,
                label: "Luggage space",
            },
        ],
    },
    {
        id: "force-traveller",
        eyebrow: "Group & Coach Travel",
        title: "Force Traveller",
        description:
            "Reliable and comfortable group mobility for family tours, corporate outings, events and long-distance journeys throughout Kerala.",
        image: "/images/home/fleet-2.jpg",
        href: "/fleet/force-traveller",
        seating: "12 · 17 · 26 seats",
        features: [
            {
                icon: Users,
                label: "Large groups",
            },
            {
                icon: Snowflake,
                label: "Air conditioned",
            },
            {
                icon: Luggage,
                label: "Tour ready",
            },
        ],
    },
    {
        id: "executive-sedans",
        eyebrow: "Business & Private",
        title: "Executive Sedans",
        description:
            "Refined private mobility for airport transfers, corporate delegates, couples and comfortable intercity travel.",
        image: "/images/home/fleet-3.jpg",
        href: "/fleet/executive-sedans",
        seating: "Up to 4+1 seats",
        features: [
            {
                icon: Users,
                label: "Private travel",
            },
            {
                icon: Snowflake,
                label: "Air conditioned",
            },
            {
                icon: BriefcaseBusiness,
                label: "Business ready",
            },
        ],
    },
];

export default function FleetSection() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section className="overflow-hidden bg-white py-16">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
                {/* Section Header */}
                <div className="grid gap-8 pb-8 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-8">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-sea" />

                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                                Our Fleet
                            </p>
                        </div>

                        <h2 className="max-w-[800px] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-dark-cerulean">
                            The right vehicle

                            <span className="block text-dark-grey-blue/55">
                                for every journey.
                            </span>
                        </h2>
                    </div>

                    <div className="lg:col-span-4 lg:pb-1">
                        <p className="max-w-md text-base leading-7 text-muted lg:ml-auto">
                            From premium passenger vans for groups to executive sedans for
                            private travel, every journey is professionally chauffeured and
                            designed around your comfort.
                        </p>

                        <Link
                            href="/fleet"
                            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-dark-cerulean"
                        >
                            View complete fleet

                            <ArrowUpRight
                                size={17}
                                className="text-sea transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </Link>
                    </div>
                </div>

                {/* Expandable Fleet Cards */}
                <div
                    className="mt-8 flex flex-col gap-4 lg:h-[400px] lg:flex-row"
                    onMouseLeave={() => setHoveredId(null)}
                >
                    {fleetCategories.map((fleet) => {
                        const isHovered = hoveredId === fleet.id;
                        const hasHoveredCard = hoveredId !== null;

                        return (
                            <FleetCard
                                key={fleet.id}
                                fleet={fleet}
                                isHovered={isHovered}
                                hasHoveredCard={hasHoveredCard}
                                onMouseEnter={() => setHoveredId(fleet.id)}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

type FleetCategory = (typeof fleetCategories)[number];

type FleetCardProps = {
    fleet: FleetCategory;
    isHovered: boolean;
    hasHoveredCard: boolean;
    onMouseEnter: () => void;
};

function FleetCard({
    fleet,
    isHovered,
    hasHoveredCard,
    onMouseEnter,
}: FleetCardProps) {
    return (
        <article
            onMouseEnter={onMouseEnter}
            className={`group relative min-h-[400px] md:min-h-[560px] overflow-hidden rounded-[28px] bg-dark-cerulean transition-[flex] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:min-h-0 ${!hasHoveredCard
                ? "lg:flex-[1]"
                : isHovered
                    ? "lg:flex-[2]"
                    : "lg:flex-[0.65]"
                }`}
        >
            {/* Vehicle Image */}
            <Image
                src={fleet.image}
                alt={`${fleet.title} chauffeur-driven fleet rental in Kerala`}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
                sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Overlays */}
            {/* Overlays */}

            {/* Subtle full-image darkening */}
            <div className="absolute inset-0 bg-black/20 transition-colors duration-700 group-hover:bg-black/15" />

            {/* Strong bottom gradient for content readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />

            {/* Subtle top gradient for eyebrow and seating */}
            <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-black/55 to-transparent" />

            {/* Brand tint */}
            <div className="absolute inset-0 bg-dark-cerulean/10 mix-blend-multiply" />

            {/* Top Content */}
            <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-6 sm:p-7">
                <div
                    className={`transition-opacity duration-500 ${hasHoveredCard && !isHovered
                        ? "lg:opacity-70"
                        : "opacity-100"
                        }`}
                >
                    <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
                        {fleet.eyebrow}
                    </p>

                    <p className="mt-2 flex items-center gap-2 whitespace-nowrap text-sm font-medium text-white">
                        <Users size={15} className="shrink-0 text-light-sea-green" />

                        {fleet.seating}
                    </p>
                </div>

                <Link
                    href={fleet.href}
                    aria-label={`Explore ${fleet.title}`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-sea group-hover:bg-sea"
                >
                    <ArrowUpRight size={18} />
                </Link>
            </div>

            {/* Bottom Content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
                <h3 className="text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl">
                    {fleet.title}
                </h3>

                {/* Description */}
                <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ${!hasHoveredCard || isHovered
                        ? "grid-rows-[1fr] opacity-100"
                        : "lg:grid-rows-[0fr] lg:opacity-0"
                        }`}
                >
                    <div className="overflow-hidden">
                        <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                            {fleet.description}
                        </p>
                    </div>
                </div>

                {/* Features */}
                <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ${!hasHoveredCard || isHovered
                        ? "grid-rows-[1fr] opacity-100"
                        : "lg:grid-rows-[0fr] lg:opacity-0"
                        }`}
                >
                    <div className="overflow-hidden">
                        <div className="mt-6 flex flex-wrap gap-2">
                            {fleet.features.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <div
                                        key={feature.label}
                                        className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-medium text-white/80 backdrop-blur-md"
                                    >
                                        <Icon
                                            size={14}
                                            className="shrink-0 text-light-sea-green"
                                        />

                                        {feature.label}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}