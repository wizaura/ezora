export type LeaseTerm = "Monthly" | "Quarterly" | "Yearly";

export type LeasePlan = {
  id: string;
  term: LeaseTerm;
  title: string;
  bestFor: string;
  highlights: string[];
  savingsNote?: string;
};

export const corporateLeasePlans: LeasePlan[] = [
  {
    id: "monthly-lease",
    term: "Monthly",
    title: "Flexible Monthly Lease",
    bestFor: "Short-term project teams, events, and seasonal business spikes.",
    highlights: [
      "Dedicated chauffeur included",
      "Fuel, maintenance, and insurance covered",
      "Flexible vehicle swapping",
      "Predictable single-invoice billing"
    ],
    savingsNote: "Ideal for requirements under 90 days with zero long-term commitment."
  },
  {
    id: "quarterly-lease",
    term: "Quarterly",
    title: "Quarterly Business Plan",
    bestFor: "Extended corporate delegations, mid-term projects, and hospitalities.",
    highlights: [
      "Dedicated, vetted chauffeur included",
      "Comprehensive maintenance & replacement guarantees",
      "Priority 24/7 business support line",
      "Option to upgrade fleet class mid-term"
    ],
    savingsNote: "Save up to 15% compared to standard monthly rolling leases."
  },
  {
    id: "yearly-lease",
    term: "Yearly",
    title: "Annual Fleet Partnership",
    bestFor: "Hotels, corporate parks, and businesses needing permanent transport solutions.",
    highlights: [
      "Dedicated chauffeur pool with substitutes",
      "Full fleet management and preventative maintenance",
      "Custom branding options available",
      "Dedicated account manager",
      "Highest SLA commitment"
    ],
    savingsNote: "Our most cost-effective tier. Best value for stays over 6 months."
  }
];
