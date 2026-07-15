import Image from "next/image";
import { KeralaDistrict } from "@/data/kerala-districts";
import { Plane, Train, MapPin } from "lucide-react";

type DistrictDetailViewProps = {
  district: KeralaDistrict;
};

export default function DistrictDetailView({ district }: DistrictDetailViewProps) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-dark-cerulean lg:h-[70vh]">
        <Image
          src={district.heroImage}
          alt={district.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark-cerulean/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-cerulean/90 via-dark-cerulean/20 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto flex max-w-[1440px] flex-col justify-end px-5 pb-12 pt-32 lg:px-8 lg:pb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-light-sea-green" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-light-sea-green">
              Kerala Districts
            </p>
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.03em] text-white lg:text-7xl">
            {district.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {district.description}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-8 lg:py-24">
        {/* Travel Info Box */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-[24px] bg-surface-soft p-6 lg:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-sea shadow-sm">
              <MapPin size={22} />
            </div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-greenish-blue">Best Time To Visit</h3>
            <p className="font-medium text-dark-cerulean">{district.travelInfo.bestTimeToVisit}</p>
          </div>
          <div className="rounded-[24px] bg-surface-soft p-6 lg:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-sea shadow-sm">
              <Plane size={22} />
            </div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-greenish-blue">Nearest Airport</h3>
            <p className="font-medium text-dark-cerulean">{district.travelInfo.nearestAirport}</p>
          </div>
          <div className="rounded-[24px] bg-surface-soft p-6 lg:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-sea shadow-sm">
              <Train size={22} />
            </div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-greenish-blue">How To Reach</h3>
            <p className="font-medium text-dark-cerulean">{district.travelInfo.howToReach}</p>
          </div>
        </div>

        {/* Attractions */}
        <div className="mb-12 flex items-center gap-3">
          <span className="h-px w-10 bg-sea" />
          <h2 className="text-3xl font-semibold tracking-tight text-dark-cerulean">Top Attractions</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {district.touristAttractions.map((attraction, index) => (
            <div key={index} className="group overflow-hidden rounded-[24px] border border-border">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/10">
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-dark-cerulean">{attraction.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
