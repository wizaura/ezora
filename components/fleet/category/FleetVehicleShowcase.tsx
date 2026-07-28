import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Check,
    Luggage,
    Users,
    CarFront,
} from "lucide-react";

import type { Vehicle } from "@/types/fleet.type";

interface FleetVehicleShowcaseProps {
    vehicles: Vehicle[];
    dark?: boolean;
}

export default function FleetVehicleShowcase({
    vehicles,
    dark = false,
}: FleetVehicleShowcaseProps) {
    if (vehicles.length === 0) {
        return null;
    }

    const activeVehicles = vehicles
        .filter((vehicle) => vehicle.isActive)
        .sort((a, b) => a.sortOrder - b.sortOrder);

    return (
        <section className={dark ? "bg-dark-cerulean py-16" : "bg-white py-16"}>
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                {/* Header */}

                <div
                    className={`grid gap-8 border-b pb-14 lg:grid-cols-12 lg:items-end ${
                        dark
                            ? "border-white/15"
                            : "border-border"
                    }`}
                >
                    <div className="lg:col-span-8">

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-sea" />

                            <p
                                className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                                    dark
                                        ? "text-light-sea-green"
                                        : "text-greenish-blue"
                                }`}
                            >
                                Available Vehicles
                            </p>
                        </div>

                        <h2
                            className={`max-w-[850px] text-[clamp(2.8rem,5vw,5.2rem)] font-semibold leading-[0.95] tracking-[-0.055em] ${
                                dark
                                    ? "text-white"
                                    : "text-dark-cerulean"
                            }`}
                        >
                            Explore our
                            <span
                                className={
                                    dark
                                        ? "block text-white/45"
                                        : "block text-dark-grey-blue/55"
                                }
                            >
                                premium fleet.
                            </span>
                        </h2>

                    </div>

                    <div className="lg:col-span-4">

                        <p
                            className={`max-w-md text-base leading-7 lg:ml-auto ${
                                dark
                                    ? "text-white/65"
                                    : "text-muted"
                            }`}
                        >
                            Choose the perfect vehicle for your
                            journey. Every vehicle is professionally
                            maintained, chauffeur-driven and designed
                            to deliver a safe, comfortable and premium
                            travel experience.
                        </p>

                    </div>

                </div>

                {/* Vehicles */}

                <div className="mt-12 space-y-6">

                    {activeVehicles.map((vehicle, index) => (

                        <VehicleCard
                            key={vehicle.id}
                            vehicle={vehicle}
                            imageRight={index % 2 !== 0}
                            index={index}
                            dark={dark}
                        />

                    ))}

                </div>

            </div>
        </section>
    );
}

interface VehicleCardProps {
    vehicle: Vehicle;
    imageRight: boolean;
    dark: boolean;
    index: number;
}

function VehicleCard({
    vehicle,
    imageRight,
    dark,
    index,
}: VehicleCardProps) {
    return (
        <article
            className={`group grid overflow-hidden rounded-[32px] border lg:min-h-[520px] lg:grid-cols-2 ${
                dark
                    ? "border-white/10 bg-white/5"
                    : "border-border bg-background"
            }`}
        >
            {/* Image */}

            <div
                className={`relative min-h-[340px] overflow-hidden ${
                    imageRight
                        ? "lg:order-2"
                        : ""
                }`}
            >
                <Image
                    src={
                        vehicle.featuredImage ??
                        vehicle.heroImage ??
                        "/images/placeholders/fleet-category.jpg"
                    }
                    alt={vehicle.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute left-7 top-7">

                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-xs font-semibold text-white backdrop-blur-md">

                        {String(index + 1).padStart(2, "0")}

                    </span>

                </div>

                {vehicle.isFeatured && (

                    <div className="absolute right-7 top-7">

                        <span className="rounded-full bg-sea px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                            Featured
                        </span>

                    </div>

                )}

            </div>

            {/* Content */}

            <div
                className={`flex flex-col justify-center p-8 lg:p-12 ${
                    imageRight
                        ? "lg:order-1"
                        : ""
                }`}
            >
                <div className="flex items-center gap-3">

                    <span className="h-px w-8 bg-sea" />

                    <p
                        className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                            dark
                                ? "text-light-sea-green"
                                : "text-greenish-blue"
                        }`}
                    >
                        Chauffeur Driven
                    </p>

                </div>

                <h3
                    className={`mt-5 text-[clamp(2rem,3vw,3.5rem)] font-semibold leading-[1] tracking-[-0.05em] ${
                        dark
                            ? "text-white"
                            : "text-dark-cerulean"
                    }`}
                >
                    {vehicle.name}
                </h3>

                <p
                    className={`mt-6 max-w-xl leading-8 ${
                        dark
                            ? "text-white/65"
                            : "text-muted"
                    }`}
                >
                    {vehicle.shortDescription}
                </p>

                {/* Specs */}

                <div
                    className={`mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border ${
                        dark
                            ? "border-white/10 bg-white/10"
                            : "border-border bg-border"
                    }`}
                >

                    <Spec
                        icon={Users}
                        label="Seats"
                        value={`${vehicle.seatingCapacity}`}
                        dark={dark}
                    />

                    <Spec
                        icon={Luggage}
                        label="Luggage"
                        value={vehicle.luggageCapacity}
                        dark={dark}
                    />

                    <Spec
                        icon={CarFront}
                        label="Transmission"
                        value={vehicle.transmission as string}
                        dark={dark}
                    />

                </div>

                {/* Features */}

                {vehicle.features.length > 0 && (

                    <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">

                        {vehicle.features
                            .slice(0, 6)
                            .map((feature) => (

                                <div
                                    key={feature.id}
                                    className={`flex items-center gap-2 ${
                                        dark
                                            ? "text-white/75"
                                            : "text-dark-grey-blue"
                                    }`}
                                >

                                    <Check
                                        size={16}
                                        className="text-sea"
                                    />

                                    {feature.title}

                                </div>

                            ))}

                    </div>

                )}

                {/* Actions */}

                <div className="mt-10 flex flex-wrap gap-3">

                    <Link
                        href={`/fleet/vehicle/${vehicle.slug}`}
                        className={`inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold transition ${
                            dark
                                ? "bg-white text-dark-cerulean hover:bg-light-sea-green hover:text-white"
                                : "bg-dark-cerulean text-white hover:bg-greenish-blue"
                        }`}
                    >
                        Explore Vehicle

                        <ArrowUpRight size={18} />
                    </Link>

                    <Link
                        href={`/contact?vehicle=${vehicle.slug}`}
                        className={`inline-flex items-center gap-2 rounded-full border px-7 py-4 font-semibold transition ${
                            dark
                                ? "border-white/15 text-white hover:bg-white/10"
                                : "border-border hover:border-sea hover:text-sea"
                        }`}
                    >
                        Enquire Now

                        <ArrowRight size={18} />
                    </Link>

                </div>

            </div>

        </article>
    );
}

interface SpecProps {
    icon: React.ElementType;
    label: string;
    value: string;
    dark: boolean;
}

function Spec({
    icon: Icon,
    label,
    value,
    dark,
}: SpecProps) {
    return (
        <div
            className={`flex items-center gap-3 p-5 ${
                dark
                    ? "bg-dark-cerulean"
                    : "bg-white"
            }`}
        >
            <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    dark
                        ? "bg-sea/20 text-light-sea-green"
                        : "bg-sea/10 text-sea"
                }`}
            >
                <Icon size={18} />
            </div>

            <div>
                <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${
                        dark
                            ? "text-white/40"
                            : "text-muted"
                    }`}
                >
                    {label}
                </p>

                <p
                    className={`mt-1 font-semibold ${
                        dark
                            ? "text-white"
                            : "text-dark-cerulean"
                    }`}
                >
                    {value}
                </p>
            </div>
        </div>
    );
}