import PageHero from "@/components/common/PageHero";

export default function KeralaToursHero() {
  return (
    <PageHero
      eyebrow="Kerala Tour Packages"
      title="Discover the Magic of Kerala"
      highlightedTitle="with Ezora."
      description="Experience the beauty of God's Own Country with our tailored itineraries, premium chauffeur-driven vehicles, and local expertise for a truly unforgettable holiday."
      image="/images/home/why-4.svg"
      imageAlt="Beautiful backwaters of Kerala"
      breadcrumbs={[
        {
          label: "Kerala Tour Packages",
        },
      ]}
    />
  );
}
