import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>

          {change && (
            <p className="mt-2 text-sm text-emerald-600">
              {change}
            </p>
          )}
        </div>

        <div className="rounded-xl bg-dark-cerulean/10 p-3">
          <Icon
            className="text-dark-cerulean"
            size={24}
          />
        </div>
      </div>
    </div>
  );
}