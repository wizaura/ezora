import PageHero from "@/components/common/PageHero";
import RentalEnquiryForm from "@/components/rental-services/RentalEnquiryForm";
import RentalProcessSection from "@/components/rental-services/RentalProcessSection";

export default function RentalServices() {
    return (
        <div>
            <PageHero
                eyebrow="Rental Services"
                title="Reliable rides."
                highlightedTitle="Every destination."
                description="Travel across Kerala with Ezora's chauffeur-driven rental services. From airport transfers and city rides to corporate travel, outstation trips, and customised itineraries, enjoy comfortable vehicles, professional drivers, and transparent pricing with instant online quotations."
                image="/images/fleet/hero-1.jpg"
                imageAlt="Chauffeur-driven rental services across Kerala by Ezora Tours and Travels"
                breadcrumbs={[
                    {
                        label: "Rental Services",
                    },
                ]}
            />
            <RentalEnquiryForm />
            <RentalProcessSection />
        </div>
    )
}