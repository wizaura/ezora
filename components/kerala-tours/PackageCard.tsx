import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { TourPackage } from "@/data/kerala-packages";

type PackageCardProps = {
  tourPackage: TourPackage;
};

export default function PackageCard({ tourPackage }: PackageCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-[24px] border border-border bg-white transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={tourPackage.images[0]}
          alt={tourPackage.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-dark-cerulean backdrop-blur-md">
            {tourPackage.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center gap-4 text-xs font-medium text-muted">
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-sea" />
            {tourPackage.duration}
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-sea" />
            {tourPackage.destinations.length} Destinations
          </div>
        </div>

        <h3 className="mb-3 text-xl font-semibold leading-tight text-dark-cerulean transition-colors group-hover:text-sea">
          <Link href={`/kerala-tour-packages/${tourPackage.slug}`}>
            <span className="absolute inset-0" />
            {tourPackage.title}
          </Link>
        </h3>

        <div className="mb-6 flex flex-wrap gap-2">
          {tourPackage.includes.slice(0, 2).map((include, index) => (
            <span key={index} className="rounded-md bg-surface-soft px-2.5 py-1 text-[11px] font-medium text-greenish-blue">
              {include}
            </span>
          ))}
          {tourPackage.includes.length > 2 && (
            <span className="rounded-md bg-surface-soft px-2.5 py-1 text-[11px] font-medium text-greenish-blue">
              +{tourPackage.includes.length - 2} more
            </span>
          )}
        </div>

        <div className="mt-auto flex items-end justify-between border-t border-border pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Starting from</p>
            <p className="text-lg font-bold text-dark-cerulean">{tourPackage.price}</p>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-dark-grey-blue transition-colors group-hover:border-sea group-hover:bg-sea group-hover:text-white">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
