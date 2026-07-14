import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  ShieldCheck,
  Users,
} from "lucide-react";

const leaseOptions = [
  {
    duration: "Monthly",
    label: "Flexible monthly fleet",
    description: "Ideal for short-term projects and evolving business needs.",
  },
  {
    duration: "Quarterly",
    label: "Extended corporate mobility",
    description: "Consistent transport for teams and ongoing operations.",
  },
  {
    duration: "Yearly",
    label: "Dedicated long-term fleet",
    description: "Reliable annual mobility with vehicles and chauffeurs.",
  },
];

const benefits = [
  {
    icon: Users,
    label: "Professional chauffeurs",
  },
  {
    icon: ShieldCheck,
    label: "Maintained premium fleet",
  },
  {
    icon: CalendarDays,
    label: "Flexible agreements",
  },
];

export default function CorporateLeasingSection() {
  return (
    <section className="overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-16">
          {/* Left Image */}
          <div className="lg:col-span-6">
            <div className="relative min-h-[500px] overflow-hidden rounded-[28px] sm:min-h-[600px] lg:h-full lg:min-h-[650px]">
              <Image
                src="/images/home/corporate-1.jpg"
                alt="Corporate chauffeur-driven fleet leasing in Kerala"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Image Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-cerulean/90 via-dark-cerulean/10 to-transparent" />

              <div className="absolute inset-0 bg-dark-cerulean/10" />

              {/* Floating Badge */}
              <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md">
                  <Building2 size={15} className="text-light-sea-green" />

                  Corporate Fleet Solutions
                </div>
              </div>

              {/* Bottom Image Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="max-w-md text-2xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                  Reliable mobility that keeps your business moving.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;

                    return (
                      <div
                        key={benefit.label}
                        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-medium text-white/80 backdrop-blur-md"
                      >
                        <Icon
                          size={14}
                          className="text-light-sea-green"
                        />

                        {benefit.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center lg:col-span-6">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-sea" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                Corporate Leasing
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-[680px] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-dark-cerulean">
              A dedicated fleet,
              <span className="block text-dark-grey-blue/55">
                built for business.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-muted">
              Flexible chauffeur-driven fleet solutions for companies, hotels,
              business teams and corporate operations across Kerala. Choose a
              monthly, quarterly or yearly agreement tailored to your transport
              requirements.
            </p>

            {/* Lease Options */}
            <div className="mt-10 border-t border-border">
              {leaseOptions.map((option, index) => (
                <div
                  key={option.duration}
                  className="group grid gap-3 border-b border-border py-5 transition-colors duration-300 hover:bg-surface-soft sm:grid-cols-[110px_1fr_auto] sm:items-center sm:px-3"
                >
                  {/* Duration */}
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-sea">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-semibold text-dark-cerulean">
                      {option.duration}
                    </span>
                  </div>

                  {/* Details */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {option.label}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-muted">
                      {option.description}
                    </p>
                  </div>

                  {/* Check */}
                  <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-sea/10 text-sea transition-colors duration-300 group-hover:bg-sea group-hover:text-white sm:flex">
                    <Check size={16} />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/corporate-leases"
                className="group inline-flex h-14 items-center gap-3 rounded-full bg-dark-cerulean px-7 text-sm font-semibold text-white transition-colors duration-300 hover:bg-greenish-blue"
              >
                Explore Corporate Leasing

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-dark-cerulean"
              >
                Discuss your requirements

                <ArrowRight
                  size={16}
                  className="text-sea transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}