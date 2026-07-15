import { keralaDistricts } from "@/data/kerala-districts";
import DistrictDetailView from "@/components/kerala-tours/DistrictDetailView";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ district: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const districtData = keralaDistricts.find((d) => d.slug === resolvedParams.district);

  if (!districtData) {
    return {
      title: "District Not Found",
    };
  }

  return {
    title: `Explore ${districtData.name} | Kerala Destinations`,
    description: districtData.description,
  };
}

export default async function DistrictPage({ params }: Props) {
  const resolvedParams = await params;
  const districtData = keralaDistricts.find((d) => d.slug === resolvedParams.district);

  if (!districtData) {
    notFound();
  }

  return <DistrictDetailView district={districtData} />;
}
