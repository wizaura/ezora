import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Users, Luggage } from "lucide-react";

import { RelatedVehicle } from "@/types/fleet.type";

interface Props {
    vehicles: RelatedVehicle[];
}

export default function RelatedVehicles({
    vehicles,
}: Props) {
    if (!vehicles.length) return null;


    return (
        <section className="bg-background py-16">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                <div className="mb-14 flex items-end justify-between">

                    <div>

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-sea" />

                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                                You May Also Like
                            </p>

                        </div>

                        <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                            Explore similar
                            <span className="block text-dark-grey-blue/55">
                                vehicles.
                            </span>
                        </h2>

                    </div>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {vehicles.map((vehicle) => (

                        <Link
                            key={vehicle.id}
                            href={`/fleet/vehicle/${vehicle.slug}`}
                            className="group overflow-hidden rounded-[30px] border border-border bg-white transition hover:-translate-y-2 hover:shadow-xl"
                        >

                            <Image
                                src={
                                    vehicle.featuredImage ||
                                    "/images/placeholders/fleet-category.jpg"
                                }
                                alt={vehicle.name}
                                width={700}
                                height={500}
                                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="p-8">

                                <h3 className="text-2xl font-semibold text-dark-cerulean">
                                    {vehicle.name}
                                </h3>

                                <p className="mt-4 line-clamp-3 text-muted">
                                    {vehicle.shortDescription}
                                </p>

                                <div className="mt-6 flex gap-6">

                                    <div className="flex items-center gap-2">
                                        <Users size={18} />
                                        {vehicle.seatingCapacity}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Luggage size={18} />
                                        {vehicle.luggageCapacity}
                                    </div>

                                </div>

                                <div className="mt-8 inline-flex items-center gap-2 font-semibold text-sea">

                                    Explore Vehicle

                                    <ArrowUpRight size={18} />

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>
        </section>
    );
}