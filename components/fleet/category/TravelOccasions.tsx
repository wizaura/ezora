import {
    Plane,
    BriefcaseBusiness,
    HeartHandshake,
    Mountain,
    Church,
    Users,
} from "lucide-react";

import { FleetCategory } from "@/types/fleet.type";

interface Props {
    category: FleetCategory;
}

const occasions = [
    {
        icon: Plane,
        title: "Airport Transfers",
        description:
            "Reliable pickups and drop-offs with professional chauffeurs and ample luggage space.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Corporate Travel",
        description:
            "Executive transportation for meetings, conferences and business events.",
    },
    {
        icon: HeartHandshake,
        title: "Wedding Events",
        description:
            "Comfortable travel for couples, families and wedding guests.",
    },
    {
        icon: Mountain,
        title: "Sightseeing Tours",
        description:
            "Explore Kerala's destinations in comfort with experienced local drivers.",
    },
    {
        icon: Church,
        title: "Pilgrimages",
        description:
            "Ideal for churches, temples, mosques and religious group travel.",
    },
    {
        icon: Users,
        title: "Family Holidays",
        description:
            "Spacious, safe and comfortable vehicles for memorable family journeys.",
    },
];

export default function TravelOccasions({
    category,
}: Props) {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                <div className="max-w-3xl">

                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-10 bg-sea" />

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                            Perfect For
                        </p>
                    </div>

                    <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                        Ideal travel occasions
                        <span className="block text-dark-grey-blue/55">
                            with {category.name}.
                        </span>
                    </h2>

                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {occasions.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className="rounded-[28px] border border-border bg-background p-8 transition hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sea/10 text-sea">
                                    <Icon size={24} />
                                </div>

                                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-dark-cerulean">
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