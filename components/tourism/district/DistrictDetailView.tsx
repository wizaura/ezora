import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

import { DistrictTourismGuide } from "@/types/tourism.type";
import { KeralaDistricts } from "@/data/kerala-districts";

type DistrictDetailViewProps = {
  district: KeralaDistricts;
  attractions: DistrictTourismGuide[];
};

export default function DistrictDetailView({
  district,
  attractions,
}: DistrictDetailViewProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-8 lg:py-24">
        <div className="mb-12 flex items-center gap-3">
          <span className="h-px w-10 bg-sea" />
          <h2 className="text-3xl font-semibold tracking-tight text-dark-cerulean">
            Top Attractions
          </h2>
        </div>

        {attractions.length === 0 ? (
          <div className="rounded-3xl bg-surface-soft py-16 text-center">
            <h3 className="text-2xl font-semibold text-dark-cerulean">
              No attractions found
            </h3>
            <p className="mt-2 text-muted">
              Attractions for {district.name} will be added soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {attractions.map((attraction) => (
              <Link
                key={attraction.id}
                href={`/kerala-tourism/${district.slug}/${attraction.slug}`}
                className="group overflow-hidden rounded-[24px] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted/10">
                  {attraction.featuredImage ? (
                    <Image
                      src={attraction.featuredImage}
                      alt={attraction.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-surface-soft text-muted">
                      No Image
                    </div>
                  )}
                </div>

                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-dark-cerulean transition-colors group-hover:text-sea">
                      {attraction.title}
                    </h3>

                    {attraction.address && (
                      <div className="mt-2 flex items-center gap-2 text-sm text-muted">
                        <MapPin size={15} />
                        <span className="line-clamp-1">
                          {attraction.address}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="line-clamp-3 text-sm leading-relaxed text-muted">
                    {attraction.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    {attraction.category && (
                      <span className="rounded-full bg-surface-soft px-3 py-1 text-xs font-medium text-greenish-blue">
                        {attraction.category.name}
                      </span>
                    )}

                    {attraction.duration && (
                      <span className="text-xs text-muted">
                        {attraction.duration}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}