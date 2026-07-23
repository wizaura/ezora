"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface Props {
  href: string;
  title: string;
  icon: React.ElementType;
}

export default function SidebarItem({
  href,
  title,
  icon: Icon,
}: Props) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 rounded-xl px-4 py-3 transition-all",
        active
          ? "bg-dark-cerulean text-white"
          : "text-slate-600 hover:bg-slate-100"
      )}
    >
      <Icon size={20} />

      <span className="font-medium">
        {title}
      </span>
    </Link>
  );
}