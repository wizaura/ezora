"use client";

import { LeaseTerm } from "@/data/corporate-lease-plans";

type LeaseTermTabsProps = {
  terms: LeaseTerm[];
  activeTerm: LeaseTerm;
  onSelectTerm: (term: LeaseTerm) => void;
};

export default function LeaseTermTabs({
  terms,
  activeTerm,
  onSelectTerm,
}: LeaseTermTabsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-10">
      <div className="flex w-full sm:w-auto rounded-full bg-surface-soft p-1">
        {terms.map((term) => (
          <button
            key={term}
            onClick={() => onSelectTerm(term)}
            className={`flex-1 sm:flex-none rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${activeTerm === term
                ? "bg-dark-cerulean text-white shadow-md"
                : "text-muted hover:text-dark-cerulean"
              }`}
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}
