// types/fleet.type.ts

export interface VehicleFeature {
    id: string;
    title: string;
    sortOrder: number;
}

export interface VehicleSpecification {
    id: string;
    label: string;
    value: string;
    sortOrder: number;
}

export interface VehicleImage {
    id: string;
    image: string;
    publicId: string;
    alt: string | null;
    sortOrder: number;
}

export interface Vehicle {
    id: string;

    categoryId: string;

    name: string;
    slug: string;

    tagline: string | null;

    shortDescription: string;
    description: string;

    featuredImage: string | null;
    featuredImagePublicId: string | null;

    heroImage: string | null;
    heroImagePublicId: string | null;

    seatingCapacity: string;
    luggageCapacity: string;

    airConditioning: string | null;
    transmission: string | null;
    fuelType: string | null;

    chauffeurDriven: boolean;

    whatsappMessage: string | null;

    isFeatured: boolean;
    isActive: boolean;

    sortOrder: number;

    seoTitle: string | null;
    seoDescription: string | null;

    createdAt: string;
    updatedAt: string;

    features: VehicleFeature[];
    specifications: VehicleSpecification[];
    gallery: VehicleImage[];
}

export interface FleetCategory {
    id: string;

    name: string;
    slug: string;

    eyebrow: string | null;

    shortDescription: string;
    description: string;

    featuredImage: string | null;
    featuredImagePublicId: string | null;

    isFeatured: boolean;
    isActive: boolean;

    sortOrder: number;

    seoTitle: string | null;
    seoDescription: string | null;

    createdAt: string;
    updatedAt: string;

    vehicles: Vehicle[];
}