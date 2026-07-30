"use client";

import { useState } from "react";
import {
    CalendarDays,
    ChevronDown,
    ChevronUp,
    Clock3,
    IndianRupee,
    MapPin,
    MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
    title: string;
    location: string;
    duration: string;
    days: number;
    nights: number;
    price: number;
};

export default function PackageBookingBar({
    title,
    location,
    duration,
    days,
    nights,
    price,
}: Props) {
    const [expanded, setExpanded] = useState(false);

    const handleWhatsApp = () => {
        const text = `Hello Ezora Tours 👋

I'm interested in the following package.

📍 ${title}

Could you please share the itinerary, pricing and availability?`;

        window.open(
            `https://wa.me/919876543210?text=${encodeURIComponent(text)}`,
            "_blank"
        );
    };

    return (
        <>
            {/* Overlay */}

            {expanded && (
                <button
                    aria-label="Close"
                    onClick={() => setExpanded(false)}
                    className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] md:hidden"
                />
            )}

            <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">

                {/* Expanded Sheet */}

                <div
                    className={`overflow-hidden rounded-t-[32px] bg-white shadow-[0_-20px_60px_rgba(0,0,0,0.12)] transition-all duration-300 ${
                        expanded
                            ? "max-h-[500px] border-t border-border"
                            : "max-h-0"
                    }`}
                >
                    <div className="px-6 pb-8 pt-6">

                        <div className="mx-auto mb-6 h-1.5 w-14 rounded-full bg-border" />

                        <h3 className="text-xl font-semibold text-dark-cerulean">
                            {title}
                        </h3>

                        <div className="mt-6 space-y-5">

                            <div className="flex items-center gap-3">
                                <MapPin
                                    size={20}
                                    className="text-light-sea-green"
                                />

                                <span>{location}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Clock3
                                    size={20}
                                    className="text-light-sea-green"
                                />

                                <span>{duration}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <CalendarDays
                                    size={20}
                                    className="text-light-sea-green"
                                />

                                <span>
                                    {days} Days / {nights} Nights
                                </span>
                            </div>

                        </div>

                        <div className="mt-4 rounded-3xl bg-surface-soft p-5">

                            <p className="text-xs uppercase tracking-widest text-muted">
                                Starting From
                            </p>

                            <div className="mt-2 flex items-center text-4xl font-bold text-dark-cerulean">
                                <IndianRupee size={30} />
                                {price.toLocaleString("en-IN")}
                            </div>

                        </div>

                        <div className="mt-4 space-y-3">

                            <button
                                className="w-full rounded-full bg-light-sea-green py-4 font-semibold text-white transition hover:opacity-90"
                            >
                                Enquire Now
                            </button>

                            <button
                                onClick={handleWhatsApp}
                                className="flex w-full items-center justify-center gap-2 rounded-full border border-light-sea-green py-4 font-semibold text-light-sea-green transition hover:bg-light-sea-green hover:text-white"
                            >
                                <FaWhatsapp size={20} />

                                WhatsApp Us
                            </button>

                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}

                <div className="border-t border-border bg-white/95 backdrop-blur-xl">

                    <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4">

                        <div>

                            <p className="text-xs uppercase tracking-widest text-muted">
                                Starting From
                            </p>

                            <div className="mt-1 flex items-center text-2xl font-bold text-dark-cerulean">

                                <IndianRupee size={22} />

                                {price.toLocaleString("en-IN")}

                            </div>

                        </div>

                        <div className="flex items-center gap-3">

                            <button
                                onClick={() =>
                                    setExpanded((prev) => !prev)
                                }
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition hover:bg-surface-soft"
                            >
                                {expanded ? (
                                    <ChevronDown size={22} />
                                ) : (
                                    <ChevronUp size={22} />
                                )}
                            </button>

                            <button
                                onClick={handleWhatsApp}
                                className="flex h-12 items-center gap-2 rounded-full bg-light-sea-green px-6 font-semibold text-white transition hover:opacity-90"
                            >
                                <FaWhatsapp size={18} />

                                Enquire
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}