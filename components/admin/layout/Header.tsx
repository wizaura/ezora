"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Bell,
    Search,
    ChevronDown,
    LogOut,
    User,
    Settings,
} from "lucide-react";

export default function Header() {
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [loggingOut, setLoggingOut] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(
                    event.target as Node
                )
            ) {
                setOpen(false);
            }
        }

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

    async function handleLogout() {
        try {
            setLoggingOut(true);

            await fetch("/api/auth/logout", {
                method: "POST",
            });

            router.push("/login");
            router.refresh();
        } finally {
            setLoggingOut(false);
        }
    }

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

                {/* Notifications */}

                <button className="relative rounded-xl border p-3 transition hover:bg-slate-50">

                    <Bell size={20} />

                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

                </button>

                {/* Profile */}

                <div
                    className="relative"
                    ref={dropdownRef}
                >

                    <button
                        onClick={() =>
                            setOpen((prev) => !prev)
                        }
                        className="flex items-center gap-3 rounded-xl border px-3 py-2 transition hover:bg-slate-50"
                    >

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-cerulean font-semibold text-white">
                            E
                        </div>

                        <div className="hidden text-left lg:block">

                            <p className="font-medium">
                                Ezora Admin
                            </p>

                            <p className="text-xs text-slate-500">
                                Administrator
                            </p>

                        </div>

                        <ChevronDown
                            size={18}
                            className={`transition-transform ${
                                open
                                    ? "rotate-180"
                                    : ""
                            }`}
                        />

                    </button>

                    {open && (
                        <div className="absolute right-0 mt-3 w-60 overflow-hidden rounded-2xl border bg-white py-2 shadow-xl">

                            {/* <button
                                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-slate-50"
                            >
                                <User size={18} />

                                My Profile
                            </button>

                            <button
                                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-slate-50"
                            >
                                <Settings size={18} />

                                Settings
                            </button> */}

                            <div className="my-2 border-t" />

                            <button
                                onClick={handleLogout}
                                disabled={loggingOut}
                                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                            >
                                <LogOut size={18} />

                                {loggingOut
                                    ? "Logging out..."
                                    : "Logout"}
                            </button>

                        </div>
                    )}

                </div>

            </div>

        </header>
    );
}