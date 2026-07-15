import CorporateLeasesHero from "@/components/corporate-leases/CorporateLeasesHero";
import LeasePlanGrid from "@/components/corporate-leases/LeasePlanGrid";
import CorporateFleetShowcase from "@/components/corporate-leases/CorporateFleetShowcase";
import WhyCorporatePartners from "@/components/corporate-leases/WhyCorporatePartners";
import CorporateLeaseEnquiryForm from "@/components/corporate-leases/CorporateLeaseEnquiryForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Vehicle Lease Kerala | B2B Fleet Rentals | Ezora Tours",
  description: "Reliable, long-term corporate vehicle leases and dedicated chauffeur services across Kerala. Monthly, quarterly, and yearly fleet partnerships available.",
};

export default function CorporateLeasesPage() {
  return (
    <>
      <CorporateLeasesHero />
      
      {/* Intro Strip */}
      <div className="bg-dark-cerulean py-6 text-center shadow-inner">
        <p className="mx-auto max-w-4xl px-5 text-sm font-medium tracking-wide text-white/90 sm:text-base lg:text-lg">
          The dependable B2B alternative to on-demand rentals. Scale your transport operations with dedicated resources.
        </p>
      </div>

      <LeasePlanGrid />
      
      <CorporateFleetShowcase />
      
      <WhyCorporatePartners />

      {/* Enquiry Section */}
      <section className="bg-surface-soft py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-border bg-white shadow-xl shadow-dark-cerulean/5">
            <div className="bg-dark-cerulean p-8 text-center sm:p-10">
              <h2 className="mb-3 text-3xl font-semibold text-white">Request a Custom B2B Quote</h2>
              <p className="text-sm text-white/80 sm:text-base">
                Tell us about your business requirements, and our corporate account managers will tailor a leasing structure for you.
              </p>
            </div>
            <div className="p-8 sm:p-10">
              <CorporateLeaseEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
