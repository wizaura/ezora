import {
  CarFront,
  Package,
  Newspaper,
  Mail,
} from "lucide-react";

import StatCard from "./StatCard";

export default function DashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Vehicles"
        value={0}
        change="+0 this month"
        icon={CarFront}
      />

      <StatCard
        title="Packages"
        value={0}
        change="+0 this month"
        icon={Package}
      />

      <StatCard
        title="Blogs"
        value={0}
        change="+0 this month"
        icon={Newspaper}
      />

      <StatCard
        title="Enquiries"
        value={0}
        change="+0 today"
        icon={Mail}
      />
    </div>
  );
}