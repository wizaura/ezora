import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    Calendar,
    MapPin,
} from "lucide-react";

import { TourismGuide, TourismGuideCard } from "@/types/tourism.type";

interface Props {
    guide: TourismGuideCard;
}

export default function TourismCard({
    guide,
}: Props) {
    return (
        <Link
            href={`/tourism/place/${guide.slug}`}
            className="group overflow-hidden rounded-[30px] border border-border bg-white transition hover:-translate-y-2 hover:shadow-xl"
        >
            <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                    src={
                        guide.featuredImage ||
                        "/images/placeholders/tourism.jpg"
                    }
                    alt={guide.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute left-6 top-6">

                    <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-dark-cerulean backdrop-blur">
                        {guide.category.name}
                    </span>

                </div>

            </div>

            <div className="p-8">

                <div className="mb-5 flex flex-wrap gap-5 text-sm text-muted">

                    {guide.district && (
                        <div className="flex items-center gap-2">
                            <MapPin
                                size={16}
                                className="text-sea"
                            />
                            {guide.district}
                        </div>
                    )}

                    {guide.bestTimeToVisit && (
                        <div className="flex items-center gap-2">
                            <Calendar
                                size={16}
                                className="text-sea"
                            />
                            {guide.bestTimeToVisit}
                        </div>
                    )}

                </div>

                <h3 className="text-2xl font-semibold leading-tight text-dark-cerulean transition group-hover:text-sea">
                    {guide.title}
                </h3>

                <p className="mt-4 line-clamp-3 leading-7 text-muted">
                    {guide.excerpt}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-border pt-6">

                    <span className="font-semibold text-sea">
                        Explore Destination
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition group-hover:border-sea group-hover:bg-sea group-hover:text-white">
                        <ArrowUpRight size={18} />
                    </div>

                </div>

            </div>
        </Link>
    );
}