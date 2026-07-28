"use client";

import { Search, Filter } from "lucide-react";

export default function BlogFilters() {
    return (
        <div
            className="
                rounded-3xl
                border
                border-border
                bg-white
                p-5
                shadow-sm
            "
        >
            <div className="grid gap-4 lg:grid-cols-[1fr_180px_180px_180px]">
                {/* Search */}

                <div className="relative">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                        type="text"
                        placeholder="Search blogs..."
                        className="
                            h-12
                            w-full

                            rounded-2xl

                            border
                            border-border

                            bg-background

                            pl-12
                            pr-4

                            outline-none

                            transition

                            focus:border-brand
                        "
                    />
                </div>

                {/* Category */}

                <select
                    className="
                        h-12

                        rounded-2xl

                        border
                        border-border

                        bg-background

                        px-4

                        outline-none

                        focus:border-brand
                    "
                >
                    <option>All Categories</option>
                    <option>Travel Guides</option>
                    <option>Kerala Tourism</option>
                    <option>Travel Tips</option>
                    <option>Destination Guides</option>
                    <option>News</option>
                </select>

                {/* Status */}

                <select
                    className="
                        h-12

                        rounded-2xl

                        border
                        border-border

                        bg-background

                        px-4

                        outline-none

                        focus:border-brand
                    "
                >
                    <option>All Status</option>
                    <option>Published</option>
                    <option>Draft</option>
                </select>

                {/* Sort */}

                <button
                    className="
                        flex
                        h-12
                        items-center
                        justify-center
                        gap-2

                        rounded-2xl

                        border
                        border-border

                        bg-background

                        font-medium

                        transition

                        hover:border-brand
                        hover:text-brand
                    "
                >
                    <Filter className="h-4 w-4" />

                    Sort
                </button>
            </div>
        </div>
    );
}