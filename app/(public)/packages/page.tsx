import { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import PackageGrid from "@/components/packages/PackageGrid";
import { packageService } from "@/services/package.service";
import WhyChooseEzoraSection from "@/components/home/WhyChooseUsSection";

export const metadata: Metadata = {
    title: "Kerala Tour Packages | Ezora Tours",
    description:
        "Explore curated Kerala tour packages including hill stations, beaches, backwaters, wildlife, and honeymoon tours. Book your perfect Kerala holiday with Ezora Tours.",
};

export default async function PackagesPage() {
    const packages = await packageService.findPublished();

    return (
        <>
            <PageHero
                eyebrow="Travel Packages"
                title="Kerala"
                highlightedTitle="Tour Packages"
                description="Choose from our carefully crafted Kerala tour packages designed for families, couples, solo travellers, and groups. Experience the best of God's Own Country with comfortable transportation, expert guidance, and unforgettable memories."
                image="/images/packages/hero.jpg"
                imageAlt="Kerala Tour Packages"
                breadcrumbs={[
                    {
                        label: "Packages",
                    },
                ]}
            />
            <PackageGrid packages={packages} />

            <WhyChooseEzoraSection />

        </>
    );
}   