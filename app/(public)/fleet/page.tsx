import PageHero from "@/components/common/PageHero";
import FleetFAQSection from "@/components/fleet/FleetFAQSection";
import FleetIntroductionSection from "@/components/fleet/FleetIntroductionSection";
import FleetRecommendationSection from "@/components/fleet/FleetRecommendationSection";
import FleetVehiclesSection from "@/components/fleet/FleetVehiclesSection";
import WhyChooseFleetSection from "@/components/fleet/WhyChooseFleetSection";
import { fleetCategories } from "@/data/fleet";
import { fleetFAQs } from "@/data/fleet-faqs";

export default function FleetPage() {

    const activeCategories = fleetCategories
        .filter((category) => category.isActive)
        .sort((a, b) => a.sortOrder - b.sortOrder);
    return (
        <>
            <PageHero
                eyebrow="Our Fleet"
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

            <FleetIntroductionSection categories={activeCategories} />
            <FleetVehiclesSection categories={activeCategories} />
            <FleetRecommendationSection categories={activeCategories} />
            <WhyChooseFleetSection />
            <FleetFAQSection faqs={fleetFAQs} />
        </>
    );
}