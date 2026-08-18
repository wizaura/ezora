import { TourismDto } from "@/validators/tourism.validator";

export function toTourismFormData(
    guide: any
): TourismDto {

    return {
        title:
            guide.title ?? "",

        slug:
            guide.slug ?? "",

        categoryId:
            guide.categoryId ?? "",

        district:
            guide.district ?? undefined,

        excerpt:
            guide.excerpt ?? "",

        content:
            guide.content ?? "",

        featuredImage:
            guide.featuredImage ?? "",

        featuredImagePublicId:
            guide.featuredImagePublicId ?? "",

        gallery:
            (guide.gallery ?? []).map(
                (image: any) => ({
                    image:
                        image.image ?? "",

                    imagePublicId:
                        image.imagePublicId ?? "",

                    alt:
                        image.alt ?? "",

                    sortOrder:
                        image.sortOrder ?? 0,
                })
            ),

        latitude:
            guide.latitude != null
                ? Number(guide.latitude)
                : null,

        longitude:
            guide.longitude != null
                ? Number(guide.longitude)
                : null,

        address:
            guide.address ?? "",

        bestTimeToVisit:
            guide.bestTimeToVisit ?? "",

        openingHours:
            guide.openingHours ?? "",

        entryFee:
            guide.entryFee ?? "",

        duration:
            guide.duration ?? "",

        mapUrl:
            guide.mapUrl ?? "",

        tags:
            guide.tags ?? [],

        isFeatured:
            guide.isFeatured ?? false,

        isPublished:
            guide.isPublished ?? true,

        sortOrder:
            guide.sortOrder ?? 0,

        seoTitle:
            guide.seoTitle ?? "",

        seoDescription:
            guide.seoDescription ?? "",
    };
}