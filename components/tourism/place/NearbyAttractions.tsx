import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { RelatedTourismGuide, TourismGuideCard } from "@/types/tourism.type";

interface Props {
    guides: RelatedTourismGuide[];
}

export default function NearbyAttractions({ guides }: Props) {
    if (!guides.length) return null;

    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                <div className="mb-16 flex items-end justify-between gap-10">

                    <div>

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-sea" />

                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                                More Destinations
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                            Nearby
                            <span className="block text-dark-grey-blue/60">
                                attractions to explore.
                            </span>
                        </h2>

                    </div>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {guides.map((guide) => (
                        <Link
                            key={guide.id}
                            href={`/tourism/place/${guide.slug}`}
                            className="group overflow-hidden rounded-[30px] border border-border bg-white transition hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">

                                <Image
                                    src={
                                        guide.featuredImage ??
                                        "/images/placeholders/tourism.jpg"
                                    }
                                    alt={guide.title}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />

                            </div>

                            <div className="p-8">

                                <div className="mb-4 flex items-center gap-2 text-sm text-muted">

                                    <MapPin size={16} />

                                    <span>
                                        {guide.district ?? "Kerala"}
                                    </span>

                                </div>

                                <h3 className="text-2xl font-semibold text-dark-cerulean">
                                    {guide.title}
                                </h3>

                                <p className="mt-4 line-clamp-3 leading-7 text-muted">
                                    {guide.excerpt}
                                </p>

                                <div className="mt-8 inline-flex items-center gap-2 font-semibold text-sea">

                                    Explore

                                    <ArrowRight
                                        size={18}
                                        className="transition group-hover:translate-x-1"
                                    />

                                </div>

                            </div>

                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}