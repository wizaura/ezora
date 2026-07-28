import Image from "next/image";
import {
    CarFront,
    Users,
    ShieldCheck,
    Snowflake,
} from "lucide-react";

import { FleetCategory } from "@/types/fleet.type";

interface Props {
    category: FleetCategory;
}

export default function CategoryIntro({
    category,
}: Props) {
    const totalSeats =
        category.vehicles.length > 0
            ? Math.max(
                ...category.vehicles.map((v) =>
                    Number(v.seatingCapacity)
                )
            )
            : 0;

    return (
        <section className="bg-white py-16">
            <div className="mx-auto grid max-w-[1440px] gap-16 px-5 lg:grid-cols-12 lg:px-8">

                {/* Left */}

                <div className="lg:col-span-5">

                    <div className="sticky top-28">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-10 bg-sea" />

                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                                About This Fleet
                            </p>

                        </div>

                        <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                            Premium comfort
                            <span className="block text-dark-grey-blue/55">
                                for every journey.
                            </span>
                        </h2>

                        <p className="mt-8 leading-8 text-muted">
                            {category.description}
                        </p>

                    </div>

                </div>

                {/* Right */}

                <div className="space-y-8 lg:col-span-7">

                    <div className="overflow-hidden rounded-[36px]">

                        <Image
                            src={
                                category.featuredImage ??
                                "/images/placeholders/fleet-category.jpg"
                            }
                            alt={category.name}
                            width={1200}
                            height={700}
                            className="h-[420px] w-full object-cover"
                        />

                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">

                        <StatCard
                            icon={<CarFront size={22} />}
                            value={`${category.vehicles.length}+`}
                            label="Vehicles Available"
                        />

                        <StatCard
                            icon={<Users size={22} />}
                            value={`${totalSeats} Seats`}
                            label="Maximum Capacity"
                        />

                        <StatCard
                            icon={<Snowflake size={22} />}
                            value="Air Conditioned"
                            label="Premium Comfort"
                        />

                        <StatCard
                            icon={<ShieldCheck size={22} />}
                            value="Professional"
                            label="Chauffeurs"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}

function StatCard({
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