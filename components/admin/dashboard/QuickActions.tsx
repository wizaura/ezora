import Link from "next/link";
import {
  CarFront,
  Newspaper,
  Package,
  ArrowUpRight,
} from "lucide-react";

const actions = [
  {
    title: "Add Vehicle",
    href: "/admin/fleet/new",
    icon: CarFront,
  },
  {
    title: "Add Package",
    href: "/admin/packages/new",
    icon: Package,
  },
  {
    title: "Write Blog",
    href: "/admin/blogs/new",
    icon: Newspaper,
  },
  {
    title: "View Website",
    href: "/",
    icon: ArrowUpRight,
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-lg font-semibold">
        Quick Actions
      </h3>

      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="flex items-center gap-4 rounded-xl border p-4 transition hover:bg-slate-50"
            >
              <Icon
                size={20}
                className="text-dark-cerulean"
              />

              <span className="font-medium">
                {action.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}