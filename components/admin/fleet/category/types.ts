export interface FleetCategoryTableItem {
    id: string;

    name: string;

    slug: string;

    eyebrow?: string | null;

    featuredImage?: string | null;

    isFeatured: boolean;

    isActive: boolean;

    sortOrder: number;

    _count: {
        vehicles: number;
    };
}

export interface FleetCategory {
    id: string;
    name: string;
    slug: string;
    eyebrow: string | null;
    shortDescription: string | null;
    description: string | null;

    featuredImage: string | null;
    featuredImagePublicId: string | null;

    seoTitle: string | null;
    seoDescription: string | null;

    isFeatured: boolean;
    isActive: boolean;
    sortOrder: number;

    createdAt: string;
    updatedAt: string;
}