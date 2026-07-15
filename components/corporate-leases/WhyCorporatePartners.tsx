import { Briefcase, ShieldCheck, RefreshCcw, Headset } from "lucide-react";

const corporateBenefits = [
  {
    title: "Vetted Dedicated Drivers",
    description: "Experienced, background-checked chauffeurs who understand corporate etiquette, punctuality, and route optimization.",
    icon: ShieldCheck,
  },
  {
    title: "Predictable Monthly Billing",
    description: "Simplify your accounting with single-invoice monthly billing that covers fuel, driver, tolls, and maintenance.",
    icon: Briefcase,
  },
  {
    title: "Fleet Flexibility",
    description: "Swap your vehicle for a larger van during team events, or downsize to a sedan based on your changing business needs.",
    icon: RefreshCcw,
  },
  {
    title: "Priority Support Line",
    description: "Access a dedicated corporate account manager available 24/7 to handle itinerary changes and dispatch requirements.",
    icon: Headset,
  },
];

export default function WhyCorporatePartners() {
  return (
    <section className="bg-dark-cerulean py-16 lg:py-24 text-white">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="mb-12 md:text-center lg:mb-20">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Why Businesses Partner With Us
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {corporateBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex flex-col items-start md:items-center md:text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-light-sea-green backdrop-blur-md">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
