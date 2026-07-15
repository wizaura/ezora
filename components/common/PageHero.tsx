import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlightedTitle?: string;
  description?: string;
  image: string;
  imageAlt: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
  imagePosition?: string;
};

export default function PageHero({
  eyebrow,
  title,
  highlightedTitle,
  description,
  image,
  imageAlt,
  breadcrumbs,
  children,
  imagePosition = "object-center",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[580px] overflow-hidden bg-dark-cerulean sm:min-h-[620px] lg:min-h-[680px]">
      {/* Background Image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className={`object-cover ${imagePosition}`}
        sizes="100vw"
      />

      {/* Base Overlay */}
      <div className="absolute inset-0 bg-dark-cerulean/30" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-cerulean/85 via-dark-cerulean/55 to-dark-cerulean/10" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-dark-cerulean/75 via-dark-cerulean/20 to-transparent" />

      {/* Subtle Top Gradient for Navbar */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/30 to-transparent" />

      {/* Decorative Glow */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-sea/10 blur-[150px]"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[580px] max-w-[1440px] flex-col justify-end px-5 pb-12 pt-36 sm:min-h-[620px] sm:pb-14 lg:min-h-[680px] lg:px-8 lg:pb-16">
        <div className="max-w-5xl">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="mb-7 flex flex-wrap items-center gap-2"
            >
              <Link
                href="/"
                className="text-xs font-medium text-white/55 transition-colors duration-300 hover:text-white"
              >
                Home
              </Link>

              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                  <div
                    key={`${item.label}-${index}`}
                    className="flex items-center gap-2"
                  >
                    <ChevronRight
                      size={13}
                      strokeWidth={1.8}
                      className="text-white/30"
                    />

                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="text-xs font-medium text-white/55 transition-colors duration-300 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-xs font-medium text-white/80">
                        {item.label}
                      </span>
                    )}
                  </div>
                );
              })}
            </nav>
          )}

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-light-sea-green" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-light-sea-green">
              {eyebrow}
            </p>
          </div>

          {/* Heading */}
          <h1 className="max-w-[1000px] text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white">
            {title}

            {highlightedTitle && (
              <span className="block text-white/60">
                {highlightedTitle}
              </span>
            )}
          </h1>

          {/* Description */}
          {description && (
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              {description}
            </p>
          )}

          {/* Optional Custom Content */}
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}