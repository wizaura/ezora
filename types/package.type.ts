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

    itinerary?: any;
    highlights?: any;
    inclusions?: any;
    exclusions?: any;
    faqs?: any;
}

export interface UpdatePackagePayload
    extends Partial<CreatePackagePayload> {}