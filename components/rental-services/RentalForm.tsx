"use client";

import {
    ArrowRight,
    Calendar,
    CarFront,
    Clock3,
    Mail,
    MapPin,
    Phone,
    User,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function RentalForm() {
    return (
        <div className="overflow-hidden rounded-[32px] border border-border bg-white shadow-[0_30px_80px_rgba(7,48,66,0.08)]">
            {/* Header */}
            <div className="border-b border-border bg-dark-cerulean px-8 py-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-light-sea-green">
                    Rental Calculator
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Request Your Quote
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-white/70">
                    Fill in your journey details and we'll calculate the
                    distance, estimated travel time and rental quotation.
                </p>
            </div>

            <div className="space-y-7 p-8">
                {/* Pickup */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-dark-cerulean">
                        Pickup Location
                    </label>

                    <div className="relative">
                        <MapPin
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                            size={20}
                        />

                        <input
                            type="text"
                            placeholder="Enter pickup location"
                            className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 text-dark-cerulean placeholder:text-muted outline-none transition-all duration-300 focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                        />
                    </div>
                </div>

                {/* Drop */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-dark-cerulean">
                        Drop Location
                    </label>

                    <div className="relative">
                        <MapPin
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                            size={20}
                        />

                        <input
                            type="text"
                            placeholder="Enter destination"
                            className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 text-dark-cerulean placeholder:text-muted outline-none transition-all duration-300 focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                        />
                    </div>
                </div>

                {/* Date & Time */}
                <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-dark-cerulean">
                            Pickup Date
                        </label>

                        <div className="relative">
                            <Calendar
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                                size={20}
                            />

                            <input
                                type="date"
                                className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 text-dark-cerulean outline-none transition-all duration-300 focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-dark-cerulean">
                            Pickup Time
                        </label>

                        <div className="relative">
                            <Clock3
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                                size={20}
                            />

                            <input
                                type="time"
                                className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 text-dark-cerulean outline-none transition-all duration-300 focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                            />
                        </div>
                    </div>
                </div>

                {/* Return + Vehicle */}
                <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-dark-cerulean">
                            Return Date
                        </label>

                        <div className="relative">
                            <Calendar
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                                size={20}
                            />

                            <input
                                type="date"
                                className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 text-dark-cerulean outline-none transition-all duration-300 focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-dark-cerulean">
                            Vehicle Type
                        </label>

                        <div className="relative">
                            <CarFront
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                                size={20}
                            />

                            <select className="h-14 w-full appearance-none rounded-2xl border border-border bg-surface-soft pl-14 pr-5 text-dark-cerulean outline-none transition-all duration-300 focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10">
                                <option>Select Vehicle</option>
                                <option>Sedan</option>
                                <option>SUV</option>
                                <option>Luxury</option>
                                <option>Tempo Traveller</option>
                                <option>Mini Bus</option>
                                <option>Bus</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Name & Phone */}
                <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-dark-cerulean">
                            Full Name
                        </label>

                        <div className="relative">
                            <User
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                                size={20}
                            />

                            <input
                                type="text"
                                placeholder="John Doe"
                                className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 text-dark-cerulean placeholder:text-muted outline-none transition-all duration-300 focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-dark-cerulean">
                            Phone Number
                        </label>

                        <div className="relative">
                            <Phone
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                                size={20}
                            />

                            <input
                                type="tel"
                                placeholder="+91 XXXXX XXXXX"
                                className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 text-dark-cerulean placeholder:text-muted outline-none transition-all duration-300 focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                            />
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-dark-cerulean">
                        Email Address
                    </label>

                    <div className="relative">
                        <Mail
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
                            size={20}
                        />

                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 text-dark-cerulean placeholder:text-muted outline-none transition-all duration-300 focus:border-sea focus:bg-white focus:ring-4 focus:ring-sea/10"
                        />
                    </div>
                </div>

                {/* Quote Preview */}
                <div className="rounded-3xl bg-dark-cerulean p-6 text-white">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <h4 className="font-semibold">
                            Estimated Trip
                        </h4>

                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                            Live Preview
                        </span>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-6 text-center">
                        <div>
                            <p className="text-xs uppercase tracking-wider text-white/60">
                                Distance
                            </p>

                            <p className="mt-2 text-xl font-semibold">
                                —
                            </p>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-wider text-white/60">
                                Duration
                            </p>

                            <p className="mt-2 text-xl font-semibold">
                                —
                            </p>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-wider text-white/60">
                                Fare
                            </p>

                            <p className="mt-2 text-xl font-semibold text-light-sea-green">
                                —
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <Button className="group h-14 w-full rounded-full bg-dark-cerulean text-base font-semibold text-white transition-all duration-300 hover:bg-greenish-blue">
                    Calculate My Quote

                    <ArrowRight
                        size={18}
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    />
                </Button>
            </div>
        </div>
    );
}