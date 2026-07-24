"use client";

import { LeaseTerm } from "@/data/corporate-lease-plans";
import {
    CalendarDays,
    CalendarRange,
    CalendarClock,
} from "lucide-react";

type LeaseTermTabsProps = {
    terms: LeaseTerm[];
    activeTerm: LeaseTerm;
    onSelectTerm: (term: LeaseTerm) => void;
};

const icons = {
    Monthly: CalendarClock,
    Quarterly: CalendarRange,
    Yearly: CalendarDays,
};

const descriptions = {
    Monthly: "Maximum Flexibility",
    Quarterly: "Balanced Commitment",
    Yearly: "Best Value",
};

export default function LeaseTermTabs({
    terms,
    activeTerm,
    onSelectTerm,
}: LeaseTermTabsProps) {
    return (
        <div className="flex justify-center">
            <div className="inline-flex rounded-[28px] border border-border bg-white p-2 shadow-[0_20px_60px_rgba(12,71,113,0.08)]">
                {terms.map((term) => {
                    const Icon = icons[term];

                    const active =
                        activeTerm === term;

                    return (
                        <button
                            key={term}
                            onClick={() =>
                                onSelectTerm(term)
                            }
                            className={`group relative flex min-w-[190px] items-center gap-4 rounded-3xl px-6 py-5 text-left transition-all duration-300 ${
                                active
                                    ? "bg-dark-cerulean text-white shadow-xl shadow-dark-cerulean/20"
                                    : "text-dark-grey-blue hover:bg-surface-soft"
                            }`}
                        >
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all ${
                                    active
                                        ? "bg-white/15"
                                        : "bg-surface-soft text-sea"
                                }`}
                            >
                                <Icon size={22} />
                            </div>

                            <div>
                                <p className="text-base font-semibold">
                                    {term}
                                </p>

                                <p
                                    className={`mt-1 text-xs ${
                                        active
                                            ? "text-white/70"
                                            : "text-muted"
                                    }`}
                                >
                                    {
                                        descriptions[
                                            term
                                        ]
                                    }
                                </p>
                            </div>

                            {active && (
                                <span className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-light-sea-green shadow-lg shadow-light-sea-green/50" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}