import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock3, MapPin } from "lucide-react";
import { PackageCard } from "@/types/package.type";

type Props = {
  package: PackageCard;
};

export default function PackageCardItem({ package: pkg }: Props) {
  const image =
    pkg.images?.[0]?.imageUrl || "/images/placeholders/package.jpg";

  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="group overflow-hidden rounded-[28px] border border-border bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-soft">
        <Image
          src={image}
          alt={pkg.images?.[0]?.alt || pkg.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {pkg.featured && (
          <span className="absolute left-5 top-5 rounded-full bg-light-sea-green px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow">
            Featured
          </span>
        )}
      </div>

      <div className="space-y-5 p-7">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{pkg.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={16} />
            <span>{pkg.duration}</span>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold leading-tight text-dark-cerulean transition-colors group-hover:text-sea">
            {pkg.title}
          </h3>

          <p className="mt-3 line-clamp-3 leading-relaxed text-muted">
            {pkg.shortDescription}
          </p>
        </div>

        <div className="flex items-end justify-between border-t border-border pt-5">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">
              Starting From
            </p>

            <p className="mt-1 text-3xl font-bold text-dark-cerulean">
              ₹{Number(pkg.startingPrice).toLocaleString("en-IN")}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-sea transition-all group-hover:translate-x-1">
            Explore
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
}