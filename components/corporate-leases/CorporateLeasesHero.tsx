import PageHero from "@/components/common/PageHero";

export default function CorporateLeasesHero() {
  return (
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
  );
}
