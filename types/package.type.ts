import { PackageStatus } from "@prisma/client";

export interface PackageFilters {
  page?: number;
  limit?: number;
  search?: string;
  status?: PackageStatus;
  featured?: boolean;
}

export interface CreatePackagePayload {
  title: string;
  slug: string;

  shortDescription: string;
  description: string;

  location: string;

  duration: string;
  days: number;
  nights: number;

  startingPrice: number;

  featured?: boolean;
  status?: PackageStatus;

  itinerary?: unknown;
  highlights?: unknown;
  inclusions?: unknown;
  exclusions?: unknown;
  faqs?: unknown;
}

export interface PackageImage {
  id: string;
  imageUrl: string;
  publicId: string | null;
  alt: string | null;
  order: number;
}

export interface PackageItineraryItem {
  title: string;
  description: string;
}

export interface PackageFaq {
  question: string;
  answer: string;
}

export interface PackageDetails {
  itinerary: PackageItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  highlights: string[];
  faqs: PackageFaq[];
}

export interface PackageCard {
  id: string;

  title: string;
  slug: string;

  shortDescription: string;

  location: string;

  duration: string;
  days: number;
  nights: number;

  startingPrice: number;

  featured: boolean;

  images: PackageImage[];
}

export interface PackageDetail extends PackageCard {
  description: string;

  details: PackageDetails | null;
}

export interface UpdatePackagePayload
  extends Partial<CreatePackagePayload> {}