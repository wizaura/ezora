import Image from "next/image";

import {
    FleetCategoryVehicle,
} from "@/types/fleet.type";

interface Props {
    vehicles: FleetCategoryVehicle[];
}

interface GalleryItem {
    id: string;
    image: string;
    publicId: string;
    alt: string | null;
    sortOrder: number;
}

export default function CategoryGallery({
    vehicles,
}: Props) {

    const images: GalleryItem[] =
        vehicles.flatMap((vehicle) => {

            if (vehicle.gallery.length > 0) {
                return [...vehicle.gallery].sort(
                    (a, b) =>
                        a.sortOrder - b.sortOrder
                );
            }

            return [
                {
                    id: vehicle.id,

                    image:
                        vehicle.featuredImage ??
                        "/images/placeholders/fleet-category.jpg",

                    publicId: "",

                    alt: vehicle.name,

                    sortOrder: 0,
                },
            ];
        });

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
                        A closer look
                        <span className="block text-dark-grey-blue/55">
                            at our fleet.
                        </span>
                    </h2>

                </div>

                <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

                    {images.map((image, index) => (
                        <div
                            key={`${image.id}-${index}`}
                            className={`overflow-hidden rounded-[28px] ${
                                index % 5 === 0
                                    ? "lg:col-span-2 lg:row-span-2"
                                    : ""
                            }`}
                        >
                            <Image
                                src={image.image}
                                alt={
                                    image.alt ||
                                    "Ezora Tours vehicle"
                                }
                                width={900}
                                height={900}
                                className="h-full min-h-[250px] w-full object-cover transition duration-700 hover:scale-105"
                            />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}