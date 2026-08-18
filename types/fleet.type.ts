export interface VehicleFeature {
    id: string;
    vehicleId: string;
    title: string;
    sortOrder: number;
}

export interface VehicleSpecification {
    id: string;
    vehicleId: string;
    label: string;
    value: string;
    sortOrder: number;
}

export interface VehicleImage {
    id: string;
    vehicleId: string;
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

    // Customer pricing
    customerBaseRate: number;
    customerBaseKm: number;
    customerExtraKmRate: number;
    customerDriverBata: number;
    customerOvertimeRate: number;

    // Duty
    dutyStartTime: string;
    dutyEndTime: string;

    // Commercial
    fuelIncluded: boolean;

    tollTreatment: string;
    parkingTreatment: string;
    ferryTreatment: string;
    driverAccommodationTreatment: string;

    // Vehicle details
    airConditioning: string | null;
    transmission: string | null;
    fuelType: string | null;

    chauffeurDriven: boolean;

    whatsappMessage: string | null;

    // Publishing
    isFeatured: boolean;
    isActive: boolean;
    sortOrder: number;

    // SEO
    seoTitle: string | null;
    seoDescription: string | null;

    // Relations
    features: VehicleFeature[];
    specifications: VehicleSpecification[];
    gallery: VehicleImage[];
}


/*
|--------------------------------------------------------------------------
| Fleet Category
|--------------------------------------------------------------------------
*/

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

    vehicles: Vehicle[];
}


/*
|--------------------------------------------------------------------------
| Category Detail Vehicle
|--------------------------------------------------------------------------
*/

export interface FleetCategoryVehicle
    extends Vehicle {

    b2bBaseRate: number;
    b2bBaseKm: number;
    b2bExtraKmRate: number;
    b2bDriverBata: number;
    b2bOvertimeRate: number;
}


/*
|--------------------------------------------------------------------------
| Category Detail
|--------------------------------------------------------------------------
*/

export interface FleetCategoryDetail
    extends Omit<FleetCategory, "vehicles"> {

    vehicles: FleetCategoryVehicle[];
}


/*
|--------------------------------------------------------------------------
| Related Vehicle
|--------------------------------------------------------------------------
*/

export interface RelatedVehicle {
    id: string;
    name: string;
    slug: string;

    shortDescription: string;

    featuredImage: string | null;

    seatingCapacity: string;
    luggageCapacity: string;
}


/*
|--------------------------------------------------------------------------
| Select Options
|--------------------------------------------------------------------------
*/

export interface VehicleOption {
    id: string;
    name: string;
    slug: string;
}

export interface VehicleCategoryOption {
    id: string;
    name: string;
    slug: string;

    vehicles: VehicleOption[];
}