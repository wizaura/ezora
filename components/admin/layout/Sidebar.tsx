"use client";

import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { adminMenu } from "./menu";

export default function Sidebar() {
  return (
    <aside className="hidden h-screen w-72 shrink-0 border-r bg-white lg:flex lg:flex-col">

      {/* Logo */}

      <div className="border-b px-8 py-2">

        <Image
          src="/images/logos/logo-2.png"
          alt="Ezora"
          width={180}
          height={50}
          className="h-16 w-auto"
        />

      </div>

      {/* Navigation */}

      <div className="flex-1 space-y-2 overflow-y-auto px-4 py-6">

        {adminMenu.map((item) => (
          <SidebarItem
            key={item.href}
            {...item}
          />
        ))}

      </div>

      {/* User */}

      <div className="border-t p-5">

        <div className="rounded-2xl bg-slate-100 p-4">

          <p className="font-semibold">
            Melbin Mathew
          </p>

          <p className="text-sm text-slate-500">
            Administrator
          </p>

        </div>

      </div>

    </aside>
  );
}