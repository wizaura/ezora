import CorporateLeasingSection from "@/components/home/CorporateLeasingSection";
import FleetSection from "@/components/home/FleetSection";
import HeroSection from "@/components/home/HeroSection";
import KeralaToursSection from "@/components/home/KeralaToursSection";
import LatestBlogsSection from "@/components/home/LatestBlogsSection";
import RentalServicesSection from "@/components/home/RentalServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseEzoraSection from "@/components/home/WhyChooseUsSection";

export default function HomePage() {
  return <>
    <HeroSection />
    <FleetSection />
    <RentalServicesSection />
    <CorporateLeasingSection />
    <KeralaToursSection />
    <WhyChooseEzoraSection />
    <TestimonialsSection />
    <LatestBlogsSection />
  </>
}