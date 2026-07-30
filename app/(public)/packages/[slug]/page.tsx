import { Metadata } from "next";
import { notFound } from "next/navigation";

import PageHero from "@/components/common/PageHero";
import PackageDetailView from "@/components/packages/details/PackageDetailsView";
import { packageService } from "@/services/package.service";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const pkg = await packageService.findBySlug(slug);

  if (!pkg) {
    return {
      title: "Package Not Found",
    };
  }

  return {
    title: `${pkg.title} | Ezora Tours`,
    description: pkg.shortDescription,
    openGraph: {
      title: pkg.title,
      description: pkg.shortDescription,
      images: [
        pkg.images[0]?.imageUrl ||
          "/images/placeholders/package.jpg",
      ],
    },
  };
}

export default async function PackagePage({
  params,
}: Props) {
  const { slug } = await params;

  const pkg = await packageService.findBySlug(slug);

  if (!pkg) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Kerala Tour Package"
        title={pkg.title}
        highlightedTitle="Experience"
        description={pkg.shortDescription}
        image={
          pkg.images[0]?.imageUrl ||
          "/images/placeholders/package.jpg"
        }
        imageAlt={pkg.title}
        breadcrumbs={[
          {
            label: "Packages",
            href: "/packages",
          },
          {
            label: pkg.title,
          },
        ]}
      />

      <PackageDetailView package={pkg} />
    </>
  );
}