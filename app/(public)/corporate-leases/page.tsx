import LeasePlanGrid from "@/components/corporate-leases/LeasePlanGrid";
import CorporateFleetShowcase from "@/components/corporate-leases/CorporateFleetShowcase";
import WhyCorporatePartners from "@/components/corporate-leases/WhyCorporatePartners";
import CorporateLeaseEnquiryForm from "@/components/corporate-leases/CorporateLeaseEnquiryForm";
import { Metadata } from "next";
import PageHero from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Corporate Vehicle Lease Kerala | B2B Fleet Rentals | Ezora Tours",
  description: "Reliable, long-term corporate vehicle leases and dedicated chauffeur services across Kerala. Monthly, quarterly, and yearly fleet partnerships available.",
};

export default function CorporateLeasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Leases"
        title="Dedicated Fleet & Chauffeur"
        highlightedTitle="Solutions for Businesses."
        description="Reliable, long-term transport solutions designed for business parks, hospitality partners, and corporate delegations across Kerala."
        image="/images/home/why-1.png"
        imageAlt="Corporate fleet vehicles lined up"
        breadcrumbs={[
          {
            label: "Corporate Leases",
          },
        ]}
      />

      <LeasePlanGrid />

      <CorporateFleetShowcase />

      <WhyCorporatePartners />

      {/* Enquiry Section */}
      <CorporateLeaseEnquiryForm />
    </>
  );
}
