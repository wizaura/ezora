import Image from "next/image";
import Link from "next/link";
import { Users, ArrowUpRight } from "lucide-react";
import { corporateFleetOptions } from "@/data/corporate-fleet-options";

export default function CorporateFleetShowcase() {
  return (
    <section className="bg-surface-soft py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="mb-10 lg:mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-sea" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-greenish-blue">
              Fleet Available for Lease
            </p>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-dark-cerulean md:text-4xl lg:text-5xl">
            Premium Corporate Fleet
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Our corporate fleet includes executive sedans and premium people-movers, all meticulously maintained to ensure safe and comfortable business travel.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {corporateFleetOptions.map((vehicle) => (
            <Link
              key={vehicle.id}
              href="/fleet"
              className="group flex flex-col overflow-hidden rounded-[24px] border border-border bg-white transition-all duration-300 hover:shadow-lg hover:border-sea/30"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/5">
                <Image
                  src={vehicle.featuredImage}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-dark-cerulean backdrop-blur-md">
                    {vehicle.categoryName}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-semibold text-dark-cerulean transition-colors group-hover:text-sea">
                  {vehicle.name}
                </h3>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted">
                    <Users size={16} className="text-greenish-blue" />
                    {vehicle.seatingCapacity}
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors group-hover:border-sea group-hover:bg-sea group-hover:text-white">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
