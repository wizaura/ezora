"use client";

import Link from "next/link";
import { FolderTree, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import TourismTable from "./TourismTable";

export default function TourismMain() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Tourism Guides
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Manage tourism destinations, attractions and travel guides.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Link href="/admin/tourism/categories">
                        <Button variant="outline">
                            <FolderTree className="mr-2 h-4 w-4" />
                            Categories
                        </Button>
                    </Link>

                    <Link href="/admin/tourism/new">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Guide
                        </Button>
                    </Link>
                </div>
            </div>

            <TourismTable />
        </div>
    );
}