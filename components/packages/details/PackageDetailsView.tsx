"use client";

import Image from "next/image";
import {
    CalendarDays,
    CheckCircle2,
    Clock3,
    IndianRupee,
    MapPin,
    XCircle,
} from "lucide-react";
import { PackageDetail } from "@/types/package.type";
import TourEnquiryForm from "./TourEnquiryForm";
import PackageBookingBar from "./PackageBookingBar";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
    package: PackageDetail;
};

export default function PackageDetailView({ package: pkg }: Props) {
    const gallery = pkg.images ?? [];

    const details = pkg.details;

    const itinerary = (details?.itinerary as any[]) ?? [];
    const highlights = (details?.highlights as string[]) ?? [];
    const inclusions = (details?.inclusions as string[]) ?? [];
    const exclusions = (details?.exclusions as string[]) ?? [];
    const faqs = (details?.faqs as any[]) ?? [];

    const router = useRouter();

    const openWhatsApp = () => {
        window.open("https://wa.me/919747827371", "_blank");
    };

    return (
        <section className="bg-white py-16 pb-28 md:pb-16">
            <div className="mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-[2fr_1fr] lg:px-8">
                {/* Left */}
                <div>
                    {/* Gallery */}
                    <div className="grid gap-4 md:grid-cols-2">
                        {gallery.map((image) => (
                            <div
                                key={image.id}
                                className="relative aspect-[4/3] overflow-hidden rounded-3xl"
                            >
                                <Image
                                    src={image.imageUrl}
                                    alt={image.alt || pkg.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    <section className="mt-12">
                        <h2 className="mb-4 text-3xl font-semibold text-dark-cerulean">
                            Overview
                        </h2>

                        <p className="leading-8 text-muted whitespace-pre-line">
                            {pkg.description}
                        </p>
                    </section>

                    {/* Highlights */}
                    {highlights.length > 0 && (
                        <section className="mt-16">
                            <h2 className="mb-6 text-3xl font-semibold text-dark-cerulean">
                                Tour Highlights
                            </h2>

                            <div className="grid gap-4 md:grid-cols-2">
                                {highlights.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3 rounded-2xl border border-border p-5"
                                    >
                                        <CheckCircle2
                                            size={20}
                                            className="mt-1 text-light-sea-green"
                                        />

                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Itinerary */}
                    {itinerary.length > 0 && (
                        <section className="mt-16">
                            <h2 className="mb-8 text-3xl font-semibold text-dark-cerulean">
                                Day-wise Itinerary
                            </h2>

                            <div className="space-y-6">
                                {itinerary.map((day, index) => (
                                    <div
                                        key={index}
                                        className="rounded-3xl border border-border p-6"
                                    >
                                        <h3 className="text-xl font-semibold text-dark-cerulean">
                                            Day {index + 1}{" "}
                                            {day.title && `- ${day.title}`}
                                        </h3>

                                        <p className="mt-3 whitespace-pre-line text-muted">
                                            {day.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Included & Excluded */}
                    <section className="mt-16 grid gap-8 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-2xl font-semibold text-dark-cerulean">
                                Included
                            </h2>

                            <div className="space-y-4">
                                {inclusions.map((item) => (
                                    <div key={item} className="flex gap-3">
                                        <CheckCircle2
                                            className="text-green-600"
                                            size={20}
                                        />

                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="mb-6 text-2xl font-semibold text-dark-cerulean">
                                Not Included
                            </h2>

                            <div className="space-y-4">
                                {exclusions.map((item) => (
                                    <div key={item} className="flex gap-3">
                                        <XCircle
                                            className="text-red-500"
                                            size={20}
                                        />

                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    {faqs.length > 0 && (
                        <section className="my-16">
                            <h2 className="mb-8 text-3xl font-semibold text-dark-cerulean">
                                Frequently Asked Questions
                            </h2>

                            <div className="space-y-5">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="rounded-3xl border border-border p-6"
                                    >
                                        <h3 className="font-semibold">
                                            {faq.question}
                                        </h3>

                                        <p className="mt-3 text-muted">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <TourEnquiryForm packageTitle={pkg.title} packageSlug={pkg.slug} />
                </div>

                {/* Sticky Sidebar */}
                <aside className="hidden md:block lg:sticky lg:top-28 lg:h-fit">
                    <div className="rounded-[32px] border border-border bg-surface-soft p-8 shadow-sm">
                        <h3 className="text-2xl font-semibold text-dark-cerulean">
                            {pkg.title}
                        </h3>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <MapPin size={18} />
                                <span>{pkg.location}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Clock3 size={18} />
                                <span>{pkg.duration}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <CalendarDays size={18} />
                                <span>
                                    {pkg.days} Days / {pkg.nights} Nights
                                </span>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-border pt-6">
                            <p className="text-sm uppercase tracking-widest text-muted">
                                Starting From
                            </p>

                            <div className="mt-2 flex items-center text-4xl font-bold text-dark-cerulean">
                                <IndianRupee size={30} />
                                {Number(pkg.startingPrice).toLocaleString("en-IN")}
                            </div>
                        </div>

                        <button
                            onClick={() => router.push(`/packages/${pkg.slug}#form`)}
                            className="mt-8 w-full rounded-full bg-light-sea-green px-6 py-4 font-semibold text-white transition hover:opacity-90"
                        >
                            Enquire Now
                        </button>

                        <Button
                            type="button"
                            variant="outline"
                            onClick={openWhatsApp}
                            className="mt-4 w-full rounded-full border border-light-sea-green px-6 py-6 font-semibold text-light-sea-green transition hover:bg-light-sea-green hover:text-white"
                        >

                            <FaWhatsapp className="mr-2 h-5 w-5" />

                            Continue on WhatsApp

                        </Button>
                    </div>
                </aside>
                <PackageBookingBar
                    title={pkg.title}
                    location={pkg.location}
                    duration={pkg.duration}
                    days={pkg.days}
                    nights={pkg.nights}
                    price={Number(pkg.startingPrice)}
                />
            </div>
        </section>
    );
}