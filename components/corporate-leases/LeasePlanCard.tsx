import { LeasePlan } from "@/data/corporate-lease-plans";
import { CheckCircle2, ArrowRight } from "lucide-react";

type LeasePlanCardProps = {
  plan: LeasePlan;
};

export default function LeasePlanCard({ plan }: LeasePlanCardProps) {
  return (
    <div className="flex flex-col rounded-[28px] border border-border bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg lg:p-10">
      <div className="mb-6">
        <span className="mb-4 inline-block rounded-full bg-surface-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-greenish-blue">
          {plan.term} Plan
        </span>
        <h3 className="mb-3 text-3xl font-semibold text-dark-cerulean">{plan.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{plan.bestFor}</p>
      </div>

      <div className="mb-8 flex-1">
        <ul className="space-y-4">
          {plan.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-dark-grey-blue">
              <CheckCircle2 className="mt-0.5 shrink-0 text-sea" size={18} />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {plan.savingsNote && (
        <div className="mb-8 rounded-xl bg-surface-soft p-4 text-center">
          <p className="text-sm font-medium text-greenish-blue">{plan.savingsNote}</p>
        </div>
      )}

      <button className="group mt-auto flex h-12 w-full items-center justify-center gap-2 rounded-full bg-dark-cerulean px-6 text-sm font-semibold text-white transition-colors hover:bg-sea">
        Request a Custom Quote
        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
}
