"use client";

import {
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b bg-white px-8">

      {/* Left */}

      <div>

        <h2 className="text-xl font-bold">
          Dashboard
        </h2>

        <p className="text-sm text-slate-500">
          Welcome back 👋
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="hidden items-center rounded-xl border px-4 lg:flex">

          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            placeholder="Search..."
            className="w-64 border-none bg-transparent px-3 py-3 outline-none"
          />

        </div>

        {/* Notification */}

        <button className="relative rounded-xl border p-3 hover:bg-slate-50">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

        </button>

        {/* Profile */}

        <button className="flex items-center gap-3 rounded-xl border px-3 py-2 hover:bg-slate-50">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-cerulean text-white">

            M

          </div>

          <div className="hidden text-left lg:block">

            <p className="font-medium">
              Melbin
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>

          </div>

          <ChevronDown size={18} />

        </button>

      </div>

    </header>
  );
}