import {
    BadgeCheck,
    CarFront,
} from "lucide-react";

import { Vehicle } from "@/types/fleet.type";

interface Props {
    vehicle: Vehicle;
}

export default function VehicleSpecifications({
    vehicle,
}: Props) {
    return (
        <section className="bg-background py-16">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                <div className="grid gap-12 lg:grid-cols-12">

                    <div className="lg:col-span-4">

                        <div className="sticky top-28">

                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-sea" />

                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                                    Specifications
                                </p>
                            </div>

                            <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                                Technical
                                <span className="block text-dark-grey-blue/55">
                                    specifications.
                                </span>
                            </h2>

                        </div>

                    </div>

                    <div className="grid gap-px overflow-hidden rounded-[32px] border border-border bg-border lg:col-span-8">

                        {vehicle.specifications.map((spec) => (

                            <div
                                key={spec.id}
                                className="flex items-center justify-between bg-white p-7"
                            >
                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sea/10 text-sea">
                                        <CarFront size={20} />
                                    </div>

                                    <p className="font-semibold text-dark-cerulean">
                                        {spec.label}
                                    </p>

                                </div>

                                <div className="flex items-center gap-2">

                                    <BadgeCheck
                                        size={18}
                                        className="text-sea"
                                    />

                                    <span className="font-medium text-dark-grey-blue">
                                        {spec.value}
                                    </span>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}