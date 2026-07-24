"use client";

import { useState } from "react";
import {
    ArrowRight,
    BadgeCheck,
    BriefcaseBusiness,
    CarFront,
    CheckCircle2,
    Clock3,
    Headset,
    ShieldCheck,
} from "lucide-react";

import {
    LeaseTerm,
    corporateLeasePlans,
} from "@/data/corporate-lease-plans";

import LeasePlanCard from "./LeasePlanCard";

const TERMS: LeaseTerm[] = [
    "Monthly",
    "Quarterly",
    "Yearly",
];

const TERM_DESCRIPTION: Record<
    LeaseTerm,
    {
        title: string;
    }
> = {
    Monthly: {
        title: "Maximum Flexibility",
    },
    Quarterly: {
        title: "Balanced Commitment",
    },
    Yearly: {
        title: "Best Long-Term Value",
    },
};

export default function LeasePlanGrid() {
    const [activeTerm, setActiveTerm] =
        useState<LeaseTerm>("Monthly");

    const activePlan =
        corporateLeasePlans.find(
            (plan) => plan.term === activeTerm
        );

    return (
        <section className="relative bg-gradient-to-b from-surface-soft via-white to-white py-16">
            {/* Background */}

            <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-sea/5 blur-[130px]" />

            <div className="absolute right-0 top-1/3 h-[480px] w-[480px] rounded-full bg-dark-cerulean/5 blur-[150px]" />

            <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8">

                {/* Editorial Header */}

                <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-12 lg:items-end lg:pb-16">

                    <div className="lg:col-span-8">

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-sea" />

                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                                01 · Corporate Leasing
                            </p>
                        </div>

                        <h2 className="max-w-[850px] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-dark-cerulean">
                            Flexible Leasing
                            <br />
                            Solutions For
                            <br />
                            Modern Businesses
                        </h2>
                    </div>

                    <div className="lg:col-span-4 lg:pb-1">

                        <p className="max-w-md text-base leading-7 text-muted lg:ml-auto">
                            Choose a leasing duration that best suits your
                            organisation. Whether you need vehicles for one
                            month or an entire year, Ezora delivers reliable,
                            chauffeur-driven transport backed by dedicated fleet
                            management.
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-greenish-blue">
                            <CarFront
                                size={16}
                                strokeWidth={1.7}
                            />

                            Three flexible lease plans
                        </div>
                    </div>
                </div>

                {/* Main Layout */}

                <div className="mt-16 grid gap-10 lg:grid-cols-[340px_minmax(0,1fr)]">

                    {/* Left Panel */}

                    <aside>

                        <div className="sticky top-28">

                            <div className="mb-8">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-greenish-blue">
                                    Select Lease Term
                                </p>

                                <h3 className="mt-3 text-3xl font-semibold leading-tight text-dark-cerulean">
                                    Choose the commitment that fits your
                                    business.
                                </h3>
                            </div>

                            <div className="space-y-4">

                                {TERMS.map((term) => {

                                    const selected =
                                        activeTerm === term;

                                    return (
                                        <button
                                            key={term}
                                            onClick={() =>
                                                setActiveTerm(term)
                                            }
                                            className={`group w-full rounded-[28px] border p-6 text-left transition-all duration-300 ${
                                                selected
                                                    ? "border-dark-cerulean bg-dark-cerulean text-white shadow-[0_20px_60px_rgba(12,71,113,0.18)]"
                                                    : "border-border bg-white hover:-translate-y-1 hover:border-sea hover:shadow-lg"
                                            }`}
                                        >
                                            <div className="flex items-start justify-between">

                                                <div>

                                                    <p className="text-xl font-semibold">
                                                        {term}
                                                    </p>

                                                    <p
                                                        className={`mt-2 text-sm leading-6 ${
                                                            selected
                                                                ? "text-white/70"
                                                                : "text-muted"
                                                        }`}
                                                    >
                                                        {
                                                            TERM_DESCRIPTION[
                                                                term
                                                            ]
                                                                .title
                                                        }
                                                    </p>
                                                </div>

                                                <div
                                                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                                                        selected
                                                            ? "bg-white/10"
                                                            : "bg-surface-soft"
                                                    }`}
                                                >
                                                    <Clock3
                                                        size={20}
                                                        className={
                                                            selected
                                                                ? "text-white"
                                                                : "text-sea"
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div
                                                className={`mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] ${
                                                    selected
                                                        ? "text-light-sea-green"
                                                        : "text-greenish-blue"
                                                }`}
                                            >
                                                View Details

                                                <ArrowRight
                                                    size={15}
                                                />
                                            </div>
                                        </button>
                                    );
                                })}

                            </div>
                        </div>
                    </aside>

                    {/* Right Panel */}

                    <div className="space-y-8">

                        {activePlan && (
                            <div
                                key={activePlan.term}
                                className="animate-in fade-in slide-in-from-right-3 duration-500"
                            >
                                <LeasePlanCard plan={activePlan} />
                            </div>
                        )}

                        {/* Business Benefits */}

                        <div className="grid gap-5 md:grid-cols-3">

                            <div className="rounded-[28px] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sea/10">
                                    <ShieldCheck
                                        size={28}
                                        className="text-sea"
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-dark-cerulean">
                                    Fully Managed Fleet
                                </h3>

                                <p className="mt-3 leading-7 text-muted">
                                    We take care of servicing, maintenance,
                                    insurance coordination, and replacement
                                    vehicles so your team stays focused on
                                    business.
                                </p>
                            </div>

                            <div className="rounded-[28px] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sea/10">
                                    <BadgeCheck
                                        size={28}
                                        className="text-sea"
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-dark-cerulean">
                                    Premium Vehicles
                                </h3>

                                <p className="mt-3 leading-7 text-muted">
                                    Executive sedans, SUVs, and premium vans
                                    maintained to exceptional standards for
                                    employees and corporate guests.
                                </p>
                            </div>

                            <div className="rounded-[28px] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sea/10">
                                    <Headset
                                        size={28}
                                        className="text-sea"
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-dark-cerulean">
                                    Dedicated Support
                                </h3>

                                <p className="mt-3 leading-7 text-muted">
                                    Every corporate account receives a dedicated
                                    relationship manager for faster bookings,
                                    billing, and operational support.
                                </p>
                            </div>

                        </div>

                        {/* Why Ezora */}

                        <div className="overflow-hidden rounded-[36px] border border-border bg-greenish-blue p-10 text-white">

                            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

                                <div>

                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
                                        WHY BUSINESSES CHOOSE EZORA
                                    </p>

                                    <h3 className="mt-5 text-4xl font-semibold leading-tight">
                                        Corporate transportation that's built
                                        for reliability, professionalism, and
                                        long-term value.
                                    </h3>

                                    <div className="mt-8 grid gap-4 sm:grid-cols-2">

                                        {[
                                            "Dedicated account manager",
                                            "Professional chauffeurs",
                                            "Priority customer support",
                                            "Flexible fleet upgrades",
                                            "Transparent billing",
                                            "Nationwide corporate service",
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center gap-3"
                                            >
                                                <CheckCircle2
                                                    size={20}
                                                    className="text-light-sea-green"
                                                />

                                                <span className="text-white/90">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}

                                    </div>

                                </div>

                                <div className="flex justify-center lg:justify-end">

                                    <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur">

                                        <BriefcaseBusiness
                                            size={70}
                                            strokeWidth={1.4}
                                        />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}