import { Metadata } from "next";
import { notFound } from "next/navigation";
import { KeralaDistrict as PrismaKeralaDistrict } from "@prisma/client";

import { keralaDistricts } from "@/data/kerala-districts";
import { tourismService } from "@/services/tourism.service";

import PageHero from "@/components/common/PageHero";
import DistrictDetailView from "@/components/tourism/district/DistrictDetailView";

type Props = {
  params: Promise<{ district: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { district } = await params;

  const districtData = keralaDistricts.find(
    (d) => d.slug === district
  );

  if (!districtData) {
    return {
      title: "District Not Found",
    };
  }

  return {
    title: `Explore ${districtData.name} | Kerala Tourism`,
    description: districtData.description,
  };
}

export default async function DistrictPage({ params }: Props) {
  const { district } = await params;

  const districtData = keralaDistricts.find(
    (d) => d.slug === district
  );

  if (!districtData) {
    notFound();
  }

  const attractions = await tourismService.findByDistrict(
    districtData.enum as PrismaKeralaDistrict
  );

  return (
    <>
      <PageHero
        eyebrow="Kerala Tourism"
        title={districtData.name}
        highlightedTitle="District Guide"
        description={districtData.description}
        image={districtData.heroImage}
        imageAlt={districtData.name}
        breadcrumbs={[
          {
            label: "Tourism",
            href: "/tourism",
          },
          {
            label: "Kerala Districts",
            href: "/tourism/districts",
          },
          {
            label: districtData.name,
          },
        ]}
      />

      <DistrictDetailView
        district={districtData}
        attractions={attractions}
      />
    </>
  );
}