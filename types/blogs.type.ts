export interface Blog {
    id: string;

    title: string;
    slug: string;

    excerpt: string;
    content: string;

    category: string;

    featuredImage: string | null;
    featuredImagePublicId: string | null;

    seoTitle: string | null;
    seoDescription: string | null;

    isPublished: boolean;

    createdAt: Date;
    updatedAt: Date;
}

export interface BlogCardType {
    id: string;

    title: string;
    slug: string;

    excerpt: string;

    category: string;

    featuredImage: string | null;

    createdAt: Date;
}