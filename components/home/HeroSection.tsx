import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-dark-cerulean">
            {/* Static Background */}
            <Image
                src="/images/home/hero.png"
                alt="Premium chauffeur-driven fleet rental in Kerala"
                fill
                priority
                className="object-cover"
                sizes="100vw"
            />

            {/* Animated Aurora */}
            <AuroraAnimation />

            {/* Dark overlays */}
            <div className="pointer-events-none absolute inset-0 z-[2] bg-dark-cerulean/10" />

            <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-dark-cerulean/90 via-dark-cerulean/35 to-transparent" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[45%] bg-gradient-to-t from-dark-cerulean/50 to-transparent" />

            {/* Hero Content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-center px-5 pb-16 pt-28 lg:px-8 lg:pt-32">
                <div className="max-w-[850px]">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-10 bg-light-sea-green" />

                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75 sm:text-sm">
                            Premium Chauffeur-Driven Mobility
                        </p>
                    </div>

                    <h1 className="max-w-[900px] text-[clamp(3.5rem,6.5vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white">
                        Travel Kerala
                        <span className="block text-white/65">
                            in exceptional comfort.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                        Premium chauffeur-driven car and luxury fleet rentals across Kerala for airport transfers,
                        corporate travel, intercity journeys and private tours.
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <Link
                            href="/fleet"
                            className="group inline-flex h-14 items-center gap-3 rounded-full bg-sea px-7 text-sm font-semibold text-white transition-all duration-300 hover:bg-light-sea-green"
                        >
                            Explore Our Fleet

                            <ArrowRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>

                        <Link
                            href="/quick-quote"
                            className="group inline-flex h-14 items-center gap-3 rounded-full border border-white/25 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                        >
                            Get Quick Quote

                            <ArrowRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute inset-x-0 bottom-0 z-20 hidden border-t border-white/10 lg:block">
                <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-5">
                    <div className="flex items-center gap-8">
                        <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">
                            Airport Transfers
                        </span>

                        <span className="h-1 w-1 rounded-full bg-light-sea-green" />

                        <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">
                            Intercity Travel
                        </span>

                        <span className="h-1 w-1 rounded-full bg-light-sea-green" />

                        <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">
                            Corporate Mobility
                        </span>
                    </div>

                    <Link
                        href="/contact"
                        className="group flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                    >
                        <MessageCircle size={16} />
                        Speak with our travel team
                    </Link>
                </div>
            </div>
        </section>
    );
}

function AuroraAnimation() {
    return (
        <div
            className="aurora-scene pointer-events-none absolute inset-0 z-[1] overflow-hidden"
            aria-hidden="true"
        >
            <div className="aurora-curtain aurora-curtain-1" />
            <div className="aurora-curtain aurora-curtain-2" />
            <div className="aurora-curtain aurora-curtain-3" />
            <div className="aurora-curtain aurora-curtain-4" />

            <div className="aurora-pulse aurora-pulse-1" />
            <div className="aurora-pulse aurora-pulse-2" />
        </div>
    );
}