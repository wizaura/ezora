"use client";

import Link from "next/link";
import { Menu, MessageCircle, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
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
        label: "Kerala Tours",
        href: "/kerala-tour-packages",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/95 shadow-[0_8px_30px_rgba(6,47,76,0.08)] backdrop-blur-xl"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
                <nav
                    className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? "h-20" : "h-24"
                        }`}
                >
                    {/* Logo */}
                    <Link href="/" className="relative z-50 inline-flex items-center">
                        <div className="relative h-[180px] w-[200px]">
                            <Image
                                src="/images/logos/logo-2.png"
                                alt="Ezora Tours & Travels"
                                fill
                                priority
                                className={`object-contain object-left transition-opacity duration-500 ${isScrolled && !isOpen ? "opacity-0" : "opacity-100"
                                    }`}
                            />

                            <Image
                                src="/images/logos/logo-1.png"
                                alt=""
                                fill
                                aria-hidden="true"
                                className={`object-contain object-left transition-opacity duration-500 ${isScrolled && !isOpen ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-7 xl:flex">
                        {navLinks.map((link) => {
                            const active = isActive(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative py-2 text-sm font-medium transition-colors duration-300 ${isScrolled
                                        ? active
                                            ? "text-dark-cerulean"
                                            : "text-dark-grey-blue hover:text-accent"
                                        : active
                                            ? "text-white"
                                            : "text-white/70 hover:text-white"
                                        }`}
                                >
                                    {link.label}

                                    <span
                                        className={`absolute inset-x-0 -bottom-0.5 mx-auto h-px bg-light-sea-green transition-all duration-300 ${active ? "w-full opacity-100" : "w-0 opacity-0"
                                            }`}
                                    />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-3 lg:flex">
                        <a
                            href="#"
                            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${isScrolled
                                ? "border-border text-dark-cerulean hover:border-sea hover:bg-sea/10"
                                : "border-white/20 text-white hover:border-white/40 hover:bg-white/10"
                                }`}
                            aria-label="Chat on WhatsApp"
                        >
                            <MessageCircle size={18} strokeWidth={1.8} />
                        </a>

                        <Link
                            href="/quick-quote"
                            className="group flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-light-sea-green"
                        >
                            Get Quick Quote

                            <ArrowUpRight
                                size={16}
                                strokeWidth={2}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${isOpen
                            ? "border-white/20 text-white hover:bg-white/10"
                            : isScrolled
                                ? "border-border text-dark-cerulean hover:border-sea hover:bg-sea/10"
                                : "border-white/20 text-white hover:bg-white/10"
                            }`}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`fixed inset-0 z-40 bg-dark-cerulean transition-all duration-500 lg:hidden ${isOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-4 opacity-0"
                    }`}
            >
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sea/20 blur-[100px]" />

                <div className="relative flex h-full flex-col px-5 pb-8 pt-32">
                    <nav className="flex flex-col">
                        {navLinks.map((link, index) => {
                            const active = isActive(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`group flex items-center justify-between border-b border-white/10 py-5 text-2xl font-medium tracking-[-0.03em] transition-colors ${active
                                        ? "text-light-sea-green"
                                        : "text-white hover:text-light-sea-green"
                                        }`}
                                >
                                    <span className="flex items-center gap-4">
                                        <span className="text-[10px] font-semibold tracking-normal text-white/35">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        {link.label}
                                    </span>

                                    <ArrowUpRight
                                        size={19}
                                        className="text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-light-sea-green"
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="mt-auto">
                        <Link
                            href="/quick-quote"
                            onClick={() => setIsOpen(false)}
                            className="flex h-14 items-center justify-center gap-2 rounded-full bg-accent px-6 font-semibold text-white transition-colors hover:bg-light-sea-green"
                        >
                            Get Quick Quote
                            <ArrowUpRight size={17} />
                        </Link>

                        <p className="mt-5 text-center text-xs text-white/40">
                            Premium chauffeur-driven travel across Kerala
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}