export interface VehicleTableItem {
    id: string;
    name: string;
    slug: string;

    featuredImage?: string | null;

    seatingCapacity: string;
    luggageCapacity: string;

    isFeatured: boolean;
    isActive: boolean;

    sortOrder: number;

    category: {
        id: string;
        name: string;
    };
}

export interface Vehicle {
    id: string;

    categoryId: string;

    name: string;
    slug: string;

    tagline: string;

    shortDescription: string;
    description: string;

    featuredImage?: string | null;
    featuredImagePublicId?: string | null;

    heroImage?: string | null;
    heroImagePublicId?: string | null;

    seatingCapacity: string;
    luggageCapacity: string;

    airConditioning: string;
    transmission: string;
    fuelType: string;

    chauffeurDriven: boolean;

    whatsappMessage: string;

    isFeatured: boolean;
    isActive: boolean;

    sortOrder: number;

    seoTitle?: string;
    seoDescription?: string;

    features: VehicleFeature[];
    specifications: VehicleSpecification[];
    gallery: VehicleImage[];

    createdAt: string;
    updatedAt: string;

    category: {
        id: string;
        name: string;
    };
}

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

    alt?: string | null;

    sortOrder: number;
}