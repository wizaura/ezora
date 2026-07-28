import PageHero from "@/components/common/PageHero";
import ContactEnquirySection from "@/components/contact/EnquirySection";
import ContactFAQSection from "@/components/contact/FAQSection";
import ContactOptions from "@/components/contact/Info";
import ServiceCoverageSection from "@/components/contact/ServiceCoverage";
import WhyChooseEzoraSection from "@/components/contact/WhyChoose";

export default function ContactPage() {
    return (
        <div>
            <PageHero
                eyebrow="Get In Touch"
                title="Let's plan your"
                highlightedTitle="next journey."
                description="Whether you need an airport transfer, a customised Kerala tour, premium vehicle rental, or corporate travel solutions, our team is ready to assist you with quick responses and personalised service."
                image="/images/contact/hero.jpg"
                imageAlt="Ezora Tours customer support helping travellers plan their journey"
                breadcrumbs={[
                    {
                        label: "Contact Us",
                    },
                ]}
            />
            <ContactOptions />
            <ContactEnquirySection />
            <WhyChooseEzoraSection />
            <ServiceCoverageSection />
            <ContactFAQSection />
        </div>
    )
}