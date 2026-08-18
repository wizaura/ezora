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

    /* ---------------------------------------------------------------------- */
    /* General Information                                                    */
    /* ---------------------------------------------------------------------- */

    name: string;
    slug: string;

    tagline: string;

    shortDescription: string;
    description: string;


    /* ---------------------------------------------------------------------- */
    /* Images                                                                  */
    /* ---------------------------------------------------------------------- */

    featuredImage?: string | null;
    featuredImagePublicId?: string | null;

    heroImage?: string | null;
    heroImagePublicId?: string | null;


    /* ---------------------------------------------------------------------- */
    /* Capacity                                                                */
    /* ---------------------------------------------------------------------- */

    seatingCapacity: string;
    luggageCapacity: string;


    /* ---------------------------------------------------------------------- */
    /* Customer / Market Tariff                                                */
    /* ---------------------------------------------------------------------- */

    customerBaseRate: number;

    customerBaseKm: number;

    customerExtraKmRate: number;

    customerDriverBata: number;

    customerOvertimeRate: number;


    /* ---------------------------------------------------------------------- */
    /* Ezora B2B / Procurement Rate                                             */
    /* ---------------------------------------------------------------------- */

    b2bBaseRate: number;

    b2bBaseKm: number;

    b2bExtraKmRate: number;

    b2bDriverBata: number;

    b2bOvertimeRate: number;


    /* ---------------------------------------------------------------------- */
    /* Operating Rules                                                         */
    /* ---------------------------------------------------------------------- */

    dutyStartTime: string;

    dutyEndTime: string;

    fuelIncluded: boolean;

    tollTreatment: CommercialTreatment;

    parkingTreatment: CommercialTreatment;

    ferryTreatment: CommercialTreatment;

    driverAccommodationTreatment: CommercialTreatment;


    /* ---------------------------------------------------------------------- */
    /* Vehicle Specifications                                                  */
    /* ---------------------------------------------------------------------- */

    airConditioning: string;

    transmission: string;

    fuelType: string;

    chauffeurDriven: boolean;


    /* ---------------------------------------------------------------------- */
    /* WhatsApp                                                                 */
    /* ---------------------------------------------------------------------- */

    whatsappMessage: string;


    /* ---------------------------------------------------------------------- */
    /* Status                                                                   */
    /* ---------------------------------------------------------------------- */

    isFeatured: boolean;

    isActive: boolean;

    sortOrder: number;


    /* ---------------------------------------------------------------------- */
    /* SEO                                                                      */
    /* ---------------------------------------------------------------------- */

    seoTitle?: string;

    seoDescription?: string;


    /* ---------------------------------------------------------------------- */
    /* Relations                                                                */
    /* ---------------------------------------------------------------------- */

    features: VehicleFeature[];

    specifications: VehicleSpecification[];

    gallery: VehicleImage[];


    /* ---------------------------------------------------------------------- */
    /* Timestamps                                                               */
    /* ---------------------------------------------------------------------- */

    createdAt: string;

    updatedAt: string;


    /* ---------------------------------------------------------------------- */
    /* Category                                                                 */
    /* ---------------------------------------------------------------------- */

    category: {
        id: string;
        name: string;
    };
}


/* ========================================================================== */
/* Commercial Treatment                                                       */
/* ========================================================================== */

export type CommercialTreatment =
    | "ACTUALS"
    | "INCLUDED"
    | "VENDOR"
    | "EZORA"
    | "CUSTOMER"
    | "NOT_APPLICABLE";

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