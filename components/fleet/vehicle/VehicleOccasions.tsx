import {
    Plane,
    BriefcaseBusiness,
    HeartHandshake,
    Mountain,
    Church,
    Users,
} from "lucide-react";

import { Vehicle } from "@/types/fleet.type";

interface Props {
    vehicle: Vehicle;
}

const occasions = [
    {
        icon: Plane,
        title: "Airport Transfers",
        description:
            "Reliable airport pickups and drop-offs with comfortable seating and luggage space.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Corporate Travel",
        description:
            "Perfect for business meetings, conferences and executive transportation.",
    },
    {
        icon: HeartHandshake,
        title: "Wedding Events",
        description:
            "Travel comfortably for weddings, receptions and family celebrations.",
    },
    {
        icon: Mountain,
        title: "Kerala Tours",
        description:
            "Explore Kerala's beautiful destinations with experienced chauffeurs.",
    },
    {
        icon: Church,
        title: "Pilgrimages",
        description:
            "Comfortable transportation for churches, temples and religious trips.",
    },
    {
        icon: Users,
        title: "Family Holidays",
        description:
            "Ideal for memorable family vacations with plenty of comfort.",
    },
];

export default function VehicleOccasions({
    vehicle,
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
                        Where {vehicle.name}
                        <span className="block text-dark-grey-blue/55">
                            truly shines.
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

                                <h3 className="mt-7 text-2xl font-semibold text-dark-cerulean">
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