import Image from "next/image";
import Link from "next/link";
import { KeralaDistrict } from "@/data/kerala-districts";
import { ArrowUpRight } from "lucide-react";

type DistrictExplorerProps = {
  districts: KeralaDistrict[];
};

export default function DistrictExplorer({ districts }: DistrictExplorerProps) {
  return (
    <section className="bg-surface-soft py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="mb-10 text-center lg:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-sea" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
              Discover Destinations
            </p>
            <span className="h-px w-10 bg-sea" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-dark-cerulean md:text-4xl lg:text-5xl">
            Explore Kerala by Destination
          </h2>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 scrollbar-hide lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0">
          {districts.map((district) => (
            <Link
              key={district.slug}
              href={`/kerala-tour-packages/districts/${district.slug}`}
              className="group relative flex h-72 w-[280px] shrink-0 snap-center flex-col justify-end overflow-hidden rounded-[24px] lg:h-80 lg:w-auto"
            >
              <Image
                src={district.heroImage}
                alt={district.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 1024px) 280px, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-cerulean/90 via-dark-cerulean/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              
              <div className="relative z-10 flex items-center justify-between p-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{district.name}</h3>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-sea group-hover:text-white">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
