import Image from "next/image";
import {
    Users,
    Luggage,
    CarFront,
    Fuel,
} from "lucide-react";

import { Vehicle } from "@/types/fleet.type";

interface Props {
    vehicle: Vehicle;
}

export default function VehicleOverview({
    vehicle,
}: Props) {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto grid max-w-[1440px] gap-16 px-5 lg:grid-cols-12 lg:px-8">

                {/* Left */}

                <div className="lg:col-span-5">

                    <div className="sticky top-28">

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-sea" />

                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                                Vehicle Overview
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                            Comfort,
                            <span className="block text-dark-grey-blue/55">
                                reliability &
                                style.
                            </span>
                        </h2>

                        <p className="mt-8 leading-8 text-muted">
                            {vehicle.description}
                        </p>

                    </div>

                </div>

                {/* Right */}

                <div className="space-y-8 lg:col-span-7">

                    <div className="overflow-hidden rounded-[36px]">

                        <Image
                            src={
                                vehicle.featuredImage ??
                                vehicle.heroImage ??
                                "/images/placeholders/fleet-category.jpg"
                            }
                            alt={vehicle.name}
                            width={1200}
                            height={700}
                            className="h-[450px] w-full object-cover"
                        />

                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">

                        <SpecCard
                            icon={<Users size={22} />}
                            value={`${vehicle.seatingCapacity} Seats`}
                            label="Passenger Capacity"
                        />

                        <SpecCard
                            icon={<Luggage size={22} />}
                            value={vehicle.luggageCapacity}
                            label="Luggage Space"
                        />

                        <SpecCard
                            icon={<CarFront size={22} />}
                            value={
                                vehicle.transmission ??
                                "Standard"
                            }
                            label="Transmission"
                        />

                        <SpecCard
                            icon={<Fuel size={22} />}
                            value={
                                vehicle.fuelType ??
                                "Diesel"
                            }
                            label="Fuel Type"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}

function SpecCard({
    icon,
    value,
    label,
}: {
    icon: React.ReactNode;
    value: string;
    label: string;
}) {
    return (
        <div className="rounded-[28px] border border-border bg-background p-6">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sea/10 text-sea">
                {icon}
            </div>

            <p className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-dark-cerulean">
                {value}
            </p>

            <p className="mt-2 text-muted">
                {label}
            </p>

        </div>
    );
}