import PageHero from "@/components/common/PageHero";
import RentalEnquiryForm from "@/components/rental-services/RentalEnquiryForm";
import RentalProcessSection from "@/components/rental-services/RentalProcessSection";

export default function RentalServices() {
    return (
        <div>
            <PageHero
                eyebrow="Our Rental Services"
                title="Premium vehicles."
                highlightedTitle="Exceptional journeys."
                description="Discover our chauffeur-driven fleet of luxury passenger vans, premium Force Travellers and executive sedans, selected for comfort, reliability and seamless travel across Kerala."
                image="/images/fleet/hero-1.jpg"
                imageAlt="Premium chauffeur-driven vehicle fleet in Kerala by Ezora Tours and Travels"
                breadcrumbs={[
                    {
                        label: "Our Fleet",
                    },
                ]}
            />
            <RentalEnquiryForm />
            <RentalProcessSection />
        </div>
    )
}