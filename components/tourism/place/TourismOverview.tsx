import Image from "next/image";
import {
    MapPin,
    CalendarDays,
    Clock3,
    Ticket,
} from "lucide-react";

import { TourismCategorySummary, TourismGuideDetail } from "@/types/tourism.type";
import Link from "next/link";

interface Props {
    guide: TourismGuideDetail;
    categories: TourismCategorySummary[];
}

export default function TourismOverview({ guide, categories }: Props) {
    const stats = [
        {
            icon: MapPin,
            label: "District",
            value: guide.district ?? "Kerala",
        },
        {
            icon: CalendarDays,
            label: "Best Time",
            value: guide.bestTimeToVisit ?? "Year Round",
        },
        {
            icon: Clock3,
            label: "Duration",
            value: guide.duration ?? "Flexible",
        },
        {
            icon: Ticket,
            label: "Entry Fee",
            value: guide.entryFee ?? "Free",
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                {/* Heading */}
                <div className="mx-auto max-w-5xl text-center">

                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-sea" />

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                            Destination Overview
                        </p>

                        <span className="h-px w-10 bg-sea" />
                    </div>

                    <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                        Discover
                        <span className="block text-dark-grey-blue/60">
                            {guide.title}
                        </span>
                    </h2>

                </div>

                {/* Hero + Quick Facts */}
                <div className="mt-14 grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">

                    {/* Image */}
                    <div className="relative min-h-[520px] overflow-hidden rounded-[36px]">

                        <Image
                            src={
                                guide.featuredImage ??
                                "/images/placeholders/tourism.jpg"
                            }
                            alt={guide.title}
                            fill
                            priority
                            className="object-cover transition duration-700 hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    </div>

                    {/* Quick Facts */}
                    <div className="flex flex-col rounded-[36px] border border-border bg-background p-8">

                        <div className="mb-8">

                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-px w-8 bg-sea" />

                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                                    Quick Facts
                                </p>

                            </div>

                            <h3 className="text-3xl font-semibold text-dark-cerulean">
                                Visitor Information
                            </h3>

                        </div>

                        <div className="grid gap-5">

                            {stats.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sea/10 text-sea">
                                            <Icon size={22} />
                                        </div>

                                        <div>

                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                                                {item.label}
                                            </p>

                                            <p className="mt-2 text-lg font-semibold text-dark-cerulean">
                                                {item.value}
                                            </p>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </div>

                {/* Content */}
                <div className="mx-auto mt-16 max-w-5xl">

                    <div
                        className="
                    prose prose-lg
                    max-w-none
                    prose-headings:text-dark-cerulean
                    prose-p:text-muted
                    prose-p:leading-8
                    prose-li:text-muted
                    prose-li:leading-8
                    prose-strong:text-dark-cerulean
                "
                        dangerouslySetInnerHTML={{
                            __html: guide.content,
                        }}
                    />

                </div>

                {/* Explore Categories */}
                <div className="mt-16 rounded-[36px] border border-border bg-background p-10 lg:p-14">

                    <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                        <div className="max-w-2xl">

                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-sea" />

                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                                    Explore More
                                </p>
                            </div>

                            <h3 className="text-4xl font-semibold tracking-[-0.04em] text-dark-cerulean">
                                Discover Kerala by category
                            </h3>

                            <p className="mt-5 leading-8 text-muted">
                                Whether you're looking for misty hill stations,
                                pristine beaches, serene backwaters or historical
                                landmarks, browse destinations based on your travel
                                interests.
                            </p>

                        </div>

                        <div className="flex flex-wrap gap-4">

                            {categories.map((category) => (
                                <Link
                                    key={category.id}
                                    href={`/tourism/${category.slug}`}
                                    className="rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold transition hover:border-sea hover:bg-sea hover:text-white"
                                >
                                    {category.name}
                                </Link>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}