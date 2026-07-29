import { Check } from "lucide-react";

import { Vehicle } from "@/types/fleet.type";

interface Props {
    vehicle: Vehicle;
}

export default function VehicleFeatures({
    vehicle,
}: Props) {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                <div className="mb-14 max-w-3xl">

                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-10 bg-sea" />

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                            Premium Features
                        </p>
                    </div>

                    <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                        Everything you need
                        <span className="block text-dark-grey-blue/55">
                            for a comfortable journey.
                        </span>
                    </h2>

                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {vehicle.features.map((feature) => (

                        <div
                            key={feature.id}
                            className="rounded-[28px] border border-border bg-background p-8 transition hover:-translate-y-2 hover:shadow-xl"
                        >

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sea/10 text-sea">

                                <Check size={20} />

                            </div>

                            <h3 className="mt-6 text-xl font-semibold text-dark-cerulean">
                                {feature.title}
                            </h3>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}