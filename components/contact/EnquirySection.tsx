"use client";

import {
    ArrowRight,
    Clock3,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    Users,
    CarFront,
    Loader2,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactEnquirySection() {

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "Airport Transfer",
        pickup: "",
        destination: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message);
            }

            toast.success(result.message);

            setForm({
                name: "",
                email: "",
                phone: "",
                service: "Airport Transfer",
                pickup: "",
                destination: "",
                message: "",
            });

        } catch (error) {

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Failed to send enquiry."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <section className="bg-background py-16">
            <div className="mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-12 lg:px-8">

                {/* Form */}

                <div className="lg:col-span-7">

                    <div className="mb-8">

                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-px w-10 bg-sea" />

                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                                Send an Enquiry
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.5rem,4vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                            Plan your next
                            <span className="block text-dark-grey-blue/55">
                                journey with Ezora.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
                            Share your travel requirements and our team will
                            recommend the best vehicle or customised tour package
                            for your journey.
                        </p>

                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 rounded-[32px] border border-border bg-white p-8 shadow-sm">

                        <div className="grid gap-6 md:grid-cols-2">

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Full Name
                                </label>

                                <input
                                    className="w-full rounded-2xl border border-border px-5 py-4 outline-none transition focus:border-sea"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Phone Number
                                </label>

                                <input
                                    className="w-full rounded-2xl border border-border px-5 py-4 outline-none transition focus:border-sea"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+91 00000 00000"
                                />
                            </div>

                        </div>

                        <div className="grid gap-6 md:grid-cols-2">

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Email Address
                                </label>

                                <input
                                    className="w-full rounded-2xl border border-border px-5 py-4 outline-none transition focus:border-sea"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Service Required
                                </label>

                                <select
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    className="w-full rounded-2xl border border-border px-5 py-4 outline-none transition focus:border-sea"
                                >
                                    <option>Airport Transfer</option>
                                    <option>Kerala Tour Package</option>
                                    <option>Corporate Travel</option>
                                    <option>Luxury Vehicle Rental</option>
                                    <option>Wedding Transportation</option>
                                </select>
                            </div>

                        </div>

                        <div className="grid gap-6 md:grid-cols-2">

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Pickup Location
                                </label>

                                <input
                                    className="w-full rounded-2xl border border-border px-5 py-4 outline-none transition focus:border-sea"
                                    name="pickup"
                                    value={form.pickup}
                                    onChange={handleChange}
                                    placeholder="Cochin Airport"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Destination
                                </label>

                                <input
                                    className="w-full rounded-2xl border border-border px-5 py-4 outline-none transition focus:border-sea"
                                    name="destination"
                                    value={form.destination}
                                    onChange={handleChange}
                                    placeholder="Munnar"
                                />
                            </div>

                        </div>

                        <textarea
                            rows={6}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us about your travel requirements..."
                            className="w-full rounded-2xl border border-border px-5 py-4 outline-none transition focus:border-sea"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex items-center gap-3 rounded-full bg-dark-cerulean px-8 py-4 font-semibold text-white transition hover:bg-sea disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? (
                                <>
                                    <Loader2
                                        size={18}
                                        className="animate-spin"
                                    />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Enquiry
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </button>

                    </form>

                </div>

                {/* Sidebar */}

                <div className="lg:col-span-5">

                    <div className="sticky top-28 space-y-6">

                        <div className="overflow-hidden rounded-[32px] bg-dark-cerulean p-8 text-white">

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-light-sea-green">
                                Contact Information
                            </span>

                            <h3 className="mt-4 text-3xl font-semibold">
                                We're always ready to help.
                            </h3>

                            <div className="mt-10 space-y-8">

                                <InfoItem
                                    icon={<Phone size={20} />}
                                    title="Phone"
                                    value="+91 98765 43210"
                                />

                                <InfoItem
                                    icon={<Mail size={20} />}
                                    title="Email"
                                    value="hello@ezoratours.com"
                                />

                                <InfoItem
                                    icon={<MapPin size={20} />}
                                    title="Office"
                                    value="Kannur, Kerala"
                                />

                                <InfoItem
                                    icon={<Clock3 size={20} />}
                                    title="Business Hours"
                                    value="Mon – Sat | 9:00 AM – 7:00 PM"
                                />

                            </div>

                        </div>

                        <div className="grid grid-cols-2 gap-4">

                            <StatCard
                                icon={<Users size={22} />}
                                value="500+"
                                label="Happy Travellers"
                            />

                            <StatCard
                                icon={<CarFront size={22} />}
                                value="Premium"
                                label="Fleet"
                            />

                            <StatCard
                                icon={<ShieldCheck size={22} />}
                                value="100%"
                                label="Safe Travel"
                            />

                            <StatCard
                                icon={<Clock3 size={22} />}
                                value="24/7"
                                label="Support"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

function InfoItem({
    icon,
    title,
    value,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
}) {
    return (
        <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-light-sea-green">
                {icon}
            </div>

            <div>
                <p className="text-sm text-white/60">
                    {title}
                </p>

                <p className="mt-1 font-medium leading-6">
                    {value}
                </p>
            </div>
        </div>
    );
}

function StatCard({
    icon,
    value,
    label,
}: {
    icon: React.ReactNode;
    value: string;
    label: string;
}) {
    return (
        <div className="rounded-3xl border border-border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sea/10 text-sea">
                {icon}
            </div>

            <p className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-dark-cerulean">
                {value}
            </p>

            <p className="mt-2 text-sm text-muted">
                {label}
            </p>

        </div>
    );
}