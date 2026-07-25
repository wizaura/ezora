export interface Package {
    id: string;
    title: string;
    location: string;
    duration: string;
    startingPrice: string;
    featured: boolean;
    status: "DRAFT" | "PUBLISHED";
    images: {
        imageUrl: string;
    }[];
}

export interface PackageListResponse {
    success: boolean;
    data: {
        items: Package[];
    };
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

export async function getPackages(
    params?: Record<string, string | number | boolean>
): Promise<PackageListResponse> {
    const query = new URLSearchParams();

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                query.append(key, String(value));
            }
        });
    }

    const res = await fetch(`/api/admin/packages?${query.toString()}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch packages.");
    }

    return res.json();
}