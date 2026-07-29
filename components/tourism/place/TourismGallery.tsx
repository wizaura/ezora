"use client";

import Image from "next/image";

import { TourismGuideDetail } from "@/types/tourism.type";

interface Props {
    guide: TourismGuideDetail;
}

export default function TourismGallery({ guide }: Props) {
    if (!guide.gallery.length) return null;

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                <div className="mb-14 max-w-3xl">

                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-10 bg-sea" />

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                            Photo Gallery
                        </p>
                    </div>

                    <h2 className="text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                        Explore
                        <span className="block text-dark-grey-blue/60">
                            every beautiful corner.
                        </span>
                    </h2>

                </div>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

                    {guide.gallery.map((image) => (
                        <div
                            key={image.id}
                            className="group relative aspect-[4/3] overflow-hidden rounded-[28px]"
                        >
                            <Image
                                src={image.image}
                                alt={image.alt ?? guide.title}
                                fill
                                className="object-cover transition duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}