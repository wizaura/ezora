import { tourPackages } from "@/data/kerala-packages";
import PackageDetailView from "@/components/kerala-tours/PackageDetailView";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const tourPackage = tourPackages.find((p) => p.slug === resolvedParams.slug);

  if (!tourPackage) {
    return {
      title: "Package Not Found",
    };
  }

  return {
    title: `${tourPackage.title} | Kerala Tour Packages`,
    description: `Book the ${tourPackage.duration} ${tourPackage.title}. Destinations covered: ${tourPackage.destinations.join(", ")}. Starting from ${tourPackage.price}.`,
  };
}

export default async function PackagePage({ params }: Props) {
  const resolvedParams = await params;
  const tourPackage = tourPackages.find((p) => p.slug === resolvedParams.slug);

  if (!tourPackage) {
    notFound();
  }

  return <PackageDetailView tourPackage={tourPackage} />;
}
