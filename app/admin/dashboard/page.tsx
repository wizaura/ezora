import DashboardStats from "@/components/admin/dashboard/DashboardStats";
import RevenueChart from "@/components/admin/dashboard/RevenueChart";
import RecentBlogs from "@/components/admin/dashboard/RecentBlogs";
import RecentEnquiries from "@/components/admin/dashboard/RecentEnquiries";
import QuickActions from "@/components/admin/dashboard/QuickActions";
import PageHeader from "@/components/admin/shared/PageHeader";

export default function DashboardPage() {
    return (
        <div className="space-y-8">

            <PageHeader
                title="Dashboard"
                description="Welcome back."
            />

            <DashboardStats />

            <div className="grid gap-6 lg:grid-cols-3">

                <div className="lg:col-span-2">
                    <RevenueChart />
                </div>

                <QuickActions />

            </div>

            <div className="grid gap-6 lg:grid-cols-2">

                <RecentEnquiries />

                <RecentBlogs />

            </div>

        </div>
    );
}