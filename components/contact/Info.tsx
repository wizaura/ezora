"use client";

import Link from "next/link";
import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    ArrowRight,
    ArrowUpRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const contactCards = [
    {
        icon: Phone,
        title: "Call Us",
        description:
            "Speak directly with our travel experts for bookings, airport transfers, cab rentals, and Kerala tour packages.",
        value: "+91 98765 43210",
        href: "tel:+919876543210",
        button: "Call Now",
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        description:
            "Get instant assistance, request quotations, and discuss your travel plans with our team on WhatsApp.",
        value: "Chat with Ezora",
        href: "https://wa.me/919876543210",
        button: "Start Chat",
    },
    {
        icon: Mail,
        title: "Email Us",
        description:
            "Send us your travel requirements and we'll respond with the best options tailored to your journey.",
        value: "hello@ezoratours.com",
        href: "mailto:hello@ezoratours.com",
        button: "Send Email",
    },
    {
        icon: MapPin,
        title: "Visit Our Office",
        description:
            "Meet our team in person to discuss customised travel plans, premium rentals, and holiday packages.",
        value: "Kannur, Kerala",
        href: "#map",
        button: "Get Directions",
    },
];

export default function ContactOptions() {
    return (
        <section className="overflow-hidden bg-white py-16">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                {/* Header */}
                <div className="grid gap-12 border-b border-border pb-14 lg:grid-cols-12 lg:items-end">

                    {/* Left */}
                    <div className="lg:col-span-7">

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-sea" />

                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
                                Contact Ezora
                            </p>
                        </div>

                        <h2 className="max-w-[820px] text-[clamp(2.8rem,5vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-dark-cerulean">
                            Let's make your next
                            <span className="block text-dark-grey-blue/55">
                                journey effortless.
                            </span>
                        </h2>

                    </div>

                    {/* Right */}
                    <div className="lg:col-span-5">

                        <p className="max-w-md text-base leading-8 text-muted lg:ml-auto">
                            Whether you're planning a Kerala holiday, arranging an
                            airport transfer, hiring a premium chauffeur-driven
                            vehicle, or organising corporate travel, our travel
                            specialists are ready to help with personalised assistance
                            and quick responses.
                        </p>

                    </div>

                </div>

                {/* Contact Cards */}

                <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                    {/* Call */}

                    <div className="group rounded-[30px] border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sea hover:shadow-2xl">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sea/10 text-sea transition group-hover:bg-sea group-hover:text-white">
                            <Phone size={30} />
                        </div>

                        <h3 className="mt-8 text-2xl font-semibold text-dark-cerulean">
                            Call Us
                        </h3>

                        <p className="mt-4 leading-7 text-muted">
                            Speak directly with our travel consultants for bookings,
                            tour packages and airport transfers.
                        </p>

                        <p className="mt-8 font-semibold text-dark-cerulean">
                            +91 97465 88741
                        </p>

                        <Link
                            href="tel:+919746588741"
                            className="mt-8 inline-flex items-center gap-2 font-semibold text-sea"
                        >
                            Call Now
                            <ArrowUpRight size={18} />
                        </Link>

                    </div>

                    {/* WhatsApp */}

                    <div className="group rounded-[30px] border border-border bg-dark-cerulean p-8 text-white transition-all duration-300 hover:-translate-y-2">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                            <FaWhatsapp size={30} />
                        </div>

                        <h3 className="mt-8 text-2xl font-semibold">
                            WhatsApp
                        </h3>

                        <p className="mt-4 leading-7 text-white/70">
                            Get quick quotations and personalised travel assistance
                            through WhatsApp.
                        </p>

                        <Link
                            href="https://wa.me/919037227941"
                            className="mt-8 inline-flex items-center gap-2 font-semibold text-light-sea-green"
                        >
                            Start Chat
                            <ArrowUpRight size={18} />
                        </Link>

                    </div>

                    {/* Email */}

                    <div className="group rounded-[30px] border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sea hover:shadow-2xl">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sea/10 text-sea">
                            <Mail size={30} />
                        </div>

                        <h3 className="mt-8 text-2xl font-semibold text-dark-cerulean">
                            Email
                        </h3>

                        <p className="mt-4 leading-7 text-muted">
                            Send us your travel requirements and receive a personalised
                            response from our team.
                        </p>

                        <Link
                            href="mailto:info@ezoratours.com"
                            className="mt-8 inline-block font-semibold text-dark-cerulean transition-colors hover:text-sea"
                        >
                            info@ezoratours.com
                        </Link>

                    </div>

                    {/* Office */}

                    <div className="group relative overflow-hidden rounded-[30px] bg-dark-cerulean p-8 text-white">

                        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/10 blur-2xl" />

                        <div className="relative">

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                                <MapPin size={30} />
                            </div>

                            <h3 className="mt-8 text-2xl font-semibold">
                                Visit Us
                            </h3>

                            <p className="mt-4 leading-7 text-white/75">
                                Meet our team and discuss customised Kerala tour
                                packages, vehicle rentals and corporate travel.
                            </p>

                            {/* <p className="mt-8 font-semibold">
                                Kannur, Kerala
                            </p> */}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}