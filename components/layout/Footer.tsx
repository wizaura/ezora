import Link from "next/link";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";
import Image from "next/image";

const footerLinks = {
    explore: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Our Fleet",
            href: "/fleet",
        },
        {
            label: "Rental Services",
            href: "/rental-services",
        },
        {
            label: "Corporate Leases",
            href: "/corporate-leases",
        },
        {
            label: "Kerala Tour Packages",
            href: "/kerala-tour-packages",
        },
        {
            label: "Blog",
            href: "/blog",
        },
        {
            label: "Contact Us",
            href: "/contact",
        },
    ],

    fleet: [
        {
            label: "Force Urbania",
            href: "/fleet/force-urbania",
        },
        {
            label: "Force Traveller",
            href: "/fleet/force-traveller",
        },
        {
            label: "Executive Sedans",
            href: "/fleet/executive-sedans",
        },
        {
            label: "Airport Transfers",
            href: "/rental-services/airport-transfers",
        },
        {
            label: "Intercity Travel",
            href: "/rental-services/intercity-travel",
        },
        {
            label: "Hourly & Daily Rentals",
            href: "/rental-services/hourly-daily-rentals",
        },
    ],

    tours: [
        {
            label: "Kerala Honeymoon Packages",
            href: "/kerala-tour-packages/honeymoon",
        },
        {
            label: "Kerala Family Holidays",
            href: "/kerala-tour-packages/family",
        },
        {
            label: "Luxury Houseboat Escapes",
            href: "/kerala-tour-packages/houseboat",
        },
        {
            label: "Munnar Tours",
            href: "/kerala-tour-packages/munnar",
        },
        {
            label: "Thekkady Tours",
            href: "/kerala-tour-packages/thekkady",
        },
        {
            label: "Alleppey Tours",
            href: "/kerala-tour-packages/alleppey",
        },
    ],
};

const socialLinks = [
    {
        label: "Instagram",
        href: "#",
        icon: FaInstagram,
    },
    {
        label: "Facebook",
        href: "#",
        icon: FaFacebookF,
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="overflow-hidden bg-dark-cerulean text-white">
            {/* Main Footer */}
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
                {/* Top CTA */}
                <div className="grid gap-8 border-b border-white/15 py-12 lg:grid-cols-12 lg:items-center lg:py-16">
                    <div className="lg:col-span-7">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-px w-10 bg-light-sea-green" />

                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-light-sea-green">
                                Travel with Ezora
                            </p>
                        </div>

                        <h2 className="max-w-3xl text-[clamp(2.5rem,4.5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-white">
                            Your journey through Kerala
                            <span className="block text-white/50">
                                starts with a conversation.
                            </span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
                        <Link
                            href="/quick-quote"
                            className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-sea px-7 text-sm font-semibold text-white transition-colors duration-300 hover:bg-light-sea-green"
                        >
                            Get a Quick Quote

                            <ArrowUpRight
                                size={17}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </Link>

                        <a
                            href="#"
                            className="group inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white transition-all duration-300 hover:border-white/35 hover:bg-white/10"
                        >
                            <MessageCircle
                                size={18}
                                strokeWidth={1.8}
                                className="text-light-sea-green"
                            />

                            WhatsApp Us
                        </a>
                    </div>
                </div>

                {/* Main Footer Grid */}
                <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
                    {/* Brand Column */}
                    <div className="md:col-span-2 lg:col-span-4">
                        <Link href="/" className="inline-flex items-center">
                            <Image
                                src="/images/logos/logo-4.png"
                                alt="Ezora Tours & Travels"
                                width={200}
                                height={80}
                                className="h-auto w-[200px] sm:w-[240px]"
                            />
                        </Link>

                        <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
                            Premium chauffeur-driven fleet rentals, corporate mobility,
                            airport transfers, intercity journeys and customized Kerala
                            holidays — delivered with comfort, local expertise and dependable
                            support.
                        </p>

                        {/* Contact Details */}
                        <div className="mt-8 space-y-4">
                            <a
                                href="tel:+910000000000"
                                className="group flex items-start gap-3 text-sm text-white/65 transition-colors hover:text-white"
                            >
                                <Phone
                                    size={17}
                                    strokeWidth={1.7}
                                    className="mt-0.5 shrink-0 text-light-sea-green"
                                />

                                <span>+91 00000 00000</span>
                            </a>

                            <a
                                href="mailto:info@ezoratours.com"
                                className="group flex items-start gap-3 text-sm text-white/65 transition-colors hover:text-white"
                            >
                                <Mail
                                    size={17}
                                    strokeWidth={1.7}
                                    className="mt-0.5 shrink-0 text-light-sea-green"
                                />

                                <span>info@ezoratours.com</span>
                            </a>

                            <div className="flex items-start gap-3 text-sm leading-6 text-white/65">
                                <MapPin
                                    size={17}
                                    strokeWidth={1.7}
                                    className="mt-0.5 shrink-0 text-light-sea-green"
                                />

                                <span>
                                    Kerala, India
                                </span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8 flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/65 transition-all duration-300 hover:border-sea hover:bg-sea hover:text-white"
                                    >
                                        <Icon size={17} strokeWidth={1.8} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Explore */}
                    <FooterLinkColumn
                        title="Explore"
                        links={footerLinks.explore}
                        className="lg:col-span-2"
                    />

                    {/* Fleet & Rentals */}
                    <FooterLinkColumn
                        title="Fleet & Rentals"
                        links={footerLinks.fleet}
                        className="lg:col-span-3"
                    />

                    {/* Kerala Tours */}
                    <FooterLinkColumn
                        title="Kerala Tours"
                        links={footerLinks.tours}
                        className="lg:col-span-3"
                    />
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col gap-5 border-t border-white/15 py-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-5 text-white/40">
                        © {currentYear} Ezora Tours & Travels Kerala. All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <Link
                            href="/privacy-policy"
                            className="text-xs text-white/40 transition-colors hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms-and-conditions"
                            className="text-xs text-white/40 transition-colors hover:text-white"
                        >
                            Terms & Conditions
                        </Link>

                        <Link
                            href="/cancellation-policy"
                            className="text-xs text-white/40 transition-colors hover:text-white"
                        >
                            Cancellation Policy
                        </Link>
                    </div>
                </div>

                {/* Large Wordmark */}
                <div
                    className="pointer-events-none overflow-hidden pt-4"
                    aria-hidden="true"
                >
                    <p className="translate-y-[12%] whitespace-nowrap text-center text-[clamp(6rem,18vw,17rem)] font-bold leading-[1] tracking-[-0.040em] text-white/[0.045]">
                        EZORA
                    </p>
                </div>
            </div>
        </footer>
    );
}

type FooterLink = {
    label: string;
    href: string;
};

type FooterLinkColumnProps = {
    title: string;
    links: FooterLink[];
    className?: string;
};

function FooterLinkColumn({
    title,
    links,
    className = "",
}: FooterLinkColumnProps) {
    return (
        <div className={className}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-light-sea-green">
                {title}
            </p>

            <ul className="mt-6 space-y-3.5">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="group inline-flex items-center gap-2 text-sm leading-6 text-white/60 transition-colors duration-300 hover:text-white"
                        >
                            <span>{link.label}</span>

                            <ArrowUpRight
                                size={13}
                                className="translate-y-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0 group-hover:opacity-100"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}