import Link from "next/link";
import {
    ArrowRight,
    BriefcaseBusiness,
    CheckCircle2,
    Clock3,
    ShieldCheck,
    Users,
} from "lucide-react";

import { LeasePlan } from "@/data/corporate-lease-plans";

type LeasePlanCardProps = {
    plan: LeasePlan;
};

export default function LeasePlanCard({
    plan,
}: LeasePlanCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-[32px] border border-border bg-white shadow-[0_20px_60px_rgba(12,71,113,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(12,71,113,0.15)]">
            {/* Decorative Background */}

            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sea/10 blur-3xl transition-all duration-700 group-hover:scale-110" />

            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-dark-cerulean/5 blur-3xl" />

            <div className="relative p-10 lg:p-12">
                {/* Top */}

                <div className="flex items-start justify-between">
                    <div>
                        <span className="inline-flex rounded-full bg-surface-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-greenish-blue">
                            {plan.term} Lease
                        </span>

                        <h3 className="mt-6 text-4xl font-semibold tracking-tight text-dark-cerulean">
                            {plan.title}
                        </h3>

                        <p className="mt-4 max-w-xl text-base leading-8 text-muted">
                            {plan.bestFor}
                        </p>
                    </div>

                    <div className="hidden h-20 w-20 items-center justify-center rounded-3xl bg-dark-cerulean text-white shadow-xl lg:flex">
                        <BriefcaseBusiness size={34} />
                    </div>
                </div>

                {/* Stats */}

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    <div className="rounded-2xl border border-border bg-surface-soft p-5">
                        <Clock3
                            size={22}
                            className="mb-3 text-sea"
                        />

                        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                            Commitment
                        </p>

                        <p className="mt-2 text-lg font-semibold text-dark-cerulean">
                            {plan.term}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-surface-soft p-5">
                        <Users
                            size={22}
                            className="mb-3 text-sea"
                        />

                        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                            Fleet Support
                        </p>

                        <p className="mt-2 text-lg font-semibold text-dark-cerulean">
                            Dedicated Team
                        </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-surface-soft p-5">
                        <ShieldCheck
                            size={22}
                            className="mb-3 text-sea"
                        />

                        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                            Service
                        </p>

                        <p className="mt-2 text-lg font-semibold text-dark-cerulean">
                            Fully Managed
                        </p>
                    </div>
                </div>

                {/* Features */}

                <div className="mt-12">
                    <h4 className="mb-6 text-lg font-semibold text-dark-cerulean">
                        What's Included
                    </h4>

                    <div className="grid gap-4 md:grid-cols-2">
                        {plan.highlights.map(
                            (highlight, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:border-sea hover:bg-surface-soft"
                                >
                                    <CheckCircle2
                                        className="mt-0.5 shrink-0 text-sea"
                                        size={22}
                                    />

                                    <p className="text-sm leading-7 text-dark-grey-blue">
                                        {highlight}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Savings */}

                {plan.savingsNote && (
                    <div className="mt-10 rounded-3xl border border-sea/20 bg-gradient-to-r from-sea/10 via-light-sea-green/10 to-sea/5 p-6">
                        <p className="text-center text-base font-semibold text-greenish-blue">
                            {plan.savingsNote}
                        </p>
                    </div>
                )}

                {/* CTA */}

                <div className="mt-12 flex gap-4 flex-row">
                    <Link
                        href="/corporate-leases#corporate-lease"
                        className="flex h-14 flex-1 items-center justify-center rounded-full bg-dark-cerulean text-sm font-semibold text-white transition-all duration-300 hover:bg-greenish-blue"
                    >
                        Request Proposal
                    </Link>

                    <Link
                        href="/contact"
                        className="group flex h-14 flex-1 items-center justify-center gap-2 rounded-full border border-dark-cerulean bg-white text-sm font-semibold text-dark-cerulean transition-all duration-300 hover:bg-dark-cerulean hover:text-white"
                    >
                        Talk to Our Team

                        <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}