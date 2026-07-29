export interface TourismCategory {
    id: string;
    name: string;
    slug: string;

    description: string | null;

    icon: string | null;

    featuredImage: string | null;

    sortOrder: number;

    isActive: boolean;
}

export interface TourismGuideImage {
    id: string;

    image: string;
    imagePublicId: string;

    alt: string | null;

    sortOrder: number;
}

export interface TourismCategorySummary {
    id: string;
    name: string;
    slug: string;
}

export interface TourismGuideCard {
    id: string;

    title: string;
    slug: string;

    excerpt: string;

    featuredImage: string | null;

    district: string | null;

    bestTimeToVisit: string | null;

    duration: string | null;

    isFeatured: boolean;

    category: TourismCategorySummary;
}

export interface TourismGuideDetail {
    id: string;

    title: string;
    slug: string;

    excerpt: string;
    content: string;

    featuredImage: string | null;

    district: string | null;

    bestTimeToVisit: string | null;

    openingHours: string | null;

    entryFee: string | null;

    duration: string | null;

    address: string | null;

    latitude: number | null;

    longitude: number |null;

    mapUrl: string | null;

    tags: string[];

    isFeatured: boolean;

    category: TourismCategory;

    gallery: TourismGuideImage[];
}

export interface RelatedTourismGuide {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    featuredImage: string | null;
    district: string | null;
    category: TourismCategorySummary;
}

export interface TourismGuide {
    id: string;

    title: string;
    slug: string;

    excerpt: string;
    content: string;

    district: string | null;

    featuredImage: string | null;

    bestTimeToVisit: string | null;

    openingHours: string | null;

    entryFee: string | null;

    duration: string | null;

    address: string | null;

    latitude: number | null;

    longitude: number | null;

    mapUrl: string | null;

    tags: string[];

    isFeatured: boolean;

    category: TourismCategory;

    gallery: TourismGuideImage[];
}

export interface DistrictTourismGuide {
  id: string;
  title: string;
  slug: string;
  excerpt: string;

  featuredImage: string | null;

  address: string | null;
  duration: string | null;

  district: string | null;

  category: TourismCategorySummary | null;
}