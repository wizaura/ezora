import KeralaToursHero from "@/components/kerala-tours/KeralaToursHero";
import PackageGrid from "@/components/kerala-tours/PackageGrid";
import DistrictExplorer from "@/components/kerala-tours/DistrictExplorer";

import WhyChooseEzoraSection from "@/components/home/WhyChooseUsSection";
import { tourPackages } from "@/data/kerala-packages";
import { keralaDistricts } from "@/data/kerala-districts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kerala Tour Packages | Honeymoon, Family & Backwater Tours",
  description: "Discover the magic of God's Own Country with Ezora's curated Kerala itineraries, premium vehicles, and local expertise.",
};

export default function KeralaToursPage() {
  return (
    <>
      <KeralaToursHero />
      
      {/* Intro Strip */}
      <div className="bg-dark-cerulean py-6 text-center shadow-inner">
        <p className="mx-auto max-w-4xl px-5 text-sm font-medium tracking-wide text-white/90 sm:text-base lg:text-lg">
          Combine your chauffeur-driven premium fleet with a curated Kerala itinerary for an effortless travel experience.
        </p>
      </div>

      <PackageGrid packages={tourPackages} />
      
      <DistrictExplorer districts={keralaDistricts} />
      
      {/* Why Book with Ezora */}
      <WhyChooseEzoraSection />

    </>
  );
}
