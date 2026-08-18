import { prisma } from "@/lib/prisma";

export class DashboardRepository {

    static async getDashboard() {

        const [
            totalVehicles,
            activeVehicles,

            totalPackages,
            publishedPackages,

            totalBlogs,
            publishedBlogs,

            totalTourismGuides,

            recentBlogs,
        ] = await Promise.all([

            /*
             * Vehicles
             */

            prisma.vehicle.count(),

            prisma.vehicle.count({
                where: {
                    isActive: true,
                },
            }),


            /*
             * Packages
             *
             * Change these fields if your package
             * model uses different names.
             */

            prisma.package.count(),

            prisma.package.count({
                where: {
                    status : "PUBLISHED",
                },
            }),


            /*
             * Blogs
             */

            prisma.blog.count(),

            prisma.blog.count({
                where: {
                    isPublished: true,
                },
            }),


            /*
             * Tourism
             */

            prisma.tourismGuide.count(),

            /*
             * Recent blogs
             */

            prisma.blog.findMany({
                orderBy: {
                    createdAt: "desc",
                },

                take: 5,

                select: {
                    id: true,
                    title: true,
                    slug: true,
                    featuredImage: true,
                    isPublished: true,
                    category: true,
                    createdAt: true,
                },
            }),
        ]);


        return {
            stats: {
                totalVehicles,
                activeVehicles,

                totalPackages,
                publishedPackages,

                totalBlogs,
                publishedBlogs,

                totalTourismGuides,
            },

            recentBlogs,
        };
    }
}