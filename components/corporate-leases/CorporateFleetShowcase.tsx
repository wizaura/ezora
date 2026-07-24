import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    CarFront,
    ShieldCheck,
    Users,
} from "lucide-react";

import { corporateFleetOptions } from "@/data/corporate-fleet-options";

export default function CorporateFleetShowcase() {
    return (
        <section className="relative overflow-hidden bg-white py-16">

            <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-sea/5 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-dark-cerulean/5 blur-[140px]" />

            <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8">

                {/* Editorial Header */}

                <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-12 lg:items-end lg:pb-16">

                    <div className="lg:col-span-8">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-10 bg-sea" />

                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                                03 · Corporate Fleet
                            </p>

                        </div>

                        <h2 className="max-w-[820px] text-[clamp(2.8rem,5vw,5.3rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                            Premium Vehicles
                            <br />
                            Designed For
                            <br />
                            Business Travel
                        </h2>

                    </div>

                    <div className="lg:col-span-4">

                        <p className="max-w-md text-base leading-7 text-muted lg:ml-auto">
                            From executive sedans to premium people movers,
                            every vehicle is maintained to exceptional
                            standards, ensuring comfort, reliability and a
                            professional experience for your team.
                        </p>

                    </div>

                </div>

                {/* Stats */}

                <div className="mt-10 grid gap-5 md:grid-cols-3">

                    <div className="rounded-2xl border border-border bg-surface-soft p-6">

                        <CarFront
                            size={26}
                            className="mb-4 text-sea"
                        />

                        <h3 className="text-2xl font-semibold text-dark-cerulean">
                            Premium Fleet
                        </h3>

                        <p className="mt-2 text-muted">
                            Executive vehicles maintained to manufacturer
                            standards.
                        </p>

                    </div>

                    <div className="rounded-2xl border border-border bg-surface-soft p-6">

                        <Users
                            size={26}
                            className="mb-4 text-sea"
                        />

                        <h3 className="text-2xl font-semibold text-dark-cerulean">
                            Small & Large Teams
                        </h3>

                        <p className="mt-2 text-muted">
                            Vehicles ranging from executive cars to
                            people movers.
                        </p>

                    </div>

                    <div className="rounded-2xl border border-border bg-surface-soft p-6">

                        <ShieldCheck
                            size={26}
                            className="mb-4 text-sea"
                        />

                        <h3 className="text-2xl font-semibold text-dark-cerulean">
                            Fully Insured
                        </h3>

                        <p className="mt-2 text-muted">
                            Serviced, inspected and professionally managed.
                        </p>

                    </div>

                </div>

                {/* Fleet */}

                <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {corporateFleetOptions.map((vehicle) => (

                        <Link
                            key={vehicle.id}
                            href="/fleet"
                            className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-sea hover:shadow-[0_30px_70px_rgba(12,71,113,0.12)]"
                        >

                            <div className="relative aspect-[4/3] overflow-hidden">

                                <Image
                                    src={vehicle.featuredImage}
                                    alt={vehicle.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                <div className="absolute left-5 top-5">

                                    <span className="rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-dark-cerulean backdrop-blur">

                                        {vehicle.categoryName}

                                    </span>

                                </div>

                            </div>

                            <div className="p-7">

                                <h3 className="text-2xl font-semibold text-dark-cerulean transition-colors group-hover:text-sea">

                                    {vehicle.name}

                                </h3>

                                <div className="mt-5 flex items-center justify-between">

                                    <div className="inline-flex items-center gap-2 rounded-full bg-surface-soft px-4 py-2 text-sm font-medium text-dark-grey-blue">

                                        <Users
                                            size={16}
                                            className="text-sea"
                                        />

                                        {vehicle.seatingCapacity}

                                    </div>

                                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-sea group-hover:bg-sea group-hover:text-white">

                                        <ArrowUpRight size={18} />

                                    </div>

                                </div>

                                <div className="mt-7 flex items-center justify-between border-t border-border pt-6">

                                    <span className="text-sm font-medium text-greenish-blue">
                                        View Fleet Details
                                    </span>

                                    <ArrowUpRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </section>
    );
}