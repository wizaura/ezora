import CorporateLeasingSection from "@/components/home/CorporateLeasingSection";
import FleetSection from "@/components/home/FleetSection";
import HeroSection from "@/components/home/HeroSection";
import KeralaToursSection from "@/components/home/KeralaToursSection";
import LatestBlogsSection from "@/components/home/LatestBlogsSection";
import RentalServicesSection from "@/components/home/RentalServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseEzoraSection from "@/components/home/WhyChooseUsSection";

import { BlogService } from "@/services/blogs.service";

export default async function HomePage() {
  const latestBlogs = await BlogService.getLatestPublished(3);

  return (
    <>
      <HeroSection />

      <FleetSection />

      <RentalServicesSection />

      <CorporateLeasingSection />

      <KeralaToursSection />

      <WhyChooseEzoraSection />

      <TestimonialsSection />

      <LatestBlogsSection blogs={latestBlogs} />
    </>
  );
}