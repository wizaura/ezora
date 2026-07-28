import {
    ShieldCheck,
    Clock3,
    Sparkles,
    Route,
} from "lucide-react";

import { FleetCategory } from "@/types/fleet.type";

interface Props {
    category: FleetCategory;
}

const benefits = [
    {
        icon: ShieldCheck,
        title: "Professional Chauffeurs",
        description:
            "Every journey is handled by experienced, licensed and courteous drivers committed to your safety and comfort.",
    },
    {
        icon: Sparkles,
        title: "Clean & Well Maintained",
        description:
            "Our vehicles are regularly serviced, sanitised and maintained to ensure a premium travel experience throughout your journey.",
    },
    {
        icon: Clock3,
        title: "Reliable Service",
        description:
            "Punctual pickups, transparent communication and dependable transportation for every occasion.",
    },
    {
        icon: Route,
        title: "Across Kerala",
        description:
            "Ideal for airport transfers, sightseeing, corporate travel, family holidays and long-distance trips across Kerala.",
    },
];

export default function CategoryBenefits({
    category,
}: Props) {
    return (
        <section className="bg-background py-16">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                {/* Heading */}

                <div className="grid gap-10 lg:grid-cols-12 lg:items-end">

                    <div className="lg:col-span-7">

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-sea" />

                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                                Why Choose {category.name}
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                            Designed for
                            <span className="block text-dark-grey-blue/55">
                                comfortable journeys.
                            </span>
                        </h2>

                    </div>

                    <div className="lg:col-span-5">

                        <p className="max-w-lg leading-8 text-muted lg:ml-auto">
                            Whether you're travelling with family,
                            colleagues or guests, our {category.name.toLowerCase()}
                            &nbsp;fleet combines comfort, reliability
                            and professional chauffeur service to make
                            every journey enjoyable.
                        </p>

                    </div>

                </div>

                {/* Cards */}

                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                    {benefits.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className="group rounded-[28px] border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sea/30 hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sea/10 text-sea transition group-hover:bg-sea group-hover:text-white">
                                    <Icon size={24} />
                                </div>

                                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-dark-cerulean">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-7 text-muted">
                                    {item.description}
                                </p>
                            </article>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}