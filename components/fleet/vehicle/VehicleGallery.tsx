import Image from "next/image";

import { Vehicle } from "@/types/fleet.type";

interface Props {
    vehicle: Vehicle;
}

export default function VehicleGallery({
    vehicle,
}: Props) {
    const images =
        vehicle.gallery.length > 0
            ? vehicle.gallery
            : [
                  {
                      id: vehicle.id,
                      image:
                          vehicle.featuredImage ??
                          "/images/placeholders/fleet-category.jpg",
                      alt: vehicle.name,
                  },
              ];

    return (
        <section className="bg-background py-16">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                <div className="mb-14 max-w-3xl">

                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-10 bg-sea" />

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                            Gallery
                        </p>
                    </div>

                    <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                        Explore every
                        <span className="block text-dark-grey-blue/55">
                            detail.
                        </span>
                    </h2>

                </div>

                <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

                    {images.map((image, index) => (

                        <div
                            key={image.id}
                            className={`group relative overflow-hidden rounded-[30px]
                            ${
                                index % 6 === 0
                                    ? "lg:col-span-2 lg:row-span-2"
                                    : index % 6 === 3
                                    ? "lg:col-span-2"
                                    : ""
                            }`}
                        >

                            <Image
                                src={image.image}
                                alt={
                                    image.alt ??
                                    vehicle.name
                                }
                                width={900}
                                height={900}
                                className="h-full min-h-[280px] w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6">

                                <p className="text-sm font-semibold text-white">
                                    {vehicle.name}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}