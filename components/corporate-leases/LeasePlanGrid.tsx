"use client";

import { useState } from "react";
import { LeasePlan, LeaseTerm, corporateLeasePlans } from "@/data/corporate-lease-plans";
import LeaseTermTabs from "./LeaseTermTabs";
import LeasePlanCard from "./LeasePlanCard";

const TERMS: LeaseTerm[] = ["Monthly", "Quarterly", "Yearly"];

export default function LeasePlanGrid() {
  const [activeTerm, setActiveTerm] = useState<LeaseTerm>("Monthly");

  const activePlan = corporateLeasePlans.find((plan) => plan.term === activeTerm);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1000px] px-5 lg:px-8">
        <div className="mb-10 text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-dark-cerulean md:text-4xl">
            Choose Your Lease Term
          </h2>
          <p className="mb-8 text-base text-muted max-w-2xl mx-auto">
            Our flexible leasing options ensure you get the exact fleet support you need, precisely when you need it.
          </p>
          <LeaseTermTabs 
            terms={TERMS}
            activeTerm={activeTerm}
            onSelectTerm={setActiveTerm}
          />
        </div>

        {activePlan && (
          <div className="mx-auto max-w-2xl transition-all duration-500 ease-in-out">
            <LeasePlanCard plan={activePlan} />
          </div>
        )}
      </div>
    </section>
  );
}
